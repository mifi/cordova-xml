#!/usr/bin/env node
'use strict';

const meow = require('meow');
const configXml = require('./');

const cli = meow({
	help: [`
		Usage
      See https://github.com/mifi/cordova-xml
		  $ cordova-xml <action> <args>
    Options
      --config Config path
	`]
});

try {
	const config = configXml(cli.flags.config);
	const action = cli.input.shift();
	const args = cli.input;

  if (!config[action]) throw new Error(`Action ${action} not found`);

	config[action].apply(null, args);
} catch (err) {
	console.error(err.message);
	cli.showHelp(-1);
}
