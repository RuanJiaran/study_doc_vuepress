import{_ as p,o as e,c,b as n,d as o,a as s,e as a,r as l}from"./app.ef00ce81.js";const i={},u=s(`<h1 id="\u7EC4\u4EF6\u901A\u4FE1" tabindex="-1"><a class="header-anchor" href="#\u7EC4\u4EF6\u901A\u4FE1" aria-hidden="true">#</a> \u7EC4\u4EF6\u901A\u4FE1</h1><h2 id="\u5982\u4F55\u901A\u4FE1" tabindex="-1"><a class="header-anchor" href="#\u5982\u4F55\u901A\u4FE1" aria-hidden="true">#</a> \u5982\u4F55\u901A\u4FE1</h2><p>\u7EC4\u4EF6\u4F20\u9012\u7684\u65B9\u5F0F\u6709\u5F88\u591A\u79CD\uFF0C\u6839\u636E\u4F20\u9001\u8005\u548C\u63A5\u6536\u8005\u53EF\u4EE5\u5206\u4E3A\u5982\u4E0B\uFF1A</p><ul><li>\u7236\u7EC4\u4EF6\u5411\u5B50\u7EC4\u4EF6\u4F20\u9012</li><li>\u5B50\u7EC4\u4EF6\u5411\u7236\u7EC4\u4EF6\u4F20\u9012</li><li>\u5144\u5F1F\u7EC4\u4EF6\u4E4B\u95F4\u7684\u901A\u4FE1</li><li>\u7236\u7EC4\u4EF6\u5411\u540E\u4EE3\u7EC4\u4EF6\u4F20\u9012</li><li>\u975E\u5173\u7CFB\u7EC4\u4EF6\u4F20\u9012</li></ul><h2 id="\u7236\u7EC4\u4EF6\u5411\u5B50\u7EC4\u4EF6\u4F20\u9012" tabindex="-1"><a class="header-anchor" href="#\u7236\u7EC4\u4EF6\u5411\u5B50\u7EC4\u4EF6\u4F20\u9012" aria-hidden="true">#</a> \u7236\u7EC4\u4EF6\u5411\u5B50\u7EC4\u4EF6\u4F20\u9012</h2><p>\u7531\u4E8E<code>React</code>\u7684\u6570\u636E\u6D41\u52A8\u4E3A\u5355\u5411\u7684\uFF0C\u7236\u7EC4\u4EF6\u5411\u5B50\u7EC4\u4EF6\u4F20\u9012\u662F\u6700\u5E38\u89C1\u7684\u65B9\u5F0F</p><p>\u7236\u7EC4\u4EF6\u5728\u8C03\u7528\u5B50\u7EC4\u4EF6\u7684\u65F6\u5019\uFF0C\u53EA\u9700\u8981\u5728\u5B50\u7EC4\u4EF6\u6807\u7B7E\u5185\u4F20\u9012\u53C2\u6570\uFF0C\u5B50\u7EC4\u4EF6\u901A\u8FC7<code>props</code>\u5C5E\u6027\u5C31\u80FD\u63A5\u6536\u7236\u7EC4\u4EF6\u4F20\u9012\u8FC7\u6765\u7684\u53C2\u6570</p><div class="language-jsx ext-jsx line-numbers-mode"><pre class="language-jsx"><code><span class="token keyword">function</span> <span class="token function">EmailInput</span><span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>label</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
      Email: </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">value</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>props<span class="token punctuation">.</span>email<span class="token punctuation">}</span></span> <span class="token punctuation">/&gt;</span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>label</span><span class="token punctuation">&gt;</span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> element <span class="token operator">=</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">EmailInput</span></span> <span class="token attr-name">email</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>123124132@163.com<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u5B50\u7EC4\u4EF6\u5411\u7236\u7EC4\u4EF6\u4F20\u9012" tabindex="-1"><a class="header-anchor" href="#\u5B50\u7EC4\u4EF6\u5411\u7236\u7EC4\u4EF6\u4F20\u9012" aria-hidden="true">#</a> \u5B50\u7EC4\u4EF6\u5411\u7236\u7EC4\u4EF6\u4F20\u9012</h2><p>\u5B50\u7EC4\u4EF6\u5411\u7236\u7EC4\u4EF6\u901A\u4FE1\u7684\u57FA\u672C\u601D\u8DEF\u662F\uFF0C\u7236\u7EC4\u4EF6\u5411\u5B50\u7EC4\u4EF6\u4F20\u4E00\u4E2A\u51FD\u6570\uFF0C\u7136\u540E\u901A\u8FC7\u8FD9\u4E2A\u51FD\u6570\u7684\u56DE\u8C03\uFF0C\u62FF\u5230\u5B50\u7EC4\u4EF6\u4F20\u8FC7\u6765\u7684\u503C</p><p>\u7236\u7EC4\u4EF6\u5BF9\u5E94\u4EE3\u7801\u5982\u4E0B\uFF1A</p><div class="language-jsx ext-jsx line-numbers-mode"><pre class="language-jsx"><code><span class="token keyword">class</span> <span class="token class-name">Parents</span> <span class="token keyword">extends</span> <span class="token class-name">Component</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>state <span class="token operator">=</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">price</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token function">getItemPrice</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">price</span><span class="token operator">:</span> e<span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">price: </span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>price<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
        </span><span class="token punctuation">{</span><span class="token comment">/* \u5411\u5B50\u7EC4\u4EF6\u4E2D\u4F20\u5165\u4E00\u4E2A\u51FD\u6570  */</span><span class="token punctuation">}</span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Child</span></span> <span class="token attr-name">getPrice</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getItemPrice</span><span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span> <span class="token punctuation">/&gt;</span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5B50\u7EC4\u4EF6\u5BF9\u5E94\u4EE3\u7801\u5982\u4E0B\uFF1A</p><div class="language-jsx ext-jsx line-numbers-mode"><pre class="language-jsx"><code><span class="token keyword">class</span> <span class="token class-name">Child</span> <span class="token keyword">extends</span> <span class="token class-name">Component</span> <span class="token punctuation">{</span>
  <span class="token function">clickGoods</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u5728\u6B64\u51FD\u6570\u4E2D\u4F20\u5165\u503C</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span><span class="token function">getPrice</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">clickGoods</span><span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">goods1</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">clickGoods</span><span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">goods2</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u5144\u5F1F\u7EC4\u4EF6\u4E4B\u95F4\u7684\u901A\u4FE1" tabindex="-1"><a class="header-anchor" href="#\u5144\u5F1F\u7EC4\u4EF6\u4E4B\u95F4\u7684\u901A\u4FE1" aria-hidden="true">#</a> \u5144\u5F1F\u7EC4\u4EF6\u4E4B\u95F4\u7684\u901A\u4FE1</h2><p>\u5982\u679C\u662F\u5144\u5F1F\u7EC4\u4EF6\u4E4B\u95F4\u7684\u4F20\u9012\uFF0C\u5219\u7236\u7EC4\u4EF6\u4F5C\u4E3A\u4E2D\u95F4\u5C42\u6765\u5B9E\u73B0\u6570\u636E\u7684\u4E92\u901A\uFF0C\u901A\u8FC7\u4F7F\u7528\u7236\u7EC4\u4EF6\u4F20\u9012</p><div class="language-jsx ext-jsx line-numbers-mode"><pre class="language-jsx"><code><span class="token keyword">class</span> <span class="token class-name">Parent</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>state <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">count</span><span class="token operator">:</span> <span class="token number">0</span> <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token function-variable function">setCount</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">count</span><span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>count <span class="token operator">+</span> <span class="token number">1</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">SiblingA</span></span> <span class="token attr-name">count</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>count<span class="token punctuation">}</span></span> <span class="token punctuation">/&gt;</span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">SiblingB</span></span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>setCount<span class="token punctuation">}</span></span> <span class="token punctuation">/&gt;</span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,17),k={id:"\u7236\u7EC4\u4EF6\u5411\u540E\u4EE3\u7EC4\u4EF6\u4F20\u9012",tabindex:"-1"},r=n("a",{class:"header-anchor",href:"#\u7236\u7EC4\u4EF6\u5411\u540E\u4EE3\u7EC4\u4EF6\u4F20\u9012","aria-hidden":"true"},"#",-1),d=a(),v={href:"https://react.docschina.org/docs/context.html",target:"_blank",rel:"noopener noreferrer"},m=a("\u7236\u7EC4\u4EF6\u5411\u540E\u4EE3\u7EC4\u4EF6\u4F20\u9012"),g=s(`<p>\u7236\u7EC4\u4EF6\u5411\u540E\u4EE3\u7EC4\u4EF6\u4F20\u9012\u6570\u636E\u662F\u4E00\u4EF6\u6700\u666E\u901A\u7684\u4E8B\u60C5\uFF0C\u5C31\u50CF\u5168\u5C40\u6570\u636E\u4E00\u6837</p><p>\u4F7F\u7528<code>context</code>\u63D0\u4F9B\u4E86\u7EC4\u4EF6\u4E4B\u95F4\u901A\u8BAF\u7684\u4E00\u79CD\u65B9\u5F0F\uFF0C\u53EF\u4EE5\u5171\u4EAB\u6570\u636E\uFF0C\u5176\u4ED6\u6570\u636E\u90FD\u80FD\u8BFB\u53D6\u5BF9\u5E94\u7684\u6570\u636E</p><p>\u901A\u8FC7\u4F7F\u7528<code>React.createContext</code>\u521B\u5EFA\u4E00\u4E2A<code>context</code></p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> PriceContext <span class="token operator">=</span> React<span class="token punctuation">.</span><span class="token function">createContext</span><span class="token punctuation">(</span><span class="token string">&#39;price&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><code>context</code>\u521B\u5EFA\u6210\u529F\u540E\uFF0C\u5176\u4E0B\u5B58\u5728<code>Provider</code>\u7EC4\u4EF6\u7528\u4E8E\u521B\u5EFA\u6570\u636E\u6E90\uFF0C<code>Consumer</code>\u7EC4\u4EF6\u7528\u4E8E\u63A5\u6536\u6570\u636E\uFF0C\u4F7F\u7528\u5B9E\u4F8B\u5982\u4E0B\uFF1A</p><p><code>Provider</code>\u7EC4\u4EF6\u901A\u8FC7<code>value</code>\u5C5E\u6027\u7528\u4E8E\u7ED9\u540E\u4EE3\u7EC4\u4EF6\u4F20\u9012\u6570\u636E\uFF1A</p><div class="language-jsx ext-jsx line-numbers-mode"><pre class="language-jsx"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">PriceContext.Provider</span></span> <span class="token attr-name">value</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">100</span><span class="token punctuation">}</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">PriceContext.Provider</span></span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u5982\u679C\u60F3\u8981\u83B7\u53D6<code>Provider</code>\u4F20\u9012\u7684\u6570\u636E\uFF0C\u53EF\u4EE5\u901A\u8FC7<code>Consumer</code>\u7EC4\u4EF6\u6216\u8005\u6216\u8005\u4F7F\u7528<code>contextType</code>\u5C5E\u6027\u63A5\u6536\uFF0C\u5BF9\u5E94\u5206\u522B\u5982\u4E0B\uFF1A</p><div class="language-jsx ext-jsx line-numbers-mode"><pre class="language-jsx"><code><span class="token keyword">class</span> <span class="token class-name">MyClass</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>
  <span class="token keyword">static</span> contextType <span class="token operator">=</span> PriceContext
  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> price <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>context
    <span class="token comment">/* \u57FA\u4E8E\u8FD9\u4E2A\u503C\u8FDB\u884C\u6E32\u67D3\u5DE5\u4F5C */</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>Consumer</code>\u7EC4\u4EF6\uFF1A</p><div class="language-jsx ext-jsx line-numbers-mode"><pre class="language-jsx"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">PriceContext.Consumer</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
  </span><span class="token punctuation">{</span><span class="token comment">/*\u8FD9\u91CC\u662F\u4E00\u4E2A\u51FD\u6570*/</span><span class="token punctuation">}</span><span class="token plain-text">
  </span><span class="token punctuation">{</span><span class="token parameter">price</span> <span class="token operator">=&gt;</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">price\uFF1A</span><span class="token punctuation">{</span>price<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">}</span><span class="token plain-text">
</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">PriceContext.Consumer</span></span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u975E\u5173\u7CFB\u7EC4\u4EF6\u4F20\u9012" tabindex="-1"><a class="header-anchor" href="#\u975E\u5173\u7CFB\u7EC4\u4EF6\u4F20\u9012" aria-hidden="true">#</a> \u975E\u5173\u7CFB\u7EC4\u4EF6\u4F20\u9012</h2><p>\u5982\u679C\u7EC4\u4EF6\u4E4B\u95F4\u5173\u7CFB\u7C7B\u578B\u6BD4\u8F83\u590D\u6742\u7684\u60C5\u51B5\uFF0C\u5EFA\u8BAE\u5C06\u6570\u636E\u8FDB\u884C\u4E00\u4E2A\u5168\u5C40\u8D44\u6E90\u7BA1\u7406\uFF0C\u4ECE\u800C\u5B9E\u73B0\u901A\u4FE1\uFF0C\u4F8B\u5982<code>redux</code>\u3002\u5173\u4E8E<code>redux</code>\u7684\u4F7F\u7528\u540E\u7EED\u518D\u8BE6\u7EC6\u4ECB\u7ECD</p><h2 id="\u603B\u7ED3" tabindex="-1"><a class="header-anchor" href="#\u603B\u7ED3" aria-hidden="true">#</a> \u603B\u7ED3</h2><p>\u7531\u4E8E<code>React</code>\u662F\u5355\u5411\u6570\u636E\u6D41\uFF0C\u4E3B\u8981\u601D\u60F3\u662F\u7EC4\u4EF6\u4E0D\u4F1A\u6539\u53D8\u63A5\u6536\u7684\u6570\u636E\uFF0C\u53EA\u4F1A\u76D1\u542C\u6570\u636E\u7684\u53D8\u5316\uFF0C\u5F53\u6570\u636E\u53D1\u751F\u53D8\u5316\u65F6\u5B83\u4EEC\u4F1A\u4F7F\u7528\u63A5\u6536\u5230\u7684\u65B0\u503C\uFF0C\u800C\u4E0D\u662F\u53BB\u4FEE\u6539\u5DF2\u6709\u7684\u503C</p><p>\u56E0\u6B64\uFF0C\u53EF\u4EE5\u770B\u5230\u901A\u4FE1\u8FC7\u7A0B\u4E2D\uFF0C\u6570\u636E\u7684\u5B58\u50A8\u4F4D\u7F6E\u90FD\u662F\u5B58\u653E\u5728\u4E0A\u7EA7\u4F4D\u7F6E\u4E2D</p>`,16);function b(h,x){const t=l("ExternalLinkIcon");return e(),c("div",null,[u,n("h2",k,[r,d,n("a",v,[m,o(t)])]),g])}var f=p(i,[["render",b],["__file","component.html.vue"]]);export{f as default};
