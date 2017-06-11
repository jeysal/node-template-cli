#!/usr/bin/env node

// @flow

import yargs from 'yargs';

yargs
  // version
  .alias('v', 'version')
  .version()
  // help
  .alias('h', 'help')
  .help()
  .usage('$0 <some-arg> [<further-args>...]')
  .example('$0 asdf abc xyz');

const args = yargs.argv._;
if (args.length < 1) {
  yargs.showHelp();
  process.exit(2);
}

const someArg = args[0];
const furtherArgs = args.slice(1);

console.log(someArg);
console.log(furtherArgs);
