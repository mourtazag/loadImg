# loadImg

A function to load image from a source string.

## Usage
```
loadImg("https://images.unsplash.com/photo-1534939994634-9bfb82bb2327?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=30d4b2d117d53038b6749bbdb6cfd387&auto=format&fit=crop&w=634&q=80").then((img) => {

  body.appendChild(img);

})
```

Provide a image source string to loadImg and it will return a Promise with the image element.

## Requirements

Use Promises.
Tested from IE11 + with Promises Polyfill.
