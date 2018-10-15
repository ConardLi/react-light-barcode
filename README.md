# react-light-barcode
条形码react组件,支持多种类型,按需引用（简洁！轻量！快速！）

条码规范非常多，引用一个库非常庞大，使用react-light-barcode可以灵活引入各种类型的条码，简洁、轻量、快速

# 使用
```
npm install react-light-barcode
```

```
import { Code128 } from 'react-light-barcode'
```

```
  <Code128
    value='1234567891234' //条码值
    displayValue={TRUE}   //是否显示值
    size={1.5}            //条码大小
    type='C'              //128码类型
    color='black'         //条码颜色
    fontSize='0.125in'    //字大小
    fontColor='black'     //字颜色
  />,
```