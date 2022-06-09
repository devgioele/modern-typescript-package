import { test, expect } from '@jest/globals'
import { helloWorld } from '../src'

test('Greet w/o name', async () => {
  const greeting = helloWorld()
  expect(greeting).toEqual('Hello, World!')
})

test('Greet w/ name', async () => {
  const name = 'Gio'
  const greeting = helloWorld({ name })
  expect(greeting).toEqual(`Hello, ${name}!`)
})
