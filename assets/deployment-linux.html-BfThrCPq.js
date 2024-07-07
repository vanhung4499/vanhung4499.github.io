import{_ as n,o as s,c as a,a as e}from"./app-BRTHG7K9.js";const i={},p=e(`<h1 id="linux-部署" tabindex="-1"><a class="header-anchor" href="#linux-部署"><span>Linux 部署</span></a></h1><p>本小节，讲解如何将前端 + 后端项目，<strong>使用 Shell 脚本</strong>，部署到 dev 开发环境下的一台 Linux 服务器上。如下图所示：</p><figure><img src="https://doc.iocoder.cn/img/Linux部署/01.png" alt="Linux 部署" tabindex="0" loading="lazy"><figcaption>Linux 部署</figcaption></figure><h2 id="_1-配置-mysql" tabindex="-1"><a class="header-anchor" href="#_1-配置-mysql"><span><a href="#_1-%E9%85%8D%E7%BD%AE-mysql">#</a> 1. 配置 MySQL</span></a></h2><h3 id="_1-1-安装-mysql-可选" tabindex="-1"><a class="header-anchor" href="#_1-1-安装-mysql-可选"><span><a href="#_1-1-%E5%AE%89%E8%A3%85-mysql-%E5%8F%AF%E9%80%89">#</a> 1.1 安装 MySQL（可选）</span></a></h3><p>友情提示：安装 MySQL 是可选步骤，也可以购买 MySQL 云服务。</p><p>① 执行如下命令，进行 MySQL 的安装。</p><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>## ① 安装 MySQL 5.7 版本的软件源 https://dev.mysql.com/downloads/repo/yum/</span></span>
<span class="line"><span>rpm -Uvh https://dev.mysql.com/get/mysql57-community-release-el7-11.noarch.rpm</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## ② 安装 MySQL Server 5.7 版本</span></span>
<span class="line"><span>yum install mysql-server --nogpgcheck</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## ③ 查看 MySQL 的安装版本。结果是 mysqld  Ver 5.7.37 for Linux on x86_64 (MySQL Community Server (GPL))</span></span>
<span class="line"><span>mysqld --version</span></span></code></pre></div><p>② 修改 <code>/etc/my.cnf</code> 文件，在文末加上 <code>lower_case_table_names=1</code> 和 <code>validate_password=off</code> 配置，执行 <code>systemctl restart mysqld</code> 命令重启。</p><p>③ 执行 <code>grep password /var/log/mysqld.log</code> 命令，获得 MySQL 临时密码。</p><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>2022-04-16T09:39:57.365086Z 1 [Note] A temporary password is generated for root@localhost: ZOKUaehW2e.e</span></span></code></pre></div><p>④ 执行如下命令，修改 MySQL 的密码，设置允许远程连接。</p><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>## ① 连接 MySQL Server 服务，并输入临时密码</span></span>
<span class="line"><span>mysql -uroot -p</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## ② 修改密码，123456 可改成你想要的密码</span></span>
<span class="line"><span>alter user &#39;root&#39;@&#39;localhost&#39; identified by &#39;123456&#39;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## ③ 设置允许远程连接</span></span>
<span class="line"><span>use mysql;</span></span>
<span class="line"><span>update user set host = &#39;%&#39; where user = &#39;root&#39;;</span></span>
<span class="line"><span>FLUSH PRIVILEGES;</span></span></code></pre></div><h3 id="_1-2-导入-sql-脚本" tabindex="-1"><a class="header-anchor" href="#_1-2-导入-sql-脚本"><span><a href="#_1-2-%E5%AF%BC%E5%85%A5-sql-%E8%84%9A%E6%9C%AC">#</a> 1.2 导入 SQL 脚本</span></a></h3><p>创建一个名字为 <code>ruoyi-vue-pro</code> 数据库，执行数据库对应的 <a href="https://github.com/YunaiV/ruoyi-vue-pro/tree/master/sql" target="_blank" rel="noopener noreferrer"><code>sql</code></a> 目录下的 SQL 文件，进行初始化。</p><figure><img src="https://doc.iocoder.cn/img/Docker部署/02.png" alt="使用 Navicat 导入 SQL 脚本" tabindex="0" loading="lazy"><figcaption>使用 Navicat 导入 SQL 脚本</figcaption></figure><h2 id="_2-配置-redis" tabindex="-1"><a class="header-anchor" href="#_2-配置-redis"><span><a href="#_2-%E9%85%8D%E7%BD%AE-redis">#</a> 2. 配置 Redis</span></a></h2><p>友情提示：安装 Redis 是可选步骤，也可以购买 Redis 云服务。</p><p>执行如下命令，进行 Redis 的安装。</p><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>## ① 安装 remi 软件源</span></span>
<span class="line"><span>yum install http://rpms.famillecollet.com/enterprise/remi-release-7.rpm</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## ② 安装最新 Redis 版本。如果想要安装指定版本，可使用 yum --enablerepo=remi install redis-6.0.6 -y 命令</span></span>
<span class="line"><span>yum --enablerepo=remi install redis</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## ③ 查看 Redis 的安装版本。结果是 Redis server v=6.2.6 sha=00000000:0 malloc=jemalloc-5.1.0 bits=64 build=4ab9a06393930489</span></span>
<span class="line"><span>redis-server --version</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## ④ 启动 Redis 服务</span></span>
<span class="line"><span>systemctl restart redis</span></span></code></pre></div><ul><li>端口是 6379，密码未设置</li></ul><h2 id="_3-部署后端" tabindex="-1"><a class="header-anchor" href="#_3-部署后端"><span><a href="#_3-%E9%83%A8%E7%BD%B2%E5%90%8E%E7%AB%AF">#</a> 3. 部署后端</span></a></h2><h3 id="_3-1-修改配置" tabindex="-1"><a class="header-anchor" href="#_3-1-修改配置"><span><a href="#_3-1-%E4%BF%AE%E6%94%B9%E9%85%8D%E7%BD%AE">#</a> 3.1 修改配置</span></a></h3><p>后端 dev 开发环境对应的是 <a href="https://github.com/YunaiV/ruoyi-vue-pro/blob/master/yudao-server/src/main/resources/application-dev.yaml" target="_blank" rel="noopener noreferrer"><code>application-dev.yaml</code></a> 配置文件，主要是修改 MySQL 和 Redis 为你的地址。如下图所示：</p><figure><img src="https://doc.iocoder.cn/img/Linux部署/03.png" alt=" 配置文件" tabindex="0" loading="lazy"><figcaption> 配置文件</figcaption></figure><h3 id="_3-2-编译后端" tabindex="-1"><a class="header-anchor" href="#_3-2-编译后端"><span><a href="#_3-2-%E7%BC%96%E8%AF%91%E5%90%8E%E7%AB%AF">#</a> 3.2 编译后端</span></a></h3><p>在项目的根目录下，执行 <code>mvn clean package -Dmaven.test.skip=true</code> 命令，编译后端项目，构建出它的 Jar 包。如下图所示：</p><figure><img src="https://doc.iocoder.cn/img/Linux部署/02.png" alt="编译后端" tabindex="0" loading="lazy"><figcaption>编译后端</figcaption></figure><p>疑问：-Dmaven.test.skip=true 是什么意思？</p><p>跳过单元测试的执行。如果你项目的单元测试写的不错，建议使用 <code>mvn clean package</code> 命令，执行单元测试，保证交付的质量。</p><h3 id="_3-3-上传-jar-包" tabindex="-1"><a class="header-anchor" href="#_3-3-上传-jar-包"><span><a href="#_3-3-%E4%B8%8A%E4%BC%A0-jar-%E5%8C%85">#</a> 3.3 上传 Jar 包</span></a></h3><p>在 Linux 服务器上创建 <code>/work/projects/yudao-server</code> 目录，使用 <code>scp</code> 命令或者 FTP 工具，将 <code>yudao-server.jar</code> 上传到该目录下。如下图所示：</p><figure><img src="https://doc.iocoder.cn/img/Linux部署/04.png" alt="上传 Jar 包" tabindex="0" loading="lazy"><figcaption>上传 Jar 包</figcaption></figure><p>疑问：如果构建 War 包，部署到 Tomcat 下？</p><p>并不推荐采用 War 包部署到 Tomcat 下。如果真的需要，可以参考 <a href="https://www.baeldung.com/spring-boot-war-tomcat-deploy" target="_blank" rel="noopener noreferrer">《Deploy a Spring Boot WAR into a Tomcat Server》</a> 文章。</p><h3 id="_3-4-编写脚本" tabindex="-1"><a class="header-anchor" href="#_3-4-编写脚本"><span><a href="#_3-4-%E7%BC%96%E5%86%99%E8%84%9A%E6%9C%AC">#</a> 3.4 编写脚本</span></a></h3><p>在 <code>/work/projects/yudao-server</code> 目录下，新建 Shell 脚本 <code>deploy.sh</code>，用于启动后端项目。编写内容如下：</p><div class="language- line-numbers-mode" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>#!/bin/bash</span></span>
<span class="line"><span>set -e</span></span>
<span class="line"><span></span></span>
<span class="line"><span>DATE=$(date +%Y%m%d%H%M)</span></span>
<span class="line"><span># 基础路径</span></span>
<span class="line"><span>BASE_PATH=/work/projects/yudao-server</span></span>
<span class="line"><span># 服务名称。同时约定部署服务的 jar 包名字也为它。</span></span>
<span class="line"><span>SERVER_NAME=yudao-server</span></span>
<span class="line"><span># 环境</span></span>
<span class="line"><span>PROFILES_ACTIVE=dev</span></span>
<span class="line"><span></span></span>
<span class="line"><span># heapError 存放路径</span></span>
<span class="line"><span>HEAP_ERROR_PATH=$BASE_PATH/heapError</span></span>
<span class="line"><span># JVM 参数</span></span>
<span class="line"><span>JAVA_OPS=&quot;-Xms512m -Xmx512m -XX:+HeapDumpOnOutOfMemoryError -XX:HeapDumpPath=$HEAP_ERROR_PATH&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span># SkyWalking Agent 配置</span></span>
<span class="line"><span>#export SW_AGENT_NAME=$SERVER_NAME</span></span>
<span class="line"><span>#export SW_AGENT_COLLECTOR_BACKEND_SERVICES=192.168.0.84:11800</span></span>
<span class="line"><span>#export SW_GRPC_LOG_SERVER_HOST=192.168.0.84</span></span>
<span class="line"><span>#export SW_AGENT_TRACE_IGNORE_PATH=&quot;Redisson/PING,/actuator/**,/admin/**&quot;</span></span>
<span class="line"><span>#export JAVA_AGENT=-javaagent:/work/skywalking/apache-skywalking-apm-bin/agent/skywalking-agent.jar</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 停止：优雅关闭之前已经启动的服务</span></span>
<span class="line"><span>function stop() {</span></span>
<span class="line"><span>    echo &quot;[stop] 开始停止 $BASE_PATH/$SERVER_NAME&quot;</span></span>
<span class="line"><span>    PID=$(ps -ef | grep $BASE_PATH/$SERVER_NAME | grep -v &quot;grep&quot; | awk &#39;{print $2}&#39;)</span></span>
<span class="line"><span>    # 如果 Java 服务启动中，则进行关闭</span></span>
<span class="line"><span>    if [ -n &quot;$PID&quot; ]; then</span></span>
<span class="line"><span>        # 正常关闭</span></span>
<span class="line"><span>        echo &quot;[stop] $BASE_PATH/$SERVER_NAME 运行中，开始 kill [$PID]&quot;</span></span>
<span class="line"><span>        kill -15 $PID</span></span>
<span class="line"><span>        # 等待最大 120 秒，直到关闭完成。</span></span>
<span class="line"><span>        for ((i = 0; i &lt; 120; i++))</span></span>
<span class="line"><span>            do</span></span>
<span class="line"><span>                sleep 1</span></span>
<span class="line"><span>                PID=$(ps -ef | grep $BASE_PATH/$SERVER_NAME | grep -v &quot;grep&quot; | awk &#39;{print $2}&#39;)</span></span>
<span class="line"><span>                if [ -n &quot;$PID&quot; ]; then</span></span>
<span class="line"><span>                    echo -e &quot;.\\c&quot;</span></span>
<span class="line"><span>                else</span></span>
<span class="line"><span>                    echo &#39;[stop] 停止 $BASE_PATH/$SERVER_NAME 成功&#39;</span></span>
<span class="line"><span>                    break</span></span>
<span class="line"><span>                fi</span></span>
<span class="line"><span>		    done</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        # 如果正常关闭失败，那么进行强制 kill -9 进行关闭</span></span>
<span class="line"><span>        if [ -n &quot;$PID&quot; ]; then</span></span>
<span class="line"><span>            echo &quot;[stop] $BASE_PATH/$SERVER_NAME 失败，强制 kill -9 $PID&quot;</span></span>
<span class="line"><span>            kill -9 $PID</span></span>
<span class="line"><span>        fi</span></span>
<span class="line"><span>    # 如果 Java 服务未启动，则无需关闭</span></span>
<span class="line"><span>    else</span></span>
<span class="line"><span>        echo &quot;[stop] $BASE_PATH/$SERVER_NAME 未启动，无需停止&quot;</span></span>
<span class="line"><span>    fi</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 启动：启动后端项目</span></span>
<span class="line"><span>function start() {</span></span>
<span class="line"><span>    # 开启启动前，打印启动参数</span></span>
<span class="line"><span>    echo &quot;[start] 开始启动 $BASE_PATH/$SERVER_NAME&quot;</span></span>
<span class="line"><span>    echo &quot;[start] JAVA_OPS: $JAVA_OPS&quot;</span></span>
<span class="line"><span>    echo &quot;[start] JAVA_AGENT: $JAVA_AGENT&quot;</span></span>
<span class="line"><span>    echo &quot;[start] PROFILES: $PROFILES_ACTIVE&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    # 开始启动</span></span>
<span class="line"><span>    nohup java -server $JAVA_OPS $JAVA_AGENT -jar $BASE_PATH/$SERVER_NAME.jar --spring.profiles.active=$PROFILES_ACTIVE &gt; nohup.out 2&gt;&amp;1 &amp;</span></span>
<span class="line"><span>    echo &quot;[start] 启动 $BASE_PATH/$SERVER_NAME 完成&quot;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 部署</span></span>
<span class="line"><span>function deploy() {</span></span>
<span class="line"><span>    cd $BASE_PATH</span></span>
<span class="line"><span>    # 第一步：停止 Java 服务</span></span>
<span class="line"><span>    stop</span></span>
<span class="line"><span>    # 第二步：启动 Java 服务</span></span>
<span class="line"><span>    start</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>deploy</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>友情提示：</p><p>脚本的详细讲解，可见 <a href="https://www.iocoder.cn/Jenkins/install/?yudao" target="_blank" rel="noopener noreferrer">《芋道 Jenkins 极简入门 》</a> 的「2.3 远程服务器配置 」小节。</p><p>如果你想要修改脚本，主要关注 <code>BASE_PATH</code>、<code>PROFILES_ACTIVE</code>、<code>JAVA_OPS</code> 三个参数。如下图所示：</p><figure><img src="https://doc.iocoder.cn/img/Linux部署/05.png" alt="可修改参数" tabindex="0" loading="lazy"><figcaption>可修改参数</figcaption></figure><h3 id="_3-5-启动后端" tabindex="-1"><a class="header-anchor" href="#_3-5-启动后端"><span><a href="#_3-5-%E5%90%AF%E5%8A%A8%E5%90%8E%E7%AB%AF">#</a> 3.5 启动后端</span></a></h3><p>① 【可选】执行 <code>yum install -y java-1.8.0-openjdk</code> 命令，安装 OpenJDK <strong>8</strong>。</p><p>友情提示：如果已经安装 JDK，可不安装。建议使用的 JDK 版本为 8、11、17 这三个。</p><p>② 执行 <code>sh deploy.sh</code> 命令，启动后端项目。日志如下：</p><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>[stop] 开始停止 /work/projects/yudao-server/yudao-server</span></span>
<span class="line"><span>[stop] /work/projects/yudao-server/yudao-server 未启动，无需停止</span></span>
<span class="line"><span>[start] 开始启动 /work/projects/yudao-server/yudao-server</span></span>
<span class="line"><span>[start] JAVA_OPS: -Xms512m -Xmx512m -XX:+HeapDumpOnOutOfMemoryError -XX:HeapDumpPath=/work/projects/yudao-server/heapError</span></span>
<span class="line"><span>[start] JAVA_AGENT:</span></span>
<span class="line"><span>[start] PROFILES: dev</span></span>
<span class="line"><span>[start] 启动 /work/projects/yudao-server/yudao-server 完成</span></span></code></pre></div><p>③ 执行 <code>tail -f nohup.out</code> 命令，查看启动日志。看到如下内容，说明启动完成：</p><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>2022-04-13 00:06:20.049  INFO 1395 --- [main] [TID: N/A] c.i.yudao.server.YudaoServerApplication  : Started YudaoServerApplication in 35.315 seconds (JVM running for 36.282)</span></span></code></pre></div><h2 id="_4-部署前端" tabindex="-1"><a class="header-anchor" href="#_4-部署前端"><span><a href="#_4-%E9%83%A8%E7%BD%B2%E5%89%8D%E7%AB%AF">#</a> 4. 部署前端</span></a></h2><h3 id="_4-1-修改配置" tabindex="-1"><a class="header-anchor" href="#_4-1-修改配置"><span><a href="#_4-1-%E4%BF%AE%E6%94%B9%E9%85%8D%E7%BD%AE">#</a> 4.1 修改配置</span></a></h3><p>前端 dev 开发环境对应的是 <a href="https://github.com/yudaocode/yudao-ui-admin-vue2/blob/master/.env.dev" target="_blank" rel="noopener noreferrer"><code>.env.dev</code></a> 配置文件，主要是修改 <code>VUE_APP_BASE_API</code> 为你的后端项目的访问地址。如下图所示：</p><figure><img src="https://doc.iocoder.cn/img/Linux部署/11.png" alt=" 配置文件" tabindex="0" loading="lazy"><figcaption> 配置文件</figcaption></figure><h3 id="_4-2-编译前端" tabindex="-1"><a class="header-anchor" href="#_4-2-编译前端"><span><a href="#_4-2-%E7%BC%96%E8%AF%91%E5%89%8D%E7%AB%AF">#</a> 4.2 编译前端</span></a></h3><p>友情提示：</p><p>下文的 <code>yudao-ui-admin</code> 目录，指的是你克隆前端项目后的地址！</p><p>在 <code>yudao-ui-admin</code> 目录下，执行 <code>npm run build:dev</code> 命令，编译前端项目，构建出它的 <code>dist</code> 文件，里面是 HTML、CSS、JavaScript 等静态文件。如下图所示：</p><figure><img src="https://doc.iocoder.cn/img/Linux部署/12.png" alt="编译前端" tabindex="0" loading="lazy"><figcaption>编译前端</figcaption></figure><p>如下想要打包其它环境，可使用如下命令：</p><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>npm run build:prod ## 打包 prod 生产环境</span></span>
<span class="line"><span>npm run build:stage ## 打包 stage 预发布环境</span></span></code></pre></div><p>其它高级参数说明【可暂时不看】：</p><p>① <code>PUBLIC_PATH</code>：静态资源地址，可用于七牛等 CDN 服务回源读取前端的静态文件，提升访问速度，建议 prod 生产环境使用。示例如下：</p><figure><img src="https://doc.iocoder.cn/img/Linux部署/16.png" alt=" 参数" tabindex="0" loading="lazy"><figcaption> 参数</figcaption></figure><p>② <code>VUE_APP_APP_NAME</code>：二级部署路径，默认为 <code>/</code> 根目录，一般不用修改。</p><p>③ <code>mode</code>：前端路由的模式，默认采用 <code>history</code> 路由，一般不用修改。可以通过修改 <a href="https://github.com/yudaocode/yudao-ui-admin-vue2/blob/master/src/router/index.js#L173-L178" target="_blank" rel="noopener noreferrer"><code>router/index.js</code></a> 来设置为 <code>hash</code> 路由，示例如下：</p><figure><img src="https://doc.iocoder.cn/img/Linux部署/17.png" alt=" 参数" tabindex="0" loading="lazy"><figcaption> 参数</figcaption></figure><h3 id="_4-3-上传-dist-文件" tabindex="-1"><a class="header-anchor" href="#_4-3-上传-dist-文件"><span><a href="#_4-3-%E4%B8%8A%E4%BC%A0-dist-%E6%96%87%E4%BB%B6">#</a> 4.3 上传 <code>dist</code> 文件</span></a></h3><p>在 Linux 服务器上创建 <code>/work/projects/yudao-ui-admin</code> 目录，使用 <code>scp</code> 命令或者 FTP 工具，将 <code>dist</code> 上传到该目录下。如下图所示：</p><figure><img src="https://doc.iocoder.cn/img/Linux部署/13.png" alt="上传  文件" tabindex="0" loading="lazy"><figcaption>上传 文件</figcaption></figure><h3 id="_4-4-启动前端" tabindex="-1"><a class="header-anchor" href="#_4-4-启动前端"><span><a href="#_4-4-%E5%90%AF%E5%8A%A8%E5%89%8D%E7%AB%AF">#</a> 4.4 启动前端？</span></a></h3><p>前端无法直接启动，而是通过 Nginx 转发读取 <code>/work/projects/yudao-ui-admin</code> 目录的静态文件。</p><h2 id="_5-配置-nginx" tabindex="-1"><a class="header-anchor" href="#_5-配置-nginx"><span><a href="#_5-%E9%85%8D%E7%BD%AE-nginx">#</a> 5. 配置 Nginx</span></a></h2><h3 id="_5-1-安装-nginx" tabindex="-1"><a class="header-anchor" href="#_5-1-安装-nginx"><span><a href="#_5-1-%E5%AE%89%E8%A3%85-nginx">#</a> 5.1 安装 Nginx</span></a></h3><p>参考 <a href="https://docs.nginx.com/nginx/admin-guide/installing-nginx/installing-nginx-open-source/" target="_blank" rel="noopener noreferrer">Nginx 官方文档</a>，安装 Nginx 服务。命令如下：</p><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>## 添加 yum 源</span></span>
<span class="line"><span>yum install epel-release</span></span>
<span class="line"><span>yum update</span></span>
<span class="line"><span>## 安装 nginx</span></span>
<span class="line"><span>yum install nginx</span></span>
<span class="line"><span>## 启动 nginx</span></span>
<span class="line"><span>nginx</span></span></code></pre></div><p>Nginx 默认配置文件是 <code>/etc/nginx/nginx.conf</code>。</p><hr><p>下面，来看两种 Nginx 的配置，分别满足服务器 IP、独立域名的不同场景。</p><h3 id="_5-2-方式一-服务器-ip-访问" tabindex="-1"><a class="header-anchor" href="#_5-2-方式一-服务器-ip-访问"><span><a href="#_5-2-%E6%96%B9%E5%BC%8F%E4%B8%80-%E6%9C%8D%E5%8A%A1%E5%99%A8-ip-%E8%AE%BF%E9%97%AE">#</a> 5.2 方式一：服务器 IP 访问</span></a></h3><p>① 修改 Nginx 配置，内容如下：</p><div class="language- line-numbers-mode" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>worker_processes  1;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>events {</span></span>
<span class="line"><span>    worker_connections  1024;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>http {</span></span>
<span class="line"><span>    include       mime.types;</span></span>
<span class="line"><span>    default_type  application/octet-stream;</span></span>
<span class="line"><span>    sendfile        on;</span></span>
<span class="line"><span>    keepalive_timeout  65;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    gzip on;</span></span>
<span class="line"><span>    gzip_min_length 1k;     # 设置允许压缩的页面最小字节数</span></span>
<span class="line"><span>    gzip_buffers 4 16k;     # 用来存储 gzip 的压缩结果</span></span>
<span class="line"><span>    gzip_http_version 1.1;  # 识别 HTTP 协议版本</span></span>
<span class="line"><span>    gzip_comp_level 2;      # 设置 gzip 的压缩比 1-9。1 压缩比最小但最快，而 9 相反</span></span>
<span class="line"><span>    gzip_types gzip_types text/plain text/css application/json application/javascript text/xml application/xml application/xml+rss text/javascript; # 指定压缩类型</span></span>
<span class="line"><span>    gzip_proxied any;       # 无论后端服务器的 headers 头返回什么信息，都无条件启用压缩</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    server {</span></span>
<span class="line"><span>        listen       80;</span></span>
<span class="line"><span>        server_name  192.168.225.2; ## 重要！！！修改成你的外网 IP/域名</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        location / { ## 前端项目</span></span>
<span class="line"><span>            root   /work/projects/yudao-ui-admin;</span></span>
<span class="line"><span>            index  index.html index.htm;</span></span>
<span class="line"><span>            try_files $uri $uri/ /index.html;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        location /admin-api/ { ## 后端项目 - 管理后台</span></span>
<span class="line"><span>            proxy_pass http://localhost:48080/admin-api/; ## 重要！！！proxy_pass 需要设置为后端项目所在服务器的 IP</span></span>
<span class="line"><span>            proxy_set_header Host $http_host;</span></span>
<span class="line"><span>            proxy_set_header X-Real-IP $remote_addr;</span></span>
<span class="line"><span>            proxy_set_header REMOTE-HOST $remote_addr;</span></span>
<span class="line"><span>            proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        location /app-api/ { ## 后端项目 - 用户 App</span></span>
<span class="line"><span>            proxy_pass http://localhost:48080/app-api/; ## 重要！！！proxy_pass 需要设置为后端项目所在服务器的 IP</span></span>
<span class="line"><span>            proxy_set_header Host $http_host;</span></span>
<span class="line"><span>            proxy_set_header X-Real-IP $remote_addr;</span></span>
<span class="line"><span>            proxy_set_header REMOTE-HOST $remote_addr;</span></span>
<span class="line"><span>            proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>② 执行 <code>nginx -s reload</code> 命令，重新加载 Nginx 配置。</p><p>③ 请求 <a href="http://192.168.225.2/admin-api/" target="_blank" rel="noopener noreferrer">http://192.168.225.2/admin-api/</a> 地址，成功访问后端项目，返回结果如下：</p><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>{&quot;code&quot;:401,&quot;data&quot;:null,&quot;msg&quot;:&quot;账号未登录&quot;}</span></span></code></pre></div><p>④ 请求 <a href="http://192.168.225.2" target="_blank" rel="noopener noreferrer">http://192.168.225.2</a> 地址，成功访问前端项目，返回前端界面如下：</p><figure><img src="https://doc.iocoder.cn/img/Linux部署/14.png" alt="前端界面" tabindex="0" loading="lazy"><figcaption>前端界面</figcaption></figure><h3 id="_5-3-方式二-独立域名访问" tabindex="-1"><a class="header-anchor" href="#_5-3-方式二-独立域名访问"><span><a href="#_5-3-%E6%96%B9%E5%BC%8F%E4%BA%8C-%E7%8B%AC%E7%AB%8B%E5%9F%9F%E5%90%8D%E8%AE%BF%E9%97%AE">#</a> 5.3 方式二：独立域名访问</span></a></h3><p>友情提示：在前端项目的编译时，需要把 <code>VUE\\_APP\\_BASE\\_API</code> 修改为后端项目对应的域名。</p><p>例如说，这里使用的是 <code>http://api.iocoder.cn</code></p><p>① 修改 Nginx 配置，内容如下：</p><div class="language- line-numbers-mode" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>worker_processes  1;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>events {</span></span>
<span class="line"><span>    worker_connections  1024;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>http {</span></span>
<span class="line"><span>    include       mime.types;</span></span>
<span class="line"><span>    default_type  application/octet-stream;</span></span>
<span class="line"><span>    sendfile        on;</span></span>
<span class="line"><span>    keepalive_timeout  65;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    gzip on;</span></span>
<span class="line"><span>    gzip_min_length 1k;     # 设置允许压缩的页面最小字节数</span></span>
<span class="line"><span>    gzip_buffers 4 16k;     # 用来存储 gzip 的压缩结果</span></span>
<span class="line"><span>    gzip_http_version 1.1;  # 识别 HTTP 协议版本</span></span>
<span class="line"><span>    gzip_comp_level 2;      # 设置 gzip 的压缩比 1-9。1 压缩比最小但最快，而 9 相反</span></span>
<span class="line"><span>    gzip_types text/plain application/x-javascript text/css application/xml application/javascript; # 指定压缩类型</span></span>
<span class="line"><span>    gzip_proxied any;       # 无论后端服务器的 headers 头返回什么信息，都无条件启用压缩</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    server { ## 前端项目</span></span>
<span class="line"><span>        listen       80;</span></span>
<span class="line"><span>        server_name  admin.iocoder.cn; ## 重要！！！修改成你的前端域名</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        location / { ## 前端项目</span></span>
<span class="line"><span>            root   /work/projects/yudao-ui-admin;</span></span>
<span class="line"><span>            index  index.html index.htm;</span></span>
<span class="line"><span>            try_files $uri $uri/ /index.html;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    server { ## 后端项目</span></span>
<span class="line"><span>        listen       80;</span></span>
<span class="line"><span>        server_name  api.iocoder.cn; ## 重要！！！修改成你的外网 IP/域名</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        ## 不要使用 location / 转发到后端项目，因为 druid、admin 等监控，不需要外网可访问。或者增加 Nginx IP 白名单限制也可以。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        location /admin-api/ { ## 后端项目 - 管理后台</span></span>
<span class="line"><span>            proxy_pass http://localhost:48080/admin-api/; ## 重要！！！proxy_pass 需要设置为后端项目所在服务器的 IP</span></span>
<span class="line"><span>            proxy_set_header Host $http_host;</span></span>
<span class="line"><span>            proxy_set_header X-Real-IP $remote_addr;</span></span>
<span class="line"><span>            proxy_set_header REMOTE-HOST $remote_addr;</span></span>
<span class="line"><span>            proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        location /app-api/ { ## 后端项目 - 用户 App</span></span>
<span class="line"><span>            proxy_pass http://localhost:48080/app-api/; ## 重要！！！proxy_pass 需要设置为后端项目所在服务器的 IP</span></span>
<span class="line"><span>            proxy_set_header Host $http_host;</span></span>
<span class="line"><span>            proxy_set_header X-Real-IP $remote_addr;</span></span>
<span class="line"><span>            proxy_set_header REMOTE-HOST $remote_addr;</span></span>
<span class="line"><span>            proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>② 执行 <code>nginx -s reload</code> 命令，重新加载 Nginx 配置。</p><p>③ 请求 <a href="http://api.iocoder.cn/admin-api/" target="_blank" rel="noopener noreferrer">http://api.iocoder.cn/admin-api/</a> 地址，成功访问后端项目，返回结果如下：</p><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>{&quot;code&quot;:401,&quot;data&quot;:null,&quot;msg&quot;:&quot;账号未登录&quot;}</span></span></code></pre></div><p>④ 请求 <a href="http://admin.iocoder.cn" target="_blank" rel="noopener noreferrer">http://admin.iocoder.cn</a> 地址，成功访问前端项目，返回前端界面如下：</p><figure><img src="https://doc.iocoder.cn/img/Linux部署/15.png" alt="前端界面" tabindex="0" loading="lazy"><figcaption>前端界面</figcaption></figure>`,96),l=[p];function d(r,c){return s(),a("div",null,l)}const t=n(i,[["render",d],["__file","deployment-linux.html.vue"]]),v=JSON.parse('{"path":"/project/rouyi-vue-pro/deployment-linux.html","title":"Linux 部署","lang":"en-US","frontmatter":{"title":"Linux 部署","tags":["project","java","spring-boot","spring-cloud"],"categories":["project"],"order":163,"feed":false,"seo":false,"head":[]},"headers":[{"level":2,"title":"# 1. 配置 MySQL","slug":"_1-配置-mysql","link":"#_1-配置-mysql","children":[{"level":3,"title":"# 1.1 安装 MySQL（可选）","slug":"_1-1-安装-mysql-可选","link":"#_1-1-安装-mysql-可选","children":[]},{"level":3,"title":"# 1.2 导入 SQL 脚本","slug":"_1-2-导入-sql-脚本","link":"#_1-2-导入-sql-脚本","children":[]}]},{"level":2,"title":"# 2. 配置 Redis","slug":"_2-配置-redis","link":"#_2-配置-redis","children":[]},{"level":2,"title":"# 3. 部署后端","slug":"_3-部署后端","link":"#_3-部署后端","children":[{"level":3,"title":"# 3.1 修改配置","slug":"_3-1-修改配置","link":"#_3-1-修改配置","children":[]},{"level":3,"title":"# 3.2 编译后端","slug":"_3-2-编译后端","link":"#_3-2-编译后端","children":[]},{"level":3,"title":"# 3.3 上传 Jar 包","slug":"_3-3-上传-jar-包","link":"#_3-3-上传-jar-包","children":[]},{"level":3,"title":"# 3.4 编写脚本","slug":"_3-4-编写脚本","link":"#_3-4-编写脚本","children":[]},{"level":3,"title":"# 3.5 启动后端","slug":"_3-5-启动后端","link":"#_3-5-启动后端","children":[]}]},{"level":2,"title":"# 4. 部署前端","slug":"_4-部署前端","link":"#_4-部署前端","children":[{"level":3,"title":"# 4.1 修改配置","slug":"_4-1-修改配置","link":"#_4-1-修改配置","children":[]},{"level":3,"title":"# 4.2 编译前端","slug":"_4-2-编译前端","link":"#_4-2-编译前端","children":[]},{"level":3,"title":"# 4.3 上传 dist 文件","slug":"_4-3-上传-dist-文件","link":"#_4-3-上传-dist-文件","children":[]},{"level":3,"title":"# 4.4 启动前端？","slug":"_4-4-启动前端","link":"#_4-4-启动前端","children":[]}]},{"level":2,"title":"# 5. 配置 Nginx","slug":"_5-配置-nginx","link":"#_5-配置-nginx","children":[{"level":3,"title":"# 5.1 安装 Nginx","slug":"_5-1-安装-nginx","link":"#_5-1-安装-nginx","children":[]},{"level":3,"title":"# 5.2 方式一：服务器 IP 访问","slug":"_5-2-方式一-服务器-ip-访问","link":"#_5-2-方式一-服务器-ip-访问","children":[]},{"level":3,"title":"# 5.3 方式二：独立域名访问","slug":"_5-3-方式二-独立域名访问","link":"#_5-3-方式二-独立域名访问","children":[]}]}],"git":{"createdTime":1720365235000,"updatedTime":1720365235000,"contributors":[{"name":"Hung Nguyen Van","email":"vanhung4499@gmail.com","commits":1}]},"readingTime":{"minutes":9.54,"words":2861},"filePathRelative":"project/rouyi-vue-pro/deployment-linux.md","localizedDate":"July 7, 2024"}');export{t as comp,v as data};
