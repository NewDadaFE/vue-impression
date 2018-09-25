# vue-impression

A Vue.js 2.0 UI elements for mobile.

## Demo

https://newdadafe.github.io/impression_vue/#/button

## Installation

```sh
yarn add vue-impression
```

## Usage

styles:

```scss
@import '~vue-impression/dist/styles/index.scss';
```

scripts:

```js
import Vue from 'vue';
import VueImpression from 'vue-impression';

Vue.use(VueImpression);
```

tree-shaking:

```sh
yarn add babel-plugin-transform-imports -D
```

```json
{
    "plugins": [
        [
            "transform-imports",
            {
                "vue-impression": {
                    "transform": "vue-impression/dist/scripts/components/${member}",
                    "preventFullImport": true
                }
            }
        ]
    ]
}
```

## Example

```html
<btn theme="primary" size="sm" @click="doSomething">按钮</btn>
```

## Components

-   [x] Button
-   [x] Group
-   [x] GroupTitle
-   [x] Cell
-   [x] Flex
-   [x] FlexItem
-   [x] Icon
-   [x] Navbar
-   [x] Navigation
-   [x] Tabbar
-   [x] Drawer
-   [x] Loading
-   [x] Alert
-   [x] Toast
-   [x] Radio
-   [x] RadioGroup
-   [x] Checkbox
-   [x] CheckboxGroup
-   [x] Toggle(Switch)
-   [x] InputNumber
-   [x] InputText
-   [x] InputArea
-   [x] Selector
-   [x] Tag
-   [x] Badge
-   [x] Tip
-   [x] HRule(Hr)
-   [x] InlineSelector
-   [x] Swipe
-   [x] SlideUp
-   [x] SegmentedControl
-   [x] Media
-   [x] Card
-   [x] Picker
-   [x] DatePicker
-   [x] Search
-   [x] BackToTop
-   [x] Pull down
-   [x] Pull up
-   [x] Sideslip
-   [x] Progressbar
-   [x] Stepbar
-   [x] Timeline
-   [x] Sticky

## Quick start

[generator-vue-impression](https://github.com/NewDadaFE/generator/tree/master/packages/generator-vue-impression)
