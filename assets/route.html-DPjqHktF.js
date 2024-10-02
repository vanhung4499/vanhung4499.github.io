import{_ as s,o as a,c as e,a as i}from"./app-5QVbWi7Z.js";const l={};function p(t,n){return a(),e("div",null,n[0]||(n[0]=[i(`<h1 id="菜单路由" tabindex="-1"><a class="header-anchor" href="#菜单路由"><span>菜单路由</span></a></h1><p>前端项目基于 vue-element-plus-admin 实现，它的 <a href="https://kailong110120130.gitee.io/vue-element-plus-admin-doc/guide/router.html" target="_blank" rel="noopener noreferrer">路由和侧边栏</a> 是组织起一个后台应用的关键骨架。</p><p>侧边栏和路由是绑定在一起的，所以你只有在 <a href="https://github.com/yudaocode/yudao-ui-admin-vue3/blob/master/src/router/index.ts" target="_blank" rel="noopener noreferrer">@/router/index.js</a> 下面配置对应的路由，侧边栏就能动态的生成了，大大减轻了手动重复编辑侧边栏的工作量。</p><p>当然，这样就需要在配置路由的时候，遵循一些约定的规则。</p><h2 id="_1-路由配置" tabindex="-1"><a class="header-anchor" href="#_1-路由配置"><span><a href="#_1-%E8%B7%AF%E7%94%B1%E9%85%8D%E7%BD%AE">#</a> 1. 路由配置</span></a></h2><p>首先，我们了解一下本项目配置路由时，提供了哪些配置项：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#abb2bf;--shiki-dark:#abb2bf;--shiki-light-bg:#282c34;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code"><code><span class="line"><span>/**</span></span>
<span class="line"><span>* redirect: noredirect        当设置 noredirect 的时候该路由在面包屑导航中不可被点击</span></span>
<span class="line"><span>* name:&#39;router-name&#39;          设定路由的名字，一定要填写不然使用&lt;keep-alive&gt;时会出现各种问题</span></span>
<span class="line"><span>* meta : {</span></span>
<span class="line"><span>    hidden: true              当设置 true 的时候该路由不会再侧边栏出现 如404，login等页面(默认 false)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    alwaysShow: true          当你一个路由下面的 children 声明的路由大于1个时，自动会变成嵌套的模式，</span></span>
<span class="line"><span>                              只有一个时，会将那个子路由当做根路由显示在侧边栏，</span></span>
<span class="line"><span>                              若你想不管路由下面的 children 声明的个数都显示你的根路由，</span></span>
<span class="line"><span>                              你可以设置 alwaysShow: true，这样它就会忽略之前定义的规则，</span></span>
<span class="line"><span>                              一直显示根路由(默认 false)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    title: &#39;title&#39;            设置该路由在侧边栏和面包屑中展示的名字</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    icon: &#39;svg-name&#39;          设置该路由的图标</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    noCache: true             如果设置为true，则不会被 &lt;keep-alive&gt; 缓存(默认 false)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    breadcrumb: false         如果设置为false，则不会在breadcrumb面包屑中显示(默认 true)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    affix: true               如果设置为true，则会一直固定在tag项中(默认 false)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    noTagsView: true          如果设置为true，则不会出现在tag中(默认 false)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    activeMenu: &#39;/dashboard&#39;  显示高亮的路由路径</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    followAuth: &#39;/dashboard&#39;  跟随哪个路由进行权限过滤</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    canTo: true               设置为true即使hidden为true，也依然可以进行路由跳转(默认 false)</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>**/</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_1-1-普通示例" tabindex="-1"><a class="header-anchor" href="#_1-1-普通示例"><span><a href="#_1-1-%E6%99%AE%E9%80%9A%E7%A4%BA%E4%BE%8B">#</a> 1.1 普通示例</span></a></h2><p>注意事项：</p><ul><li>整个项目所有路由 <code>name</code> 不能重复</li><li>所有的多级路由最终都会转成二级路由，所以不能内嵌子路由</li><li>除了 <code>layout</code> 对应的 <code>path</code> 前面需要加 <code>/</code>，其余子路由都不要以 <code>/</code> 开头</li></ul><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#abb2bf;--shiki-dark:#abb2bf;--shiki-light-bg:#282c34;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code"><code><span class="line"><span>{</span></span>
<span class="line"><span>  path: &#39;/level&#39;,</span></span>
<span class="line"><span>  component: Layout,</span></span>
<span class="line"><span>  redirect: &#39;/level/menu1/menu1-1/menu1-1-1&#39;,</span></span>
<span class="line"><span>  name: &#39;Level&#39;,</span></span>
<span class="line"><span>  meta: {</span></span>
<span class="line"><span>    title: t(&#39;router.level&#39;),</span></span>
<span class="line"><span>    icon: &#39;carbon:skill-level-advanced&#39;</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  children: [</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>      path: &#39;menu1&#39;,</span></span>
<span class="line"><span>      name: &#39;Menu1&#39;,</span></span>
<span class="line"><span>      component: getParentLayout(),</span></span>
<span class="line"><span>      redirect: &#39;/level/menu1/menu1-1/menu1-1-1&#39;,</span></span>
<span class="line"><span>      meta: {</span></span>
<span class="line"><span>        title: t(&#39;router.menu1&#39;)</span></span>
<span class="line"><span>      },</span></span>
<span class="line"><span>      children: [</span></span>
<span class="line"><span>        {</span></span>
<span class="line"><span>          path: &#39;menu1-1&#39;,</span></span>
<span class="line"><span>          name: &#39;Menu11&#39;,</span></span>
<span class="line"><span>          component: getParentLayout(),</span></span>
<span class="line"><span>          redirect: &#39;/level/menu1/menu1-1/menu1-1-1&#39;,</span></span>
<span class="line"><span>          meta: {</span></span>
<span class="line"><span>            title: t(&#39;router.menu11&#39;),</span></span>
<span class="line"><span>            alwaysShow: true</span></span>
<span class="line"><span>          },</span></span>
<span class="line"><span>          children: [</span></span>
<span class="line"><span>            {</span></span>
<span class="line"><span>              path: &#39;menu1-1-1&#39;,</span></span>
<span class="line"><span>              name: &#39;Menu111&#39;,</span></span>
<span class="line"><span>              component: () =&gt; import(&#39;@/views/Level/Menu111.vue&#39;),</span></span>
<span class="line"><span>              meta: {</span></span>
<span class="line"><span>                title: t(&#39;router.menu111&#39;)</span></span>
<span class="line"><span>              }</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>          ]</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span>        {</span></span>
<span class="line"><span>          path: &#39;menu1-2&#39;,</span></span>
<span class="line"><span>          name: &#39;Menu12&#39;,</span></span>
<span class="line"><span>          component: () =&gt; import(&#39;@/views/Level/Menu12.vue&#39;),</span></span>
<span class="line"><span>          meta: {</span></span>
<span class="line"><span>            title: t(&#39;router.menu12&#39;)</span></span>
<span class="line"><span>          }</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>      ]</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>      path: &#39;menu2&#39;,</span></span>
<span class="line"><span>      name: &#39;Menu2Demo&#39;,</span></span>
<span class="line"><span>      component: () =&gt; import(&#39;@/views/Level/Menu2.vue&#39;),</span></span>
<span class="line"><span>      meta: {</span></span>
<span class="line"><span>        title: t(&#39;router.menu2&#39;)</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  ]</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-2-外链示例" tabindex="-1"><a class="header-anchor" href="#_1-2-外链示例"><span><a href="#_1-2-%E5%A4%96%E9%93%BE%E7%A4%BA%E4%BE%8B">#</a> 1.2 外链示例</span></a></h3><p>只需要将 <code>path</code> 设置为需要跳转的 HTTP 地址即可。</p><div class="language-" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#abb2bf;--shiki-dark:#abb2bf;--shiki-light-bg:#282c34;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code"><code><span class="line"><span>{</span></span>
<span class="line"><span>  path: &#39;/external-link&#39;,</span></span>
<span class="line"><span>  component: Layout,</span></span>
<span class="line"><span>  meta: {</span></span>
<span class="line"><span>    name: &#39;ExternalLink&#39;</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  children: [</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>      path: &#39;https://www.iocoder.cn&#39;,</span></span>
<span class="line"><span>      meta: { name: &#39;Link&#39;, title: &#39;芋道源码&#39; }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  ]</span></span>
<span class="line"><span>}</span></span></code></pre></div><h2 id="_2-路由" tabindex="-1"><a class="header-anchor" href="#_2-路由"><span><a href="#_2-%E8%B7%AF%E7%94%B1">#</a> 2. 路由</span></a></h2><p>项目的路由分为两种：静态路由、动态路由。</p><h3 id="_2-1-静态路由" tabindex="-1"><a class="header-anchor" href="#_2-1-静态路由"><span><a href="#_2-1-%E9%9D%99%E6%80%81%E8%B7%AF%E7%94%B1">#</a> 2.1 静态路由</span></a></h3><p>静态路由，代表那些不需要动态判断权限的路由，如登录页、404、个人中心等通用页面。</p><p>在 <a href="https://github.com/yudaocode/yudao-ui-admin-vue3/tree/master/src/router/modules/remaining.ts" target="_blank" rel="noopener noreferrer">@/router/modules/remaining.ts</a> 的 <code>remainingRouter</code>，就是配置对应的公共路由。如下图所示：</p><figure><img src="https://cloud.iocoder.cn/img/Vue3/菜单路由/01.png" alt="静态路由" tabindex="0" loading="lazy"><figcaption>静态路由</figcaption></figure><h3 id="_2-2-动态路由" tabindex="-1"><a class="header-anchor" href="#_2-2-动态路由"><span><a href="#_2-2-%E5%8A%A8%E6%80%81%E8%B7%AF%E7%94%B1">#</a> 2.2 动态路由</span></a></h3><p>动态路由，代表那些需要根据用户动态判断权限，并通过 <a href="https://router.vuejs.org/guide/advanced/dynamic-routing.html#adding-routes" target="_blank" rel="noopener noreferrer">addRoutes</a> 动态添加的页面，如用户管理、角色管理等功能页面。</p><p>在用户登录成功后，会触发 <a href="https://github.com/yudaocode/yudao-ui-admin-vue3/blob/master/src/store/modules/permission.ts#L35-L66" target="_blank" rel="noopener noreferrer"><code>@/store/modules/permission.ts</code></a> 请求后端的菜单 RESTful API 接口，获取用户<strong>有权限</strong>的菜单列表，并转化添加到路由中。如下图所示：</p><figure><img src="https://cloud.iocoder.cn/img/Vue3/菜单路由/02.png" alt="动态路由" tabindex="0" loading="lazy"><figcaption>动态路由</figcaption></figure><p>友情提示：</p><ol><li>动态路由可以在 [系统管理 -&gt; 菜单管理] 进行新增和修改操作，请求的后端 RESTful API 接口是 <a href="https://github.com/YunaiV/ruoyi-vue-pro/blob/master/yudao-module-system/yudao-module-system-biz/src/main/java/cn/iocoder/yudao/module/system/controller/admin/auth/AuthController.java#L107-L110" target="_blank" rel="noopener noreferrer"><code>/admin-api/system/auth/get-permission-info</code></a></li><li>动态路由在生产环境下会默认使用路由懒加载，实现方式参考 <a href="https://github.com/yudaocode/yudao-ui-admin-vue3/blob/master/src/utils/routerHelper.ts#L6" target="_blank" rel="noopener noreferrer">import.meta.glob(&#39;../views/**/*.{vue,tsx}&#39;)</a> 方法的判断<br> 补充说明：</li></ol><p>最新的代码，部分逻辑重构到 <a href="https://github.com/yudaocode/yudao-ui-admin-vue3/blob/master/src/permission.ts#L44-L48" target="_blank" rel="noopener noreferrer"><code>@/permission.ts</code></a></p><h3 id="_2-3-路由跳转" tabindex="-1"><a class="header-anchor" href="#_2-3-路由跳转"><span><a href="#_2-3-%E8%B7%AF%E7%94%B1%E8%B7%B3%E8%BD%AC">#</a> 2.3 路由跳转</span></a></h3><p>使用 <code>router.push</code> 方法，可以实现跳转到不同的页面。</p><div class="language-" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#abb2bf;--shiki-dark:#abb2bf;--shiki-light-bg:#282c34;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code"><code><span class="line"><span>const { push } = useRouter()</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 简单跳转</span></span>
<span class="line"><span>push(&#39;/job/job-log&#39;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 跳转页面并设置请求参数，使用 \`query\` 属性</span></span>
<span class="line"><span>push(&#39;/bpm/process-instance/detail?id=&#39; + row.processInstance.id)</span></span></code></pre></div><h2 id="_3-菜单管理" tabindex="-1"><a class="header-anchor" href="#_3-菜单管理"><span><a href="#_3-%E8%8F%9C%E5%8D%95%E7%AE%A1%E7%90%86">#</a> 3. 菜单管理</span></a></h2><p>项目的菜单在 [系统管理 -&gt; 菜单管理] 进行管理，支持<strong>无限</strong>层级，提供目录、菜单、按钮三种类型。如下图所示：</p><figure><img src="https://cloud.iocoder.cn/img/Vue3/菜单路由/03.png" alt="系统管理 -&gt; 菜单管理" tabindex="0" loading="lazy"><figcaption>系统管理 -&gt; 菜单管理</figcaption></figure><p>菜单可在 [系统管理 -&gt; 角色管理] 被分配给角色。如下图所示：</p><figure><img src="https://cloud.iocoder.cn/img/Vue3/菜单路由/04.png" alt="系统管理 -&gt; 角色管理" tabindex="0" loading="lazy"><figcaption>系统管理 -&gt; 角色管理</figcaption></figure><h3 id="_3-1-新增目录" tabindex="-1"><a class="header-anchor" href="#_3-1-新增目录"><span><a href="#_3-1-%E6%96%B0%E5%A2%9E%E7%9B%AE%E5%BD%95">#</a> 3.1 新增目录</span></a></h3><p>① 大多数情况下，目录是作为菜单的【分类】：</p><figure><img src="https://cloud.iocoder.cn/img/Vue3/菜单路由/05.png" alt="新增目录 —— 菜单的分类" tabindex="0" loading="lazy"><figcaption>新增目录 —— 菜单的分类</figcaption></figure><p>② 目录也提供实现【外链】的能力：</p><figure><img src="https://cloud.iocoder.cn/img/Vue3/菜单路由/06.png" alt="新增目录 —— 外链" tabindex="0" loading="lazy"><figcaption>新增目录 —— 外链</figcaption></figure><h3 id="_3-2-新增菜单" tabindex="-1"><a class="header-anchor" href="#_3-2-新增菜单"><span><a href="#_3-2-%E6%96%B0%E5%A2%9E%E8%8F%9C%E5%8D%95">#</a> 3.2 新增菜单</span></a></h3><figure><img src="https://cloud.iocoder.cn/img/Vue3/菜单路由/07.png" alt="新增菜单" tabindex="0" loading="lazy"><figcaption>新增菜单</figcaption></figure><h3 id="_3-3-新增按钮" tabindex="-1"><a class="header-anchor" href="#_3-3-新增按钮"><span><a href="#_3-3-%E6%96%B0%E5%A2%9E%E6%8C%89%E9%92%AE">#</a> 3.3 新增按钮</span></a></h3><figure><img src="https://cloud.iocoder.cn/img/Vue3/菜单路由/08.png" alt="新增按钮" tabindex="0" loading="lazy"><figcaption>新增按钮</figcaption></figure><h2 id="_4-权限控制" tabindex="-1"><a class="header-anchor" href="#_4-权限控制"><span><a href="#_4-%E6%9D%83%E9%99%90%E6%8E%A7%E5%88%B6">#</a> 4. 权限控制</span></a></h2><p>前端通过权限控制，隐藏用户没有权限的按钮等，实现功能级别的权限。</p><p>友情提示：前端的权限控制，主要是提升用户体验，避免操作后发现没有权限。</p><p>最终在请求到后端时，还是会进行一次权限的校验。</p><h3 id="_4-1-v-haspermi-指令" tabindex="-1"><a class="header-anchor" href="#_4-1-v-haspermi-指令"><span><a href="#_4-1-v-haspermi-%E6%8C%87%E4%BB%A4">#</a> 4.1 v-hasPermi 指令</span></a></h3><p><a href="https://github.com/yudaocode/yudao-ui-admin-vue3/blob/master/src/directives/permission/hasPermi.ts" target="_blank" rel="noopener noreferrer"><code>v-hasPermi</code></a> 指令，基于权限字符，进行权限的控制。</p><div class="language-" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#abb2bf;--shiki-dark:#abb2bf;--shiki-light-bg:#282c34;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code"><code><span class="line"><span>&lt;!-- 单个 --&gt;</span></span>
<span class="line"><span>&lt;el-button v-hasPermi=&quot;[&#39;system:user:create&#39;]&quot;&gt;存在权限字符串才能看到&lt;/el-button&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;!-- 多个，满足任一一个即可 --&gt;</span></span>
<span class="line"><span>&lt;el-button v-hasPermi=&quot;[&#39;system:user:create&#39;, &#39;system:user:update&#39;]&quot;&gt;包含权限字符串才能看到&lt;/el-button&gt;</span></span></code></pre></div><h3 id="_4-2-v-hasrole-指令" tabindex="-1"><a class="header-anchor" href="#_4-2-v-hasrole-指令"><span><a href="#_4-2-v-hasrole-%E6%8C%87%E4%BB%A4">#</a> 4.2 v-hasRole 指令</span></a></h3><p><a href="https://github.com/yudaocode/yudao-ui-admin-vue3/blob/master/src/directives/permission/hasRole.ts" target="_blank" rel="noopener noreferrer"><code>v-hasRole</code></a> 指令，基于角色标识，机进行的控制。</p><div class="language-" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#abb2bf;--shiki-dark:#abb2bf;--shiki-light-bg:#282c34;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code"><code><span class="line"><span>&lt;!-- 单个 --&gt;</span></span>
<span class="line"><span>&lt;el-button v-hasRole=&quot;[&#39;admin&#39;]&quot;&gt;管理员才能看到&lt;/el-button&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;!-- 多个，满足任一一个即可 --&gt;</span></span>
<span class="line"><span>&lt;el-button v-hasRole=&quot;[&#39;role1&#39;, &#39;role2&#39;]&quot;&gt;包含角色才能看到&lt;/el-button&gt;</span></span></code></pre></div><h3 id="_4-3-结合-v-if-指令" tabindex="-1"><a class="header-anchor" href="#_4-3-结合-v-if-指令"><span><a href="#_4-3-%E7%BB%93%E5%90%88-v-if-%E6%8C%87%E4%BB%A4">#</a> 4.3 结合 v-if 指令</span></a></h3><p>在某些情况下，它是不适合使用 <code>v-hasPermi</code> 或 <code>v-hasRole</code> 指令，如元素标签组件。此时，只能通过手动设置 <code>v-if</code>，通过使用全局权限判断函数，用法是基本一致的。</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#abb2bf;--shiki-dark:#abb2bf;--shiki-light-bg:#282c34;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code"><code><span class="line"><span>&lt;template&gt;</span></span>
<span class="line"><span>  &lt;el-tabs&gt;</span></span>
<span class="line"><span>    &lt;el-tab-pane v-if=&quot;checkPermi([&#39;system:user:create&#39;])&quot; label=&quot;用户管理&quot; name=&quot;user&quot;&gt;用户管理&lt;/el-tab-pane&gt;</span></span>
<span class="line"><span>    &lt;el-tab-pane v-if=&quot;checkPermi([&#39;system:user:create&#39;, &#39;system:user:update&#39;])&quot; label=&quot;参数管理&quot; name=&quot;menu&quot;&gt;参数管理&lt;/el-tab-pane&gt;</span></span>
<span class="line"><span>    &lt;el-tab-pane v-if=&quot;checkRole([&#39;admin&#39;])&quot; label=&quot;角色管理&quot; name=&quot;role&quot;&gt;角色管理&lt;/el-tab-pane&gt;</span></span>
<span class="line"><span>    &lt;el-tab-pane v-if=&quot;checkRole([&#39;admin&#39;,&#39;common&#39;])&quot; label=&quot;定时任务&quot; name=&quot;job&quot;&gt;定时任务&lt;/el-tab-pane&gt;</span></span>
<span class="line"><span>   &lt;/el-tabs&gt;</span></span>
<span class="line"><span>&lt;/template&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;script&gt;</span></span>
<span class="line"><span>import { checkPermi, checkRole } from &quot;@/utils/permission&quot;; // 权限判断函数</span></span>
<span class="line"><span></span></span>
<span class="line"><span>export default{</span></span>
<span class="line"><span>   methods: {</span></span>
<span class="line"><span>    checkPermi,</span></span>
<span class="line"><span>    checkRole</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>&lt;/script&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_5-页面缓存" tabindex="-1"><a class="header-anchor" href="#_5-页面缓存"><span><a href="#_5-%E9%A1%B5%E9%9D%A2%E7%BC%93%E5%AD%98">#</a> 5. 页面缓存</span></a></h2><p>开启缓存有 2 个条件</p><ul><li>路由设置 <code>name</code>，且不能重复</li><li>路由对应的组件加上 <code>name</code>，与路由设置的 <code>name</code> 保持一致</li></ul><p>友情提示：页面缓存是什么？</p><p>简单来说，Tab 切换时，开启页面缓存的 Tab 保持原本的状态，不进行刷新。</p><p>详细可见 <a href="https://vuejs.org/guide/built-ins/keep-alive.html" target="_blank" rel="noopener noreferrer">Vue 文档 —— KeepAlive</a></p><h3 id="_5-1-静态路由的示例" tabindex="-1"><a class="header-anchor" href="#_5-1-静态路由的示例"><span><a href="#_5-1-%E9%9D%99%E6%80%81%E8%B7%AF%E7%94%B1%E7%9A%84%E7%A4%BA%E4%BE%8B">#</a> 5.1 静态路由的示例</span></a></h3><p>① router 路由的 <code>name</code> 声明如下：</p><div class="language-" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#abb2bf;--shiki-dark:#abb2bf;--shiki-light-bg:#282c34;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code"><code><span class="line"><span>{</span></span>
<span class="line"><span>    path: &#39;menu2&#39;,</span></span>
<span class="line"><span>    name: &#39;Menu2&#39;,</span></span>
<span class="line"><span>    component: () =&gt; import(&#39;@/views/Level/Menu2.vue&#39;),</span></span>
<span class="line"><span>    meta: {</span></span>
<span class="line"><span>        title: t(&#39;router.menu2&#39;)</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>② view component 的 <code>name</code> 声明如下：</p><div class="language-" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#abb2bf;--shiki-dark:#abb2bf;--shiki-light-bg:#282c34;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code"><code><span class="line"><span>&lt;script setup lang=&quot;ts&quot;&gt;</span></span>
<span class="line"><span>    defineOptions({</span></span>
<span class="line"><span>    name: &#39;Menu2&#39;</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span>&lt;/script&gt;</span></span></code></pre></div><p>注意：</p><p><code>keep-alive</code> 生效的前提是：需要将路由的 <code>name</code> 属性及对应的页面的 <code>name</code> 设置成一样。</p><p>因为：<code>include -</code> 字符串或正则表达式，只有名称匹配的组件会被缓存</p><h3 id="_5-2-动态路由的示例" tabindex="-1"><a class="header-anchor" href="#_5-2-动态路由的示例"><span><a href="#_5-2-%E5%8A%A8%E6%80%81%E8%B7%AF%E7%94%B1%E7%9A%84%E7%A4%BA%E4%BE%8B">#</a> 5.2 动态路由的示例</span></a></h3><figure><img src="https://cloud.iocoder.cn/img/Vue3/菜单路由/09.png" alt="示例" tabindex="0" loading="lazy"><figcaption>示例</figcaption></figure>`,73)]))}const d=s(l,[["render",p],["__file","route.html.vue"]]),c=JSON.parse('{"path":"/project/yudao-cloud/vue3/route.html","title":"菜单路由","lang":"en-US","frontmatter":{"title":"菜单路由","tags":["project","java","spring-boot","spring-cloud"],"categories":["project"],"order":155,"feed":false,"seo":false,"head":[]},"headers":[{"level":2,"title":"# 1. 路由配置","slug":"_1-路由配置","link":"#_1-路由配置","children":[]},{"level":2,"title":"# 1.1 普通示例","slug":"_1-1-普通示例","link":"#_1-1-普通示例","children":[{"level":3,"title":"# 1.2 外链示例","slug":"_1-2-外链示例","link":"#_1-2-外链示例","children":[]}]},{"level":2,"title":"# 2. 路由","slug":"_2-路由","link":"#_2-路由","children":[{"level":3,"title":"# 2.1 静态路由","slug":"_2-1-静态路由","link":"#_2-1-静态路由","children":[]},{"level":3,"title":"# 2.2 动态路由","slug":"_2-2-动态路由","link":"#_2-2-动态路由","children":[]},{"level":3,"title":"# 2.3 路由跳转","slug":"_2-3-路由跳转","link":"#_2-3-路由跳转","children":[]}]},{"level":2,"title":"# 3. 菜单管理","slug":"_3-菜单管理","link":"#_3-菜单管理","children":[{"level":3,"title":"# 3.1 新增目录","slug":"_3-1-新增目录","link":"#_3-1-新增目录","children":[]},{"level":3,"title":"# 3.2 新增菜单","slug":"_3-2-新增菜单","link":"#_3-2-新增菜单","children":[]},{"level":3,"title":"# 3.3 新增按钮","slug":"_3-3-新增按钮","link":"#_3-3-新增按钮","children":[]}]},{"level":2,"title":"# 4. 权限控制","slug":"_4-权限控制","link":"#_4-权限控制","children":[{"level":3,"title":"# 4.1 v-hasPermi 指令","slug":"_4-1-v-haspermi-指令","link":"#_4-1-v-haspermi-指令","children":[]},{"level":3,"title":"# 4.2 v-hasRole 指令","slug":"_4-2-v-hasrole-指令","link":"#_4-2-v-hasrole-指令","children":[]},{"level":3,"title":"# 4.3 结合 v-if 指令","slug":"_4-3-结合-v-if-指令","link":"#_4-3-结合-v-if-指令","children":[]}]},{"level":2,"title":"# 5. 页面缓存","slug":"_5-页面缓存","link":"#_5-页面缓存","children":[{"level":3,"title":"# 5.1 静态路由的示例","slug":"_5-1-静态路由的示例","link":"#_5-1-静态路由的示例","children":[]},{"level":3,"title":"# 5.2 动态路由的示例","slug":"_5-2-动态路由的示例","link":"#_5-2-动态路由的示例","children":[]}]}],"git":{"createdTime":1720365235000,"updatedTime":1720365235000,"contributors":[{"name":"Hung Nguyen Van","email":"vanhung4499@gmail.com","commits":1}]},"readingTime":{"minutes":7.12,"words":2135},"filePathRelative":"project/yudao-cloud/vue3/route.md","localizedDate":"July 7, 2024"}');export{d as comp,c as data};
