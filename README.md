<a href="https://react-butalert.vercel.app">
<img alt="react-butalert - Try it out" src="https://github.com/eleviven/react-butalert-website/raw/main/public/butalert-banner.svg"/>
</a>

<br />

<div align="center">
  <img src="https://badgen.net/npm/v/react-butalert" alt="NPM Version" />
  <img src="https://badgen.net/bundlephobia/minzip/react-butalert" alt="minzipped size"/>
</div>

<br />
<div align="center"><strong>Popup Alerts for React.</strong></div>
<div align="center">Lightweight, customizable and beautiful by default.</div>
<br />

<div align="center">
<a href="https://butalert.vercel.app/docs">Documentation</a> 
<span> · </span>
<a href="https://butalert.vercel.app">Website</a> 
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
yarn add react-butalert
```

#### With NPM

```sh
npm install react-butalert
```

## Getting Started

Add the Butalert to your app first. It will take care of rendering all alerts emitted. Now you can trigger `butalert.fire()` from anywhere!

```jsx
import { Butalert } from 'react-butalert';

const handleShowAlert = () => butalert.fire({ title: 'Here is your alert.' });

const App = () => {
  return (
    <div>
      <button onClick={handleShowAlert}>Show me an Alert</button>
      <Butalert />
    </div>
  );
};
```

## Documentation

Find the full API reference on [official documentation](https://butalert.vercel.app/docs).
