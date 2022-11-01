import{_ as e,o as d,c as o,a as c}from"./app.adfd12da.js";const a={},i=c(`<h1 id="get-\u548C-post-\u533A\u522B" tabindex="-1"><a class="header-anchor" href="#get-\u548C-post-\u533A\u522B" aria-hidden="true">#</a> get \u548C post \u533A\u522B</h1><h2 id="\u662F\u4EC0\u4E48" tabindex="-1"><a class="header-anchor" href="#\u662F\u4EC0\u4E48" aria-hidden="true">#</a> \u662F\u4EC0\u4E48</h2><p><code>GET</code>\u548C<code>POST</code>\uFF0C\u4E24\u8005\u662F<code>HTTP</code>\u534F\u8BAE\u4E2D\u53D1\u9001\u8BF7\u6C42\u7684\u65B9\u6CD5</p><h4 id="get" tabindex="-1"><a class="header-anchor" href="#get" aria-hidden="true">#</a> GET</h4><p><code>GET</code>\u65B9\u6CD5\u8BF7\u6C42\u4E00\u4E2A\u6307\u5B9A\u8D44\u6E90\u7684\u8868\u793A\u5F62\u5F0F\uFF0C\u4F7F\u7528 GET \u7684\u8BF7\u6C42\u5E94\u8BE5\u53EA\u88AB\u7528\u4E8E\u83B7\u53D6\u6570\u636E\u3002\u5C31\u662F\u540C\u6837\u53C2\u6570\u6BCF\u6B21 get \u8BF7\u6C42\u8FD4\u56DE\u7684\u6570\u636E\u90FD\u662F\u4E00\u6837\u7684\uFF0C\u591A\u6B21 get \u8BF7\u6C42\u8DDF\u4E00\u6B21 get \u8BF7\u6C42\u7ED3\u679C\u90FD\u662F\u4E00\u6837\u3002</p><h4 id="post" tabindex="-1"><a class="header-anchor" href="#post" aria-hidden="true">#</a> POST</h4><p><code>POST</code>\u65B9\u6CD5\u7528\u4E8E\u5C06\u5B9E\u4F53\u63D0\u4EA4\u5230\u6307\u5B9A\u7684\u8D44\u6E90\uFF0C\u901A\u5E38\u5BFC\u81F4\u5728\u670D\u52A1\u5668\u4E0A\u7684\u72B6\u6001\u53D8\u5316\u6216<strong>\u526F\u4F5C\u7528</strong>\uFF0C\u4E5F\u5C31\u662F post \u8BF7\u6C42\u8FD4\u56DE\u7684\u7ED3\u679C\u53EF\u80FD\u53D1\u751F\u53D8\u5316\uFF0C\u6BD4\u5982\u6DFB\u52A0\u6570\u636E\uFF0C\u5220\u9664\u6570\u636E\uFF0C\u4FEE\u6539\u6570\u636E\u7B49\u3002</p><h4 id="\u603B\u7ED3" tabindex="-1"><a class="header-anchor" href="#\u603B\u7ED3" aria-hidden="true">#</a> \u603B\u7ED3</h4><p>\u6240\u4EE5 get \u4E00\u822C\u7528\u4E8E\u8BF7\u6C42\u6570\u636E\uFF0Cpost \u4E00\u822C\u7528\u4E8E\u4FEE\u6539\u6570\u636E\u3002get \u4E0D\u80FD\u7528\u4E8E\u8BF7\u6C42\u6570\u636E\u53EF\u80FD\u4F1A\u53D1\u751F\u53D8\u5316\u7684\u8BF7\u6C42\u4E2D\uFF0C\u6BD4\u5982\u6DFB\u52A0\uFF0C\u5220\u9664\uFF0C\u4FEE\u6539\u7B49\u3002</p><h2 id="\u533A\u522B" tabindex="-1"><a class="header-anchor" href="#\u533A\u522B" aria-hidden="true">#</a> \u533A\u522B</h2><p>\u672C\u8D28\u4E0A\u90FD\u662F<code>TCP</code>\u94FE\u63A5\uFF0C\u5E76\u65E0\u5DEE\u522B\uFF0C\u4F46\u662F\u7531\u4E8E<code>HTTP</code>\u7684\u89C4\u5B9A\u548C\u6D4F\u89C8\u5668/\u670D\u52A1\u5668\u7684\u9650\u5236\uFF0C\u5BFC\u81F4\u4ED6\u4EEC\u5728\u5E94\u7528\u8FC7\u7A0B\u4E2D\u4F1A\u4F53\u73B0\u51FA\u4E00\u4E9B\u533A\u522B</p><ul><li>GET \u5728\u6D4F\u89C8\u5668\u56DE\u9000\u65F6\u662F\u65E0\u5BB3\u7684\uFF0C\u800C POST \u4F1A\u518D\u6B21\u63D0\u4EA4\u8BF7\u6C42\u3002</li><li>GET \u4EA7\u751F\u7684 URL \u5730\u5740\u53EF\u4EE5\u88AB Bookmark\uFF0C\u800C POST \u4E0D\u53EF\u4EE5\u3002</li><li><em><strong>GET \u8BF7\u6C42\u4F1A\u88AB\u6D4F\u89C8\u5668\u4E3B\u52A8 cache\uFF0C\u800C POST \u4E0D\u4F1A\uFF0C\u9664\u975E\u624B\u52A8\u8BBE\u7F6E\u3002</strong></em></li><li>GET \u8BF7\u6C42\u53EA\u80FD\u8FDB\u884C url \u7F16\u7801\uFF0C\u800C POST \u652F\u6301\u591A\u79CD\u7F16\u7801\u65B9\u5F0F\u3002</li><li><em><strong>GET \u8BF7\u6C42\u53C2\u6570\u4F1A\u88AB\u5B8C\u6574\u4FDD\u7559\u5728\u6D4F\u89C8\u5668\u5386\u53F2\u8BB0\u5F55\u91CC\uFF0C\u800C POST \u4E2D\u7684\u53C2\u6570\u4E0D\u4F1A\u88AB\u4FDD\u7559\u3002</strong></em></li><li>\u5BF9\u53C2\u6570\u7684\u6570\u636E\u7C7B\u578B\uFF0CGET \u53EA\u63A5\u53D7 ASCII \u5B57\u7B26\uFF0C\u800C POST \u6CA1\u6709\u9650\u5236\u3002</li><li><em><strong>GET \u53C2\u6570\u901A\u8FC7 URL \u4F20\u9012\uFF0CPOST \u653E\u5728 Request body \u4E2D</strong></em></li></ul><h3 id="\u53C2\u6570\u4F4D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u53C2\u6570\u4F4D\u7F6E" aria-hidden="true">#</a> \u53C2\u6570\u4F4D\u7F6E</h3><p>\u8C8C\u4F3C\u4ECE\u4E0A\u9762\u770B\u5230<code>GET</code>\u4E0E<code>POST</code>\u8BF7\u6C42\u533A\u522B\u975E\u5E38\u5927\uFF0C\u4F46\u4E24\u8005\u5B9E\u8D28\u5E76\u6CA1\u6709\u533A\u522B</p><p>\u65E0\u8BBA <code>GET</code>\u8FD8\u662F <code>POST</code>\uFF0C\u7528\u7684\u90FD\u662F\u540C\u4E00\u4E2A\u4F20\u8F93\u5C42\u534F\u8BAE\uFF0C\u6240\u4EE5\u5728\u4F20\u8F93\u4E0A\u6CA1\u6709\u533A\u522B</p><p>\u5F53\u4E0D\u643A\u5E26\u53C2\u6570\u7684\u65F6\u5019\uFF0C\u4E24\u8005\u6700\u5927\u7684\u533A\u522B\u4E3A\u7B2C\u4E00\u884C\u65B9\u6CD5\u540D\u4E0D\u540C</p><blockquote><p>POST /uri HTTP/1.1 \\r\\n</p><p>GET /uri HTTP/1.1 \\r\\n</p></blockquote><p>\u5F53\u643A\u5E26\u53C2\u6570\u7684\u65F6\u5019\uFF0C\u6211\u4EEC\u90FD\u77E5\u9053<code>GET</code>\u8BF7\u6C42\u662F\u653E\u5728<code>url</code>\u4E2D\uFF0C<code>POST</code>\u5219\u653E\u5728<code>body</code>\u4E2D</p><p><code>GET</code> \u65B9\u6CD5\u7B80\u7EA6\u7248\u62A5\u6587\u662F\u8FD9\u6837\u7684</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>GET /index.html?name=qiming.c&amp;age=22 HTTP/1.1
Host: localhost
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><code>POST</code>\u65B9\u6CD5\u7B80\u7EA6\u7248\u62A5\u6587\u662F\u8FD9\u6837\u7684</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>POST /index.html HTTP/1.1
Host: localhost
Content-Type: application/x-www-form-urlencoded

name=qiming.c&amp;age=22
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><em>\u6CE8\u610F\uFF1A\u8FD9\u91CC\u53EA\u662F\u7EA6\u5B9A\uFF0C\u5E76\u4E0D\u5C5E\u4E8E<code>HTTP</code>\u89C4\u8303\uFF0C\u76F8\u53CD\u7684\uFF0C\u6211\u4EEC\u53EF\u4EE5\u5728<code>POST</code>\u8BF7\u6C42\u4E2D<code>url</code>\u4E2D\u5199\u5165\u53C2\u6570\uFF0C\u6216\u8005<code>GET</code>\u8BF7\u6C42\u4E2D\u7684<code>body</code>\u643A\u5E26\u53C2\u6570</em></p><h3 id="\u53C2\u6570\u957F\u5EA6" tabindex="-1"><a class="header-anchor" href="#\u53C2\u6570\u957F\u5EA6" aria-hidden="true">#</a> \u53C2\u6570\u957F\u5EA6</h3><p><code>HTTP</code>\u534F\u8BAE\u6CA1\u6709<code>Body</code>\u548C <code>URL</code> \u7684\u957F\u5EA6\u9650\u5236\uFF0C<em><strong>\u5BF9 <code>URL</code>\u9650\u5236\u7684\u5927\u591A\u662F\u6D4F\u89C8\u5668\u548C\u670D\u52A1\u5668\u7684\u539F\u56E0</strong></em></p><p><code>IE</code>\u5BF9<code>URL</code>\u957F\u5EA6\u7684\u9650\u5236\u662F 2083 \u5B57\u8282(2K+35)\u3002\u5BF9\u4E8E\u5176\u4ED6\u6D4F\u89C8\u5668\uFF0C\u5982 Netscape\u3001FireFox \u7B49\uFF0C\u7406\u8BBA\u4E0A\u6CA1\u6709\u957F\u5EA6\u9650\u5236\uFF0C\u5176\u9650\u5236\u53D6\u51B3\u4E8E\u64CD\u4F5C\u7CFB\u7EDF\u7684\u652F\u6301</p><p>\u8FD9\u91CC\u9650\u5236\u7684\u662F\u6574\u4E2A<code>URL</code>\u957F\u5EA6\uFF0C\u800C\u4E0D\u4EC5\u4EC5\u662F\u53C2\u6570\u503C\u7684\u957F\u5EA6</p><p>\u670D\u52A1\u5668\u5904\u7406\u957F<code>URL</code> \u8981\u6D88\u8017\u6BD4\u8F83\u591A\u7684\u8D44\u6E90\uFF0C\u4E3A\u4E86\u6027\u80FD\u548C\u5B89\u5168\u8003\u8651\uFF0C\u4F1A\u7ED9 <code>URL</code> \u957F\u5EA6\u52A0\u9650\u5236</p><h3 id="\u5B89\u5168" tabindex="-1"><a class="header-anchor" href="#\u5B89\u5168" aria-hidden="true">#</a> \u5B89\u5168</h3><p><code>POST</code>\u6BD4<code>GET</code> \u5B89\u5168\uFF0C\u56E0\u4E3A\u6570\u636E\u5728\u5730\u5740\u680F\u4E0A\u4E0D\u53EF\u89C1</p><p>\u7136\u800C\uFF0C<em><strong>\u4ECE\u4F20\u8F93\u7684\u89D2\u5EA6\u6765\u8BF4\uFF0C\u4ED6\u4EEC\u90FD\u662F\u4E0D\u5B89\u5168\u7684</strong></em>\uFF0C\u56E0\u4E3A<code>HTTP</code> \u5728\u7F51\u7EDC\u4E0A\u662F\u660E\u6587\u4F20\u8F93\u7684\uFF0C\u53EA\u8981\u5728\u7F51\u7EDC\u8282\u70B9\u4E0A\u6349\u5305\uFF0C\u5C31\u80FD\u5B8C\u6574\u5730\u83B7\u53D6\u6570\u636E\u62A5\u6587</p><p>\u53EA\u6709\u4F7F\u7528<code>HTTPS</code>\u624D\u80FD\u52A0\u5BC6\u5B89\u5168</p><h3 id="\u6570\u636E\u5305" tabindex="-1"><a class="header-anchor" href="#\u6570\u636E\u5305" aria-hidden="true">#</a> \u6570\u636E\u5305</h3><p>\u5BF9\u4E8E<code>GET</code>\u65B9\u5F0F\u7684\u8BF7\u6C42\uFF0C\u6D4F\u89C8\u5668\u4F1A\u628A<code>http header</code>\u548C<code>data</code>\u4E00\u5E76\u53D1\u9001\u51FA\u53BB\uFF0C\u670D\u52A1\u5668\u54CD\u5E94 200\uFF08\u8FD4\u56DE\u6570\u636E\uFF09</p><p>\u5BF9\u4E8E<code>POST</code>\uFF0C\u6D4F\u89C8\u5668\u5148\u53D1\u9001<code>header</code>\uFF0C\u670D\u52A1\u5668\u54CD\u5E94 100 <code>continue</code>\uFF0C\u6D4F\u89C8\u5668\u518D\u53D1\u9001<code>data</code>\uFF0C\u670D\u52A1\u5668\u54CD\u5E94 200 ok</p><p>\u5E76\u4E0D\u662F\u6240\u6709\u6D4F\u89C8\u5668\u90FD\u4F1A\u5728<code>POST</code>\u4E2D\u53D1\u9001\u4E24\u6B21\u5305\uFF0C<code>Firefox</code>\u5C31\u53EA\u53D1\u9001\u4E00\u6B21</p>`,36),r=[i];function t(n,s){return d(),o("div",null,r)}var h=e(a,[["render",t],["__file","get-post.html.vue"]]);export{h as default};
