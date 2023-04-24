# unocss-preset-antd

**WIP**

This preset will help you make [antd](https://ant.design/) and [unocss](https://unocss.dev/) work together. Based on [unocss-perset-theme](https://github.com/Dunqing/unocss-preset-theme).

## Installation

```bash
npm i -D unocss-preset-antd
```

## Usages

We use `uno.config.ts` as an example below.

```ts
import { defineConfig, presetUno } from 'unocss'
import { presetAntd } from 'unocss-preset-antd'

export default defineConfig({
  presets: [
    presetUno(),
    presetAntd(), // place after other presets, since it overrides some values by default
  ],
})
```

We recommend you to use [tailwind compat reset](https://unocss.dev/guide/style-reset#tailwind-compat) if you are facing style conflicts.

## Options

You can a options object to the preset.

### prefix

This option is extended from [unocss-perset-theme](https://github.com/Dunqing/unocss-preset-theme). Defaults to `--un-preset-antd`.

### selectors

This option is extended from [unocss-perset-theme](https://github.com/Dunqing/unocss-preset-theme) and use its default value.

### lightBackgroundColor

Used to generate light theme colors. Defaults to `#ffffff`.

### darkBackgroundColor

Used to generate dark theme colors. Defaults to `#141414`.

### primary

Base primary color. Defaults to `#1677ff`.

If you are using `antd@4`, you can override it with `#1890ff`.

### success

Base success color. Defaults to `#52c41a`.

### warning

Base warning color. Defaults to `#faad14`.

### error

Base error color. Defaults to `#ff4d4f`.

If you are using `antd@4`, you can override it with `#f5222d`.

### info

Base info color. Defaults to `#1677ff`.

If you are using `antd@4`, you can override it with `#1890ff`.

## License

MIT License
