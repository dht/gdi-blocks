<p align="center">
  <br />
  <a href="https://usegdi.com/" target="blank"><img src="https://raw.githubusercontent.com/dht/gdi/main/clients/gdi-admin/public/Logo.webp" width="160" alt="gdi Logo" /></a>
</p>
<p align="center">
  An Open-source & Extendable Content Management System (CMS) written in ReactJS, hosted on <a href="https://firebase.google.com" target="_blank">Firebase</a>
</p>
<p align="center">
  <a href="https://usegdi.com/admin/pages/home?demo=on" target="_blank">Demo</a>&nbsp;//&nbsp;
  <a href="https://usegdi.com/docs/" target="_blank">Documentation</a>&nbsp;//&nbsp;
  <a href="https://usegdi.com" target="_blank">Homepage</a>
</p>

# gdi-blocks

This repo is a stand-alone development environment for [gDI CMS](https://github.com/dht/gdi) blocks.

It has:

1. a storybook-like UI with live reload on which you can develop new blocks.
2. dozens of official starter blocks
3. documentation

You can fork this repository and make your own blocks monorepo.

> Note: each block sits in an NPM package with a unique blockId

## Installation

```sh
git clone git@github.com:dht/gdi-blocks.git
cd gdi-blocks
```

and install dependencies:

```sh
yarn
```

or:

```sh
npm i
```

### Refreshing the block definitions

In order to have a development environment with live reload you'll need to run:

```
npm run refresh
```

This will make sure your `vite.config.js` file and `tsconfig.json` are up-to-date.

> Note: you'll have to run it every time you add a new block package to keep the config files in sync

## Running the UI

```
npm run dev
```

Then navigate to [http://localhost:3001](http://localhost:3001)

## Terminology

### Block

The atom of a page. It is a stand-alone NPM package that contains the React Component and it's meta data.
