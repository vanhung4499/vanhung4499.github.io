import{_ as i,g as l,o as p,c as t,e as a,h as s,f as d,w as o,a as c}from"./app-CXKoaOJI.js";const r={};function g(m,n){const e=l("RouteLink");return p(),t("div",null,[n[3]||(n[3]=a("h1",{id:"新建模块",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#新建模块"},[a("span",null,"新建模块")])],-1)),n[4]||(n[4]=a("p",null,[s("本章节，将介绍如何新建名字为 "),a("code",null,"yudao-module-demo"),s(" 的示例模块，并添加 RESTful API 接口。")],-1)),a("p",null,[n[1]||(n[1]=s("虽然内容看起来比较长，是因为艿艿写的比较详细，大量截图，保姆级教程！其实只有五个步骤，保持耐心，跟着艿艿一点点来。🙂 完成之后，你会对整个 ")),d(e,{to:"/project-intro/"},{default:o(()=>n[0]||(n[0]=[s("项目结构")])),_:1}),n[2]||(n[2]=s(" 有更充分的了解。"))]),n[5]||(n[5]=c(`<h2 id="👍-相关视频教程" tabindex="-1"><a class="header-anchor" href="#👍-相关视频教程"><span><a href="#%F0%9F%91%8D-%E7%9B%B8%E5%85%B3%E8%A7%86%E9%A2%91%E6%95%99%E7%A8%8B">#</a> 👍 相关视频教程</span></a></h2><ul><li><a href="https://t.zsxq.com/07EUrZrNV" target="_blank" rel="noopener noreferrer">从零开始 06：如何 5 分钟，创建一个新模块？ (opens new window)</a></li></ul><h2 id="_1-新建-demo-模块" tabindex="-1"><a class="header-anchor" href="#_1-新建-demo-模块"><span><a href="#_1-%E6%96%B0%E5%BB%BA-demo-%E6%A8%A1%E5%9D%97">#</a> 1. 新建 demo 模块</span></a></h2><p>① 选择 File -&gt; New -&gt; Module 菜单，如下图所示：</p><figure><img src="https://doc.iocoder.cn/img/新建模块/40.png" alt="打开 New Module" tabindex="0" loading="lazy"><figcaption>打开 New Module</figcaption></figure><p>② 选择 Maven 类型，并点击 Next 按钮，如下图所示：</p><figure><img src="https://doc.iocoder.cn/img/新建模块/41.png" alt="选择 Maven 类型" tabindex="0" loading="lazy"><figcaption>选择 Maven 类型</figcaption></figure><p>③ 选择父模块为 <code>yudao</code>，输入名字为 <code>yudao-module-demo</code>，并点击 Finish 按钮，如下图所示：</p><figure><img src="https://doc.iocoder.cn/img/新建模块/42.png" alt="填写 Module 信息" tabindex="0" loading="lazy"><figcaption>填写 Module 信息</figcaption></figure><p>④ 打开 <code>yudao-module-demo</code> 模块，删除 src 文件，如下图所示：</p><figure><img src="https://doc.iocoder.cn/img/新建模块/43.png" alt="删除 src 文件" tabindex="0" loading="lazy"><figcaption>删除 src 文件</figcaption></figure><p>⑤ 打开 <code>yudao-module-demo</code> 模块的 <code>pom.xml</code> 文件，修改内容如下：</p><p>提示</p><p><code>&lt;!-- --&gt;</code> 部分，只是注释，不需要写到 XML 中。</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#abb2bf;--shiki-dark:#abb2bf;--shiki-light-bg:#282c34;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code"><code><span class="line"><span>&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;</span></span>
<span class="line"><span>&lt;project xmlns=&quot;http://maven.apache.org/POM/4.0.0&quot;</span></span>
<span class="line"><span>         xmlns:xsi=&quot;http://www.w3.org/2001/XMLSchema-instance&quot;</span></span>
<span class="line"><span>         xsi:schemaLocation=&quot;http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd&quot;&gt;</span></span>
<span class="line"><span>    &lt;parent&gt;</span></span>
<span class="line"><span>        &lt;artifactId&gt;yudao&lt;/artifactId&gt;</span></span>
<span class="line"><span>        &lt;groupId&gt;cn.iocoder.boot&lt;/groupId&gt;</span></span>
<span class="line"><span>        &lt;version&gt;\${revision}&lt;/version&gt; &lt;!-- 1. 修改 version 为 \${revision} --&gt;</span></span>
<span class="line"><span>    &lt;/parent&gt;</span></span>
<span class="line"><span>    &lt;modelVersion&gt;4.0.0&lt;/modelVersion&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    &lt;artifactId&gt;yudao-module-demo&lt;/artifactId&gt;</span></span>
<span class="line"><span>    &lt;packaging&gt;pom&lt;/packaging&gt; &lt;!-- 2. 新增 packaging 为 pom --&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    &lt;name&gt;\${project.artifactId}&lt;/name&gt; &lt;!-- 3. 新增 name 为 \${project.artifactId} --&gt;</span></span>
<span class="line"><span>    &lt;description&gt; &lt;!-- 4. 新增 description 为该模块的描述 --&gt;</span></span>
<span class="line"><span>        demo 模块，主要实现 XXX、YYY、ZZZ 等功能。</span></span>
<span class="line"><span>    &lt;/description&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;/project&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-新建-demo-api-子模块" tabindex="-1"><a class="header-anchor" href="#_2-新建-demo-api-子模块"><span><a href="#_2-%E6%96%B0%E5%BB%BA-demo-api-%E5%AD%90%E6%A8%A1%E5%9D%97">#</a> 2. 新建 demo-api 子模块</span></a></h2><p>① 新建 <code>yudao-module-demo-api</code> 子模块，整个过程和“新建 demo 模块”是一致的，如下图所示：</p><figure><img src="https://doc.iocoder.cn/img/新建模块/40.png" alt="打开 New Module" tabindex="0" loading="lazy"><figcaption>打开 New Module</figcaption></figure><figure><img src="https://doc.iocoder.cn/img/新建模块/41.png" alt="选择 Maven 类型" tabindex="0" loading="lazy"><figcaption>选择 Maven 类型</figcaption></figure><figure><img src="https://doc.iocoder.cn/img/新建模块/42-api.png" alt="填写 Module 信息" tabindex="0" loading="lazy"><figcaption>填写 Module 信息</figcaption></figure><p>② 打开 <code>yudao-module-demo-api</code> 模块的 <code>pom.xml</code> 文件，修改内容如下：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#abb2bf;--shiki-dark:#abb2bf;--shiki-light-bg:#282c34;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code"><code><span class="line"><span>&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;</span></span>
<span class="line"><span>&lt;project xmlns=&quot;http://maven.apache.org/POM/4.0.0&quot;</span></span>
<span class="line"><span>         xmlns:xsi=&quot;http://www.w3.org/2001/XMLSchema-instance&quot;</span></span>
<span class="line"><span>         xsi:schemaLocation=&quot;http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd&quot;&gt;</span></span>
<span class="line"><span>    &lt;parent&gt;</span></span>
<span class="line"><span>        &lt;artifactId&gt;yudao-module-demo&lt;/artifactId&gt;</span></span>
<span class="line"><span>        &lt;groupId&gt;cn.iocoder.boot&lt;/groupId&gt;</span></span>
<span class="line"><span>        &lt;version&gt;\${revision}&lt;/version&gt; &lt;!-- 1. 修改 version 为 \${revision} --&gt;</span></span>
<span class="line"><span>    &lt;/parent&gt;</span></span>
<span class="line"><span>    &lt;modelVersion&gt;4.0.0&lt;/modelVersion&gt;</span></span>
<span class="line"><span>    &lt;artifactId&gt;yudao-module-demo-api&lt;/artifactId&gt;</span></span>
<span class="line"><span>    &lt;packaging&gt;jar&lt;/packaging&gt; &lt;!-- 2. 新增 packaging 为 jar --&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    &lt;name&gt;\${project.artifactId}&lt;/name&gt; &lt;!-- 3. 新增 name 为 \${project.artifactId} --&gt;</span></span>
<span class="line"><span>    &lt;description&gt; &lt;!-- 4. 新增 description 为该模块的描述 --&gt;</span></span>
<span class="line"><span>        demo 模块 API，暴露给其它模块调用</span></span>
<span class="line"><span>    &lt;/description&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    &lt;dependencies&gt;  &lt;!-- 5. 新增 yudao-common 依赖 --&gt;</span></span>
<span class="line"><span>        &lt;dependency&gt;</span></span>
<span class="line"><span>            &lt;groupId&gt;cn.iocoder.boot&lt;/groupId&gt;</span></span>
<span class="line"><span>            &lt;artifactId&gt;yudao-common&lt;/artifactId&gt;</span></span>
<span class="line"><span>        &lt;/dependency&gt;</span></span>
<span class="line"><span>    &lt;/dependencies&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;/project&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>③ 【可选】新建 <code>cn.iocoder.yudao.module.demo</code> <strong>基础</strong>包，其中 <code>demo</code> 为模块名。之后，新建 <code>api</code> 和 <code>enums</code> 包。如下图所示：</p><figure><img src="https://doc.iocoder.cn/img/新建模块/44.png" alt="新建基础包" tabindex="0" loading="lazy"><figcaption>新建基础包</figcaption></figure><h2 id="_3-新建-demo-biz-子模块" tabindex="-1"><a class="header-anchor" href="#_3-新建-demo-biz-子模块"><span><a href="#_3-%E6%96%B0%E5%BB%BA-demo-biz-%E5%AD%90%E6%A8%A1%E5%9D%97">#</a> 3. 新建 demo-biz 子模块</span></a></h2><p>① 新建 <code>yudao-module-demo-biz</code> 子模块，整个过程和“新建 demo 模块”也是一致的，如下图所示：</p><figure><img src="https://doc.iocoder.cn/img/新建模块/40.png" alt="打开 New Module" tabindex="0" loading="lazy"><figcaption>打开 New Module</figcaption></figure><figure><img src="https://doc.iocoder.cn/img/新建模块/41.png" alt="选择 Maven 类型" tabindex="0" loading="lazy"><figcaption>选择 Maven 类型</figcaption></figure><figure><img src="https://doc.iocoder.cn/img/新建模块/42-biz.png" alt="填写 Module 信息" tabindex="0" loading="lazy"><figcaption>填写 Module 信息</figcaption></figure><p>② 打开 <code>yudao-module-demo-biz</code> 模块的 <code>pom.xml</code> 文件，修改成内容如下：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#abb2bf;--shiki-dark:#abb2bf;--shiki-light-bg:#282c34;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code"><code><span class="line"><span>&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;</span></span>
<span class="line"><span>&lt;project xmlns=&quot;http://maven.apache.org/POM/4.0.0&quot;</span></span>
<span class="line"><span>         xmlns:xsi=&quot;http://www.w3.org/2001/XMLSchema-instance&quot;</span></span>
<span class="line"><span>         xsi:schemaLocation=&quot;http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd&quot;&gt;</span></span>
<span class="line"><span>    &lt;parent&gt;</span></span>
<span class="line"><span>        &lt;artifactId&gt;yudao-module-demo&lt;/artifactId&gt;</span></span>
<span class="line"><span>        &lt;groupId&gt;cn.iocoder.boot&lt;/groupId&gt;</span></span>
<span class="line"><span>        &lt;version&gt;\${revision}&lt;/version&gt; &lt;!-- 1. 修改 version 为 \${revision} --&gt;</span></span>
<span class="line"><span>    &lt;/parent&gt;</span></span>
<span class="line"><span>    &lt;modelVersion&gt;4.0.0&lt;/modelVersion&gt;</span></span>
<span class="line"><span>    &lt;packaging&gt;jar&lt;/packaging&gt; &lt;!-- 2. 新增 packaging 为 jar --&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    &lt;artifactId&gt;yudao-module-demo-biz&lt;/artifactId&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    &lt;name&gt;\${project.artifactId}&lt;/name&gt; &lt;!-- 3. 新增 name 为 \${project.artifactId} --&gt;</span></span>
<span class="line"><span>    &lt;description&gt; &lt;!-- 4. 新增 description 为该模块的描述 --&gt;</span></span>
<span class="line"><span>        demo 模块，主要实现 XXX、YYY、ZZZ 等功能。</span></span>
<span class="line"><span>    &lt;/description&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    &lt;dependencies&gt;  &lt;!-- 5. 新增依赖，这里引入的都是比较常用的业务组件、技术组件 --&gt;</span></span>
<span class="line"><span>        &lt;dependency&gt;</span></span>
<span class="line"><span>            &lt;groupId&gt;cn.iocoder.boot&lt;/groupId&gt;</span></span>
<span class="line"><span>            &lt;artifactId&gt;yudao-module-demo-api&lt;/artifactId&gt;</span></span>
<span class="line"><span>            &lt;version&gt;\${revision}&lt;/version&gt;</span></span>
<span class="line"><span>        &lt;/dependency&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        &lt;!-- Web 相关 --&gt;</span></span>
<span class="line"><span>        &lt;dependency&gt;</span></span>
<span class="line"><span>            &lt;groupId&gt;cn.iocoder.boot&lt;/groupId&gt;</span></span>
<span class="line"><span>            &lt;artifactId&gt;yudao-spring-boot-starter-web&lt;/artifactId&gt;</span></span>
<span class="line"><span>        &lt;/dependency&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        &lt;dependency&gt;</span></span>
<span class="line"><span>            &lt;groupId&gt;cn.iocoder.boot&lt;/groupId&gt;</span></span>
<span class="line"><span>            &lt;artifactId&gt;yudao-spring-boot-starter-security&lt;/artifactId&gt;</span></span>
<span class="line"><span>        &lt;/dependency&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        &lt;!-- DB 相关 --&gt;</span></span>
<span class="line"><span>        &lt;dependency&gt;</span></span>
<span class="line"><span>            &lt;groupId&gt;cn.iocoder.boot&lt;/groupId&gt;</span></span>
<span class="line"><span>            &lt;artifactId&gt;yudao-spring-boot-starter-mybatis&lt;/artifactId&gt;</span></span>
<span class="line"><span>        &lt;/dependency&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        &lt;!-- Test 测试相关 --&gt;</span></span>
<span class="line"><span>        &lt;dependency&gt;</span></span>
<span class="line"><span>            &lt;groupId&gt;cn.iocoder.boot&lt;/groupId&gt;</span></span>
<span class="line"><span>            &lt;artifactId&gt;yudao-spring-boot-starter-test&lt;/artifactId&gt;</span></span>
<span class="line"><span>        &lt;/dependency&gt;</span></span>
<span class="line"><span>    &lt;/dependencies&gt;</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>&lt;/project&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>③ 【必选】新建 <code>cn.iocoder.yudao.module.demo</code> <strong>基础</strong>包，其中 <code>demo</code> 为模块名。之后，新建 <code>controller.admin</code> 和 <code>controller.user</code> 等包。如下图所示：</p><figure><img src="https://doc.iocoder.cn/img/新建模块/45.png" alt="新建基础包" tabindex="0" loading="lazy"><figcaption>新建基础包</figcaption></figure><p>④ 打开 Maven 菜单，点击刷新按钮，让引入的 Maven 依赖生效。如下图所示：</p><figure><img src="https://doc.iocoder.cn/img/新建模块/46.png" alt="刷新 Maven 依赖" tabindex="0" loading="lazy"><figcaption>刷新 Maven 依赖</figcaption></figure><h2 id="_4-新建-restful-api-接口" tabindex="-1"><a class="header-anchor" href="#_4-新建-restful-api-接口"><span><a href="#_4-%E6%96%B0%E5%BB%BA-restful-api-%E6%8E%A5%E5%8F%A3">#</a> 4. 新建 RESTful API 接口</span></a></h2><p>① 在 <code>controller.admin</code> 包，新建一个 DemoTestController 类，并新建一个 <code>/demo/test/get</code> 接口。代码如下：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#abb2bf;--shiki-dark:#abb2bf;--shiki-light-bg:#282c34;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code"><code><span class="line"><span>package cn.iocoder.yudao.module.demo.controller.admin;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import cn.iocoder.yudao.framework.common.pojo.CommonResult;</span></span>
<span class="line"><span>import io.swagger.v3.oas.annotations.tags.Tag;</span></span>
<span class="line"><span>import io.swagger.v3.oas.annotations.Operation;</span></span>
<span class="line"><span>import org.springframework.validation.annotation.Validated;</span></span>
<span class="line"><span>import org.springframework.web.bind.annotation.GetMapping;</span></span>
<span class="line"><span>import org.springframework.web.bind.annotation.RequestMapping;</span></span>
<span class="line"><span>import org.springframework.web.bind.annotation.RestController;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import static cn.iocoder.yudao.framework.common.pojo.CommonResult.success;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>@Tag(name = &quot;管理后台 - Test&quot;)</span></span>
<span class="line"><span>@RestController</span></span>
<span class="line"><span>@RequestMapping(&quot;/demo/test&quot;)</span></span>
<span class="line"><span>@Validated</span></span>
<span class="line"><span>public class DemoTestController {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @GetMapping(&quot;/get&quot;)</span></span>
<span class="line"><span>    @Operation(summary = &quot;获取 test 信息&quot;)</span></span>
<span class="line"><span>    public CommonResult&lt;String&gt; get() {</span></span>
<span class="line"><span>        return success(&quot;true&quot;);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>注意</strong>，<code>/demo</code> 是该模块所有 RESTful API 的基础路径，<code>/test</code> 是 Test 功能的基础路径。</p><p>① 在 <code>controller.app</code> 包，新建一个 AppDemoTestController 类，并新建一个 <code>/demo/test/get</code> 接口。代码如下：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#abb2bf;--shiki-dark:#abb2bf;--shiki-light-bg:#282c34;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code"><code><span class="line"><span>package cn.iocoder.yudao.module.demo.controller.app;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import cn.iocoder.yudao.framework.common.pojo.CommonResult;</span></span>
<span class="line"><span>import io.swagger.v3.oas.annotations.tags.Tag;</span></span>
<span class="line"><span>import io.swagger.v3.oas.annotations.Operation;</span></span>
<span class="line"><span>import org.springframework.validation.annotation.Validated;</span></span>
<span class="line"><span>import org.springframework.web.bind.annotation.GetMapping;</span></span>
<span class="line"><span>import org.springframework.web.bind.annotation.RequestMapping;</span></span>
<span class="line"><span>import org.springframework.web.bind.annotation.RestController;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import static cn.iocoder.yudao.framework.common.pojo.CommonResult.success;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>@Tag(name = &quot;用户 App - Test&quot;)</span></span>
<span class="line"><span>@RestController</span></span>
<span class="line"><span>@RequestMapping(&quot;/demo/test&quot;)</span></span>
<span class="line"><span>@Validated</span></span>
<span class="line"><span>public class AppDemoTestController {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @GetMapping(&quot;/get&quot;)</span></span>
<span class="line"><span>    @Operation(summary = &quot;获取 test 信息&quot;)</span></span>
<span class="line"><span>    public CommonResult&lt;String&gt; get() {</span></span>
<span class="line"><span>        return success(&quot;true&quot;);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在 Controller 的命名上，额外增加 <strong>App</strong> 作为前缀，一方面区分是管理后台还是用户 App 的 Controller，另一方面避免 Spring Bean 的名字冲突。</p><p>可能你会奇怪，这里我们定义了两个 <code>/demo/test/get</code> 接口，会不会存在重复导致冲突呢？答案，当然是并不会。原因是：</p><ul><li><code>controller.admin</code> 包下的接口，默认会增加 <code>/admin-api</code>，即最终的访问地址是 <code>/admin-api/demo/test/get</code></li><li><code>controller.app</code> 包下的接口，默认会增加 <code>/app-api</code>，即最终的访问地址是 <code>/app-api/demo/test/get</code></li></ul><h2 id="_5-引入-demo-模块" tabindex="-1"><a class="header-anchor" href="#_5-引入-demo-模块"><span><a href="#_5-%E5%BC%95%E5%85%A5-demo-%E6%A8%A1%E5%9D%97">#</a> 5. 引入 demo 模块</span></a></h2><p>① 在 <code>yudao-server</code> 模块的 <code>pom.xml</code> 文件，引入 <code>yudao-module-demo-biz</code> 子模块，并点击 Maven 刷新。如下图所示：</p><figure><img src="https://doc.iocoder.cn/img/新建模块/47.png" alt="刷新 Maven 依赖" tabindex="0" loading="lazy"><figcaption>刷新 Maven 依赖</figcaption></figure><p>② 运行 YudaoServerApplication 类，将后端项目进行启动。启动完成后，使用浏览器打开 <a href="http://127.0.0.1:48080/doc.html" target="_blank" rel="noopener noreferrer">http://127.0.0.1:48080/doc.html (opens new window)</a> 地址，进入 Swagger 接口文档。</p><p>③ 打开“管理后台 - Test”接口，进行 <code>/admin-api/demo/test/get</code> 接口的调试，如下图所示：</p><figure><img src="https://doc.iocoder.cn/img/新建模块/48.png" alt="测试  接口" tabindex="0" loading="lazy"><figcaption>测试 接口</figcaption></figure><p>④ 打开“用户 App - Test”接口，进行 <code>/app-api/demo/test/get</code> 接口的调试，如下图所示：</p><figure><img src="https://doc.iocoder.cn/img/新建模块/49.png" alt="测试  接口" tabindex="0" loading="lazy"><figcaption>测试 接口</figcaption></figure><h2 id="_6-访问接口返回-404" tabindex="-1"><a class="header-anchor" href="#_6-访问接口返回-404"><span><a href="#_6-%E8%AE%BF%E9%97%AE%E6%8E%A5%E5%8F%A3%E8%BF%94%E5%9B%9E-404">#</a> 6. 访问接口返回 404？</span></a></h2><p>请检查，你新建的模块的 <code>package</code> 包名是不是在 <code>cn.iocoder.yudao.module</code> 下！</p><p>如果不是，修改 <a href="https://github.com/YunaiV/ruoyi-vue-pro/blob/master/yudao-server/src/main/java/cn/iocoder/yudao/server/YudaoServerApplication.java" target="_blank" rel="noopener noreferrer">YudaoServerApplication (opens new window)</a> 类，增加新建的模块的 <code>package</code> 包名。例如说：</p><div class="language-" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#abb2bf;--shiki-dark:#abb2bf;--shiki-light-bg:#282c34;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code"><code><span class="line"><span>@SpringBootApplication(scanBasePackages = {&quot;\${yudao.info.base-package}.server&quot;, &quot;\${yudao.info.base-package}.module&quot;,</span></span>
<span class="line"><span>    &quot;xxx.yyy.zzz&quot;}) // xxx.yyy.zzz 是你新建的模块的 \`package\` 包名</span></span></code></pre></div><h2 id="_7-补充说明" tabindex="-1"><a class="header-anchor" href="#_7-补充说明"><span><a href="#_7-%E8%A1%A5%E5%85%85%E8%AF%B4%E6%98%8E">#</a> 7. 补充说明</span></a></h2><h3 id="_7-1-接口分组" tabindex="-1"><a class="header-anchor" href="#_7-1-接口分组"><span><a href="#_7-1-%E6%8E%A5%E5%8F%A3%E5%88%86%E7%BB%84">#</a> 7.1 接口分组</span></a></h3><p>如果你想 Swagger 有该模块的接口分组，则需要新建 GroupedOpenApi Bean。如下图所示：</p><figure><img src="https://doc.iocoder.cn/img/新建模块/接口分组.png" alt="接口分组" tabindex="0" loading="lazy"><figcaption>接口分组</figcaption></figure><h3 id="_7-2-mybatis-日志" tabindex="-1"><a class="header-anchor" href="#_7-2-mybatis-日志"><span><a href="#_7-2-mybatis-%E6%97%A5%E5%BF%97">#</a> 7.2 MyBatis 日志</span></a></h3><p>如果你希望新模块的 MyBatis 查询会打印 SQL 日志，需要在 <code>logging.level</code> 配置对应的 Logger。如下图所示：</p><figure><img src="https://doc.iocoder.cn/img/新建模块/MyBatis日志.png" alt="MyBatis 日志" tabindex="0" loading="lazy"><figcaption>MyBatis 日志</figcaption></figure>`,63))])}const v=i(r,[["render",g],["__file","24-module-new.html.vue"]]),b=JSON.parse('{"path":"/project/rouyi-vue-pro/24-module-new.html","title":"新建模块","lang":"en-US","frontmatter":{"title":"新建模块","tags":["project","java","spring-boot","spring-cloud"],"categories":["project"],"order":26,"feed":false,"seo":false,"head":[]},"headers":[{"level":2,"title":"# 👍 相关视频教程","slug":"👍-相关视频教程","link":"#👍-相关视频教程","children":[]},{"level":2,"title":"# 1. 新建 demo 模块","slug":"_1-新建-demo-模块","link":"#_1-新建-demo-模块","children":[]},{"level":2,"title":"# 2. 新建 demo-api 子模块","slug":"_2-新建-demo-api-子模块","link":"#_2-新建-demo-api-子模块","children":[]},{"level":2,"title":"# 3. 新建 demo-biz 子模块","slug":"_3-新建-demo-biz-子模块","link":"#_3-新建-demo-biz-子模块","children":[]},{"level":2,"title":"# 4. 新建 RESTful API 接口","slug":"_4-新建-restful-api-接口","link":"#_4-新建-restful-api-接口","children":[]},{"level":2,"title":"# 5. 引入 demo 模块","slug":"_5-引入-demo-模块","link":"#_5-引入-demo-模块","children":[]},{"level":2,"title":"# 6. 访问接口返回 404？","slug":"_6-访问接口返回-404","link":"#_6-访问接口返回-404","children":[]},{"level":2,"title":"# 7. 补充说明","slug":"_7-补充说明","link":"#_7-补充说明","children":[{"level":3,"title":"# 7.1 接口分组","slug":"_7-1-接口分组","link":"#_7-1-接口分组","children":[]},{"level":3,"title":"# 7.2 MyBatis 日志","slug":"_7-2-mybatis-日志","link":"#_7-2-mybatis-日志","children":[]}]}],"git":{"createdTime":1736653285000,"updatedTime":1736653285000,"contributors":[{"name":"Hung Nguyen","email":"vanhung4499@gmail.com","commits":1}]},"readingTime":{"minutes":6.16,"words":1849},"filePathRelative":"project/rouyi-vue-pro/24-module-new.md","localizedDate":"January 12, 2025"}');export{v as comp,b as data};
