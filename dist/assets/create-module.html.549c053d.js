import{_ as e,o as i,c as l,b as n,d as t,e as s,a as c,r as o}from"./app.5a5600aa.js";var d="/study_doc_vuepress/img/image-20220814211612734.png";const p={},r=n("h1",{id:"\u81EA\u52A8\u751F\u6210\u6A21\u578B\u6587\u4EF6",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u81EA\u52A8\u751F\u6210\u6A21\u578B\u6587\u4EF6","aria-hidden":"true"},"#"),s(" \u81EA\u52A8\u751F\u6210\u6A21\u578B\u6587\u4EF6")],-1),u=n("p",null,[s("\u56E0\u4E3A\u6570\u636E\u5E93\u914D\u7F6E\u91C7\u7528\u7684\u662F "),n("code",null,"sequelize"),s(" \uFF0C \u90A3\u6211\u4EEC\u53EF\u4EE5\u91C7\u7528 "),n("code",null,"sequelize-typescript-generator"),s(" \u6765\u6839\u636E\u6570\u636E\u8868\u81EA\u52A8\u751F\u6210\u6A21\u578B\u6587\u4EF6\u3002")],-1),v={href:"https://github.com/spinlud/sequelize-typescript-generator",target:"_blank",rel:"noopener noreferrer"},m=s(" sequelize-typescript-generator \u6587\u6863"),b=c(`<h2 id="\u5B89\u88C5\u6269\u5C55\u5305" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5\u6269\u5C55\u5305" aria-hidden="true">#</a> \u5B89\u88C5\u6269\u5C55\u5305</h2><p><strong>\u5B89\u88C5\u6570\u636E\u5E93\u5305</strong></p><p>\u8FD9\u91CC\u6211\u4EEC\u9009\u7528 mysql \u6570\u636E\u5E93</p><div class="language-cmd ext-cmd line-numbers-mode"><pre class="language-cmd"><code>npm install -S mysql2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>\u5B89\u88C5 sequelize-typescript-generator \u751F\u6210\u5668\u5305</strong></p><div class="language-cmd ext-cmd line-numbers-mode"><pre class="language-cmd"><code>npm install -S sequelize-typescript-generator
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>\u5B89\u88C5 npx</strong></p><div class="language-cmd ext-cmd line-numbers-mode"><pre class="language-cmd"><code>npm install -g npx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="\u53C2\u6570\u8BF4\u660E" tabindex="-1"><a class="header-anchor" href="#\u53C2\u6570\u8BF4\u660E" aria-hidden="true">#</a> \u53C2\u6570\u8BF4\u660E</h2><div class="language-cmd ext-cmd line-numbers-mode"><pre class="language-cmd"><code>Usage: npx stg -D &lt;dialect&gt; -d [database] -u [username] -x [password] -h [host] -p
[port] -o [out-dir] -s [schema] -a [associations-file]-t [tables] -T
[skip-tables] -i [indices] -C [case] -S [storage] -L [lint-file] -l [ssl] -r
[protocol] -c [clean]

Options:
  --help                      Show help                                [boolean]
  --version                   Show version number                      [boolean]
  -h, --host                  \u6570\u636E\u5E93\u8FDE\u63A5\u5730\u5740                              [string]
  -p, --port                  \u6570\u636E\u5E93\u7AEF\u53E3\u53F7:
                              - MySQL/MariaDB: 3306
                              - Postgres: 5432
                              - MSSQL: 1433                             [number]
  -d, --database              \u6570\u636E\u5E93\u540D\u79F0                                  [string]
  -s, --schema                Schema name (Postgres only). Default:
                              - public                                  [string]
  -D, --dialect               \u6570\u636E\u5E93\u7C7B\u578B, \u9ED8\u8BA4\u503C:
                              - postgres
                              - mysql
                              - mariadb
                              - sqlite
                              - mssql                        [string] [required]
  -u, --username              \u6570\u636E\u7528\u6237\u540D                                  [string]
  -x, --password              \u6570\u636E\u5E93\u5BC6\u7801                                  [string]
  -t, --tables                \u8981\u5904\u7406\u7684\u8868\uFF0C\u7528\u9017\u53F7\u5206\u9694\u540D\u79F0\u3002\u4E0D\u6307\u5B9A\u751F\u6210\u6240\u6709\u6570\u636E\u8868\u6A21\u578B [string]
  -T, --skip-tables           \u8981\u8DF3\u8FC7\u7684\u8868\uFF0C\u7528\u9017\u53F7\u5206\u9694\u540D\u79F0                     [string]
  -i, --indices               \u5728\u751F\u6210\u7684\u6A21\u578B\u4E2D\u5305\u542B\u7D22\u5F15\u6CE8\u91CA                     [boolean]
  -o, --out-dir               \u6A21\u578B\u6587\u4EF6\u8F93\u51FA\u76EE\u5F55, \u9ED8\u8BA4\u503C:
                              - output-models                           [string]
  -c, --clean                 \u8FD0\u884C\u524D\u6E05\u7406\u8F93\u51FA\u76EE\u5F55                           [boolean]
  -m, --timestamps            \u4E3A\u8868\u6DFB\u52A0\u9ED8\u8BA4\u65F6\u95F4\u6233                           [boolean]
  -C, --case                  \u8F6C\u6362\u8868\u548C\u5B57\u6BB5\u540D\u79F0
                              \u6709\u4EE5\u4E0B\u60C5\u51B5\u4E4B\u4E00:
                              - underscore    \u4E0B\u5212\u7EBF\u547D\u540D
                              - camel         \u9A7C\u5CF0\u547D\u540D
                              - upper         \u5927\u5199\u547D\u540D
                              - lower         \u5C0F\u5199\u547D\u540D
                              - pascal
                              - const
                              \u53EF\u4EE5\u6307\u5B9A\u4E0D\u540C\u7684\u6A21\u578B\u548C\u5217\u7684\u6848\u4F8B\uFF0C\u4F7F\u7528\u4EE5\u4E0B\u683C\u5F0F:
                              &lt;model case&gt;:&lt;column case&gt;
                                                                        [string]
  -S, --storage               SQLite storage. Default:
                              - memory                                  [string]
  -L, --lint-file             ES Lint file path                         [string]
  -l, --ssl                   Enable SSL                               [boolean]
  -r, --protocol              Protocol used: Default:
                              - tcp                                     [string]
  -a, --associations-file     \u5173\u8054\u6587\u4EF6\u8DEF\u5F84\uFF0C\u8868\u548C\u8868\u4E4B\u95F4\u6709\u5173\u8054\u5173\u7CFB\u65F6\u5199\u5728 csv \u6587\u4EF6\u5185 [string]
  -g, --logs                  Enable Sequelize logs                    [boolean]
  -n, --dialect-options       Dialect native options passed as json string.
                                                                        [string]
  -f, --dialect-options-file  Dialect native options passed as json file path.
                                                                        [string]
  -R, --no-strict             Disable strict typescript class declaration.
                                                                       [boolean]    
  -V, --no-views              Disable view generation. Available for: MySQL and MariaDB.
                                                                       [boolean]                             
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u7F16\u5199\u6A21\u578B\u5173\u8054\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u7F16\u5199\u6A21\u578B\u5173\u8054\u6587\u4EF6" aria-hidden="true">#</a> \u7F16\u5199\u6A21\u578B\u5173\u8054\u6587\u4EF6</h2><p>\u5728\u9879\u76EE\u6839\u76EE\u5F55\u4E0B\u7F16\u5199 <code>associations.csv</code> \u6587\u4EF6\uFF0C\u5C06\u8868\u4E0E\u8868\u4E4B\u95F4\u7684\u5173\u8054\u5173\u7CFB\u5199\u5728\u6587\u4EF6\u5185\u3002</p><div class="custom-container danger"><p class="custom-container-title">DANGER</p><p>\u4E0D\u8981\u53CC\u51FB associations.csv \u76F4\u63A5\u6253\u5F00\u6587\u4EF6\u7F16\u5199\u8868\u7684\u5173\u8054\u5173\u7CFB\uFF0C\u8FD9\u6837\u5728\u5199 1:1 \u5173\u7CFB\u7684\u65F6\u5019\uFF0C\u6587\u4EF6\u4F1A\u628A 1:1 \u8F6C\u6210 1:01:00 \u8FD9\u79CD\u65F6\u95F4\u683C\u5F0F\uFF0C\u8FD9\u6837\u5728\u751F\u6210\u6A21\u578B\u65F6\u5C31\u4F1A\u51FA\u9519\u3002\u6211\u4EEC\u5E94\u8BE5\u76F4\u63A5\u5728 VScode \u521B\u5EFA associations.csv \u6587\u4EF6\uFF0C\u7136\u540E\u6253\u5F00\u6587\u4EF6\u7F16\u5199\u5173\u8054\u5173\u7CFB\u3002</p></div><p><strong>\u4E00\u5BF9\u4E00</strong></p><div class="language-cmd ext-cmd line-numbers-mode"><pre class="language-cmd"><code>1:1, left_table_key, right_table_key, left_table, right_table
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>\u4E00\u5BF9\u591A</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>1:N, left_table_key, right_table_key, left_table, right_table
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>\u591A\u5BF9\u591A</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>N:N, left_table_key, right_table_key, left_table, right_table, join_table
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>associations.csv \u6587\u4EF6\u793A\u4F8B</strong></p><p><img src="`+d+`" alt="image-20220814211612734"></p><h2 id="cli-\u547D\u4EE4\u65B9\u5F0F\u751F\u6210" tabindex="-1"><a class="header-anchor" href="#cli-\u547D\u4EE4\u65B9\u5F0F\u751F\u6210" aria-hidden="true">#</a> CLI \u547D\u4EE4\u65B9\u5F0F\u751F\u6210</h2><p>\u4E0B\u9762\u6240\u6709\u547D\u4EE4\u5747\u5728\u9879\u76EE\u6839\u76EE\u5F55\u4E0B\u8FD0\u884C\uFF0C</p><p><strong>1. \u751F\u6210\u5355\u4E2A\u6A21\u578B\u6587\u4EF6</strong></p><p>\u5728 src/models \u76EE\u5F55\u4E0B\u751F\u6210\u6570\u636E\u8868 <code>kol_user</code> \u7684\u6A21\u578B\u6587\u4EF6\uFF0C\u6A21\u578B\u6587\u4EF6\u540D\u4EE5\u9A7C\u5CF0\u540D\u79F0\uFF0C\u5217\u7684\u5B57\u6BB5\u540D\u4EE5\u4E0B\u5212\u7EBF\u547D\u540D</p><div class="language-cmd ext-cmd line-numbers-mode"><pre class="language-cmd"><code>npx stg -D mysql -h localhost -p 3306 -d kol -u root -x root --indices --case camel:underscore --out-dir src/models --clean -t kol_user
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>2. \u751F\u6210\u5E26\u6709\u5173\u8054\u5173\u7CFB\u7684\u6A21\u578B\u6587\u4EF6</strong></p><p>\u5728 src/models \u76EE\u5F55\u4E0B\u751F\u6210\u6570\u636E\u8868 <code>kol_user</code> <code>kol_category</code> <code>kol_user_category</code> \u7684\u6A21\u578B\u6587\u4EF6\uFF0C\u6A21\u578B\u6587\u4EF6\u540D\u4EE5\u9A7C\u5CF0\u540D\u79F0\uFF0C\u5217\u7684\u5B57\u6BB5\u540D\u4EE5\u4E0B\u5212\u7EBF\u547D\u540D\uFF0C\u5E76\u6307\u5B9A\u9879\u76EE\u6839\u76EE\u5F55\u4E0B\u7684\u6A21\u578B\u5173\u8054\u5173\u7CFB\u6587\u4EF6 <code>associations.csv</code>\u3002</p><div class="language-cmd ext-cmd line-numbers-mode"><pre class="language-cmd"><code>npx stg -D mysql -h localhost -p 3306 -d kol -u root -x root --indices --case camel:underscore --out-dir src/models --clean -t kol_user,kol_category,kol_user_category -a associations.csv
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>3. \u751F\u6210\u6240\u6709\u6A21\u578B\u6587\u4EF6</strong></p><div class="language-cmd ext-cmd line-numbers-mode"><pre class="language-cmd"><code>npx stg -D mysql -h localhost -p 3306 -d kol -u root -x root --indices --case camel:underscore --out-dir src/models --clean -a associations.csv
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="\u8FD0\u884C\u6587\u4EF6\u65B9\u5F0F\u751F\u6210" tabindex="-1"><a class="header-anchor" href="#\u8FD0\u884C\u6587\u4EF6\u65B9\u5F0F\u751F\u6210" aria-hidden="true">#</a> \u8FD0\u884C\u6587\u4EF6\u65B9\u5F0F\u751F\u6210</h2><p>\u4E0A\u9762 cli \u65B9\u5F0F\u6BCF\u6B21\u751F\u6210\u90FD\u9700\u8981\u91CD\u65B0\u7F16\u5199\uFF0C\u800C\u4E14\u5BB9\u6613\u5199\u9519\u3002\u5BF9\u4E8E\u8FD9\u70B9\uFF0C\u6211\u4EEC\u53EF\u4EE5\u5C06\u81EA\u52A8\u751F\u6210\u6A21\u578B\u6587\u4EF6\u7684\u547D\u4EE4\u5199\u5728\u6587\u4EF6\u5185\uFF0C\u7136\u540E\u53EA\u9700\u8981\u6267\u884C\u751F\u6210\u6A21\u578B\u7684\u6587\u4EF6\u5C31\u884C\uFF0C\u8FD9\u6837\u5C31\u53EA\u9700\u8981\u5199\u4E00\u6B21\u5C31\u53EF\u4EE5\u4E86\uFF0C\u5E76\u4E14\u4E0D\u4F1A\u51FA\u9519\u3002</p><p>\u5728\u9879\u76EE\u6839\u76EE\u5F55\u4E0B\u7F16\u5199 <code>auto-create-models.ts</code> \u6587\u4EF6\uFF0C\u7136\u540E\u53EA\u9700\u5728\u9879\u76EE\u6839\u76EE\u5F55\u4E0B\u6267\u884C\u547D\u4EE4 <code>ts-node auto-create-models.ts</code> \u5C31\u53EF\u4EE5\u4E86</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span>
  IConfig<span class="token punctuation">,</span>
  ModelBuilder<span class="token punctuation">,</span>
  DialectMySQL<span class="token punctuation">,</span>
<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;sequelize-typescript-generator&#39;</span><span class="token punctuation">;</span>

<span class="token punctuation">(</span><span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> config<span class="token operator">:</span> IConfig <span class="token operator">=</span> <span class="token punctuation">{</span>
    connection<span class="token operator">:</span> <span class="token punctuation">{</span>
      dialect<span class="token operator">:</span> <span class="token string">&#39;mysql&#39;</span><span class="token punctuation">,</span>
      database<span class="token operator">:</span> <span class="token string">&#39;kol&#39;</span><span class="token punctuation">,</span>
      username<span class="token operator">:</span> <span class="token string">&#39;root&#39;</span><span class="token punctuation">,</span>
      password<span class="token operator">:</span> <span class="token string">&#39;root&#39;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    metadata<span class="token operator">:</span> <span class="token punctuation">{</span>
      indices<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">//\u5728\u751F\u6210\u7684\u6A21\u578B\u4E2D\u5305\u542B\u7D22\u5F15\u6CE8\u91CA</span>
      associationsFile<span class="token operator">:</span> <span class="token string">&#39;./associations.csv&#39;</span><span class="token punctuation">,</span>
      <span class="token keyword">case</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        model<span class="token operator">:</span> <span class="token string">&#39;CAMEL&#39;</span><span class="token punctuation">,</span>
        column<span class="token operator">:</span> <span class="token string">&#39;UNDERSCORE&#39;</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    output<span class="token operator">:</span> <span class="token punctuation">{</span>
      clean<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      outDir<span class="token operator">:</span> <span class="token string">&#39;src/models&#39;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    strict<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> dialect <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">DialectMySQL</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> builder <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ModelBuilder</span><span class="token punctuation">(</span>config<span class="token punctuation">,</span> dialect<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">try</span> <span class="token punctuation">{</span>
    <span class="token keyword">await</span> builder<span class="token punctuation">.</span><span class="token function">build</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span><span class="token punctuation">;</span>
    process<span class="token punctuation">.</span><span class="token function">exit</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container danger"><p class="custom-container-title">DANGER</p><p>ts-node \u547D\u4EE4\u6CA1\u5B89\u88C5\u9700\u8981\u5148\u8FD0\u884C npm install -g ts-node \u547D\u4EE4\u5B89\u88C5</p></div>`,36);function k(g,h){const a=o("ExternalLinkIcon");return i(),l("div",null,[r,u,n("p",null,[n("a",v,[m,t(a)])]),b])}var y=e(p,[["render",k],["__file","create-module.html.vue"]]);export{y as default};
