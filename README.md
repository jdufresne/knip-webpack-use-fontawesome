# knip-webpack-use-fontawesome

First, install modules:

```console
$ npm install
```

Observe, the project builds successfully:

```console
$ npm run build

> knip-webpack-entry-with-resolve-modules@1.0.0 build
> webpack

asset main.js 98.7 KiB [emitted] (name: main)
runtime modules 937 bytes 4 modules
cacheable modules 80.7 KiB
  modules by path ./ 78.4 KiB
    ./main.js 22 bytes [built] [code generated]
    ./main.scss 78.4 KiB [built] [code generated]
  modules by path ../node_modules/css-loader/dist/runtime/*.js 2.31 KiB
    ../node_modules/css-loader/dist/runtime/noSourceMaps.js 64 bytes [built] [code generated]
    ../node_modules/css-loader/dist/runtime/api.js 2.25 KiB [built] [code generated]
webpack 5.102.1 compiled successfully in 557 ms
```

However, Knip reports an unused dependency "@fortawesome/fontawesome-free".

```console
$ npm run knip

> knip-webpack-entry-with-resolve-modules@1.0.0 knip
> knip

Unused dependencies (1)
@fortawesome/fontawesome-free  package.json:6:6
```

Per Knip, try to remove the dependency, results in a failed build.

```
$ npm remove "@fortawesome/fontawesome-free"

removed 1 package, and audited 178 packages in 481ms

37 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities

$ npm run build

> knip-webpack-entry-with-resolve-modules@1.0.0 build
> webpack

asset main.js 3.39 KiB [compared for emit] (name: main)
runtime modules 274 bytes 1 module
./main.js 22 bytes [built] [code generated]
./main.scss 39 bytes [built] [code generated] [1 error]

ERROR in ./main.scss
Module build failed (from ../node_modules/sass-loader/dist/cjs.js):
Can't find stylesheet to import.
  ╷
1 │ @use "@fortawesome/fontawesome-free";
  │ ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  ╵
  src/main.scss 1:1  root stylesheet
 @ ./main.js 1:0-21

webpack 5.102.1 compiled with 1 error in 314 ms
```
