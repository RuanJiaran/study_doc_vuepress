# cookie/localStorage/sessionStorage

## Cookie

Cookie 设计初衷是用来和服务器通讯，而不是本地存储，他只是被‘借用’到本地存储

cookie 的内容主要包括：名字 name，值 value，过期时间 expires，路径 path 和域 domain。路径和域一起构成 cookie 的作用范围。一般 cookie 储存在内存里，若设置了过期时间则储存在硬盘里，浏览器页面关闭也不会失效，直到设置的过期时间后才失效。若不设置 cookie 的过期时间，则有效期为浏览器窗口的会话期间，关闭浏览器窗口就失效。

##### 原理

客户端请求服务器时，如果服务器需要记录该用户状态，就使用 response 向客户端浏览器颁发一个 Cookie。而客户端浏览器会把 Cookie 保存起来。当浏览器再请求服务器时，浏览器把请求的网址连同该 Cookie 一同提交给服务器。

## Cookie 缺点

- 存储大小，最大 4KB
- http 请求时需要发送到服务端，增加请求数据量
- 只能用 document.cookie = '...' 来修改，太过简陋

## LocalStorage，SessionStorage

> 在 HTML5 中，新加入了一个`localStorage/sessionStorage`特性，这个特性主要是用来作为本地存储来使用的，解决了 cookie 存储空间不足的问题(cookie 中每条 cookie 的存储空间为 4k)，localStorage 中一般浏览器支持的是 5M 大小，只支持 string 类型存储

## LocalStorage，SessionStorage 与 Cookie 相比

- HTML5 专门为存储而设计，最大可存 5M
- API 简单易用 setItem，getItem
- 不会随 http 请求被发送出去

## Localstorage，SesstionStorage 不同点

- localStorage 数据会永久存储，除非代码或手动删除
- sessionStorage 数据只存在当前会话，浏览器关闭则清空
- 一般用 localStorage 会更多一些
