// @flow

import execa from 'execa';

test('prints given first arg and further args', async () => {
  const stdout = await execa.stdout('babel-node', ['src/cli.js', 'asdf']);
  expect(stdout).toEqual('asdf\n[]');
});
