# json-flatten

A simple command-line tool to flatten JSON objects using [JSON Pointer](https://tools.ietf.org/html/rfc6901)-style keys.

Implementation based on [this answer](https://stackoverflow.com/a/42156958) on stack overflow.

## dependencies

* nodejs
* npm

## installation

```
git clone git@github.com:hjmeijer/json-flatten.git
cd json-flatten
npm install -g
```

## usage example

Reading from file:

```$bash
$ cat <<EOF > data.json
{
  "name": "John",
  "cars": [
    {
      "brand": "Ford",
      "type": "Taunus"
    },
    {
      "brand": "Nissan",
      "type": "Micra"
    }
  ]
}
EOF

$ json-flatten data.json
{
  "/name": "John",
  "/cars/0/brand": "Ford",
  "/cars/0/type": "Taunus",
  "/cars/1/brand": "Nissan",
  "/cars/1/type": "Micra"
}

```

With input from stdin:

```
$ cat data.json | json-flatten
{
  "/name": "John",
  "/cars/0/brand": "Ford",
  "/cars/0/type": "Taunus",
  "/cars/1/brand": "Nissan",
  "/cars/1/type": "Micra"
}
```
