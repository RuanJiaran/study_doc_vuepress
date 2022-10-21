import{_ as n,o as s,c as a,a as t}from"./app.ef00ce81.js";const p={},e=t(`<h1 id="\u5168\u5C40\u7EDF\u4E00\u8FD4\u56DE" tabindex="-1"><a class="header-anchor" href="#\u5168\u5C40\u7EDF\u4E00\u8FD4\u56DE" aria-hidden="true">#</a> \u5168\u5C40\u7EDF\u4E00\u8FD4\u56DE</h1><h2 id="\u524D\u8A00" tabindex="-1"><a class="header-anchor" href="#\u524D\u8A00" aria-hidden="true">#</a> \u524D\u8A00</h2><p>\u6211\u4EEC\u5728\u5199\u63A5\u53E3\u7684\u65F6\u5019\u4E00\u822C\u90FD\u4F1A\u8BBE\u7F6E\u4E00\u4E2A\u5168\u5C40\u7EDF\u4E00\u7684\u8FD4\u56DE\u683C\u5F0F</p><h2 id="\u521B\u5EFA\u62E6\u622A\u5668" tabindex="-1"><a class="header-anchor" href="#\u521B\u5EFA\u62E6\u622A\u5668" aria-hidden="true">#</a> \u521B\u5EFA\u62E6\u622A\u5668</h2><ol><li>\u521B\u5EFA\u4E00\u4E2A\u62E6\u622A\u5668 src/interceptor/transform.interceptor.ts</li></ol><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> Injectable<span class="token punctuation">,</span> NestInterceptor<span class="token punctuation">,</span> ExecutionContext<span class="token punctuation">,</span> CallHandler <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@nestjs/common&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Observable <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;rxjs&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> map <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;rxjs/operators&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">interface</span> <span class="token class-name">Response<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span></span> <span class="token punctuation">{</span>
  data<span class="token operator">:</span> <span class="token constant">T</span>
<span class="token punctuation">}</span>

<span class="token decorator"><span class="token at operator">@</span><span class="token function">Injectable</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">TransformInterceptor<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span></span> <span class="token keyword">implements</span> <span class="token class-name">NestInterceptor<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token punctuation">,</span> Response<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;&gt;</span></span> <span class="token punctuation">{</span>
  <span class="token function">intercept</span><span class="token punctuation">(</span>context<span class="token operator">:</span> ExecutionContext<span class="token punctuation">,</span> next<span class="token operator">:</span> CallHandler<span class="token punctuation">)</span><span class="token operator">:</span> Observable<span class="token operator">&lt;</span>Response<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> next<span class="token punctuation">.</span><span class="token function">handle</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">pipe</span><span class="token punctuation">(</span>
      <span class="token function">map</span><span class="token punctuation">(</span>data <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">{</span>
          status<span class="token operator">:</span> <span class="token string">&#39;success&#39;</span><span class="token punctuation">,</span>
          message<span class="token operator">:</span> <span class="token string">&#39;\u8BF7\u6C42\u6210\u529F&#39;</span><span class="token punctuation">,</span>
          data<span class="token punctuation">,</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>\u5168\u5C40\u6CE8\u518C main.ts</li></ol><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> NestFactory <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@nestjs/core&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> AppModule <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./app.module&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> TransformInterceptor <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./interceptor/transform.interceptor&#39;</span>

<span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">bootstrap</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token keyword">await</span> NestFactory<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span>AppModule<span class="token punctuation">)</span>

  app<span class="token punctuation">.</span><span class="token function">useGlobalInterceptors</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">TransformInterceptor</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">//\u5168\u5C40\u54CD\u5E94\u62E6\u622A\u5668</span>

  <span class="token keyword">await</span> app<span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span><span class="token number">5000</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token function">bootstrap</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8),o=[e];function c(l,i){return s(),a("div",null,o)}var u=n(p,[["render",c],["__file","response.html.vue"]]);export{u as default};
