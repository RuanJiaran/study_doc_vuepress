import{_ as n,o as s,c as a,a as e}from"./app.5a5600aa.js";const t={},i=e(`<h1 id="\u57FA\u7840\u95EE\u9898" tabindex="-1"><a class="header-anchor" href="#\u57FA\u7840\u95EE\u9898" aria-hidden="true">#</a> \u57FA\u7840\u95EE\u9898</h1><h2 id="\u4E25\u683C\u6A21\u5F0F\u5982\u4F55\u4F7F\u7528-\u6709\u4EC0\u4E48\u7528\u5904" tabindex="-1"><a class="header-anchor" href="#\u4E25\u683C\u6A21\u5F0F\u5982\u4F55\u4F7F\u7528-\u6709\u4EC0\u4E48\u7528\u5904" aria-hidden="true">#</a> [ \u4E25\u683C\u6A21\u5F0F\u5982\u4F55\u4F7F\u7528\uFF0C\u6709\u4EC0\u4E48\u7528\u5904 ]</h2><p><code>StrictMode</code> \u662F\u4E00\u4E2A\u7528\u6765\u7A81\u51FA\u663E\u793A\u5E94\u7528\u7A0B\u5E8F\u4E2D\u6F5C\u5728\u95EE\u9898\u7684\u5DE5\u5177\u3002\u4E0E <code>Fragment</code> \u4E00\u6837\uFF0C<code>StrictMode</code> \u4E0D\u4F1A\u6E32\u67D3\u4EFB\u4F55\u53EF\u89C1\u7684 UI\u3002\u5B83\u4E3A\u5176\u540E\u4EE3\u5143\u7D20\u89E6\u53D1\u989D\u5916\u7684\u68C0\u67E5\u548C\u8B66\u544A\u3002 \u53EF\u4EE5\u4E3A\u5E94\u7528\u7A0B\u5E8F\u7684\u4EFB\u4F55\u90E8\u5206\u542F\u7528\u4E25\u683C\u6A21\u5F0F\u3002\u4F8B\u5982\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">&#39;react&#39;</span>
<span class="token keyword">function</span> <span class="token function">ExampleApplication</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>Header <span class="token operator">/</span><span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>React<span class="token punctuation">.</span>StrictMode<span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>
          <span class="token operator">&lt;</span>ComponentOne <span class="token operator">/</span><span class="token operator">&gt;</span>
          <span class="token operator">&lt;</span>ComponentTwo <span class="token operator">/</span><span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>React<span class="token punctuation">.</span>StrictMode<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>Footer <span class="token operator">/</span><span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5728\u4E0A\u8FF0\u7684\u793A\u4F8B\u4E2D\uFF0C\u4E0D\u4F1A\u5BF9 <code>Header</code> \u548C <code>Footer</code> \u7EC4\u4EF6\u8FD0\u884C\u4E25\u683C\u6A21\u5F0F\u68C0\u67E5\u3002\u4F46\u662F\uFF0C<code>ComponentOne</code> \u548C <code>ComponentTwo</code> \u4EE5\u53CA\u5B83\u4EEC\u7684\u6240\u6709\u540E\u4EE3\u5143\u7D20\u90FD\u5C06\u8FDB\u884C\u68C0\u67E5\u3002</p><p><code>StrictMode</code> \u76EE\u524D\u6709\u52A9\u4E8E\uFF1A</p><ul><li>\u8BC6\u522B\u4E0D\u5B89\u5168\u7684\u751F\u547D\u5468\u671F</li><li>\u5173\u4E8E\u4F7F\u7528\u8FC7\u65F6\u5B57\u7B26\u4E32 ref API \u7684\u8B66\u544A</li><li>\u5173\u4E8E\u4F7F\u7528\u5E9F\u5F03\u7684 findDOMNode \u65B9\u6CD5\u7684\u8B66\u544A</li><li>\u68C0\u6D4B\u610F\u5916\u7684\u526F\u4F5C\u7528</li><li>\u68C0\u6D4B\u8FC7\u65F6\u7684 context API</li></ul><h2 id="\u904D\u5386\u7684\u65B9\u6CD5\u6709\u54EA\u4E9B" tabindex="-1"><a class="header-anchor" href="#\u904D\u5386\u7684\u65B9\u6CD5\u6709\u54EA\u4E9B" aria-hidden="true">#</a> [ \u904D\u5386\u7684\u65B9\u6CD5\u6709\u54EA\u4E9B ]</h2><ul><li><strong>\u904D\u5386\u6570\u7EC4\uFF1Amap &amp;&amp; forEach</strong></li></ul><div class="language-JS ext-JS line-numbers-mode"><pre class="language-JS"><code>import React from &#39;react&#39;;

class App extends React.Component {
  render() {
    let arr = [&#39;a&#39;, &#39;b&#39;, &#39;c&#39;, &#39;d&#39;];
    return (
      &lt;ul&gt;
        {
          arr.map((item, index) =&gt; {
            return &lt;li key={index}&gt;{item}&lt;/li&gt;
          })
        }
      &lt;/ul&gt;
    )
  }
}

class App extends React.Component {
  render() {
    let arr = [&#39;a&#39;, &#39;b&#39;, &#39;c&#39;, &#39;d&#39;];
    return (
      &lt;ul&gt;
        {
          arr.forEach((item, index) =&gt; {
            return &lt;li key={index}&gt;{item}&lt;/li&gt;
          })
        }
      &lt;/ul&gt;
    )
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><strong>\u904D\u5386\u5BF9\u8C61\uFF1Amap &amp;&amp; for in</strong></li></ul><div class="language-JS ext-JS line-numbers-mode"><pre class="language-JS"><code>class App extends React.Component {
  render() {
    let obj = {
      a: 1,
      b: 2,
      c: 3
    }
    return (
      &lt;ul&gt;
        {
          (() =&gt; {
            let domArr = [];
            for(const key in obj) {
              if(obj.hasOwnProperty(key)) {
                const value = obj[key]
                domArr.push(&lt;li key={key}&gt;{value}&lt;/li&gt;)
              }
            }
            return domArr;
          })()
        }
      &lt;/ul&gt;
    )
  }
}

// Object.entries() \u628A\u5BF9\u8C61\u8F6C\u6362\u6210\u6570\u7EC4
class App extends React.Component {
  render() {
    let obj = {
      a: 1,
      b: 2,
      c: 3
    }
    return (
      &lt;ul&gt;
        {
          Object.entries(obj).map(([key, value], index) =&gt; {   // item\u662F\u4E00\u4E2A\u6570\u7EC4\uFF0C\u628Aitem\u89E3\u6784\uFF0C\u5199\u6CD5\u662F[key, value]
            return &lt;li key={key}&gt;{value}&lt;/li&gt;
          })
        }
      &lt;/ul&gt;
    )
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u9875\u9762\u91CD\u65B0\u52A0\u8F7D\u65F6\u600E\u6837\u4FDD\u7559\u6570\u636E" tabindex="-1"><a class="header-anchor" href="#\u9875\u9762\u91CD\u65B0\u52A0\u8F7D\u65F6\u600E\u6837\u4FDD\u7559\u6570\u636E" aria-hidden="true">#</a> [ \u9875\u9762\u91CD\u65B0\u52A0\u8F7D\u65F6\u600E\u6837\u4FDD\u7559\u6570\u636E ]</h2><h2 id="react-\u5FC5\u987B\u4F7F\u7528-jsx-\u5417" tabindex="-1"><a class="header-anchor" href="#react-\u5FC5\u987B\u4F7F\u7528-jsx-\u5417" aria-hidden="true">#</a> [ React \u5FC5\u987B\u4F7F\u7528 JSX \u5417 ]</h2><p>React \u5E76\u4E0D\u5F3A\u5236\u8981\u6C42\u4F7F\u7528 JSX\u3002\u5F53\u4E0D\u60F3\u5728\u6784\u5EFA\u73AF\u5883\u4E2D\u914D\u7F6E\u6709\u5173 JSX \u7F16\u8BD1\u65F6\uFF0C\u4E0D\u5728 React \u4E2D\u4F7F\u7528 JSX \u4F1A\u66F4\u52A0\u65B9\u4FBF\u3002</p><p>\u6BCF\u4E2A JSX \u5143\u7D20\u53EA\u662F\u8C03\u7528 <code>React.createElement(component, props, ...children)</code> \u7684\u8BED\u6CD5\u7CD6\u3002\u56E0\u6B64\uFF0C\u4F7F\u7528 JSX \u53EF\u4EE5\u5B8C\u6210\u7684\u4EFB\u4F55\u4E8B\u60C5\u90FD\u53EF\u4EE5\u901A\u8FC7\u7EAF JavaScript \u5B8C\u6210\u3002</p><p>\u4F8B\u5982\uFF0C\u7528 JSX \u7F16\u5199\u7684\u4EE3\u7801\uFF1A</p><div class="language-JS ext-JS line-numbers-mode"><pre class="language-JS"><code>class Hello extends React.Component {
  render() {
    return &lt;div&gt;Hello {this.props.toWhat}&lt;/div&gt;;
  }
}
ReactDOM.render(
  &lt;Hello toWhat=&quot;World&quot; /&gt;,
  document.getElementById(&#39;root&#39;)
);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u53EF\u4EE5\u7F16\u5199\u4E3A\u4E0D\u4F7F\u7528 JSX \u7684\u4EE3\u7801\uFF1A</p><div class="language-JS ext-JS line-numbers-mode"><pre class="language-JS"><code>class Hello extends React.Component {
  render() {
    return React.createElement(&#39;div&#39;, null, \`Hello \${this.props.toWhat}\`);
  }
}
ReactDOM.render(
  React.createElement(Hello, {toWhat: &#39;World&#39;}, null),
  document.getElementById(&#39;root&#39;)
);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u4E3A\u4EC0\u4E48\u4F7F\u7528-jsx-\u7684\u7EC4\u4EF6\u4E2D\u6CA1\u6709\u770B\u5230\u4F7F\u7528-react-\u5374\u9700\u8981\u5F15\u5165-react" tabindex="-1"><a class="header-anchor" href="#\u4E3A\u4EC0\u4E48\u4F7F\u7528-jsx-\u7684\u7EC4\u4EF6\u4E2D\u6CA1\u6709\u770B\u5230\u4F7F\u7528-react-\u5374\u9700\u8981\u5F15\u5165-react" aria-hidden="true">#</a> [ \u4E3A\u4EC0\u4E48\u4F7F\u7528 jsx \u7684\u7EC4\u4EF6\u4E2D\u6CA1\u6709\u770B\u5230\u4F7F\u7528 react \u5374\u9700\u8981\u5F15\u5165 react ]</h2><p>\u672C\u8D28\u4E0A\u6765\u8BF4 JSX \u662F <code>React.createElement(component, props, ...children)</code>\u65B9\u6CD5\u7684\u8BED\u6CD5\u7CD6\u3002\u5728 React 17 \u4E4B\u524D\uFF0C\u5982\u679C\u4F7F\u7528\u4E86 JSX\uFF0C\u5176\u5B9E\u5C31\u662F\u5728\u4F7F\u7528 React\uFF0C <code>babel</code> \u4F1A\u628A\u7EC4\u4EF6\u8F6C\u6362\u4E3A <code>CreateElement</code> \u5F62\u5F0F\u3002\u5728 React 17 \u4E4B\u540E\uFF0C\u5C31\u4E0D\u518D\u9700\u8981\u5F15\u5165\uFF0C\u56E0\u4E3A <code>babel</code> \u5DF2\u7ECF\u53EF\u4EE5\u5E2E\u6211\u4EEC\u81EA\u52A8\u5F15\u5165 react\u3002</p><h2 id="\u5728-react-\u4E2D\u600E\u4E48\u4F7F\u7528-async-await" tabindex="-1"><a class="header-anchor" href="#\u5728-react-\u4E2D\u600E\u4E48\u4F7F\u7528-async-await" aria-hidden="true">#</a> [ \u5728 React \u4E2D\u600E\u4E48\u4F7F\u7528 async/await ]</h2><p>async/await \u662F ES7 \u6807\u51C6\u4E2D\u7684\u65B0\u7279\u6027\u3002\u5982\u679C\u662F\u4F7F\u7528 React \u5B98\u65B9\u7684\u811A\u624B\u67B6\u521B\u5EFA\u7684\u9879\u76EE\uFF0C\u5C31\u53EF\u4EE5\u76F4\u63A5\u4F7F\u7528\u3002\u5982\u679C\u662F\u5728\u81EA\u5DF1\u642D\u5EFA\u7684 webpack \u914D\u7F6E\u7684\u9879\u76EE\u4E2D\u4F7F\u7528\uFF0C\u53EF\u80FD\u4F1A\u9047\u5230 <strong>regeneratorRuntime is not defined</strong> \u7684\u5F02\u5E38\u9519\u8BEF\u3002\u90A3\u4E48\u6211\u4EEC\u5C31\u9700\u8981\u5F15\u5165 babel\uFF0C\u5E76\u5728 babel \u4E2D\u914D\u7F6E\u4F7F\u7528 async/await\u3002\u53EF\u4EE5\u5229\u7528 babel \u7684 transform-async-to-module-method \u63D2\u4EF6\u6765\u8F6C\u6362\u5176\u6210\u4E3A\u6D4F\u89C8\u5668\u652F\u6301\u7684\u8BED\u6CD5\uFF0C\u867D\u7136\u6CA1\u6709\u6027\u80FD\u7684\u63D0\u5347\uFF0C\u4F46\u5BF9\u4E8E\u4EE3\u7801\u7F16\u5199\u4F53\u9A8C\u8981\u66F4\u597D\u3002</p><h2 id="react-children-map-\u548C-js-\u7684-map-\u6709\u4EC0\u4E48\u533A\u522B" tabindex="-1"><a class="header-anchor" href="#react-children-map-\u548C-js-\u7684-map-\u6709\u4EC0\u4E48\u533A\u522B" aria-hidden="true">#</a> [ React.Children.map \u548C js \u7684 map \u6709\u4EC0\u4E48\u533A\u522B ]</h2><p>JavaScript \u4E2D\u7684 map \u4E0D\u4F1A\u5BF9\u4E3A null \u6216\u8005 undefined \u7684\u6570\u636E\u8FDB\u884C\u5904\u7406\uFF0C\u800C React.Children.map \u4E2D\u7684 map \u53EF\u4EE5\u5904\u7406 React.Children \u4E3A null \u6216\u8005 undefined \u7684\u60C5\u51B5\u3002</p><h2 id="react-\u4E2D\u7684\u9AD8\u9636\u7EC4\u4EF6\u8FD0\u7528\u4E86\u4EC0\u4E48\u8BBE\u8BA1\u6A21\u5F0F" tabindex="-1"><a class="header-anchor" href="#react-\u4E2D\u7684\u9AD8\u9636\u7EC4\u4EF6\u8FD0\u7528\u4E86\u4EC0\u4E48\u8BBE\u8BA1\u6A21\u5F0F" aria-hidden="true">#</a> [ React \u4E2D\u7684\u9AD8\u9636\u7EC4\u4EF6\u8FD0\u7528\u4E86\u4EC0\u4E48\u8BBE\u8BA1\u6A21\u5F0F ]</h2><p>\u4F7F\u7528\u4E86\u88C5\u9970\u6A21\u5F0F\uFF0C\u9AD8\u9636\u7EC4\u4EF6\u7684\u8FD0\u7528\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">withWindowWidth</span><span class="token punctuation">(</span><span class="token parameter">BaseComponent</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">class</span> <span class="token class-name">DerivedClass</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>
    state <span class="token operator">=</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">windowWidth</span><span class="token operator">:</span> window<span class="token punctuation">.</span>innerWidth<span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
    <span class="token function-variable function">onResize</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">windowWidth</span><span class="token operator">:</span> window<span class="token punctuation">.</span>innerWidth<span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token function">componentDidMount</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      window<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;resize&#39;</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>onResize<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token function">componentWillUnmount</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      window<span class="token punctuation">.</span><span class="token function">removeEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;resize&#39;</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>onResize<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token operator">&lt;</span>BaseComponent <span class="token punctuation">{</span><span class="token operator">...</span><span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">}</span> <span class="token punctuation">{</span><span class="token operator">...</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">&gt;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> DerivedClass
<span class="token punctuation">}</span>
<span class="token keyword">const</span> <span class="token function-variable function">MyComponent</span> <span class="token operator">=</span> <span class="token parameter">props</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>Window width is<span class="token operator">:</span> <span class="token punctuation">{</span>props<span class="token punctuation">.</span>windowWidth<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
<span class="token punctuation">}</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">withWindowWidth</span><span class="token punctuation">(</span>MyComponent<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u88C5\u9970\u6A21\u5F0F\u7684\u7279\u70B9\u662F\u4E0D\u9700\u8981\u6539\u53D8\u88AB\u88C5\u9970\u5BF9\u8C61\u672C\u8EAB\uFF0C\u800C\u53EA\u662F\u5728\u5916\u9762\u5957\u4E00\u4E2A\u5916\u58F3\u63A5\u53E3\u3002JavaScript \u76EE\u524D\u5DF2\u7ECF\u6709\u4E86\u539F\u751F\u88C5\u9970\u5668\u7684\u63D0\u6848\uFF0C\u5176\u7528\u6CD5\u5982\u4E0B\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>@testable
<span class="token keyword">class</span> <span class="token class-name">MyTestableClass</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u7C7B\u7EC4\u4EF6\u548C\u51FD\u6570\u7EC4\u4EF6\u6709\u4F55\u4E0D\u540C" tabindex="-1"><a class="header-anchor" href="#\u7C7B\u7EC4\u4EF6\u548C\u51FD\u6570\u7EC4\u4EF6\u6709\u4F55\u4E0D\u540C" aria-hidden="true">#</a> [ \u7C7B\u7EC4\u4EF6\u548C\u51FD\u6570\u7EC4\u4EF6\u6709\u4F55\u4E0D\u540C ]</h2><p><strong>\u76F8\u540C\u70B9</strong></p><ul><li>\u7EC4\u4EF6\u540D\u9996\u5B57\u6BCD\u5FC5\u987B\u5927\u5199</li><li>\u8FD4\u56DE\u7684\u7EC4\u4EF6\u53EA\u80FD\u6709\u4E00\u4E2A\u6839\u5143\u7D20</li><li>\u90FD\u4E0D\u80FD\u4FEE\u6539 props</li></ul><p><strong>\u4E0D\u540C\u70B9</strong></p><p><strong>\u7C7B\u7EC4\u4EF6</strong></p><p>\u57FA\u4E8E\u7C7B\u7684\u7EC4\u4EF6\u662F ES6 \u7C7B\uFF0C\u5B83\u6269\u5C55\u4E86 React \u7684 Component \u7C7B\uFF0C\u5E76\u4E14\u81F3\u5C11\u5B9E\u73B0\u4E86<code>render()</code>\u65B9\u6CD5\u3002\u7C7B\u7EC4\u4EF6\u4F7F\u7528\u8FC7\u7A0B\u4E2D\uFF0C\u9700\u8981\u5B9E\u4F8B\u5316\uFF0C\u51FD\u6570\u7EC4\u4EF6\u4E0D\u9700\u8981\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">Welcome</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>state <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token function">componentDidUpdate</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

  <span class="token function">componentWillUnmount</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token operator">&lt;</span>h1<span class="token operator">&gt;</span>Hello<span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span>name<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>h1<span class="token operator">&gt;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>\u51FD\u6570\u7EC4\u4EF6\uFF08\u65E0\u72B6\u6001\u7EC4\u4EF6\uFF09</strong></p><p>\u51FD\u6570\u7EC4\u4EF6\u662F\u65E0\u72B6\u6001\u7684\uFF0C\u6CA1\u6709 this\uFF0C\u6CA1\u6709\u751F\u547D\u5468\u671F\uFF0C\u6CA1\u6709\u72B6\u6001 state\u3002\u76F8\u6BD4\u4E0E\u7C7B\u7EC4\u4EF6\u66F4\u7B80\u5355\u3001\u6027\u80FD\u66F4\u597D\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">Welcome</span><span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token operator">&lt;</span>h1<span class="token operator">&gt;</span>Hello<span class="token punctuation">,</span> <span class="token punctuation">{</span>props<span class="token punctuation">.</span>name<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>h1<span class="token operator">&gt;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="react-\u4E2D-keys-\u7684\u4F5C\u7528\u662F\u4EC0\u4E48" tabindex="-1"><a class="header-anchor" href="#react-\u4E2D-keys-\u7684\u4F5C\u7528\u662F\u4EC0\u4E48" aria-hidden="true">#</a> [ React \u4E2D keys \u7684\u4F5C\u7528\u662F\u4EC0\u4E48 ]</h2><p>Keys \u662F React \u7528\u4E8E\u8FFD\u8E2A\u54EA\u4E9B\u5217\u8868\u4E2D\u5143\u7D20\u88AB\u4FEE\u6539\u3001\u88AB\u6DFB\u52A0\u6216\u8005\u88AB\u79FB\u9664\u7684\u8F85\u52A9\u6807\u8BC6\u3002</p><p>\u5728 React \u4E2D\u6E32\u67D3\u96C6\u5408\u65F6\uFF0C\u5411\u6BCF\u4E2A\u91CD\u590D\u7684\u5143\u7D20\u6DFB\u52A0\u5173\u952E\u5B57\u5BF9\u4E8E\u5E2E\u52A9 React \u8DDF\u8E2A\u5143\u7D20\u4E0E\u6570\u636E\u4E4B\u95F4\u7684\u5173\u8054\u975E\u5E38\u91CD\u8981\u3002key \u5E94\u8BE5\u662F\u552F\u4E00 ID\uFF0C\u6700\u597D\u662F UUID \u6216\u6536\u96C6\u9879\u4E2D\u7684\u5176\u4ED6\u552F\u4E00\u5B57\u7B26\u4E32\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token operator">&lt;</span>ul<span class="token operator">&gt;</span>
  <span class="token punctuation">{</span>todos<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token parameter">todo</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>li key<span class="token operator">=</span><span class="token punctuation">{</span>todo<span class="token punctuation">.</span>id<span class="token punctuation">}</span><span class="token operator">&gt;</span><span class="token punctuation">{</span>todo<span class="token punctuation">.</span>text<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>li<span class="token operator">&gt;</span>
  <span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">}</span>
  <span class="token punctuation">;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>ul<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5728\u96C6\u5408\u4E2D\u6DFB\u52A0\u548C\u5220\u9664\u9879\u76EE\u65F6\uFF0C\u4E0D\u4F7F\u7528\u952E\u6216\u5C06\u7D22\u5F15\u7528\u4F5C\u952E\u4F1A\u5BFC\u81F4\u5947\u602A\u7684\u884C\u4E3A\u3002</p><h2 id="\u4E3A\u4EC0\u4E48\u8C03\u7528-setstate-\u800C\u4E0D\u662F\u76F4\u63A5\u6539\u53D8-state" tabindex="-1"><a class="header-anchor" href="#\u4E3A\u4EC0\u4E48\u8C03\u7528-setstate-\u800C\u4E0D\u662F\u76F4\u63A5\u6539\u53D8-state" aria-hidden="true">#</a> [ \u4E3A\u4EC0\u4E48\u8C03\u7528 setState \u800C\u4E0D\u662F\u76F4\u63A5\u6539\u53D8 state ]</h2><p>\u5982\u679C\u60A8\u5C1D\u8BD5\u76F4\u63A5\u6539\u53D8\u7EC4\u4EF6\u7684\u72B6\u6001\uFF0CReact \u5C06\u65E0\u6CD5\u5F97\u77E5\u5B83\u9700\u8981\u91CD\u65B0\u6E32\u67D3\u7EC4\u4EF6\u3002\u901A\u8FC7\u4F7F\u7528<code>setState()</code>\u65B9\u6CD5\uFF0CReact \u53EF\u4EE5\u66F4\u65B0\u7EC4\u4EF6\u7684 UI\u3002</p><p>\u53E6\u5916\uFF0C\u60A8\u8FD8\u53EF\u4EE5\u8C08\u8C08\u5982\u4F55\u4FDD\u8BC1\u72B6\u6001\u66F4\u65B0\u662F\u540C\u6B65\u7684\u3002\u5982\u679C\u9700\u8981\u57FA\u4E8E\u53E6\u4E00\u4E2A\u72B6\u6001\uFF08\u6216\u5C5E\u6027\uFF09\u66F4\u65B0\u7EC4\u4EF6\u7684\u72B6\u6001\uFF0C\u8BF7\u5411<code>setState()</code>\u4F20\u9012\u4E00\u4E2A\u51FD\u6570\uFF0C\u8BE5\u51FD\u6570\u5C06 state \u548C props \u4F5C\u4E3A\u5176\u4E24\u4E2A\u53C2\u6570\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">state<span class="token punctuation">,</span> props</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">counter</span><span class="token operator">:</span> state<span class="token punctuation">.</span>counter <span class="token operator">+</span> props<span class="token punctuation">.</span>increment<span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="state-\u548C-props-\u533A\u522B\u662F\u5565" tabindex="-1"><a class="header-anchor" href="#state-\u548C-props-\u533A\u522B\u662F\u5565" aria-hidden="true">#</a> [ state \u548C props \u533A\u522B\u662F\u5565 ]</h2><ul><li>state \u662F\u7EC4\u4EF6\u81EA\u5DF1\u7BA1\u7406\u6570\u636E\uFF0C\u63A7\u5236\u81EA\u5DF1\u7684\u72B6\u6001\uFF0C\u53EF\u53D8</li><li>props \u662F\u5916\u90E8\u4F20\u5165\u7684\u6570\u636E\u53C2\u6570\uFF0C\u4E0D\u53EF\u53D8</li><li>\u6CA1\u6709 state \u7684\u53EB\u505A\u65E0\u72B6\u6001\u7EC4\u4EF6\uFF0C\u6709 state \u7684\u53EB\u505A\u6709\u72B6\u6001\u7EC4\u4EF6</li><li>\u591A\u7528 props\uFF0C\u5C11\u7528 state\uFF0C\u4E5F\u5C31\u662F\u591A\u5199\u65E0\u72B6\u6001\u7EC4\u4EF6</li></ul>`,52),p=[i];function l(o,c){return s(),a("div",null,p)}var d=n(t,[["render",l],["__file","index.html.vue"]]);export{d as default};
