import{_ as e,o,c as d,a}from"./app.d2eb7f9c.js";var r="/study/assets/3.82ca7826.png",t="/study/assets/4.6b33f933.png";const l={},s=a('<h2 id="mvvm" tabindex="-1"><a class="header-anchor" href="#mvvm" aria-hidden="true">#</a> MVVM</h2><p>MVVM \u662F <code>Model-View-ViewModel</code> \u7684\u7F29\u5199\uFF0C\u5206\u522B\u5BF9\u5E94\u7740\uFF1A<code>\u6570\u636E\uFF0C\u89C6\u56FE\uFF0C\u89C6\u56FE\u6A21\u578B</code>\u3002Model \u662F\u6211\u4EEC\u5E94\u7528\u4E2D\u7684\u6570\u636E\u6A21\u578B\uFF0CView \u662F\u6211\u4EEC\u7684 UI \u89C6\u56FE\u5C42\uFF0C\u901A\u8FC7 ViewModle\uFF0C\u53EF\u4EE5\u628A\u6211\u4EEC Modle \u4E2D\u7684\u6570\u636E\u6620\u5C04\u5230 View \u89C6\u56FE\u4E0A\uFF0C\u540C\u65F6\uFF0C\u5728 View \u5C42\u4FEE\u6539\u4E86\u4E00\u4E9B\u6570\u636E\uFF0C\u4E5F\u4F1A\u53CD\u5E94\u66F4\u65B0\u6211\u4EEC\u7684 Modle\u3002\u7B80\u5355\u7406\u89E3\u5C31\u662F\u53CC\u5411\u6570\u636E\u7ED1\u5B9A\uFF0C\u5373\u5F53\u6570\u636E\u53D1\u751F\u53D8\u5316\u7684\u65F6\u5019\uFF0C\u89C6\u56FE\u4E5F\u5C31\u53D1\u751F\u53D8\u5316\uFF0C\u5F53\u89C6\u56FE\u53D1\u751F\u53D8\u5316\u7684\u65F6\u5019\uFF0C\u6570\u636E\u4E5F\u4F1A\u8DDF\u7740\u540C\u6B65\u53D8\u5316</p><p><strong>\u4EE5 vue \u4E3A\u4F8B</strong></p><p>View \u5BF9\u5E94 template\uFF0CViewModel \u5BF9\u5E94 <code>new Vue({\u2026})</code>\uFF0CModel \u5BF9\u5E94 data</p><p><strong>\u4E09\u8005\u7684\u5173\u7CFB</strong></p><p>view \u53EF\u4EE5\u901A\u8FC7\u4E8B\u4EF6\u7ED1\u5B9A(\u6216 v-model \u6307\u4EE4)\u7684\u65B9\u5F0F\u5F71\u54CD model\uFF0Cmodel \u53EF\u4EE5\u901A\u8FC7\u6570\u636E\u7ED1\u5B9A\u7684\u5F62\u5F0F\u5F71\u54CD\u5230 view\uFF0CviewModel \u662F\u628A model \u548C view \u8FDE\u8D77\u6765\u7684\u8FDE\u63A5\u5668</p><p><img src="'+r+'" alt="\u5728\u8FD9\u91CC\u63D2\u5165\u56FE\u7247\u63CF\u8FF0"></p><h2 id="mvc-\u5178\u578B\u7684\u6846\u67B6\u6709-angular-js-php" tabindex="-1"><a class="header-anchor" href="#mvc-\u5178\u578B\u7684\u6846\u67B6\u6709-angular-js-php" aria-hidden="true">#</a> MVC\uFF08\u5178\u578B\u7684\u6846\u67B6\u6709 angular.js\uFF0Cphp\uFF09</h2><p>MVC \u662F <code>Model\u3001View\u3001Controller</code>\u5373<code> \u6570\u636E\u6A21\u578B\u3001\u89C6\u56FE\u3001\u63A7\u5236\u5668</code></p><p>View\uFF1A\u89C6\u56FE\u5C42\uFF1B Model\uFF1A\u4E1A\u52A1\u6570\u636E\u5C42\uFF1B Controller\uFF1A \u63A7\u5236\u5668\u3002\u63A5\u6536 View \u5C42\u4F20\u9012\u8FC7\u6765\u7684\u6307\u4EE4\uFF0C\u9009\u53D6 Model \u5C42\u5BF9\u5E94\u7684\u6570\u636E\uFF0C\u8FDB\u884C\u76F8\u5E94\u64CD\u4F5C</p><p><strong>\u7279\u70B9</strong>\uFF1AMVC \u6709\u5982\u4E0B\u4E24\u79CD\u6A21\u5F0F\uFF0C\u4E0D\u7BA1\u54EA\u79CD\u6A21\u5F0F\uFF0CMVC \u7684\u901A\u4FE1\u90FD\u662F\u5355\u5411\u7684\uFF0C\u7531\u56FE\u4E5F\u53EF\u4EE5\u770B\u51FA\uFF0CView \u5C42\u4F1A\u4ECE Model \u5C42\u62FF\u6570\u636E\uFF0C\u56E0\u6B64 MVC \u4E2D\u7684 View \u5C42\u548C Model \u5C42\u8FD8\u662F\u5B58\u5728\u8026\u5408\u7684</p><p><img src="'+t+'" alt="\u5728\u8FD9\u91CC\u63D2\u5165\u56FE\u7247\u63CF\u8FF0"></p>',12),i=[s];function c(p,n){return o(),d("div",null,i)}var V=e(l,[["render",c],["__file","mvvm.html.vue"]]);export{V as default};
