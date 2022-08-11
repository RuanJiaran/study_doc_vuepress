import{_ as n,o as s,c as a,a as t}from"./app.08a5ae43.js";const p={},e=t(`<h2 id="\u7C7B\u7EC4\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u7C7B\u7EC4\u4EF6" aria-hidden="true">#</a> \u7C7B\u7EC4\u4EF6</h2><p>\u7C7B\u7EC4\u4EF6\uFF0C\u987E\u540D\u601D\u4E49\uFF0C\u4E5F\u5C31\u662F\u901A\u8FC7\u4F7F\u7528<code>ES6</code>\u7C7B\u7684\u7F16\u5199\u5F62\u5F0F\u53BB\u7F16\u5199\u7EC4\u4EF6\uFF0C\u8BE5\u7C7B\u5FC5\u987B\u7EE7\u627F<code>React.Component</code></p><p>\u5982\u679C\u60F3\u8981\u8BBF\u95EE\u7236\u7EC4\u4EF6\u4F20\u9012\u8FC7\u6765\u7684\u53C2\u6570\uFF0C\u53EF\u901A\u8FC7<code>this.props</code>\u7684\u65B9\u5F0F\u53BB\u8BBF\u95EE</p><p>\u5728\u7EC4\u4EF6\u4E2D\u5FC5\u987B\u5B9E\u73B0<code>render</code>\u65B9\u6CD5\uFF0C\u5728<code>return</code>\u4E2D\u8FD4\u56DE<code>React</code>\u5BF9\u8C61\uFF0C\u5982\u4E0B\uFF1A</p><div class="language-jsx ext-jsx line-numbers-mode"><pre class="language-jsx"><code><span class="token keyword">class</span> <span class="token class-name">Welcome</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">Hello, </span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span>name<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">&gt;</span></span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u51FD\u6570\u7EC4\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u51FD\u6570\u7EC4\u4EF6" aria-hidden="true">#</a> \u51FD\u6570\u7EC4\u4EF6</h2><p>\u51FD\u6570\u7EC4\u4EF6\uFF0C\u987E\u540D\u601D\u4E49\uFF0C\u5C31\u662F\u901A\u8FC7\u51FD\u6570\u7F16\u5199\u7684\u5F62\u5F0F\u53BB\u5B9E\u73B0\u4E00\u4E2A<code>React</code>\u7EC4\u4EF6\uFF0C\u662F<code>React</code>\u4E2D\u5B9A\u4E49\u7EC4\u4EF6\u6700\u7B80\u5355\u7684\u65B9\u5F0F</p><div class="language-jsx ext-jsx line-numbers-mode"><pre class="language-jsx"><code><span class="token keyword">function</span> <span class="token function">Welcome</span><span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">Hello, </span><span class="token punctuation">{</span>props<span class="token punctuation">.</span>name<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u51FD\u6570\u7B2C\u4E00\u4E2A\u53C2\u6570\u4E3A<code>props</code>\u7528\u4E8E\u63A5\u6536\u7236\u7EC4\u4EF6\u4F20\u9012\u8FC7\u6765\u7684\u53C2\u6570</p><h2 id="\u533A\u522B" tabindex="-1"><a class="header-anchor" href="#\u533A\u522B" aria-hidden="true">#</a> \u533A\u522B</h2><p>\u9488\u5BF9\u4E24\u79CD<code>React</code>\u7EC4\u4EF6\uFF0C\u5176\u533A\u522B\u4E3B\u8981\u5206\u6210\u4EE5\u4E0B\u51E0\u5927\u65B9\u5411\uFF1A</p><ul><li>\u7F16\u5199\u5F62\u5F0F</li><li>\u72B6\u6001\u7BA1\u7406</li><li>\u751F\u547D\u5468\u671F</li><li>\u8C03\u7528\u65B9\u5F0F</li><li>\u83B7\u53D6\u6E32\u67D3\u7684\u503C</li></ul><h3 id="\u7F16\u5199\u5F62\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u7F16\u5199\u5F62\u5F0F" aria-hidden="true">#</a> \u7F16\u5199\u5F62\u5F0F</h3><p>\u4E24\u8005\u6700\u660E\u663E\u7684\u533A\u522B\u5728\u4E8E\u7F16\u5199\u5F62\u5F0F\u7684\u4E0D\u540C\uFF0C\u540C\u4E00\u79CD\u529F\u80FD\u7684\u5B9E\u73B0\u53EF\u4EE5\u5206\u522B\u5BF9\u5E94\u7C7B\u7EC4\u4EF6\u548C\u51FD\u6570\u7EC4\u4EF6\u7684\u7F16\u5199\u5F62\u5F0F</p><p>\u51FD\u6570\u7EC4\u4EF6\uFF1A</p><div class="language-jsx ext-jsx line-numbers-mode"><pre class="language-jsx"><code><span class="token keyword">function</span> <span class="token function">Welcome</span><span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">Hello, </span><span class="token punctuation">{</span>props<span class="token punctuation">.</span>name<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u7C7B\u7EC4\u4EF6\uFF1A</p><div class="language-jsx ext-jsx line-numbers-mode"><pre class="language-jsx"><code><span class="token keyword">class</span> <span class="token class-name">Welcome</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">Hello, </span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span>name<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">&gt;</span></span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u72B6\u6001\u7BA1\u7406" tabindex="-1"><a class="header-anchor" href="#\u72B6\u6001\u7BA1\u7406" aria-hidden="true">#</a> \u72B6\u6001\u7BA1\u7406</h3><p>\u5728<code>hooks</code>\u51FA\u6765\u4E4B\u524D\uFF0C\u51FD\u6570\u7EC4\u4EF6\u5C31\u662F\u65E0\u72B6\u6001\u7EC4\u4EF6\uFF0C\u4E0D\u80FD\u4FDD\u7BA1\u7EC4\u4EF6\u7684\u72B6\u6001\uFF0C\u4E0D\u50CF\u7C7B\u7EC4\u4EF6\u4E2D\u8C03\u7528<code>setState</code></p><p>\u5982\u679C\u60F3\u8981\u7BA1\u7406<code>state</code>\u72B6\u6001\uFF0C\u53EF\u4EE5\u4F7F\u7528<code>useState</code>\uFF0C\u5982\u4E0B\uFF1A</p><div class="language-jsx ext-jsx line-numbers-mode"><pre class="language-jsx"><code><span class="token keyword">const</span> <span class="token function-variable function">FunctionalComponent</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> <span class="token punctuation">[</span>count<span class="token punctuation">,</span> setCount<span class="token punctuation">]</span> <span class="token operator">=</span> React<span class="token punctuation">.</span><span class="token function">useState</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">return</span> <span class="token punctuation">(</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
            </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">count: </span><span class="token punctuation">{</span>count<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span> <span class="token punctuation">&gt;</span></span><span class="token plain-text">
            </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">setCount</span><span class="token punctuation">(</span>count <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">Click</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u751F\u547D\u5468\u671F" tabindex="-1"><a class="header-anchor" href="#\u751F\u547D\u5468\u671F" aria-hidden="true">#</a> \u751F\u547D\u5468\u671F</h3><p>\u5728\u51FD\u6570\u7EC4\u4EF6\u4E2D\uFF0C\u5E76\u4E0D\u5B58\u5728\u751F\u547D\u5468\u671F\uFF0C\u8FD9\u662F\u56E0\u4E3A\u8FD9\u4E9B\u751F\u547D\u5468\u671F\u94A9\u5B50\u90FD\u6765\u81EA\u4E8E\u7EE7\u627F\u7684<code>React.Component</code></p><p>\u6240\u4EE5\uFF0C\u5982\u679C\u7528\u5230\u751F\u547D\u5468\u671F\uFF0C\u5C31\u53EA\u80FD\u4F7F\u7528\u7C7B\u7EC4\u4EF6</p><p>\u4F46\u662F\u51FD\u6570\u7EC4\u4EF6\u4F7F\u7528<code>useEffect</code>\u4E5F\u80FD\u591F\u5B8C\u6210\u66FF\u4EE3\u751F\u547D\u5468\u671F\u7684\u4F5C\u7528\uFF0C\u8FD9\u91CC\u7ED9\u51FA\u4E00\u4E2A\u7B80\u5355\u7684\u4F8B\u5B50\uFF1A</p><div class="language-jsx ext-jsx line-numbers-mode"><pre class="language-jsx"><code><span class="token keyword">const</span> <span class="token function-variable function">FunctionalComponent</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token function">useEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;Hello&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">Hello, World</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0A\u8FF0\u7B80\u5355\u7684\u4F8B\u5B50\u5BF9\u5E94\u7C7B\u7EC4\u4EF6\u4E2D\u7684<code>componentDidMount</code>\u751F\u547D\u5468\u671F</p><p>\u5982\u679C\u5728<code>useEffect</code>\u56DE\u8C03\u51FD\u6570\u4E2D<code>return</code>\u4E00\u4E2A\u51FD\u6570\uFF0C\u5219<code>return</code>\u51FD\u6570\u4F1A\u5728\u7EC4\u4EF6\u5378\u8F7D\u7684\u65F6\u5019\u6267\u884C\uFF0C\u6B63\u5982<code>componentWillUnmount</code></p><div class="language-jsx ext-jsx line-numbers-mode"><pre class="language-jsx"><code><span class="token keyword">const</span> <span class="token function-variable function">FunctionalComponent</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
 React<span class="token punctuation">.</span><span class="token function">useEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
   <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
     console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;Bye&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
   <span class="token punctuation">}</span><span class="token punctuation">;</span>
 <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">Bye, World</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u8C03\u7528\u65B9\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u8C03\u7528\u65B9\u5F0F" aria-hidden="true">#</a> \u8C03\u7528\u65B9\u5F0F</h3><p>\u5982\u679C\u662F\u4E00\u4E2A\u51FD\u6570\u7EC4\u4EF6\uFF0C\u8C03\u7528\u5219\u662F\u6267\u884C\u51FD\u6570\u5373\u53EF\uFF1A</p><div class="language-jsx ext-jsx line-numbers-mode"><pre class="language-jsx"><code><span class="token comment">// \u4F60\u7684\u4EE3\u7801 </span>
<span class="token keyword">function</span> <span class="token function">SayHi</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">Hello, React</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span> <span class="token punctuation">&gt;</span></span> 
<span class="token punctuation">}</span> 
<span class="token comment">// React\u5185\u90E8 </span>
<span class="token keyword">const</span> result <span class="token operator">=</span> <span class="token function">SayHi</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span> <span class="token comment">// \xBB &lt;p&gt;Hello, React&lt;/p &gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5982\u679C\u662F\u4E00\u4E2A\u7C7B\u7EC4\u4EF6\uFF0C\u5219\u9700\u8981\u5C06\u7EC4\u4EF6\u8FDB\u884C\u5B9E\u4F8B\u5316\uFF0C\u7136\u540E\u8C03\u7528\u5B9E\u4F8B\u5BF9\u8C61\u7684<code>render</code>\u65B9\u6CD5\uFF1A</p><div class="language-jsx ext-jsx line-numbers-mode"><pre class="language-jsx"><code><span class="token comment">// \u4F60\u7684\u4EE3\u7801 </span>
<span class="token keyword">class</span> <span class="token class-name">SayHi</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span> 
    <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> 
        <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">Hello, React</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span> <span class="token punctuation">&gt;</span></span> 
    <span class="token punctuation">}</span> 
<span class="token punctuation">}</span> 
<span class="token comment">// React\u5185\u90E8 </span>
<span class="token keyword">const</span> instance <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">SayHi</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span> <span class="token comment">// \xBB SayHi {} </span>
<span class="token keyword">const</span> result <span class="token operator">=</span> instance<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// \xBB &lt;p&gt;Hello, React&lt;/p &gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u83B7\u53D6\u6E32\u67D3\u7684\u503C" tabindex="-1"><a class="header-anchor" href="#\u83B7\u53D6\u6E32\u67D3\u7684\u503C" aria-hidden="true">#</a> \u83B7\u53D6\u6E32\u67D3\u7684\u503C</h3><p>\u9996\u5148\u7ED9\u51FA\u4E00\u4E2A\u793A\u4F8B</p><p>\u51FD\u6570\u7EC4\u4EF6\u5BF9\u5E94\u5982\u4E0B\uFF1A</p><div class="language-jsx ext-jsx line-numbers-mode"><pre class="language-jsx"><code><span class="token keyword">function</span> <span class="token function">ProfilePage</span><span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token function-variable function">showMessage</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">&#39;Followed &#39;</span> <span class="token operator">+</span> props<span class="token punctuation">.</span>user<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">const</span> <span class="token function-variable function">handleClick</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token function">setTimeout</span><span class="token punctuation">(</span>showMessage<span class="token punctuation">,</span> <span class="token number">3000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>handleClick<span class="token punctuation">}</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">Follow</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u7C7B\u7EC4\u4EF6\u5BF9\u5E94\u5982\u4E0B\uFF1A</p><div class="language-jsx ext-jsx line-numbers-mode"><pre class="language-jsx"><code><span class="token keyword">class</span> <span class="token class-name">ProfilePage</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>
  <span class="token function">showMessage</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">&#39;Followed &#39;</span> <span class="token operator">+</span> <span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span>user<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token function">handleClick</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">showMessage</span><span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">3000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">handleClick</span><span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">Follow</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E24\u8005\u770B\u8D77\u6765\u5B9E\u73B0\u529F\u80FD\u662F\u4E00\u81F4\u7684\uFF0C\u4F46\u662F\u5728\u7C7B\u7EC4\u4EF6\u4E2D\uFF0C\u8F93\u51FA<code>this.props.user</code>\uFF0C<code>Props</code>\u5728 <code>React</code>\u4E2D\u662F\u4E0D\u53EF\u53D8\u7684\u6240\u4EE5\u5B83\u6C38\u8FDC\u4E0D\u4F1A\u6539\u53D8\uFF0C\u4F46\u662F <code>this</code> \u603B\u662F\u53EF\u53D8\u7684\uFF0C\u4EE5\u4FBF\u60A8\u53EF\u4EE5\u5728 <code>render</code> \u548C\u751F\u547D\u5468\u671F\u51FD\u6570\u4E2D\u8BFB\u53D6\u65B0\u7248\u672C</p><p>\u56E0\u6B64\uFF0C\u5982\u679C\u6211\u4EEC\u7684\u7EC4\u4EF6\u5728\u8BF7\u6C42\u8FD0\u884C\u65F6\u66F4\u65B0\u3002<code>this.props</code> \u5C06\u4F1A\u6539\u53D8\u3002<code>showMessage</code>\u65B9\u6CD5\u4ECE\u201C\u6700\u65B0\u201D\u7684 <code>props</code> \u4E2D\u8BFB\u53D6 <code>user</code></p><p>\u800C\u51FD\u6570\u7EC4\u4EF6\uFF0C\u672C\u8EAB\u5C31\u4E0D\u5B58\u5728<code>this</code>\uFF0C<code>props</code>\u5E76\u4E0D\u53D1\u751F\u6539\u53D8\uFF0C\u56E0\u6B64\u540C\u6837\u662F\u70B9\u51FB\uFF0C<code>alert</code>\u7684\u5185\u5BB9\u4ECD\u65E7\u662F\u4E4B\u524D\u7684\u5185\u5BB9</p><h3 id="\u5C0F\u7ED3" tabindex="-1"><a class="header-anchor" href="#\u5C0F\u7ED3" aria-hidden="true">#</a> \u5C0F\u7ED3</h3><p>\u4E24\u79CD\u7EC4\u4EF6\u90FD\u6709\u5404\u81EA\u7684\u4F18\u7F3A\u70B9</p><p>\u51FD\u6570\u7EC4\u4EF6\u8BED\u6CD5\u66F4\u77ED\u3001\u66F4\u7B80\u5355\uFF0C\u8FD9\u4F7F\u5F97\u5B83\u66F4\u5BB9\u6613\u5F00\u53D1\u3001\u7406\u89E3\u548C\u6D4B\u8BD5</p><p>\u800C\u7C7B\u7EC4\u4EF6\u4E5F\u4F1A\u56E0\u5927\u91CF\u4F7F\u7528 <code>this</code>\u800C\u8BA9\u4EBA\u611F\u5230\u56F0\u60D1</p>`,48),o=[e];function c(l,i){return s(),a("div",null,o)}var k=n(p,[["render",c],["__file","func-component.html.vue"]]);export{k as default};
