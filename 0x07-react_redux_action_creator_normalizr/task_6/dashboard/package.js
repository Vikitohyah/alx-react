{
  "name": "dashboard",
  "version": "1.0.0",
  "description": "",
  "main": "./src/index.js",
  "scripts": {
    "dev": "webpack serve --mode development --config config/webpack.config.js",
    "build": "webpack --mode production --config config/webpack.config.js",
    "start": "webpack serve --open --mode development --config config/webpack.config.js",
    "test": "jest",
    "test-watch": "jest --watch"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "@babel/core": "^7.12.16",
    "@babel/preset-env": "^7.12.16",
    "@babel/preset-react": "^7.12.13",
    "@testing-library/jest-dom": "^5.11.9",
    "@testing-library/react": "^11.2.5",
    "@testing-library/user-event": "^12.8.3",
    "babel-loader": "^8.2.2",
    "css-loader": "^5.0.2",
    "enzyme": "^3.11.0",
    "enzyme-adapter-react-16": "^1.15.6",
    "file-loader": "^6.2.0",
    "image-webpack-loader": "^7.0.1",
    "jest": "^26.6.3",
    "style-loader": "^2.0.0",
    "webpack": "^5.22.0",
    "webpack-cli": "^4.5.0",
    "webpack-dev-server": "^3.11.2"
  },
  "dependencies": {
    "aphrodite": "^2.4.0",
    "normalizr": "^3.6.1",
    "prop-types": "^15.7.2",
    "react": "^17.0.1",
    "react-dom": "^17.0.1"
  },
  "jest": {
    "setupFiles": [
      "<rootDir>/config/setupTests.js"
    ],
    "moduleNameMapper": {
      "\\.(css)$": "<rootDir>/__mocks__/styleMock.js",
      "\\.(jpg|png)$": "<rootDir>/__mocks__/fileMock.js"
    }
  }
}
