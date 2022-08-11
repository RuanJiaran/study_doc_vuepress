## 什么是CSS Hack

>一般来说是针对不同的浏览器写不同的CSS,就是 CSS Hack。
>CSS Hack常见的有三种形式：
>`条件注释Hack` , `属性Hack` , `选择符Hack` Hack主要针对IE浏览器

## 条件Hack

条件注释只有在IE浏览器下才能执行，这个代码在非IE浏览下被当做注释视而不见。可以通过IE条件注释载入不同的CSS、JS、HTML和服务器代码等。

```html
<!--[if IE]>
    <p>你在非IE中将看不到我的身影</p>
<![endif]-->

<!--[if IE]>
<style>
    .test{color:red;}
</style>
<![endif]-->
 
<!--[if lt IE 9]>
    <script src="//cdn.bootcss.com/html5shiv/3.7.2/html5shiv.min.js"></script>
    <script src="//cdn.bootcss.com/respond.js/1.4.2/respond.min.js"></script>
<![endif]-->
```

## 属性Hack

- IE6 能识别下划线和星号
- IE7能识别星号，但不能识别下划线，而 firefox 两个都不能认识
- background-color:red9; 9所有的 ie 浏览器可识别
- background-color:yellow0; 0 是留给 ie8 的

```css
.test{ 
    color:#090\09; 	/*  For IE8+、FF */ 
    *color:#f00; 	/ * For IE7 * / 
    _color:#ff0; 	/*  For IE6  */ 
}
```

## 选择符Hack

>IE6能识别 `*html .class{}`，IE7能识别`*+html .class{}`

```css
* html .test{color:#090;} /* For IE6 and earlier */
*+html .test{color:#ff0;} /* For IE7 */
.test{color:#f00;} /* For IE8+ and not IE */
```

##### 浏览器优先级别

FF<IE7<IE6,CSS hack

书写顺序一般为FF(FireFox火狐) IE7 IE6

以" #demo {width:100px;} "为例:

```css
#demo {width:100px;} /*被FIREFOX,IE6,IE7执行.*/
* html #demo {width:120px;} /*会被IE6执行,之前的定义会被后来的覆盖,所以#demo的宽度在IE6就为120px; */
*+html #demo {width:130px;} /*会被IE7执行*/
所以最后,#demo的宽度在三个浏览器的解释为: FIREFOX:100px; ie6:120px; ie7:130px;
```

##### IE8+ 最新属性css hack：
- "9"　例:"border:1px 9;"这里的"9"可以区别所有IE和FireFox.（只针对IE9 Hack）
- "0"　IE8识别，IE6、IE7不能
- "*"　IE6、IE7可以识别.IE8、FireFox不能
- "_"　IE6可以识别"_",IE7、IE8、FireFox不能