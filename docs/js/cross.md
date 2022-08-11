# 跨域

## 跨域形成汇总

| 说明                           | 示例                                                  |
| ------------------------------ | ----------------------------------------------------- |
| 同一域名，不同端口             | http://www.a.com:8000/a.js<br/>http://www.a.com/b.js  |
| 同一域名，不同协议             | http://www.a.com/a.js<br/>https://www.a.com/b.js      |
| 域名和域名对应 ip              | http://www.a.com/a.js<br/>http://70.32.92.74/b.js     |
| 主域相同，子域不同             | http://www.a.com/a.js<br/>http://script.a.com/b.js    |
| 同一域名，不同二级域名（同上） | http://www.a.com/a.js<br/>http://a.com/b.js           |
| 不同域名                       | http://www.cnblogs.com/a.js<br/>http://www.a.com/b.js |

## 解决跨域

1. 后端指定允许跨域 `'Access-Control-Allow-Origin:*'//或指定域`
2. jsonp
3. nginx 转发
