import { Context, Effect, Chunk, Ref, Console } from "effect"

class Random extends Context.Tag("Random")<
  Random,
  {
    readonly next: Effect.Effect<number>
  }
>() {}
 
// Create a 'Tag' for the 'Logger' service
class Logger extends Context.Tag("Logger")<
  Logger,
  {
    readonly log: (message: string) => Effect.Effect<void>
  }
>() {}

const program = Effect.gen(function* () {
  // Acquire instances of the 'Random' and 'Logger' services
  const random = yield* Random
  const logger = yield* Logger
 
  // Generate a random number using the 'Random' service
  const randomNumber = yield* random.next
 
  // Log the random number using the 'Logger' service
  return yield* logger.log(String(randomNumber))
})

const runnable1 = program.pipe(
  Effect.provideService(Random, {
    next: Effect.sync(() => Math.random())
  }),
  Effect.provideService(Logger, {
    log: Console.log
  })
)