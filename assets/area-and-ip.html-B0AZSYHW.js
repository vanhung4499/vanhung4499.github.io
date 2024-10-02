import{_ as n,o as s,c as e,a as i}from"./app-5QVbWi7Z.js";const l={};function p(r,a){return s(),e("div",null,a[0]||(a[0]=[i(`<h1 id="地区-ip-库" tabindex="-1"><a class="header-anchor" href="#地区-ip-库"><span>地区 &amp; IP 库</span></a></h1><p><a href="https://github.com/YunaiV/ruoyi-vue-pro/tree/master/yudao-framework/yudao-spring-boot-starter-biz-ip" target="_blank" rel="noopener noreferrer"><code>yudao-spring-boot-starter-biz-ip</code></a> 业务组件，提供地区 &amp; IP 库的封装。</p><h2 id="_1-地区" tabindex="-1"><a class="header-anchor" href="#_1-地区"><span><a href="#_1-%E5%9C%B0%E5%8C%BA">#</a> 1. 地区</span></a></h2><p><a href="https://github.com/YunaiV/ruoyi-vue-pro/blob/master/yudao-framework/yudao-spring-boot-starter-biz-ip/src/main/java/cn/iocoder/yudao/framework/ip/core/utils/AreaUtils.java" target="_blank" rel="noopener noreferrer">AreaUtils</a> 是地区工具类，可以查询中国的省、市、区县，也可以查询国外的国家。</p><p>它的数据来自 <a href="https://github.com/modood/Administrative-divisions-of-China" target="_blank" rel="noopener noreferrer">Administrative-divisions-of-China</a> 项目，最终整理到项目的 <a href="https://github.com/YunaiV/ruoyi-vue-pro/blob/master/yudao-framework/yudao-spring-boot-starter-biz-ip/src/main/resources/area.csv" target="_blank" rel="noopener noreferrer">area.csv</a> 文件。每一行的数据，对应 <a href="https://github.com/YunaiV/ruoyi-vue-pro/blob/master/yudao-framework/yudao-spring-boot-starter-biz-ip/src/main/java/cn/iocoder/yudao/framework/ip/core/Area.java" target="_blank" rel="noopener noreferrer">Area</a> 对象。代码所示：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#abb2bf;--shiki-dark:#abb2bf;--shiki-light-bg:#282c34;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code"><code><span class="line"><span>public class Area {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /**</span></span>
<span class="line"><span>     * 编号</span></span>
<span class="line"><span>     */</span></span>
<span class="line"><span>    private Integer id;</span></span>
<span class="line"><span>    /**</span></span>
<span class="line"><span>     * 名字</span></span>
<span class="line"><span>     */</span></span>
<span class="line"><span>    private String name;</span></span>
<span class="line"><span>    /**</span></span>
<span class="line"><span>     * 类型</span></span>
<span class="line"><span>     *</span></span>
<span class="line"><span>     * 枚举 {@link AreaTypeEnum}</span></span>
<span class="line"><span>     * 1 - 国家</span></span>
<span class="line"><span>     * 2 - 省份</span></span>
<span class="line"><span>     * 3 - 城市</span></span>
<span class="line"><span>     * 4 - 地区, 例如说县、镇、区等</span></span>
<span class="line"><span>     */</span></span>
<span class="line"><span>    private Integer type;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /**</span></span>
<span class="line"><span>     * 父节点</span></span>
<span class="line"><span>     */</span></span>
<span class="line"><span>    private Area parent;</span></span>
<span class="line"><span>    /**</span></span>
<span class="line"><span>     * 子节点</span></span>
<span class="line"><span>     */</span></span>
<span class="line"><span>    private List&lt;Area&gt; children;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>AreaUtils 主要有如下两个方法：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#abb2bf;--shiki-dark:#abb2bf;--shiki-light-bg:#282c34;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code"><code><span class="line"><span>// AreaUtils.java</span></span>
<span class="line"><span></span></span>
<span class="line"><span>/**</span></span>
<span class="line"><span> * 获得指定编号对应的区域</span></span>
<span class="line"><span> *</span></span>
<span class="line"><span> * @param id 区域编号</span></span>
<span class="line"><span> * @return 区域</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>public static Area getArea(Integer id) {</span></span>
<span class="line"><span>    // ... 省略具体实现</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>/**</span></span>
<span class="line"><span> * 格式化区域</span></span>
<span class="line"><span> *</span></span>
<span class="line"><span> * 例如说：</span></span>
<span class="line"><span> *      1. id = “静安区”时：上海 上海市 静安区</span></span>
<span class="line"><span> *      2. id = “上海市”时：上海 上海市</span></span>
<span class="line"><span> *      3. id = “上海”时：上海</span></span>
<span class="line"><span> *      4. id = “美国”时：美国</span></span>
<span class="line"><span> * 当区域在中国时，默认不显示中国</span></span>
<span class="line"><span> *</span></span>
<span class="line"><span> * @param id 区域编号</span></span>
<span class="line"><span> * @param separator 分隔符</span></span>
<span class="line"><span> * @return 格式化后的区域</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>public static String format(Integer id, String separator) {</span></span>
<span class="line"><span>    // ... 省略具体实现</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>具体的使用，可见 <a href="https://github.com/YunaiV/ruoyi-vue-pro/blob/master/yudao-framework/yudao-spring-boot-starter-biz-ip/src/test/java/cn/iocoder/yudao/framework/ip/core/utils/AreaUtilsTest.java" target="_blank" rel="noopener noreferrer">AreaUtilsTest</a> 测试类。</li></ul><p>另外，管理后台提供了 [系统管理 -&gt; 地区管理] 菜单，可以按照树形结构查看地区列表。如下图所示：</p><figure><img src="https://doc.iocoder.cn/img/地区与IP/地区管理.png" alt="地区管理" tabindex="0" loading="lazy"><figcaption>地区管理</figcaption></figure><ul><li>后端代码，对应 <a href="https://github.com/YunaiV/ruoyi-vue-pro/blob/master/yudao-module-system/yudao-module-system-biz/src/main/java/cn/iocoder/yudao/module/system/controller/admin/ip/AreaController.java#L29-L35" target="_blank" rel="noopener noreferrer">AreaController</a> 的 <code>/admin-api/system/area/tree</code> 接口</li><li>前端代码，对应 <a href="https://github.com/yudaocode/yudao-ui-admin-vue2/blob/master/src/views/system/area/index.vue" target="_blank" rel="noopener noreferrer">system/area/index.vue</a> 界面</li></ul><h2 id="_2-ip" tabindex="-1"><a class="header-anchor" href="#_2-ip"><span><a href="#_2-ip">#</a> 2. IP</span></a></h2><p><a href="https://github.com/YunaiV/ruoyi-vue-pro/blob/master/yudao-framework/yudao-spring-boot-starter-biz-ip/src/main/java/cn/iocoder/yudao/framework/ip/core/utils/IPUtils.java" target="_blank" rel="noopener noreferrer">IPUtils</a> 是 IP 工具类，可以查询 IP 对应的城市信息。</p><p>它的数据来自 <a href="https://gitee.com/lionsoul/ip2region" target="_blank" rel="noopener noreferrer">ip2region</a> 项目，最终整理到项目的 <a href="https://github.com/YunaiV/ruoyi-vue-pro/blob/master/yudao-framework/yudao-spring-boot-starter-biz-ip/src/main/resources/ip2region.xdb" target="_blank" rel="noopener noreferrer">ip2region.xdb</a> 文件。</p><p>IPUtils 主要有如下两个方法：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#abb2bf;--shiki-dark:#abb2bf;--shiki-light-bg:#282c34;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code"><code><span class="line"><span>// IPUtils.java</span></span>
<span class="line"><span>/**</span></span>
<span class="line"><span> * 查询 IP 对应的地区编号</span></span>
<span class="line"><span> *</span></span>
<span class="line"><span> * @param ip IP 地址，格式为 127.0.0.1</span></span>
<span class="line"><span> * @return 地区id</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>public static Integer getAreaId(String ip) {</span></span>
<span class="line"><span>    // ... 省略具体实现</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>/**</span></span>
<span class="line"><span> * 查询 IP 对应的地区</span></span>
<span class="line"><span> *</span></span>
<span class="line"><span> * @param ip IP 地址，格式为 127.0.0.1</span></span>
<span class="line"><span> * @return 地区</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>public static Area getArea(String ip) {</span></span>
<span class="line"><span>        // ... 省略具体实现</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>具体的使用，可见 <a href="https://github.com/YunaiV/ruoyi-vue-pro/blob/master/yudao-framework/yudao-spring-boot-starter-biz-ip/src/test/java/cn/iocoder/yudao/framework/ip/core/utils/IPUtilsTest.java" target="_blank" rel="noopener noreferrer">IPUtilsTest</a> 测试类。</li></ul><p>另外，管理后台提供了 [系统管理 -&gt; 地区管理] 菜单，也提供了 IP 查询城市的示例。如下图所示：</p><figure><img src="https://doc.iocoder.cn/img/地区与IP/IP查询城市.png" alt="IP 查询城市" tabindex="0" loading="lazy"><figcaption>IP 查询城市</figcaption></figure><ul><li>后端代码，对应 <a href="https://github.com/YunaiV/ruoyi-vue-pro/blob/master/yudao-module-system/yudao-module-system-biz/src/main/java/cn/iocoder/yudao/module/system/controller/admin/ip/AreaController.java#L37-L48" target="_blank" rel="noopener noreferrer">AreaController</a> 的 <code>/admin-api/system/area/get-by-ip</code> 接口</li></ul>`,21)]))}const c=n(l,[["render",p],["__file","area-and-ip.html.vue"]]),t=JSON.parse('{"path":"/project/rouyi-vue-pro/area-and-ip.html","title":"地区 & IP 库","lang":"en-US","frontmatter":{"title":"地区 & IP 库","tags":["project","java","spring-boot","spring-cloud"],"categories":["project"],"order":161,"feed":false,"seo":false,"head":[]},"headers":[{"level":2,"title":"# 1. 地区","slug":"_1-地区","link":"#_1-地区","children":[]},{"level":2,"title":"# 2. IP","slug":"_2-ip","link":"#_2-ip","children":[]}],"git":{"createdTime":1720365235000,"updatedTime":1720365235000,"contributors":[{"name":"Hung Nguyen Van","email":"vanhung4499@gmail.com","commits":1}]},"readingTime":{"minutes":2.5,"words":750},"filePathRelative":"project/rouyi-vue-pro/area-and-ip.md","localizedDate":"July 7, 2024"}');export{c as comp,t as data};
