# onespeed

A Vite plugin to fix behavior between Vite 5+ and UnoCSS.

## install

```shell
pnpm add -D @itsy/onespeed
```

## use

In `vite.config.js`:

```js
import UnoCSS from 'unocss/vite'
import Onespeed from '@itsy/onespeed'
import { defineConfig } from 'vite'

export default defineConfig({
    plugins: [UnoCSS(), Onespeed()]
})
```
