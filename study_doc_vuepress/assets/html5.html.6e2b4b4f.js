import{_ as e,o as p,c as o,b as n,d as t,e as s,a as i,r as c}from"./app.028a31b3.js";const d={},l=n("h1",{id:"html5-css3",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#html5-css3","aria-hidden":"true"},"#"),s(" HTML5&CSS3")],-1),r={href:"https://www.runoob.com/html/html5-intro.html",target:"_blank",rel:"noopener noreferrer"},u=s("Html5 \u6559\u7A0B"),k={href:"https://www.runoob.com/css3/css3-tutorial.html",target:"_blank",rel:"noopener noreferrer"},m=s("Css3 \u6559\u7A0B"),v=i(`<h2 id="css3-\u65B0\u7279\u6027" tabindex="-1"><a class="header-anchor" href="#css3-\u65B0\u7279\u6027" aria-hidden="true">#</a> CSS3 \u65B0\u7279\u6027</h2><blockquote><p>\u9009\u62E9\u5668</p><p>\u80CC\u666F\u548C\u8FB9\u6846</p><p>\u6587\u672C\u6548\u679C</p><p>2D/3D \u8F6C\u6362 \u2014 \u53D8\u5F62\uFF08transform\uFF09\u3001\u8FC7\u6E21(transtion)\u3001\u52A8\u753B(animation)</p></blockquote><h4 id="_1-\u9009\u62E9\u5668" tabindex="-1"><a class="header-anchor" href="#_1-\u9009\u62E9\u5668" aria-hidden="true">#</a> 1.\u9009\u62E9\u5668</h4><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token punctuation">:</span>last-child <span class="token comment">/* \u9009\u62E9\u5143\u7D20\u6700\u540E\u4E00\u4E2A\u5B69\u5B50 */</span>
<span class="token punctuation">:</span>first-child <span class="token comment">/* \u9009\u62E9\u5143\u7D20\u7B2C\u4E00\u4E2A\u5B69\u5B50 */</span>
<span class="token punctuation">:</span><span class="token function">nth-child</span><span class="token punctuation">(</span>1<span class="token punctuation">)</span> <span class="token comment">/* \u6309\u7167\u7B2C\u51E0\u4E2A\u5B69\u5B50\u7ED9\u5B83\u8BBE\u7F6E\u6837\u5F0F */</span>
<span class="token punctuation">:</span><span class="token function">nth-child</span><span class="token punctuation">(</span>even<span class="token punctuation">)</span> <span class="token comment">/* \u6309\u7167\u5076\u6570 */</span>
<span class="token punctuation">:</span><span class="token function">nth-child</span><span class="token punctuation">(</span>odd<span class="token punctuation">)</span>  <span class="token comment">/* \u6309\u7167\u5947\u6570 */</span>
<span class="token punctuation">:</span>disabled <span class="token comment">/* \u9009\u62E9\u6BCF\u4E2A\u7981\u7528\u7684dom\u5143\u7D20 */</span>
<span class="token punctuation">:</span>checked <span class="token comment">/* \u9009\u62E9\u6BCF\u4E2A\u88AB\u9009\u4E2D\u7684dom\u5143\u7D20 */</span>
<span class="token punctuation">:</span><span class="token function">not</span><span class="token punctuation">(</span>selector<span class="token punctuation">)</span> <span class="token comment">/* \u9009\u62E9\u975E selector \u5143\u7D20\u7684\u6BCF\u4E2A\u5143\u7D20 */</span>
<span class="token punctuation">:</span><span class="token punctuation">:</span>selection <span class="token comment">/* \u9009\u62E9\u88AB\u7528\u6237\u9009\u53D6\u7684\u5143\u7D20\u90E8\u5206 */</span>
<span class="token selector">a:link</span> <span class="token punctuation">{</span><span class="token property">color</span><span class="token punctuation">:</span> #FF0000<span class="token punctuation">}</span> <span class="token comment">/* \u672A\u8BBF\u95EE\u7684\u94FE\u63A5 */</span>
<span class="token selector">a:visited</span> <span class="token punctuation">{</span><span class="token property">color</span><span class="token punctuation">:</span> #00FF00<span class="token punctuation">}</span> <span class="token comment">/* \u5DF2\u8BBF\u95EE\u7684\u94FE\u63A5 */</span>
<span class="token selector">a:hover</span> <span class="token punctuation">{</span><span class="token property">color</span><span class="token punctuation">:</span> #FF00FF<span class="token punctuation">}</span> <span class="token comment">/* \u9F20\u6807\u79FB\u52A8\u5230\u94FE\u63A5\u4E0A */</span>
<span class="token selector">a:active</span> <span class="token punctuation">{</span><span class="token property">color</span><span class="token punctuation">:</span> #0000FF<span class="token punctuation">}</span> <span class="token comment">/* \u9009\u5B9A\u7684\u94FE\u63A5 */</span>

<span class="token selector">::before</span> <span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token comment">/* \u9009\u62E9\u5668\u5728\u88AB\u9009\u5143\u7D20\u7684\u524D\u9762\u63D2\u5165\u5185\u5BB9\u548C\u5B9A\u4E49css\uFF0C\u4F7F\u7528 content \u5C5E\u6027\u6765\u6307\u5B9A\u8981\u63D2\u5165\u7684\u5185\u5BB9\u3002 */</span>
<span class="token selector">::after</span> <span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token comment">/* \u9009\u62E9\u5668\u5728\u88AB\u9009\u5143\u7D20\u7684\u540E\u9762\u63D2\u5165\u5185\u5BB9\u548C\u5B9A\u4E49css\uFF0C\u4F7F\u7528 content \u5C5E\u6027\u6765\u6307\u5B9A\u8981\u63D2\u5165\u7684\u5185\u5BB9\u3002 */</span>
<span class="token punctuation">:</span>first-letter <span class="token comment">/* \u9009\u62E9\u8BE5\u5143\u7D20\u5185\u5BB9\u7684\u9996\u5B57\u6BCD */</span>
<span class="token punctuation">:</span>first-line <span class="token comment">/* \u9009\u62E9\u8BE5\u5143\u7D20\u5185\u5BB9\u7684\u9996\u884C */</span>
<span class="token punctuation">:</span><span class="token punctuation">:</span>selection <span class="token comment">/* \u9009\u62E9\u88AB\u7528\u6237\u9009\u53D6\u7684\u5143\u7D20\u90E8\u5206 */</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-\u80CC\u666F\u548C\u8FB9\u6846" tabindex="-1"><a class="header-anchor" href="#_2-\u80CC\u666F\u548C\u8FB9\u6846" aria-hidden="true">#</a> 2.\u80CC\u666F\u548C\u8FB9\u6846</h4><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code>//\u80CC\u666F
background-size\uFF1A\u89C4\u5B9A\u80CC\u666F\u56FE\u7247\u7684\u5C3A\u5BF8\uFF08cover\uFF1A\u586B\u5145\uFF1B100% 100%\uFF1A\u62C9\u4F38\uFF09
background-origin\uFF1A\u89C4\u5B9A\u80CC\u666F\u56FE\u7247\u7684\u5B9A\u4F4D\u533A\u57DF \u5BF9\u4E8E background-origin \u5C5E\u6027\uFF0C\u6709\u5982\u4E0B\u5C5E\u6027 \u80CC\u666F\u56FE\u7247\u53EF\u4EE5\u653E\u7F6E\u4E8E
content-box\u3001padding-box \u6216 border-box \u533A\u57DF

//\u8FB9\u6846
border-radius\uFF1A\u5706\u89D2
box-shadow / text-shadow\uFF1A\u9634\u5F71
border-image\uFF1A\u8FB9\u6846\u56FE\u7247
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3-\u6587\u672C\u6548\u679C" tabindex="-1"><a class="header-anchor" href="#_3-\u6587\u672C\u6548\u679C" aria-hidden="true">#</a> 3.\u6587\u672C\u6548\u679C</h4><table><thead><tr><th>\u5C5E\u6027</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td>text-shadow</td><td>\u5411\u6587\u672C\u6DFB\u52A0\u9634\u5F71</td></tr><tr><td>text-justify</td><td>\u89C4\u5B9A\u5F53 text-align \u8BBE\u7F6E\u4E3A \u201Cjustify\u201D \u65F6\u6240\u4F7F\u7528\u7684\u5BF9\u9F50\u65B9\u6CD5</td></tr><tr><td>text-emphasis</td><td>\u5411\u5143\u7D20\u7684\u6587\u672C\u5E94\u7528\u91CD\u70B9\u6807\u8BB0\u4EE5\u53CA\u91CD\u70B9\u6807\u8BB0\u7684\u524D\u666F\u8272</td></tr><tr><td>text-outline</td><td>\u89C4\u5B9A\u6587\u672C\u7684\u8F6E\u5ED3</td></tr><tr><td>text-overflow</td><td>\u89C4\u5B9A\u5F53\u6587\u672C\u6EA2\u51FA\u5305\u542B\u5143\u7D20\u65F6\u53D1\u751F\u7684\u4E8B\u60C5</td></tr><tr><td>text-wrap</td><td>\u89C4\u5B9A\u6587\u672C\u7684\u6362\u884C\u89C4\u5219</td></tr><tr><td>word-break</td><td>\u89C4\u5B9A\u975E\u4E2D\u65E5\u97E9\u6587\u672C\u7684\u6362\u884C\u89C4\u5219</td></tr><tr><td>word-wrap</td><td>\u5141\u8BB8\u5BF9\u957F\u7684\u4E0D\u53EF\u5206\u5272\u7684\u5355\u8BCD\u8FDB\u884C\u5206\u5272\u5E76\u6362\u884C\u5230\u4E0B\u4E00\u884C</td></tr><tr><td>text-decoration</td><td>\u6587\u672C\u4FEE\u9970\u7B26\uFF1Aoverline\u3001line-through\u3001underline \u5206\u522B\u662F\u4E0A\u5212\u7EBF\u3001\u4E2D\u5212\u7EBF\u3001\u4E0B\u5212\u7EBF</td></tr></tbody></table><h4 id="_4-2d-3d-\u8F6C\u6362" tabindex="-1"><a class="header-anchor" href="#_4-2d-3d-\u8F6C\u6362" aria-hidden="true">#</a> 4.2D/3D \u8F6C\u6362</h4><p><strong>\u53D8\u5F62 transform</strong></p><p>\u53D8\u5F62\u6709 rotate \u65CB\u8F6C\u3001scale \u7F29\u653E\u3001translate \u4F4D\u79FB\u3001skew \u503E\u659C</p><p><strong>\u8FC7\u6E21 transition</strong></p><p>\u8FC7\u6E21 transition \u662F\u4E00\u4E2A\u590D\u5408\u5C5E\u6027\uFF0C\u53EF\u4EE5\u540C\u65F6\u5B9A\u4E49 transition-property\u3001transition-duration\u3001transition-timing-function\u3001transition-delay \u5B50\u5C5E\u6027\u503C</p><p>\u4E00\u822C\u5199\u5728\u4E00\u8D77\uFF1A</p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">div</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
  <span class="token property">transition</span><span class="token punctuation">:</span> width 2s<span class="token punctuation">;</span>
  <span class="token property">-moz-transition</span><span class="token punctuation">:</span> width 2s<span class="token punctuation">;</span> <span class="token comment">/* Firefox 4 */</span>
  <span class="token property">-webkit-transition</span><span class="token punctuation">:</span> width 2s<span class="token punctuation">;</span> <span class="token comment">/* Safari \u548C Chrome */</span>
  <span class="token property">-o-transition</span><span class="token punctuation">:</span> width 2s<span class="token punctuation">;</span> <span class="token comment">/* Opera */</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>\u52A8\u753B animation</strong></p><p>\u52A8\u753B\u7684\u4F7F\u7528\uFF0C\u9996\u5148\u901A\u8FC7@\uFF08-webkit-)keyframes \u5B9A\u4E49\u52A8\u753B\u540D\u79F0\u53CA\u52A8\u753B\u7684\u884C\u4E3A\uFF0C\u518D\u901A\u8FC7 animation \u5C5E\u6027\u8BBE\u7F6E\u52A8\u753B\u7279\u5F81\u76F8\u5173\u503C\u8FDB\u884C\u8C03\u7528</p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">.myClass</span> <span class="token punctuation">{</span>
  <span class="token property">-webkit-animation-name</span><span class="token punctuation">:</span> fadeIn<span class="token punctuation">;</span>
  <span class="token property">-moz-animation-name</span><span class="token punctuation">:</span> fadeIn<span class="token punctuation">;</span>
  <span class="token property">-o-animation-name</span><span class="token punctuation">:</span> fadeIn<span class="token punctuation">;</span>
  <span class="token property">-ms-animation-name</span><span class="token punctuation">:</span> fadeIn<span class="token punctuation">;</span>
  <span class="token property">animation-name</span><span class="token punctuation">:</span> fadeIn<span class="token punctuation">;</span> <span class="token comment">/* \u4E0D\u5E26\u524D\u7F00\u7684\u653E\u5230\u6700\u540E */</span>
<span class="token punctuation">}</span>
<span class="token comment">/* \u590D\u6742\u5C5E\u6027 keyframes */</span>
<span class="token atrule"><span class="token rule">@-webkit-keyframes</span> fadeIn</span> <span class="token punctuation">{</span>
  <span class="token selector">0%</span> <span class="token punctuation">{</span>
    <span class="token property">opacity</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token selector">100%</span> <span class="token punctuation">{</span>
    <span class="token property">opacity</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token atrule"><span class="token rule">@-moz-keyframes</span> fadeIn</span> <span class="token punctuation">{</span>
  <span class="token selector">0%</span> <span class="token punctuation">{</span>
    <span class="token property">opacity</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token selector">100%</span> <span class="token punctuation">{</span>
    <span class="token property">opacity</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token atrule"><span class="token rule">@-o-keyframes</span> fadeIn</span> <span class="token punctuation">{</span>
  <span class="token selector">0%</span> <span class="token punctuation">{</span>
    <span class="token property">opacity</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token selector">100%</span> <span class="token punctuation">{</span>
    <span class="token property">opacity</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token atrule"><span class="token rule">@-ms-keyframes</span> fadeIn</span> <span class="token punctuation">{</span>
  <span class="token selector">0%</span> <span class="token punctuation">{</span>
    <span class="token property">opacity</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token selector">100%</span> <span class="token punctuation">{</span>
    <span class="token property">opacity</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment">/* \u4E0D\u5E26\u524D\u7F00\u7684\u653E\u5230\u6700\u540E */</span>
<span class="token atrule"><span class="token rule">@keyframes</span> fadeIn</span> <span class="token punctuation">{</span>
  <span class="token selector">0%</span> <span class="token punctuation">{</span>
    <span class="token property">opacity</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token selector">100%</span> <span class="token punctuation">{</span>
    <span class="token property">opacity</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>\u8FD9\u4E9B\u65B0\u5C5E\u6027\u5927\u591A\u5728\u65B0\u7248\u6D4F\u89C8\u5668\u5F97\u5230\u4E86\u652F\u6301\uFF0C\u6709\u4E9B\u9700\u8981\u6DFB\u52A0\u6D4F\u89C8\u5668\u524D\u7F00\uFF08-webkit-\u3001-moz-\u3001-ms-\u3001-o-\uFF09</p></blockquote><h2 id="h5-\u65B0\u7279\u6027" tabindex="-1"><a class="header-anchor" href="#h5-\u65B0\u7279\u6027" aria-hidden="true">#</a> H5 \u65B0\u7279\u6027</h2><blockquote><p>\u8BED\u4E49\u5316\u6807\u7B7E\uFF1Aheader\u3001footer\u3001section\u3001nav\u3001aside\u3001article</p><p>\u589E\u5F3A\u578B\u8868\u5355\uFF1Ainput \u7684\u591A\u4E2A type</p><p>\u65B0\u589E\u8868\u5355\u5C5E\u6027\uFF1Aplacehoder\u3001required\u3001min \u548C max</p><p>\u97F3\u9891\u89C6\u9891\uFF1Aaudio\u3001video</p><p>canvas \u753B\u5E03</p><p>\u5730\u7406\u5B9A\u4F4D</p><p>\u62D6\u62FD</p><p>\u672C\u5730\u5B58\u50A8\uFF1AlocalStorage \u6CA1\u6709\u65F6\u95F4\u9650\u5236\u7684\u6570\u636E\u5B58\u50A8\uFF1BsessionStorage\uFF0C session \u7684\u6570\u636E\u5B58\u50A8\uFF0C\u5F53\u7528\u6237\u5173\u95ED\u6D4F\u89C8\u5668\u7A97\u53E3\u540E\uFF0C\u6570\u636E\u4F1A\u88AB\u5220\u9664</p><p>\u65B0\u4E8B\u4EF6\uFF1Aonresize\u3001ondrag\u3001onscroll\u3001onmousewheel\u3001onerror\u3001onplay\u3001onpause WebSocket\uFF1A\u5EFA\u7ACB\u6301\u4E45\u901A\u4FE1\u534F\u8BAE</p></blockquote><h4 id="_1-\u8BED\u4E49\u5316\u6807\u7B7E" tabindex="-1"><a class="header-anchor" href="#_1-\u8BED\u4E49\u5316\u6807\u7B7E" aria-hidden="true">#</a> 1.\u8BED\u4E49\u5316\u6807\u7B7E</h4><table><thead><tr><th>\u6807\u7B7E</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td>header</td><td>\u5B9A\u4E49\u4E86\u6587\u6863\u7684\u5934\u90E8\u533A\u57DF</td></tr><tr><td>footer</td><td>\u5B9A\u4E49\u4E86\u6587\u6863\u7684\u5C3E\u90E8\u533A\u57DF</td></tr><tr><td>nav</td><td>\u5B9A\u4E49\u6587\u6863\u7684\u5BFC\u822A</td></tr><tr><td>section</td><td>\u5B9A\u4E49\u6587\u6863\u4E2D\u7684\u8282\uFF08section\u3001\u533A\u6BB5\uFF09</td></tr><tr><td>article</td><td>\u5B9A\u4E49\u9875\u9762\u72EC\u7ACB\u7684\u5185\u5BB9\u533A\u57DF</td></tr><tr><td>aside</td><td>\u5B9A\u4E49\u9875\u9762\u7684\u4FA7\u8FB9\u680F\u5185\u5BB9</td></tr><tr><td>dialog</td><td>\u5B9A\u4E49\u5BF9\u8BDD\u6846\uFF0C\u6BD4\u5982\u63D0\u793A\u6846</td></tr></tbody></table><h4 id="_2-\u8868\u5355\u7C7B\u578B\u589E\u5F3A" tabindex="-1"><a class="header-anchor" href="#_2-\u8868\u5355\u7C7B\u578B\u589E\u5F3A" aria-hidden="true">#</a> 2.\u8868\u5355\u7C7B\u578B\u589E\u5F3A</h4><table><thead><tr><th>input \u7684 type</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td>week</td><td>\u9009\u62E9\u5468\u548C\u5E74</td></tr><tr><td>color</td><td>\u4E3B\u8981\u7528\u4E8E\u9009\u53D6\u989C\u8272</td></tr><tr><td>date</td><td>\u4ECE\u4E00\u4E2A\u65E5\u671F\u9009\u62E9\u5668\u9009\u62E9\u4E00\u4E2A\u65E5\u671F</td></tr><tr><td>datetime</td><td>\u9009\u62E9\u4E00\u4E2A\u65E5\u671F\uFF08UTC \u65F6\u95F4\uFF09</td></tr><tr><td>email</td><td>\u5305\u542B e-mail \u5730\u5740\u7684\u8F93\u5165\u57DF</td></tr><tr><td>month</td><td>\u9009\u62E9\u4E00\u4E2A\u6708\u4EFD</td></tr><tr><td>number</td><td>\u6570\u503C\u7684\u8F93\u5165\u57DF</td></tr><tr><td>range</td><td>\u4E00\u5B9A\u8303\u56F4\u5185\u6570\u5B57\u503C\u7684\u8F93\u5165\u57DF</td></tr><tr><td>search</td><td>\u7528\u4E8E\u641C\u7D22\u57DF</td></tr><tr><td>tel</td><td>\u5B9A\u4E49\u8F93\u5165\u7535\u8BDD\u53F7\u7801\u5B57\u6BB5</td></tr><tr><td>time</td><td>\u9009\u62E9\u4E00\u4E2A\u65F6\u95F4</td></tr><tr><td>url</td><td>URL \u5730\u5740\u7684\u8F93\u5165\u57DF</td></tr></tbody></table><h4 id="_3-html5-\u65B0\u589E\u7684\u8868\u5355\u5C5E\u6027" tabindex="-1"><a class="header-anchor" href="#_3-html5-\u65B0\u589E\u7684\u8868\u5355\u5C5E\u6027" aria-hidden="true">#</a> 3.html5 \u65B0\u589E\u7684\u8868\u5355\u5C5E\u6027</h4><table><thead><tr><th>\u8868\u5355\u5C5E\u6027</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td>placehoder</td><td>\u7B80\u77ED\u7684\u63D0\u793A\u5728\u7528\u6237\u8F93\u5165\u503C\u524D\u4F1A\u663E\u793A\u5728\u8F93\u5165\u57DF\u4E0A\u3002\u5373\u6211\u4EEC\u5E38\u89C1\u7684\u8F93\u5165\u6846\u9ED8\u8BA4\u63D0\u793A\uFF0C\u5728\u7528\u6237\u8F93\u5165\u540E\u6D88\u5931</td></tr><tr><td>required</td><td>\u662F\u4E00\u4E2A boolean \u5C5E\u6027\u3002\u8981\u6C42\u586B\u5199\u7684\u8F93\u5165\u57DF\u4E0D\u80FD\u4E3A\u7A7A</td></tr><tr><td>pattern</td><td>\u63CF\u8FF0\u4E86\u4E00\u4E2A\u6B63\u5219\u8868\u8FBE\u5F0F\u7528\u4E8E\u9A8C\u8BC1 input \u5143\u7D20\u7684\u503C</td></tr><tr><td>min \u548C max</td><td>\u8BBE\u7F6E\u5143\u7D20\u6700\u5C0F\u503C\u4E0E\u6700\u5927\u503C</td></tr><tr><td>step</td><td>\u4E3A\u8F93\u5165\u57DF\u89C4\u5B9A\u5408\u6CD5\u7684\u6570\u5B57\u95F4\u9694</td></tr><tr><td>height \u548C width</td><td>\u7528\u4E8E image \u7C7B\u578B\u7684 input \u6807\u7B7E\u7684\u56FE\u50CF\u9AD8\u5EA6\u548C\u5BBD\u5EA6</td></tr><tr><td>autofocus</td><td>\u662F\u4E00\u4E2A boolean \u5C5E\u6027\u3002\u89C4\u5B9A\u5728\u9875\u9762\u52A0\u8F7D\u65F6\uFF0C\u57DF\u81EA\u52A8\u5730\u83B7\u5F97\u7126\u70B9</td></tr><tr><td>multiple</td><td>\u662F\u4E00\u4E2A boolean \u5C5E\u6027\u3002\u89C4\u5B9A input \u5143\u7D20\u4E2D\u53EF\u9009\u62E9\u591A\u4E2A\u503C</td></tr></tbody></table><h4 id="_4-html5-\u65B0\u4E8B\u4EF6" tabindex="-1"><a class="header-anchor" href="#_4-html5-\u65B0\u4E8B\u4EF6" aria-hidden="true">#</a> 4.html5 \u65B0\u4E8B\u4EF6</h4><table><thead><tr><th>\u4E8B\u4EF6</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td>onresize</td><td>\u5F53\u8C03\u6574\u7A97\u53E3\u5927\u5C0F\u65F6\u89E6\u53D1</td></tr><tr><td>ondrag</td><td>\u5F53\u62D6\u52A8\u5143\u7D20\u65F6\u89E6\u53D1</td></tr><tr><td>onscroll</td><td>\u5F53\u6EDA\u52A8\u5143\u7D20\u6EDA\u52A8\u5143\u7D20\u7684\u6EDA\u52A8\u6761\u65F6\u89E6\u53D1</td></tr><tr><td>onmousewheel</td><td>\u5F53\u8F6C\u52A8\u9F20\u6807\u6EDA\u8F6E\u65F6\u89E6\u53D1</td></tr><tr><td>onerror</td><td>\u5F53\u9519\u8BEF\u53D1\u751F\u65F6\u89E6\u53D1</td></tr><tr><td>onplay</td><td>\u5F53\u5A92\u4ECB\u6570\u636E\u5C06\u8981\u5F00\u59CB\u64AD\u653E\u65F6\u89E6\u53D1</td></tr><tr><td>onpause</td><td>\u5F53\u5A92\u4ECB\u6570\u636E\u6682\u505C\u65F6\u89E6\u53D1</td></tr></tbody></table>`,29);function h(b,y){const a=c("ExternalLinkIcon");return p(),o("div",null,[l,n("p",null,[n("a",r,[u,t(a)])]),n("p",null,[n("a",k,[m,t(a)])]),v])}var _=e(d,[["render",h],["__file","html5.html.vue"]]);export{_ as default};
