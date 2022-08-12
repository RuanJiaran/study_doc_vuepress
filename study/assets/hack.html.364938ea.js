import{_ as s,o as n,c as a,a as e}from"./app.d2eb7f9c.js";const t={},c=e(`<h2 id="\u4EC0\u4E48\u662Fcss-hack" tabindex="-1"><a class="header-anchor" href="#\u4EC0\u4E48\u662Fcss-hack" aria-hidden="true">#</a> \u4EC0\u4E48\u662FCSS Hack</h2><blockquote><p>\u4E00\u822C\u6765\u8BF4\u662F\u9488\u5BF9\u4E0D\u540C\u7684\u6D4F\u89C8\u5668\u5199\u4E0D\u540C\u7684CSS,\u5C31\u662F CSS Hack\u3002 CSS Hack\u5E38\u89C1\u7684\u6709\u4E09\u79CD\u5F62\u5F0F\uFF1A <code>\u6761\u4EF6\u6CE8\u91CAHack</code> , <code>\u5C5E\u6027Hack</code> , <code>\u9009\u62E9\u7B26Hack</code> Hack\u4E3B\u8981\u9488\u5BF9IE\u6D4F\u89C8\u5668</p></blockquote><h2 id="\u6761\u4EF6hack" tabindex="-1"><a class="header-anchor" href="#\u6761\u4EF6hack" aria-hidden="true">#</a> \u6761\u4EF6Hack</h2><p>\u6761\u4EF6\u6CE8\u91CA\u53EA\u6709\u5728IE\u6D4F\u89C8\u5668\u4E0B\u624D\u80FD\u6267\u884C\uFF0C\u8FD9\u4E2A\u4EE3\u7801\u5728\u975EIE\u6D4F\u89C8\u4E0B\u88AB\u5F53\u505A\u6CE8\u91CA\u89C6\u800C\u4E0D\u89C1\u3002\u53EF\u4EE5\u901A\u8FC7IE\u6761\u4EF6\u6CE8\u91CA\u8F7D\u5165\u4E0D\u540C\u7684CSS\u3001JS\u3001HTML\u548C\u670D\u52A1\u5668\u4EE3\u7801\u7B49\u3002</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token comment">&lt;!--[if IE]&gt;
    &lt;p&gt;\u4F60\u5728\u975EIE\u4E2D\u5C06\u770B\u4E0D\u5230\u6211\u7684\u8EAB\u5F71&lt;/p&gt;
&lt;![endif]--&gt;</span>

<span class="token comment">&lt;!--[if IE]&gt;
&lt;style&gt;
    .test{color:red;}
&lt;/style&gt;
&lt;![endif]--&gt;</span>
 
<span class="token comment">&lt;!--[if lt IE 9]&gt;
    &lt;script src=&quot;//cdn.bootcss.com/html5shiv/3.7.2/html5shiv.min.js&quot;&gt;&lt;/script&gt;
    &lt;script src=&quot;//cdn.bootcss.com/respond.js/1.4.2/respond.min.js&quot;&gt;&lt;/script&gt;
&lt;![endif]--&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u5C5E\u6027hack" tabindex="-1"><a class="header-anchor" href="#\u5C5E\u6027hack" aria-hidden="true">#</a> \u5C5E\u6027Hack</h2><ul><li>IE6 \u80FD\u8BC6\u522B\u4E0B\u5212\u7EBF\u548C\u661F\u53F7</li><li>IE7\u80FD\u8BC6\u522B\u661F\u53F7\uFF0C\u4F46\u4E0D\u80FD\u8BC6\u522B\u4E0B\u5212\u7EBF\uFF0C\u800C firefox \u4E24\u4E2A\u90FD\u4E0D\u80FD\u8BA4\u8BC6</li><li>background-color:red9; 9\u6240\u6709\u7684 ie \u6D4F\u89C8\u5668\u53EF\u8BC6\u522B</li><li>background-color:yellow0; 0 \u662F\u7559\u7ED9 ie8 \u7684</li></ul><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">.test</span><span class="token punctuation">{</span> 
    <span class="token property">color</span><span class="token punctuation">:</span>#090\\09<span class="token punctuation">;</span> 	<span class="token comment">/*  For IE8+\u3001FF */</span> 
    *<span class="token property">color</span><span class="token punctuation">:</span>#f00<span class="token punctuation">;</span> 	/ * For IE7 * / 
    <span class="token property">_color</span><span class="token punctuation">:</span>#ff0<span class="token punctuation">;</span> 	<span class="token comment">/*  For IE6  */</span> 
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u9009\u62E9\u7B26hack" tabindex="-1"><a class="header-anchor" href="#\u9009\u62E9\u7B26hack" aria-hidden="true">#</a> \u9009\u62E9\u7B26Hack</h2><blockquote><p>IE6\u80FD\u8BC6\u522B <code>*html .class{}</code>\uFF0CIE7\u80FD\u8BC6\u522B<code>*+html .class{}</code></p></blockquote><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">* html .test</span><span class="token punctuation">{</span><span class="token property">color</span><span class="token punctuation">:</span>#090<span class="token punctuation">;</span><span class="token punctuation">}</span> <span class="token comment">/* For IE6 and earlier */</span>
<span class="token selector">*+html .test</span><span class="token punctuation">{</span><span class="token property">color</span><span class="token punctuation">:</span>#ff0<span class="token punctuation">;</span><span class="token punctuation">}</span> <span class="token comment">/* For IE7 */</span>
<span class="token selector">.test</span><span class="token punctuation">{</span><span class="token property">color</span><span class="token punctuation">:</span>#f00<span class="token punctuation">;</span><span class="token punctuation">}</span> <span class="token comment">/* For IE8+ and not IE */</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="\u6D4F\u89C8\u5668\u4F18\u5148\u7EA7\u522B" tabindex="-1"><a class="header-anchor" href="#\u6D4F\u89C8\u5668\u4F18\u5148\u7EA7\u522B" aria-hidden="true">#</a> \u6D4F\u89C8\u5668\u4F18\u5148\u7EA7\u522B</h5><p>FF&lt;IE7&lt;IE6,CSS hack</p><p>\u4E66\u5199\u987A\u5E8F\u4E00\u822C\u4E3AFF(FireFox\u706B\u72D0) IE7 IE6</p><p>\u4EE5&quot; #demo {width:100px;} &quot;\u4E3A\u4F8B:</p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">#demo</span> <span class="token punctuation">{</span><span class="token property">width</span><span class="token punctuation">:</span>100px<span class="token punctuation">;</span><span class="token punctuation">}</span> <span class="token comment">/*\u88ABFIREFOX,IE6,IE7\u6267\u884C.*/</span>
<span class="token selector">* html #demo</span> <span class="token punctuation">{</span><span class="token property">width</span><span class="token punctuation">:</span>120px<span class="token punctuation">;</span><span class="token punctuation">}</span> <span class="token comment">/*\u4F1A\u88ABIE6\u6267\u884C,\u4E4B\u524D\u7684\u5B9A\u4E49\u4F1A\u88AB\u540E\u6765\u7684\u8986\u76D6,\u6240\u4EE5#demo\u7684\u5BBD\u5EA6\u5728IE6\u5C31\u4E3A120px; */</span>
<span class="token selector">*+html #demo</span> <span class="token punctuation">{</span><span class="token property">width</span><span class="token punctuation">:</span>130px<span class="token punctuation">;</span><span class="token punctuation">}</span> <span class="token comment">/*\u4F1A\u88ABIE7\u6267\u884C*/</span>
\u6240\u4EE5\u6700\u540E<span class="token punctuation">,</span>#<span class="token property">demo\u7684\u5BBD\u5EA6\u5728\u4E09\u4E2A\u6D4F\u89C8\u5668\u7684\u89E3\u91CA\u4E3A</span><span class="token punctuation">:</span> <span class="token property">FIREFOX</span><span class="token punctuation">:</span>100px<span class="token punctuation">;</span> <span class="token property">ie6</span><span class="token punctuation">:</span>120px<span class="token punctuation">;</span> <span class="token property">ie7</span><span class="token punctuation">:</span>130px<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="ie8-\u6700\u65B0\u5C5E\u6027css-hack" tabindex="-1"><a class="header-anchor" href="#ie8-\u6700\u65B0\u5C5E\u6027css-hack" aria-hidden="true">#</a> IE8+ \u6700\u65B0\u5C5E\u6027css hack\uFF1A</h5><ul><li>&quot;9&quot;\u3000\u4F8B:&quot;border:1px 9;&quot;\u8FD9\u91CC\u7684&quot;9&quot;\u53EF\u4EE5\u533A\u522B\u6240\u6709IE\u548CFireFox.\uFF08\u53EA\u9488\u5BF9IE9 Hack\uFF09</li><li>&quot;0&quot;\u3000IE8\u8BC6\u522B\uFF0CIE6\u3001IE7\u4E0D\u80FD</li><li>&quot;*&quot;\u3000IE6\u3001IE7\u53EF\u4EE5\u8BC6\u522B.IE8\u3001FireFox\u4E0D\u80FD</li><li>&quot;<em>&quot;\u3000IE6\u53EF\u4EE5\u8BC6\u522B&quot;</em>&quot;,IE7\u3001IE8\u3001FireFox\u4E0D\u80FD</li></ul>`,18),o=[c];function p(l,i){return n(),a("div",null,o)}var r=s(t,[["render",p],["__file","hack.html.vue"]]);export{r as default};
