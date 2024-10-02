import{_ as n,o as a,c as e,a as i}from"./app-5QVbWi7Z.js";const l={};function p(r,s){return a(),e("div",null,s[0]||(s[0]=[i(`<h1 id="开发规范" tabindex="-1"><a class="header-anchor" href="#开发规范"><span>开发规范</span></a></h1><h2 id="_1-view-页面" tabindex="-1"><a class="header-anchor" href="#_1-view-页面"><span><a href="#_1-view-%E9%A1%B5%E9%9D%A2">#</a> 1. view 页面</span></a></h2><p>在 <a href="https://github.com/yudaocode/yudao-ui-admin-vue2/tree/master/src/views" target="_blank" rel="noopener noreferrer"><code>@views</code></a> 目录下，每个模块对应一个目录，它的所有功能的 <code>.vue</code> 都放在该目录里。</p><figure><img src="https://doc.iocoder.cn/img/Vue2/开发规范/01.png" alt=" 目录" tabindex="0" loading="lazy"><figcaption> 目录</figcaption></figure><p>一般来说，一个路由对应一个 <code>.vue</code> 文件。</p><h2 id="_2-api-请求" tabindex="-1"><a class="header-anchor" href="#_2-api-请求"><span><a href="#_2-api-%E8%AF%B7%E6%B1%82">#</a> 2. api 请求</span></a></h2><p>在 <a href="https://github.com/yudaocode/yudao-ui-admin-vue2/tree/master/src/api" target="_blank" rel="noopener noreferrer"><code>@/api</code></a> 目录下，每个模块对应一个 <code>.api</code> 文件。</p><figure><img src="https://doc.iocoder.cn/img/Vue2/开发规范/02.png" alt=" 目录" tabindex="0" loading="lazy"><figcaption> 目录</figcaption></figure><p>每个 API 方法，会调用 <code>request</code> 方法，发起对后端 RESTful API 的调用。</p><h3 id="_2-1-请求封装" tabindex="-1"><a class="header-anchor" href="#_2-1-请求封装"><span><a href="#_2-1-%E8%AF%B7%E6%B1%82%E5%B0%81%E8%A3%85">#</a> 2.1 请求封装</span></a></h3><p><a href="https://github.com/yudaocode/yudao-ui-admin-vue2/blob/master/src/utils/request.js" target="_blank" rel="noopener noreferrer"><code>@/utils/request</code></a> 基于 <a href="http://axios-js.com/zh-cn/docs/index.html" target="_blank" rel="noopener noreferrer">axios</a> 封装，统一处理 GET、POST 方法的请求参数、请求头，以及错误提示信息等。</p><h4 id="_2-1-1-创建-axios-实例" tabindex="-1"><a class="header-anchor" href="#_2-1-1-创建-axios-实例"><span><a href="#_2-1-1-%E5%88%9B%E5%BB%BA-axios-%E5%AE%9E%E4%BE%8B">#</a> 2.1.1 创建 axios 实例</span></a></h4><ul><li><code>baseURL</code> 基础路径</li><li><code>timeout</code> 超时时间</li></ul><p>实现代码</p><div class="language-" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#abb2bf;--shiki-dark:#abb2bf;--shiki-light-bg:#282c34;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code"><code><span class="line"><span>import axios from &#39;axios&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 创建 axios 实例</span></span>
<span class="line"><span>const service = axios.create({</span></span>
<span class="line"><span>    // axios 中请求配置有 baseURL 选项，表示请求 URL 公共部分</span></span>
<span class="line"><span>    baseURL: process.env.VUE_APP_BASE_API + &#39;/admin-api/&#39;, // 此处的 /admin-api/ 地址，原因是后端的基础路径为 /admin-api/</span></span>
<span class="line"><span>    // 超时</span></span>
<span class="line"><span>    timeout: 10000</span></span>
<span class="line"><span>})</span></span></code></pre></div><h4 id="_2-1-2-request-拦截器" tabindex="-1"><a class="header-anchor" href="#_2-1-2-request-拦截器"><span><a href="#_2-1-2-request-%E6%8B%A6%E6%88%AA%E5%99%A8">#</a> 2.1.2 Request 拦截器</span></a></h4><ul><li><code>Authorization</code>、<code>tenant-id</code> 请求头</li><li>GET 请求参数的拼接</li></ul><p>实现代码</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#abb2bf;--shiki-dark:#abb2bf;--shiki-light-bg:#282c34;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code"><code><span class="line"><span>import { getToken } from &#39;@/utils/auth&#39;</span></span>
<span class="line"><span>import { getTenantEnable } from &quot;@/utils/ruoyi&quot;;</span></span>
<span class="line"><span>import Cookies from &quot;js-cookie&quot;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>service.interceptors.request.use(config =&gt; {</span></span>
<span class="line"><span>    // 是否需要设置 token</span></span>
<span class="line"><span>    const isToken = (config.headers || {}).isToken === false</span></span>
<span class="line"><span>    if (getToken() &amp;&amp; !isToken) {</span></span>
<span class="line"><span>        config.headers[&#39;Authorization&#39;] = &#39;Bearer &#39; + getToken() // 让每个请求携带自定义token 请根据实际情况自行修改</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    // 设置租户</span></span>
<span class="line"><span>    if (getTenantEnable()) {</span></span>
<span class="line"><span>        const tenantId = Cookies.get(&#39;tenantId&#39;);</span></span>
<span class="line"><span>        if (tenantId) {</span></span>
<span class="line"><span>            config.headers[&#39;tenant-id&#39;] = tenantId;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    // get 请求映射 params 参数</span></span>
<span class="line"><span>    if (config.method === &#39;get&#39; &amp;&amp; config.params) {</span></span>
<span class="line"><span>        let url = config.url + &#39;?&#39;;</span></span>
<span class="line"><span>        for (const propName of Object.keys(config.params)) {</span></span>
<span class="line"><span>            const value = config.params[propName];</span></span>
<span class="line"><span>            var part = encodeURIComponent(propName) + &quot;=&quot;;</span></span>
<span class="line"><span>            if (value !== null &amp;&amp; typeof(value) !== &quot;undefined&quot;) {</span></span>
<span class="line"><span>                if (typeof value === &#39;object&#39;) {</span></span>
<span class="line"><span>                    for (const key of Object.keys(value)) {</span></span>
<span class="line"><span>                        let params = propName + &#39;[&#39; + key + &#39;]&#39;;</span></span>
<span class="line"><span>                        var subPart = encodeURIComponent(params) + &quot;=&quot;;</span></span>
<span class="line"><span>                        url += subPart + encodeURIComponent(value[key]) + &quot;&amp;&quot;;</span></span>
<span class="line"><span>                    }</span></span>
<span class="line"><span>                } else {</span></span>
<span class="line"><span>                    url += part + encodeURIComponent(value) + &quot;&amp;&quot;;</span></span>
<span class="line"><span>                }</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        url = url.slice(0, -1);</span></span>
<span class="line"><span>        config.params = {};</span></span>
<span class="line"><span>        config.url = url;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    return config</span></span>
<span class="line"><span>}, error =&gt; {</span></span>
<span class="line"><span>    console.log(error)</span></span>
<span class="line"><span>    Promise.reject(error)</span></span>
<span class="line"><span>})</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-1-3-response-拦截器" tabindex="-1"><a class="header-anchor" href="#_2-1-3-response-拦截器"><span><a href="#_2-1-3-response-%E6%8B%A6%E6%88%AA%E5%99%A8">#</a> 2.1.3 Response 拦截器</span></a></h4><ul><li>Token 失效、登录过期时，跳回首页</li><li>请求失败，Message 错误提示</li></ul><p>实现代码</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#abb2bf;--shiki-dark:#abb2bf;--shiki-light-bg:#282c34;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code"><code><span class="line"><span>import { Notification, MessageBox, Message } from &#39;element-ui&#39;</span></span>
<span class="line"><span>import store from &#39;@/store&#39;</span></span>
<span class="line"><span>import errorCode from &#39;@/utils/errorCode&#39;</span></span>
<span class="line"><span>import Cookies from &quot;js-cookie&quot;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>export let isRelogin = { show: false };</span></span>
<span class="line"><span></span></span>
<span class="line"><span>service.interceptors.response.use(res =&gt; {</span></span>
<span class="line"><span>    // 未设置状态码则默认成功状态</span></span>
<span class="line"><span>    const code = res.data.code || 200;</span></span>
<span class="line"><span>    // 获取错误信息</span></span>
<span class="line"><span>    const msg = errorCode[code] || res.data.msg || errorCode[&#39;default&#39;]</span></span>
<span class="line"><span>    if (code === 401) {</span></span>
<span class="line"><span>      if (!isRelogin.show) {</span></span>
<span class="line"><span>        isRelogin.show = true;</span></span>
<span class="line"><span>        MessageBox.confirm(&#39;登录状态已过期，您可以继续留在该页面，或者重新登录&#39;, &#39;系统提示&#39;, {</span></span>
<span class="line"><span>            confirmButtonText: &#39;重新登录&#39;,</span></span>
<span class="line"><span>            cancelButtonText: &#39;取消&#39;,</span></span>
<span class="line"><span>            type: &#39;warning&#39;</span></span>
<span class="line"><span>          }</span></span>
<span class="line"><span>        ).then(() =&gt; {</span></span>
<span class="line"><span>          isRelogin.show = false;</span></span>
<span class="line"><span>          store.dispatch(&#39;LogOut&#39;).then(() =&gt; {</span></span>
<span class="line"><span>            location.href = &#39;/index&#39;;</span></span>
<span class="line"><span>          })</span></span>
<span class="line"><span>        }).catch(() =&gt; {</span></span>
<span class="line"><span>          isRelogin.show = false;</span></span>
<span class="line"><span>        });</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>      return Promise.reject(&#39;无效的会话，或者会话已过期，请重新登录。&#39;)</span></span>
<span class="line"><span>    } else if (code === 500) {</span></span>
<span class="line"><span>      Message({</span></span>
<span class="line"><span>        message: msg,</span></span>
<span class="line"><span>        type: &#39;error&#39;</span></span>
<span class="line"><span>      })</span></span>
<span class="line"><span>      return Promise.reject(new Error(msg))</span></span>
<span class="line"><span>    } else if (code !== 200) {</span></span>
<span class="line"><span>      Notification.error({</span></span>
<span class="line"><span>        title: msg</span></span>
<span class="line"><span>      })</span></span>
<span class="line"><span>      return Promise.reject(&#39;error&#39;)</span></span>
<span class="line"><span>    } else { // 请求成功！</span></span>
<span class="line"><span>      return res.data</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  error =&gt; {</span></span>
<span class="line"><span>    console.log(&#39;err&#39; + error)</span></span>
<span class="line"><span>    let { message } = error;</span></span>
<span class="line"><span>    if (message === &quot;Network Error&quot;) {</span></span>
<span class="line"><span>      message = &quot;后端接口连接异常&quot;;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    else if (message.includes(&quot;timeout&quot;)) {</span></span>
<span class="line"><span>      message = &quot;系统接口请求超时&quot;;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    else if (message.includes(&quot;Request failed with status code&quot;)) {</span></span>
<span class="line"><span>      message = &quot;系统接口&quot; + message.substr(message.length - 3) + &quot;异常&quot;;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    Message({</span></span>
<span class="line"><span>      message: message,</span></span>
<span class="line"><span>      type: &#39;error&#39;,</span></span>
<span class="line"><span>      duration: 5 * 1000</span></span>
<span class="line"><span>    })</span></span>
<span class="line"><span>    return Promise.reject(error)</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-2-交互流程" tabindex="-1"><a class="header-anchor" href="#_2-2-交互流程"><span><a href="#_2-2-%E4%BA%A4%E4%BA%92%E6%B5%81%E7%A8%8B">#</a> 2.2 交互流程</span></a></h3><p>一个完整的前端 UI 交互到服务端处理流程，如下图所示：</p><figure><img src="https://doc.iocoder.cn/img/Vue2/开发规范/03.png" alt="交互流程" tabindex="0" loading="lazy"><figcaption>交互流程</figcaption></figure><p>以 [系统管理 -&gt; 用户管理] 菜单为例，查看它是如何读取用户列表的。代码如下：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#abb2bf;--shiki-dark:#abb2bf;--shiki-light-bg:#282c34;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code"><code><span class="line"><span>// ① api/system/user.js</span></span>
<span class="line"><span>import request from &#39;@/utils/request&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 查询用户列表</span></span>
<span class="line"><span>export function listUser(query) {</span></span>
<span class="line"><span>    return request({</span></span>
<span class="line"><span>        url: &#39;/system/user/page&#39;,</span></span>
<span class="line"><span>        method: &#39;get&#39;,</span></span>
<span class="line"><span>        params: query</span></span>
<span class="line"><span>    })</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// ② views/system/user/index.vue</span></span>
<span class="line"><span>import { listUser } from &quot;@/api/system/user&quot;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>export default {</span></span>
<span class="line"><span>  data() {</span></span>
<span class="line"><span>    userList: null,</span></span>
<span class="line"><span>    loading: true</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  methods: {</span></span>
<span class="line"><span>    getList() {</span></span>
<span class="line"><span>      this.loading = true</span></span>
<span class="line"><span>      listUser().then(response =&gt; {</span></span>
<span class="line"><span>        this.userList = response.rows</span></span>
<span class="line"><span>        this.loading = false</span></span>
<span class="line"><span>      })</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-3-自定义-baseurl-基础路径" tabindex="-1"><a class="header-anchor" href="#_2-3-自定义-baseurl-基础路径"><span><a href="#_2-3-%E8%87%AA%E5%AE%9A%E4%B9%89-baseurl-%E5%9F%BA%E7%A1%80%E8%B7%AF%E5%BE%84">#</a> 2.3 自定义 <code>baseURL</code> 基础路径</span></a></h3><p>如果想要自定义的 <code>baseURL</code> 基础路径，可以通过 <code>baseURL</code> 进行直接覆盖。示例如下：</p><div class="language-" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#abb2bf;--shiki-dark:#abb2bf;--shiki-light-bg:#282c34;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code"><code><span class="line"><span>export function listUser(query) {</span></span>
<span class="line"><span>    return request({</span></span>
<span class="line"><span>        url: &#39;/system/user/page&#39;,</span></span>
<span class="line"><span>        method: &#39;get&#39;,</span></span>
<span class="line"><span>        params: query,</span></span>
<span class="line"><span>        baseURL: &#39;https://www.iocoder.cn&#39; // 自定义</span></span>
<span class="line"><span>    })</span></span>
<span class="line"><span>}</span></span></code></pre></div><h2 id="_3-component-组件" tabindex="-1"><a class="header-anchor" href="#_3-component-组件"><span><a href="#_3-component-%E7%BB%84%E4%BB%B6">#</a> 3. component 组件</span></a></h2><p>① 在 <a href="https://github.com/yudaocode/yudao-ui-admin-vue2/tree/master/src/components" target="_blank" rel="noopener noreferrer"><code>@/components</code></a> 目录下，实现<strong>全局</strong>组件，被所有模块所公用。例如说，富文本编辑器、各种各搜索组件、封装的分页组件等等。</p><figure><img src="https://doc.iocoder.cn/img/Vue2/开发规范/04.png" alt="全局组件" tabindex="0" loading="lazy"><figcaption>全局组件</figcaption></figure><p>② 每个模块的业务组件，可实现在 <code>views</code> 目录下，自己模块的目录的 <code>components</code> 目录下，避免单个 <code>.vue</code> 文件过大，降低维护成功。例如说，<code>@/views/pay/app/components/xxx.vue</code>。</p><figure><img src="https://doc.iocoder.cn/img/Vue2/开发规范/05.png" alt="业务组件" tabindex="0" loading="lazy"><figcaption>业务组件</figcaption></figure><h2 id="_4-style-样式" tabindex="-1"><a class="header-anchor" href="#_4-style-样式"><span><a href="#_4-style-%E6%A0%B7%E5%BC%8F">#</a> 4. style 样式</span></a></h2><p>① 在 <a href="https://github.com/yudaocode/yudao-ui-admin-vue2/tree/master/src/styles" target="_blank" rel="noopener noreferrer"><code>@/styles</code></a> 目录下，实现<strong>全局</strong>样式，被所有页面所公用。</p><figure><img src="https://doc.iocoder.cn/img/Vue2/开发规范/06.png" alt="全局样式" tabindex="0" loading="lazy"><figcaption>全局样式</figcaption></figure><p>② 每个 <code>.vue</code> 页面，可在 <code>&lt;style /&gt;</code> 标签中添加样式，注意需要添加 <code>scoped</code> 表示只作用在当前页面里，避免造成全局的样式污染。</p><figure><img src="https://doc.iocoder.cn/img/Vue2/开发规范/07.png" alt="业务样式" tabindex="0" loading="lazy"><figcaption>业务样式</figcaption></figure>`,41)]))}const d=n(l,[["render",p],["__file","dev-spec.html.vue"]]),o=JSON.parse('{"path":"/project/rouyi-vue-pro/vue2/dev-spec.html","title":"开发规范","lang":"en-US","frontmatter":{"title":"开发规范","tags":["project","java","spring-boot","spring-cloud"],"categories":["project"],"order":179,"feed":false,"seo":false,"head":[]},"headers":[{"level":2,"title":"# 1. view 页面","slug":"_1-view-页面","link":"#_1-view-页面","children":[]},{"level":2,"title":"# 2. api 请求","slug":"_2-api-请求","link":"#_2-api-请求","children":[{"level":3,"title":"# 2.1 请求封装","slug":"_2-1-请求封装","link":"#_2-1-请求封装","children":[]},{"level":3,"title":"# 2.2 交互流程","slug":"_2-2-交互流程","link":"#_2-2-交互流程","children":[]},{"level":3,"title":"# 2.3 自定义 baseURL 基础路径","slug":"_2-3-自定义-baseurl-基础路径","link":"#_2-3-自定义-baseurl-基础路径","children":[]}]},{"level":2,"title":"# 3. component 组件","slug":"_3-component-组件","link":"#_3-component-组件","children":[]},{"level":2,"title":"# 4. style 样式","slug":"_4-style-样式","link":"#_4-style-样式","children":[]}],"git":{"createdTime":1720365235000,"updatedTime":1720365235000,"contributors":[{"name":"Hung Nguyen Van","email":"vanhung4499@gmail.com","commits":1}]},"readingTime":{"minutes":4,"words":1201},"filePathRelative":"project/rouyi-vue-pro/vue2/dev-spec.md","localizedDate":"July 7, 2024"}');export{d as comp,o as data};
