import { Effect, Context, Ref , pipe} from "effect"
 
// Create a Tag for our state
class MyState extends Context.Tag("MyState")<MyState, Ref.Ref<number>>() {}
 
// Subprogram 1: Increment the state value twice
const subprogram1 = Effect.gen(function* () {
  const state = yield* MyState
  yield* Ref.update(state, (n: number) => n + 1)
  yield* Ref.update(state, (n: number) => n + 1)
})
 
// Subprogram 2: Decrement the state value and then increment it
const subprogram2 = Effect.gen(function* () {
  const state = yield* MyState
  yield* Ref.update(state, (n: number) => n + 1)
  yield* Ref.update(state, (n: number) => n + 1)
})
 
// Subprogram 3: Read and log the current value of the state
const subprogram3 = Effect.gen(function* () {
  const state = yield* MyState
  const value = yield* Ref.get(state)
  console.log(`MyState has a value of ${value}.`)
})
 
// Compose subprograms 1, 2, and 3 to create the main program
const program = Effect.gen(function* () {
    const state = yield* MyState
    const value = yield* Ref.get(state)
    console.log(value);

    yield* Ref.update(state, () => 42)

    const value1     = yield* Ref.get(state)
    console.log(value1);
})
const program1 = Effect.gen(function* () {
    const state = yield* MyState
    const value = yield* Ref.get(state)
    console.log(value);
})


// Create a Ref instance with an initial value of 0
const initialState = Ref.make(0)
 
// Provide the Ref as a service
const runnable = Effect.provideServiceEffect(program, MyState, initialState)
 
// Run the program and observe the output
Effect.runPromise(program)
// Effect.runPromise(pipe(
//     Effect.provideServiceEffect(program, MyState, initialState)
// ))
/*
Output:
MyState has a value of 2.
*/