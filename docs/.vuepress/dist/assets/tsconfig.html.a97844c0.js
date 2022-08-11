import{_ as s,o as n,c as a,a as t}from"./app.08a5ae43.js";const p={},o=t(`<p>\u4F7F\u7528\u547D\u4EE4\u751F\u6210\u914D\u7F6E\u6587\u4EF6</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>tsc -init
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u751F\u6210\u7684 <code>tsconfig.json</code> \u914D\u7F6E\u6587\u4EF6\u5982\u4E0B</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token punctuation">{</span>
  <span class="token comment">// \u7F16\u8BD1\u5668\u9009\u9879</span>
    <span class="token string-property property">&quot;compilerOptions&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  
      <span class="token comment">/* \u57FA\u672C\u9009\u9879 */</span>
     
      <span class="token string-property property">&quot;target&quot;</span><span class="token operator">:</span> <span class="token string">&quot;es5&quot;</span><span class="token punctuation">,</span>                       <span class="token comment">// \u6307\u5B9A ECMAScript \u76EE\u6807\u7248\u672C: &#39;ES3&#39; (default), &#39;ES5&#39;, &#39;ES6&#39;,&#39;ES2015&#39;, &#39;ES2016&#39;, &#39;ES2017&#39;, or &#39;ESNEXT&#39;</span>
<span class="token comment">//      \u6CE8\u610F\uFF1Atarget\u5C06ts\u8F6C\u4E3A\u6700\u7EC8target js\u7248\u672C\u662F\u4E0D\u5168\u7684\uFF0C\u6709\u4E9B\u65E0\u6CD5\u8F6C\u6362\uFF0C\u65E0\u6CD5\u505A\u5230\u5B8C\u5168\u517C\u5BB9</span>
      <span class="token comment">// \u4F8B\u5982 \u4EE3\u7406\u53CD\u5C04\u7B49\u529F\u80FD\uFF0C\u6240\u4EE5\u8003\u8651\u517C\u5BB9\u6027\u5FC5\u987B\u8FD8\u8981\u4F7F\u7528 babel\u8FDB\u884C\u517C\u5BB9\u6027\u8F6C\u6362</span>

      <span class="token string-property property">&quot;module&quot;</span><span class="token operator">:</span> <span class="token string">&quot;commonjs&quot;</span><span class="token punctuation">,</span>                  <span class="token comment">// \u6307\u5B9A\u4F7F\u7528\u6A21\u5757: &#39;commonjs&#39;, &#39;amd&#39;, &#39;system&#39;, &#39;umd&#39;,&#39;es2015&#39;</span>
      <span class="token string-property property">&quot;lib&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>                             <span class="token comment">// \u6307\u5B9A\u8981\u5305\u542B\u5728\u7F16\u8BD1\u4E2D\u7684\u5E93\u6587\u4EF6, -----&gt;&gt;&gt;\u4E00\u822C\u5728\u540E\u7AEF\u4F7F\u7528\uFF0C\u8981\u5F15\u5165\u5E93\u7684\u65F6\u5019\u4F7F\u7528\uFF0C\u9ED8\u8BA4\u5F15\u5165\u6D4F\u89C8\u5668\u8FD0\u884C\u7684\u5E93</span>
      <span class="token string-property property">&quot;allowJs&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>                       <span class="token comment">// \u5141\u8BB8\u7F16\u8BD1 javascript \u6587\u4EF6,-----&gt;\u6709\u4E9B\u6A21\u5757\u662Fjs\u5199\u7684</span>
      <span class="token string-property property">&quot;checkJs&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>                       <span class="token comment">// \u62A5\u544A javascript \u6587\u4EF6\u4E2D\u7684\u9519\u8BEF -----&gt;\u68C0\u67E5js\u4E2D\u6709\u6CA1\u6709\u8BED\u6CD5\u9519\u8BEF\uFF0C\u5E94\u8BE5\u548C\u4E0A\u9762\u4E00\u8D77\u7528</span>
      <span class="token string-property property">&quot;jsx&quot;</span><span class="token operator">:</span> <span class="token string">&quot;preserve&quot;</span><span class="token punctuation">,</span>                     <span class="token comment">// \u6307\u5B9A jsx \u4EE3\u7801\u7684\u751F\u6210: &#39;preserve&#39;, &#39;react-native&#39;, or &#39;react&#39;</span>
      <span class="token string-property property">&quot;declaration&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>                   <span class="token comment">// \u751F\u6210\u76F8\u5E94\u7684 &#39;.d.ts&#39; \u6587\u4EF6</span>
      <span class="token string-property property">&quot;sourceMap&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>                     <span class="token comment">// \u751F\u6210\u76F8\u5E94\u7684 &#39;.map&#39; \u6587\u4EF6</span>
      <span class="token string-property property">&quot;outFile&quot;</span><span class="token operator">:</span> <span class="token string">&quot;./dist/app.js&quot;</span><span class="token punctuation">,</span>            <span class="token comment">// \u5C06\u8F93\u51FA\u6587\u4EF6\u5408\u5E76\u4E3A\u4E00\u4E2A\u6587\u4EF6      ----&gt;&gt;&gt;&gt;\u5168\u5C40\u4F5C\u7528\u57DF\u6587\u4EF6\u4E2D\u7684\u5185\u5BB9\u5408\u5E76\uFF0C\u5168\u5C40\u4F5C\u7528\u57DF\u5373\u4E0D\u4F7F\u7528\u6A21\u5757\u5BFC\u51FA\u5BFC\u5165, \u5982\u679C\u8981\u5408\u5E76\u6709\u5BFC\u5165\u5BFC\u51FA\u6A21\u5757\u7684\u6587\u4EF6\uFF0C</span>
                                             <span class="token comment">// module\u5FC5\u987B\u4E3Aamd\u6216\u8005system</span>
      <span class="token string-property property">&quot;outDir&quot;</span><span class="token operator">:</span> <span class="token string">&quot;./&quot;</span><span class="token punctuation">,</span>                        <span class="token comment">// \u6307\u5B9A\u8F93\u51FA\u76EE\u5F55\uFF0C             ----&gt;&gt;&gt;&gt;\u7F16\u8BD1\u540E\u7684js\u6240\u5728\u76EE\u5F55</span>
      <span class="token string-property property">&quot;rootDir&quot;</span><span class="token operator">:</span> <span class="token string">&quot;./&quot;</span><span class="token punctuation">,</span>                       <span class="token comment">// \u7528\u6765\u63A7\u5236\u8F93\u51FA\u76EE\u5F55\u7ED3\u6784 --outDir.</span>
      <span class="token string-property property">&quot;removeComments&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>                <span class="token comment">// \u5220\u9664\u7F16\u8BD1\u540E\u7684\u6240\u6709\u7684\u6CE8\u91CA ---&gt;\u5220\u9664\u7F16\u8BD1\u524D\u7684\u6CE8\u91CA,\u53EA\u68C0\u67E5\u8BED\u6CD5\u7684\u65F6\u5019\u7528</span>
      <span class="token string-property property">&quot;noEmit&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>                        <span class="token comment">// \u4E0D\u751F\u6210\u8F93\u51FA\u6587\u4EF6 ---&gt;\u4E3Atrue\u4E0D\u751F\u6210\u6700\u540E\u7684\u7F16\u8BD1.js\u6587\u4EF6</span>
      <span class="token string-property property">&quot;noEmitOnError&quot;</span><span class="token operator">:</span><span class="token boolean">true</span><span class="token punctuation">,</span>                  <span class="token comment">// \u5F53\u6709\u9519\u8BEF\u7684\u65F6\u5019\uFF0C\u4E0D\u751F\u6210\u7F16\u8BD1\u6587\u4EF6(.js)</span>
      <span class="token string-property property">&quot;importHelpers&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>                 <span class="token comment">// \u4ECE tslib \u5BFC\u5165\u8F85\u52A9\u5DE5\u5177\u51FD\u6570</span>
      <span class="token string-property property">&quot;isolatedModules&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>               <span class="token comment">// \u5C06\u6BCF\u4E2A\u6587\u4EF6\u4F5C\u4E3A\u5355\u72EC\u7684\u6A21\u5757 \uFF08\u4E0E &#39;ts.transpileModule&#39; \u7C7B\u4F3C\uFF09.</span>
  
      <span class="token comment">/* \u4E25\u683C\u7684\u7C7B\u578B\u68C0\u67E5\u9009\u9879 */</span>
      <span class="token string-property property">&quot;strict&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>                        <span class="token comment">// \u542F\u7528\u6240\u6709\u4E25\u683C\u7C7B\u578B\u68C0\u67E5\u9009\u9879</span>
      <span class="token comment">//\u4E0B\u9762\u7684\u603B\u5F00\u5173</span>
      <span class="token string-property property">&quot;noImplicitAny&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>                 <span class="token comment">// \u5728\u8868\u8FBE\u5F0F\u548C\u58F0\u660E\u4E0A\u6709\u9690\u542B\u7684 any\u7C7B\u578B\u65F6\u62A5\u9519;---&gt;\u6CA1\u6709\u5199\u7C7B\u578B\u7684\u503C\u4E0D\u4F1A\u88AB\u63A8\u65AD\u4E3Aany </span>
      <span class="token string-property property">&quot;strictNullChecks&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>              <span class="token comment">// \u542F\u7528\u4E25\u683C\u7684 null \u68C0\u67E5</span>
       <span class="token comment">// \u4F8B\u5982\u83B7\u53D6dom\uFF0C\u4E0D\u6210\u529F\uFF0C\u6267\u884C\u4E86\u5C5E\u6027\uFF0Cdom\u53EF\u80FD\u4E3Anull</span>
      <span class="token string-property property">&quot;noImplicitThis&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>                <span class="token comment">// \u5F53 this \u8868\u8FBE\u5F0F\u503C\u4E3A any \u7C7B\u578B\u7684\u65F6\u5019\uFF0C\u751F\u6210\u4E00\u4E2A\u9519\u8BEF</span>
      <span class="token comment">//\u4F7F\u7528this\u7684\u65F6\u5019\u5FC5\u987B\u6307\u5B9A\u7C7B\uFF0C</span>
      <span class="token string-property property">&quot;alwaysStrict&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>                  <span class="token comment">// \u4EE5\u4E25\u683C\u6A21\u5F0F\u68C0\u67E5\u6BCF\u4E2A\u6A21\u5757\uFF0C\u5E76\u5728\u6BCF\u4E2A\u6587\u4EF6\u91CC\u52A0\u5165 &#39;use strict&#39;</span>
    <span class="token comment">// \u6CE8\u610F\u5F53\u4EE3\u7801\u4E2D\u4F7F\u7528\u6A21\u5757\uFF0C\u81EA\u52A8\u5C31\u4F7F\u7528\u4E86\u4E25\u683C\u6A21\u5F0F</span>


      <span class="token comment">/* \u989D\u5916\u7684\u68C0\u67E5 */</span>
      <span class="token string-property property">&quot;noUnusedLocals&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>                <span class="token comment">// \u6709\u672A\u4F7F\u7528\u7684\u53D8\u91CF\u65F6\uFF0C\u629B\u51FA\u9519\u8BEF</span>
      <span class="token string-property property">&quot;noUnusedParameters&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>            <span class="token comment">// \u6709\u672A\u4F7F\u7528\u7684\u53C2\u6570\u65F6\uFF0C\u629B\u51FA\u9519\u8BEF</span>
      <span class="token string-property property">&quot;noImplicitReturns&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>             <span class="token comment">// \u5E76\u4E0D\u662F\u6240\u6709\u51FD\u6570\u91CC\u7684\u4EE3\u7801\u90FD\u6709\u8FD4\u56DE\u503C\u65F6\uFF0C\u629B\u51FA\u9519\u8BEF</span>
      <span class="token string-property property">&quot;noFallthroughCasesInSwitch&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>    <span class="token comment">// \u62A5\u544A switch \u8BED\u53E5\u7684 fallthrough \u9519\u8BEF\u3002\uFF08\u5373\uFF0C\u4E0D\u5141\u8BB8 switch \u7684 case \u8BED\u53E5\u8D2F\u7A7F\uFF09</span>
  
      <span class="token comment">/* \u6A21\u5757\u89E3\u6790\u9009\u9879 */</span>
      <span class="token string-property property">&quot;moduleResolution&quot;</span><span class="token operator">:</span> <span class="token string">&quot;node&quot;</span><span class="token punctuation">,</span>            <span class="token comment">// \u9009\u62E9\u6A21\u5757\u89E3\u6790\u7B56\u7565\uFF1A &#39;node&#39; (Node.js) or &#39;classic&#39; (TypeScript pre-1.6)</span>
      <span class="token string-property property">&quot;baseUrl&quot;</span><span class="token operator">:</span> <span class="token string">&quot;./&quot;</span><span class="token punctuation">,</span>                       <span class="token comment">// \u7528\u4E8E\u89E3\u6790\u975E\u76F8\u5BF9\u6A21\u5757\u540D\u79F0\u7684\u57FA\u76EE\u5F55</span>
      <span class="token string-property property">&quot;paths&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>                           <span class="token comment">// \u6A21\u5757\u540D\u5230\u57FA\u4E8E baseUrl \u7684\u8DEF\u5F84\u6620\u5C04\u7684\u5217\u8868</span>
      <span class="token string-property property">&quot;rootDirs&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>                        <span class="token comment">// \u6839\u6587\u4EF6\u5939\u5217\u8868\uFF0C\u5176\u7EC4\u5408\u5185\u5BB9\u8868\u793A\u9879\u76EE\u8FD0\u884C\u65F6\u7684\u7ED3\u6784\u5185\u5BB9</span>
      <span class="token string-property property">&quot;typeRoots&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>                       <span class="token comment">// \u5305\u542B\u7C7B\u578B\u58F0\u660E\u7684\u6587\u4EF6\u5217\u8868</span>
      <span class="token string-property property">&quot;types&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>                           <span class="token comment">// \u9700\u8981\u5305\u542B\u7684\u7C7B\u578B\u58F0\u660E\u6587\u4EF6\u540D\u5217\u8868</span>
      <span class="token string-property property">&quot;allowSyntheticDefaultImports&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>  <span class="token comment">// \u5141\u8BB8\u4ECE\u6CA1\u6709\u8BBE\u7F6E\u9ED8\u8BA4\u5BFC\u51FA\u7684\u6A21\u5757\u4E2D\u9ED8\u8BA4\u5BFC\u5165\u3002</span>
  
      <span class="token comment">/* Source Map Options */</span>
      <span class="token string-property property">&quot;sourceRoot&quot;</span><span class="token operator">:</span> <span class="token string">&quot;./&quot;</span><span class="token punctuation">,</span>                    <span class="token comment">// \u6307\u5B9A\u8C03\u8BD5\u5668\u5E94\u8BE5\u627E\u5230 TypeScript \u6587\u4EF6\u800C\u4E0D\u662F\u6E90\u6587\u4EF6\u7684\u4F4D\u7F6E</span>
      <span class="token string-property property">&quot;mapRoot&quot;</span><span class="token operator">:</span> <span class="token string">&quot;./&quot;</span><span class="token punctuation">,</span>                       <span class="token comment">// \u6307\u5B9A\u8C03\u8BD5\u5668\u5E94\u8BE5\u627E\u5230\u6620\u5C04\u6587\u4EF6\u800C\u4E0D\u662F\u751F\u6210\u6587\u4EF6\u7684\u4F4D\u7F6E</span>
      <span class="token string-property property">&quot;inlineSourceMap&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>               <span class="token comment">// \u751F\u6210\u5355\u4E2A soucemaps \u6587\u4EF6\uFF0C\u800C\u4E0D\u662F\u5C06 sourcemaps \u751F\u6210\u4E0D\u540C\u7684\u6587\u4EF6</span>
      <span class="token string-property property">&quot;inlineSources&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>                 <span class="token comment">// \u5C06\u4EE3\u7801\u4E0E sourcemaps \u751F\u6210\u5230\u4E00\u4E2A\u6587\u4EF6\u4E2D\uFF0C\u8981\u6C42\u540C\u65F6\u8BBE\u7F6E\u4E86 --inlineSourceMap \u6216 --sourceMap \u5C5E\u6027</span>
  
      <span class="token comment">/* \u5176\u4ED6\u9009\u9879 */</span>
      <span class="token string-property property">&quot;experimentalDecorators&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>        <span class="token comment">// \u542F\u7528\u88C5\u9970\u5668</span>
      <span class="token string-property property">&quot;emitDecoratorMetadata&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>          <span class="token comment">// \u4E3A\u88C5\u9970\u5668\u63D0\u4F9B\u5143\u6570\u636E\u7684\u652F\u6301</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>


    <span class="token comment">/*\u6307\u5B9A\u8981\u7F16\u8BD1\u7684\u6587\u4EF6 **\u8868\u793A\u4EFB\u610F\u76EE\u5F55 *\u8868\u793A\u4EFB\u610F\u6587\u4EF6  */</span>
    <span class="token string-property property">&quot;include&quot;</span><span class="token operator">:</span><span class="token punctuation">[</span>
      <span class="token string">&quot;./src/**/*&quot;</span>  <span class="token comment">// src\u4E0B\u4EFB\u610F\u76EE\u5F55\u4E0B\u9762\u7684\u4EFB\u610F\u6587\u4EF6</span>
    <span class="token punctuation">]</span>
    <span class="token punctuation">,</span>
<span class="token comment">// \u5305\u62EC\u548C\u6392\u9664\uFF0C\u5E94\u8BBE\u7F6E\uFF0C\u4E0D\u7136\uFF0C\u5168\u5C40\u53D8\u91CF\u7684\u8303\u56F4\u4F1A\u5F88\u5927\uFF0C</span>
    <span class="token comment">//\u6392\u67E5\u7684\uFF0C\u6709\u9ED8\u8BA4\u503C</span>
    <span class="token string-property property">&quot;exclude&quot;</span><span class="token operator">:</span>
    <span class="token punctuation">[</span>
      <span class="token string">&quot;./scr/hello/**/*&quot;</span>
    <span class="token punctuation">]</span>
    <span class="token punctuation">,</span>
    <span class="token comment">// \u7F16\u8BD1\u5177\u4F53\u7684\u6587\u4EF6</span>
    <span class="token string-property property">&quot;files&quot;</span><span class="token operator">:</span><span class="token punctuation">[</span><span class="token string">&quot;xx.ts&quot;</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),e=[o];function c(r,l){return n(),a("div",null,e)}var u=s(p,[["render",c],["__file","tsconfig.html.vue"]]);export{u as default};
