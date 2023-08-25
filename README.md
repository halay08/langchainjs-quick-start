# LangChainJS Quickstart

## Installation

```sh
$ npm install -g yarn
$ yarn
```

## Configuration

Using LangChain typically involves integrating with one or more model providers, data stores, APIs, etc. In this particular case, we will utilize OpenAI's model APIs.

To update your API keys in this repository, please simply clone the file `<rootPath>/config.ts.example` and save it as `<rootPath>/config.ts`. Then, update the API keys in the newly saved file.

Please refer to the example provided below:

```ts
export const OPENAI_KEY = 'sk-****';
export const SERP_API_KEY = '****';
```

## Usage

```sh
$ yarn execute agent
$ yarn execute chain
$ yarn execute chatModel
$ yarn execute llms
$ yarn execute memory
$ yarn execute promptTemplate
# ...
```
