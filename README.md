# Getting Started Create SVG File and render with React 

Customize svg file to render  in React with ability to change the text, colors and image attributes without loosing the context.

## Configure svg file

Create a new project file in vs code
Open Terminal window
Download npx create-react-app .
Go to SRC create a new folder called components

Go to Public folder move the customized svg file into the public folder

Create App.js
import React useEffect, useRef to access the embedded svg file

Go to index.js. point App to components/App

Go to project root create a folder called svgr.config.js
add module.exports = throwIfNamespace: false
NOTE: some of the svg code name regime are separated example Address or First Name and Last Name
This will help with that or better still you can use Pathname in inkscape.

save



### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.
