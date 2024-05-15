import { Effect, pipe, Context, Ref } from "effect";

// error
class AppError {
    readonly _tag = 'AppError';
}
class AnotherError {
    readonly _tag = 'AnotherError';
}


// logic
const loadData = (arg: number) => new Promise<number>(resolve => {
    setTimeout(() => {
        resolve(arg + 1)
    }, 1000)
})

const fail = (arg: number) => new Promise<number>((resolve, reject) => {
    setTimeout(() => {
        reject(`error: ${arg}`);
    }, 1000)
})

const safeFail = (v: number) => Effect.fail(new AppError())

const raise = (arg: number) => new Promise<number>((resolve, reject) => {
    setTimeout(() => {
        throw new Error(`error: ${arg}`);
    }, 1000)
})

class ValueState extends Context.Tag("ValueState")<ValueState, Ref.Ref<number>>() { }

const program = pipe(
    Effect.promise(() => loadData(42)),
    Effect.flatMap(value => Effect.gen(function* () {
        const state = yield* ValueState
        yield* Ref.update(state, () => value)
    })),
    Effect.andThen(Effect.sleep(1_000)),
    Effect.flatMap(() => Effect.gen(function* () {
        const state = yield* ValueState
        const value = yield* Ref.get(state)

        return value as number
    })),
    Effect.flatMap(value => Effect.promise(() => loadData(value))),
    Effect.flatMap(value => Effect.promise(() => loadData(value))),
    Effect.map(value => Array(10).fill(value) as Array<number>),
    Effect.flatMap(list => Effect.all(list.map(item => Effect.promise(() => loadData(item)))))
);

const all = pipe(
    Effect.succeed([42, 43, 44] as const),
    Effect.tap(x => Effect.log(x, 'end')),
    Effect.flatMap(list =>
        Effect.all(
            list.map(item => Effect.promise(() => loadData(item))), { concurrency: 10 }
        )
    ),
    Effect.tap(x => Effect.log(x, 'end')),
)

const errors = pipe(
    Effect.succeed(0),
    Effect.flatMap((value) => Effect.promise(() => loadData(value))),
    Effect.tap(x => Effect.log(x, 'one')),
    Effect.flatMap(value => Effect.promise(() => loadData(value))),
    Effect.flatMap(value => safeFail(value)),
    Effect.catchTags({
        AppError: () => Effect.succeed(0)
    }),
    Effect.flatMap(value => Effect.promise(() => loadData(value))),
    Effect.tap(x => Effect.log(x, 'two')),

    Effect.flatMap(value => Effect.tryPromise(({
        try: () => fail(value),
        catch: () => (new AppError()),
    }))),
    Effect.catchTags({
        AppError: () => Effect.succeed(0)
    }),
    // Effect.catchAll(() => Effect.succeed(0)),
    Effect.tap(x => Effect.log(x, 'three')),

    // Effect.fail(new AppError()),
    // Effect.fail(new AnotherError()),
    // Effect.catchAll(e => Effect.succeed(0)),
    // Effect.tap(x => Effect.log(x, 'two')),
    // Effect.flatMap((value) => Effect.promise(() => loadData(value))), 
    // Effect.tap(x => Effect.log(x, 'three')),
)

const runnable = program.pipe(
    Effect.provideServiceEffect(ValueState, Ref.make(0)),
);

const runnable1 = all.pipe(
    Effect.provideServiceEffect(ValueState, Ref.make(0)),
);

const runnable2 = errors.pipe(
    Effect.provideServiceEffect(ValueState, Ref.make(0)),
);

Effect.runPromise(runnable2);