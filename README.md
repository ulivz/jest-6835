# jest-issue

Reproduction step:

1. Get this repo

```bash
git clone https://github.com/ulivz/jest-issue.git
cd jest-issue
yarn
```

2. Running tests in root dir

```bash
yarn test-1
# NODE_ENV=test jest --config jest.config.js test/a.spec.js
```

Output:

``` 
yarn run v1.7.0
$ NODE_ENV=test jest --config jest.config.js test/a.spec.js
 PASS  test/a.spec.js
  ✓ app (3ms)

Test Suites: 1 passed, 1 total
Tests:       1 passed, 1 total
Snapshots:   0 total
Time:        0.831s, estimated 1s
Ran all test suites matching /test\/a.spec.js/i.
✨  Done in 1.41s.
```

2. Running tests in packages

```bash
yarn test-2
# NODE_ENV=test jest --config jest.config.js packages/a/a.spec.js
```

Output:

```
yarn run v1.7.0
$ NODE_ENV=test jest --config jest.config.js packages/a/a.spec.js
 FAIL  packages/a/a.spec.js
  ● Test suite failed to run

    Jest encountered an unexpected token

    This usually means that you are trying to import a file which Jest cannot parse, e.g. it's not plain JavaScript.

    By default, if Jest sees a Babel config, it will use that to transform your files, ignoring "node_modules".

    Here's what you can do:
     • To have some of your "node_modules" files transformed, you can specify a custom "transformIgnorePatterns" in your config.
     • If you need a custom transformation specify a "transform" option in your config.
     • If you simply want to mock your non-JS modules (e.g. binary assets) you can stub them out with the "moduleNameMapper" config option.

    You'll find more details and examples of these config options in the docs:
    https://jestjs.io/docs/en/configuration.html

    Details:

    /Users/ulivz/Documents/ULIVZ/__forked__/jest-issue/packages/a/a.spec.js:1
    ({"Object.<anonymous>":function(module,exports,require,__dirname,__filename,global,jest){import { APP } from './module';
                                                                                             ^^^^^^

    SyntaxError: Unexpected token import

      at ScriptTransformer._transformAndBuildScript (node_modules/jest-runtime/build/script_transformer.js:403:17)
```
