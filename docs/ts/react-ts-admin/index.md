### 使用 [Create React App](https://www.html.cn/create-react-app/) 创建react项目

创建`ts`版本

```
npx create-react-app react-ts-antd-demo --template typescript
```

创建`js`版本

```
npx create-react-app react-js-antd-demo
```

#### 启动项目

```
npm run start
```



#### 问题

##### chrom浏览器报错

在chrom浏览器打开时，我们会看到下面这样`warning`警告。出现这样的警告是因为React 18 不再支持 ReactDOM.render

其实在index.js入口文件中改用 createRoot即可消除警告

![image-20220407173550578](C:\Users\v_vrjrruan\AppData\Roaming\Typora\typora-user-images\image-20220407173550578.png)

修改`index.tsx`文件内容

```tsx
import { createRoot } from 'react-dom/client'
import App from './App'
import './assets/base.css'

createRoot(document.getElementById('root')).render(<App />)
```

##### QQ浏览器报错

![image-20220407181425838](C:\Users\v_vrjrruan\AppData\Roaming\Typora\typora-user-images\image-20220407181425838.png)



在`publi/index.html`文件header内加入如下代码

```html
<script>
   this.globalThis || (this.globalThis = this)
</script>
```

