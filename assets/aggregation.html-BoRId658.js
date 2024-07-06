import{_ as n,o as s,c as a,a as i}from"./app-B9pwkC50.js";const e={},p=i(`<h1 id="elasticsearch-aggregations" tabindex="-1"><a class="header-anchor" href="#elasticsearch-aggregations"><span>Elasticsearch Aggregations</span></a></h1><p>Elasticsearch là một công cụ tìm kiếm toàn văn bản phân tán, lập chỉ mục và tìm kiếm là các chức năng cơ bản của Elasticsearch. Thực tế, chức năng Aggregations của Elasticsearch cũng rất mạnh mẽ, cho phép thực hiện phân tích thống kê phức tạp trên dữ liệu. Elasticsearch cung cấp bốn loại chức năng phân tích tổng hợp chính, bao gồm <strong>aggregations chỉ số (metrics aggregations)</strong>, <strong>aggregations thùng (bucket aggregations)</strong>, <strong>aggregations ống (pipeline aggregations)</strong> và <strong>aggregations ma trận (matrix aggregations)</strong>. Aggregations ống và aggregations ma trận đang trong giai đoạn thử nghiệm theo thông báo chính thức, và sẽ được thay đổi hoàn toàn hoặc loại bỏ sau này, vì vậy chúng tôi sẽ không giải thích về aggregations ống và aggregations ma trận ở đây.</p><h2 id="cau-truc-cu-the-cua-aggregations" tabindex="-1"><a class="header-anchor" href="#cau-truc-cu-the-cua-aggregations"><span>Cấu trúc cụ thể của Aggregations</span></a></h2><p>Tất cả các aggregations, bất kể loại nào, đều tuân theo các quy tắc sau.</p><ul><li>Chúng được định nghĩa trong cùng một yêu cầu JSON như truy vấn, và bạn đánh dấu chúng bằng cách sử dụng khóa aggregations hoặc aggs. Bạn cần đặt tên cho mỗi aggregation, chỉ định loại của nó và các tùy chọn liên quan đến loại đó.</li><li>Chúng chạy trên kết quả của truy vấn. Các tài liệu không khớp với truy vấn sẽ không được tính, trừ khi bạn sử dụng aggregation global để bao gồm các tài liệu không khớp.</li><li>Chúng có thể lọc thêm kết quả của truy vấn mà không ảnh hưởng đến aggregation.</li></ul><p>Dưới đây là cấu trúc cơ bản của aggregation:</p><div class="language-json" data-ext="json" data-title="json"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#98C379;--shiki-dark:#98C379;">&quot;aggregations&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> : { </span><span style="color:#FFFFFF;--shiki-dark:#FFFFFF;">&lt;!--</span><span style="color:#FFFFFF;--shiki-dark:#FFFFFF;"> Khóa</span><span style="color:#FFFFFF;--shiki-dark:#FFFFFF;"> aggregation</span><span style="color:#FFFFFF;--shiki-dark:#FFFFFF;"> ở</span><span style="color:#FFFFFF;--shiki-dark:#FFFFFF;"> cấp</span><span style="color:#FFFFFF;--shiki-dark:#FFFFFF;"> độ</span><span style="color:#FFFFFF;--shiki-dark:#FFFFFF;"> cao</span><span style="color:#FFFFFF;--shiki-dark:#FFFFFF;"> nhất,</span><span style="color:#FFFFFF;--shiki-dark:#FFFFFF;"> cũng</span><span style="color:#FFFFFF;--shiki-dark:#FFFFFF;"> có</span><span style="color:#FFFFFF;--shiki-dark:#FFFFFF;"> thể</span><span style="color:#FFFFFF;--shiki-dark:#FFFFFF;"> viết</span><span style="color:#FFFFFF;--shiki-dark:#FFFFFF;"> tắt</span><span style="color:#FFFFFF;--shiki-dark:#FFFFFF;"> là</span><span style="color:#FFFFFF;--shiki-dark:#FFFFFF;"> aggs</span><span style="color:#FFFFFF;--shiki-dark:#FFFFFF;"> --&gt;</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">    &quot;&lt;aggregation_name&gt;&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> : { </span><span style="color:#FFFFFF;--shiki-dark:#FFFFFF;">&lt;!--</span><span style="color:#FFFFFF;--shiki-dark:#FFFFFF;"> Tên</span><span style="color:#FFFFFF;--shiki-dark:#FFFFFF;"> tùy</span><span style="color:#FFFFFF;--shiki-dark:#FFFFFF;"> chỉnh</span><span style="color:#FFFFFF;--shiki-dark:#FFFFFF;"> của</span><span style="color:#FFFFFF;--shiki-dark:#FFFFFF;"> aggregation</span><span style="color:#FFFFFF;--shiki-dark:#FFFFFF;"> --&gt;</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">        &quot;&lt;aggregation_type&gt;&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> : { </span><span style="color:#FFFFFF;--shiki-dark:#FFFFFF;">&lt;!--</span><span style="color:#FFFFFF;--shiki-dark:#FFFFFF;"> Loại</span><span style="color:#FFFFFF;--shiki-dark:#FFFFFF;"> aggregation,</span><span style="color:#FFFFFF;--shiki-dark:#FFFFFF;"> liên</span><span style="color:#FFFFFF;--shiki-dark:#FFFFFF;"> quan</span><span style="color:#FFFFFF;--shiki-dark:#FFFFFF;"> đến</span><span style="color:#FFFFFF;--shiki-dark:#FFFFFF;"> chỉ</span><span style="color:#FFFFFF;--shiki-dark:#FFFFFF;"> số</span><span style="color:#FFFFFF;--shiki-dark:#FFFFFF;"> như</span><span style="color:#FFFFFF;--shiki-dark:#FFFFFF;"> max,</span><span style="color:#FFFFFF;--shiki-dark:#FFFFFF;"> min,</span><span style="color:#FFFFFF;--shiki-dark:#FFFFFF;"> avg,</span><span style="color:#FFFFFF;--shiki-dark:#FFFFFF;"> sum,</span><span style="color:#FFFFFF;--shiki-dark:#FFFFFF;"> liên</span><span style="color:#FFFFFF;--shiki-dark:#FFFFFF;"> quan</span><span style="color:#FFFFFF;--shiki-dark:#FFFFFF;"> đến</span><span style="color:#FFFFFF;--shiki-dark:#FFFFFF;"> thùng</span><span style="color:#FFFFFF;--shiki-dark:#FFFFFF;"> như</span><span style="color:#FFFFFF;--shiki-dark:#FFFFFF;"> terms,</span><span style="color:#FFFFFF;--shiki-dark:#FFFFFF;"> filter,</span><span style="color:#FFFFFF;--shiki-dark:#FFFFFF;"> v.v.</span><span style="color:#FFFFFF;--shiki-dark:#FFFFFF;"> --&gt;</span></span>
<span class="line"><span style="color:#FFFFFF;--shiki-dark:#FFFFFF;">            &lt;aggregation_body&gt;</span><span style="color:#FFFFFF;--shiki-dark:#FFFFFF;"> &lt;!--</span><span style="color:#FFFFFF;--shiki-dark:#FFFFFF;"> Thân</span><span style="color:#FFFFFF;--shiki-dark:#FFFFFF;"> aggregation</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">: </span><span style="color:#FFFFFF;--shiki-dark:#FFFFFF;">trường</span><span style="color:#FFFFFF;--shiki-dark:#FFFFFF;"> nào</span><span style="color:#FFFFFF;--shiki-dark:#FFFFFF;"> sẽ</span><span style="color:#FFFFFF;--shiki-dark:#FFFFFF;"> được</span><span style="color:#FFFFFF;--shiki-dark:#FFFFFF;"> tổng</span><span style="color:#FFFFFF;--shiki-dark:#FFFFFF;"> hợp</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">, </span><span style="color:#FFFFFF;--shiki-dark:#FFFFFF;">có</span><span style="color:#FFFFFF;--shiki-dark:#FFFFFF;"> thể</span><span style="color:#FFFFFF;--shiki-dark:#FFFFFF;"> lấy</span><span style="color:#FFFFFF;--shiki-dark:#FFFFFF;"> giá</span><span style="color:#FFFFFF;--shiki-dark:#FFFFFF;"> trị</span><span style="color:#FFFFFF;--shiki-dark:#FFFFFF;"> của</span><span style="color:#FFFFFF;--shiki-dark:#FFFFFF;"> trường</span><span style="color:#FFFFFF;--shiki-dark:#FFFFFF;"> hoặc</span><span style="color:#FFFFFF;--shiki-dark:#FFFFFF;"> kết</span><span style="color:#FFFFFF;--shiki-dark:#FFFFFF;"> quả</span><span style="color:#FFFFFF;--shiki-dark:#FFFFFF;"> của</span><span style="color:#FFFFFF;--shiki-dark:#FFFFFF;"> script</span><span style="color:#FFFFFF;--shiki-dark:#FFFFFF;"> --&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">        }</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">        [,</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;meta&quot;</span><span style="color:#FFFFFF;--shiki-dark:#FFFFFF;"> :</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> {  </span><span style="color:#FFFFFF;--shiki-dark:#FFFFFF;">[&lt;meta_data_body&gt;]</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> } ]</span><span style="color:#FFFFFF;--shiki-dark:#FFFFFF;">?</span><span style="color:#FFFFFF;--shiki-dark:#FFFFFF;"> &lt;!--</span><span style="color:#FFFFFF;--shiki-dark:#FFFFFF;"> Meta</span><span style="color:#FFFFFF;--shiki-dark:#FFFFFF;"> --&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">        [,</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;aggregations&quot;</span><span style="color:#FFFFFF;--shiki-dark:#FFFFFF;"> :</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> { </span><span style="color:#FFFFFF;--shiki-dark:#FFFFFF;">[&lt;sub_aggregation&gt;]+</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> } ]</span><span style="color:#FFFFFF;--shiki-dark:#FFFFFF;">?</span><span style="color:#FFFFFF;--shiki-dark:#FFFFFF;"> &lt;!--</span><span style="color:#FFFFFF;--shiki-dark:#FFFFFF;"> Định</span><span style="color:#FFFFFF;--shiki-dark:#FFFFFF;"> nghĩa</span><span style="color:#FFFFFF;--shiki-dark:#FFFFFF;"> sub-aggregation</span><span style="color:#FFFFFF;--shiki-dark:#FFFFFF;"> trong</span><span style="color:#FFFFFF;--shiki-dark:#FFFFFF;"> aggregation</span><span style="color:#FFFFFF;--shiki-dark:#FFFFFF;"> --&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    }</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    [,</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;&lt;aggregation_name_2&gt;&quot;</span><span style="color:#FFFFFF;--shiki-dark:#FFFFFF;"> :</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> { </span><span style="color:#FFFFFF;--shiki-dark:#FFFFFF;">...</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> } ]</span><span style="color:#FFFFFF;--shiki-dark:#FFFFFF;">*</span><span style="color:#FFFFFF;--shiki-dark:#FFFFFF;"> &lt;!--</span><span style="color:#FFFFFF;--shiki-dark:#FFFFFF;"> Tên</span><span style="color:#FFFFFF;--shiki-dark:#FFFFFF;"> tùy</span><span style="color:#FFFFFF;--shiki-dark:#FFFFFF;"> chỉnh</span><span style="color:#FFFFFF;--shiki-dark:#FFFFFF;"> của</span><span style="color:#FFFFFF;--shiki-dark:#FFFFFF;"> aggregation</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> 2</span><span style="color:#FFFFFF;--shiki-dark:#FFFFFF;"> --&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">}</span></span></code></pre></div><ul><li><strong>Ở cấp độ cao nhất có một khóa aggregations, có thể viết tắt là aggs</strong>.</li><li>Ở cấp độ tiếp theo, bạn cần chỉ định tên cho aggregation. Bạn sẽ thấy tên này trong kết quả trả về của yêu cầu. Điều này rất hữu ích khi sử dụng nhiều aggregation trong cùng một yêu cầu, nó giúp bạn dễ dàng hiểu ý nghĩa của mỗi nhóm kết quả.</li><li>Cuối cùng, bạn phải chỉ định loại aggregation.</li></ul><blockquote><p>Giá trị phân tích tổng hợp có thể <strong>lấy từ giá trị của trường</strong> hoặc là <strong>kết quả của script</strong>.</p><p>Tuy nhiên, khi sử dụng kết quả của script, bạn cần chú ý đến hiệu suất và an toàn của script; mặc dù hầu hết các loại aggregation đều cho phép sử dụng script, nhưng script làm chậm aggregation vì script phải chạy trên mỗi tài liệu. Để tránh chạy script, bạn có thể tính toán trong giai đoạn lập chỉ mục.</p><p>Ngoài ra, script cũng có thể bị sử dụng để tấn công mã độc, hãy cố gắng sử dụng ngôn ngữ script trong sandbox.</p></blockquote><p>Ví dụ: Truy vấn tuổi trung bình của tất cả các cầu thủ là bao nhiêu, và cộng 188 vào mức lương trung bình của cầu thủ (cũng có thể hiểu là mức lương trung bình sau khi cộng thêm 188 cho mỗi cầu thủ).</p><div class="language-bash line-numbers-mode" data-ext="bash" data-title="bash"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">POST</span><span style="color:#98C379;--shiki-dark:#98C379;"> /player/_search?size=</span><span style="color:#D19A66;--shiki-dark:#D19A66;">0</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">{</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">  &quot;aggs&quot;</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">:</span><span style="color:#98C379;--shiki-dark:#98C379;"> {</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">    &quot;avg_age&quot;</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">:</span><span style="color:#98C379;--shiki-dark:#98C379;"> {</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">      &quot;avg&quot;</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">:</span><span style="color:#98C379;--shiki-dark:#98C379;"> {</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">        &quot;field&quot;</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">:</span><span style="color:#98C379;--shiki-dark:#98C379;"> &quot;age&quot;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">      }</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    },</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">    &quot;avg_salary_188&quot;</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">:</span><span style="color:#98C379;--shiki-dark:#98C379;"> {</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">      &quot;avg&quot;</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">:</span><span style="color:#98C379;--shiki-dark:#98C379;"> {</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">        &quot;script&quot;</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">:</span><span style="color:#98C379;--shiki-dark:#98C379;"> {</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">          &quot;source&quot;</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">:</span><span style="color:#98C379;--shiki-dark:#98C379;"> &quot;doc.salary.value + 188&quot;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">        }</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">      }</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    }</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">  }</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="aggregations-chi-so" tabindex="-1"><a class="header-anchor" href="#aggregations-chi-so"><span>Aggregations chỉ số</span></a></h2><p>Aggregations chỉ số (còn được gọi là aggregations đo lường) chủ yếu rút ra dữ liệu thống kê từ các nhóm tài liệu khác nhau, hoặc từ các thùng tài liệu từ các aggregations khác.</p><p>Những dữ liệu thống kê này thường đến từ các trường số, như giá trị nhỏ nhất hoặc trung bình. Người dùng có thể lấy từng dữ liệu thống kê riêng lẻ, hoặc cũng có thể sử dụng aggregations stats để lấy chúng cùng một lúc. Dữ liệu thống kê nâng cao hơn, như tổng bình phương hoặc độ lệch chuẩn, có thể được lấy thông qua aggregations extended stats.</p><h3 id="max-aggregation" tabindex="-1"><a class="header-anchor" href="#max-aggregation"><span>Max Aggregation</span></a></h3><p>Max Aggregation được sử dụng để thống kê giá trị lớn nhất. Ví dụ, để thống kê cuốn sách có giá cao nhất trong chỉ mục sales, và tính giá trị gấp đôi của giá đó, câu truy vấn như sau:</p><div class="language- line-numbers-mode" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>GET /sales/_search?size=0</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>  &quot;aggs&quot; : {</span></span>
<span class="line"><span>    &quot;max_price&quot; : {</span></span>
<span class="line"><span>      &quot;max&quot; : {</span></span>
<span class="line"><span>        &quot;field&quot; : &quot;price&quot;</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    &quot;max_price_2&quot; : {</span></span>
<span class="line"><span>      &quot;max&quot; : {</span></span>
<span class="line"><span>        &quot;field&quot; : &quot;price&quot;,</span></span>
<span class="line"><span>        &quot;script&quot;: {</span></span>
<span class="line"><span>          &quot;source&quot;: &quot;_value * 2.0&quot;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Trường được chỉ định, trong script có thể lấy giá trị của trường bằng _value</strong>.</p><p>Kết quả aggregation như sau:</p><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>{</span></span>
<span class="line"><span>  ...</span></span>
<span class="line"><span>  &quot;aggregations&quot;: {</span></span>
<span class="line"><span>    &quot;max_price&quot;: {</span></span>
<span class="line"><span>      &quot;value&quot;: 188.0</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    &quot;max_price_2&quot;: {</span></span>
<span class="line"><span>      &quot;value&quot;: 376.0</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre></div><h3 id="min-aggregation" tabindex="-1"><a class="header-anchor" href="#min-aggregation"><span>Min Aggregation</span></a></h3><p>Min Aggregation được sử dụng để thống kê giá trị nhỏ nhất. Ví dụ, để thống kê cuốn sách có giá thấp nhất trong chỉ mục sales, câu truy vấn như sau:</p><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>GET /sales/_search?size=0</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>  &quot;aggs&quot; : {</span></span>
<span class="line"><span>    &quot;min_price&quot; : {</span></span>
<span class="line"><span>      &quot;min&quot; : {</span></span>
<span class="line"><span>        &quot;field&quot; : &quot;price&quot;</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>Kết quả aggregation như sau:</p><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>{</span></span>
<span class="line"><span>  ...</span></span>
<span class="line"><span>  &quot;aggregations&quot;: {</span></span>
<span class="line"><span>    &quot;min_price&quot;: {</span></span>
<span class="line"><span>      &quot;value&quot;: 18.0</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre></div><h3 id="avg-aggregation" tabindex="-1"><a class="header-anchor" href="#avg-aggregation"><span>Avg Aggregation</span></a></h3><p>Avg Aggregation được sử dụng để tính giá trị trung bình. Ví dụ, để thống kê điểm trung bình của kỳ thi trong chỉ mục exams, nếu không có điểm số, mặc định là 60 điểm, câu truy vấn như sau:</p><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>GET /exams/_search?size=0</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>  &quot;aggs&quot; : {</span></span>
<span class="line"><span>    &quot;avg_grade&quot; : {</span></span>
<span class="line"><span>      &quot;avg&quot; : {</span></span>
<span class="line"><span>        &quot;field&quot; : &quot;grade&quot;,</span></span>
<span class="line"><span>        &quot;missing&quot;: 60</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p><strong>Nếu trường chỉ định không có giá trị, bạn có thể chỉ định giá trị mặc định bằng missing; nếu không chỉ định giá trị mặc định, tài liệu thiếu giá trị trường này sẽ bị bỏ qua (tính toán)</strong>.</p><p>Kết quả aggregation như sau:</p><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>{</span></span>
<span class="line"><span>  ...</span></span>
<span class="line"><span>  &quot;aggregations&quot;: {</span></span>
<span class="line"><span>    &quot;avg_grade&quot;: {</span></span>
<span class="line"><span>      &quot;value&quot;: 78.0</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>Ngoài tính toán aggregation trung bình thông thường, elasticsearch cũng cung cấp tính toán aggregation trung bình có trọng số, chi tiết xem tại <a href="https://www.knowledgedict.com/tutorial/elasticsearch-aggregations-metrics-weighted-avg-aggregation.html" target="_blank" rel="noopener noreferrer">Elasticsearch Aggregations chỉ số - Weighted Avg Aggregation</a>.</p><h3 id="sum-aggregation" tabindex="-1"><a class="header-anchor" href="#sum-aggregation"><span>Sum Aggregation</span></a></h3><p>Sum Aggregation được sử dụng để tính tổng. Ví dụ, để thống kê tổng giá của các mặt hàng có loại là &quot;hat&quot; trong chỉ mục sales, câu truy vấn như sau:</p><div class="language- line-numbers-mode" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>GET /sales/_search?size=0</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>  &quot;query&quot; : {</span></span>
<span class="line"><span>    &quot;constant_score&quot; : {</span></span>
<span class="line"><span>      &quot;filter&quot; : {</span></span>
<span class="line"><span>        &quot;match&quot; : { &quot;type&quot; : &quot;hat&quot; }</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  &quot;aggs&quot; : {</span></span>
<span class="line"><span>    &quot;hat_prices&quot; : {</span></span>
<span class="line"><span>      &quot;sum&quot; : { &quot;field&quot; : &quot;price&quot; }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Kết quả aggregation như sau:</p><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>{</span></span>
<span class="line"><span>  ...</span></span>
<span class="line"><span>  &quot;aggregations&quot;: {</span></span>
<span class="line"><span>    &quot;hat_prices&quot;: {</span></span>
<span class="line"><span>      &quot;value&quot;: 567.0</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre></div><h3 id="value-count-aggregation" tabindex="-1"><a class="header-anchor" href="#value-count-aggregation"><span>Value Count Aggregation</span></a></h3><p>Value Count Aggregation có thể được sử dụng để đếm số lượng tài liệu theo trường. Ví dụ, để đếm số lượng tài liệu có trường author trong chỉ mục books, câu truy vấn như sau:</p><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>GET /books/_search?size=0</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>  &quot;aggs&quot; : {</span></span>
<span class="line"><span>    &quot;doc_count&quot; : {</span></span>
<span class="line"><span>      &quot;value_count&quot; : { &quot;field&quot; : &quot;author&quot; }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>Kết quả aggregation như sau:</p><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>{</span></span>
<span class="line"><span>  ...</span></span>
<span class="line"><span>  &quot;aggregations&quot;: {</span></span>
<span class="line"><span>    &quot;doc_count&quot;: {</span></span>
<span class="line"><span>      &quot;value&quot;: 5</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre></div><h3 id="cardinality-aggregation" tabindex="-1"><a class="header-anchor" href="#cardinality-aggregation"><span>Cardinality Aggregation</span></a></h3><p>Cardinality Aggregation được sử dụng cho thống kê cơ sở, nhiệm vụ của nó là thực hiện các hoạt động tương tự như distinct trong SQL, loại bỏ các mục trùng lặp trong tập hợp, sau đó đếm độ dài của tập hợp sau khi loại bỏ trùng lặp. Ví dụ, thực hiện hoạt động cardinality trên trường language trong chỉ mục books có thể đếm số lượng ngôn ngữ lập trình, câu truy vấn như sau:</p><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>GET /books/_search?size=0</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>  &quot;aggs&quot; : {</span></span>
<span class="line"><span>    &quot;all_lan&quot; : {</span></span>
<span class="line"><span>      &quot;cardinality&quot; : { &quot;field&quot; : &quot;language&quot; }</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    &quot;title_cnt&quot; : {</span></span>
<span class="line"><span>      &quot;cardinality&quot; : { &quot;field&quot; : &quot;title.keyword&quot; }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p><strong>Giả sử trường title là kiểu văn bản (text), khi loại bỏ trùng lặp, bạn cần chỉ định keyword, có nghĩa là xem title như một thể thống nhất, tức là không phân tách từ để đếm</strong>.</p><p>Kết quả aggregation như sau:</p><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>{</span></span>
<span class="line"><span>  ...</span></span>
<span class="line"><span>  &quot;aggregations&quot;: {</span></span>
<span class="line"><span>    &quot;all_lan&quot;: {</span></span>
<span class="line"><span>      &quot;value&quot;: 8</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    &quot;title_cnt&quot;: {</span></span>
<span class="line"><span>      &quot;value&quot;: 18</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre></div><h3 id="stats-aggregation" tabindex="-1"><a class="header-anchor" href="#stats-aggregation"><span>Stats Aggregation</span></a></h3><p>Stats Aggregation được sử dụng để thống kê cơ bản, sẽ trả về 5 chỉ số count, max, min, avg và sum cùng một lúc. Ví dụ, để thống kê cơ bản liên quan đến điểm số trên trường grade trong chỉ mục exams, câu truy vấn như sau:</p><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>GET /exams/_search?size=0</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>  &quot;aggs&quot; : {</span></span>
<span class="line"><span>    &quot;grades_stats&quot; : {</span></span>
<span class="line"><span>      &quot;stats&quot; : { &quot;field&quot; : &quot;grade&quot; }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>Kết quả aggregation như sau:</p><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>{</span></span>
<span class="line"><span>  ...</span></span>
<span class="line"><span>  &quot;aggregations&quot;: {</span></span>
<span class="line"><span>    &quot;grades_stats&quot;: {</span></span>
<span class="line"><span>      &quot;count&quot;: 2,</span></span>
<span class="line"><span>      &quot;min&quot;: 50.0,</span></span>
<span class="line"><span>      &quot;max&quot;: 100.0,</span></span>
<span class="line"><span>      &quot;avg&quot;: 75.0,</span></span>
<span class="line"><span>      &quot;sum&quot;: 150.0</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre></div><h3 id="extended-stats-aggregation" tabindex="-1"><a class="header-anchor" href="#extended-stats-aggregation"><span>Extended Stats Aggregation</span></a></h3><p>Extended Stats Aggregation được sử dụng cho thống kê nâng cao, tương tự như thống kê cơ bản, nhưng sẽ có thêm một số kết quả thống kê sau, sum_of_squares (tổng bình phương), variance (phương sai), std_deviation (độ lệch chuẩn), std_deviation_bounds (khoảng giữa giá trị trung bình cộng/trừ hai độ lệch chuẩn). Để thống kê nâng cao liên quan đến điểm số trên trường grade trong chỉ mục exams, câu truy vấn như sau:</p><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>GET /exams/_search?size=0</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>  &quot;aggs&quot; : {</span></span>
<span class="line"><span>    &quot;grades_stats&quot; : {</span></span>
<span class="line"><span>      &quot;extended_stats&quot; : { &quot;field&quot; : &quot;grade&quot; }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>Kết quả aggregation như sau:</p><div class="language- line-numbers-mode" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>{</span></span>
<span class="line"><span>  ...</span></span>
<span class="line"><span>  &quot;aggregations&quot;: {</span></span>
<span class="line"><span>    &quot;grades_stats&quot;: {</span></span>
<span class="line"><span>      &quot;count&quot;: 2,</span></span>
<span class="line"><span>      &quot;min&quot;: 50.0,</span></span>
<span class="line"><span>      &quot;max&quot;: 100.0,</span></span>
<span class="line"><span>      &quot;avg&quot;: 75.0,</span></span>
<span class="line"><span>      &quot;sum&quot;: 150.0,</span></span>
<span class="line"><span>      &quot;sum_of_squares&quot;: 12500.0,</span></span>
<span class="line"><span>      &quot;variance&quot;: 625.0,</span></span>
<span class="line"><span>      &quot;std_deviation&quot;: 25.0,</span></span>
<span class="line"><span>      &quot;std_deviation_bounds&quot;: {</span></span>
<span class="line"><span>        &quot;upper&quot;: 125.0,</span></span>
<span class="line"><span>        &quot;lower&quot;: 25.0</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="percentiles-aggregation" tabindex="-1"><a class="header-anchor" href="#percentiles-aggregation"><span>Percentiles Aggregation</span></a></h3><p>Percentiles Aggregation được sử dụng cho thống kê phân vị. Phân vị là một thuật ngữ thống kê, nếu ta sắp xếp một tập dữ liệu từ lớn đến nhỏ và tính toán phần trăm lũy kế tương ứng, giá trị của dữ liệu tương ứng với phân vị đó được gọi là phân vị của phân vị đó. Theo mặc định, các phân vị lũy kế là [ 1, 5, 25, 50, 75, 95, 99 ]. Ví dụ sau đây cho thấy cách thống kê phân vị thời gian tải trên trường load_time trong chỉ mục latency, câu truy vấn như sau:</p><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>GET latency/_search</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>  &quot;size&quot;: 0,</span></span>
<span class="line"><span>  &quot;aggs&quot; : {</span></span>
<span class="line"><span>    &quot;load_time_outlier&quot; : {</span></span>
<span class="line"><span>      &quot;percentiles&quot; : {</span></span>
<span class="line"><span>        &quot;field&quot; : &quot;load_time&quot;</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p><strong>Cần lưu ý rằng, trường <code>load_time</code> như trên phải là loại số</strong>.</p><p>Kết quả tổng hợp như sau:</p><div class="language- line-numbers-mode" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>{</span></span>
<span class="line"><span>  ...</span></span>
<span class="line"><span>  &quot;aggregations&quot;: {</span></span>
<span class="line"><span>    &quot;load_time_outlier&quot;: {</span></span>
<span class="line"><span>      &quot;values&quot; : {</span></span>
<span class="line"><span>        &quot;1.0&quot;: 5.0,</span></span>
<span class="line"><span>        &quot;5.0&quot;: 25.0,</span></span>
<span class="line"><span>        &quot;25.0&quot;: 165.0,</span></span>
<span class="line"><span>        &quot;50.0&quot;: 445.0,</span></span>
<span class="line"><span>        &quot;75.0&quot;: 725.0,</span></span>
<span class="line"><span>        &quot;95.0&quot;: 945.0,</span></span>
<span class="line"><span>        &quot;99.0&quot;: 985.0</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Thống kê phân vị cũng có thể chỉ định tham số percents để chỉ định phân vị, như sau:</p><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>GET latency/_search</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>  &quot;size&quot;: 0,</span></span>
<span class="line"><span>  &quot;aggs&quot; : {</span></span>
<span class="line"><span>    &quot;load_time_outlier&quot; : {</span></span>
<span class="line"><span>      &quot;percentiles&quot; : {</span></span>
<span class="line"><span>        &quot;field&quot; : &quot;load_time&quot;,</span></span>
<span class="line"><span>        &quot;percents&quot;: [60, 80, 95]</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre></div><h3 id="percentiles-ranks-aggregation" tabindex="-1"><a class="header-anchor" href="#percentiles-ranks-aggregation"><span>Percentiles Ranks Aggregation</span></a></h3><p>Percentiles Ranks Aggregation có ý nghĩa ngược lại với Percentiles Aggregation, đó là muốn xem giá trị hiện tại nằm trong phạm vi nào (phân vị). Giả sử bạn kiểm tra xem giá trị hiện tại 500 và 600 nằm ở phân vị nào, phát hiện ra là 90.01 và 100, điều đó có nghĩa là 90.01% của các giá trị đều nằm trong phạm vi 500, và 100% của các giá trị nằm trong phạm vi 600.</p><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>GET latency/_search</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>  &quot;size&quot;: 0,</span></span>
<span class="line"><span>    &quot;aggs&quot; : {</span></span>
<span class="line"><span>      &quot;load_time_ranks&quot; : {</span></span>
<span class="line"><span>        &quot;percentile_ranks&quot; : {</span></span>
<span class="line"><span>          &quot;field&quot; : &quot;load_time&quot;,</span></span>
<span class="line"><span>          &quot;values&quot; : [500, 600]</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p><strong>Trường <code>load_time</code> cũng phải là loại số</strong>.</p><p>Kết quả trả về sẽ tương tự như sau:</p><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>{</span></span>
<span class="line"><span>  ...</span></span>
<span class="line"><span>  &quot;aggregations&quot;: {</span></span>
<span class="line"><span>    &quot;load_time_ranks&quot;: {</span></span>
<span class="line"><span>      &quot;values&quot; : {</span></span>
<span class="line"><span>        &quot;500.0&quot;: 90.01,</span></span>
<span class="line"><span>        &quot;600.0&quot;: 100.0</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>Bạn có thể đặt tham số <code>keyed</code> là <code>true</code> để trả về các giá trị tương ứng như là key của các bucket, mặc định là <code>false</code>.</p><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>GET latency/_search</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>  &quot;size&quot;: 0,</span></span>
<span class="line"><span>  &quot;aggs&quot;: {</span></span>
<span class="line"><span>    &quot;load_time_ranks&quot;: {</span></span>
<span class="line"><span>      &quot;percentile_ranks&quot;: {</span></span>
<span class="line"><span>        &quot;field&quot;: &quot;load_time&quot;,</span></span>
<span class="line"><span>        &quot;values&quot;: [500, 600],</span></span>
<span class="line"><span>        &quot;keyed&quot;: true</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>Kết quả trả về như sau:</p><div class="language- line-numbers-mode" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>{</span></span>
<span class="line"><span>  ...</span></span>
<span class="line"><span>  &quot;aggregations&quot;: {</span></span>
<span class="line"><span>    &quot;load_time_ranks&quot;: {</span></span>
<span class="line"><span>      &quot;values&quot;: [</span></span>
<span class="line"><span>        {</span></span>
<span class="line"><span>          &quot;key&quot;: 500.0,</span></span>
<span class="line"><span>          &quot;value&quot;: 90.01</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span>        {</span></span>
<span class="line"><span>          &quot;key&quot;: 600.0,</span></span>
<span class="line"><span>          &quot;value&quot;: 100.0</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>      ]</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="bucket-aggregation" tabindex="-1"><a class="header-anchor" href="#bucket-aggregation"><span>Bucket Aggregation</span></a></h2><p>Bucket có thể được hiểu như một cái thùng, nó sẽ duyệt qua nội dung của tài liệu, những gì phù hợp với một yêu cầu nhất định sẽ được đặt vào một thùng, phân thùng tương đương với group by trong SQL. Từ một góc độ khác, bạn có thể xem metric aggregation như là bucket aggregation đơn, tức là đặt tất cả tài liệu vào một thùng, trong khi bucket aggregation là multi-bucket aggregation, nó phân nhóm theo các điều kiện tương ứng.</p><table><thead><tr><th style="text-align:left;">Loại</th><th style="text-align:left;">Mô tả/Trường hợp sử dụng</th></tr></thead><tbody><tr><td style="text-align:left;">Terms Aggregation</td><td style="text-align:left;">Được sử dụng cho aggregation nhóm, cho phép người dùng biết tần số của mỗi term trong tài liệu, nó trả về số lần xuất hiện của mỗi term.</td></tr><tr><td style="text-align:left;">Significant Terms Aggregation</td><td style="text-align:left;">Nó sẽ trả về sự khác biệt về tần số term trong toàn bộ chỉ mục và trong kết quả truy vấn, điều này giúp chúng ta tìm ra những từ có ý nghĩa trong cảnh quan tìm kiếm.</td></tr><tr><td style="text-align:left;">Filter Aggregation</td><td style="text-align:left;">Chuyển tất cả các tài liệu khớp với bộ lọc đã chỉ định vào một bucket duy nhất, thường thì điều này sẽ được sử dụng để thu hẹp ngữ cảnh aggregation hiện tại xuống một tập hợp cụ thể của các tài liệu.</td></tr><tr><td style="text-align:left;">Filters Aggregation</td><td style="text-align:left;">Chuyển tất cả các tài liệu khớp với nhiều bộ lọc đã chỉ định vào nhiều bucket.</td></tr><tr><td style="text-align:left;">Range Aggregation</td><td style="text-align:left;">Range aggregation, được sử dụng để phản ánh tình hình phân phối dữ liệu.</td></tr><tr><td style="text-align:left;">Date Range Aggregation</td><td style="text-align:left;">Được sử dụng đặc biệt cho aggregation phạm vi ngày.</td></tr><tr><td style="text-align:left;">IP Range Aggregation</td><td style="text-align:left;">Được sử dụng để aggregate phạm vi dữ liệu loại IP.</td></tr><tr><td style="text-align:left;">Histogram Aggregation</td><td style="text-align:left;">Có thể là số hoặc loại ngày, tương tự như range aggregation.</td></tr><tr><td style="text-align:left;">Date Histogram Aggregation</td><td style="text-align:left;">Date histogram aggregation, thường được sử dụng để thống kê tài liệu theo ngày và vẽ biểu đồ cột.</td></tr><tr><td style="text-align:left;">Missing Aggregation</td><td style="text-align:left;">Missing aggregation, có thể chia tất cả các tài liệu thiếu trường trong tập hợp tài liệu vào một bucket.</td></tr><tr><td style="text-align:left;">Geo Distance Aggregation</td><td style="text-align:left;">Được sử dụng để thống kê phạm vi cho các điểm địa lý (geo point).</td></tr></tbody></table><h3 id="terms-aggregation" tabindex="-1"><a class="header-anchor" href="#terms-aggregation"><span>Terms Aggregation</span></a></h3><p>Terms Aggregation được sử dụng để tổng hợp nhóm từ khóa. Ví dụ điển hình nhất là lấy các mục phổ biến nhất (top frequent) trong X, trong đó X là một trường nào đó trong tài liệu, chẳng hạn như tên người dùng, nhãn hoặc phân loại. Vì terms aggregation thống kê mỗi term, không phải toàn bộ giá trị trường, nên thường cần chạy loại tổng hợp này trên một trường không phân tích. Lý do là bạn mong đợi &quot;big data&quot; được thống kê như một cụm từ, chứ không phải &quot;big&quot; được thống kê riêng lẻ một lần, &quot;data&quot; lại được thống kê riêng lẻ một lần nữa.</p><p>Người dùng có thể sử dụng terms aggregation để trích xuất các term phổ biến nhất từ các trường phân tích (như nội dung). Thông tin này cũng có thể được sử dụng để tạo một word cloud.</p><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>{</span></span>
<span class="line"><span>  &quot;aggs&quot;: {</span></span>
<span class="line"><span>    &quot;profit_terms&quot;: {</span></span>
<span class="line"><span>      &quot;terms&quot;: { // từ khóa terms aggregation</span></span>
<span class="line"><span>        &quot;field&quot;: &quot;profit&quot;,</span></span>
<span class="line"><span>        ......</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>Dựa trên terms bucket, bạn cũng có thể thống kê các chỉ số cho mỗi bucket, hoặc sắp xếp dựa trên một số chỉ số hoặc giá trị trường. Ví dụ như sau:</p><div class="language- line-numbers-mode" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>{</span></span>
<span class="line"><span>  &quot;aggs&quot;: {</span></span>
<span class="line"><span>    &quot;item_terms&quot;: {</span></span>
<span class="line"><span>      &quot;terms&quot;: {</span></span>
<span class="line"><span>        &quot;field&quot;: &quot;item_id&quot;,</span></span>
<span class="line"><span>        &quot;size&quot;: 1000,</span></span>
<span class="line"><span>        &quot;order&quot;:[{</span></span>
<span class="line"><span>          &quot;gmv_stat&quot;: &quot;desc&quot;</span></span>
<span class="line"><span>        },{</span></span>
<span class="line"><span>          &quot;gmv_180d&quot;: &quot;desc&quot;</span></span>
<span class="line"><span>        }]</span></span>
<span class="line"><span>      },</span></span>
<span class="line"><span>      &quot;aggs&quot;: {</span></span>
<span class="line"><span>        &quot;gmv_stat&quot;: {</span></span>
<span class="line"><span>          &quot;sum&quot;: {</span></span>
<span class="line"><span>            &quot;field&quot;: &quot;gmv&quot;</span></span>
<span class="line"><span>          }</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span>        &quot;gmv_180d&quot;: {</span></span>
<span class="line"><span>          &quot;sum&quot;: {</span></span>
<span class="line"><span>            &quot;script&quot;: &quot;doc[&#39;gmv_90d&#39;].value*2&quot;</span></span>
<span class="line"><span>          }</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Kết quả trả về như sau:</p><div class="language- line-numbers-mode" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>{</span></span>
<span class="line"><span>  ...</span></span>
<span class="line"><span>  &quot;aggregations&quot;: {</span></span>
<span class="line"><span>    &quot;hospital_id_agg&quot;: {</span></span>
<span class="line"><span>      &quot;doc_count_error_upper_bound&quot;: 0,</span></span>
<span class="line"><span>      &quot;sum_other_doc_count&quot;: 260,</span></span>
<span class="line"><span>      &quot;buckets&quot;: [</span></span>
<span class="line"><span>        {</span></span>
<span class="line"><span>          &quot;key&quot;: 23388,</span></span>
<span class="line"><span>          &quot;doc_count&quot;: 18,</span></span>
<span class="line"><span>          &quot;gmv_stat&quot;: {</span></span>
<span class="line"><span>            &quot;value&quot;: 176220</span></span>
<span class="line"><span>          },</span></span>
<span class="line"><span>          &quot;gmv_180d&quot;: {</span></span>
<span class="line"><span>            &quot;value&quot;: 89732</span></span>
<span class="line"><span>          }</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span>        {</span></span>
<span class="line"><span>          &quot;key&quot;: 96117,</span></span>
<span class="line"><span>          &quot;doc_count&quot;: 16,</span></span>
<span class="line"><span>          &quot;gmv_stat&quot;: {</span></span>
<span class="line"><span>            &quot;value&quot;: 129306</span></span>
<span class="line"><span>          },</span></span>
<span class="line"><span>          &quot;gmv_180d&quot;: {</span></span>
<span class="line"><span>            &quot;value&quot;: 56988</span></span>
<span class="line"><span>          }</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span>        ...</span></span>
<span class="line"><span>      ]</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Mặc định, nó trả về 10 nhóm đầu tiên theo số lượng tài liệu từ cao đến thấp, bạn có thể chỉ định số lượng nhóm trả về thông qua tham số size.</p><h3 id="filter-aggregation" tabindex="-1"><a class="header-anchor" href="#filter-aggregation"><span>Filter Aggregation</span></a></h3><p>Filter Aggregation là loại tổng hợp bộ lọc, có thể chia tất cả các tài liệu phù hợp với điều kiện trong bộ lọc vào một bucket, tức là tổng hợp nhóm đơn.</p><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>{</span></span>
<span class="line"><span>  &quot;aggs&quot;: {</span></span>
<span class="line"><span>    &quot;age_terms&quot;: {</span></span>
<span class="line"><span>      &quot;filter&quot;: {&quot;match&quot;:{&quot;gender&quot;:&quot;F&quot;}},</span></span>
<span class="line"><span>      &quot;aggs&quot;: {</span></span>
<span class="line"><span>        &quot;avg_age&quot;: {</span></span>
<span class="line"><span>          &quot;avg&quot;: {</span></span>
<span class="line"><span>            &quot;field&quot;: &quot;age&quot;</span></span>
<span class="line"><span>          }</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>Trong ví dụ trên, chúng tôi tạo ra một bucket chứa tất cả các tài liệu mà trường &quot;gender&quot; khớp với giá trị &quot;F&quot;. Sau đó, chúng tôi tính toán giá trị trung bình của trường &quot;age&quot; cho tất cả các tài liệu trong bucket này.</p><h3 id="filters-aggregation" tabindex="-1"><a class="header-anchor" href="#filters-aggregation"><span>Filters Aggregation</span></a></h3><p>Filters Aggregation là tổng hợp nhiều bộ lọc, có thể chia các tài liệu phù hợp với nhiều điều kiện bộ lọc khác nhau vào các bucket khác nhau, tức là mỗi nhóm liên kết với một điều kiện bộ lọc và thu thập tất cả các tài liệu phù hợp với điều kiện bộ lọc của chính nó.</p><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>{</span></span>
<span class="line"><span>  &quot;size&quot;: 0,</span></span>
<span class="line"><span>  &quot;aggs&quot;: {</span></span>
<span class="line"><span>    &quot;messages&quot;: {</span></span>
<span class="line"><span>      &quot;filters&quot;: {</span></span>
<span class="line"><span>        &quot;filters&quot;: {</span></span>
<span class="line"><span>          &quot;errors&quot;: { &quot;match&quot;: { &quot;body&quot;: &quot;error&quot; } },</span></span>
<span class="line"><span>          &quot;warnings&quot;: { &quot;match&quot;: { &quot;body&quot;: &quot;warning&quot; } }</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>Trong ví dụ này, chúng tôi phân tích thông tin nhật ký. Tổng hợp sẽ tạo ra hai nhóm về dữ liệu nhật ký, một nhóm thu thập các tài liệu chứa thông tin lỗi, nhóm khác thu thập các tài liệu chứa thông tin cảnh báo. Và mỗi nhóm sẽ được chia theo tháng.</p><div class="language- line-numbers-mode" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>{</span></span>
<span class="line"><span>  ...</span></span>
<span class="line"><span>  &quot;aggregations&quot;: {</span></span>
<span class="line"><span>    &quot;messages&quot;: {</span></span>
<span class="line"><span>      &quot;buckets&quot;: {</span></span>
<span class="line"><span>        &quot;errors&quot;: {</span></span>
<span class="line"><span>          &quot;doc_count&quot;: 1</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span>        &quot;warnings&quot;: {</span></span>
<span class="line"><span>          &quot;doc_count&quot;: 2</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Trong kết quả trả về, bạn có thể thấy số lượng tài liệu trong mỗi nhóm: có 1 tài liệu chứa thông tin lỗi và 2 tài liệu chứa thông tin cảnh báo.</p><h3 id="range-aggregation" tabindex="-1"><a class="header-anchor" href="#range-aggregation"><span>Range Aggregation</span></a></h3><p>Range Aggregation, hay tổng hợp phạm vi, là một tổng hợp dựa trên nhiều nguồn giá trị, cho phép người dùng định rõ một loạt các phạm vi, mỗi phạm vi đại diện cho một nhóm. Trong quá trình thực hiện tổng hợp, giá trị được rút ra từ mỗi tài liệu sẽ được kiểm tra phạm vi của mỗi nhóm, và tài liệu liên quan sẽ rơi vào nhóm tương ứng. Lưu ý, mỗi phạm vi của tổng hợp phạm vi bao gồm giá trị từ nhưng loại trừ giá trị đến.</p><div class="language- line-numbers-mode" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>{</span></span>
<span class="line"><span>  &quot;aggs&quot;: {</span></span>
<span class="line"><span>    &quot;age_range&quot;: {</span></span>
<span class="line"><span>      &quot;range&quot;: {</span></span>
<span class="line"><span>        &quot;field&quot;: &quot;age&quot;,</span></span>
<span class="line"><span>          &quot;ranges&quot;: [{</span></span>
<span class="line"><span>            &quot;to&quot;: 25</span></span>
<span class="line"><span>          },</span></span>
<span class="line"><span>          {</span></span>
<span class="line"><span>            &quot;from&quot;: 25,</span></span>
<span class="line"><span>            &quot;to&quot;: 35</span></span>
<span class="line"><span>          },</span></span>
<span class="line"><span>          {</span></span>
<span class="line"><span>            &quot;from&quot;: 35</span></span>
<span class="line"><span>          }]</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span>        &quot;aggs&quot;: {</span></span>
<span class="line"><span>          &quot;bmax&quot;: {</span></span>
<span class="line"><span>            &quot;max&quot;: {</span></span>
<span class="line"><span>              &quot;field&quot;: &quot;balance&quot;</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>          }</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Kết quả trả về như sau:</p><div class="language- line-numbers-mode" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>{</span></span>
<span class="line"><span>  ...</span></span>
<span class="line"><span>  &quot;aggregations&quot;: {</span></span>
<span class="line"><span>    &quot;age_range&quot;: {</span></span>
<span class="line"><span>      &quot;buckets&quot;: [{</span></span>
<span class="line"><span>        &quot;key&quot;: &quot;*-25.0&quot;,</span></span>
<span class="line"><span>        &quot;to&quot;: 25,</span></span>
<span class="line"><span>        &quot;doc_count&quot;: 225,</span></span>
<span class="line"><span>        &quot;bmax&quot;: {</span></span>
<span class="line"><span>          &quot;value&quot;: 49587</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>      },</span></span>
<span class="line"><span>      {</span></span>
<span class="line"><span>        &quot;key&quot;: &quot;25.0-35.0&quot;,</span></span>
<span class="line"><span>        &quot;from&quot;: 25,</span></span>
<span class="line"><span>        &quot;to&quot;: 35,</span></span>
<span class="line"><span>        &quot;doc_count&quot;: 485,</span></span>
<span class="line"><span>        &quot;bmax&quot;: {</span></span>
<span class="line"><span>          &quot;value&quot;: 49795</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>      },</span></span>
<span class="line"><span>      {</span></span>
<span class="line"><span>        &quot;key&quot;: &quot;35.0-*&quot;,</span></span>
<span class="line"><span>        &quot;from&quot;: 35,</span></span>
<span class="line"><span>        &quot;doc_count&quot;: 290,</span></span>
<span class="line"><span>        &quot;bmax&quot;: {</span></span>
<span class="line"><span>          &quot;value&quot;: 49989</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>      }]</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="tai-lieu-tham-khao" tabindex="-1"><a class="header-anchor" href="#tai-lieu-tham-khao"><span>Tài liệu tham khảo</span></a></h2><ul><li><a href="https://www.knowledgedict.com/tutorial/elasticsearch-intro.html" target="_blank" rel="noopener noreferrer">Elasticsearch Hướng dẫn</a></li></ul>`,105),l=[p];function t(c,o){return s(),a("div",null,l)}const g=n(e,[["render",t],["__file","aggregation.html.vue"]]),d=JSON.parse('{"path":"/database/elasticsearch/aggregation.html","title":"Elasticsearch Aggregation","lang":"en-US","frontmatter":{"title":"Elasticsearch Aggregation","tags":["elasticssearch"],"categories":["elasticssearch"],"icon":"devicon:elasticsearch","order":8,"description":"Elasticsearch Aggregations Elasticsearch là một công cụ tìm kiếm toàn văn bản phân tán, lập chỉ mục và tìm kiếm là các chức năng cơ bản của Elasticsearch. Thực tế, chức năng Agg...","head":[["meta",{"property":"og:url","content":"https://vanhung4499.github.io/database/elasticsearch/aggregation.html"}],["meta",{"property":"og:site_name","content":"VanHung4499"}],["meta",{"property":"og:title","content":"Elasticsearch Aggregation"}],["meta",{"property":"og:description","content":"Elasticsearch Aggregations Elasticsearch là một công cụ tìm kiếm toàn văn bản phân tán, lập chỉ mục và tìm kiếm là các chức năng cơ bản của Elasticsearch. Thực tế, chức năng Agg..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-06-28T15:54:38.000Z"}],["meta",{"property":"article:author","content":"Hung Nguyen"}],["meta",{"property":"article:tag","content":"elasticssearch"}],["meta",{"property":"article:modified_time","content":"2024-06-28T15:54:38.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Elasticsearch Aggregation\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-06-28T15:54:38.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Hung Nguyen\\",\\"url\\":\\"https://vanhung4499.github.io\\"}]}"]]},"headers":[{"level":2,"title":"Cấu trúc cụ thể của Aggregations","slug":"cau-truc-cu-the-cua-aggregations","link":"#cau-truc-cu-the-cua-aggregations","children":[]},{"level":2,"title":"Aggregations chỉ số","slug":"aggregations-chi-so","link":"#aggregations-chi-so","children":[{"level":3,"title":"Max Aggregation","slug":"max-aggregation","link":"#max-aggregation","children":[]},{"level":3,"title":"Min Aggregation","slug":"min-aggregation","link":"#min-aggregation","children":[]},{"level":3,"title":"Avg Aggregation","slug":"avg-aggregation","link":"#avg-aggregation","children":[]},{"level":3,"title":"Sum Aggregation","slug":"sum-aggregation","link":"#sum-aggregation","children":[]},{"level":3,"title":"Value Count Aggregation","slug":"value-count-aggregation","link":"#value-count-aggregation","children":[]},{"level":3,"title":"Cardinality Aggregation","slug":"cardinality-aggregation","link":"#cardinality-aggregation","children":[]},{"level":3,"title":"Stats Aggregation","slug":"stats-aggregation","link":"#stats-aggregation","children":[]},{"level":3,"title":"Extended Stats Aggregation","slug":"extended-stats-aggregation","link":"#extended-stats-aggregation","children":[]},{"level":3,"title":"Percentiles Aggregation","slug":"percentiles-aggregation","link":"#percentiles-aggregation","children":[]},{"level":3,"title":"Percentiles Ranks Aggregation","slug":"percentiles-ranks-aggregation","link":"#percentiles-ranks-aggregation","children":[]}]},{"level":2,"title":"Bucket Aggregation","slug":"bucket-aggregation","link":"#bucket-aggregation","children":[{"level":3,"title":"Terms Aggregation","slug":"terms-aggregation","link":"#terms-aggregation","children":[]},{"level":3,"title":"Filter Aggregation","slug":"filter-aggregation","link":"#filter-aggregation","children":[]},{"level":3,"title":"Filters Aggregation","slug":"filters-aggregation","link":"#filters-aggregation","children":[]},{"level":3,"title":"Range Aggregation","slug":"range-aggregation","link":"#range-aggregation","children":[]}]},{"level":2,"title":"Tài liệu tham khảo","slug":"tai-lieu-tham-khao","link":"#tai-lieu-tham-khao","children":[]}],"git":{"createdTime":1719590078000,"updatedTime":1719590078000,"contributors":[{"name":"Hung Nguyen Van","email":"vanhung4499@gmail.com","commits":1}]},"readingTime":{"minutes":12.28,"words":3683},"filePathRelative":"database/elasticsearch/aggregation.md","localizedDate":"June 28, 2024","excerpt":"\\n<p>Elasticsearch là một công cụ tìm kiếm toàn văn bản phân tán, lập chỉ mục và tìm kiếm là các chức năng cơ bản của Elasticsearch. Thực tế, chức năng Aggregations của Elasticsearch cũng rất mạnh mẽ, cho phép thực hiện phân tích thống kê phức tạp trên dữ liệu. Elasticsearch cung cấp bốn loại chức năng phân tích tổng hợp chính, bao gồm <strong>aggregations chỉ số (metrics aggregations)</strong>, <strong>aggregations thùng (bucket aggregations)</strong>, <strong>aggregations ống (pipeline aggregations)</strong> và <strong>aggregations ma trận (matrix aggregations)</strong>. Aggregations ống và aggregations ma trận đang trong giai đoạn thử nghiệm theo thông báo chính thức, và sẽ được thay đổi hoàn toàn hoặc loại bỏ sau này, vì vậy chúng tôi sẽ không giải thích về aggregations ống và aggregations ma trận ở đây.</p>","autoDesc":true}');export{g as comp,d as data};
