import{_ as n,o as s,c as a,a as e}from"./app.08a5ae43.js";var p="/assets/format,png.3910d020.png";const t={},o=e(`<h2 id="\u865A\u62DF-dom" tabindex="-1"><a class="header-anchor" href="#\u865A\u62DF-dom" aria-hidden="true">#</a> \u865A\u62DF DOM</h2><p>\u865A\u62DF DOM\uFF0C\u4E5F\u5C31\u662F\u865A\u62DF\u8282\u70B9\u3002\u672C\u8D28\u4E0A\u662F\u4F7F\u7528 js \u5BF9\u8C61\u6765\u6A21\u62DF\u771F\u5B9E DOM \u7ED3\u6784\u3002</p><h5 id="\u865A\u62DF-dom-1" tabindex="-1"><a class="header-anchor" href="#\u865A\u62DF-dom-1" aria-hidden="true">#</a> \u865A\u62DF dom</h5><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> vnode <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">tag</span><span class="token operator">:</span> <span class="token string">&#39;div&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token string">&#39;container&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">tag</span><span class="token operator">:</span> <span class="token string">&#39;div&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token keyword">class</span><span class="token operator">:</span> <span class="token string">&#39;content&#39;</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&#39;This is a container&#39;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

<span class="token comment">//\u5BF9\u5E94\u7684\u771F\u5B9EDOM\u7ED3\u6784</span>
<span class="token punctuation">;</span><span class="token operator">&lt;</span>div id<span class="token operator">=</span><span class="token string">&quot;container&quot;</span><span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;content&quot;</span><span class="token operator">&gt;</span>This is a container<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>tag \u7528\u6765\u63CF\u8FF0\u6807\u7B7E\uFF0Cprops \u7528\u6765\u63CF\u8FF0\u5C5E\u6027\uFF0Cchildren \u7528\u6765\u8868\u793A\u5D4C\u5957\u7684\u5C42\u7EA7\u5173\u7CFB</p><h2 id="vue-\u4E3A\u4EC0\u4E48\u5F15\u5165\u865A\u62DF-dom" tabindex="-1"><a class="header-anchor" href="#vue-\u4E3A\u4EC0\u4E48\u5F15\u5165\u865A\u62DF-dom" aria-hidden="true">#</a> VUE \u4E3A\u4EC0\u4E48\u5F15\u5165\u865A\u62DF DOM</h2><ul><li><p>\u865A\u62DF DOM \u80FD\u591F\u901A\u8FC7\u6BD4\u5BF9\u540E\u8FDB\u884C\u9488\u5BF9\u6027\u66F4\u65B0\uFF0C\u4F46\u4E0D\u662F\u552F\u4E00\u7684\u65B9\u6848\u3002Vue.js \u53EF\u4EE5\u89C2\u5BDF\u5230\u72B6\u6001\u7684\u53D8\u5316\uFF0C\u5E76\u4E14\u7ED1\u5B9A\u5230\u89C6\u56FE\uFF0C\u6839\u672C\u4E0D\u9700\u8981\u6BD4\u5BF9\u3002</p></li><li><p>\u4E8B\u5B9E\u4E0A\uFF0C\u5728 Vue2.0 \u4E4B\u524D\u662F\u8FD9\u6837\u5B9E\u73B0\u7684\u3002\u4F46\u662F\u8FD9\u6837\u505A\u6709\u4E00\u5B9A\u4EE3\u4EF7\uFF0C\u56E0\u4E3A\u7C92\u5EA6\u592A\u7EC6\uFF0C\u6BCF\u7ED1\u5B9A\u4E00\u4E2A\u90FD\u4F1A\u6709\u4E00\u4E2A\u5BF9\u5E94\u7684 watcher \u6765\u89C2\u5BDF\u72B6\u6001\u7684\u53D8\u5316\uFF0C\u8FD9\u6837\u5C31\u4F1A\u6709\u4E00\u4E9B\u5185\u5B58\u5F00\u9500\u4EE5\u53CA\u4E00\u4E9B\u4F9D\u8D56\u8FFD\u8E2A\u7684\u5F00\u9500\u3002\u5BF9\u4E8E\u5927\u578B\u9879\u76EE\u6765\u8BF4\uFF0C\u8FD9\u4E2A\u5F00\u9500\u662F\u975E\u5E38\u5927\u7684\u3002</p></li><li><p>\u6240\u4EE5\uFF0C\u4ECE Vue2.0 \u5F00\u59CB\uFF0CVue \u5F15\u5165\u4E86\u865A\u62DF DOM\u3002\u4ECE\u4E00\u4E2A\u8282\u70B9\u751F\u6210\u4E00\u4E2A Watcher \u5B9E\u4F8B\u53D8\u4E3A\u4E00\u4E2A\u7EC4\u4EF6\u751F\u6210\u4E00\u4E2A Watcher \u5B9E\u4F8B\u3002\u4E5F\u5C31\u662F\u8BF4\uFF0C\u5373\u4FBF\u4E00\u4E2A\u7EC4\u4EF6\u5185\u6709 10 \u4E2A\u8282\u70B9\u4F7F\u7528\u4E86\u67D0\u4E2A\u72B6\u6001\uFF0C\u4F46\u5176\u5B9E\u4E5F\u53EA\u6709\u4E00\u4E2A Watcher \u5728\u89C2\u5BDF\u8FD9\u4E2A\u72B6\u6001\u7684\u53D8\u5316\u3002\u72B6\u6001\u53D8\u5316\u65F6\uFF0C\u53EA\u80FD\u901A\u77E5\u5230\u7EC4\u4EF6\uFF0C\u7136\u540E\u5728\u7EC4\u4EF6\u5185\u90E8\u901A\u8FC7\u865A\u62DF DOM \u53BB\u6BD4\u5BF9\u4E0E\u6E32\u67D3\u3002</p></li></ul><h2 id="\u4F7F\u7528\u865A\u62DF-dom-\u7684\u610F\u4E49" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528\u865A\u62DF-dom-\u7684\u610F\u4E49" aria-hidden="true">#</a> \u4F7F\u7528\u865A\u62DF DOM \u7684\u610F\u4E49</h2><p>\u865A\u62DF DOM \u7684\u66F4\u65B0\u4E0D\u4F1A\u7ACB\u5373\u64CD\u4F5C DOM\uFF0C\u800C\u662F\u4F1A\u901A\u8FC7 diff \u7B97\u6CD5\uFF0C\u627E\u51FA\u9700\u8981\u66F4\u65B0\u7684\u8282\u70B9\uFF0C\u6309\u9700\u66F4\u65B0\uFF0C\u5E76\u5C06\u66F4\u65B0\u7684\u5185\u5BB9\u4FDD\u5B58\u4E3A\u4E00\u4E2A js \u5BF9\u8C61\uFF0C\u66F4\u65B0\u5B8C\u6210\u540E\u518D\u6302\u8F7D\u5230\u771F\u5B9E dom \u4E0A\uFF0C\u5B9E\u73B0\u771F\u5B9E\u7684 dom \u66F4\u65B0\u3002\u901A\u8FC7\u865A\u62DF DOM\uFF0C\u89E3\u51B3\u4E86\u64CD\u4F5C\u771F\u5B9E DOM \u7684\u4E09\u4E2A\u95EE\u9898</p><ul><li>\u51CF\u5C11\u4E86\u9891\u7E41\u64CD\u4F5C DOM \u66F4\u65B0\uFF0C\u9020\u6210\u6027\u80FD\u95EE\u9898</li><li>\u4E0D\u65AD\u7684\u4FEE\u6539\u771F\u5B9E\u7684 DOM \u4F1A\u5F15\u53D1\u56DE\u6D41\u548C\u91CD\u7ED8\uFF0C\u5927\u5927\u964D\u4F4E\u4E86\u9875\u9762\u7684\u6E32\u67D3\u80FD\u529B</li><li>\u5F00\u53D1\u4F53\u9A8C</li></ul><h2 id="\u4F18\u70B9" tabindex="-1"><a class="header-anchor" href="#\u4F18\u70B9" aria-hidden="true">#</a> \u4F18\u70B9</h2><ul><li><p><strong>\u8DE8\u5E73\u53F0</strong></p><ul><li>\u4FDD\u5B58\u7684\u662F js \u5BF9\u8C61\uFF0C\u5177\u5907\u8DE8\u5E73\u53F0\u80FD\u529B\uFF0C\u4E00\u5957\u4EE3\u7801\u591A\u7AEF\u8FD0\u884C\u3002</li></ul></li><li><p><strong>\u6027\u80FD\u597D</strong></p><ul><li>\u65E0\u9700\u9891\u7E41\u66F4\u65B0 DOM\uFF0C\u51CF\u5C11\u56DE\u6D41\u4E0E\u91CD\u7ED8\uFF0C\u63D0\u9AD8\u4E86\u6027\u80FD\u3002</li></ul></li><li><p><strong>\u7B80\u5355\u65B9\u4FBF</strong></p><ul><li>\u65E0\u9700\u64CD\u4F5C\u771F\u5B9E DOM\uFF0C\u8868\u8FBE\u529B\u66F4\u5F3A\uFF0C\u6570\u636E\u66F4\u65B0\u66F4\u52A0\u65B9\u4FBF\u3002</li></ul></li></ul><h2 id="\u4E0D\u8DB3" tabindex="-1"><a class="header-anchor" href="#\u4E0D\u8DB3" aria-hidden="true">#</a> \u4E0D\u8DB3</h2><ul><li>\u865A\u62DF DOM \u540C\u6837\u4E5F\u6709\u7F3A\u70B9\uFF0C\u9996\u6B21\u6E32\u67D3\u5927\u91CF DOM \u65F6\uFF0C\u7531\u4E8E\u591A\u4E86\u4E00\u5C42\u865A\u62DF DOM \u7684\u8BA1\u7B97\uFF0C\u4F1A\u6BD4 innerHTML \u63D2\u5165\u6162\u3002</li></ul><h2 id="\u865A\u62DF-dom-\u5B9E\u73B0\u539F\u7406" tabindex="-1"><a class="header-anchor" href="#\u865A\u62DF-dom-\u5B9E\u73B0\u539F\u7406" aria-hidden="true">#</a> \u865A\u62DF DOM \u5B9E\u73B0\u539F\u7406</h2><p>\u4E3B\u8981\u5206\u4E09\u90E8\u5206</p><ul><li>\u901A\u8FC7 js \u5EFA\u7ACB\u4E0E\u771F\u5B9E DOM \u8282\u70B9\u5BF9\u5E94\u7684\u865A\u62DF\u8282\u70B9 vnode \u8282\u70B9\u63CF\u8FF0\u5BF9\u8C61</li><li>\u6BCF\u6B21\u751F\u6210\u865A\u62DF\u8282\u70B9 vnode \u90FD\u4F1A\u7F13\u5B58\u4E0B\u6765\uFF0Cdiff \u7B97\u6CD5\u6BD4\u8F83\u5206\u6790\u65B0\u65E7\u4E24\u4E2A\u865A\u62DF DOM \u5DEE\u5F02</li><li>\u5C06\u5DEE\u5F02 patch \u5230\u771F\u5B9E dom \u4E0A\u5B9E\u73B0\u66F4\u65B0</li></ul><p><img src="`+p+'" alt="img"></p>',18),i=[o];function l(r,c){return s(),a("div",null,i)}var u=n(t,[["render",l],["__file","dom.html.vue"]]);export{u as default};
