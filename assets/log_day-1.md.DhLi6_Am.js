import{_ as s,c as a,o as p,ai as e}from"./chunks/framework.BjpnAPRY.js";const u=JSON.parse('{"title":"今日学习","description":"","frontmatter":{},"headers":[],"relativePath":"log/day-1.md","filePath":"log/day-1.md","lastUpdated":1760200632000}'),l={name:"log/day-1.md"};function r(i,n,t,c,o,b){return p(),a("div",null,[...n[0]||(n[0]=[e(`<h1 id="今日学习" tabindex="-1">今日学习 <a class="header-anchor" href="#今日学习" aria-label="Permalink to &quot;今日学习&quot;">​</a></h1><ul><li>[x] Okhttp原理</li><li>核心是拦截器链。分为两类即应用拦截器和网络拦截器，应用拦截器只加在开始请求前或得到响应后。网络拦截器可以加到内置连接器中间。</li></ul><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>[Application Interceptor 1]</span></span>
<span class="line"><span>           ↓</span></span>
<span class="line"><span>[Application Interceptor 2]</span></span>
<span class="line"><span>           ↓</span></span>
<span class="line"><span>     [RetryAndFollowUpInterceptor] ←─┐</span></span>
<span class="line"><span>           ↓                         │</span></span>
<span class="line"><span>     [BridgeInterceptor]             │</span></span>
<span class="line"><span>           ↓                         │</span></span>
<span class="line"><span>     [CacheInterceptor]              │</span></span>
<span class="line"><span>           ↓                         │</span></span>
<span class="line"><span>     [ConnectInterceptor]            │</span></span>
<span class="line"><span>           ↓                         │</span></span>
<span class="line"><span>     [CallServerInterceptor]  ←── 发起真实网络请求</span></span>
<span class="line"><span>           ↑</span></span>
<span class="line"><span>     [ConnectInterceptor]</span></span>
<span class="line"><span>           ↑</span></span>
<span class="line"><span>     [CacheInterceptor]</span></span>
<span class="line"><span>           ↑</span></span>
<span class="line"><span>     [BridgeInterceptor]</span></span>
<span class="line"><span>           ↑</span></span>
<span class="line"><span>     [RetryAndFollowUpInterceptor]</span></span>
<span class="line"><span>           ↑</span></span>
<span class="line"><span>[Application Interceptor 2]</span></span>
<span class="line"><span>           ↑</span></span>
<span class="line"><span>[Application Interceptor 1]</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br></div></div><ul><li>[x] Retrofit原理</li><li>核心是动态代理。通过带注解的接口定义请求，运行时动态生成匿名接口实现类，将接口方法调用拦截并解析注解，最终构建并执行 OkHttp 请求，再通过 Converter 将响应转换为 Java 对象。</li></ul><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>// Retrofit 动态代理核心逻辑</span></span>
<span class="line"><span>public Object invoke(Object proxy, Method method, Object[] args) {</span></span>
<span class="line"><span>    ServiceMethod&lt;?&gt; serviceMethod = loadServiceMethod(method); // 解析并缓存注解</span></span>
<span class="line"><span>    OkHttpCall&lt;?&gt; call = new OkHttpCall&lt;&gt;(serviceMethod, args); // 构建 OkHttpCall</span></span>
<span class="line"><span>    return serviceMethod.callAdapter.adapt(call);                // 适配返回类型</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><ul><li>[x] Glide原理</li><li>核心是生命周期感知、三级缓存、可扩展引擎。</li><li>生命周期感知通过SupportRequestManagerFragment 隐藏附着在 FragmentManager 中，自动处理 onStart/onStop/onDestroy，避免内存泄漏。</li><li>三级缓存为活跃缓存(强引用)、内存缓存(弱引用)、磁盘缓存。</li><li>可扩展引擎ModelLoader。</li></ul>`,6)])])}const m=s(l,[["render",r]]);export{u as __pageData,m as default};
