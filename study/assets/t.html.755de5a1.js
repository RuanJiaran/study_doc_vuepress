import{_ as n,o as s,c as a,a as t}from"./app.d2eb7f9c.js";const p={},e=t(`<h2 id="\u6CDB\u578B\u521D\u63A2" tabindex="-1"><a class="header-anchor" href="#\u6CDB\u578B\u521D\u63A2" aria-hidden="true">#</a> \u6CDB\u578B\u521D\u63A2</h2><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token generic-function"><span class="token function">identity</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span>arg<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token constant">T</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> arg<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">// \u7528\u6CD5\u4E00</span>
<span class="token keyword">let</span> output <span class="token operator">=</span> <span class="token generic-function"><span class="token function">identity</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span><span class="token string">&quot;myString&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// \u7528\u6CD5\u4E8C</span>
<span class="token keyword">let</span> output2 <span class="token operator">=</span> <span class="token function">identity</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u7528<code>T</code>\u6307\u5B9A\u7C7B\u578B\u53D8\u91CF\uFF0C\u518D\u7528<code>T</code>\u5F53\u505A\u8FD4\u56DE\u503C\u7C7B\u578B\uFF0C\u4FDD\u8BC1\u4F20\u5165\u6570\u503C\u7C7B\u578B\u5E76\u8FD4\u56DE\u6570\u503C\u7C7B\u578B\u76F8\u540C\u3002</p><p>\u7528\u6CD5\u4E8C\uFF0C\u5229\u7528\u4E86\u7C7B\u578B\u63A8\u8BBA \u2013 \u5373\u7F16\u8BD1\u5668\u4F1A\u6839\u636E\u4F20\u5165\u7684\u53C2\u6570\u81EA\u52A8\u5730\u5E2E\u52A9\u6211\u4EEC\u786E\u5B9AT\u7684\u7C7B\u578B</p><h2 id="\u591A\u4E2A\u6CDB\u578B\u53C2\u6570" tabindex="-1"><a class="header-anchor" href="#\u591A\u4E2A\u6CDB\u578B\u53C2\u6570" aria-hidden="true">#</a> \u591A\u4E2A\u6CDB\u578B\u53C2\u6570</h2><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token generic-function"><span class="token function">getMsg</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token constant">K</span><span class="token punctuation">,</span> <span class="token constant">V</span><span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span>value1<span class="token operator">:</span> <span class="token constant">K</span><span class="token punctuation">,</span> value2<span class="token operator">:</span> <span class="token constant">V</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token constant">K</span><span class="token punctuation">,</span> <span class="token constant">V</span><span class="token punctuation">]</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">[</span>value1<span class="token punctuation">,</span> value2<span class="token punctuation">]</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> arr1 <span class="token operator">=</span> <span class="token generic-function"><span class="token function">getMsg</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token builtin">number</span><span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span><span class="token string">&#39;jack&#39;</span><span class="token punctuation">,</span> <span class="token number">200</span><span class="token punctuation">)</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr1<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&#39;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> arr1<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">toFixed</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> arr2 <span class="token operator">=</span> <span class="token generic-function"><span class="token function">getMsg</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token builtin">number</span><span class="token punctuation">,</span> <span class="token builtin">string</span><span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span><span class="token number">200</span><span class="token punctuation">,</span> <span class="token string">&#39;jack&#39;</span><span class="token punctuation">)</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr2<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">toFixed</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">,</span> arr2<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&#39;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u6CDB\u578B\u63A5\u53E3" tabindex="-1"><a class="header-anchor" href="#\u6CDB\u578B\u63A5\u53E3" aria-hidden="true">#</a> \u6CDB\u578B\u63A5\u53E3</h2><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">IBaseCRUD<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span></span> <span class="token punctuation">{</span>
    data<span class="token operator">:</span> <span class="token builtin">Array</span><span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span>
    <span class="token function-variable function">add</span><span class="token operator">:</span> <span class="token punctuation">(</span>t<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token constant">T</span>
    <span class="token function-variable function">getUserId</span><span class="token operator">:</span> <span class="token punctuation">(</span>id<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token constant">T</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">User</span> <span class="token punctuation">{</span>
    id<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span>     <span class="token comment">// \u53EF\u9009\u5C5E\u6027</span>
    name<span class="token operator">:</span> <span class="token builtin">string</span>
    age<span class="token operator">:</span> <span class="token builtin">number</span>
    <span class="token function">constructor</span><span class="token punctuation">(</span>name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> age<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name
        <span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">=</span> age
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">UserCRUD</span> <span class="token keyword">implements</span> <span class="token class-name">IBaseCRUD<span class="token operator">&lt;</span>User<span class="token operator">&gt;</span></span> <span class="token punctuation">{</span>
    data<span class="token operator">:</span> <span class="token builtin">Array</span><span class="token operator">&lt;</span>User<span class="token operator">&gt;</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>  <span class="token comment">// \u5B58\u653E\u7528\u6237\u4FE1\u606F</span>
    <span class="token comment">// \u6DFB\u52A0\u7528\u6237\u4FE1\u606F</span>
    <span class="token function">add</span><span class="token punctuation">(</span>user<span class="token operator">:</span> User<span class="token punctuation">)</span><span class="token operator">:</span> User <span class="token punctuation">{</span>
        user<span class="token punctuation">.</span>id <span class="token operator">=</span> Date<span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> Math<span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>data<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>user<span class="token punctuation">)</span>
        <span class="token keyword">return</span> user
    <span class="token punctuation">}</span>
    <span class="token comment">// \u901A\u8FC7id\u83B7\u53D6\u7528\u6237\u4FE1\u606F</span>
    <span class="token function">getUserId</span><span class="token punctuation">(</span>id<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> User <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token operator">&lt;</span>User<span class="token operator">&gt;</span><span class="token keyword">this</span><span class="token punctuation">.</span>data<span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span>user <span class="token operator">=&gt;</span> user<span class="token punctuation">.</span>id <span class="token operator">===</span> id<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> userCRUD<span class="token operator">:</span> UserCRUD <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">UserCRUD</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment">// \u6DFB\u52A0\u6570\u636E</span>
userCRUD<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">User</span><span class="token punctuation">(</span><span class="token string">&#39;\u4E1C\u65B9\u4E0D\u8D25&#39;</span><span class="token punctuation">,</span> <span class="token number">200</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> <span class="token punctuation">{</span> id <span class="token punctuation">}</span> <span class="token operator">=</span> userCRUD<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">User</span><span class="token punctuation">(</span><span class="token string">&#39;\u4EE4\u72D0\u51B2&#39;</span><span class="token punctuation">,</span> <span class="token number">30</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
userCRUD<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">User</span><span class="token punctuation">(</span><span class="token string">&#39;\u5CB3\u4E0D\u7FA4&#39;</span><span class="token punctuation">,</span> <span class="token number">60</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>userCRUD<span class="token punctuation">.</span>data<span class="token punctuation">)</span>

<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>userCRUD<span class="token punctuation">.</span><span class="token function">getUserId</span><span class="token punctuation">(</span>id<span class="token operator">!</span><span class="token punctuation">)</span><span class="token punctuation">)</span>  <span class="token comment">// id \u540E\u9762\u8981\u52A0 ! \u53F7\u4E0D\u7136\u7F16\u8BD1\u4F1A\u62A5\u9519</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0A\u9762\u4F8B\u5B50\u4E2D\uFF0C\u6211\u4EEC\u5B9A\u4E49\u4E86\u4E00\u4E2A<code>IBaseCRUD</code>\u7684\u57FA\u7840\u589E\u5220\u6539\u6210\u6CDB\u578B\u63A5\u53E3\uFF0C\u7531\u4E8E\u662F\u6F14\u793A\u53EA\u5B9A\u4E49\u4E86<code>add</code>\u548C<code>getUserId</code>\u65B9\u6CD5\u3002 \u7136\u540E\u5B9A\u4E49\u4E86<code>User</code>\u7C7B\uFF0C\u6700\u597D\u5B9A\u4E49\u4E86<code>UserCRUD</code>\u7C7B\u5B9E\u73B0<code>IBaseCRUD</code>\u63A5\u53E3</p><p>!&gt;\u4E0A\u8FF0\u793A\u4F8B\u4E2D\uFF0C\u9700\u8981\u6CE8\u610F\u7684\u662F<code>userCRUD.getUserId(id!)</code>\u4E2Did\u540E\u9762\u52A0\u4E0A\u4E86<code>!</code>\u65AD\u8A00\uFF0C\u8FD9\u6837\u505A\u7684\u76EE\u7684\u662F\u8BA9\u7F16\u8BD1\u5668\u8DF3\u8FC7<code>id</code>\u7C7B\u578B\u7684\u68C0\u6D4B\u3002 \u56E0\u4E3A<code>getUserId</code>\u65B9\u6CD5\u9700\u8981\u4F20\u4E00\u4E2A<code>number</code>\u7C7B\u578B\u7684\u53C2\u6570\uFF0C\u4F46\u662F<code>id</code>\u662F<code>add</code>\u65B9\u6CD5\u4E2D\u8FD4\u56DE\u7684<code>User</code>\u7C7B\u5B9E\u4F8B\uFF0C<code>User</code>\u7C7B\u4E2D<code>id</code>\u65F6\u53EF\u9009\u5C5E\u6027\uFF0C\u6240\u4EE5<code>id</code>\u7684 \u4E86\u4E0B\u662F<code>number|undefined</code>\u4E0D\u7B26\u5408<code>userCRUD.getUserId()</code>\u65B9\u6CD5\u4E2D\u7684\u7C7B\u578B\u68C0\u6D4B</p><h2 id="\u6CDB\u578B\u7C7B" tabindex="-1"><a class="header-anchor" href="#\u6CDB\u578B\u7C7B" aria-hidden="true">#</a> \u6CDB\u578B\u7C7B</h2><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">class</span> <span class="token class-name">GenericNumber<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span></span> <span class="token punctuation">{</span>
    zeroValue<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">;</span>
    <span class="token function-variable function">add</span><span class="token operator">:</span> <span class="token punctuation">(</span>x<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">,</span> y<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token constant">T</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> myGenericNumber <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">GenericNumber<span class="token operator">&lt;</span><span class="token builtin">number</span><span class="token operator">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
myGenericNumber<span class="token punctuation">.</span>zeroValue <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
myGenericNumber<span class="token punctuation">.</span><span class="token function-variable function">add</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span> y<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token keyword">return</span> x <span class="token operator">+</span> y<span class="token punctuation">;</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>!&gt;\u7C7B\u6709\u4E24\u90E8\u5206\uFF1A\u9759\u6001\u90E8\u5206\u548C\u5B9E\u4F8B\u90E8\u5206\u3002 \u6CDB\u578B\u7C7B\u6307\u7684\u662F\u5B9E\u4F8B\u90E8\u5206\u7684\u7C7B\u578B\uFF0C\u6240\u4EE5\u7C7B\u7684\u9759\u6001\u5C5E\u6027\u4E0D\u80FD\u4F7F\u7528\u8FD9\u4E2A\u6CDB\u578B\u7C7B\u578B\u3002</p><h2 id="\u6CDB\u578B\u7EA6\u675F" tabindex="-1"><a class="header-anchor" href="#\u6CDB\u578B\u7EA6\u675F" aria-hidden="true">#</a> \u6CDB\u578B\u7EA6\u675F</h2><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">ILength</span> <span class="token punctuation">{</span>
    length<span class="token operator">:</span> <span class="token builtin">number</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token generic-function"><span class="token function">getLength</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token constant">T</span> <span class="token keyword">extends</span> ILength<span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span>x<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> x<span class="token punctuation">.</span>length
<span class="token punctuation">}</span>

<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token generic-function"><span class="token function">getLength</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span><span class="token string">&#39;rjr&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token generic-function"><span class="token function">getLength</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token builtin">number</span><span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span><span class="token number">124</span><span class="token punctuation">)</span><span class="token punctuation">)</span>    <span class="token comment">// error</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u521B\u5EFA\u4E00\u4E2A\u5305\u542B<code>.length</code>\u5C5E\u6027\u7684\u63A5\u53E3\uFF0C\u4F7F\u7528\u8FD9\u4E2A\u63A5\u53E3\u548C<code>extends</code>\u5173\u952E\u5B57\u5B9E\u73B0\u7EA6\u675F</p>`,16),o=[e];function c(l,i){return s(),a("div",null,o)}var r=n(p,[["render",c],["__file","t.html.vue"]]);export{r as default};
