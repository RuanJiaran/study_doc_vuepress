import{_ as n,o as s,c as a,a as e}from"./app.d2eb7f9c.js";const t={},p=e(`<h2 id="\u5982\u4F55\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#\u5982\u4F55\u4F7F\u7528" aria-hidden="true">#</a> \u5982\u4F55\u4F7F\u7528</h2><p>\u521B\u5EFA<code>ref</code>\u7684\u5F62\u5F0F\u6709\u4E09\u79CD\uFF1A</p><ul><li>\u4F20\u5165\u5B57\u7B26\u4E32\uFF0C\u4F7F\u7528\u65F6\u901A\u8FC7 this.refs.\u4F20\u5165\u7684\u5B57\u7B26\u4E32\u7684\u683C\u5F0F\u83B7\u53D6\u5BF9\u5E94\u7684\u5143\u7D20</li><li>\u4F20\u5165\u5BF9\u8C61\uFF0C\u5BF9\u8C61\u662F\u901A\u8FC7 React.createRef() \u65B9\u5F0F\u521B\u5EFA\u51FA\u6765\uFF0C\u4F7F\u7528\u65F6\u83B7\u53D6\u5230\u521B\u5EFA\u7684\u5BF9\u8C61\u4E2D\u5B58\u5728 current \u5C5E\u6027\u5C31\u662F\u5BF9\u5E94\u7684\u5143\u7D20</li><li>\u4F20\u5165\u51FD\u6570\uFF0C\u8BE5\u51FD\u6570\u4F1A\u5728 DOM \u88AB\u6302\u8F7D\u65F6\u8FDB\u884C\u56DE\u8C03\uFF0C\u8FD9\u4E2A\u51FD\u6570\u4F1A\u4F20\u5165\u4E00\u4E2A \u5143\u7D20\u5BF9\u8C61\uFF0C\u53EF\u4EE5\u81EA\u5DF1\u4FDD\u5B58\uFF0C\u4F7F\u7528\u65F6\uFF0C\u76F4\u63A5\u62FF\u5230\u4E4B\u524D\u4FDD\u5B58\u7684\u5143\u7D20\u5BF9\u8C61\u5373\u53EF</li><li>\u4F20\u5165hook\uFF0Chook\u662F\u901A\u8FC7 useRef() \u65B9\u5F0F\u521B\u5EFA\uFF0C\u4F7F\u7528\u65F6\u901A\u8FC7\u751F\u6210hook\u5BF9\u8C61\u7684 current \u5C5E\u6027\u5C31\u662F\u5BF9\u5E94\u7684\u5143\u7D20</li></ul><h2 id="\u7C7B\u7EC4\u4EF6\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#\u7C7B\u7EC4\u4EF6\u4F7F\u7528" aria-hidden="true">#</a> \u7C7B\u7EC4\u4EF6\u4F7F\u7528</h2><h5 id="\u4F20\u5165\u5B57\u7B26\u4E32" tabindex="-1"><a class="header-anchor" href="#\u4F20\u5165\u5B57\u7B26\u4E32" aria-hidden="true">#</a> \u4F20\u5165\u5B57\u7B26\u4E32</h5><p>\u53EA\u9700\u8981\u5728\u5BF9\u5E94\u5143\u7D20\u6216\u7EC4\u4EF6\u4E2D<code>ref</code>\u5C5E\u6027</p><div class="language-jsx ext-jsx line-numbers-mode"><pre class="language-jsx"><code><span class="token keyword">class</span> <span class="token class-name">MyComponent</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>myRef <span class="token operator">=</span> React<span class="token punctuation">.</span><span class="token function">createRef</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>myref<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8BBF\u95EE\u5F53\u524D\u8282\u70B9\u7684\u65B9\u5F0F\u5982\u4E0B\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">this</span><span class="token punctuation">.</span>refs<span class="token punctuation">.</span>myref<span class="token punctuation">.</span>innerHTML <span class="token operator">=</span> <span class="token string">&quot;hello&quot;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h5 id="\u4F20\u5165\u5BF9\u8C61" tabindex="-1"><a class="header-anchor" href="#\u4F20\u5165\u5BF9\u8C61" aria-hidden="true">#</a> \u4F20\u5165\u5BF9\u8C61</h5><p><code>refs</code>\u901A\u8FC7<code>React.createRef()</code>\u521B\u5EFA\uFF0C\u7136\u540E\u5C06<code>ref</code>\u5C5E\u6027\u6DFB\u52A0\u5230<code>React</code>\u5143\u7D20\u4E2D\uFF0C\u5982\u4E0B\uFF1A</p><div class="language-jsx ext-jsx line-numbers-mode"><pre class="language-jsx"><code><span class="token keyword">class</span> <span class="token class-name">MyComponent</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>myRef <span class="token operator">=</span> React<span class="token punctuation">.</span><span class="token function">createRef</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">ref</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>myRef<span class="token punctuation">}</span></span> <span class="token punctuation">/&gt;</span></span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5F53 <code>ref</code> \u88AB\u4F20\u9012\u7ED9 <code>render</code> \u4E2D\u7684\u5143\u7D20\u65F6\uFF0C\u5BF9\u8BE5\u8282\u70B9\u7684\u5F15\u7528\u53EF\u4EE5\u5728 <code>ref</code> \u7684 <code>current</code> \u5C5E\u6027\u4E2D\u8BBF\u95EE</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> node <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>myRef<span class="token punctuation">.</span>current<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h5 id="\u4F20\u5165\u51FD\u6570" tabindex="-1"><a class="header-anchor" href="#\u4F20\u5165\u51FD\u6570" aria-hidden="true">#</a> \u4F20\u5165\u51FD\u6570</h5><p>\u5F53<code>ref</code>\u4F20\u5165\u4E3A\u4E00\u4E2A\u51FD\u6570\u7684\u65F6\u5019\uFF0C\u5728\u6E32\u67D3\u8FC7\u7A0B\u4E2D\uFF0C\u56DE\u8C03\u51FD\u6570\u53C2\u6570\u4F1A\u4F20\u5165\u4E00\u4E2A\u5143\u7D20\u5BF9\u8C61\uFF0C\u7136\u540E\u901A\u8FC7\u5B9E\u4F8B\u5C06\u5BF9\u8C61\u8FDB\u884C\u4FDD\u5B58</p><div class="language-jsx ext-jsx line-numbers-mode"><pre class="language-jsx"><code><span class="token keyword">class</span> <span class="token class-name">MyComponent</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>myRef <span class="token operator">=</span> React<span class="token punctuation">.</span><span class="token function">createRef</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">ref</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token parameter">element</span> <span class="token operator">=&gt;</span> <span class="token keyword">this</span><span class="token punctuation">.</span>myref <span class="token operator">=</span> element<span class="token punctuation">}</span></span> <span class="token punctuation">/&gt;</span></span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u83B7\u53D6<code>ref</code>\u5BF9\u8C61\u53EA\u9700\u8981\u901A\u8FC7\u5148\u524D\u5B58\u50A8\u7684\u5BF9\u8C61\u5373\u53EF</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> node <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>myref 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="\u51FD\u6570\u7EC4\u4EF6\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#\u51FD\u6570\u7EC4\u4EF6\u4F7F\u7528" aria-hidden="true">#</a> \u51FD\u6570\u7EC4\u4EF6\u4F7F\u7528</h2><h5 id="\u4F20\u5165hook" tabindex="-1"><a class="header-anchor" href="#\u4F20\u5165hook" aria-hidden="true">#</a> \u4F20\u5165hook</h5><p>\u901A\u8FC7<code>useRef</code>\u521B\u5EFA\u4E00\u4E2A<code>ref</code>\uFF0C\u6574\u4F53\u4F7F\u7528\u65B9\u5F0F\u4E0E<code>React.createRef</code>\u4E00\u81F4</p><div class="language-jsx ext-jsx line-numbers-mode"><pre class="language-jsx"><code><span class="token keyword">function</span> <span class="token function">App</span><span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> myref <span class="token operator">=</span> <span class="token function">useRef</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">ref</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>myref<span class="token punctuation">}</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u83B7\u53D6<code>ref</code>\u5C5E\u6027\u4E5F\u662F\u901A\u8FC7<code>hook</code>\u5BF9\u8C61\u7684<code>current</code>\u5C5E\u6027</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> node <span class="token operator">=</span> myref<span class="token punctuation">.</span>current<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u4E0A\u8FF0\u4E09\u79CD\u60C5\u51B5\u90FD\u662F<code>ref</code>\u5C5E\u6027\u7528\u4E8E\u539F\u751F<code>HTML</code>\u5143\u7D20\u4E0A\uFF0C\u5982\u679C<code>ref</code>\u8BBE\u7F6E\u7684\u7EC4\u4EF6\u4E3A\u4E00\u4E2A\u7C7B\u7EC4\u4EF6\u7684\u65F6\u5019\uFF0C<code>ref</code>\u5BF9\u8C61\u63A5\u6536\u5230\u7684\u662F\u7EC4\u4EF6\u7684\u6302\u8F7D\u5B9E\u4F8B</p><p>\u6CE8\u610F\u7684\u662F\uFF0C\u4E0D\u80FD\u5728\u51FD\u6570\u7EC4\u4EF6\u4E0A\u4F7F\u7528<code>ref</code>\u5C5E\u6027\uFF0C\u56E0\u4E3A\u4ED6\u4EEC\u5E76\u6CA1\u6709\u5B9E\u4F8B</p><h2 id="\u5E94\u7528\u573A\u666F" tabindex="-1"><a class="header-anchor" href="#\u5E94\u7528\u573A\u666F" aria-hidden="true">#</a> \u5E94\u7528\u573A\u666F</h2><p>\u5728\u67D0\u4E9B\u60C5\u51B5\u4E0B\uFF0C\u6211\u4EEC\u4F1A\u901A\u8FC7\u4F7F\u7528<code>refs</code>\u6765\u66F4\u65B0\u7EC4\u4EF6\uFF0C\u4F46\u8FD9\u79CD\u65B9\u5F0F\u5E76\u4E0D\u63A8\u8350\uFF0C\u66F4\u591A\u60C5\u51B5\u6211\u4EEC\u662F\u901A\u8FC7<code>props</code>\u4E0E<code>state</code>\u7684\u65B9\u5F0F\u8FDB\u884C\u53BB\u91CD\u65B0\u6E32\u67D3\u5B50\u5143\u7D20</p><p>\u8FC7\u591A\u4F7F\u7528<code>refs</code>\uFF0C\u4F1A\u4F7F\u7EC4\u4EF6\u7684\u5B9E\u4F8B\u6216\u8005\u662F<code>DOM</code>\u7ED3\u6784\u66B4\u9732\uFF0C\u8FDD\u53CD\u7EC4\u4EF6\u5C01\u88C5\u7684\u539F\u5219</p><p>\u4F8B\u5982\uFF0C\u907F\u514D\u5728 <code>Dialog</code> \u7EC4\u4EF6\u91CC\u66B4\u9732 <code>open()</code> \u548C <code>close()</code> \u65B9\u6CD5\uFF0C\u6700\u597D\u4F20\u9012 <code>isOpen</code> \u5C5E\u6027</p><p>\u4F46\u4E0B\u9762\u7684\u573A\u666F\u4F7F\u7528<code>refs</code>\u975E\u5E38\u6709\u7528\uFF1A</p><ul><li>\u5BF9Dom\u5143\u7D20\u7684\u7126\u70B9\u63A7\u5236\u3001\u5185\u5BB9\u9009\u62E9\u3001\u63A7\u5236</li><li>\u5BF9Dom\u5143\u7D20\u7684\u5185\u5BB9\u8BBE\u7F6E\u53CA\u5A92\u4F53\u64AD\u653E</li><li>\u5BF9Dom\u5143\u7D20\u7684\u64CD\u4F5C\u548C\u5BF9\u7EC4\u4EF6\u5B9E\u4F8B\u7684\u64CD\u4F5C</li><li>\u96C6\u6210\u7B2C\u4E09\u65B9 DOM \u5E93</li></ul>`,33),c=[p];function o(i,l){return s(),a("div",null,c)}var d=n(t,[["render",o],["__file","refs.html.vue"]]);export{d as default};
