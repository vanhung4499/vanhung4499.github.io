import{_ as a,o as s,c as n,a as e}from"./app-BRTHG7K9.js";const p={},o=e(`<h1 id="通用方法" tabindex="-1"><a class="header-anchor" href="#通用方法"><span>通用方法</span></a></h1><p>本小节，分享前端项目的常用方法。</p><h2 id="_1-tab-对象" tabindex="-1"><a class="header-anchor" href="#_1-tab-对象"><span><a href="#_1-tab-%E5%AF%B9%E8%B1%A1">#</a> 1. <code>$tab</code> 对象</span></a></h2><p><code>@tab</code> 对象，由 <a href="https://github.com/yudaocode/yudao-ui-admin-vue2/blob/master/src/plugins/tab.js" target="_blank" rel="noopener noreferrer"><code>plugins/tab.js</code></a> 实现，用于 Tab 标签相关的操作。它有如下方法：</p><p>① 打开页签</p><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>this.$tab.openPage(&quot;用户管理&quot;, &quot;/system/user&quot;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>this.$tab.openPage(&quot;用户管理&quot;, &quot;/system/user&quot;).then(() =&gt; {</span></span>
<span class="line"><span>  // 执行结束的逻辑</span></span>
<span class="line"><span>})</span></span></code></pre></div><p>② 修改页签</p><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>const obj = Object.assign({}, this.$route, { title: &quot;自定义标题&quot; })</span></span>
<span class="line"><span>this.$tab.updatePage(obj);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>this.$tab.updatePage(obj).then(() =&gt; {</span></span>
<span class="line"><span>    // 执行结束的逻辑</span></span>
<span class="line"><span>})</span></span></code></pre></div><p>③ 关闭页签</p><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>// 关闭当前 tab 页签，打开新页签</span></span>
<span class="line"><span>const obj = { path: &quot;/system/user&quot; };</span></span>
<span class="line"><span>this.$tab.closeOpenPage(obj);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 关闭当前页签，回到首页</span></span>
<span class="line"><span>this.$tab.closePage();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 关闭指定页签</span></span>
<span class="line"><span>const obj = { path: &quot;/system/user&quot;, name: &quot;User&quot; };</span></span>
<span class="line"><span>this.$tab.closePage(obj);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>this.$tab.closePage(obj).then(() =&gt; {</span></span>
<span class="line"><span>    // 执行结束的逻辑</span></span>
<span class="line"><span>})</span></span></code></pre></div><p>④ 刷新页签</p><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>// 刷新当前页签</span></span>
<span class="line"><span>this.$tab.refreshPage();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 刷新指定页签</span></span>
<span class="line"><span>const obj = { path: &quot;/system/user&quot;, name: &quot;User&quot; };</span></span>
<span class="line"><span>this.$tab.refreshPage(obj);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>this.$tab.refreshPage(obj).then(() =&gt; {</span></span>
<span class="line"><span>    // 执行结束的逻辑</span></span>
<span class="line"><span>})</span></span></code></pre></div><p>⑤ 关闭所有页签</p><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>this.$tab.closeAllPage();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>this.$tab.closeAllPage().then(() =&gt; {</span></span>
<span class="line"><span>    // 执行结束的逻辑</span></span>
<span class="line"><span>})</span></span></code></pre></div><p>⑥ 关闭左侧页签</p><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>this.$tab.closeLeftPage();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const obj = { path: &quot;/system/user&quot;, name: &quot;User&quot; };</span></span>
<span class="line"><span>this.$tab.closeLeftPage(obj);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>this.$tab.closeLeftPage(obj).then(() =&gt; {</span></span>
<span class="line"><span>    // 执行结束的逻辑</span></span>
<span class="line"><span>})</span></span></code></pre></div><p>⑦ 关闭右侧页签</p><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>this.$tab.closeRightPage();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const obj = { path: &quot;/system/user&quot;, name: &quot;User&quot; };</span></span>
<span class="line"><span>this.$tab.closeRightPage(obj);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>this.$tab.closeRightPage(obj).then(() =&gt; {</span></span>
<span class="line"><span>    // 执行结束的逻辑</span></span>
<span class="line"><span>})</span></span></code></pre></div><p>⑧ 关闭其它页签</p><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>this.$tab.closeOtherPage();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const obj = { path: &quot;/system/user&quot;, name: &quot;User&quot; };</span></span>
<span class="line"><span>this.$tab.closeOtherPage(obj);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>this.$tab.closeOtherPage(obj).then(() =&gt; {</span></span>
<span class="line"><span>    // 执行结束的逻辑</span></span>
<span class="line"><span>})</span></span></code></pre></div><h2 id="_2-modal-对象" tabindex="-1"><a class="header-anchor" href="#_2-modal-对象"><span><a href="#_2-modal-%E5%AF%B9%E8%B1%A1">#</a> 2. <code>$modal</code> 对象</span></a></h2><p><code>@modal</code> 对象，由 <a href="https://github.com/yudaocode/yudao-ui-admin-vue2/blob/master/src/plugins/modal.js" target="_blank" rel="noopener noreferrer"><code>plugins/modal.js</code></a> 实现，用于做消息提示、通知提示、对话框提醒、二次确认、遮罩等。它有如下方法：</p><p>① 提供成功、警告和错误等反馈信息</p><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>this.$modal.msg(&quot;默认反馈&quot;);</span></span>
<span class="line"><span>this.$modal.msgError(&quot;错误反馈&quot;);</span></span>
<span class="line"><span>this.$modal.msgSuccess(&quot;成功反馈&quot;);</span></span>
<span class="line"><span>this.$modal.msgWarning(&quot;警告反馈&quot;);</span></span></code></pre></div><p>② 提供成功、警告和错误等提示信息</p><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>this.$modal.alert(&quot;默认提示&quot;);</span></span>
<span class="line"><span>this.$modal.alertError(&quot;错误提示&quot;);</span></span>
<span class="line"><span>this.$modal.alertSuccess(&quot;成功提示&quot;);</span></span>
<span class="line"><span>this.$modal.alertWarning(&quot;警告提示&quot;);</span></span></code></pre></div><p>③ 提供成功、警告和错误等通知信息</p><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>this.$modal.notify(&quot;默认通知&quot;);</span></span>
<span class="line"><span>this.$modal.notifyError(&quot;错误通知&quot;);</span></span>
<span class="line"><span>this.$modal.notifySuccess(&quot;成功通知&quot;);</span></span>
<span class="line"><span>this.$modal.notifyWarning(&quot;警告通知&quot;);</span></span></code></pre></div><p>④ 提供确认窗体信息</p><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>this.$modal.confirm(&#39;确认信息&#39;).then(function() {</span></span>
<span class="line"><span>    // ...</span></span>
<span class="line"><span>}).then(() =&gt; {</span></span>
<span class="line"><span>    // ...</span></span>
<span class="line"><span>}).catch(() =&gt; {});</span></span></code></pre></div><p>⑤ 提供遮罩层信息</p><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>// 打开遮罩层</span></span>
<span class="line"><span>this.$modal.loading(&quot;正在导出数据，请稍后...&quot;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 关闭遮罩层</span></span>
<span class="line"><span>this.$modal.closeLoading();</span></span></code></pre></div><h2 id="_3-auth-对象" tabindex="-1"><a class="header-anchor" href="#_3-auth-对象"><span><a href="#_3-auth-%E5%AF%B9%E8%B1%A1">#</a> 3. <code>$auth</code> 对象</span></a></h2><p><code>@auth</code> 对象，由 <a href="https://github.com/yudaocode/yudao-ui-admin-vue2/blob/master/src/plugins/auth.js" target="_blank" rel="noopener noreferrer"><code>plugins/auth.js</code></a> 实现，用于验证用户是否拥有某（些）权限或角色。它有如下方法：</p><p>① 验证用户权限</p><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>// 验证用户是否具备某权限</span></span>
<span class="line"><span>this.$auth.hasPermi(&quot;system:user:add&quot;);</span></span>
<span class="line"><span>// 验证用户是否含有指定权限，只需包含其中一个</span></span>
<span class="line"><span>this.$auth.hasPermiOr([&quot;system:user:add&quot;, &quot;system:user:update&quot;]);</span></span>
<span class="line"><span>// 验证用户是否含有指定权限，必须全部拥有</span></span>
<span class="line"><span>this.$auth.hasPermiAnd([&quot;system:user:add&quot;, &quot;system:user:update&quot;]);</span></span></code></pre></div><p>② 验证用户角色</p><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>// 验证用户是否具备某角色</span></span>
<span class="line"><span>this.$auth.hasRole(&quot;admin&quot;);</span></span>
<span class="line"><span>// 验证用户是否含有指定角色，只需包含其中一个</span></span>
<span class="line"><span>this.$auth.hasRoleOr([&quot;admin&quot;, &quot;common&quot;]);</span></span>
<span class="line"><span>// 验证用户是否含有指定角色，必须全部拥有</span></span>
<span class="line"><span>this.$auth.hasRoleAnd([&quot;admin&quot;, &quot;common&quot;]);</span></span></code></pre></div><h2 id="_4-cache-对象" tabindex="-1"><a class="header-anchor" href="#_4-cache-对象"><span><a href="#_4-cache-%E5%AF%B9%E8%B1%A1">#</a> 4. <code>$cache</code> 对象</span></a></h2><p><code>@auth</code> 对象，由 <a href="https://github.com/yudaocode/yudao-ui-admin-vue2/blob/master/src/plugins/cache.js" target="_blank" rel="noopener noreferrer"><code>plugins/cache.js</code></a> 实现，基于 session 或 local 实现不同级别的缓存。它有如下方法：</p><table><thead><tr><th>对象名称</th><th>缓存类型</th></tr></thead><tbody><tr><td>session</td><td>会话级缓存，通过 <a href="https://developer.mozilla.org/zh-CN/docs/Web/API/Window/sessionStorage" target="_blank" rel="noopener noreferrer">sessionStorage</a> 实现</td></tr><tr><td>local</td><td>本地级缓存，通过 <a href="https://developer.mozilla.org/zh-CN/docs/Web/API/Window/localStorage" target="_blank" rel="noopener noreferrer">localStorage</a> 实现</td></tr></tbody></table><p>① 读写 String 缓存</p><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>// local 普通值</span></span>
<span class="line"><span>this.$cache.local.set(&#39;key&#39;, &#39;local value&#39;)</span></span>
<span class="line"><span>console.log(this.$cache.local.get(&#39;key&#39;)) // 输出 &#39;local value&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// session 普通值</span></span>
<span class="line"><span>this.$cache.session.set(&#39;key&#39;, &#39;session value&#39;)</span></span>
<span class="line"><span>console.log(this.$cache.session.get(&#39;key&#39;)) // 输出 &#39;session value&#39;</span></span></code></pre></div><p>② 读写 JSON 缓存 // local JSON值</p><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>this.$cache.local.setJSON(&#39;jsonKey&#39;, { localProp: 1 })</span></span>
<span class="line"><span>console.log(this.$cache.local.getJSON(&#39;jsonKey&#39;)) // 输出 &#39;{localProp: 1}&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// session JSON值</span></span>
<span class="line"><span>this.$cache.session.setJSON(&#39;jsonKey&#39;, { sessionProp: 1 })</span></span>
<span class="line"><span>console.log(this.$cache.session.getJSON(&#39;jsonKey&#39;)) // 输出 &#39;{sessionProp: 1}&#39;</span></span></code></pre></div><p>③ 删除缓存</p><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>this.$cache.local.remove(&#39;key&#39;)</span></span>
<span class="line"><span>this.$cache.session.remove(&#39;key&#39;)</span></span></code></pre></div><h2 id="_5-download-对象" tabindex="-1"><a class="header-anchor" href="#_5-download-对象"><span><a href="#_5-download-%E5%AF%B9%E8%B1%A1">#</a> 5. <code>$download</code> 对象</span></a></h2><p><code>$download</code> 对象，由 <a href="https://github.com/yudaocode/yudao-ui-admin-vue2/blob/master/src/plugins/download.js" target="_blank" rel="noopener noreferrer"><code>plugins/download.js</code></a> 实现，用于各种类型的文件下载。它有如下方法：</p><p>方法列表</p><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>this.$download.excel(data, fileName);</span></span>
<span class="line"><span>this.$download.word(data, fileName);</span></span>
<span class="line"><span>this.$download.zip(data, fileName);</span></span>
<span class="line"><span>this.$download.html(data, fileName);</span></span>
<span class="line"><span>this.$download.markdown(data, fileName);</span></span></code></pre></div><p>在 <a href="https://github.com/yudaocode/yudao-ui-admin-vue2/blob/master/src/views/system/user/index.vue#L581-L594" target="_blank" rel="noopener noreferrer"><code>user/index.vue</code></a> 页面中，导出 Excel 文件的代码如下图：</p><figure><img src="https://doc.iocoder.cn/img/Vue2/通用方法/01.png" alt="导出 Excel 文件" tabindex="0" loading="lazy"><figcaption>导出 Excel 文件</figcaption></figure>`,53),l=[o];function t(i,c){return s(),n("div",null,l)}const r=a(p,[["render",t],["__file","util.html.vue"]]),h=JSON.parse('{"path":"/project/rouyi-vue-pro/vue2/util.html","title":"通用方法","lang":"en-US","frontmatter":{"title":"通用方法","tags":["project","java","spring-boot","spring-cloud"],"categories":["project"],"order":184,"feed":false,"seo":false,"head":[]},"headers":[{"level":2,"title":"# 1. $tab 对象","slug":"_1-tab-对象","link":"#_1-tab-对象","children":[]},{"level":2,"title":"# 2. $modal 对象","slug":"_2-modal-对象","link":"#_2-modal-对象","children":[]},{"level":2,"title":"# 3. $auth 对象","slug":"_3-auth-对象","link":"#_3-auth-对象","children":[]},{"level":2,"title":"# 4. $cache 对象","slug":"_4-cache-对象","link":"#_4-cache-对象","children":[]},{"level":2,"title":"# 5. $download 对象","slug":"_5-download-对象","link":"#_5-download-对象","children":[]}],"git":{"createdTime":1720365235000,"updatedTime":1720365235000,"contributors":[{"name":"Hung Nguyen Van","email":"vanhung4499@gmail.com","commits":1}]},"readingTime":{"minutes":3.4,"words":1021},"filePathRelative":"project/rouyi-vue-pro/vue2/util.md","localizedDate":"July 7, 2024"}');export{r as comp,h as data};
