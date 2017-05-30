// @flow

import greet from './greeter';

test('should greet given name', () => {
  expect(greet('Chuck Norris')).toBe('Hello Chuck Norris!');
});

test('should default to "Hello World!"', () => {
  expect(greet()).toBe('Hello World!');
});
