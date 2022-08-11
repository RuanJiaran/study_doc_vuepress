import{_ as n,o as s,c as a,a as p}from"./app.08a5ae43.js";const t={},e=p(`<h1 id="bind-call-apply" tabindex="-1"><a class="header-anchor" href="#bind-call-apply" aria-hidden="true">#</a> bind/call/apply</h1><h2 id="\u4EC0\u4E48\u65F6\u5019\u7528" tabindex="-1"><a class="header-anchor" href="#\u4EC0\u4E48\u65F6\u5019\u7528" aria-hidden="true">#</a> \u4EC0\u4E48\u65F6\u5019\u7528</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> a <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token function-variable function">b</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>c<span class="token punctuation">)</span> <span class="token comment">//hello</span>
    <span class="token keyword">var</span> <span class="token function-variable function">func</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>c<span class="token punctuation">)</span> <span class="token comment">//undefined</span>
    <span class="token punctuation">}</span>
    <span class="token function">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">c</span><span class="token operator">:</span> <span class="token string">&#39;hello&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
a<span class="token punctuation">.</span><span class="token function">b</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5927\u5BB6\u53EF\u4EE5\u6253\u5370\u770B\u4E0B\uFF0C\u8FD9\u4E2A\u5C31\u662F\u56E0\u4E3A<strong>fun()\u8FD9\u4E2A\u51FD\u6570\u6267\u884C</strong>\u7684\u65F6\u5019\u4ED6\u7684\u51FD\u6570\u4E0A\u4E0B\u6587\u4E3A window\uFF0C\u800C a.b()\u7684\u8FD9\u4E2A\u51FD\u6570\u7684\u6267\u884C\u7684\u65F6\u5019\u51FD\u6570\u4E0A\u4E0B\u6587 this \u4E3A a \u5BF9\u8C61\u662F\u4EC0\u4E48\u610F\u601D\u5462\uFF1F</p><p>\u8FD9\u91CC\u6709\u5173\u4E8E this \u6307\u5411\u7684\u95EE\u9898\u7684\u89E3\u6790\u90A3\u4E48\u95EE\u9898\u6765\u4E86\u5F53\u6211\u4EEC\u5E0C\u671B func() \u4ED6\u7684\u8F93\u51FA\u7684\u503C\u5C31\u662F\u4E3A hello \u600E\u4E48\u529E</p><p>\u65B9\u6CD5\u4E00\uFF1A\u5E38\u7528\u65B9\u6CD5</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> a <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token function-variable function">b</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> _this <span class="token operator">=</span> <span class="token keyword">this</span> <span class="token comment">// \u901A\u8FC7\u8D4B\u503C\u7684\u65B9\u5F0F\u5C06this\u8D4B\u503C\u7ED9that</span>
    <span class="token keyword">var</span> <span class="token function-variable function">func</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>_this<span class="token punctuation">.</span>c<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token function">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">c</span><span class="token operator">:</span> <span class="token string">&#39;hello&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
a<span class="token punctuation">.</span><span class="token function">b</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// hello</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">.</span>c<span class="token punctuation">)</span> <span class="token comment">// hello</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u65B9\u6CD5\u4E8C\uFF1A\u7ED1\u5B9A this \u7684\u503C\u53D1\u751F\u6539\u53D8</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// \u4F7F\u7528bind\u65B9\u6CD5\u4E00</span>
<span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token function-variable function">b</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> <span class="token function-variable function">func</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>c<span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span>
    <span class="token function">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">c</span><span class="token operator">:</span> <span class="token string">&#39;hello&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
a<span class="token punctuation">.</span><span class="token function">b</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// hello</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">.</span>c<span class="token punctuation">)</span> <span class="token comment">// hello</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u5176\u5B83\u793A\u4F8B" tabindex="-1"><a class="header-anchor" href="#\u5176\u5B83\u793A\u4F8B" aria-hidden="true">#</a> \u5176\u5B83\u793A\u4F8B</h2><h5 id="\u793A\u4F8B-1" tabindex="-1"><a class="header-anchor" href="#\u793A\u4F8B-1" aria-hidden="true">#</a> \u793A\u4F8B 1</h5><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> name <span class="token operator">=</span> <span class="token string">&#39;\u5C0F\u738B&#39;</span>
<span class="token keyword">var</span> age <span class="token operator">=</span> <span class="token number">17</span>
<span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;\u5C0F\u5F20&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">objAge</span><span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>age<span class="token punctuation">,</span>
  <span class="token function-variable function">myFun</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">+</span> <span class="token string">&#39;\u5E74\u9F84&#39;</span> <span class="token operator">+</span> <span class="token keyword">this</span><span class="token punctuation">.</span>age<span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

obj<span class="token punctuation">.</span>objAge <span class="token comment">// 17</span>
obj<span class="token punctuation">.</span><span class="token function">myFun</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// \u5C0F\u5F20\u5E74\u9F84undefined</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h6 id="\u793A\u4F8B-2" tabindex="-1"><a class="header-anchor" href="#\u793A\u4F8B-2" aria-hidden="true">#</a> \u793A\u4F8B 2</h6><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> fav <span class="token operator">=</span> <span class="token string">&#39;\u76F2\u50E7&#39;</span>
<span class="token keyword">function</span> <span class="token function">show</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>fav<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token function">show</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// \u76F2\u50E7</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6BD4\u8F83\u4E00\u4E0B\u8FD9\u4E24\u8005 <code>this</code> \u7684\u5DEE\u522B\uFF0C\u7B2C\u4E00\u4E2A\u6253\u5370\u91CC\u9762\u7684 <code>this</code> \u6307\u5411 <code>obj</code>\uFF0C\u7B2C\u4E8C\u4E2A\u5168\u5C40\u58F0\u660E\u7684 <code>show()</code> \u51FD\u6570 <code>this</code> \u662F <code>window</code></p><h2 id="call-apply-bind-\u91CD\u5B9A\u4E49-this-\u5BF9\u8C61" tabindex="-1"><a class="header-anchor" href="#call-apply-bind-\u91CD\u5B9A\u4E49-this-\u5BF9\u8C61" aria-hidden="true">#</a> call/apply/bind \u91CD\u5B9A\u4E49 this \u5BF9\u8C61</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> name <span class="token operator">=</span> <span class="token string">&#39;\u5C0F\u738B&#39;</span>
<span class="token keyword">var</span> age <span class="token operator">=</span> <span class="token number">17</span>
<span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;\u5C0F\u5F20&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">objAge</span><span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>age<span class="token punctuation">,</span>
  <span class="token function-variable function">myFun</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">+</span> <span class="token string">&#39;\u5E74\u9F84&#39;</span> <span class="token operator">+</span> <span class="token keyword">this</span><span class="token punctuation">.</span>age<span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
<span class="token keyword">const</span> db <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;db&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">88</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

obj<span class="token punctuation">.</span><span class="token function">myFun</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>db<span class="token punctuation">)</span> <span class="token comment">//db\u5E74\u9F8488</span>
obj<span class="token punctuation">.</span><span class="token function">myFun</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span>db<span class="token punctuation">)</span> <span class="token comment">//db\u5E74\u9F8488</span>
obj<span class="token punctuation">.</span><span class="token function">myFun</span><span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span>db<span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">//db\u5E74\u9F8488</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4EE5\u4E0A\u9664\u4E86 <code>bind</code> \u65B9\u6CD5\u540E\u9762\u591A\u4E86\u4E2A <code>()</code> \u5916 \uFF0C\u7ED3\u679C\u8FD4\u56DE\u90FD\u4E00\u81F4\uFF01\u7531\u6B64\u5F97\u51FA\u7ED3\u8BBA\uFF0C<code>bind</code> \u8FD4\u56DE\u7684\u662F\u4E00\u4E2A\u65B0\u7684\u51FD\u6570\uFF0C\u4F60\u5FC5\u987B\u8C03\u7528\u5B83\u624D\u4F1A\u88AB\u6267\u884C\u3002</p><h2 id="call-bind-apply-\u4F20\u53C2\u5BF9\u6BD4" tabindex="-1"><a class="header-anchor" href="#call-bind-apply-\u4F20\u53C2\u5BF9\u6BD4" aria-hidden="true">#</a> call/bind/apply \u4F20\u53C2\u5BF9\u6BD4</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> name <span class="token operator">=</span> <span class="token string">&#39;\u5C0F\u738B&#39;</span>
<span class="token keyword">var</span> age <span class="token operator">=</span> <span class="token number">17</span>
<span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;\u5C0F\u5F20&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">objAge</span><span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>age<span class="token punctuation">,</span>
  <span class="token function-variable function">myFun</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">fm<span class="token punctuation">,</span> t</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">+</span> <span class="token string">&#39;\u5E74\u9F84&#39;</span> <span class="token operator">+</span> <span class="token keyword">this</span><span class="token punctuation">.</span>age<span class="token punctuation">,</span> <span class="token string">&#39;\u6765\u81EA&#39;</span> <span class="token operator">+</span> fm <span class="token operator">+</span> <span class="token string">&#39;\u53BB\u5F80&#39;</span> <span class="token operator">+</span> t<span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
<span class="token keyword">const</span> db <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;db&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">88</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

obj<span class="token punctuation">.</span><span class="token function">myFun</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>db<span class="token punctuation">,</span> <span class="token string">&#39;\u6B66\u6C49&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;\u6DF1\u5733&#39;</span><span class="token punctuation">)</span> <span class="token comment">//db\u5E74\u9F8488 \u6765\u81EA\u6B66\u6C49\u53BB\u5F80\u6DF1\u5733</span>
obj<span class="token punctuation">.</span><span class="token function">myFun</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span>db<span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">&#39;\u6B66\u6C49&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;\u6DF1\u5733&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token comment">//db\u5E74\u9F8488 \u6765\u81EA\u6B66\u6C49\u53BB\u5F80\u6DF1\u5733</span>
obj<span class="token punctuation">.</span><span class="token function">myFun</span><span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span>db<span class="token punctuation">,</span> <span class="token string">&#39;\u6B66\u6C49&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;\u6DF1\u5733&#39;</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">//db\u5E74\u9F8488 \u6765\u81EA\u6B66\u6C49\u53BB\u5F80\u6DF1\u5733</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4ECE\u4E0A\u9762\u7ED3\u679C\u53EF\u4EE5\u770B\u51FA:</p><ul><li><p><code>call</code> \u3001<code>bind</code> \u3001 <code>apply</code> \u8FD9\u4E09\u4E2A\u51FD\u6570\u7684\u7B2C\u4E00\u4E2A\u53C2\u6570\u90FD\u662F this \u7684\u6307\u5411\u5BF9\u8C61\uFF0C\u7B2C\u4E8C\u4E2A\u53C2\u6570\u5DEE\u522B\u5C31\u6765\u4E86</p></li><li><p><code>call</code> \u7684\u53C2\u6570\u662F\u76F4\u63A5\u653E\u8FDB\u53BB\u7684\uFF0C\u7B2C\u4E8C\u7B2C\u4E09\u7B2C n \u4E2A\u53C2\u6570\u5168\u90FD\u7528\u9017\u53F7\u5206\u9694\uFF0C\u76F4\u63A5\u653E\u5230\u540E\u9762 <code>obj.myFun.call(db,&#39;\u6210\u90FD&#39;, ... ,&#39;string&#39; )</code></p></li><li><p><code>apply</code> \u7684\u6240\u6709\u53C2\u6570\u90FD\u5FC5\u987B\u653E\u5728\u4E00\u4E2A\u6570\u7EC4\u91CC\u9762\u4F20\u8FDB\u53BB <code>obj.myFun.apply(db,[&#39;\u6210\u90FD&#39;, ..., &#39;string&#39; ])</code></p></li><li><p><code>bind</code> \u9664\u4E86\u8FD4\u56DE\u662F\u51FD\u6570\u4EE5\u5916\uFF0C\u5B83 \u7684\u53C2\u6570\u548C <code>call</code> \u4E00\u6837</p></li></ul><p>\u5F53\u7136\uFF0C\u4E09\u8005\u7684\u53C2\u6570\u4E0D\u9650\u5B9A\u662F string \u7C7B\u578B\uFF0C\u5141\u8BB8\u662F\u5404\u79CD\u7C7B\u578B\uFF0C\u5305\u62EC\u51FD\u6570 \u3001 object \u7B49\u7B49\uFF01</p>`,23),o=[e];function c(l,i){return s(),a("div",null,o)}var r=n(t,[["render",c],["__file","bind.html.vue"]]);export{r as default};
