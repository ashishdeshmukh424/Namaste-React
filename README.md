# Namaste React By Akshay Saini

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

-Named Export/Import
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