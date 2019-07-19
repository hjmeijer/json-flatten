#!/usr/bin/env node

const fs = require("fs");
const pointer = require('json-pointer');

const data = JSON.parse(fs.readFileSync(process.argv[2] || 0, "utf-8"));

console.log(pointer.dict(data))
