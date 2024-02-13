#Namaste React

#Parcel

- Dev Build
- Local Server
- HMR = Hot Module Replacement
- File Watching Algorithm = written in C++
- Caching- Faster Builds
- Image Optimization
- Minification
- Bundling
- Compressing
- Consistent Hashing
- Differential Bundling - support older browsers
- Diagnostic
- Error Handling
- HTTPs
- Tree Shaking
- Different dev and prod bundles

Two types of Export/Import

-Default Export/Import

export default Component;
import Component from "path";

-Named Export/Import

export const Component;
import {Component} from "path";

# React Hooks

(Normal JS utility functions)
useState() -superpowerfull state variable in react
useeffect()

if no dependency array=> useEffect is called on every render
if dependency array is empty=> useEffect is called on initial render(just once)
if dependency array is btnName=> useEffect is called everytime when btnName is updated

# two types of routing in web apps

- Client Side Routing - when no network call happens cuz all the comps are already loaded(has code) just loads
- Server Side Routing - when network call happens and whole page reloads

# Redux Toolk🇮🇹

-Install @reduxjs/toolkit and react-redux
-Build Store
-Conect Our store to our app
-Slice (cartslice)
-dispatch(action)
-Selector

# Types of Testing(devloper)

-Unit Testing
-Integration Testing
-End to End Testing- e2e testing

# Setting up testing

-install react testing library-
-install jest
-install babel dependcies
-configure babel
-configure parcel conifg file to disable default babel transpilation
-jest configuration
-Jest-npx jest --init
-install jsDom library -npm install --save-dev jest-environment-jsdom
-install npm i -D @babel/preset-react to make JSX work in test cases
-include @babel/preset-react inside my babel config
-install npm i -D @testing-library/jest-dom
