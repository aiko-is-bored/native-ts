# Native TypeScript

Actually useful TypeScript compiler that compiles your TypeScript to LLVM IR (and bytecode).

## Getting started

Native Typescript can be installed using NPM.

### Installing with `npm`

To install the package:

```sh
npm install nativets
```

Then, let's compile our first program. Create a file called `test.nts` and insert the following code:

```ts

import 'io';

function sayHello() {
  console.log("Hello world!");
}

sayHello();
```

Then to compile:

```sh
nts compile test.nts
```

We've just compiled our first NTS program! Let's run it! To run:

```sh
./test.o
```

# GitPod

GitPod's Docker will automatically install LLVM, it'll take a while, but it should Make and Compile.

# Contributing

I'm looking for as many contributions as possible. Read `CONTRIBUTIONS.md` for explanations, or if you dare, just read the code.
