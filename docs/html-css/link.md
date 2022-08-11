##### 区别

- link属于html标签。@import在css中使用表示导入外部样式表
- link 支持使用javascript改变样式 （`document.styleSheets`），后者不可
- 页面被加载的时，link会同时被加载，而@import引用的CSS会等到页面被加载完再加载
- link方式的样式的权重 高于@import的权重
- import只在IE5以上才能识别，而link是HTML标签，无兼容问题

##### 用法

```html
<head>
    <!-- link是标签，引入外部样式表 -->
    <link rel="stylesheet" href="./a.css">
    <style>
        /* @import 在css环境中 导入外部css */
        @import url('./b.css');
        .box{
            width: 100px;
            height: 100px;
            background: green;
        }
    </style>
</head>
```

