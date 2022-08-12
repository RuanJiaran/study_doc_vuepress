import{_ as n,o as s,c as a,a as t}from"./app.d2eb7f9c.js";var p="/study/assets/f28aed20-df2f-11eb-ab90-d9ae814b240d.814b0206.png";const e={},o=t(`<h2 id="\u53D7\u63A7\u7EC4\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u53D7\u63A7\u7EC4\u4EF6" aria-hidden="true">#</a> \u53D7\u63A7\u7EC4\u4EF6</h2><p>\u53D7\u63A7\u7EC4\u4EF6\uFF0C\u7B80\u5355\u6765\u8BB2\uFF0C\u5C31\u662F\u53D7\u6211\u4EEC\u63A7\u5236\u7684\u7EC4\u4EF6\uFF0C\u7EC4\u4EF6\u7684\u72B6\u6001\u5168\u7A0B\u54CD\u5E94\u5916\u90E8\u6570\u636E</p><p>\u4E3E\u4E2A\u7B80\u5355\u7684\u4F8B\u5B50\uFF1A</p><div class="language-jsx ext-jsx line-numbers-mode"><pre class="language-jsx"><code><span class="token keyword">class</span> <span class="token class-name">TestComponent</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>state <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">username</span><span class="token operator">:</span> <span class="token string">&#39;lindaidai&#39;</span> <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>username<span class="token punctuation">&quot;</span></span> <span class="token attr-name">value</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>username<span class="token punctuation">}</span></span> <span class="token punctuation">/&gt;</span></span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8FD9\u65F6\u5019\u5F53\u6211\u4EEC\u5728\u8F93\u5165\u6846\u8F93\u5165\u5185\u5BB9\u7684\u65F6\u5019\uFF0C\u4F1A\u53D1\u73B0\u8F93\u5165\u7684\u5185\u5BB9\u5E76\u65E0\u6CD5\u663E\u793A\u51FA\u6765\uFF0C\u4E5F\u5C31\u662F<code>input</code>\u6807\u7B7E\u662F\u4E00\u4E2A\u53EF\u8BFB\u7684\u72B6\u6001</p><p>\u8FD9\u662F\u56E0\u4E3A<code>value</code>\u88AB<code>this.state.username</code>\u6240\u63A7\u5236\u4F4F\u3002\u5F53\u7528\u6237\u8F93\u5165\u65B0\u7684\u5185\u5BB9\u65F6\uFF0C<code>this.state.username</code>\u5E76\u4E0D\u4F1A\u81EA\u52A8\u66F4\u65B0\uFF0C\u8FD9\u6837\u7684\u8BDD<code>input</code>\u5185\u7684\u5185\u5BB9\u4E5F\u5C31\u4E0D\u4F1A\u53D8\u4E86</p><p>\u5982\u679C\u60F3\u8981\u89E3\u9664\u88AB\u63A7\u5236\uFF0C\u53EF\u4EE5\u4E3A<code>input</code>\u6807\u7B7E\u8BBE\u7F6E<code>onChange</code>\u4E8B\u4EF6\uFF0C\u8F93\u5165\u7684\u65F6\u5019\u89E6\u53D1\u4E8B\u4EF6\u51FD\u6570\uFF0C\u5728\u51FD\u6570\u5185\u90E8\u5B9E\u73B0<code>state</code>\u7684\u66F4\u65B0\uFF0C\u4ECE\u800C\u5BFC\u81F4<code>input</code>\u6846\u7684\u5185\u5BB9\u9875\u53D1\u73B0\u6539\u53D8</p><p>\u56E0\u6B64\uFF0C\u53D7\u63A7\u7EC4\u4EF6\u6211\u4EEC\u4E00\u822C\u9700\u8981\u521D\u59CB\u72B6\u6001\u548C\u4E00\u4E2A\u72B6\u6001\u66F4\u65B0\u4E8B\u4EF6\u51FD\u6570</p><h2 id="\u975E\u53D7\u63A7\u7EC4\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u975E\u53D7\u63A7\u7EC4\u4EF6" aria-hidden="true">#</a> \u975E\u53D7\u63A7\u7EC4\u4EF6</h2><p>\u975E\u53D7\u63A7\u7EC4\u4EF6\uFF0C\u7B80\u5355\u6765\u8BB2\uFF0C\u5C31\u662F\u4E0D\u53D7\u6211\u4EEC\u63A7\u5236\u7684\u7EC4\u4EF6</p><p>\u4E00\u822C\u60C5\u51B5\u662F\u5728\u521D\u59CB\u5316\u7684\u65F6\u5019\u63A5\u53D7\u5916\u90E8\u6570\u636E\uFF0C\u7136\u540E\u81EA\u5DF1\u5728\u5185\u90E8\u5B58\u50A8\u5176\u81EA\u8EAB\u72B6\u6001</p><p>\u5F53\u9700\u8981\u65F6\uFF0C\u53EF\u4EE5\u4F7F\u7528<code>ref</code> \u67E5\u8BE2 <code>DOM</code>\u5E76\u67E5\u627E\u5176\u5F53\u524D\u503C\uFF0C\u5982\u4E0B\uFF1A</p><div class="language-jsx ext-jsx line-numbers-mode"><pre class="language-jsx"><code><span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> Component <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;react&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">UnControll</span> <span class="token keyword">extends</span> <span class="token class-name">Component</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>inputRef <span class="token operator">=</span> React<span class="token punctuation">.</span><span class="token function">createRef</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token function-variable function">handleSubmit</span> <span class="token operator">=</span> <span class="token parameter">e</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;\u6211\u4EEC\u53EF\u4EE5\u83B7\u5F97input\u5185\u7684\u503C\u4E3A&#39;</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>inputRef<span class="token punctuation">.</span>current<span class="token punctuation">.</span>value<span class="token punctuation">)</span>
    e<span class="token punctuation">.</span><span class="token function">preventDefault</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>form</span> <span class="token attr-name">onSubmit</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token parameter">e</span> <span class="token operator">=&gt;</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">handleSubmit</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">}</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">defaultValue</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>lindaidai<span class="token punctuation">&quot;</span></span> <span class="token attr-name">ref</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>inputRef<span class="token punctuation">}</span></span> <span class="token punctuation">/&gt;</span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>submit<span class="token punctuation">&quot;</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>\u63D0\u4EA4<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>form</span><span class="token punctuation">&gt;</span></span>
    <span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u5E94\u7528\u573A\u666F" tabindex="-1"><a class="header-anchor" href="#\u5E94\u7528\u573A\u666F" aria-hidden="true">#</a> \u5E94\u7528\u573A\u666F</h2><p>\u5927\u90E8\u5206\u65F6\u5019\u63A8\u8350\u4F7F\u7528\u53D7\u63A7\u7EC4\u4EF6\u6765\u5B9E\u73B0\u8868\u5355\uFF0C\u56E0\u4E3A\u5728\u53D7\u63A7\u7EC4\u4EF6\u4E2D\uFF0C\u8868\u5355\u6570\u636E\u7531<code>React</code>\u7EC4\u4EF6\u8D1F\u8D23\u5904\u7406</p><p>\u5982\u679C\u9009\u62E9\u975E\u53D7\u63A7\u7EC4\u4EF6\u7684\u8BDD\uFF0C\u63A7\u5236\u80FD\u529B\u8F83\u5F31\uFF0C\u8868\u5355\u6570\u636E\u5C31\u7531<code>DOM</code>\u672C\u8EAB\u5904\u7406\uFF0C\u4F46\u66F4\u52A0\u65B9\u4FBF\u5FEB\u6377\uFF0C\u4EE3\u7801\u91CF\u5C11</p><p>\u9488\u5BF9\u4E24\u8005\u7684\u533A\u522B\uFF0C\u5176\u5E94\u7528\u573A\u666F\u5982\u4E0B\u56FE\u6240\u793A\uFF1A</p><p><img src="`+p+'" alt="img"></p>',18),c=[o];function u(l,i){return s(),a("div",null,c)}var k=n(e,[["render",u],["__file","component-control.html.vue"]]);export{k as default};
