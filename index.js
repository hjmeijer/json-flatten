#!/usr/bin/env node

const fs = require("fs");

const separator = "/"

function flatten (obj, prefix, current) {
  prefix = prefix || []
  current = current || {}

  if (typeof (obj) === "object" && obj !== null) {
    Object.keys(obj).forEach(key => {
      flatten(obj[key], prefix.concat(key), current)
    })
  } else {
    current[prefix.join(separator)] = obj
  }

  return current
}

const data = JSON.parse(fs.readFileSync(process.argv[2] || 0, "utf-8"));
console.log(JSON.stringify(flatten(data, [""]), null, 2))
