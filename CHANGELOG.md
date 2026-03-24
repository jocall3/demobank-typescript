# Changelog

## 0.2.1 (2026-03-24)

Full Changelog: [v0.2.0...v0.2.1](https://github.com/jocall3/demobank-typescript/compare/v0.2.0...v0.2.1)

### Bug Fixes

* **client:** avoid memory leak with abort signals ([c837a2c](https://github.com/jocall3/demobank-typescript/commit/c837a2c138ffe275f923b295df6ae2fe781cc8be))
* **client:** avoid removing abort listener too early ([968ad8e](https://github.com/jocall3/demobank-typescript/commit/968ad8ee5b2d71af6e175119559e7d7510794a4e))
* **client:** preserve URL params already embedded in path ([ca697a4](https://github.com/jocall3/demobank-typescript/commit/ca697a49ed4bc08189ec1fd3c4b3adbc46ff5033))
* **docs/contributing:** correct pnpm link command ([4669691](https://github.com/jocall3/demobank-typescript/commit/46696917408589195dff1b8e286809aa9fb786d0))


### Chores

* **ci:** skip uploading artifacts on stainless-internal branches ([70f369c](https://github.com/jocall3/demobank-typescript/commit/70f369cc976d4e23617b694beeaacf46e1d58087))
* **client:** do not parse responses with empty content-length ([35fd512](https://github.com/jocall3/demobank-typescript/commit/35fd512a079e08143befe95e20f8045263d11078))
* **client:** restructure abort controller binding ([ddad963](https://github.com/jocall3/demobank-typescript/commit/ddad963349a8ae1718d489060ba425293a4c9525))
* **internal/client:** fix form-urlencoded requests ([24659a4](https://github.com/jocall3/demobank-typescript/commit/24659a4c88a22ba95e6ea399fbc7f58f85e40a09))
* **internal:** avoid type checking errors with ts-reset ([81dc84e](https://github.com/jocall3/demobank-typescript/commit/81dc84e4c3a6ac2abc3a1f71cddb6a652c2c1606))
* **internal:** codegen related update ([e0aea71](https://github.com/jocall3/demobank-typescript/commit/e0aea714a75155f5d5524dca60b11c943bd11cd2))
* **internal:** move stringifyQuery implementation to internal function ([a79ee52](https://github.com/jocall3/demobank-typescript/commit/a79ee52d85d22729e70741848a55f564b9bca3ed))
* **internal:** remove mock server code ([caccd87](https://github.com/jocall3/demobank-typescript/commit/caccd87f150862529f2cc4a67ca430a8faf457da))
* **internal:** tweak CI branches ([9fb1924](https://github.com/jocall3/demobank-typescript/commit/9fb1924cda068c037b67514e4749bc405deaec4a))
* **internal:** update dependencies to address dependabot vulnerabilities ([397fc33](https://github.com/jocall3/demobank-typescript/commit/397fc33c652cccb7493ad0096ff1a45af7548b28))
* **internal:** update gitignore ([0778bff](https://github.com/jocall3/demobank-typescript/commit/0778bff7491640485cc06aa23ad2b80ed054122f))
* **internal:** upgrade pnpm ([3b495e2](https://github.com/jocall3/demobank-typescript/commit/3b495e2b50bb51a35e2bdb75b99c42e84ea000c4))
* **internal:** upgrade pnpm version ([ac93372](https://github.com/jocall3/demobank-typescript/commit/ac93372fee5cb90f410eb9145f3308384938505f))
* update mock server docs ([ac4bd5b](https://github.com/jocall3/demobank-typescript/commit/ac4bd5b58337dc046f17e94ec23c5b2beb7e9e39))

## 0.2.0 (2026-01-27)

Full Changelog: [v0.1.0...v0.2.0](https://github.com/jocall3/demobank-typescript/compare/v0.1.0...v0.2.0)

### Features

* **api:** manual updates ([fc7dcf2](https://github.com/jocall3/demobank-typescript/commit/fc7dcf26f35b290699a09f007f8a10d88c62e7c2))


### Chores

* break long lines in snippets into multiline ([c1dc3f1](https://github.com/jocall3/demobank-typescript/commit/c1dc3f12c5f173258b94189fae8c023bb9f3e4c6))
* **ci:** upgrade `actions/github-script` ([55a9220](https://github.com/jocall3/demobank-typescript/commit/55a9220e41a7ada4c8365002a49f1b546e12f6e9))
* **internal:** codegen related update ([863370e](https://github.com/jocall3/demobank-typescript/commit/863370e92cafc6b8c3e619c82a912c440ddfea59))
* **internal:** codegen related update ([7b1058d](https://github.com/jocall3/demobank-typescript/commit/7b1058d5c5b4a63d8eac2d190261746c1e6c0585))
* **internal:** update `actions/checkout` version ([76986a7](https://github.com/jocall3/demobank-typescript/commit/76986a7f551771d0d27dfb6c8ca7026b42fafcfa))
* **internal:** update lock file ([cda679d](https://github.com/jocall3/demobank-typescript/commit/cda679d59789d24e83ad57e20a5b09e99e3ad41e))
* **internal:** upgrade babel, qs, js-yaml ([5974321](https://github.com/jocall3/demobank-typescript/commit/597432195656b0bde3e7dffaa26a8a0b55fb19e7))
* **internal:** upgrade brace-expansion and @babel/helpers ([05696a2](https://github.com/jocall3/demobank-typescript/commit/05696a206df90c456d6adfcc56f433901546f154))
* update SDK settings ([103603d](https://github.com/jocall3/demobank-typescript/commit/103603d1af6341818628fcc82b9b764c0ebe0540))

## 0.1.0 (2025-12-19)

Full Changelog: [v0.0.1...v0.1.0](https://github.com/jocall3/demobank-typescript/compare/v0.0.1...v0.1.0)

### Features

* **api:** manual updates ([2f0fc59](https://github.com/jocall3/demobank-typescript/commit/2f0fc59b69f1d38aacf8174a386b96f5bfdc1433))


### Bug Fixes

* **mcp:** correct code tool API endpoint ([606c2e7](https://github.com/jocall3/demobank-typescript/commit/606c2e720aab187c214b3979dd12caf987b529fe))
* **mcp:** return correct lines on typescript errors ([249170b](https://github.com/jocall3/demobank-typescript/commit/249170bb06752b7ab6139e74c0a2a20578252c19))


### Chores

* **client:** fix logger property type ([8656070](https://github.com/jocall3/demobank-typescript/commit/8656070c28d82780b722d6497bcbc7bfdd71b069))
* **internal:** codegen related update ([1ffb5f4](https://github.com/jocall3/demobank-typescript/commit/1ffb5f48c44f1e97b3c8b8f159c63657cb01f560))
* **internal:** codegen related update ([96d1920](https://github.com/jocall3/demobank-typescript/commit/96d19206fcd45e5b8a9b36f634c6875cf6ac6414))
* **internal:** configure pnpm minimumReleaseAge to 1 day ([d020eed](https://github.com/jocall3/demobank-typescript/commit/d020eed9796e5e70a02a48a50ccebdf4759ac2d1))
* **internal:** upgrade eslint ([7f715fd](https://github.com/jocall3/demobank-typescript/commit/7f715fd21d486f4fd31210d0fe9334445e14f76e))
* update SDK settings ([3d56eb2](https://github.com/jocall3/demobank-typescript/commit/3d56eb25d66ac4b0172cedcd587efe0ee5ac60df))
