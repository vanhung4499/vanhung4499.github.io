import{_ as a,o as s,c as n,a as e}from"./app-BRTHG7K9.js";const p={},i=e(`<h1 id="服务调用-feign" tabindex="-1"><a class="header-anchor" href="#服务调用-feign"><span>服务调用 Feign</span></a></h1><p><a href="https://github.com/YunaiV/yudao-cloud/blob/master/yudao-framework/yudao-spring-boot-starter-rpc/" target="_blank" rel="noopener noreferrer"><code>yudao-spring-boot-starter-rpc</code></a> 技术组件，基于 Feign 实现服务之间的调用。</p><p>为什么不使用 Dubbo 呢？</p><p>Feign 通用性更强，学习成本更低，对于绝大多数场景，都能够很好的满足需求。虽然 Dubbo 提供的性能更强，特性更全，但都是非必须的。</p><p>目前国内 95% 左右都是采用 Feign，而 Dubbo 的使用率只有 5% 左右。所以，我们也选择了 Feign。</p><p>如果你对 Feign 了解较少，可以阅读 <a href="https://www.iocoder.cn/Spring-Cloud/Feign/?yudao" target="_blank" rel="noopener noreferrer">《芋道 Spring Cloud 声明式调用 Feign 入门》</a> 系统学习。</p><h2 id="_1-rpc-使用规约" tabindex="-1"><a class="header-anchor" href="#_1-rpc-使用规约"><span><a href="#_1-rpc-%E4%BD%BF%E7%94%A8%E8%A7%84%E7%BA%A6">#</a> 1. RPC 使用规约</span></a></h2><p>本小节，我们来讲解下项目中 RPC 使用的规约。</p><h3 id="_1-1-api-前缀" tabindex="-1"><a class="header-anchor" href="#_1-1-api-前缀"><span><a href="#_1-1-api-%E5%89%8D%E7%BC%80">#</a> 1.1 API 前缀</span></a></h3><p>API 使用 HTTP 协议，所有的 API 前缀，都以 <a href="https://github.com/YunaiV/yudao-cloud/blob/master/yudao-framework/yudao-common/src/main/java/cn/iocoder/yudao/framework/common/enums/RpcConstants.java#L15" target="_blank" rel="noopener noreferrer"><code>/rpc-api</code></a> 开头，方便做统一的全局处理。</p><h3 id="_1-2-api-权限" tabindex="-1"><a class="header-anchor" href="#_1-2-api-权限"><span><a href="#_1-2-api-%E6%9D%83%E9%99%90">#</a> 1.2 API 权限</span></a></h3><p>服务之间的调用，不需要进行权限校验，所以需要在每个服务的 SecurityConfiguration 权限配置类中，添加如下配置：</p><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>// RPC 服务的安全配置</span></span>
<span class="line"><span>registry.antMatchers(ApiConstants.PREFIX + &quot;/**&quot;).permitAll();</span></span></code></pre></div><h3 id="_1-3-api-全局返回" tabindex="-1"><a class="header-anchor" href="#_1-3-api-全局返回"><span><a href="#_1-3-api-%E5%85%A8%E5%B1%80%E8%BF%94%E5%9B%9E">#</a> 1.3 API 全局返回</span></a></h3><p>所有 API 接口返回使用 <a href="https://github.com/YunaiV/yudao-cloud/blob/master/yudao-framework/yudao-common/src/main/java/cn/iocoder/yudao/framework/common/pojo/CommonResult.java" target="_blank" rel="noopener noreferrer">CommonResult</a> 返回，和前端 RESTful API 保持统一。例如说：</p><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>public interface DeptApi {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @GetMapping(PREFIX + &quot;/get&quot;)</span></span>
<span class="line"><span>    @Operation(summary = &quot;获得部门信息&quot;)</span></span>
<span class="line"><span>    @Parameter(name = &quot;id&quot;, description = &quot;部门编号&quot;, required = true, example = &quot;1024&quot;)</span></span>
<span class="line"><span>    CommonResult&lt;DeptRespDTO&gt; getDept(@RequestParam(&quot;id&quot;) Long id);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>}</span></span></code></pre></div><h3 id="_1-4-用户传递" tabindex="-1"><a class="header-anchor" href="#_1-4-用户传递"><span><a href="#_1-4-%E7%94%A8%E6%88%B7%E4%BC%A0%E9%80%92">#</a> 1.4 用户传递</span></a></h3><p>服务调用时，已经封装 Feign 将用户信息通过 HTTP 请求头 <code>login-user</code> 传递，通过 <a href="https://github.com/YunaiV/yudao-cloud/blob/master/yudao-framework/yudao-spring-boot-starter-security/src/main/java/cn/iocoder/yudao/framework/security/core/rpc/LoginUserRequestInterceptor.java" target="_blank" rel="noopener noreferrer">LoginUserRequestInterceptor</a> 类实现。</p><p>这样，被调用服务，可以通过 SecurityFrameworkUtils 获取到用户信息，例如说：</p><ul><li><code>#getLoginUser()</code> 方法，获取当前用户。</li><li><code>#getLoginUserId()</code> 方法，获取当前用户编号。</li></ul><h2 id="_2-如何定义一个-api-接口" tabindex="-1"><a class="header-anchor" href="#_2-如何定义一个-api-接口"><span><a href="#_2-%E5%A6%82%E4%BD%95%E5%AE%9A%E4%B9%89%E4%B8%80%E4%B8%AA-api-%E6%8E%A5%E5%8F%A3">#</a> 2. 如何定义一个 API 接口</span></a></h2><p>本小节，我们来讲解下如何定义一个 API 接口。以 AdminUserApi 提供的 getUser 接口来举例子。</p><h3 id="_2-1-服务提供者" tabindex="-1"><a class="header-anchor" href="#_2-1-服务提供者"><span><a href="#_2-1-%E6%9C%8D%E5%8A%A1%E6%8F%90%E4%BE%9B%E8%80%85">#</a> 2.1 服务提供者</span></a></h3><p>AdminUserApi 由 <code>system-server</code> 服务所提供。</p><h4 id="_2-1-1-apiconstants" tabindex="-1"><a class="header-anchor" href="#_2-1-1-apiconstants"><span><a href="#_2-1-1-apiconstants">#</a> 2.1.1 ApiConstants</span></a></h4><p>在 <code>yudao-module-system-api</code> 模块，创建 <a href="https://github.com/YunaiV/yudao-cloud/blob/master/yudao-module-system/yudao-module-system-api/src/main/java/cn/iocoder/yudao/module/system/enums/ApiConstants.java" target="_blank" rel="noopener noreferrer">ApiConstants</a> 类，定义 API 相关的枚举。代码如下：</p><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>public class ApiConstants {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /**</span></span>
<span class="line"><span>     * 服务名</span></span>
<span class="line"><span>     *</span></span>
<span class="line"><span>     * 注意，需要保证和 spring.application.name 保持一致</span></span>
<span class="line"><span>     */</span></span>
<span class="line"><span>    public static final String NAME = &quot;system-server&quot;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public static final String PREFIX = RpcConstants.RPC_API_PREFIX +  &quot;/system&quot;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public static final String VERSION = &quot;1.0.0&quot;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>}</span></span></code></pre></div><h4 id="_2-1-2-adminuserapi" tabindex="-1"><a class="header-anchor" href="#_2-1-2-adminuserapi"><span><a href="#_2-1-2-adminuserapi">#</a> 2.1.2 AdminUserApi</span></a></h4><p>在 <code>yudao-module-system-api</code> 模块，创建 <a href="https://github.com/YunaiV/yudao-cloud/blob/master/yudao-module-system/yudao-module-system-api/src/main/java/cn/iocoder/yudao/module/system/api/user/AdminUserApi.java" target="_blank" rel="noopener noreferrer">AdminUserApi</a> 类，定义 API 接口。代码如下：</p><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>@FeignClient(name = ApiConstants.NAME) // ① @FeignClient 注解</span></span>
<span class="line"><span>@Tag(name = &quot;RPC 服务 - 管理员用户&quot;) // ② Swagger 接口文档</span></span>
<span class="line"><span>public interface AdminUserApi {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    String PREFIX = ApiConstants.PREFIX + &quot;/user&quot;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @GetMapping(PREFIX + &quot;/get&quot;) // ③ Spring MVC 接口注解</span></span>
<span class="line"><span>    @Operation(summary = &quot;通过用户 ID 查询用户&quot;)  // ② Swagger 接口文档</span></span>
<span class="line"><span>    @Parameter(name = &quot;id&quot;, description = &quot;部门编号&quot;, required = true, example = &quot;1024&quot;) // ② Swagger 接口文档</span></span>
<span class="line"><span>    CommonResult&lt;AdminUserRespDTO&gt; getUser(@RequestParam(&quot;id&quot;) Long id);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>}</span></span></code></pre></div><p>另外，需要创建 <a href="https://github.com/YunaiV/yudao-cloud/blob/master/yudao-module-system/yudao-module-system-api/src/main/java/cn/iocoder/yudao/module/system/api/user/dto/AdminUserRespDTO.java" target="_blank" rel="noopener noreferrer">AdminUserRespDTO</a> 类，定义用户 Response DTO。代码如下：</p><div class="language- line-numbers-mode" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>@Data</span></span>
<span class="line"><span>public class AdminUserRespDTO {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /**</span></span>
<span class="line"><span>     * 用户ID</span></span>
<span class="line"><span>     */</span></span>
<span class="line"><span>    private Long id;</span></span>
<span class="line"><span>    /**</span></span>
<span class="line"><span>     * 用户昵称</span></span>
<span class="line"><span>     */</span></span>
<span class="line"><span>    private String nickname;</span></span>
<span class="line"><span>    /**</span></span>
<span class="line"><span>     * 帐号状态</span></span>
<span class="line"><span>     *</span></span>
<span class="line"><span>     * 枚举 {@link CommonStatusEnum}</span></span>
<span class="line"><span>     */</span></span>
<span class="line"><span>    private Integer status;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /**</span></span>
<span class="line"><span>     * 部门ID</span></span>
<span class="line"><span>     */</span></span>
<span class="line"><span>    private Long deptId;</span></span>
<span class="line"><span>    /**</span></span>
<span class="line"><span>     * 岗位编号数组</span></span>
<span class="line"><span>     */</span></span>
<span class="line"><span>    private Set&lt;Long&gt; postIds;</span></span>
<span class="line"><span>    /**</span></span>
<span class="line"><span>     * 手机号码</span></span>
<span class="line"><span>     */</span></span>
<span class="line"><span>    private String mobile;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-1-3-adminuserrpcimpl" tabindex="-1"><a class="header-anchor" href="#_2-1-3-adminuserrpcimpl"><span><a href="#_2-1-3-adminuserrpcimpl">#</a> 2.1.3 AdminUserRpcImpl</span></a></h4><p>在 <code>yudao-module-system-biz</code> 模块，创建 <a href="https://github.com/YunaiV/yudao-cloud/blob/master/yudao-module-system/yudao-module-system-biz/src/main/java/cn/iocoder/yudao/module/system/api/user/AdminUserApiImpl.java" target="_blank" rel="noopener noreferrer">AdminUserRpcImpl</a> 类，实现 API 接口。代码如下：</p><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>@RestController // 提供 RESTful API 接口，给 Feign 调用</span></span>
<span class="line"><span>@Validated</span></span>
<span class="line"><span>public class AdminUserApiImpl implements AdminUserApi {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Resource</span></span>
<span class="line"><span>    private AdminUserService userService;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>    public CommonResult&lt;AdminUserRespDTO&gt; getUser(Long id) {</span></span>
<span class="line"><span>        AdminUserDO user = userService.getUser(id);</span></span>
<span class="line"><span>        return success(UserConvert.INSTANCE.convert4(user));</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>}</span></span></code></pre></div><h3 id="_2-2-服务消费者" tabindex="-1"><a class="header-anchor" href="#_2-2-服务消费者"><span><a href="#_2-2-%E6%9C%8D%E5%8A%A1%E6%B6%88%E8%B4%B9%E8%80%85">#</a> 2.2 服务消费者</span></a></h3><p><code>bpm-server</code> 服务，调用了 AdminUserApi 接口。</p><h4 id="_2-2-1-引入依赖" tabindex="-1"><a class="header-anchor" href="#_2-2-1-引入依赖"><span><a href="#_2-2-1-%E5%BC%95%E5%85%A5%E4%BE%9D%E8%B5%96">#</a> 2.2.1 引入依赖</span></a></h4><p>在 <code>yudao-module-bpm-biz</code> 模块的 <a href="https://github.com/YunaiV/yudao-cloud/blob/master/yudao-module-bpm/yudao-module-bpm-biz/pom.xml#L30-L34" target="_blank" rel="noopener noreferrer"><code>pom.xml</code></a>，引入 <code>yudao-module-system-api</code> 模块的依赖。代码如下：</p><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>&lt;dependency&gt;</span></span>
<span class="line"><span>    &lt;groupId&gt;cn.iocoder.cloud&lt;/groupId&gt;</span></span>
<span class="line"><span>    &lt;artifactId&gt;yudao-module-system-api&lt;/artifactId&gt;</span></span>
<span class="line"><span>    &lt;version&gt;\${revision}&lt;/version&gt;</span></span>
<span class="line"><span>&lt;/dependency&gt;</span></span></code></pre></div><h4 id="_2-2-2-引用-api" tabindex="-1"><a class="header-anchor" href="#_2-2-2-引用-api"><span><a href="#_2-2-2-%E5%BC%95%E7%94%A8-api">#</a> 2.2.2 引用 API</span></a></h4><p>在 <code>yudao-module-bpm-biz</code> 模块，创建 <a href="https://github.com/YunaiV/yudao-cloud/blob/master/yudao-module-bpm/yudao-module-bpm-biz/src/main/java/cn/iocoder/yudao/module/bpm/framework/rpc/config/RpcConfiguration.java" target="_blank" rel="noopener noreferrer">RpcConfiguration</a> 配置类，注入 AdminUserApi 接口。代码如下：</p><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>@Configuration(proxyBeanMethods = false)</span></span>
<span class="line"><span>@EnableFeignClients(clients = {AdminUserApi.class.class})</span></span>
<span class="line"><span>public class RpcConfiguration {</span></span>
<span class="line"><span>}</span></span></code></pre></div><h4 id="_2-2-3-调用-api" tabindex="-1"><a class="header-anchor" href="#_2-2-3-调用-api"><span><a href="#_2-2-3-%E8%B0%83%E7%94%A8-api">#</a> 2.2.3 调用 API</span></a></h4><p>例如说，<a href="https://github.com/YunaiV/yudao-cloud/blob/master/yudao-module-bpm/yudao-module-bpm-biz/src/main/java/cn/iocoder/yudao/module/bpm/service/task/BpmTaskServiceImpl.java#L302" target="_blank" rel="noopener noreferrer">BpmTaskServiceImpl</a> 调用了 AdminUserApi 接口，代码如下：</p><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>@Service</span></span>
<span class="line"><span>public class BpmTaskServiceImpl implements BpmTaskService {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Resource</span></span>
<span class="line"><span>    private AdminUserApi adminUserApi;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>    public void updateTaskExtAssign(Task task) {</span></span>
<span class="line"><span>        // ... 省略非关键代码</span></span>
<span class="line"><span>        AdminUserRespDTO startUser = adminUserApi.getUser(id).getCheckedData();</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div>`,46),l=[i];function r(o,c){return s(),n("div",null,l)}const t=a(p,[["render",r],["__file","rpc.html.vue"]]),u=JSON.parse('{"path":"/project/yudao-cloud/rpc.html","title":"服务调用 Feign","lang":"en-US","frontmatter":{"title":"服务调用 Feign","tags":["project","java","spring-boot","spring-cloud"],"categories":["project"],"order":54,"feed":false,"seo":false,"head":[]},"headers":[{"level":2,"title":"# 1. RPC 使用规约","slug":"_1-rpc-使用规约","link":"#_1-rpc-使用规约","children":[{"level":3,"title":"# 1.1 API 前缀","slug":"_1-1-api-前缀","link":"#_1-1-api-前缀","children":[]},{"level":3,"title":"# 1.2 API 权限","slug":"_1-2-api-权限","link":"#_1-2-api-权限","children":[]},{"level":3,"title":"# 1.3 API 全局返回","slug":"_1-3-api-全局返回","link":"#_1-3-api-全局返回","children":[]},{"level":3,"title":"# 1.4 用户传递","slug":"_1-4-用户传递","link":"#_1-4-用户传递","children":[]}]},{"level":2,"title":"# 2. 如何定义一个 API 接口","slug":"_2-如何定义一个-api-接口","link":"#_2-如何定义一个-api-接口","children":[{"level":3,"title":"# 2.1 服务提供者","slug":"_2-1-服务提供者","link":"#_2-1-服务提供者","children":[]},{"level":3,"title":"# 2.2 服务消费者","slug":"_2-2-服务消费者","link":"#_2-2-服务消费者","children":[]}]}],"git":{"createdTime":1720365235000,"updatedTime":1720365235000,"contributors":[{"name":"Hung Nguyen Van","email":"vanhung4499@gmail.com","commits":1}]},"readingTime":{"minutes":3.65,"words":1096},"filePathRelative":"project/yudao-cloud/rpc.md","localizedDate":"July 7, 2024"}');export{t as comp,u as data};
