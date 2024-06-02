# For Running Project Use following Commands

- git clone
- npm install
- npm start

# React Short Notes

# Parcel
- Dev Build
- Creating Local Server for Project
- HMR = Hot Module Replacement
- It uses File Watching Algorithm - written in c++
- Caching - Faster Builds
- Image Optimization

- Minification
- Bundling
- Compress
- Consistent Hashing
- Code Splitting
- Differential Bundling - support older browsers
- Diagnostic
- Error Handling
- Tree Shaking - remove unused code

# Two types of Export/Import
- Default Export/Import
export default Component;
import Component from "path";

- Named Export/Import
export const Component;
import {Component} from "path";

# Lazy Loading / on demand loading / Dynamic import
- Syntax
- import React, {lazy, Suspense} from "react";
- for lazy loading we need suspense for route upto lazy loading complete that load js file.
-  {
-    path: "/xyz",
-   element: {
-        <Suspense fallback={<h1> Loading screen... </h1>}> <xyz /> </Suspense>
-    }
- }
- const xyz = lazy( () => import("path_of_xyz_component"));

# How to add CSS in Application

- css
- scss or SASS
- styled-components
- material ui
- bootstrap
- chakra UI
- Ant design
- Telvint

# Higher Order Component
- HOC = Higher Order Component
- HOC is a function which takes component as input and return component

# Context hook in class based component
- import {UserContext} from "../../UserContext"
- <div>
- <UserContext.Consumer>
- {({loggedInUser}) => <h1>{loggedInUser}</h1>}
- </UserContext.Consumer>

# Redux ToolKit(RTK)

- For Write the data into redux store ---
- For making changes into redux store we don't modify directly store data.
- We need to create dispatch(action) and that dispatch call the reducer function for that updated the value of store data.
- Example - onclick ADD button -> dispatch(action) -> funtion(reducer) -> store value

- For read the data from redux store ---
- For getting the data from redux store we will use selector(subscribing to the store).
- Example - updated cart <- selector(subscribing to the store) <- store value
- Example - useSelector((state) => state.counter.value) -> return value of counter value from store

 ## Process for adding RTK into project
 - npm install @reduxjs/toolkit and react-redux
 - Build our store
 - Connect our store to our app
 - create Slice(cartSlice)
 - dispatch()(action)
 - Selector

 ## imp notes for Redux
 - Always subscribe the specific portion of store for better performance.
