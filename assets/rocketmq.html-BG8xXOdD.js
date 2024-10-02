import{_ as n,o as a,c as e,a as i}from"./app-5QVbWi7Z.js";const l={};function p(d,s){return a(),e("div",null,s[0]||(s[0]=[i(`<h1 id="消息队列-rocketmq" tabindex="-1"><a class="header-anchor" href="#消息队列-rocketmq"><span>消息队列（RocketMQ）</span></a></h1><h2 id="rocketmq-spring" tabindex="-1"><a class="header-anchor" href="#rocketmq-spring"><span><a href="#rocketmq-spring">#</a> RocketMQ-Spring</span></a></h2><p><a href="https://github.com/YunaiV/ruoyi-vue-pro/blob/master/yudao-framework/yudao-spring-boot-starter-mq/" target="_blank" rel="noopener noreferrer"><code>yudao-spring-boot-starter-mq</code></a> 技术组件，基于 RocketMQ 实现分布式消息队列。</p><p>如果你对 RocketMQ 不太了解，可以看看 <a href="https://www.iocoder.cn/Spring-Boot/RocketMQ/?yudao" target="_blank" rel="noopener noreferrer">《芋道 Spring Boot 消息队列 RocketMQ 入门》</a> 文档。</p><p>如何安装一个 RocketMQ 服务？</p><p>参考 <a href="https://www.iocoder.cn/RocketMQ/install/?yudao" target="_blank" rel="noopener noreferrer">《芋道 RocketMQ 极简入门 》</a> 文档。</p><h2 id="_2-使用示例" tabindex="-1"><a class="header-anchor" href="#_2-使用示例"><span><a href="#_2-%E4%BD%BF%E7%94%A8%E7%A4%BA%E4%BE%8B">#</a> 2. 使用示例</span></a></h2><p>以【短信发送】举例子，改造使用 RocketMQ 作为消息队列。</p><h2 id="_2-0-引入依赖与配置" tabindex="-1"><a class="header-anchor" href="#_2-0-引入依赖与配置"><span><a href="#_2-0-%E5%BC%95%E5%85%A5%E4%BE%9D%E8%B5%96%E4%B8%8E%E9%85%8D%E7%BD%AE">#</a> 2.0 引入依赖与配置</span></a></h2><p>① 在 <code>yudao-module-system-biz</code> 模块中，引入 <code>yudao-spring-boot-starter-mq</code> 技术组件。如下所示：</p><div class="language-" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#abb2bf;--shiki-dark:#abb2bf;--shiki-light-bg:#282c34;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code"><code><span class="line"><span>&lt;dependency&gt;</span></span>
<span class="line"><span>    &lt;groupId&gt;cn.iocoder.boot&lt;/groupId&gt;</span></span>
<span class="line"><span>    &lt;artifactId&gt;yudao-spring-boot-starter-mq&lt;/artifactId&gt;</span></span>
<span class="line"><span>&lt;/dependency&gt;</span></span></code></pre></div><p>② 修改 <code>yudao-spring-boot-starter-mq</code> 的 <code>pom.xml</code> 文件，引入 <code>rocketmq-spring-boot-starter</code> 依赖。如下所示：</p><div class="language-" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#abb2bf;--shiki-dark:#abb2bf;--shiki-light-bg:#282c34;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code"><code><span class="line"><span>&lt;!-- 实际只要删除  &lt;optional&gt;true&lt;/optional&gt; 部分即可 --&gt;</span></span>
<span class="line"><span>&lt;dependency&gt;</span></span>
<span class="line"><span>    &lt;groupId&gt;org.apache.rocketmq&lt;/groupId&gt;</span></span>
<span class="line"><span>    &lt;artifactId&gt;rocketmq-spring-boot-starter&lt;/artifactId&gt;</span></span>
<span class="line"><span>&lt;/dependency&gt;</span></span></code></pre></div><p>记得需要手动在 IDEA 刷新下 Maven 依赖。</p><p>③ 修改 <code>application.xml</code> 配置文件，添加 RocketMQ 全局配置。如下所示：</p><div class="language-" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#abb2bf;--shiki-dark:#abb2bf;--shiki-light-bg:#282c34;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code"><code><span class="line"><span># rocketmq 配置项，对应 RocketMQProperties 配置类</span></span>
<span class="line"><span>rocketmq:</span></span>
<span class="line"><span>  # Producer 配置项</span></span>
<span class="line"><span>  producer:</span></span>
<span class="line"><span>    group: \${spring.application.name}_PRODUCER # 生产者分组</span></span></code></pre></div><p>ps：默认已经添加，无需操作。</p><p>④ 修改 <code>application-local.xml</code> 配置文件，添加 RocketMQ <code>name-server</code> 配置。如下所示：</p><div class="language-" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#abb2bf;--shiki-dark:#abb2bf;--shiki-light-bg:#282c34;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code"><code><span class="line"><span># rocketmq 配置项，对应 RocketMQProperties 配置类</span></span>
<span class="line"><span>rocketmq:</span></span>
<span class="line"><span>  name-server: 127.0.0.1:9876 # RocketMQ Namesrv</span></span></code></pre></div><p>ps：默认已经添加，无需操作。</p><h3 id="_2-1-message-消息" tabindex="-1"><a class="header-anchor" href="#_2-1-message-消息"><span><a href="#_2-1-message-%E6%B6%88%E6%81%AF">#</a> 2.1 Message 消息</span></a></h3><p>在 <code>message</code> 包下，修改 SmsSendMessage 类，短信发送消息。代码如下：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#abb2bf;--shiki-dark:#abb2bf;--shiki-light-bg:#282c34;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code"><code><span class="line"><span>@Data</span></span>
<span class="line"><span>public class SmsSendMessage {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public static final String TOPIC = &quot;SMS_SEND_TOPIC&quot;; // 重点：需要增加消息对应的 Topic</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /**</span></span>
<span class="line"><span>     * 短信日志编号</span></span>
<span class="line"><span>     */</span></span>
<span class="line"><span>    @NotNull(message = &quot;短信日志编号不能为空&quot;)</span></span>
<span class="line"><span>    private Long logId;</span></span>
<span class="line"><span>    /**</span></span>
<span class="line"><span>     * 手机号</span></span>
<span class="line"><span>     */</span></span>
<span class="line"><span>    @NotNull(message = &quot;手机号不能为空&quot;)</span></span>
<span class="line"><span>    private String mobile;</span></span>
<span class="line"><span>    /**</span></span>
<span class="line"><span>     * 短信渠道编号</span></span>
<span class="line"><span>     */</span></span>
<span class="line"><span>    @NotNull(message = &quot;短信渠道编号不能为空&quot;)</span></span>
<span class="line"><span>    private Long channelId;</span></span>
<span class="line"><span>    /**</span></span>
<span class="line"><span>     * 短信 API 的模板编号</span></span>
<span class="line"><span>     */</span></span>
<span class="line"><span>    @NotNull(message = &quot;短信 API 的模板编号不能为空&quot;)</span></span>
<span class="line"><span>    private String apiTemplateId;</span></span>
<span class="line"><span>    /**</span></span>
<span class="line"><span>     * 短信模板参数</span></span>
<span class="line"><span>     */</span></span>
<span class="line"><span>    private List&lt;KeyValue&lt;String, Object&gt;&gt; templateParams;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-2-smsproducer-生产者" tabindex="-1"><a class="header-anchor" href="#_2-2-smsproducer-生产者"><span><a href="#_2-2-smsproducer-%E7%94%9F%E4%BA%A7%E8%80%85">#</a> 2.2 SmsProducer 生产者</span></a></h3><p>在 <code>producer</code> 包下，修改 SmsProducer 类，Sms 短信相关消息的生产者。代码如下：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#abb2bf;--shiki-dark:#abb2bf;--shiki-light-bg:#282c34;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code"><code><span class="line"><span>@Slf4j</span></span>
<span class="line"><span>@Component</span></span>
<span class="line"><span>public class SmsProducer {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Resource</span></span>
<span class="line"><span>    private RocketMQTemplate rocketMQTemplate; // 重点：注入 RocketMQTemplate 对象</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /**</span></span>
<span class="line"><span>     * 发送 {@link SmsSendMessage} 消息</span></span>
<span class="line"><span>     *</span></span>
<span class="line"><span>     * @param logId 短信日志编号</span></span>
<span class="line"><span>     * @param mobile 手机号</span></span>
<span class="line"><span>     * @param channelId 渠道编号</span></span>
<span class="line"><span>     * @param apiTemplateId 短信模板编号</span></span>
<span class="line"><span>     * @param templateParams 短信模板参数</span></span>
<span class="line"><span>     */</span></span>
<span class="line"><span>    public void sendSmsSendMessage(Long logId, String mobile,</span></span>
<span class="line"><span>                                   Long channelId, String apiTemplateId, List&lt;KeyValue&lt;String, Object&gt;&gt; templateParams) {</span></span>
<span class="line"><span>        SmsSendMessage message = new SmsSendMessage().setLogId(logId).setMobile(mobile);</span></span>
<span class="line"><span>        message.setChannelId(channelId).setApiTemplateId(apiTemplateId).setTemplateParams(templateParams);</span></span>
<span class="line"><span>        rocketMQTemplate.syncSend(SmsSendMessage.TOPIC, message); // 重点：使用 RocketMQTemplate 同步发送消息</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-3-smssendconsumer-消费者" tabindex="-1"><a class="header-anchor" href="#_2-3-smssendconsumer-消费者"><span><a href="#_2-3-smssendconsumer-%E6%B6%88%E8%B4%B9%E8%80%85">#</a> 2.3 SmsSendConsumer 消费者</span></a></h3><p>在 <code>consumer</code> 包下，修改 SmsSendConsumer 类，SmsSendMessage 的消费者。代码如下：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#abb2bf;--shiki-dark:#abb2bf;--shiki-light-bg:#282c34;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code"><code><span class="line"><span>@Component</span></span>
<span class="line"><span>@RocketMQMessageListener( // 重点：添加 @RocketMQMessageListener 注解，声明消费的 topic</span></span>
<span class="line"><span>        topic = SmsSendMessage.TOPIC,</span></span>
<span class="line"><span>        consumerGroup = SmsSendMessage.TOPIC + &quot;_CONSUMER&quot;</span></span>
<span class="line"><span>)</span></span>
<span class="line"><span>@Slf4j</span></span>
<span class="line"><span>public class SmsSendConsumer implements RocketMQListener&lt;SmsSendMessage&gt; { // 重点：实现 RocketMQListener 类，并填写对应的 Message 类</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Resource</span></span>
<span class="line"><span>    private SmsSendService smsSendService;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Override // 重点：实现 onMessage 方法</span></span>
<span class="line"><span>    public void onMessage(SmsSendMessage message) {</span></span>
<span class="line"><span>        log.info(&quot;[onMessage][消息内容({})]&quot;, message);</span></span>
<span class="line"><span>        smsSendService.doSendSms(message);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-4-简单测试" tabindex="-1"><a class="header-anchor" href="#_2-4-简单测试"><span><a href="#_2-4-%E7%AE%80%E5%8D%95%E6%B5%8B%E8%AF%95">#</a> 2.4 简单测试</span></a></h3><p>① Debug 启动后端项目，可以在 SmsProducer 和 SmsSendConsumer 上面打上断点，稍微调试下。</p><p>② 打开 <code>SmsTemplateController.http</code> 文件，使用 IDEA httpclient 发起请求，发送短信。如下图所示：</p><figure><img src="https://doc.iocoder.cn/img/消息队列/内存/简单测试.png" alt="简单测试" tabindex="0" loading="lazy"><figcaption>简单测试</figcaption></figure><p>如果 IDEA 控制台看到 <code>[onMessage][消息内容</code> 日志内容，说明消息的发送和消费成功。</p>`,34)]))}const c=n(l,[["render",p],["__file","rocketmq.html.vue"]]),t=JSON.parse('{"path":"/project/rouyi-vue-pro/message-queue/rocketmq.html","title":"消息队列（RocketMQ）","lang":"en-US","frontmatter":{"title":"消息队列（RocketMQ）","tags":["project","java","spring-boot","spring-cloud"],"categories":["project"],"order":56,"feed":false,"seo":false,"head":[]},"headers":[{"level":2,"title":"# RocketMQ-Spring","slug":"rocketmq-spring","link":"#rocketmq-spring","children":[]},{"level":2,"title":"# 2. 使用示例","slug":"_2-使用示例","link":"#_2-使用示例","children":[]},{"level":2,"title":"# 2.0 引入依赖与配置","slug":"_2-0-引入依赖与配置","link":"#_2-0-引入依赖与配置","children":[{"level":3,"title":"# 2.1 Message 消息","slug":"_2-1-message-消息","link":"#_2-1-message-消息","children":[]},{"level":3,"title":"# 2.2 SmsProducer 生产者","slug":"_2-2-smsproducer-生产者","link":"#_2-2-smsproducer-生产者","children":[]},{"level":3,"title":"# 2.3 SmsSendConsumer 消费者","slug":"_2-3-smssendconsumer-消费者","link":"#_2-3-smssendconsumer-消费者","children":[]},{"level":3,"title":"# 2.4 简单测试","slug":"_2-4-简单测试","link":"#_2-4-简单测试","children":[]}]}],"git":{"createdTime":1720365235000,"updatedTime":1720365235000,"contributors":[{"name":"Hung Nguyen Van","email":"vanhung4499@gmail.com","commits":1}]},"readingTime":{"minutes":2.88,"words":864},"filePathRelative":"project/rouyi-vue-pro/message-queue/rocketmq.md","localizedDate":"July 7, 2024"}');export{c as comp,t as data};
