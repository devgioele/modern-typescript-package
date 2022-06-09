type HelloWorldOptions = Partial<{
  name: string
}>

/**
 * Compiles a greeting message.
 *
 * @param name The name to greet.
 * @returns The greeting.
 */
export const helloWorld = (options?: HelloWorldOptions): string =>
  `Hello, ${options?.name || 'World'}!`
