import{_ as e,g as p,o as l,c as i,e as t,h as s,f as r,w as c,a}from"./app-BRTHG7K9.js";const d={},o=a('<h1 id="mybatis-联表-分页查询" tabindex="-1"><a class="header-anchor" href="#mybatis-联表-分页查询"><span>MyBatis 联表&amp;分页查询</span></a></h1><p>本文，分享 MyBatis 各种常用操作，不限于链表查询、分页查询等等。</p><h2 id="_1-分页查询" tabindex="-1"><a class="header-anchor" href="#_1-分页查询"><span><a href="#_1-%E5%88%86%E9%A1%B5%E6%9F%A5%E8%AF%A2">#</a> 1. 分页查询</span></a></h2>',3),m=a(`<p>这里，以查询 <code>system_users</code> 表为例，讲解如何使用 XML 实现分页查询。</p><h3 id="_1-1-方案一-mybatis-xml" tabindex="-1"><a class="header-anchor" href="#_1-1-方案一-mybatis-xml"><span><a href="#_1-1-%E6%96%B9%E6%A1%88%E4%B8%80-mybatis-xml">#</a> 1.1 方案一：MyBatis XML</span></a></h3><p>这个是 MyBatis 内置的使用方式，步骤如下：</p><figure><img src="https://cloud.iocoder.cn/img/数据库MyBatis/分页案例01/01.png" alt="分页案例 01" tabindex="0" loading="lazy"><figcaption>分页案例 01</figcaption></figure><p>① 创建 <code>AdminUserMapper.xml</code> 文件，编写两个 SQL 查询语句：</p><div class="language- line-numbers-mode" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;</span></span>
<span class="line"><span>&lt;!DOCTYPE mapper PUBLIC &quot;-//mybatis.org//DTD Mapper 3.0//EN&quot; &quot;http://mybatis.org/dtd/mybatis-3-mapper.dtd&quot;&gt;</span></span>
<span class="line"><span>&lt;mapper namespace=&quot;cn.iocoder.yudao.module.system.dal.mysql.user.AdminUserMapper&quot;&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    &lt;select id=&quot;selectPage01List&quot;</span></span>
<span class="line"><span>            resultType=&quot;cn.iocoder.yudao.module.system.dal.dataobject.user.AdminUserDO&quot; &gt;</span></span>
<span class="line"><span>        SELECT * FROM system_users</span></span>
<span class="line"><span>        &lt;where&gt;</span></span>
<span class="line"><span>            &lt;if test=&quot;reqVO.username != null and reqVO.username !=&#39;&#39;&quot;&gt;</span></span>
<span class="line"><span>                AND username LIKE CONCAT(&#39;%&#39;,#{reqVO.username},&#39;%&#39;)</span></span>
<span class="line"><span>            &lt;/if&gt;</span></span>
<span class="line"><span>            &lt;if test=&quot;reqVO.createTime != null&quot;&gt;</span></span>
<span class="line"><span>                AND create_time BETWEEN #{reqVO.createTime[0]}, #{reqVO.createTime[1]},</span></span>
<span class="line"><span>            &lt;/if&gt;</span></span>
<span class="line"><span>            &lt;if test=&quot;reqVO.status != null&quot;&gt;</span></span>
<span class="line"><span>                AND status = #{reqVO.status}</span></span>
<span class="line"><span>            &lt;/if&gt;</span></span>
<span class="line"><span>        &lt;/where&gt;</span></span>
<span class="line"><span>        ORDER BY id DESC</span></span>
<span class="line"><span>        LIMIT #{reqVO.pageNo}, #{reqVO.pageSize}</span></span>
<span class="line"><span>    &lt;/select&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    &lt;select id=&quot;selectPage01Count&quot; resultType=&quot;Long&quot; &gt;</span></span>
<span class="line"><span>        SELECT COUNT(1) FROM system_users</span></span>
<span class="line"><span>        &lt;where&gt;</span></span>
<span class="line"><span>            &lt;if test=&quot;reqVO.username != null and reqVO.username !=&#39;&#39;&quot;&gt;</span></span>
<span class="line"><span>                AND username LIKE CONCAT(&#39;%&#39;,#{reqVO.username},&#39;%&#39;)</span></span>
<span class="line"><span>            &lt;/if&gt;</span></span>
<span class="line"><span>            &lt;if test=&quot;reqVO.createTime != null&quot;&gt;</span></span>
<span class="line"><span>                AND create_time BETWEEN #{reqVO.createTime[0]}, #{reqVO.createTime[1]},</span></span>
<span class="line"><span>            &lt;/if&gt;</span></span>
<span class="line"><span>            &lt;if test=&quot;reqVO.status != null&quot;&gt;</span></span>
<span class="line"><span>                AND status = #{reqVO.status}</span></span>
<span class="line"><span>            &lt;/if&gt;</span></span>
<span class="line"><span>        &lt;/where&gt;</span></span>
<span class="line"><span>    &lt;/select&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;/mapper&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>② 在 AdminUserMapper 创建这两 SQL 对应的方法：</p><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>@Mapper</span></span>
<span class="line"><span>public interface AdminUserMapper extends BaseMapperX&lt;AdminUserDO&gt; {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /**</span></span>
<span class="line"><span>     * 查询分页的列表</span></span>
<span class="line"><span>     */</span></span>
<span class="line"><span>    List&lt;AdminUserDO&gt; selectPage01List(@Param(&quot;reqVO&quot;) UserPageReqVO reqVO);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /**</span></span>
<span class="line"><span>     * 查询分页的条数</span></span>
<span class="line"><span>     */</span></span>
<span class="line"><span>    Long selectPage01Count(@Param(&quot;reqVO&quot;) UserPageReqVO reqVO);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>}</span></span></code></pre></div><p>其中 <a href="https://github.com/YunaiV/ruoyi-vue-pro/blob/master/yudao-module-system/yudao-module-system-biz/src/main/java/cn/iocoder/yudao/module/system/controller/admin/user/vo/user/UserPageReqVO.java" target="_blank" rel="noopener noreferrer">UserPageReqVO.java</a> 是分页查询的请求 VO。</p><p>③ 在 AdminUserServiceImplService 层，调用这两个方法，实现分页查询：</p><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>@Service</span></span>
<span class="line"><span>@Slf4j</span></span>
<span class="line"><span>public class AdminUserServiceImpl implements AdminUserService {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>    public PageResult&lt;AdminUserDO&gt; getUserPage(UserPageReqVO reqVO) {</span></span>
<span class="line"><span>        return new PageResult&lt;&gt;(</span></span>
<span class="line"><span>                userMapper.selectPage01List(reqVO),</span></span>
<span class="line"><span>                userMapper.selectPage01Count(reqVO)</span></span>
<span class="line"><span>        );</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>④ 简单调用下，可以在 IDEA 控制台看到 2 条 SQL：</p><figure><img src="https://cloud.iocoder.cn/img/数据库MyBatis/分页案例01/02.png" alt="分页案例 01 的效果" tabindex="0" loading="lazy"><figcaption>分页案例 01 的效果</figcaption></figure><h3 id="_1-2-方案二-mybatis-plus-xml" tabindex="-1"><a class="header-anchor" href="#_1-2-方案二-mybatis-plus-xml"><span><a href="#_1-2-%E6%96%B9%E6%A1%88%E4%BA%8C-mybatis-plus-xml">#</a> 1.2 方案二：MyBatis Plus XML</span></a></h3><p>这个是 MyBatis Plus 拓展的使用方式，可以简化只需要写一条 SQL，步骤如下：</p><figure><img src="https://cloud.iocoder.cn/img/数据库MyBatis/分页案例02/01.png" alt="分页案例 02" tabindex="0" loading="lazy"><figcaption>分页案例 02</figcaption></figure><p>① 创建 <code>AdminUserMapper.xml</code> 文件，只编写一个 SQL 查询语句：</p><div class="language- line-numbers-mode" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;</span></span>
<span class="line"><span>&lt;!DOCTYPE mapper PUBLIC &quot;-//mybatis.org//DTD Mapper 3.0//EN&quot; &quot;http://mybatis.org/dtd/mybatis-3-mapper.dtd&quot;&gt;</span></span>
<span class="line"><span>&lt;mapper namespace=&quot;cn.iocoder.yudao.module.system.dal.mysql.user.AdminUserMapper&quot;&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    &lt;select id=&quot;selectPage02&quot;</span></span>
<span class="line"><span>            resultType=&quot;cn.iocoder.yudao.module.system.dal.dataobject.user.AdminUserDO&quot; &gt;</span></span>
<span class="line"><span>        SELECT * FROM system_users</span></span>
<span class="line"><span>        &lt;where&gt;</span></span>
<span class="line"><span>            &lt;if test=&quot;reqVO.username != null and reqVO.username !=&#39;&#39;&quot;&gt;</span></span>
<span class="line"><span>                AND username LIKE CONCAT(&#39;%&#39;,#{reqVO.username},&#39;%&#39;)</span></span>
<span class="line"><span>            &lt;/if&gt;</span></span>
<span class="line"><span>            &lt;if test=&quot;reqVO.createTime != null&quot;&gt;</span></span>
<span class="line"><span>                AND create_time BETWEEN #{reqVO.createTime[0]}, #{reqVO.createTime[1]},</span></span>
<span class="line"><span>            &lt;/if&gt;</span></span>
<span class="line"><span>            &lt;if test=&quot;reqVO.status != null&quot;&gt;</span></span>
<span class="line"><span>                AND status = #{reqVO.status}</span></span>
<span class="line"><span>            &lt;/if&gt;</span></span>
<span class="line"><span>        &lt;/where&gt;</span></span>
<span class="line"><span>        ORDER BY id DESC</span></span>
<span class="line"><span>    &lt;/select&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;/mapper&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意，不需要写 <code>LIMIT</code> 分页语句噢。</p><p>② 在 AdminUserMapper 创建这一 SQL 对应的方法：</p><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>@Mapper</span></span>
<span class="line"><span>public interface AdminUserMapper extends BaseMapperX&lt;AdminUserDO&gt; {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    IPage&lt;AdminUserDO&gt; selectPage02(IPage&lt;AdminUserDO&gt; page, @Param(&quot;reqVO&quot;) UserPageReqVO reqVO);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>}</span></span></code></pre></div><p>第一个参数、返回结果必须都是 IPage 类型，第二个参数可以放查询条件。</p><p>③ 在 AdminUserServiceImplService 层，调用这一个方法，实现分页查询：</p><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>@Service</span></span>
<span class="line"><span>@Slf4j</span></span>
<span class="line"><span>public class AdminUserServiceImpl implements AdminUserService {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>    public PageResult&lt;AdminUserDO&gt; getUserPage(UserPageReqVO reqVO) {</span></span>
<span class="line"><span>        // 必须使用 MyBatis Plus 的分页对象</span></span>
<span class="line"><span>        IPage&lt;AdminUserDO&gt; page = new Page&lt;&gt;(reqVO.getPageNo(), reqVO.getPageSize());</span></span>
<span class="line"><span>        userMapper.selectPage02(page, reqVO);</span></span>
<span class="line"><span>        return new PageResult&lt;&gt;(page.getRecords(), page.getTotal());</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>因为项目使用 PageParam 和 PageResult 作为分页对象，所以需要和 IPage 做下转换。</p><p>④ 简单调用下，可以在 IDEA 控制台看到 2 条 SQL：</p><figure><img src="https://cloud.iocoder.cn/img/数据库MyBatis/分页案例02/02.png" alt="分页案例 02 的效果" tabindex="0" loading="lazy"><figcaption>分页案例 02 的效果</figcaption></figure><p>本质上，MyBatis Plus 是基于我们在 XML 编写的这条 SQL，计算出获得分页数量的 SQL。</p><p>一般情况下，建议采用方案二：MyBatis Plus XML，因为它开发效率更高，并且在分页数量为 0 时，就不多余查询分页的列表，一定程度上可以提升性能。</p><h2 id="_2-联表查询" tabindex="-1"><a class="header-anchor" href="#_2-联表查询"><span><a href="#_2-%E8%81%94%E8%A1%A8%E6%9F%A5%E8%AF%A2">#</a> 2. 联表查询</span></a></h2><p>对于需要链表查询的场景，建议也是写 MyBatis XML，使用方法比较简单，可以看下 <a href="https://www.cnblogs.com/best/p/9723085.html" target="_blank" rel="noopener noreferrer">《MyBatis学习总结（三）—— 多表关联查询与动态 SQL》</a> 文章。</p><p>除了 XML 这种方式外，项目也集成了 <a href="https://mybatisplusjoin.com/" target="_blank" rel="noopener noreferrer">MyBatis Plus Join</a> 框架，通过 Java 代码实现联表查询。</p><p>这里，以查询 <code>system_users</code> 和 <code>system_dept</code> 联表，查询部门名为 <code>芋道源码</code>、用户状态为开启的用户列表。</p><h3 id="_2-1-案例一-字段平铺" tabindex="-1"><a class="header-anchor" href="#_2-1-案例一-字段平铺"><span><a href="#_2-1-%E6%A1%88%E4%BE%8B%E4%B8%80-%E5%AD%97%E6%AE%B5%E5%B9%B3%E9%93%BA">#</a> 2.1 案例一：字段平铺</span></a></h3><p>① 创建 AdminUserDetailDO 类，继承 AdminUserDO 类，并添加 <code>deptName</code> 平铺。代码如下：</p><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>@Data</span></span>
<span class="line"><span>public class AdminUserDetailDO extends AdminUserDO {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    private String deptName;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>}</span></span></code></pre></div><p>② 在 AdminUserMapper 创建 selectListByStatusAndDeptName 方法，代码如下：</p><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>@Mapper</span></span>
<span class="line"><span>public interface AdminUserMapper extends BaseMapperX&lt;AdminUserDO&gt; {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    default List&lt;AdminUserDetailDO&gt; selectList2ByStatusAndDeptName(Integer status, String deptName) {</span></span>
<span class="line"><span>        return selectJoinList(AdminUserDetailDO.class, new MPJLambdaWrapper&lt;AdminUserDO&gt;() // 查询 List</span></span>
<span class="line"><span>                .selectAll(AdminUserDO.class) // 查询 system_users 表的 all 所有字段</span></span>
<span class="line"><span>                .selectAs(DeptDO::getName, AdminUserDetailDO::getDeptName) // 查询 system_dept 表的 name 字段，使用 deptName 字段“部分”返回</span></span>
<span class="line"><span>                .eq(AdminUserDO::getStatus, status) // WHERE system_users.status = ? 【部门名为 \`芋道源码\`】</span></span>
<span class="line"><span>                .leftJoin(DeptDO.class, DeptDO::getId, AdminUserDO::getDeptId) // 联表 WHERE system_users.dept_id = system_dept.id</span></span>
<span class="line"><span>                .eq(DeptDO::getName, deptName) // WHERE system_dept.name = ? 【用户状态为开启】</span></span>
<span class="line"><span>        );</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>}</span></span></code></pre></div><h3 id="_2-2-案例二-字段内嵌" tabindex="-1"><a class="header-anchor" href="#_2-2-案例二-字段内嵌"><span><a href="#_2-2-%E6%A1%88%E4%BE%8B%E4%BA%8C-%E5%AD%97%E6%AE%B5%E5%86%85%E5%B5%8C">#</a> 2.2 案例二：字段内嵌</span></a></h3><p>① 创建 AdminUserDetailDO 类，继承 AdminUserDO 类，并添加 <code>dept</code> 部门。代码如下：</p><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>@Data</span></span>
<span class="line"><span>public class AdminUserDetail2DO extends AdminUserDO {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    private DeptDO dept;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>}</span></span></code></pre></div><p>② 在 AdminUserMapper 创建 selectListByStatusAndDeptName 方法，代码如下：</p><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>@Mapper</span></span>
<span class="line"><span>public interface AdminUserMapper extends BaseMapperX&lt;AdminUserDO&gt; {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    default List&lt;AdminUserDetail2DO&gt; selectListByStatusAndDeptName(Integer status, String deptName) {</span></span>
<span class="line"><span>        return selectJoinList(AdminUserDetail2DO.class, new MPJLambdaWrapper&lt;AdminUserDO&gt;()</span></span>
<span class="line"><span>                .selectAll(AdminUserDO.class)</span></span>
<span class="line"><span>                .selectAssociation(DeptDO.class, AdminUserDetail2DO::getDept) // 重点差异点：查询 system_dept 表的 name 字段，使用 dept 字段“整个”返回</span></span>
<span class="line"><span>                .eq(AdminUserDO::getStatus, status)</span></span>
<span class="line"><span>                .leftJoin(DeptDO.class, DeptDO::getId, AdminUserDO::getDeptId)</span></span>
<span class="line"><span>                .eq(DeptDO::getName, deptName)</span></span>
<span class="line"><span>        );</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>}</span></span></code></pre></div><h3 id="_2-3-总结" tabindex="-1"><a class="header-anchor" href="#_2-3-总结"><span><a href="#_2-3-%E6%80%BB%E7%BB%93">#</a> 2.3 总结</span></a></h3><p>MyBatis Plus Join 相比 MyBatis XML 来说，一开始肯定是需要多看看它的<a href="https://mybatisplusjoin.com/pages/core/lambda/select/select.html" target="_blank" rel="noopener noreferrer">文档</a>。</p><p>但是熟悉后，我还是更喜欢使用 MyBatis Plus Join 哈~</p>`,46);function u(g,b){const n=p("RouteLink");return l(),i("div",null,[o,t("p",null,[s("在 "),r(n,{to:"/mybatis/"},{default:c(()=>[s("《MyBatis 数据库》")]),_:1}),s(" 的「3.4 selectPage」小节，我们使用 MyBatis Plus 实现了分页查询。除了这种方式，我们也可以使用 XML 实现分页查询。")]),m])}const h=e(d,[["render",u],["__file","mybatis-pro.html.vue"]]),q=JSON.parse('{"path":"/project/yudao-cloud/mybatis-pro.html","title":"MyBatis 联表&分页查询","lang":"en-US","frontmatter":{"title":"MyBatis 联表&分页查询","tags":["project","java","spring-boot","spring-cloud"],"categories":["project"],"order":38,"feed":false,"seo":false,"head":[]},"headers":[{"level":2,"title":"# 1. 分页查询","slug":"_1-分页查询","link":"#_1-分页查询","children":[{"level":3,"title":"# 1.1 方案一：MyBatis XML","slug":"_1-1-方案一-mybatis-xml","link":"#_1-1-方案一-mybatis-xml","children":[]},{"level":3,"title":"# 1.2 方案二：MyBatis Plus XML","slug":"_1-2-方案二-mybatis-plus-xml","link":"#_1-2-方案二-mybatis-plus-xml","children":[]}]},{"level":2,"title":"# 2. 联表查询","slug":"_2-联表查询","link":"#_2-联表查询","children":[{"level":3,"title":"# 2.1 案例一：字段平铺","slug":"_2-1-案例一-字段平铺","link":"#_2-1-案例一-字段平铺","children":[]},{"level":3,"title":"# 2.2 案例二：字段内嵌","slug":"_2-2-案例二-字段内嵌","link":"#_2-2-案例二-字段内嵌","children":[]},{"level":3,"title":"# 2.3 总结","slug":"_2-3-总结","link":"#_2-3-总结","children":[]}]}],"git":{"createdTime":1720365235000,"updatedTime":1720365235000,"contributors":[{"name":"Hung Nguyen Van","email":"vanhung4499@gmail.com","commits":1}]},"readingTime":{"minutes":4.51,"words":1353},"filePathRelative":"project/yudao-cloud/mybatis-pro.md","localizedDate":"July 7, 2024"}');export{h as comp,q as data};
