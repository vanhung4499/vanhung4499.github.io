import{_ as n,o as a,c as e,a as i}from"./app-5QVbWi7Z.js";const l={};function p(r,s){return a(),e("div",null,s[0]||(s[0]=[i(`<h1 id="开发规范" tabindex="-1"><a class="header-anchor" href="#开发规范"><span>开发规范</span></a></h1><h2 id="_0-实战案例" tabindex="-1"><a class="header-anchor" href="#_0-实战案例"><span><a href="#_0-%E5%AE%9E%E6%88%98%E6%A1%88%E4%BE%8B">#</a> 0. 实战案例</span></a></h2><p>本小节，提供大家开发管理后台的功能时，最常用的普通列表、树形列表、新增与修改的表单弹窗、详情表单弹窗的实战案例。</p><h3 id="_0-1-普通列表" tabindex="-1"><a class="header-anchor" href="#_0-1-普通列表"><span><a href="#_0-1-%E6%99%AE%E9%80%9A%E5%88%97%E8%A1%A8">#</a> 0.1 普通列表</span></a></h3><p>可参考 [系统管理 -&gt; 岗位管理] 菜单：</p><ul><li>API 接口：<a href="https://github.com/yudaocode/yudao-ui-admin-vue3/blob/master/src/api/system/post/index.ts" target="_blank" rel="noopener noreferrer"><code>/src/api/system/post/index.ts</code></a></li><li>列表界面：<a href="https://github.com/yudaocode/yudao-ui-admin-vue3/blob/master/src/views/system/post/index.vue" target="_blank" rel="noopener noreferrer"><code>/src/views/system/post/index.vue</code></a></li><li>表单界面：<a href="https://github.com/yudaocode/yudao-ui-admin-vue3/blob/master/src/views/system/post/PostForm.vue" target="_blank" rel="noopener noreferrer"><code>/src/views/system/post/PostForm.vue</code></a></li></ul><p>为什么界面拆成列表和表单两个 Vue 文件？</p><p>每个 Vue 文件，只实现一个功能，更简洁，维护性更好，Git 代码冲突概率低。</p><h3 id="_0-2-树形列表" tabindex="-1"><a class="header-anchor" href="#_0-2-树形列表"><span><a href="#_0-2-%E6%A0%91%E5%BD%A2%E5%88%97%E8%A1%A8">#</a> 0.2 树形列表</span></a></h3><p>可参考 [系统管理 -&gt; 部门管理] 菜单：</p><ul><li>API 接口：<a href="https://github.com/yudaocode/yudao-ui-admin-vue3/blob/master/src/api/system/dept/index.ts" target="_blank" rel="noopener noreferrer"><code>/src/api/system/dept/index.ts</code></a></li><li>列表界面：<a href="https://github.com/yudaocode/yudao-ui-admin-vue3/blob/master/src/views/system/dept/index.vue" target="_blank" rel="noopener noreferrer"><code>/src/views/system/dept/index.vue</code></a></li><li>表单界面：<a href="https://github.com/yudaocode/yudao-ui-admin-vue3/blob/master/src/views/system/dept/DeptForm.vue" target="_blank" rel="noopener noreferrer"><code>/src/views/system/dept/DeptForm.vue</code></a></li></ul><h3 id="_0-3-高性能列表" tabindex="-1"><a class="header-anchor" href="#_0-3-高性能列表"><span><a href="#_0-3-%E9%AB%98%E6%80%A7%E8%83%BD%E5%88%97%E8%A1%A8">#</a> 0.3 高性能列表</span></a></h3><p>可参考 [系统管理 -&gt; 地区管理] 菜单，对应 <a href="https://github.com/yudaocode/yudao-ui-admin-vue3/blob/master/src/views/system/area/index.vue" target="_blank" rel="noopener noreferrer"><code>/src/views/system/area/index.vue</code></a> 列表界面</p><p>基于 <a href="https://element-plus.org/zh-CN/component/table-v2.html" target="_blank" rel="noopener noreferrer">Virtualized Table 虚拟化表格</a> 实现，解决一屏里超过 1000 条数据记录时，就会出现卡顿等性能问题。</p><h3 id="_0-4-详情弹窗" tabindex="-1"><a class="header-anchor" href="#_0-4-详情弹窗"><span><a href="#_0-4-%E8%AF%A6%E6%83%85%E5%BC%B9%E7%AA%97">#</a> 0.4 详情弹窗</span></a></h3><p>可参考 [基础设施 -&gt; API 日志 -&gt; 访问日志] 菜单，对应 <a href="https://github.com/yudaocode/yudao-ui-admin-vue3/blob/master/src/views/infra/apiAccessLog/ApiAccessLogDetail.vue" target="_blank" rel="noopener noreferrer"><code>/src/views/infra/apiAccessLog/ApiAccessLogDetail.vue</code></a> 详情弹窗</p><h2 id="_1-view-页面" tabindex="-1"><a class="header-anchor" href="#_1-view-页面"><span><a href="#_1-view-%E9%A1%B5%E9%9D%A2">#</a> 1. view 页面</span></a></h2><p>在 <a href="https://github.com/yudaocode/yudao-ui-admin-vue3/blob/master/src/views/" target="_blank" rel="noopener noreferrer"><code>@views</code></a> 目录下，每个模块对应一个目录，它的所有功能的 <code>.vue</code> 都放在该目录里。</p><figure><img src="https://cloud.iocoder.cn/img/Vue3/开发规范/01.png" alt=" 目录" tabindex="0" loading="lazy"><figcaption> 目录</figcaption></figure><p>一般来说，一个路由对应一个 <code>index.vue</code> 文件。</p><h2 id="_2-api-请求" tabindex="-1"><a class="header-anchor" href="#_2-api-请求"><span><a href="#_2-api-%E8%AF%B7%E6%B1%82">#</a> 2. api 请求</span></a></h2><p>在 <a href="https://github.com/yudaocode/yudao-ui-admin-vue3/tree/master/src/api" target="_blank" rel="noopener noreferrer"><code>@/api</code></a> 目录下，每个模块对应一个 <code>index.ts</code> API 文件。</p><figure><img src="https://cloud.iocoder.cn/img/Vue3/开发规范/02.png" alt=" 目录" tabindex="0" loading="lazy"><figcaption> 目录</figcaption></figure><ul><li>API 方法：会调用 <code>request</code> 方法，发起对后端 RESTful API 的调用。</li><li><code>interface</code> 类型：定义了 API 的请求参数和返回结果的类型，对应后端的 VO 类型。</li></ul><h3 id="_2-1-请求封装" tabindex="-1"><a class="header-anchor" href="#_2-1-请求封装"><span><a href="#_2-1-%E8%AF%B7%E6%B1%82%E5%B0%81%E8%A3%85">#</a> 2.1 请求封装</span></a></h3><p><a href="https://github.com/yudaocode/yudao-ui-admin-vue3/blob/master/src/config/axios/service.ts" target="_blank" rel="noopener noreferrer"><code>/src/config/axios/index.ts</code></a> 基于 <a href="http://axios-js.com/zh-cn/docs/index.html" target="_blank" rel="noopener noreferrer">axios</a> 封装，统一处理 GET、POST 方法的请求参数、请求头，以及错误提示信息等。</p><figure><img src="https://cloud.iocoder.cn/img/Vue3/开发规范/03-01.png" alt="axios/index.ts" tabindex="0" loading="lazy"><figcaption>axios/index.ts</figcaption></figure><h4 id="_2-1-1-创建-axios-实例" tabindex="-1"><a class="header-anchor" href="#_2-1-1-创建-axios-实例"><span><a href="#_2-1-1-%E5%88%9B%E5%BB%BA-axios-%E5%AE%9E%E4%BE%8B">#</a> 2.1.1 创建 axios 实例</span></a></h4><ul><li><code>baseURL</code> 基础路径</li><li><code>timeout</code> 超时时间，默认为 30000 毫秒</li></ul><p>实现代码 /src/config/axios/service.ts</p><div class="language-" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#abb2bf;--shiki-dark:#abb2bf;--shiki-light-bg:#282c34;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code"><code><span class="line"><span>import axios from &#39;axios&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const { result_code, base_url, request_timeout } = config</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 创建 axios 实例</span></span>
<span class="line"><span>const service: AxiosInstance = axios.create({</span></span>
<span class="line"><span>    baseURL: base_url, // api 的 base_url</span></span>
<span class="line"><span>    timeout: request_timeout, // 请求超时时间</span></span>
<span class="line"><span>    withCredentials: false // 禁用 Cookie 等信息</span></span>
<span class="line"><span>})</span></span></code></pre></div><h4 id="_2-1-2-request-拦截器" tabindex="-1"><a class="header-anchor" href="#_2-1-2-request-拦截器"><span><a href="#_2-1-2-request-%E6%8B%A6%E6%88%AA%E5%99%A8">#</a> 2.1.2 Request 拦截器</span></a></h4><ul><li>【重点】<code>Authorization</code>、<code>tenant-id</code> 请求头</li><li>GET 请求参数的拼接</li></ul><p>实现代码 /src/config/axios/service.ts</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#abb2bf;--shiki-dark:#abb2bf;--shiki-light-bg:#282c34;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code"><code><span class="line"><span>import axios, {</span></span>
<span class="line"><span>    AxiosInstance,</span></span>
<span class="line"><span>    AxiosRequestHeaders,</span></span>
<span class="line"><span>    AxiosResponse,</span></span>
<span class="line"><span>    AxiosError,</span></span>
<span class="line"><span>    InternalAxiosRequestConfig</span></span>
<span class="line"><span>} from &#39;axios&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import { getAccessToken, getTenantId } from &#39;@/utils/auth&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const tenantEnable = import.meta.env.VITE_APP_TENANT_ENABLE</span></span>
<span class="line"><span></span></span>
<span class="line"><span>service.interceptors.request.use(</span></span>
<span class="line"><span>    (config: InternalAxiosRequestConfig) =&gt; {</span></span>
<span class="line"><span>        // 是否需要设置 token</span></span>
<span class="line"><span>        let isToken = (config!.headers || {}).isToken === false</span></span>
<span class="line"><span>        whiteList.some((v) =&gt; {</span></span>
<span class="line"><span>            if (config.url) {</span></span>
<span class="line"><span>                config.url.indexOf(v) &gt; -1</span></span>
<span class="line"><span>                return (isToken = false)</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        })</span></span>
<span class="line"><span>        if (getAccessToken() &amp;&amp; !isToken) {</span></span>
<span class="line"><span>            (config as Recordable).headers.Authorization = &#39;Bearer &#39; + getAccessToken() // 让每个请求携带自定义token</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        // 设置租户</span></span>
<span class="line"><span>        if (tenantEnable &amp;&amp; tenantEnable === &#39;true&#39;) {</span></span>
<span class="line"><span>            const tenantId = getTenantId()</span></span>
<span class="line"><span>            if (tenantId) (config as Recordable).headers[&#39;tenant-id&#39;] = tenantId</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        const params = config.params || {}</span></span>
<span class="line"><span>        const data = config.data || false</span></span>
<span class="line"><span>        if (</span></span>
<span class="line"><span>            config.method?.toUpperCase() === &#39;POST&#39; &amp;&amp;</span></span>
<span class="line"><span>            (config.headers as AxiosRequestHeaders)[&#39;Content-Type&#39;] ===</span></span>
<span class="line"><span>        &#39;application/x-www-form-urlencoded&#39;</span></span>
<span class="line"><span>    ) {</span></span>
<span class="line"><span>            config.data = qs.stringify(data)</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        // get参数编码</span></span>
<span class="line"><span>        if (config.method?.toUpperCase() === &#39;GET&#39; &amp;&amp; params) {</span></span>
<span class="line"><span>            let url = config.url + &#39;?&#39;</span></span>
<span class="line"><span>            for (const propName of Object.keys(params)) {</span></span>
<span class="line"><span>                const value = params[propName]</span></span>
<span class="line"><span>                if (value !== void 0 &amp;&amp; value !== null &amp;&amp; typeof value !== &#39;undefined&#39;) {</span></span>
<span class="line"><span>                    if (typeof value === &#39;object&#39;) {</span></span>
<span class="line"><span>                        for (const val of Object.keys(value)) {</span></span>
<span class="line"><span>                            const params = propName + &#39;[&#39; + val + &#39;]&#39;</span></span>
<span class="line"><span>                            const subPart = encodeURIComponent(params) + &#39;=&#39;</span></span>
<span class="line"><span>                            url += subPart + encodeURIComponent(value[val]) + &#39;&amp;&#39;</span></span>
<span class="line"><span>                        }</span></span>
<span class="line"><span>                    } else {</span></span>
<span class="line"><span>                        url += \`\${propName}=\${encodeURIComponent(value)}&amp;\`</span></span>
<span class="line"><span>                    }</span></span>
<span class="line"><span>                }</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>            // 给 get 请求加上时间戳参数，避免从缓存中拿数据</span></span>
<span class="line"><span>            // const now = new Date().getTime()</span></span>
<span class="line"><span>            // params = params.substring(0, url.length - 1) + \`?_t=\${now}\`</span></span>
<span class="line"><span>            url = url.slice(0, -1)</span></span>
<span class="line"><span>            config.params = {}</span></span>
<span class="line"><span>            config.url = url</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        return config</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    (error: AxiosError) =&gt; {</span></span>
<span class="line"><span>        // Do something with request error</span></span>
<span class="line"><span>        console.log(error) // for debug</span></span>
<span class="line"><span>        Promise.reject(error)</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-1-3-response-拦截器" tabindex="-1"><a class="header-anchor" href="#_2-1-3-response-拦截器"><span><a href="#_2-1-3-response-%E6%8B%A6%E6%88%AA%E5%99%A8">#</a> 2.1.3 Response 拦截器</span></a></h4><ul><li>访问令牌 AccessToken 过期时，使用刷新令牌 RefreshToken 刷新，获得新的访问令牌</li><li>刷新令牌失败（过期）时，跳回首页进行登录</li><li>请求失败，Message 错误提示</li></ul><p>实现代码 /src/config/axios/service.ts</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#abb2bf;--shiki-dark:#abb2bf;--shiki-light-bg:#282c34;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code"><code><span class="line"><span>import axios, {</span></span>
<span class="line"><span>    AxiosInstance,</span></span>
<span class="line"><span>    AxiosRequestHeaders,</span></span>
<span class="line"><span>    AxiosResponse,</span></span>
<span class="line"><span>    AxiosError,</span></span>
<span class="line"><span>    InternalAxiosRequestConfig</span></span>
<span class="line"><span>} from &#39;axios&#39;</span></span>
<span class="line"><span>import { ElMessage, ElMessageBox, ElNotification } from &#39;element-plus&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import { getAccessToken, getRefreshToken, removeToken, setToken } from &#39;@/utils/auth&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 需要忽略的提示。忽略后，自动 Promise.reject(&#39;error&#39;)</span></span>
<span class="line"><span>const ignoreMsgs = [</span></span>
<span class="line"><span>    &#39;无效的刷新令牌&#39;, // 刷新令牌被删除时，不用提示</span></span>
<span class="line"><span>    &#39;刷新令牌已过期&#39; // 使用刷新令牌，刷新获取新的访问令牌时，结果因为过期失败，此时需要忽略。否则，会导致继续 401，无法跳转到登出界面</span></span>
<span class="line"><span>]</span></span>
<span class="line"><span>// 是否显示重新登录</span></span>
<span class="line"><span>export const isRelogin = { show: false }</span></span>
<span class="line"><span>import errorCode from &#39;./errorCode&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import { resetRouter } from &#39;@/router&#39;</span></span>
<span class="line"><span>import { useCache } from &#39;@/hooks/web/useCache&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>service.interceptors.response.use(</span></span>
<span class="line"><span>    async (response: AxiosResponse&lt;any&gt;) =&gt; {</span></span>
<span class="line"><span>        const { data } = response</span></span>
<span class="line"><span>        const config = response.config</span></span>
<span class="line"><span>        if (!data) {</span></span>
<span class="line"><span>            // 返回“[HTTP]请求没有返回值”;</span></span>
<span class="line"><span>            throw new Error()</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        const { t } = useI18n()</span></span>
<span class="line"><span>        // 未设置状态码则默认成功状态</span></span>
<span class="line"><span>        const code = data.code || result_code</span></span>
<span class="line"><span>        // 二进制数据则直接返回</span></span>
<span class="line"><span>        if (</span></span>
<span class="line"><span>            response.request.responseType === &#39;blob&#39; ||</span></span>
<span class="line"><span>            response.request.responseType === &#39;arraybuffer&#39;</span></span>
<span class="line"><span>        ) {</span></span>
<span class="line"><span>            return response.data</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        // 获取错误信息</span></span>
<span class="line"><span>        const msg = data.msg || errorCode[code] || errorCode[&#39;default&#39;]</span></span>
<span class="line"><span>        if (ignoreMsgs.indexOf(msg) !== -1) {</span></span>
<span class="line"><span>            // 如果是忽略的错误码，直接返回 msg 异常</span></span>
<span class="line"><span>            return Promise.reject(msg)</span></span>
<span class="line"><span>        } else if (code === 401) {</span></span>
<span class="line"><span>            // 如果未认证，并且未进行刷新令牌，说明可能是访问令牌过期了</span></span>
<span class="line"><span>            if (!isRefreshToken) {</span></span>
<span class="line"><span>                isRefreshToken = true</span></span>
<span class="line"><span>                // 1. 如果获取不到刷新令牌，则只能执行登出操作</span></span>
<span class="line"><span>                if (!getRefreshToken()) {</span></span>
<span class="line"><span>                    return handleAuthorized()</span></span>
<span class="line"><span>                }</span></span>
<span class="line"><span>                // 2. 进行刷新访问令牌</span></span>
<span class="line"><span>                try {</span></span>
<span class="line"><span>                    const refreshTokenRes = await refreshToken()</span></span>
<span class="line"><span>                    // 2.1 刷新成功，则回放队列的请求 + 当前请求</span></span>
<span class="line"><span>                    setToken((await refreshTokenRes).data.data)</span></span>
<span class="line"><span>                    config.headers!.Authorization = &#39;Bearer &#39; + getAccessToken()</span></span>
<span class="line"><span>                    requestList.forEach((cb: any) =&gt; {</span></span>
<span class="line"><span>                        cb()</span></span>
<span class="line"><span>                    })</span></span>
<span class="line"><span>                    requestList = []</span></span>
<span class="line"><span>                    return service(config)</span></span>
<span class="line"><span>                } catch (e) {</span></span>
<span class="line"><span>                    // 为什么需要 catch 异常呢？刷新失败时，请求因为 Promise.reject 触发异常。</span></span>
<span class="line"><span>                    // 2.2 刷新失败，只回放队列的请求</span></span>
<span class="line"><span>                    requestList.forEach((cb: any) =&gt; {</span></span>
<span class="line"><span>                        cb()</span></span>
<span class="line"><span>                    })</span></span>
<span class="line"><span>                    // 提示是否要登出。即不回放当前请求！不然会形成递归</span></span>
<span class="line"><span>                    return handleAuthorized()</span></span>
<span class="line"><span>                } finally {</span></span>
<span class="line"><span>                    requestList = []</span></span>
<span class="line"><span>                    isRefreshToken = false</span></span>
<span class="line"><span>                }</span></span>
<span class="line"><span>            } else {</span></span>
<span class="line"><span>                // 添加到队列，等待刷新获取到新的令牌</span></span>
<span class="line"><span>                return new Promise((resolve) =&gt; {</span></span>
<span class="line"><span>                    requestList.push(() =&gt; {</span></span>
<span class="line"><span>                        config.headers!.Authorization = &#39;Bearer &#39; + getAccessToken() // 让每个请求携带自定义token 请根据实际情况自行修改</span></span>
<span class="line"><span>                        resolve(service(config))</span></span>
<span class="line"><span>                    })</span></span>
<span class="line"><span>                })</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        } else if (code === 500) {</span></span>
<span class="line"><span>            ElMessage.error(t(&#39;sys.api.errMsg500&#39;))</span></span>
<span class="line"><span>            return Promise.reject(new Error(msg))</span></span>
<span class="line"><span>        } else if (code === 901) {</span></span>
<span class="line"><span>            ElMessage.error({</span></span>
<span class="line"><span>                offset: 300,</span></span>
<span class="line"><span>                dangerouslyUseHTMLString: true,</span></span>
<span class="line"><span>                message:</span></span>
<span class="line"><span>                    &#39;&lt;div&gt;&#39; +</span></span>
<span class="line"><span>                    t(&#39;sys.api.errMsg901&#39;) +</span></span>
<span class="line"><span>                    &#39;&lt;/div&gt;&#39; +</span></span>
<span class="line"><span>                    &#39;&lt;div&gt; &amp;nbsp; &lt;/div&gt;&#39; +</span></span>
<span class="line"><span>                    &#39;&lt;div&gt;参考 https://doc.iocoder.cn/ 教程&lt;/div&gt;&#39; +</span></span>
<span class="line"><span>                    &#39;&lt;div&gt; &amp;nbsp; &lt;/div&gt;&#39; +</span></span>
<span class="line"><span>                    &#39;&lt;div&gt;5 分钟搭建本地环境&lt;/div&gt;&#39;</span></span>
<span class="line"><span>            })</span></span>
<span class="line"><span>            return Promise.reject(new Error(msg))</span></span>
<span class="line"><span>        } else if (code !== 200) {</span></span>
<span class="line"><span>            if (msg === &#39;无效的刷新令牌&#39;) {</span></span>
<span class="line"><span>                // hard coding：忽略这个提示，直接登出</span></span>
<span class="line"><span>                console.log(msg)</span></span>
<span class="line"><span>            } else {</span></span>
<span class="line"><span>                ElNotification.error({ title: msg })</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>            return Promise.reject(&#39;error&#39;)</span></span>
<span class="line"><span>        } else {</span></span>
<span class="line"><span>            return data</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    (error: AxiosError) =&gt; {</span></span>
<span class="line"><span>        console.log(&#39;err&#39; + error) // for debug</span></span>
<span class="line"><span>        let { message } = error</span></span>
<span class="line"><span>        const { t } = useI18n()</span></span>
<span class="line"><span>        if (message === &#39;Network Error&#39;) {</span></span>
<span class="line"><span>            message = t(&#39;sys.api.errorMessage&#39;)</span></span>
<span class="line"><span>        } else if (message.includes(&#39;timeout&#39;)) {</span></span>
<span class="line"><span>            message = t(&#39;sys.api.apiTimeoutMessage&#39;)</span></span>
<span class="line"><span>        } else if (message.includes(&#39;Request failed with status code&#39;)) {</span></span>
<span class="line"><span>            message = t(&#39;sys.api.apiRequestFailed&#39;) + message.substr(message.length - 3)</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        ElMessage.error(message)</span></span>
<span class="line"><span>        return Promise.reject(error)</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const refreshToken = async () =&gt; {</span></span>
<span class="line"><span>    axios.defaults.headers.common[&#39;tenant-id&#39;] = getTenantId()</span></span>
<span class="line"><span>    return await axios.post(base_url + &#39;/system/auth/refresh-token?refreshToken=&#39; + getRefreshToken())</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>const handleAuthorized = () =&gt; {</span></span>
<span class="line"><span>    const { t } = useI18n()</span></span>
<span class="line"><span>    if (!isRelogin.show) {</span></span>
<span class="line"><span>        isRelogin.show = true</span></span>
<span class="line"><span>        ElMessageBox.confirm(t(&#39;sys.api.timeoutMessage&#39;), t(&#39;common.confirmTitle&#39;), {</span></span>
<span class="line"><span>            confirmButtonText: t(&#39;login.relogin&#39;),</span></span>
<span class="line"><span>            cancelButtonText: t(&#39;common.cancel&#39;),</span></span>
<span class="line"><span>            type: &#39;warning&#39;</span></span>
<span class="line"><span>        })</span></span>
<span class="line"><span>            .then(() =&gt; {</span></span>
<span class="line"><span>                const { wsCache } = useCache()</span></span>
<span class="line"><span>                resetRouter() // 重置静态路由表</span></span>
<span class="line"><span>                wsCache.clear()</span></span>
<span class="line"><span>                removeToken()</span></span>
<span class="line"><span>                isRelogin.show = false</span></span>
<span class="line"><span>                window.location.href = &#39;/&#39;</span></span>
<span class="line"><span>            })</span></span>
<span class="line"><span>            .catch(() =&gt; {</span></span>
<span class="line"><span>                isRelogin.show = false</span></span>
<span class="line"><span>            })</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    return Promise.reject(t(&#39;sys.api.timeoutMessage&#39;))</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-2-交互流程" tabindex="-1"><a class="header-anchor" href="#_2-2-交互流程"><span><a href="#_2-2-%E4%BA%A4%E4%BA%92%E6%B5%81%E7%A8%8B">#</a> 2.2 交互流程</span></a></h3><p>一个完整的前端 UI 交互到服务端处理流程，如下图所示：</p><figure><img src="https://cloud.iocoder.cn/img/Vue3/开发规范/03-02.png" alt="交互流程" tabindex="0" loading="lazy"><figcaption>交互流程</figcaption></figure><p>继续以 [系统管理 -&gt; 岗位管理] 菜单为例，查看它是如何读取岗位列表的。代码如下：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#abb2bf;--shiki-dark:#abb2bf;--shiki-light-bg:#282c34;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code"><code><span class="line"><span>// ① api/system/post/index.ts</span></span>
<span class="line"><span>import request from &#39;@/config/axios&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 查询岗位列表</span></span>
<span class="line"><span>export const getPostPage = async (params: PageParam) =&gt; {</span></span>
<span class="line"><span>  return await request.get({ url: &#39;/system/post/page&#39;, params })</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// ② views/system/post/index.vue</span></span>
<span class="line"><span>&lt;script setup lang=&quot;tsx&quot;&gt;</span></span>
<span class="line"><span>const loading = ref(true) // 列表的加载中</span></span>
<span class="line"><span>const total = ref(0) // 列表的总页数</span></span>
<span class="line"><span>const list = ref([]) // 列表的数据</span></span>
<span class="line"><span>const queryParams = reactive({</span></span>
<span class="line"><span>    pageNo: 1,</span></span>
<span class="line"><span>    pageSize: 10,</span></span>
<span class="line"><span>    code: &#39;&#39;,</span></span>
<span class="line"><span>    name: &#39;&#39;,</span></span>
<span class="line"><span>    status: undefined</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span></span></span>
<span class="line"><span>/** 查询岗位列表 */</span></span>
<span class="line"><span>const getList = async () =&gt; {</span></span>
<span class="line"><span>    loading.value = true</span></span>
<span class="line"><span>    try {</span></span>
<span class="line"><span>        const data = await PostApi.getPostPage(queryParams)</span></span>
<span class="line"><span>        list.value = data.list</span></span>
<span class="line"><span>        total.value = data.total</span></span>
<span class="line"><span>    } finally {</span></span>
<span class="line"><span>        loading.value = false</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>&lt;/script&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-component-组件" tabindex="-1"><a class="header-anchor" href="#_3-component-组件"><span><a href="#_3-component-%E7%BB%84%E4%BB%B6">#</a> 3. component 组件</span></a></h2><h3 id="_3-1-全局组件" tabindex="-1"><a class="header-anchor" href="#_3-1-全局组件"><span><a href="#_3-1-%E5%85%A8%E5%B1%80%E7%BB%84%E4%BB%B6">#</a> 3.1 全局组件</span></a></h3><p>在 <a href="https://github.com/yudaocode/yudao-ui-admin-vue3/blob/master/src/components/" target="_blank" rel="noopener noreferrer"><code>@/components</code></a> 目录下，实现<strong>全局</strong>组件，被所有模块所公用。</p><p>例如说，富文本编辑器、各种各搜索组件、封装的分页组件等等。</p><figure><img src="https://cloud.iocoder.cn/img/Vue3/开发规范/04.png" alt="全局组件" tabindex="0" loading="lazy"><figcaption>全局组件</figcaption></figure><h3 id="_3-2-模块内组件" tabindex="-1"><a class="header-anchor" href="#_3-2-模块内组件"><span><a href="#_3-2-%E6%A8%A1%E5%9D%97%E5%86%85%E7%BB%84%E4%BB%B6">#</a> 3.2 模块内组件</span></a></h3><p>每个模块的业务组件，可实现在 <code>views</code> 目录下，自己模块的目录的 <code>components</code> 目录下，避免单个 <code>.vue</code> 文件过大，降低维护成功。</p><p>例如说，<code>@/views/pay/app/components/xxx.vue</code>：</p><figure><img src="https://cloud.iocoder.cn/img/Vue3/开发规范/05.png" alt="业务组件" tabindex="0" loading="lazy"><figcaption>业务组件</figcaption></figure><h2 id="_4-style-样式" tabindex="-1"><a class="header-anchor" href="#_4-style-样式"><span><a href="#_4-style-%E6%A0%B7%E5%BC%8F">#</a> 4. style 样式</span></a></h2><p>① 在 <a href="https://github.com/yudaocode/yudao-ui-admin-vue3/tree/master/src/styles" target="_blank" rel="noopener noreferrer"><code>@/styles</code></a> 目录下，实现<strong>全局</strong>样式，被所有页面所公用。</p><figure><img src="https://cloud.iocoder.cn/img/Vue3/开发规范/06.png" alt="全局样式" tabindex="0" loading="lazy"><figcaption>全局样式</figcaption></figure><p>② 每个 <code>.vue</code> 页面，可在 <code>&lt;style /&gt;</code> 标签中添加样式，注意需要添加 <code>scoped</code> 表示只作用在当前页面里，避免造成全局的样式污染。</p><figure><img src="https://cloud.iocoder.cn/img/Vue3/开发规范/07.png" alt="业务样式" tabindex="0" loading="lazy"><figcaption>业务样式</figcaption></figure><p>更多也可以看看如下两篇文档：</p><ul><li><a href="https://kailong110120130.gitee.io/vue-element-plus-admin-doc/guide/settings.html#%E6%A0%B7%E5%BC%8F%E9%85%8D%E7%BD%AE" target="_blank" rel="noopener noreferrer">《vue-element-plus-admin —— 项目配置「样式配置」》</a></li><li><a href="https://kailong110120130.gitee.io/vue-element-plus-admin-doc/guide/design.html" target="_blank" rel="noopener noreferrer">《vue-element-plus-admin —— 样式》</a></li></ul><h2 id="_5-项目规范" tabindex="-1"><a class="header-anchor" href="#_5-项目规范"><span><a href="#_5-%E9%A1%B9%E7%9B%AE%E8%A7%84%E8%8C%83">#</a> 5. 项目规范</span></a></h2><p>可参考 <a href="https://kailong110120130.gitee.io/vue-element-plus-admin-doc/dep/lint.html" target="_blank" rel="noopener noreferrer">《vue-element-plus-admin —— 项目规范》</a> 文档。</p>`,62)]))}const d=n(l,[["render",p],["__file","dev-spec.html.vue"]]),t=JSON.parse('{"path":"/project/yudao-cloud/vue3/dev-spec.html","title":"开发规范","lang":"en-US","frontmatter":{"title":"开发规范","tags":["project","java","spring-boot","spring-cloud"],"categories":["project"],"order":154,"feed":false,"seo":false,"head":[]},"headers":[{"level":2,"title":"# 0. 实战案例","slug":"_0-实战案例","link":"#_0-实战案例","children":[{"level":3,"title":"# 0.1 普通列表","slug":"_0-1-普通列表","link":"#_0-1-普通列表","children":[]},{"level":3,"title":"# 0.2 树形列表","slug":"_0-2-树形列表","link":"#_0-2-树形列表","children":[]},{"level":3,"title":"# 0.3 高性能列表","slug":"_0-3-高性能列表","link":"#_0-3-高性能列表","children":[]},{"level":3,"title":"# 0.4 详情弹窗","slug":"_0-4-详情弹窗","link":"#_0-4-详情弹窗","children":[]}]},{"level":2,"title":"# 1. view 页面","slug":"_1-view-页面","link":"#_1-view-页面","children":[]},{"level":2,"title":"# 2. api 请求","slug":"_2-api-请求","link":"#_2-api-请求","children":[{"level":3,"title":"# 2.1 请求封装","slug":"_2-1-请求封装","link":"#_2-1-请求封装","children":[]},{"level":3,"title":"# 2.2 交互流程","slug":"_2-2-交互流程","link":"#_2-2-交互流程","children":[]}]},{"level":2,"title":"# 3. component 组件","slug":"_3-component-组件","link":"#_3-component-组件","children":[{"level":3,"title":"# 3.1 全局组件","slug":"_3-1-全局组件","link":"#_3-1-全局组件","children":[]},{"level":3,"title":"# 3.2 模块内组件","slug":"_3-2-模块内组件","link":"#_3-2-模块内组件","children":[]}]},{"level":2,"title":"# 4. style 样式","slug":"_4-style-样式","link":"#_4-style-样式","children":[]},{"level":2,"title":"# 5. 项目规范","slug":"_5-项目规范","link":"#_5-项目规范","children":[]}],"git":{"createdTime":1720365235000,"updatedTime":1720365235000,"contributors":[{"name":"Hung Nguyen Van","email":"vanhung4499@gmail.com","commits":1}]},"readingTime":{"minutes":7.41,"words":2223},"filePathRelative":"project/yudao-cloud/vue3/dev-spec.md","localizedDate":"July 7, 2024"}');export{d as comp,t as data};
