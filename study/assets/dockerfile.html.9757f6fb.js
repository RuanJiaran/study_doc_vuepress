import{_ as n,o as s,c as e,a}from"./app.d2eb7f9c.js";const i={},l=a(`<p><strong>Dockerfile\u6587\u4EF6</strong></p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>FROM node:14.15.0

RUN <span class="token function">npm</span> <span class="token function">install</span> node-sass

WORKDIR /www/react-admin

COPY <span class="token builtin class-name">.</span> /www/react-admin

RUN <span class="token function">npm</span> <span class="token function">install</span>

CMD <span class="token function">npm</span> run start:mock

EXPOSE <span class="token number">3000</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>build\u955C\u50CF</strong></p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">docker</span> build -f f:/www/react-admin-home-h5/Dockerfile -t react-admin:1.0 <span class="token builtin class-name">.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>run\u542F\u52A8\u5BB9\u5668</strong></p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">docker</span> run -it -p <span class="token number">3000</span>:3000 -v /f/www/react-admin-home-h5:/www/react-admin react-admin:1.0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,6),c=[l];function d(r,t){return s(),e("div",null,c)}var u=n(i,[["render",d],["__file","dockerfile.html.vue"]]);export{u as default};
