type HelloWorldOptions = Partial<{
  name: string
}>

/**
 * Compiles a greeting message.
 *
 * @param name The name to greet.
 * @returns The greeting.
 */
export const helloWorld = ({ name }: HelloWorldOptions): string =>
  `Hello, ${name || 'World'}!`
