import{_ as n,o as a,c as s,a as e}from"./app.ef00ce81.js";const t={},p=e(`<h1 id="\u539F\u751F-ajax" tabindex="-1"><a class="header-anchor" href="#\u539F\u751F-ajax" aria-hidden="true">#</a> \u539F\u751F ajax</h1><h4 id="\u521B\u5EFA-xhr-\u6838\u5FC3\u5BF9\u8C61" tabindex="-1"><a class="header-anchor" href="#\u521B\u5EFA-xhr-\u6838\u5FC3\u5BF9\u8C61" aria-hidden="true">#</a> \u521B\u5EFA xhr \u6838\u5FC3\u5BF9\u8C61</h4><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> xhr <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">XMLHttpRequest</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="\u8C03\u7528-open-\u51C6\u5907\u53D1\u9001" tabindex="-1"><a class="header-anchor" href="#\u8C03\u7528-open-\u51C6\u5907\u53D1\u9001" aria-hidden="true">#</a> \u8C03\u7528 open \u51C6\u5907\u53D1\u9001</h4><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// 	\u53C2\u6570\u4E09\uFF1Atrue\u5F02\u6B65\uFF0Cfalse \u540C\u6B65</span>
xhr<span class="token punctuation">.</span><span class="token function">open</span><span class="token punctuation">(</span><span class="token string">&#39;post&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;http://www.baidu.com/api/search&#39;</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="\u5982\u679C\u662F-post-\u8BF7\u6C42-\u5FC5\u987B\u8BBE\u7F6E\u8BF7\u6C42\u5934" tabindex="-1"><a class="header-anchor" href="#\u5982\u679C\u662F-post-\u8BF7\u6C42-\u5FC5\u987B\u8BBE\u7F6E\u8BF7\u6C42\u5934" aria-hidden="true">#</a> \u5982\u679C\u662F post \u8BF7\u6C42\uFF0C\u5FC5\u987B\u8BBE\u7F6E\u8BF7\u6C42\u5934</h4><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>xhr<span class="token punctuation">.</span><span class="token function">setRequestHeader</span><span class="token punctuation">(</span><span class="token string">&#39;Content-Type&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;application/x-www-form-urlencoded&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="\u8C03\u7528-send-\u53D1\u9001\u8BF7\u6C42-\u5982\u679C\u4E0D\u9700\u8981\u53C2\u6570-\u5C31\u5199-null" tabindex="-1"><a class="header-anchor" href="#\u8C03\u7528-send-\u53D1\u9001\u8BF7\u6C42-\u5982\u679C\u4E0D\u9700\u8981\u53C2\u6570-\u5C31\u5199-null" aria-hidden="true">#</a> \u8C03\u7528 send \u53D1\u9001\u8BF7\u6C42 \uFF08\u5982\u679C\u4E0D\u9700\u8981\u53C2\u6570\uFF0C\u5C31\u5199 null\uFF09</h4><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>xhr<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token string">&#39;user=tom&amp;age=10&amp;sex=\u5973&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="\u76D1\u542C\u5F02\u6B65\u56DE\u8C03-onreadystatechange" tabindex="-1"><a class="header-anchor" href="#\u76D1\u542C\u5F02\u6B65\u56DE\u8C03-onreadystatechange" aria-hidden="true">#</a> \u76D1\u542C\u5F02\u6B65\u56DE\u8C03 onreadystatechange</h4><ul><li>\u5224\u65AD readyState \u4E3A 4 \u8868\u793A\u8BF7\u6C42\u5B8C\u6210</li><li>\u5224\u65AD status \u72B6\u6001\u7801 \u4E3A 200 \u8868\u793A\u63A5\u53E3\u8BF7\u6C42\u6210\u529F</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>xhr<span class="token punctuation">.</span><span class="token function-variable function">onreadystatechange</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>xhr<span class="token punctuation">.</span>readyState <span class="token operator">===</span> <span class="token number">4</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>xhr<span class="token punctuation">.</span>status <span class="token operator">===</span> <span class="token number">200</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>xhr<span class="token punctuation">.</span>responseText<span class="token punctuation">)</span>
      <span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span>xhr<span class="token punctuation">.</span>responseText<span class="token punctuation">)</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="\u5982\u679C\u662F-post-\u8BF7\u6C42-\u60F3\u8981\u4F20-json-\u683C\u5F0F\u6570\u636E" tabindex="-1"><a class="header-anchor" href="#\u5982\u679C\u662F-post-\u8BF7\u6C42-\u60F3\u8981\u4F20-json-\u683C\u5F0F\u6570\u636E" aria-hidden="true">#</a> \u5982\u679C\u662F post \u8BF7\u6C42\uFF0C\u60F3\u8981\u4F20 json \u683C\u5F0F\u6570\u636E</h4><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>xhr<span class="token punctuation">.</span><span class="token function">setRequestHeader</span><span class="token punctuation">(</span><span class="token string">&#39;Content-Type&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;application/json&#39;</span><span class="token punctuation">)</span>
xhr<span class="token punctuation">.</span><span class="token function">open</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">_id</span><span class="token operator">:</span> xxx<span class="token punctuation">,</span> <span class="token literal-property property">user</span><span class="token operator">:</span> xxxx<span class="token punctuation">,</span> <span class="token literal-property property">age</span><span class="token operator">:</span> xxxx <span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,14),o=[p];function c(i,l){return a(),s("div",null,o)}var u=n(t,[["render",c],["__file","ajax.html.vue"]]);export{u as default};
