import{_ as p,o,c,b as n,d as e,a as t,e as s,r as i}from"./app.ef00ce81.js";const l={},u=t(`<h1 id="\u95ED\u5305" tabindex="-1"><a class="header-anchor" href="#\u95ED\u5305" aria-hidden="true">#</a> \u95ED\u5305</h1><h2 id="\u95ED\u5305\u7684\u5B9A\u4E49" tabindex="-1"><a class="header-anchor" href="#\u95ED\u5305\u7684\u5B9A\u4E49" aria-hidden="true">#</a> \u95ED\u5305\u7684\u5B9A\u4E49</h2><p>\u95ED\u5305\u662F\u6307\u53EF\u4EE5\u8BBF\u95EE\u53E6\u4E00\u4E2A\u51FD\u6570\u4F5C\u7528\u57DF\u4E2D\u53D8\u91CF\u7684\u51FD\u6570\uFF0C\u53EF\u4EE5\u7B80\u5355\u7406\u89E3\u4E3A <code>\u5B9A\u4E49\u5728\u4E00\u4E2A\u51FD\u6570\u5185\u90E8\u7684\u51FD\u6570</code></p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// \u8FD9\u5C31\u662F\u4E00\u4E2A\u95ED\u5305\uFF0C\u53D8\u91CF a \u4FDD\u5B58\u88AB\u4FDD\u5B58\u5728 foo \u51FD\u6570\u5185\uFF0C\u5E76\u4E14 bar \u51FD\u6570\u53EF\u4EE5\u8BBF\u95EE\u53D8\u91CF a</span>
<span class="token keyword">function</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> a <span class="token operator">=</span> <span class="token number">2</span>
  <span class="token keyword">function</span> <span class="token function">bar</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token function">bar</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u95ED\u5305\u7684\u6709\u70B9" tabindex="-1"><a class="header-anchor" href="#\u95ED\u5305\u7684\u6709\u70B9" aria-hidden="true">#</a> \u95ED\u5305\u7684\u6709\u70B9</h2>`,5),d=n("li",null,"\u53EF\u4EE5\u91CD\u590D\u4F7F\u7528\u53D8\u91CF\uFF0C\u5E76\u4E14\u4E0D\u4F1A\u9020\u6210\u53D8\u91CF\u6C61\u67D3",-1),r=s("\u53D8\u91CF\u957F\u671F\u9A7B\u624E\u5728"),k={href:"https://so.csdn.net/so/search?q=%E5%86%85%E5%AD%98&spm=1001.2101.3001.7020",target:"_blank",rel:"noopener noreferrer"},v=s("\u5185\u5B58"),m=s("\u4E2D"),b=t(`<h2 id="\u95ED\u5305\u7684\u5E94\u7528\u573A\u666F" tabindex="-1"><a class="header-anchor" href="#\u95ED\u5305\u7684\u5E94\u7528\u573A\u666F" aria-hidden="true">#</a> \u95ED\u5305\u7684\u5E94\u7528\u573A\u666F</h2><ul><li>\u51FD\u6570\u4F5C\u4E3A\u53C2\u6570\u88AB\u4F20\u9012</li><li>\u51FD\u6570\u4F5C\u4E3A\u8FD4\u56DE\u503C\u88AB\u8FD4\u56DE</li><li>\u9690\u85CF\u6570\u636E</li><li>\u51FD\u6570\u9632\u6296\u3001\u51FD\u6570\u8282\u6D41</li><li>\u5355\u4F8B\u6A21\u5F0F</li></ul><h2 id="\u95ED\u5305\u7684\u4E24\u79CD\u8868\u73B0\u5F62\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u95ED\u5305\u7684\u4E24\u79CD\u8868\u73B0\u5F62\u5F0F" aria-hidden="true">#</a> \u95ED\u5305\u7684\u4E24\u79CD\u8868\u73B0\u5F62\u5F0F</h2><ul><li><p>\u51FD\u6570\u4F5C\u4E3A\u8FD4\u56DE\u503C\u88AB\u8FD4\u56DE</p></li><li><p>\u51FD\u6570\u4F5C\u4E3A\u53C2\u6570\u88AB\u4F20\u9012</p></li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// \u51FD\u6570\u4F5C\u4E3A\u8FD4\u56DE\u503C\u88AB\u8FD4\u56DE</span>
<span class="token keyword">function</span> <span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> a <span class="token operator">=</span> <span class="token number">100</span>
  <span class="token keyword">return</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">const</span> fn <span class="token operator">=</span> <span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> a <span class="token operator">=</span> <span class="token number">200</span>
<span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// 100</span>

<span class="token comment">// \u51FD\u6570\u4F5C\u4E3A\u53C2\u6570\u88AB\u4F20\u9012</span>
<span class="token keyword">function</span> <span class="token function">print</span><span class="token punctuation">(</span><span class="token parameter">fn</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> a <span class="token operator">=</span> <span class="token number">200</span>
  <span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token keyword">const</span> a <span class="token operator">=</span> <span class="token number">100</span>
<span class="token keyword">function</span> <span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token function">print</span><span class="token punctuation">(</span>fn<span class="token punctuation">)</span> <span class="token comment">// 100</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>!&gt;\u51FD\u6570\u4E2D\u7684\u81EA\u7531\u53D8\u91CF\uFF0C\u53D6\u51B3\u4E8E\u51FD\u6570\u5B9A\u4E49\u7684\u5730\u65B9\uFF0C\u8DDF\u6267\u884C\u7684\u5730\u65B9\u6CA1\u5173\u7CFB</p><h2 id="\u7528\u4E2A\u7ECF\u5178\u6848\u4F8B\u7406\u89E3\u4E0B\u95ED\u5305" tabindex="-1"><a class="header-anchor" href="#\u7528\u4E2A\u7ECF\u5178\u6848\u4F8B\u7406\u89E3\u4E0B\u95ED\u5305" aria-hidden="true">#</a> \u7528\u4E2A\u7ECF\u5178\u6848\u4F8B\u7406\u89E3\u4E0B\u95ED\u5305</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> num <span class="token operator">=</span> <span class="token number">3</span>
  <span class="token keyword">return</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> n <span class="token operator">=</span> <span class="token number">0</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token operator">++</span>n<span class="token punctuation">)</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token operator">++</span>num<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">const</span> fn1 <span class="token operator">=</span> <span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token function">fn1</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// 1 4</span>
<span class="token function">fn1</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// 1 5</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E00\u822C\u60C5\u51B5\u4E0B\uFF0C\u5728\u51FD\u6570 <code>fn</code> \u6267\u884C\u5B8C\u540E\uFF0C\u5C31\u5E94\u8BE5\u8FDE\u540C\u5B83\u91CC\u9762\u7684\u53D8\u91CF\u4E00\u540C\u88AB\u9500\u6BC1\u3002\u4F46\u662F\u5728\u8FD9\u4E2A\u4F8B\u5B50\u4E2D\uFF0C\u533F\u540D\u51FD\u6570\u4F5C\u4E3A <code>fn</code> \u7684\u8FD4\u56DE\u503C\u88AB\u8D4B\u503C\u7ED9\u4E86 <code>fn1</code> \uFF0C\u8FD9\u65F6\u5019\u76F8\u5F53\u4E8E<code>fn1 = function(){var n = 0 \u2026 }</code>\uFF0C\u5E76\u4E14\u533F\u540D\u51FD\u6570\u5185\u90E8\u5F15\u7528\u7740 <code>fn</code> \u91CC\u7684\u53D8\u91CF <code>num</code>\uFF0C\u6240\u4EE5\u53D8\u91CF <code>num</code> \u65E0\u6CD5\u88AB\u9500\u6BC1\uFF0C\u800C\u53D8\u91CF <code>n</code> \u662F\u6BCF\u6B21\u88AB\u8C03\u7528\u65F6\u65B0\u521B\u5EFA\u7684\uFF0C\u6240\u4EE5\u6BCF\u6B21 <code>fn1</code> \u6267\u884C\u5B8C\u540E\u5B83\u5C31\u628A\u5C5E\u4E8E\u81EA\u5DF1\u7684\u53D8\u91CF\u8FDE\u540C\u81EA\u5DF1\u4E00\u8D77\u9500\u6BC1\uFF0C\u4E8E\u662F\u4E4E\u6700\u540E\u5C31\u5269\u4E0B\u5B64\u96F6\u96F6\u7684 <code>num</code>\uFF0C\u4E8E\u662F\u8FD9\u91CC\u5C31\u4EA7\u751F\u4E86\u5185\u5B58\u6D88\u8017\u7684\u95EE\u9898</p><h2 id="\u95ED\u5305\u6709\u4EC0\u4E48\u7528\u5904" tabindex="-1"><a class="header-anchor" href="#\u95ED\u5305\u6709\u4EC0\u4E48\u7528\u5904" aria-hidden="true">#</a> \u95ED\u5305\u6709\u4EC0\u4E48\u7528\u5904</h2><p>\u9996\u5148\u6765\u770B\u4E00\u4E2A\u4F8B\u5B50\uFF0C\u6211\u4EEC\u6765\u5B9E\u73B0\u4E00\u4E2A\u8BA1\u6570\u5668</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">let</span> counter <span class="token operator">=</span> <span class="token number">0</span>

<span class="token keyword">function</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>counter <span class="token operator">+=</span> <span class="token number">1</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token function">add</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token function">add</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token function">add</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// \u8BA1\u6570\u5668\u73B0\u5728\u4E3A 3</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>counter<span class="token punctuation">)</span> <span class="token comment">// 3</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u73B0\u5728\u6211\u4EEC\u5DF2\u7ECF\u8FBE\u5230\u4E86\u76EE\u7684\uFF0C\u53EF\u662F\u95EE\u9898\u6765\u4E86\uFF0C\u4EE3\u7801\u4E2D\u7684\u4EFB\u4F55\u4E00\u4E2A\u51FD\u6570\u90FD\u53EF\u4EE5\u968F\u610F\u6539\u53D8 counter \u7684\u503C\uFF0C\u6240\u4EE5\u8FD9\u4E2A\u8BA1\u6570\u5668\u5E76\u4E0D\u5B8C\u7F8E\u3002\u90A3\u6211\u4EEC\u628A counter \u653E\u5728 add \u51FD\u6570\u91CC\u9762\u4E0D\u5C31\u597D\u4E86\u4E48\uFF1F</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> counter <span class="token operator">=</span> <span class="token number">0</span>
  counter<span class="token operator">++</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>counter<span class="token punctuation">)</span>
  <span class="token keyword">return</span> counter
<span class="token punctuation">}</span>
<span class="token function">add</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token function">add</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token function">add</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// \u672C\u60F3\u8F93\u51FA 3, \u4F46\u8F93\u51FA\u7684\u662F 1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6240\u4EE5\u8FD9\u6837\u505A\u7684\u8BDD\uFF0C\u6BCF\u6B21\u8C03\u7528 add \u51FD\u6570\uFF0Ccounter \u7684\u503C\u90FD\u8981\u88AB\u521D\u59CB\u5316\u4E3A 0\uFF0C\u8FD8\u662F\u8FBE\u4E0D\u5230\u6211\u4EEC\u7684\u76EE\u7684\u3002</p><h4 id="\u5982\u4F55\u4F7F\u7528\u95ED\u5305" tabindex="-1"><a class="header-anchor" href="#\u5982\u4F55\u4F7F\u7528\u95ED\u5305" aria-hidden="true">#</a> \u5982\u4F55\u4F7F\u7528\u95ED\u5305</h4><p>\u8FD9\u65F6\u5019\u6211\u4EEC\u5C31\u53EF\u4EE5\u7528\u95ED\u5305\u6765\u89E3\u51B3\u8FD9\u4E2A\u95EE\u9898\u4E86\uFF0C\u5148\u770B\u4EE3\u7801\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> add <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> counter <span class="token operator">=</span> <span class="token number">0</span>
  <span class="token keyword">return</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    counter<span class="token operator">++</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>counter<span class="token punctuation">)</span>
    <span class="token keyword">return</span> counter
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token function">add</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token function">add</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token function">add</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// \u8BA1\u6570\u5668\u73B0\u5728\u4E3A 3</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8FD9\u65F6\u5019\u6211\u4EEC\u5B8C\u7F8E\u5B9E\u73B0\u4E86\u8BA1\u6570\u5668\u3002\u8FD9\u6BB5\u975E\u5E38\u7CBE\u7B80\uFF0C\u53EF\u4EE5\u62C6\u5206\u6210\u5982\u4E0B\u7B49\u4EF7\u4EE3\u7801\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">outAdd</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> counter <span class="token operator">=</span> <span class="token number">0</span>
  <span class="token keyword">function</span> <span class="token function">innerAdd</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    counter<span class="token operator">++</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>counter<span class="token punctuation">)</span>
    <span class="token keyword">return</span> counter
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> innerAdd
<span class="token punctuation">}</span>

<span class="token keyword">const</span> add <span class="token operator">=</span> <span class="token function">outAdd</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token function">add</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token function">add</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token function">add</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// \u8BA1\u6570\u5668\u73B0\u5728\u4E3A 3</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8FD9\u65F6\u5019\u7684 add \u5C31\u5F62\u6210\u4E86\u4E00\u4E2A\u95ED\u5305\u3002\u4E00\u4E2A\u95ED\u5305\u7531\u4E24\u90E8\u5206\u7EC4\u6210\uFF0C\u51FD\u6570\u548C\u521B\u5EFA\u8BE5\u51FD\u6570\u7684\u73AF\u5883\u3002\u73AF\u5883\u662F\u7531\u73AF\u5883\u4E2D\u7684\u5C40\u90E8\u53D8\u91CF\u7EC4\u6210\u7684\u3002\u5BF9\u4E8E\u95ED\u5305 add \u6765\u8BF4\uFF0C\u5B83\u7531\u51FD\u6570 innerAdd \u548C\u53D8\u91CF counter \u7EC4\u6210\uFF0C\u6240\u4EE5\u8FD9\u65F6\u5019 add \u662F\u53EF\u4EE5\u8BBF\u95EE\u53D8\u91CF counter \u7684\u3002</p><h2 id="\u4F7F\u7528\u95ED\u5305\u5E94\u6CE8\u610F\u7684\u95EE\u9898" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528\u95ED\u5305\u5E94\u6CE8\u610F\u7684\u95EE\u9898" aria-hidden="true">#</a> \u4F7F\u7528\u95ED\u5305\u5E94\u6CE8\u610F\u7684\u95EE\u9898</h2><p>\u7531\u4E8E\u95ED\u5305\u4F1A\u643A\u5E26\u5305\u542B\u5B83\u7684\u51FD\u6570\u7684\u4F5C\u7528\u57DF\uFF0C\u56E0\u6B64\u4F1A\u6BD4\u5176\u4ED6\u51FD\u6570\u5360\u7528\u66F4\u591A\u7684\u5185\u5B58\u3002\u56E0\u6B64\u53EF\u4EE5\u624B\u52A8\u89E3\u9664\u5BF9\u533F\u540D\u51FD\u6570\u7684\u5F15\u7528\uFF0C\u4EE5\u4FBF\u91CA\u653E\u5185\u5B58\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> num <span class="token operator">=</span> <span class="token number">0</span>

  <span class="token keyword">const</span> <span class="token function-variable function">add</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    num<span class="token operator">++</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">num</span><span class="token operator">:</span> num<span class="token punctuation">,</span>
      <span class="token literal-property property">add</span><span class="token operator">:</span> add<span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">//retFn \u5C31\u662F\u521B\u5EFA\u4E86\u4E00\u4E2A\u533F\u540D\u51FD\u6570</span>
<span class="token keyword">let</span> retFn <span class="token operator">=</span> <span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment">//\u8C03\u7528\u51FD\u6570</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">retFn</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token function">retFn</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">retFn</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token comment">//\u89E3\u9664\u5BF9\u533F\u540D\u51FD\u6570\u7684\u5F15\u7528\uFF0C\u4EE5\u4FBF\u91CA\u653E\u5185\u5B58</span>
retFn <span class="token operator">=</span> <span class="token keyword">null</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u95ED\u5305\u7684\u51E0\u4E2A\u793A\u4F8B" tabindex="-1"><a class="header-anchor" href="#\u95ED\u5305\u7684\u51E0\u4E2A\u793A\u4F8B" aria-hidden="true">#</a> \u95ED\u5305\u7684\u51E0\u4E2A\u793A\u4F8B</h2><h6 id="\u793A\u4F8B-1" tabindex="-1"><a class="header-anchor" href="#\u793A\u4F8B-1" aria-hidden="true">#</a> \u793A\u4F8B 1</h6><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">5</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token punctuation">;</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">i</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span> i <span class="token operator">*</span> <span class="token number">1000</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token comment">// 0 1 2 3 4</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h6 id="\u793A\u4F8B-2" tabindex="-1"><a class="header-anchor" href="#\u793A\u4F8B-2" aria-hidden="true">#</a> \u793A\u4F8B 2</h6><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> num <span class="token operator">=</span> <span class="token number">15</span>
<span class="token keyword">const</span> <span class="token function-variable function">fn1</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">x</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>x <span class="token operator">&gt;</span> num<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">void</span> <span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">fn</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> num <span class="token operator">=</span> <span class="token number">100</span>
  <span class="token function">fn</span><span class="token punctuation">(</span><span class="token number">30</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span>fn1<span class="token punctuation">)</span>
<span class="token comment">// 30</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h6 id="\u793A\u4F8B-3" tabindex="-1"><a class="header-anchor" href="#\u793A\u4F8B-3" aria-hidden="true">#</a> \u793A\u4F8B 3</h6><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> name <span class="token operator">=</span> <span class="token string">&#39;The Window&#39;</span>

<span class="token keyword">const</span> object <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;My Object&#39;</span><span class="token punctuation">,</span>
  <span class="token function-variable function">getNameFunc</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>name
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

<span class="token function">alert</span><span class="token punctuation">(</span>object<span class="token punctuation">.</span><span class="token function">getNameFunc</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// The Window</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u51FD\u6570\u4E2D\u7684\u81EA\u7531\u53D8\u91CF\uFF0C\u53D6\u51B3\u4E8E\u51FD\u6570\u5B9A\u4E49\u7684\u5730\u65B9\uFF0C\u8DDF\u6267\u884C\u7684\u5730\u65B9\u6CA1\u5173\u7CFB\u3002\u533F\u540D\u51FD\u6570\u6CA1\u6709\u76F4\u63A5\u8C03\u7528\u8005 this \u6307\u5411 window\uFF0C\u4F46\u662F\u5982\u679C\u662F\u5728\u4E25\u683C\u6A21\u5F0F\u4E0B this \u4E3A undefined\uFF0C\u4F1A\u62A5\u9519 <code>Uncaught TypeError: Cannot read property &#39;name&#39; of undefined</code></p><h6 id="\u793A\u4F8B-4" tabindex="-1"><a class="header-anchor" href="#\u793A\u4F8B-4" aria-hidden="true">#</a> \u793A\u4F8B 4</h6><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> name <span class="token operator">=</span> <span class="token string">&#39;The Window&#39;</span>

<span class="token keyword">const</span> object <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;My Object&#39;</span><span class="token punctuation">,</span>
  <span class="token function-variable function">getNameFunc</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> that <span class="token operator">=</span> <span class="token keyword">this</span>
    <span class="token keyword">return</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> that<span class="token punctuation">.</span>name
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

<span class="token function">alert</span><span class="token punctuation">(</span>object<span class="token punctuation">.</span><span class="token function">getNameFunc</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// My Object</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u95ED\u5305\u597D\u6587" tabindex="-1"><a class="header-anchor" href="#\u95ED\u5305\u597D\u6587" aria-hidden="true">#</a> \u95ED\u5305\u597D\u6587</h2>`,35),f={href:"https://zhuanlan.zhihu.com/p/22486908",target:"_blank",rel:"noopener noreferrer"},h=s("\u6DF1\u5165\u7406\u89E3\u95ED\u5305"),y={href:"https://m.php.cn/article/408137.html",target:"_blank",rel:"noopener noreferrer"},w=s("\u95ED\u5305\u7684\u5B9A\u4E49");function g(j,_){const a=i("ExternalLinkIcon");return o(),c("div",null,[u,n("ul",null,[d,n("li",null,[r,n("a",k,[v,e(a)]),m])]),b,n("p",null,[n("a",f,[h,e(a)])]),n("p",null,[n("a",y,[w,e(a)])])])}var F=p(l,[["render",g],["__file","closure.html.vue"]]);export{F as default};
