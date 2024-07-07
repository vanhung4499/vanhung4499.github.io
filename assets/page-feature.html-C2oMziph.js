import{_ as n,o as a,c as s,a as e}from"./app-BRTHG7K9.js";const l={},i=e(`<h1 id="分页实现" tabindex="-1"><a class="header-anchor" href="#分页实现"><span>分页实现</span></a></h1><ul><li>前端：基于 Element UI 分页组件 <a href="https://element.eleme.io/#/zh-CN/component/pagination" target="_blank" rel="noopener noreferrer">Pagination</a></li><li>后端：基于 MyBatis Plus 分页功能，二次封装</li></ul><p>以 [系统管理 -&gt; 租户管理 -&gt; 租户列表] 菜单为例子，讲解它的分页 + 搜索的实现。</p><h2 id="_1-前端分页实现" tabindex="-1"><a class="header-anchor" href="#_1-前端分页实现"><span><a href="#_1-%E5%89%8D%E7%AB%AF%E5%88%86%E9%A1%B5%E5%AE%9E%E7%8E%B0">#</a> 1. 前端分页实现</span></a></h2><h3 id="_1-1-vue-界面" tabindex="-1"><a class="header-anchor" href="#_1-1-vue-界面"><span><a href="#_1-1-vue-%E7%95%8C%E9%9D%A2">#</a> 1.1 Vue 界面</span></a></h3><p>界面 <a href="https://github.com/yudaocode/yudao-ui-admin-vue2/blob/master/src/views/system/tenant/index.vue" target="_blank" rel="noopener noreferrer"><code>tenant/index.vue</code></a> 相关的代码如下：</p><div class="language- line-numbers-mode" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>&lt;template&gt;</span></span>
<span class="line"><span>    &lt;!-- 搜索工作栏 --&gt;</span></span>
<span class="line"><span>    &lt;el-form :model=&quot;queryParams&quot; ref=&quot;queryForm&quot; size=&quot;small&quot; :inline=&quot;true&quot; v-show=&quot;showSearch&quot; label-width=&quot;68px&quot;&gt;</span></span>
<span class="line"><span>      &lt;el-form-item label=&quot;租户名&quot; prop=&quot;name&quot;&gt;</span></span>
<span class="line"><span>        &lt;el-input v-model=&quot;queryParams.name&quot; placeholder=&quot;请输入租户名&quot; clearable @keyup.enter.native=&quot;handleQuery&quot;/&gt;</span></span>
<span class="line"><span>      &lt;/el-form-item&gt;</span></span>
<span class="line"><span>      &lt;el-form-item label=&quot;联系人&quot; prop=&quot;contactName&quot;&gt;</span></span>
<span class="line"><span>        &lt;el-input v-model=&quot;queryParams.contactName&quot; placeholder=&quot;请输入联系人&quot; clearable @keyup.enter.native=&quot;handleQuery&quot;/&gt;</span></span>
<span class="line"><span>      &lt;/el-form-item&gt;</span></span>
<span class="line"><span>      &lt;el-form-item label=&quot;联系手机&quot; prop=&quot;contactMobile&quot;&gt;</span></span>
<span class="line"><span>        &lt;el-input v-model=&quot;queryParams.contactMobile&quot; placeholder=&quot;请输入联系手机&quot; clearable @keyup.enter.native=&quot;handleQuery&quot;/&gt;</span></span>
<span class="line"><span>      &lt;/el-form-item&gt;</span></span>
<span class="line"><span>      &lt;el-form-item label=&quot;租户状态&quot; prop=&quot;status&quot;&gt;</span></span>
<span class="line"><span>        &lt;el-select v-model=&quot;queryParams.status&quot; placeholder=&quot;请选择租户状态&quot; clearable&gt;</span></span>
<span class="line"><span>          &lt;el-option v-for=&quot;dict in this.getDictDatas(DICT_TYPE.COMMON_STATUS)&quot;</span></span>
<span class="line"><span>                       :key=&quot;dict.value&quot; :label=&quot;dict.label&quot; :value=&quot;dict.value&quot;/&gt;</span></span>
<span class="line"><span>        &lt;/el-select&gt;</span></span>
<span class="line"><span>      &lt;/el-form-item&gt;</span></span>
<span class="line"><span>      &lt;el-form-item&gt;</span></span>
<span class="line"><span>        &lt;el-button type=&quot;primary&quot; icon=&quot;el-icon-search&quot; @click=&quot;handleQuery&quot;&gt;搜索&lt;/el-button&gt;</span></span>
<span class="line"><span>        &lt;el-button icon=&quot;el-icon-refresh&quot; @click=&quot;resetQuery&quot;&gt;重置&lt;/el-button&gt;</span></span>
<span class="line"><span>      &lt;/el-form-item&gt;</span></span>
<span class="line"><span>    &lt;/el-form&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    &lt;!-- 列表 --&gt;</span></span>
<span class="line"><span>    &lt;el-table v-loading=&quot;loading&quot; :data=&quot;list&quot;&gt;</span></span>
<span class="line"><span>        &lt;!-- 省略每一列... --&gt;</span></span>
<span class="line"><span>    &lt;/el-table&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    &lt;!-- 分页组件 --&gt;</span></span>
<span class="line"><span>    &lt;pagination v-show=&quot;total &gt; 0&quot; :total=&quot;total&quot; :page.sync=&quot;queryParams.pageNo&quot; :limit.sync=&quot;queryParams.pageSize&quot;</span></span>
<span class="line"><span>                @pagination=&quot;getList&quot;/&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;/template&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;script&gt;</span></span>
<span class="line"><span>import { getTenantPage } from &quot;@/api/system/tenant&quot;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>export default {</span></span>
<span class="line"><span>	name: &quot;Tenant&quot;,</span></span>
<span class="line"><span>	components: {},</span></span>
<span class="line"><span>	data() {</span></span>
<span class="line"><span>      // 遮罩层</span></span>
<span class="line"><span>      return {</span></span>
<span class="line"><span>        // 遮罩层</span></span>
<span class="line"><span>        loading: true,</span></span>
<span class="line"><span>        // 显示搜索条件</span></span>
<span class="line"><span>        showSearch: true,</span></span>
<span class="line"><span>        // 总条数</span></span>
<span class="line"><span>        total: 0,</span></span>
<span class="line"><span>        // 租户列表</span></span>
<span class="line"><span>        list: [],</span></span>
<span class="line"><span>        // 查询参数</span></span>
<span class="line"><span>        queryParams: {</span></span>
<span class="line"><span>          pageNo: 1,</span></span>
<span class="line"><span>          pageSize: 10,</span></span>
<span class="line"><span>          // 搜索条件</span></span>
<span class="line"><span>          name: null,</span></span>
<span class="line"><span>          contactName: null,</span></span>
<span class="line"><span>          contactMobile: null,</span></span>
<span class="line"><span>          status: undefined,</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>	},</span></span>
<span class="line"><span>	created() {</span></span>
<span class="line"><span>	  this.getList();</span></span>
<span class="line"><span>	},</span></span>
<span class="line"><span>	methods: {</span></span>
<span class="line"><span>	  /** 查询列表 */</span></span>
<span class="line"><span>	  getList() {</span></span>
<span class="line"><span>	    this.loading = true;</span></span>
<span class="line"><span>	    // 处理查询参数</span></span>
<span class="line"><span>	    let params = {...this.queryParams};</span></span>
<span class="line"><span>		// 执行查询</span></span>
<span class="line"><span>	    getTenantPage(params).then(response =&gt; {</span></span>
<span class="line"><span>		  this.list = response.data.list;</span></span>
<span class="line"><span>		  this.total = response.data.total;</span></span>
<span class="line"><span>		  this.loading = false;</span></span>
<span class="line"><span>		});</span></span>
<span class="line"><span>      },</span></span>
<span class="line"><span>      /** 搜索按钮操作 */</span></span>
<span class="line"><span>      handleQuery() {</span></span>
<span class="line"><span>        this.queryParams.pageNo = 1;</span></span>
<span class="line"><span>        this.getList();</span></span>
<span class="line"><span>      },</span></span>
<span class="line"><span>      /** 重置按钮操作 */</span></span>
<span class="line"><span>      resetQuery() {</span></span>
<span class="line"><span>        this.resetForm(&quot;queryForm&quot;);</span></span>
<span class="line"><span>        this.handleQuery();</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>&lt;/script&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-2-api-请求" tabindex="-1"><a class="header-anchor" href="#_1-2-api-请求"><span><a href="#_1-2-api-%E8%AF%B7%E6%B1%82">#</a> 1.2 API 请求</span></a></h3><p>请求 <a href="https://github.com/yudaocode/yudao-ui-admin-vue2/blob/master/src/api/system/tenant.js" target="_blank" rel="noopener noreferrer"><code>system/tenant.js</code></a> 相关的代码如下：</p><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>import request from &#39;@/utils/request&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 获得租户分页</span></span>
<span class="line"><span>export function getTenantPage(query) {</span></span>
<span class="line"><span>  return request({</span></span>
<span class="line"><span>    url: &#39;/system/tenant/page&#39;,</span></span>
<span class="line"><span>    method: &#39;get&#39;,</span></span>
<span class="line"><span>    params: query</span></span>
<span class="line"><span>  })</span></span>
<span class="line"><span>}</span></span></code></pre></div><h2 id="_2-后端分页实现" tabindex="-1"><a class="header-anchor" href="#_2-后端分页实现"><span><a href="#_2-%E5%90%8E%E7%AB%AF%E5%88%86%E9%A1%B5%E5%AE%9E%E7%8E%B0">#</a> 2. 后端分页实现</span></a></h2><h3 id="_2-1-controller-接口" tabindex="-1"><a class="header-anchor" href="#_2-1-controller-接口"><span><a href="#_2-1-controller-%E6%8E%A5%E5%8F%A3">#</a> 2.1 Controller 接口</span></a></h3><p>在 <a href="https://github.com/YunaiV/ruoyi-vue-pro/blob/master/yudao-module-system/yudao-module-system-biz/src/main/java/cn/iocoder/yudao/module/system/controller/admin/tenant/TenantController.java#L75-L81" target="_blank" rel="noopener noreferrer">TenantController</a> 类中，定义 <code>/admin-api/system/tenant/page</code> 接口。代码如下：</p><div class="language- line-numbers-mode" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>@Tag(name = &quot;管理后台 - 租户&quot;)</span></span>
<span class="line"><span>@RestController</span></span>
<span class="line"><span>@RequestMapping(&quot;/system/tenant&quot;)</span></span>
<span class="line"><span>public class TenantController {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Resource</span></span>
<span class="line"><span>    private TenantService tenantService;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @GetMapping(&quot;/page&quot;)</span></span>
<span class="line"><span>    @Operation(summary = &quot;获得租户分页&quot;)</span></span>
<span class="line"><span>    @PreAuthorize(&quot;@ss.hasPermission(&#39;system:tenant:query&#39;)&quot;)</span></span>
<span class="line"><span>    public CommonResult&lt;PageResult&lt;TenantRespVO&gt;&gt; getTenantPage(@Valid TenantPageReqVO pageVO) {</span></span>
<span class="line"><span>        PageResult&lt;TenantDO&gt; pageResult = tenantService.getTenantPage(pageVO);</span></span>
<span class="line"><span>        return success(TenantConvert.INSTANCE.convertPage(pageResult));</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Request 分页请求，使用 <a href="https://github.com/YunaiV/ruoyi-vue-pro/blob/master/yudao-module-system/yudao-module-system-biz/src/main/java/cn/iocoder/yudao/module/system/controller/admin/tenant/vo/tenant/TenantPageReqVO.java" target="_blank" rel="noopener noreferrer">TenantPageReqVO</a> 类，它继承 PageParam 类</li><li>Response 分页结果，使用 PageResult 类，每一项是 <a href="https://github.com/YunaiV/ruoyi-vue-pro/blob/master/yudao-module-system/yudao-module-system-biz/src/main/java/cn/iocoder/yudao/module/system/controller/admin/tenant/vo/tenant/TenantRespVO.java" target="_blank" rel="noopener noreferrer">TenantRespVO</a> 类</li></ul><h4 id="_2-1-1-分页参数-pageparam" tabindex="-1"><a class="header-anchor" href="#_2-1-1-分页参数-pageparam"><span><a href="#_2-1-1-%E5%88%86%E9%A1%B5%E5%8F%82%E6%95%B0-pageparam">#</a> 2.1.1 分页参数 PageParam</span></a></h4><p>分页请求，需要继承 <a href="https://github.com/YunaiV/ruoyi-vue-pro/blob/master/yudao-framework/yudao-common/src/main/java/cn/iocoder/yudao/framework/common/pojo/PageParam.java" target="_blank" rel="noopener noreferrer">PageParam</a> 类。代码如下：</p><div class="language- line-numbers-mode" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>@Schema(description=&quot;分页参数&quot;)</span></span>
<span class="line"><span>@Data</span></span>
<span class="line"><span>public class PageParam implements Serializable {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    private static final Integer PAGE_NO = 1;</span></span>
<span class="line"><span>    private static final Integer PAGE_SIZE = 10;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Schema(description = &quot;页码，从 1 开始&quot;, required = true,example = &quot;1&quot;)</span></span>
<span class="line"><span>    @NotNull(message = &quot;页码不能为空&quot;)</span></span>
<span class="line"><span>    @Min(value = 1, message = &quot;页码最小值为 1&quot;)</span></span>
<span class="line"><span>    private Integer pageNo = PAGE_NO;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Schema(description = &quot;每页条数，最大值为 100&quot;, required = true, example = &quot;10&quot;)</span></span>
<span class="line"><span>    @NotNull(message = &quot;每页条数不能为空&quot;)</span></span>
<span class="line"><span>    @Min(value = 1, message = &quot;每页条数最小值为 1&quot;)</span></span>
<span class="line"><span>    @Max(value = 100, message = &quot;每页条数最大值为 100&quot;)</span></span>
<span class="line"><span>    private Integer pageSize = PAGE_SIZE;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>分页条件，在子类中进行定义。以 TenantPageReqVO 举例子，代码如下：</p><div class="language- line-numbers-mode" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>@Schema(description = &quot;管理后台 - 租户分页 Request VO&quot;)</span></span>
<span class="line"><span>@Data</span></span>
<span class="line"><span>@EqualsAndHashCode(callSuper = true)</span></span>
<span class="line"><span>@ToString(callSuper = true)</span></span>
<span class="line"><span>public class TenantPageReqVO extends PageParam {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Schema(description = &quot;租户名&quot;, example = &quot;芋道&quot;)</span></span>
<span class="line"><span>    private String name;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Schema(description = &quot;联系人&quot;, example = &quot;芋艿&quot;)</span></span>
<span class="line"><span>    private String contactName;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Schema(description = &quot;联系手机&quot;, example = &quot;15601691300&quot;)</span></span>
<span class="line"><span>    private String contactMobile;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Schema(description = &quot;租户状态（0正常 1停用）&quot;, example = &quot;1&quot;)</span></span>
<span class="line"><span>    private Integer status;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @DateTimeFormat(pattern = FORMAT_YEAR_MONTH_DAY_HOUR_MINUTE_SECOND)</span></span>
<span class="line"><span>    @Schema(description = &quot;创建时间&quot;)</span></span>
<span class="line"><span>    private LocalDateTime[] createTime;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-1-2-分页结果-pageresult" tabindex="-1"><a class="header-anchor" href="#_2-1-2-分页结果-pageresult"><span><a href="#_2-1-2-%E5%88%86%E9%A1%B5%E7%BB%93%E6%9E%9C-pageresult">#</a> 2.1.2 分页结果 PageResult</span></a></h4><p>分页结果 <a href="https://github.com/YunaiV/ruoyi-vue-pro/blob/master/yudao-framework/yudao-common/src/main/java/cn/iocoder/yudao/framework/common/pojo/PageResult.java" target="_blank" rel="noopener noreferrer">PageResult</a> 类，代码如下：</p><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>@Schema(description = &quot;分页结果&quot;)</span></span>
<span class="line"><span>@Data</span></span>
<span class="line"><span>public final class PageResult&lt;T&gt; implements Serializable {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Schema(description = &quot;数据&quot;, required = true)</span></span>
<span class="line"><span>    private List&lt;T&gt; list;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Schema(description = &quot;总量&quot;, required = true)</span></span>
<span class="line"><span>    private Long total;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>}</span></span></code></pre></div><p>分页结果的数据 <code>list</code> 的每一项，通过自定义 VO 类，例如说 <a href="https://github.com/YunaiV/ruoyi-vue-pro/blob/master/yudao-module-system/yudao-module-system-biz/src/main/java/cn/iocoder/yudao/module/system/controller/admin/tenant/vo/tenant/TenantRespVO.java" target="_blank" rel="noopener noreferrer">TenantRespVO</a> 类。</p><h3 id="_2-2-mapper-查询" tabindex="-1"><a class="header-anchor" href="#_2-2-mapper-查询"><span><a href="#_2-2-mapper-%E6%9F%A5%E8%AF%A2">#</a> 2.2 Mapper 查询</span></a></h3><p>在 <a href="https://github.com/YunaiV/ruoyi-vue-pro/blob/master/yudao-module-system/yudao-module-system-biz/src/main/java/cn/iocoder/yudao/module/system/dal/mysql/tenant/TenantMapper.java" target="_blank" rel="noopener noreferrer">TenantMapper</a> 类中，定义 selectPage 查询方法。代码如下：</p><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>@Mapper</span></span>
<span class="line"><span>public interface TenantMapper extends BaseMapperX&lt;TenantDO&gt; {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    default PageResult&lt;TenantDO&gt; selectPage(TenantPageReqVO reqVO) {</span></span>
<span class="line"><span>        return selectPage(reqVO, new LambdaQueryWrapperX&lt;TenantDO&gt;()</span></span>
<span class="line"><span>                .likeIfPresent(TenantDO::getName, reqVO.getName()) // 如果 name 不为空，则进行 like 查询</span></span>
<span class="line"><span>                .likeIfPresent(TenantDO::getContactName, reqVO.getContactName())</span></span>
<span class="line"><span>                .likeIfPresent(TenantDO::getContactMobile, reqVO.getContactMobile())</span></span>
<span class="line"><span>                .eqIfPresent(TenantDO::getStatus, reqVO.getStatus()) // 如果 status 不为空，则进行 = 查询</span></span>
<span class="line"><span>                .betweenIfPresent(TenantDO::getCreateTime, reqVO.getBeginCreateTime(), reqVO.getEndCreateTime()) // 如果 create 不为空，则进行 between 查询</span></span>
<span class="line"><span>                .orderByDesc(TenantDO::getId)); // 按照 id 倒序</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>}</span></span></code></pre></div><p>针对 MyBatis Plus 分页查询的二次分装，在 <a href="https://github.com/YunaiV/ruoyi-vue-pro/blob/master/yudao-framework/yudao-spring-boot-starter-mybatis/src/main/java/cn/iocoder/yudao/framework/mybatis/core/mapper/BaseMapperX.java" target="_blank" rel="noopener noreferrer">BaseMapperX</a> 中实现，主要是将 MyBatis 的分页结果 IPage，转换成项目的分页结果 PageResult。代码如下图：</p><figure><img src="https://doc.iocoder.cn/img/分页实现/01.png" alt="BaseMapperX 实现" tabindex="0" loading="lazy"><figcaption>BaseMapperX 实现</figcaption></figure>`,29),p=[i];function t(r,c){return a(),s("div",null,p)}const d=n(l,[["render",t],["__file","page-feature.html.vue"]]),u=JSON.parse('{"path":"/project/rouyi-vue-pro/page-feature.html","title":"分页实现","lang":"en-US","frontmatter":{"title":"分页实现","tags":["project","java","spring-boot","spring-cloud"],"categories":["project"],"order":33,"feed":false,"seo":false,"head":[]},"headers":[{"level":2,"title":"# 1. 前端分页实现","slug":"_1-前端分页实现","link":"#_1-前端分页实现","children":[{"level":3,"title":"# 1.1 Vue 界面","slug":"_1-1-vue-界面","link":"#_1-1-vue-界面","children":[]},{"level":3,"title":"# 1.2 API 请求","slug":"_1-2-api-请求","link":"#_1-2-api-请求","children":[]}]},{"level":2,"title":"# 2. 后端分页实现","slug":"_2-后端分页实现","link":"#_2-后端分页实现","children":[{"level":3,"title":"# 2.1 Controller 接口","slug":"_2-1-controller-接口","link":"#_2-1-controller-接口","children":[]},{"level":3,"title":"# 2.2 Mapper 查询","slug":"_2-2-mapper-查询","link":"#_2-2-mapper-查询","children":[]}]}],"git":{"createdTime":1720365235000,"updatedTime":1720365235000,"contributors":[{"name":"Hung Nguyen Van","email":"vanhung4499@gmail.com","commits":1}]},"readingTime":{"minutes":4,"words":1200},"filePathRelative":"project/rouyi-vue-pro/page-feature.md","localizedDate":"July 7, 2024"}');export{d as comp,u as data};
