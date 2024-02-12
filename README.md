<p>
  <a href="https://react-ghosta.vercel.app" style="display:block;">
    <img alt="react-ghosta - Try it out" src="https://github.com/eleviven/react-ghosta-website/raw/main/static/img/ghosta-banner.svg"/>
  </a>
</p>

<div align="center">
  <img src="https://badgen.net/npm/v/react-ghosta" alt="NPM Version" />
  <img src="https://badgen.net/bundlephobia/minzip/react-ghosta" alt="minzipped size"/>
</div>

<br />
<div align="center"><strong>Popup Alerts for React.</strong></div>
<div align="center">Lightweight, customizable and beautiful by default.</div>
<br />

<div align="center">
<a href="https://react-ghosta.vercel.app/docs">Documentation</a> 
<span> · </span>
<a href="https://react-ghosta.vercel.app">Website</a> 
</div>

<br />

## Features

- 🔩 **Easily Customizable**
- ⚛️ **Reach Features**
- 🕊 **Lightweight**
- ✅ **Accessible**

## Installation

#### With yarn

```sh
yarn add react-ghosta
```

#### With NPM

```sh
npm install react-ghosta
```

## Getting Started

Add the Ghosta and ghosta.css to your app first. It will take care of rendering all alerts emitted. Now you can trigger `ghosta.fire()` from anywhere!

```jsx
import { Ghosta } from 'react-ghosta';
import "react-ghosta/dist/ghosta.css";

const handleShowAlert = () => ghosta.fire({ title: 'Here is your alert.' });

const App = () => {
  return (
    <div>
      <button onClick={handleShowAlert}>Show me an Alert</button>
      <Ghosta />
    </div>
  );
};
```

## Documentation

Find the full API reference on [official documentation](https://react-ghosta.vercel.app/docs).
