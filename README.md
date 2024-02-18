<p>
  <a href="https://react-ghosta.vercel.app" style="display:block;">
    <img alt="react-ghosta - Try it out" src="https://github.com/eleviven/react-ghosta-website/raw/main/static/img/ghosta-banner.svg"/>
  </a>
</p>

<div align="center">
  <img src="https://badgen.net/npm/v/react-ghosta" alt="NPM Version" />
  <img src="https://badgen.net/npm/dm/react-ghosta" alt="Monthly Downloads"/>
  <img src="https://badgen.net/npm/license/react-ghosta" alt="License"/>
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
import { GhostaContainer, ghosta } from 'react-ghosta';
import 'react-ghosta/dist/ghosta.css';

const handleShowAlert = () => ghosta.fire({ title: 'Here is your alert.' });

const App = () => {
  return (
    <div>
      <button onClick={handleShowAlert}>Show me an Alert</button>
      <GhostaContainer />
    </div>
  );
};
```

## Documentation

Find the full API reference on [official documentation](https://react-ghosta.vercel.app/docs).

## TODO

1. ⬜️ Add variant option and bind icon and icon background color to this option

2. ⬜️ Add timer option to close the popup after some time and add showTimerProgressBar option to show progress of timer.
