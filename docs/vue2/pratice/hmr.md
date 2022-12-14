# vite 开启 HMR 热更新优化

> 最近在做一个 vite + react + antd 架构的后台管理系统项目，但在开发过程中发现，每次改变代码，页面响应改变的时间都要一分钟以上，这让人着实不能忍啊，于是就有了下面这篇 vite 热更新的文章

#### 发现问题

每次更改代码的时候，页面都会自动重新加载。但是是整个页面刷新，浏览器的标签页一直处于加载状态，整个页面也是一片空白。这说名 vite 的 hmr 是开启的，但是热更新有问题，没有做到对应文件的热重载，而且刷新也整个页面，把所有文件全部重新加载了一边，导致每次更新都需要一分钟。

![image-20221029210627764](../../.vuepress/public/img/image-20221029210627764.png)



代码更改，页面渲染完毕后。从 chrom 的 network 调试栏下面可以看到这几个指标，总共加载了 171 个文件，dom 加载用了(DOMContentLoaded 21.08s ) ，页面完成渲染用了 （finish 52.13s），Load 50.06s  [指标详解](https://blog.csdn.net/qq_33539213/article/details/105999724)

![image-20221029210601324](../../.vuepress/public/img/image-20221029210601324.png)



查看了 `vite.config.ts` 配置文件 hmr 也确实是开启的。

![image-20221029210136832](../../.vuepress/public/img/image-20221029210136832.png)



## 优化

在入口文件加入热更新代码，[vite官方文档 Hmr](https://vitejs.cn/guide/api-hmr.html)

![image-20221029211623914](../../.vuepress/public/img/image-20221029211623914.png)



加入这个后，再更改代码，编译时会出现 hmr 标识，热重载已经生效，再看页面也不会出现整个页面刷新的情况了，更新的时间从之前的一分钟降低到了 15s ，大大提高了编译速度

![image-20221029211756657](../../.vuepress/public/img/image-20221029211756657.png)