import{_ as n,o as s,c as a,a as e}from"./app.c9d013e2.js";const t={},p=e(`<h1 id="\u5207\u7247-slice" tabindex="-1"><a class="header-anchor" href="#\u5207\u7247-slice" aria-hidden="true">#</a> \u5207\u7247\uFF08slice\uFF09</h1><p>Go \u8BED\u8A00\u5207\u7247\u662F\u5BF9\u6570\u7EC4\u7684\u62BD\u8C61\u3002</p><p>Go \u6570\u7EC4\u7684\u957F\u5EA6\u4E0D\u53EF\u6539\u53D8\uFF0C\u5728\u7279\u5B9A\u573A\u666F\u4E2D\u8FD9\u6837\u7684\u96C6\u5408\u5C31\u4E0D\u592A\u9002\u7528\uFF0CGo \u4E2D\u63D0\u4F9B\u4E86\u4E00\u79CD\u7075\u6D3B\uFF0C\u529F\u80FD\u5F3A\u608D\u7684\u5185\u7F6E\u7C7B\u578B\u5207\u7247(&quot;\u52A8\u6001\u6570\u7EC4&quot;)\uFF0C\u4E0E\u6570\u7EC4\u76F8\u6BD4\u5207\u7247\u7684\u957F\u5EA6\u662F\u4E0D\u56FA\u5B9A\u7684\uFF0C\u53EF\u4EE5\u8FFD\u52A0\u5143\u7D20\uFF0C\u5728\u8FFD\u52A0\u65F6\u53EF\u80FD\u4F7F\u5207\u7247\u7684\u5BB9\u91CF\u589E\u5927\u3002</p><h2 id="\u5B9A\u4E49\u65B9\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u5B9A\u4E49\u65B9\u5F0F" aria-hidden="true">#</a> \u5B9A\u4E49\u65B9\u5F0F</h2><h5 id="\u65B9\u5F0F\u4E00" tabindex="-1"><a class="header-anchor" href="#\u65B9\u5F0F\u4E00" aria-hidden="true">#</a> \u65B9\u5F0F\u4E00</h5><p>\u5207\u7247\u521D\u59CB\u5316</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token comment">// \u58F0\u660E s \u5207\u7247\uFF0C\u5E76\u521D\u59CB\u5316\u3002\u9ED8\u8BA4\u503C\u662F 1\uFF0C2\uFF0C3\u3002\u957F\u5EA6len\u662F3</span>
s <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">}</span>

fmt<span class="token punctuation">.</span><span class="token function">Print</span><span class="token punctuation">(</span><span class="token function">len</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span><span class="token punctuation">,</span> s<span class="token punctuation">)</span> <span class="token comment">// 3 [1,2,3]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="\u65B9\u5F0F\u4E8C" tabindex="-1"><a class="header-anchor" href="#\u65B9\u5F0F\u4E8C" aria-hidden="true">#</a> \u65B9\u5F0F\u4E8C</h5><p>\u662F\u65B9\u5F0F\u4E09\u7684\u7B80\u5199\u65B9\u5F0F</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code>s <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h5 id="\u65B9\u5F0F\u4E09" tabindex="-1"><a class="header-anchor" href="#\u65B9\u5F0F\u4E09" aria-hidden="true">#</a> \u65B9\u5F0F\u4E09</h5><p>\u58F0\u660E\u7684\u540C\u65F6\u5F00\u8F9F\u7A7A\u95F4</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token comment">// \u58F0\u660E s \u662F\u4E00\u4E2A\u5207\u7247\uFF0C\u540C\u65F6\u7ED9 s \u5206\u914D3\u4E2A\u7A7A\u95F4\uFF0C\u521D\u59CB\u503C\u662F0</span>
<span class="token keyword">var</span> s <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span> <span class="token operator">=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="\u65B9\u5F0F\u56DB" tabindex="-1"><a class="header-anchor" href="#\u65B9\u5F0F\u56DB" aria-hidden="true">#</a> \u65B9\u5F0F\u56DB</h5><p>\u5148\u58F0\u660E\u518D\u5F00\u8F9F\u7A7A\u95F4</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token comment">// \u58F0\u660E s \u5207\u7247\uFF0C\u4F46\u5E76\u672A\u7ED9 s \u5206\u914D\u7A7A\u95F4\uFF0C\u662F\u4E00\u4E2A\u7A7A\u5207\u7247</span>
<span class="token keyword">var</span> s <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u5224\u65AD\u7A7A-nil-\u5207\u7247" tabindex="-1"><a class="header-anchor" href="#\u5224\u65AD\u7A7A-nil-\u5207\u7247" aria-hidden="true">#</a> \u5224\u65AD\u7A7A(nil)\u5207\u7247</h2><p>\u4E00\u4E2A\u5207\u7247\u5728\u672A\u521D\u59CB\u5316\u4E4B\u524D\u9ED8\u8BA4\u4E3A nil\uFF0C\u957F\u5EA6\u4E3A 0\uFF0C\u5B9E\u4F8B\u5982\u4E0B\uFF1A</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">var</span> s <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span>

<span class="token keyword">if</span> s <span class="token operator">==</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
    fmt<span class="token punctuation">.</span><span class="token function">Print</span><span class="token punctuation">(</span><span class="token string">&quot;\u7A7A\u5207\u7247&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    fmt<span class="token punctuation">.</span><span class="token function">Print</span><span class="token punctuation">(</span><span class="token string">&quot;\u975E\u7A7A\u5207\u7247&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,19),i=[p];function c(o,l){return s(),a("div",null,i)}var d=n(t,[["render",c],["__file","slice.html.vue"]]);export{d as default};
