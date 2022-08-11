##### 前言

>不同浏览器的内核不尽相同，所以各个浏览器对网页的解析存在一定的差异。
>浏览器内核主要分为两种，一是渲染引擎，另一个是js 引擎
>所以浏览器兼容性问题一般指：css兼容、js兼容

| 浏览器      | 内核（渲染引擎）                 |
| ----------- | -------------------------------- |
| Chrome谷歌  | 之前Webkit，已改Blink内核        |
| FireFox火狐 | Gecko                            |
| Safari苹果  | Webkit                           |
| IE          | Trident                          |
| Opera欧朋   | 现已改用Google Chrome的Blink内核 |

# css兼容

## 1.不同浏览器标签的默认样式

**问题症状：** 随便写几个标签，不加样式控制的情况下，各自的margin 和padding差异较大

**解决方案：**

1. CSS里 `*{margin:0;padding:0;}` 但是性能不好
2. 引入[reset.css](https://www.jq22.com/webqd6168)样式重置

## 2.css3新属性

**加浏览器前缀兼容早期浏览器**

```
-moz- 		/* 火狐浏览器 */
-webkit- 	/* [Safari](https://so.csdn.net/so/search?q=Safari&spm=1001.2101.3001.7020), 谷歌浏览器等使用Webkit引擎的浏览器 */
-o- 		/* Opera浏览器(早期) */
-ms- 		/* IE */
```

**哪些css3属性需要加：**

```
定义关键帧动画 @keyframes
css3中的变形（transform）、过渡(transtion)、动画(animation)
border-radius 圆角
box-shadow  盒子阴影
flex  弹性布局
....
```

**使用**

```css
.myClass {
	-webkit-animation-name: fadeIn;
	-moz-animation-name: fadeIn;
	-o-animation-name: fadeIn;
	-ms-animation-name: fadeIn;
	animation-name: fadeIn;  /* 不带前缀的放到最后 */
}
/* 复杂属性 keyframes */
@-webkit-keyframes fadeIn {
	0% { opacity: 0; } 100% { opacity: 0; }
}
@-moz-keyframes fadeIn {
	0% { opacity: 0; } 100% { opacity: 0; }
}
@-o-keyframes fadeIn {
	0% { opacity: 0; } 100% { opacity: 0; }
}
@-ms-keyframes fadeIn {
	0% { opacity: 0; } 100% { opacity: 0; }
}
/* 不带前缀的放到最后 */
@keyframes fadeIn {
	0% { opacity: 0; } 100% { opacity: 0; }
}
```

## 3.块属性标签float后，IE 浏览器margin加倍的问题

**问题症状:** 常见症状是IE6中后面的一块被顶到下一行

**解决方案：** 设置为float的div在ie下设置的margin会加倍。这是一个ie6都存在的bug。解决方案是在这个div里面加上display:inline

```css
<div id='imfloat'>

#imfloat{
    float:left;
    margin:5px;		//IE下理解为10px
    display:inline;	//IE下再理解为5px
}
```

**备注：** 我们最常用的就是div+CSS布局了，而div就是一个典型的块属性标签，横向布局的时候我们通常都是用div float实现的，横向的间距设置如果用margin实现，这就是一个必然会碰到的兼容性问题。

## 4.设置较小高度标签（一般小于10px），在IE6，IE7，遨游中高度超出自己设置高度

**问题症状：** 设置div高度小于10px，IE6、7和遨游里div的高度，超出自己设置的10px.

**解决方案：**

1. 给超出高度的标签设置overflow:hidden
2. 或者设置行高line-height 小于你设置的高度

**备注：** 这种情况一般出现在我们设置小圆角背景的标签里。出现这个问题的原因是IE8之前的浏览器都会给标签一个`最小默认的行高的高度`。即使你的标签是`空`的，这个标签的高度还是会达到`默认的行高`。

## 5.行内属性标签，设置display:block后采用float布局，又有横行的margin的情况，IE6间距bug

**问题症状：** IE6里的间距比超过设置的间距

**解决方案：** 在`display:block;`后面加入`display:inline;display:table`

**备注：** 行内属性标签，为了设置宽高，我们需要设置display:block;(除了input/img标签比较特殊)。在用float布局并有横向的margin后，在IE6下，他就具有了块属性float后的横向margin的bug。不过因为它本身就是行内属性标签，所以我们再加上display:inline的话，它的高宽就不可设了。这时候我们还需要在display:inline后面加入display:talbe

## 6.IE浏览器div最小宽度和高度的问题

**问题症状：** IE浏览器div最小宽度和高度不生效

IE不认得min-这个定义，但实际上它把正常的width和height当作有min的情况来使。这样问题就大了，如果只用宽度和高度，正常的浏览器里这两个值就不会变，如果只用min-width和min-height的话，IE下面根本等于没有设置宽度和高度。

比如要设置背景图片，这个最小宽度是比较重要的。要解决这个问题，可以这样：
```css
#box{
    width: 80px;
    height: 35px;
}
html>body #box{
    width: auto;
    height: auto; 
    min-width: 80px; 
    min-height: 35px;
}
```

## 7.超链接访问过后hover样式就不出现的问题

被点击访问过的超链接样式不在具有hover和active了,很多人应该都遇到过这个问题,解决技巧是改变CSS属性的排列顺序: `L-V-H-A`

```html
<style type="text/css">
    a:link {}
    a:visited {}
    a:hover {}
    a:active {}
</style>
```

## 8.图片默认有间距

**问题症状：**几个img标签放在一起的时候，有些浏览器会有默认的间距，通配符清除间距也不起作用

**解决方案：** 使用float属性为img布局(所有图片左浮)

**备注：** 因为img标签是行内属性标签，所以只要不超出容器宽度，img标签都会排在一行里，但是部分浏览器的 img 标签之间会有个间距。去掉这个间距使用float是正道。

## 9.css hack解决浏览器兼容性

不同浏览器，识别不同的样式，css hack本身就是处理浏览器兼容的。

```css
background-color:yellow0; 0 是留给ie8的
+background-color:pink;   + ie7定了；
_background-color:orange; _专门留给神奇的ie6；
```



# js兼容

## 1.事件绑定

**IE:** `dom.attachEvent()`;
**标准浏览器：** `dom.addEventListener(‘click',function(event){},false)`;

标准浏览器采用事件捕获的方式对应IE的事件冒泡机制（即标准由最外元素至最内元素或者IE由最内元素到最外元素）最后标准方亦觉得IE这方面的比较合理，所以便将事件冒泡纳入了标准，这也是addEventListener第三个参数的由来，而且事件冒泡作为了默认值第三值默认false，表示事件冒泡方式。

如果浏览器不支持 addEventListener()方法, 你可以使用 attachEvent()方法替代。

以下实例演示了跨浏览器的解决方法：
```js
var x = document.getElementById("myBtn");
if (x.addEventListener) {   //所有主流浏览器，ie9+
    x.addEventListener("click", myFunction);
} else if (x.attachEvent) {      // IE 8 及更早 IE 版本
    x.attachEvent("onclick", myFunction);
}
```

## 2.event事件对象问题

```js
document.onclick=function(ev){//谷歌火狐的写法，IE9以上支持，往下不支持；
    var e=ev;
    console.log(e);
}
document.onclick=function(){//谷歌和IE支持，火狐不支持；
    var e=event;
    console.log(e);
}
document.onclick=function(ev){//兼容写法；
    var e=ev||window.event;
    var mouseX=e.clientX;//鼠标X轴的坐标
    var mouseY=e.clientY;//鼠标Y轴的坐标
}
```

## 3.event.srcElement(事件源对象)问题

**IE：** `event`对象有`srcElement`属性，但是没有`target`属性；
**Firefox:** `event`对象有`target`属性，但是没有`srcElement`属性。

**解决方法：**

```js
srcObj = event.srcElement ? event.srcElement : event.target;
```

## 4.获取元素的非行间样式值

**IE:** dom.currentStyle[‘width’] 获取元素高度
**标准浏览器：** `window.getComputedStyle(obj, null)['width'];`

**跨浏览器兼容解决方法：**

```js
// 获取元素属性值的兼容写法
function getStyle(obj,attr){
    if(obj.currentStyle){
        //兼容IE
        obj.currentStyle[attr];
        return obj.currentStyle[attr];
    }else{
        //非IE，
        return window.getComputedStyle(obj, null)[attr]; 
    }
}
```

## 5.阻止事件冒泡传播

```js
//js阻止事件传播，这里使用click事件为例
document.onclick=function(e){
    var e=e||window.event;
    if (e.stopPropagation) {
        e.stopPropagation();//W3C标准
    }else{
        e.cancelBubble=true;//IE....
    }
}
```

## 6.阻止事件默认行为

```js
//js阻止默认事件   一般阻止a链接href，form表单submit提交
document.onclick=function(e){
    var e=e||window.event;
    if (e.preventDefault) {
        e.preventDefault();//W3C标准
    }else{
        e.returnValue='false';//IE..
    }
}
```

## 7.ajax兼容问题

**IE：** ActiveXObject
**其他：** xmlHttpReuest

在IE6以前不是用XMLHttpRequest创建的，所以我们要兼容ie6以前的浏览器要判断他有没有XMLHttpRequest()

**跨浏览器兼容解决方法：**

```js
<script>
    window.onload = function(){
    var oBtn = document.getElementById('btn');
    oBtn.onclick = function(){
        //1.创建ajax对象
        //只支持非IE6浏览器
        var oAjax = null;
        if(window.XMLHttpRequest){
            oAjax = new XMLHttpRequest();				
            //alert(new XMLHttpRequest());
        }else{
            //只支持IE6浏览器
            oAjax = new ActiveXObject("Microsoft.XMLHTTP");	
        }
        //2.连接服务器,这里加个时间参数,每次访问地址都不一样,浏览器就不用浏览器里的缓冲了,但
        //	但服务器那端是不解析这个时间的
        oAjax.open("get","a.txt?t=" + new Date().getTime(),true);
        //3.发送
        oAjax.send(null);		
        //4.接受信息
        oAjax.onreadystatechange = function(){
            //浏览器与服务器之间的交互,进行到哪一步了,当等于4的时候,代表读取完成了
            if(oAjax.readyState==4){
                //状态码,只有等于200,代表接受完成,并且成功了
                if(oAjax.status==200){
                    alert("成功" + oAjax.responseText);	
                }else{
                    alert("失败");	
                }	
            }	
        };

    };
};
</script>
```

