import{_ as p,o as e,c as o,b as n,d as t,e as s,a as c,r as u}from"./app.d2eb7f9c.js";const l={},i=n("h1",{id:"\u6570\u7EC4\u6241\u5E73\u5316\u5904\u7406",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u6570\u7EC4\u6241\u5E73\u5316\u5904\u7406","aria-hidden":"true"},"#"),s(" \u6570\u7EC4\u6241\u5E73\u5316\u5904\u7406")],-1),r=n("h2",{id:"\u4EC0\u4E48\u662F\u6570\u7EC4\u6241\u5E73\u5316",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u4EC0\u4E48\u662F\u6570\u7EC4\u6241\u5E73\u5316","aria-hidden":"true"},"#"),s(" \u4EC0\u4E48\u662F\u6570\u7EC4\u6241\u5E73\u5316\uFF1F")],-1),k=s("\u6570\u7EC4\u6241\u5E73\u5316\u5C31\u662F\u5C06\u4E00\u4E2A"),d={href:"https://so.csdn.net/so/search?q=%E5%A4%9A%E7%BB%B4%E6%95%B0%E7%BB%84&spm=1001.2101.3001.7020",target:"_blank",rel:"noopener noreferrer"},v=s("\u591A\u7EF4\u6570\u7EC4"),m=s("\u8F6C\u6362\u4E3A\u4E00\u4E2A\u4E00\u7EF4\u6570\u7EC4"),b=n("h2",{id:"\u5B9E\u73B0\u57FA\u672C\u65B9\u5F0F",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u5B9E\u73B0\u57FA\u672C\u65B9\u5F0F","aria-hidden":"true"},"#"),s(" \u5B9E\u73B0\u57FA\u672C\u65B9\u5F0F")],-1),h=s("1\u3001\u5BF9\u6570\u7EC4\u7684\u6BCF\u4E00\u9879\u8FDB\u884C"),f={href:"https://so.csdn.net/so/search?q=%E9%81%8D%E5%8E%86&spm=1001.2101.3001.7020",target:"_blank",rel:"noopener noreferrer"},y=s("\u904D\u5386"),g=s("\u3002"),_=c(`<p>2\u3001\u5224\u65AD\u8BE5\u9879\u662F\u5426\u662F\u6570\u7EC4\u3002</p><p>3\u3001\u5982\u679C\u8BE5\u9879\u4E0D\u662F\u6570\u7EC4\u5219\u5C06\u5176\u76F4\u63A5\u653E\u8FDB\u65B0\u6570\u7EC4\u3002</p><p>4\u3001\u662F\u6570\u7EC4\u5219\u56DE\u5230 1\uFF0C\u7EE7\u7EED\u8FED\u4EE3\u3002</p><p>5\u3001\u5F53\u6570\u7EC4\u904D\u5386\u5B8C\u6210\uFF0C\u8FD4\u56DE\u8FD9\u4E2A\u65B0\u6570\u7EC4\u3002</p><h2 id="\u65B9\u6CD5\u4E00\u3001\u9012\u5F52\u5904\u7406" tabindex="-1"><a class="header-anchor" href="#\u65B9\u6CD5\u4E00\u3001\u9012\u5F52\u5904\u7406" aria-hidden="true">#</a> \u65B9\u6CD5\u4E00\u3001\u9012\u5F52\u5904\u7406</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token class-name">Array</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">flatten</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> resultArr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
  <span class="token keyword">var</span> len <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>length
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> len<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>Array<span class="token punctuation">.</span><span class="token function">isArray</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      resultArr <span class="token operator">=</span> resultArr<span class="token punctuation">.</span><span class="token function">concat</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">flatten</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      resultArr<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> resultArr
<span class="token punctuation">}</span>
<span class="token keyword">var</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token string">&#39;hello&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">&#39;world&#39;</span><span class="token punctuation">,</span> <span class="token number">9</span><span class="token punctuation">,</span> <span class="token number">666</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">]</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr<span class="token punctuation">.</span><span class="token function">flatten</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">//[1, 2, 3, 4, 5, &quot;hello&quot;, &quot;world&quot;, 9, 666]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u65B9\u6CD5\u4E8C\u3001\u4F7F\u7528-reduce-\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u65B9\u6CD5\u4E8C\u3001\u4F7F\u7528-reduce-\u65B9\u6CD5" aria-hidden="true">#</a> \u65B9\u6CD5\u4E8C\u3001\u4F7F\u7528 reduce \u65B9\u6CD5</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token class-name">Array</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">flatten</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">reduce</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">prev<span class="token punctuation">,</span> cur<span class="token punctuation">,</span> curIndex<span class="token punctuation">,</span> arr</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> Array<span class="token punctuation">.</span><span class="token function">isArray</span><span class="token punctuation">(</span>cur<span class="token punctuation">)</span> <span class="token operator">?</span> prev<span class="token punctuation">.</span><span class="token function">concat</span><span class="token punctuation">(</span>cur<span class="token punctuation">.</span><span class="token function">flatten</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">:</span> prev<span class="token punctuation">.</span><span class="token function">concat</span><span class="token punctuation">(</span>cur<span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u65B9\u6CD5\u4E09\u3001yield-\u7684\u7528\u6CD5-\u5929\u624D\u7EA7\u522B\u7684\u6241\u5E73\u5316\u65B9\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u65B9\u6CD5\u4E09\u3001yield-\u7684\u7528\u6CD5-\u5929\u624D\u7EA7\u522B\u7684\u6241\u5E73\u5316\u65B9\u5F0F" aria-hidden="true">#</a> \u65B9\u6CD5\u4E09\u3001yield*\u7684\u7528\u6CD5\uFF08\u5929\u624D\u7EA7\u522B\u7684\u6241\u5E73\u5316\u65B9\u5F0F\uFF09</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span><span class="token operator">*</span> <span class="token function">iterTree</span><span class="token punctuation">(</span><span class="token parameter">tree</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>Array<span class="token punctuation">.</span><span class="token function">isArray</span><span class="token punctuation">(</span>tree<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> tree<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">yield</span><span class="token operator">*</span> <span class="token function">iterTree</span><span class="token punctuation">(</span>tree<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token keyword">yield</span> tree
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">let</span> arr1 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;b&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">&#39;\u4E2D&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;\u6587&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">11</span><span class="token punctuation">,</span> <span class="token number">21</span><span class="token punctuation">,</span> <span class="token number">31</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span>
<span class="token keyword">let</span> list <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> x <span class="token keyword">of</span> <span class="token function">iterTree</span><span class="token punctuation">(</span>arr1<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  list<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>list<span class="token punctuation">)</span> <span class="token comment">//[1, 2, &quot;a&quot;, &quot;b&quot;, &quot;\u4E2D&quot;, &quot;\u6587&quot;, 1, 2, 3, 11, 21, 31, 3]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u65B9\u6CD5\u56DB\u3001es6-\u4E2D\u7684-flat-\u51FD\u6570\u4E5F\u53EF\u4EE5\u5B9E\u73B0\u6570\u7EC4\u7684\u6241\u5E73\u5316" tabindex="-1"><a class="header-anchor" href="#\u65B9\u6CD5\u56DB\u3001es6-\u4E2D\u7684-flat-\u51FD\u6570\u4E5F\u53EF\u4EE5\u5B9E\u73B0\u6570\u7EC4\u7684\u6241\u5E73\u5316" aria-hidden="true">#</a> \u65B9\u6CD5\u56DB\u3001es6 \u4E2D\u7684 flat \u51FD\u6570\u4E5F\u53EF\u4EE5\u5B9E\u73B0\u6570\u7EC4\u7684\u6241\u5E73\u5316</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">let</span> arr1 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;b&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">&#39;\u4E2D&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;\u6587&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">11</span><span class="token punctuation">,</span> <span class="token number">21</span><span class="token punctuation">,</span> <span class="token number">31</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr1<span class="token punctuation">.</span><span class="token function">flat</span><span class="token punctuation">(</span><span class="token number">Infinity</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u65B9\u6CD5\u4E94\u3001\u6269\u5C55\u8FD0\u7B97\u7B26" tabindex="-1"><a class="header-anchor" href="#\u65B9\u6CD5\u4E94\u3001\u6269\u5C55\u8FD0\u7B97\u7B26" aria-hidden="true">#</a> \u65B9\u6CD5\u4E94\u3001\u6269\u5C55\u8FD0\u7B97\u7B26</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">//ES6 \u589E\u52A0\u4E86\u6269\u5C55\u8FD0\u7B97\u7B26\uFF0C\u7528\u4E8E\u53D6\u51FA\u53C2\u6570\u5BF9\u8C61\u7684\u6240\u6709\u53EF\u904D\u5386\u5C5E\u6027\uFF0C\u62F7\u8D1D\u5230\u5F53\u524D\u5BF9\u8C61\u4E4B\u4E2D\uFF1A</span>

<span class="token keyword">var</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">]</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">concat</span><span class="token punctuation">(</span><span class="token operator">...</span>arr<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// [1, 2, [3, 4]]</span>
<span class="token comment">//\u6211\u4EEC\u7528\u8FD9\u79CD\u65B9\u6CD5\u53EA\u53EF\u4EE5\u6241\u5E73\u4E00\u5C42\uFF0C\u4F46\u662F\u987A\u7740\u8FD9\u4E2A\u65B9\u6CD5\u4E00\u76F4\u601D\u8003\uFF0C\u6211\u4EEC\u53EF\u4EE5\u5199\u51FA\u8FD9\u6837\u7684\u65B9\u6CD5\uFF1A</span>

<span class="token comment">// \u6539\u8FDB</span>
<span class="token keyword">var</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">]</span>

<span class="token keyword">function</span> <span class="token function">flatten</span><span class="token punctuation">(</span><span class="token parameter">arr</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">while</span> <span class="token punctuation">(</span>arr<span class="token punctuation">.</span><span class="token function">some</span><span class="token punctuation">(</span><span class="token parameter">item</span> <span class="token operator">=&gt;</span> Array<span class="token punctuation">.</span><span class="token function">isArray</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">concat</span><span class="token punctuation">(</span><span class="token operator">...</span>arr<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> arr
<span class="token punctuation">}</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">flatten</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,14);function w(x,A){const a=u("ExternalLinkIcon");return e(),o("div",null,[i,r,n("p",null,[k,n("a",d,[v,t(a)]),m]),b,n("p",null,[h,n("a",f,[y,t(a)]),g]),_])}var q=p(l,[["render",w],["__file","flat.html.vue"]]);export{q as default};
