import{_ as s,o as n,c as a,a as e}from"./app-BRTHG7K9.js";const i={},l=e(`<h1 id="消息队列-内存" tabindex="-1"><a class="header-anchor" href="#消息队列-内存"><span>消息队列（内存）</span></a></h1><h2 id="_1-spring-event" tabindex="-1"><a class="header-anchor" href="#_1-spring-event"><span><a href="#_1-spring-event">#</a> 1. Spring Event</span></a></h2><p><a href="https://github.com/YunaiV/yudao-cloud" target="_blank" rel="noopener noreferrer"><code>yudao-spring-boot-starter-mq</code></a> 技术组件，提供了 Redis、RocketMQ、RabbitMQ、Kafka 分布式消息队列的封装。</p><p>考虑到部分同学的项目对消息队列的要求不高，又不想引入额外部署的消息队列，所以<strong>默认</strong>使用 Spring Event 实现【内存】级别的消息队列。</p><p>疑问：为什么默认不使用 Redis 作为消息队列？</p><p>这确实是一种选择，但是想要使用 Redis 实现可靠的消息队列，必须使用 Redis 5.0 版本的 Stream 特性。</p><p>这样一方面对 Redis 要求的版本比较高，另一方面大多数同学对 Redis Stream 基本不了解，生产经验不足。</p><p>如果你对 Spring Event 不太了解，可以看看 <a href="https://www.iocoder.cn/Spring-Boot/Event/?yudao" target="_blank" rel="noopener noreferrer">《芋道 Spring Boot 事件机制 Event 入门》</a> 文档。</p><h2 id="_2-使用示例" tabindex="-1"><a class="header-anchor" href="#_2-使用示例"><span><a href="#_2-%E4%BD%BF%E7%94%A8%E7%A4%BA%E4%BE%8B">#</a> 2. 使用示例</span></a></h2><p>友情提示：下文操作的都是 yudao-module-system 服务</p><p>以【短信发送】举例子，我们来看看 Spring Event 的使用。如下图所示：</p><figure><img src="https://cloud.iocoder.cn/img/消息队列/内存/短信发送的项目结构.png" alt="项目结构" tabindex="0" loading="lazy"><figcaption>项目结构</figcaption></figure><h3 id="_2-1-message-消息" tabindex="-1"><a class="header-anchor" href="#_2-1-message-消息"><span><a href="#_2-1-message-%E6%B6%88%E6%81%AF">#</a> 2.1 Message 消息</span></a></h3><p>在 <code>message</code> 包下，新建 SmsSendMessage 类，短信发送消息。代码如下：</p><div class="language- line-numbers-mode" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>@Data</span></span>
<span class="line"><span>public class SmsSendMessage {</span></span>
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
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-2-smsproducer-生产者" tabindex="-1"><a class="header-anchor" href="#_2-2-smsproducer-生产者"><span><a href="#_2-2-smsproducer-%E7%94%9F%E4%BA%A7%E8%80%85">#</a> 2.2 SmsProducer 生产者</span></a></h3><p>在 <code>producer</code> 包下，新建 SmsProducer 类，Sms 短信相关消息的生产者。代码如下：</p><div class="language- line-numbers-mode" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>@Slf4j</span></span>
<span class="line"><span>@Component</span></span>
<span class="line"><span>public class SmsProducer {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Resource</span></span>
<span class="line"><span>    private ApplicationContext applicationContext;</span></span>
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
<span class="line"><span>        applicationContext.publishEvent(message);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-3-smssendconsumer-消费者" tabindex="-1"><a class="header-anchor" href="#_2-3-smssendconsumer-消费者"><span><a href="#_2-3-smssendconsumer-%E6%B6%88%E8%B4%B9%E8%80%85">#</a> 2.3 SmsSendConsumer 消费者</span></a></h3><p>在 <code>consumer</code> 包下，新建 SmsSendConsumer 类，SmsSendMessage 的消费者。代码如下：</p><div class="language- line-numbers-mode" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>@Component</span></span>
<span class="line"><span>@Slf4j</span></span>
<span class="line"><span>public class SmsSendConsumer {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Resource</span></span>
<span class="line"><span>    private SmsSendService smsSendService;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @EventListener</span></span>
<span class="line"><span>    @Async // Spring Event 默认在 Producer 发送的线程，通过 @Async 实现异步</span></span>
<span class="line"><span>    public void onMessage(SmsSendMessage message) {</span></span>
<span class="line"><span>        log.info(&quot;[onMessage][消息内容({})]&quot;, message);</span></span>
<span class="line"><span>        smsSendService.doSendSms(message);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-4-简单测试" tabindex="-1"><a class="header-anchor" href="#_2-4-简单测试"><span><a href="#_2-4-%E7%AE%80%E5%8D%95%E6%B5%8B%E8%AF%95">#</a> 2.4 简单测试</span></a></h3><p>〇 Run 启动 Gateway 网关服务，因为需要它来调用服务。</p><p>① Debug 启动 <code>yudao-module-system</code> 服务，可以在 SmsProducer 和 SmsSendConsumer 上面打上断点，稍微调试下。</p><p>② 打开 <code>SmsTemplateController.http</code> 文件，使用 IDEA httpclient 发起请求，发送短信。如下图所示：</p><figure><img src="https://cloud.iocoder.cn/img/消息队列/内存/简单测试-cloud.png" alt="简单测试" tabindex="0" loading="lazy"><figcaption>简单测试</figcaption></figure><p>如果 IDEA 控制台看到 <code>[onMessage][消息内容</code> 日志内容，说明消息的发送和消费成功。</p>`,27),p=[l];function d(c,r){return n(),a("div",null,p)}const o=s(i,[["render",d],["__file","event.html.vue"]]),m=JSON.parse('{"path":"/project/yudao-cloud/message-queue/event.html","title":"消息队列（内存）","lang":"en-US","frontmatter":{"title":"消息队列（内存）","tags":["project","java","spring-boot","spring-cloud"],"categories":["project"],"order":56,"feed":false,"seo":false,"head":[]},"headers":[{"level":2,"title":"# 1. Spring Event","slug":"_1-spring-event","link":"#_1-spring-event","children":[]},{"level":2,"title":"# 2. 使用示例","slug":"_2-使用示例","link":"#_2-使用示例","children":[{"level":3,"title":"# 2.1 Message 消息","slug":"_2-1-message-消息","link":"#_2-1-message-消息","children":[]},{"level":3,"title":"# 2.2 SmsProducer 生产者","slug":"_2-2-smsproducer-生产者","link":"#_2-2-smsproducer-生产者","children":[]},{"level":3,"title":"# 2.3 SmsSendConsumer 消费者","slug":"_2-3-smssendconsumer-消费者","link":"#_2-3-smssendconsumer-消费者","children":[]},{"level":3,"title":"# 2.4 简单测试","slug":"_2-4-简单测试","link":"#_2-4-简单测试","children":[]}]}],"git":{"createdTime":1720365235000,"updatedTime":1720365235000,"contributors":[{"name":"Hung Nguyen Van","email":"vanhung4499@gmail.com","commits":1}]},"readingTime":{"minutes":2.67,"words":801},"filePathRelative":"project/yudao-cloud/message-queue/event.md","localizedDate":"July 7, 2024"}');export{o as comp,m as data};
