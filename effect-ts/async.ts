import { Effect, pipe, Context, Ref } from "effect";

const loadData = (arg: number) => new Promise<number>(resolve => resolve(arg + 1))

class ValueState extends Context.Tag("ValueState")<ValueState, Ref.Ref<number>>() { }

const program = pipe(
    Effect.promise(() => loadData(42)),
    Effect.flatMap(value => Effect.gen(function* () {
        const state = yield* ValueState
        yield* Ref.update(state, () => value)
    })),
    Effect.andThen(Effect.sleep(2_000)),
    Effect.flatMap(() => Effect.gen(function* () {
        const state = yield* ValueState
        const value = yield* Ref.get(state) 

        console.log('value: ', value)

        return value as number
    })),
    Effect.flatMap(value => Effect.promise(() => loadData(value)))
);

const runnable = Effect.provideServiceEffect(program, ValueState, Ref.make(0))

Effect.runPromise(runnable);