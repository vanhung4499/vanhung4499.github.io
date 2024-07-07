import{_ as s,o as a,c as n,a as e}from"./app-BRTHG7K9.js";const l={},i=e(`<h1 id="国际化" tabindex="-1"><a class="header-anchor" href="#国际化"><span>国际化</span></a></h1><p>友情提示：</p><p>该章节，基于 <a href="https://element-plus-admin-doc.cn/dep/i18n.html" target="_blank" rel="noopener noreferrer">《vue element plus admin —— 国际化》</a> 的内容修改。</p><p>如果你使用的 vscode 开发工具，则推荐安装 <a href="https://marketplace.visualstudio.com/items?itemName=Lokalise.i18n-ally" target="_blank" rel="noopener noreferrer">I18n-ally</a> 这个插件</p><h2 id="_1-i18n-ally-插件" tabindex="-1"><a class="header-anchor" href="#_1-i18n-ally-插件"><span><a href="#_1-i18n-ally-%E6%8F%92%E4%BB%B6">#</a> 1. I18n-ally 插件</span></a></h2><p>安装了该插件后，你的代码内可以实时看到对应的语言内容</p><figure><img src="https://element-plus-admin-doc.cn/images/i18n.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="_2-配置默认语言" tabindex="-1"><a class="header-anchor" href="#_2-配置默认语言"><span><a href="#_2-%E9%85%8D%E7%BD%AE%E9%BB%98%E8%AE%A4%E8%AF%AD%E8%A8%80">#</a> 2. 配置默认语言</span></a></h2><p>在 <a href="https://github.com/yudaocode/yudao-ui-admin-vue3/blob/master/src/store/modules/locale.ts" target="_blank" rel="noopener noreferrer">src/store/modules/locale.ts</a> 内配置 <code>currentLocale</code> 为其他语言。</p><p>查看代码</p><div class="language- line-numbers-mode" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>import { defineStore } from &#39;pinia&#39;</span></span>
<span class="line"><span>import { store } from &#39;../index&#39;</span></span>
<span class="line"><span>import zhCn from &#39;element-plus/es/locale/lang/zh-cn&#39;</span></span>
<span class="line"><span>import en from &#39;element-plus/es/locale/lang/en&#39;</span></span>
<span class="line"><span>import { CACHE_KEY, useCache } from &#39;@/hooks/web/useCache&#39;</span></span>
<span class="line"><span>import { LocaleDropdownType } from &#39;@/types/localeDropdown&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const { wsCache } = useCache()</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const elLocaleMap = {</span></span>
<span class="line"><span>  &#39;zh-CN&#39;: zhCn,</span></span>
<span class="line"><span>  en: en</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>interface LocaleState {</span></span>
<span class="line"><span>  currentLocale: LocaleDropdownType</span></span>
<span class="line"><span>  localeMap: LocaleDropdownType[]</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>export const useLocaleStore = defineStore(&#39;locales&#39;, {</span></span>
<span class="line"><span>  state: (): LocaleState =&gt; {</span></span>
<span class="line"><span>    return {</span></span>
<span class="line"><span>      currentLocale: {</span></span>
<span class="line"><span>        lang: wsCache.get(CACHE_KEY.LANG) || &#39;zh-CN&#39;,</span></span>
<span class="line"><span>        elLocale: elLocaleMap[wsCache.get(CACHE_KEY.LANG) || &#39;zh-CN&#39;]</span></span>
<span class="line"><span>      },</span></span>
<span class="line"><span>      // 多语言</span></span>
<span class="line"><span>      localeMap: [</span></span>
<span class="line"><span>        {</span></span>
<span class="line"><span>          lang: &#39;zh-CN&#39;,</span></span>
<span class="line"><span>          name: &#39;简体中文&#39;</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span>        {</span></span>
<span class="line"><span>          lang: &#39;en&#39;,</span></span>
<span class="line"><span>          name: &#39;English&#39;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>      ]</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  getters: {</span></span>
<span class="line"><span>    getCurrentLocale(): LocaleDropdownType {</span></span>
<span class="line"><span>      return this.currentLocale</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    getLocaleMap(): LocaleDropdownType[] {</span></span>
<span class="line"><span>      return this.localeMap</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  actions: {</span></span>
<span class="line"><span>    setCurrentLocale(localeMap: LocaleDropdownType) {</span></span>
<span class="line"><span>      // this.locale = Object.assign(this.locale, localeMap)</span></span>
<span class="line"><span>      this.currentLocale.lang = localeMap?.lang</span></span>
<span class="line"><span>      this.currentLocale.elLocale = elLocaleMap[localeMap?.lang]</span></span>
<span class="line"><span>      wsCache.set(CACHE_KEY.LANG, localeMap?.lang)</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span></span></span>
<span class="line"><span>export const useLocaleStoreWithOut = () =&gt; {</span></span>
<span class="line"><span>  return useLocaleStore(store)</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-语言文件" tabindex="-1"><a class="header-anchor" href="#_3-语言文件"><span><a href="#_3-%E8%AF%AD%E8%A8%80%E6%96%87%E4%BB%B6">#</a> 3. 语言文件</span></a></h2><p>在 <a href="https://github.com/yudaocode/yudao-ui-admin-vue3/blob/master/src/locales/" target="_blank" rel="noopener noreferrer">src/locales</a> 可以配置具体的语言。</p><p>目前项目中的语言都是没有拆分的，全部放一起，后续会考虑拆分出来，比较好维护。</p><h2 id="_4-语言导入逻辑说明" tabindex="-1"><a class="header-anchor" href="#_4-语言导入逻辑说明"><span><a href="#_4-%E8%AF%AD%E8%A8%80%E5%AF%BC%E5%85%A5%E9%80%BB%E8%BE%91%E8%AF%B4%E6%98%8E">#</a> 4. 语言导入逻辑说明</span></a></h2><p>在 <a href="https://github.com/yudaocode/yudao-ui-admin-vue3/blob/master/src/plugins/vueI18n/index.ts#L13" target="_blank" rel="noopener noreferrer">src/plugins/vueI18n/index.ts</a> 内可以看到</p><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>const defaultLocal = await import(\`../../locales/\${locale.lang}.ts\`)</span></span></code></pre></div><p>这会导入 <code>src/locales</code> 文件语言包。</p><h2 id="_5-使用" tabindex="-1"><a class="header-anchor" href="#_5-使用"><span><a href="#_5-%E4%BD%BF%E7%94%A8">#</a> 5. 使用</span></a></h2><p>引入项目自带的 <code>useI18n</code></p><p><strong>注意不要引入 vue-i18n 的 useI18n</strong></p><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>import { useI18n } from &#39;/@/hooks/web/useI18n&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const { t } = useI18n()</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const title = t(&#39;common.menu&#39;)</span></span></code></pre></div><h2 id="_6-切换语言" tabindex="-1"><a class="header-anchor" href="#_6-切换语言"><span><a href="#_6-%E5%88%87%E6%8D%A2%E8%AF%AD%E8%A8%80">#</a> 6. 切换语言</span></a></h2><p>切换语言需要使用 <a href="https://github.com/yudaocode/yudao-ui-admin-vue3/blob/master/src/hooks/web/useLocale.ts#L19-L35" target="_blank" rel="noopener noreferrer">src/hooks/web/useLocale.ts</a></p><div class="language-" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>import { useLocale } from &#39;@/hooks/web/useLocale&#39;</span></span>
<span class="line"><span>const { changeLocale } = useLocale()</span></span>
<span class="line"><span></span></span>
<span class="line"><span>changeLocale(&#39;en&#39;)</span></span></code></pre></div><h2 id="_7-新增新语言" tabindex="-1"><a class="header-anchor" href="#_7-新增新语言"><span><a href="#_7-%E6%96%B0%E5%A2%9E%E6%96%B0%E8%AF%AD%E8%A8%80">#</a> 7. 新增新语言</span></a></h2><h3 id="_7-1-语言文件" tabindex="-1"><a class="header-anchor" href="#_7-1-语言文件"><span><a href="#_7-1-%E8%AF%AD%E8%A8%80%E6%96%87%E4%BB%B6">#</a> 7.1 语言文件</span></a></h3><p>在 <a href="https://github.com/yudaocode/yudao-ui-admin-vue3/blob/master/src/locales/" target="_blank" rel="noopener noreferrer">src/locales</a> 增加对应语言的文件即可</p><h3 id="_7-2-新增语言" tabindex="-1"><a class="header-anchor" href="#_7-2-新增语言"><span><a href="#_7-2-%E6%96%B0%E5%A2%9E%E8%AF%AD%E8%A8%80">#</a> 7.2 新增语言</span></a></h3><p>目前项目自带的语言只有 <code>zh_CN</code> 和 <code>en</code> 两种</p><p>如果需要新增，按以下操作即可</p><ol><li>在 <a href="https://github.com/yudaocode/yudao-ui-admin-vue3/blob/master/src/locales/" target="_blank" rel="noopener noreferrer">src/locales</a> 下语言文件</li><li>在 <a href="https://github.com/yudaocode/yudao-ui-admin-vue3/blob/master/types/global.d.ts#L15" target="_blank" rel="noopener noreferrer">types/global.d.ts</a> 给 <code>LocaleType</code> 添加对应的类型</li><li>在 <a href="hhttps://github.com/yudaocode/yudao-ui-admin-vue3/blob/master/src/store/modules/locale.ts#L26-L38" target="_blank" rel="noopener noreferrer">src/store/modules/locale.ts</a> <code>localeMap</code> 中添加对应语言</li></ol><h2 id="_8-远程读取语言数据" tabindex="-1"><a class="header-anchor" href="#_8-远程读取语言数据"><span><a href="#_8-%E8%BF%9C%E7%A8%8B%E8%AF%BB%E5%8F%96%E8%AF%AD%E8%A8%80%E6%95%B0%E6%8D%AE">#</a> 8. 远程读取语言数据</span></a></h2><p>目前项目会在 <code>src/main.ts</code> 内等待 <code>setupI18n</code> 这个函数执行完之后才会渲染界面，所以只需在 setupI18n 内的 <code>createI18nOptions</code> 发送 ajax 请求，将对应的数据设置到 i18n 实例上即可。</p><div class="language- line-numbers-mode" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>const createI18nOptions = async (): Promise&lt;I18nOptions&gt; =&gt; {</span></span>
<span class="line"><span>  const localeStore = useLocaleStoreWithOut()</span></span>
<span class="line"><span>  const locale = localeStore.getCurrentLocale</span></span>
<span class="line"><span>  const localeMap = localeStore.getLocaleMap</span></span>
<span class="line"><span>  // 这里改为远程请求即可。</span></span>
<span class="line"><span>  const defaultLocal = await import(\`../../locales/\${locale.lang}.ts\`)</span></span>
<span class="line"><span>  const message = defaultLocal.default ?? {}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  setHtmlPageLang(locale.lang)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  localeStore.setCurrentLocale({</span></span>
<span class="line"><span>    lang: locale.lang</span></span>
<span class="line"><span>    // elLocale: elLocal</span></span>
<span class="line"><span>  })</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  return {</span></span>
<span class="line"><span>    legacy: false,</span></span>
<span class="line"><span>    locale: locale.lang,</span></span>
<span class="line"><span>    fallbackLocale: locale.lang,</span></span>
<span class="line"><span>    messages: {</span></span>
<span class="line"><span>      [locale.lang]: message</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    availableLocales: localeMap.map((v) =&gt; v.lang),</span></span>
<span class="line"><span>    sync: true,</span></span>
<span class="line"><span>    silentTranslationWarn: true,</span></span>
<span class="line"><span>    missingWarn: false,</span></span>
<span class="line"><span>    silentFallbackWarn: true</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_8-1-uselocale" tabindex="-1"><a class="header-anchor" href="#_8-1-uselocale"><span><a href="#_8-1-uselocale">#</a> 8.1 useLocale</span></a></h3><p>代码: <a href="https://github.com/yudaocode/yudao-ui-admin-vue3/blob/master/src/hooks/web/useLocale.ts#L19-L35" target="_blank" rel="noopener noreferrer">src/hooks/web/useLocale.ts</a></p><p>当手动切换语言的时候会触发 <code>useLocale</code> 函数，useLocale 也是异步函数，只需等待接口返回响应的数据后，再进行设置即可</p><div class="language- line-numbers-mode" data-ext="" data-title=""><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>export const useLocale = () =&gt; {</span></span>
<span class="line"><span>  // Switching the language will change the locale of useI18n</span></span>
<span class="line"><span>  // And submit to configuration modification</span></span>
<span class="line"><span>  const changeLocale = async (locale: LocaleType) =&gt; {</span></span>
<span class="line"><span>    const globalI18n = i18n.global</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 改为远程获取</span></span>
<span class="line"><span>    const langModule = await import(\`../../locales/\${locale}.ts\`)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    globalI18n.setLocaleMessage(locale, langModule.default)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    setI18nLanguage(locale)</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  return {</span></span>
<span class="line"><span>    changeLocale</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,39),p=[i];function c(r,d){return a(),n("div",null,p)}const t=s(l,[["render",c],["__file","i18n.html.vue"]]),u=JSON.parse('{"path":"/project/rouyi-vue-pro/vue3/i18n.html","title":"国际化","lang":"en-US","frontmatter":{"title":"国际化","tags":["project","java","spring-boot","spring-cloud"],"categories":["project"],"order":176,"feed":false,"seo":false,"head":[]},"headers":[{"level":2,"title":"# 1. I18n-ally 插件","slug":"_1-i18n-ally-插件","link":"#_1-i18n-ally-插件","children":[]},{"level":2,"title":"# 2. 配置默认语言","slug":"_2-配置默认语言","link":"#_2-配置默认语言","children":[]},{"level":2,"title":"# 3. 语言文件","slug":"_3-语言文件","link":"#_3-语言文件","children":[]},{"level":2,"title":"# 4. 语言导入逻辑说明","slug":"_4-语言导入逻辑说明","link":"#_4-语言导入逻辑说明","children":[]},{"level":2,"title":"# 5. 使用","slug":"_5-使用","link":"#_5-使用","children":[]},{"level":2,"title":"# 6. 切换语言","slug":"_6-切换语言","link":"#_6-切换语言","children":[]},{"level":2,"title":"# 7. 新增新语言","slug":"_7-新增新语言","link":"#_7-新增新语言","children":[{"level":3,"title":"# 7.1 语言文件","slug":"_7-1-语言文件","link":"#_7-1-语言文件","children":[]},{"level":3,"title":"# 7.2 新增语言","slug":"_7-2-新增语言","link":"#_7-2-新增语言","children":[]}]},{"level":2,"title":"# 8. 远程读取语言数据","slug":"_8-远程读取语言数据","link":"#_8-远程读取语言数据","children":[{"level":3,"title":"# 8.1 useLocale","slug":"_8-1-uselocale","link":"#_8-1-uselocale","children":[]}]}],"git":{"createdTime":1720365235000,"updatedTime":1720365235000,"contributors":[{"name":"Hung Nguyen Van","email":"vanhung4499@gmail.com","commits":1}]},"readingTime":{"minutes":2.71,"words":814},"filePathRelative":"project/rouyi-vue-pro/vue3/i18n.md","localizedDate":"July 7, 2024"}');export{t as comp,u as data};
