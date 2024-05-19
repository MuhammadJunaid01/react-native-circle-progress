[![license](https://img.shields.io/github/license/mashape/apistatus.svg)]()
[![npm](https://img.shields.io/npm/dt/rn-circle-progress.svg)](https://www.npmjs.com/package/rn-circle-progress)
[![LinkedIn Follow](https://img.shields.io/badge/LinkedIn-Connect-blue?style=social&logo=linkedin)](https://www.linkedin.com/in/mj-juanaid-7358b5216/)

# React Native Progress Circle

![React Native Progress Circles](/README/featured.png?raw=true "React Native Progress Circles")

## Features

- Custom colors
- Custom size and border radius
- Light-weight: No other dependencies besides `react-native`

## Installation

`yarn add rn-circle-progress`

or

`npm install rn-circle-progress`

## Usage

```javascript
import ProgressCircle from "rn-circle-progress";

return (
  <ProgressCircle
    percent={30}
    radius={50}
    borderWidth={8}
    color="#3399FF"
    shadowColor="#999"
    bgColor="#fff"
  >
    <Text style={{ fontSize: 18 }}>{"30%"}</Text>
  </ProgressCircle>
);
```

## Props

| Name             | Description                                                                 | Type   | Required |                            Default Value                             |
| :--------------- | :-------------------------------------------------------------------------- | :----- | :------: | :------------------------------------------------------------------: |
| percent          | The percentage used for displaying the progress                             | Number |    ✓     |                                                                      |
| radius           | The radius in `px` of the component (including border)                      | Number |    ✓     |                                                                      |
| borderWidth      | The border width in `px`                                                    | Number |    ✓     |                                                                      |
| color            | The border color                                                            | String |          |     ![#f00](https://placehold.it/15/f00/000000?text=+) `'#f00'`      |
| shadowColor      | The background color of the border                                          | String |          |     ![#999](https://placehold.it/15/999/000000?text=+) `'#999'`      |
| bgColor          | The inner background color of the component                                 | String |          | ![#e9e9ef](https://placehold.it/15/e9e9ef/000000?text=+) `'#e9e9ef'` |
| children         | The children to render inside this component                                | Node   |          |                                `null`                                |
| containerStyle   | The custom styling which will be applied to the container of the `children` | Style  |          |                                `null`                                |
| outerCircleStyle | The custom styling which will be applied to the outer circle                | Style  |          |                                `null`                                |

## Author

[M JUNAID](https://dev-junaid-portfolio-v2.vercel.app/)

## License

MIT
