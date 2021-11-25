# React Simple Memo

A react modal component to show some questions from stackoverflow with some title.

It is using stackexchange api("you can see more detail about it in url : https://api.stackexchange.com").

You can also call this function maximum 300 times because of stackexchange's rules.

If you want to use more(in example 10,000) then you have to get key from stackexchange and use it in component trigger


## Demo

![ezgif com-gif-maker (2)](https://user-images.githubusercontent.com/19369750/143487409-a8580b7f-e211-4af4-9a6b-cc7801fe7c8c.gif)

## Installation

```
npm install --save react-search-stackoverflow
```

## Usage

```
import { useRef } from "react";

import {
  SearchStackOverFlow,
  trigger,
} from "./components/react-search-stackoverflow/index";

function App() {
  const targetInput = useRef<HTMLInputElement>(null);

  const handleButtonClick = () => {
    if (trigger !== undefined) {
      const text = targetInput.current?.value;
      trigger(text);
    }
  };
  return (
    <div className="App">
      <SearchStackOverFlow />
      <input ref={targetInput} />
      <button onClick={handleButtonClick}>search</button>
    </div>
  );
}

export default App;

```

## Props of component

### 1. width, height

- optional
- string

This prop sets the size of modal

### 2. title

- optional
- string

This is the title of modal.
If you do not give some title, then the title uses "Search Result"


## Params of trigger

### 1. title
- required
- string

The keyword that will be used for searching stackoverflow.

This component finds some list of title from stackoverflow with argument title.

### 2. key
- optional
- string

If you don't set this parameter, then you can't use this function 300 times any more.

So If you want, you have to get some key from stackexchange.
