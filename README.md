# React Native Orientation Change Provider

Simple React Native Provider component that forces a re-render when orientation changes.

## Installation

```
npm install react-native-orientation-change-provider --save-dev
```

or

```
yarn add react-native-orientation-change-provider --dev
```

## Usage

Import `OrientationChangeProvider` and wrap your whole app with the provider:

```jsx
import { OrientationChangeProvider } from "react-native-orientation-change-provider";

...

<OrientationChangeProvider>
  <App />
</OrientationChangeProvider>;
```
