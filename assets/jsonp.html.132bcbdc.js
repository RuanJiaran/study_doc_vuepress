import{_ as n,o as s,c as a,a as t}from"./app.ef00ce81.js";const p={},e=t(`<h1 id="jsonp-\u539F\u7406" tabindex="-1"><a class="header-anchor" href="#jsonp-\u539F\u7406" aria-hidden="true">#</a> jsonp \u539F\u7406</h1><p>ajax \u8BF7\u6C42\u53D7\u540C\u6E90\u7B56\u7565\u5F71\u54CD\uFF0C\u4E0D\u5141\u8BB8\u8FDB\u884C\u8DE8\u57DF\u8BF7\u6C42\uFF0C\u6211\u4EEC\u5229\u7528 script \u6807\u7B7E\u7684 src \u5C5E\u6027\u4E0D\u53D7\u540C\u6E90\u7B56\u7565\u7684\u7EA6\u675F</p><h2 id="\u5B9E\u73B0\u6B65\u9AA4" tabindex="-1"><a class="header-anchor" href="#\u5B9E\u73B0\u6B65\u9AA4" aria-hidden="true">#</a> \u5B9E\u73B0\u6B65\u9AA4</h2><ol><li>\u52A8\u6001\u521B\u5EFA <code>&lt;script&gt;&lt;/script&gt;</code>( <code>document.createElement(&#39;script&#39;)</code> )</li><li>\u8BBE\u7F6E src \u5C5E\u6027\uFF0C(src \u4E2D\u8981\u5305\u542B\u53C2\u6570 <code>callback=fn</code> )\u8FDB\u884C\u8DE8\u57DF\u8BF7\u6C42</li><li>\u5C06 <code>&lt;script&gt;&lt;/script&gt; </code> \u6DFB\u52A0\u5230\u9875\u9762\u4E2D\u6267\u884C \uFF08 <code>body.appendChild(&#39;script&#39;)</code> \uFF09</li><li>\u9875\u9762\u8981\u63D0\u524D\u5B9A\u4E49\u597D callback</li><li>\u540E\u7AEF\u4F1A\u8FD4\u56DE\u56DE\u8C03\u51FD\u6570\u6267\u884C\u5E76\u5305\u88F9\u53C2\u6570 <code>callback(data)</code></li></ol><h2 id="\u5B9E\u73B0\u793A\u4F8B" tabindex="-1"><a class="header-anchor" href="#\u5B9E\u73B0\u793A\u4F8B" aria-hidden="true">#</a> \u5B9E\u73B0\u793A\u4F8B</h2><p>\u524D\u7AEF\u4EE3\u7801</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token operator">&lt;</span><span class="token operator">!</span><span class="token constant">DOCTYPE</span> html<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>html lang<span class="token operator">=</span><span class="token string">&quot;en&quot;</span><span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>head<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>meta charset<span class="token operator">=</span><span class="token string">&quot;UTF-8&quot;</span><span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>meta name<span class="token operator">=</span><span class="token string">&quot;viewport&quot;</span> content<span class="token operator">=</span><span class="token string">&quot;width=device-width, initial-scale=1.0&quot;</span><span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>meta http<span class="token operator">-</span>equiv<span class="token operator">=</span><span class="token string">&quot;X-UA-Compatible&quot;</span> content<span class="token operator">=</span><span class="token string">&quot;ie=edge&quot;</span><span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>title<span class="token operator">&gt;</span>Document<span class="token operator">&lt;</span><span class="token operator">/</span>title<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>script src<span class="token operator">=</span><span class="token string">&quot;https://cdn.bootcdn.net/ajax/libs/jquery/3.5.1/jquery.js&quot;</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>head<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>body<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>script<span class="token operator">&gt;</span>
        <span class="token keyword">function</span> <span class="token function">showInfo</span><span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
	<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>
	<span class="token operator">&lt;</span>script src<span class="token operator">=</span><span class="token string">&quot;http://127.0.0.1:3000/getscript?callback=showInfo&quot;</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>
	<span class="token operator">&lt;</span>button id<span class="token operator">=</span><span class="token string">&quot;btn&quot;</span><span class="token operator">&gt;</span>jsonp<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>body<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>html<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>script<span class="token operator">&gt;</span>
    <span class="token function">$</span><span class="token punctuation">(</span><span class="token string">&#39;#btn&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">click</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">var</span> frame <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">&#39;script&#39;</span><span class="token punctuation">)</span>
        frame<span class="token punctuation">.</span>src <span class="token operator">=</span> <span class="token string">&#39;http://localhost:3000/getscript?callback=showInfo&#39;</span>
        <span class="token function">$</span><span class="token punctuation">(</span><span class="token string">&#39;body&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span>frame<span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u540E\u7AEF\u4EE3\u7801</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// \u5BFC\u5165 http \u5185\u7F6E\u6A21\u5757</span>
<span class="token keyword">const</span> http <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;http&#39;</span><span class="token punctuation">)</span>

<span class="token comment">// \u8FD9\u4E2A\u6838\u5FC3\u6A21\u5757\uFF0C\u80FD\u591F\u5E2E\u6211\u4EEC\u89E3\u6790 URL\u5730\u5740\uFF0C\u4ECE\u800C\u62FF\u5230  pathname  query</span>
<span class="token keyword">const</span> urlModule <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;url&#39;</span><span class="token punctuation">)</span>

<span class="token comment">// \u521B\u5EFA\u4E00\u4E2A http \u670D\u52A1\u5668</span>
<span class="token keyword">const</span> server <span class="token operator">=</span> http<span class="token punctuation">.</span><span class="token function">createServer</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment">// \u76D1\u542C http \u670D\u52A1\u5668\u7684 request \u8BF7\u6C42</span>
server<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&#39;request&#39;</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// const url = req.url</span>
  <span class="token keyword">const</span> <span class="token punctuation">{</span> <span class="token literal-property property">pathname</span><span class="token operator">:</span> url<span class="token punctuation">,</span> query <span class="token punctuation">}</span> <span class="token operator">=</span> urlModule<span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span>req<span class="token punctuation">.</span>url<span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span>url <span class="token operator">===</span> <span class="token string">&#39;/getscript&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u62FC\u63A5\u4E00\u4E2A\u5408\u6CD5\u7684JS\u811A\u672C\uFF0C\u8FD9\u91CC\u62FC\u63A5\u7684\u662F\u4E00\u4E2A\u65B9\u6CD5\u7684\u8C03\u7528</span>
    <span class="token comment">// var scriptStr = &#39;show()&#39;</span>

    <span class="token keyword">var</span> data <span class="token operator">=</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;xjj&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">18</span><span class="token punctuation">,</span>
      <span class="token literal-property property">gender</span><span class="token operator">:</span> <span class="token string">&#39;\u5973\u5B69\u5B50&#39;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">var</span> scriptStr <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>query<span class="token punctuation">.</span>callback<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">(</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">)</span><span class="token template-punctuation string">\`</span></span>
    <span class="token comment">// res.end \u53D1\u9001\u7ED9 \u5BA2\u6237\u7AEF\uFF0C \u5BA2\u6237\u7AEF\u53BB\u628A \u8FD9\u4E2A \u5B57\u7B26\u4E32\uFF0C\u5F53\u4F5CJS\u4EE3\u7801\u53BB\u89E3\u6790\u6267\u884C</span>
    res<span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span>scriptStr<span class="token punctuation">)</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    res<span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span><span class="token string">&#39;404&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// \u6307\u5B9A\u7AEF\u53E3\u53F7\u5E76\u542F\u52A8\u670D\u52A1\u5668\u76D1\u542C</span>
server<span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span><span class="token number">3000</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;server listen at http://127.0.0.1:3000&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5907\u6CE8\uFF1A\u670D\u52A1\u7AEF\u4E0D\u518D\u8FD4\u56DE JSON \u683C\u5F0F\u7684\u6570\u636E\uFF0C\u800C\u662F\u8FD4\u56DE\u56DE\u8C03\u51FD\u6570\u5305\u88F9\u6570\u636E\uFF08<code>showInfo({name:&#39;tom&#39;,age:18}</code>\uFF09\uFF0C\u5728 src \u4E2D\u8FDB\u884C\u4E86\u8C03\u7528\uFF0C\u8FD9\u6837\u5B9E\u73B0\u4E86\u8DE8\u57DF</p>`,10),o=[e];function c(l,i){return s(),a("div",null,o)}var u=n(p,[["render",c],["__file","jsonp.html.vue"]]);export{u as default};
