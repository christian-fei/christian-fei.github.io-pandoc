#!/usr/bin/env node
const {writeFileSync} = require('fs');
const {join} = require('path')
const YAML = require('json-to-pretty-yaml');
const json = require('./years.json');

const data = YAML.stringify(json);
writeFileSync(join(__dirname, '_data', 'years.yml'), data, {flag: 'w+'});

