/**
 * Load comment system script
 * For hexo-theme-Annie
 */

(function() {
  // 从_config.yml中读取Valine配置
  const valineConfig = window.themeConfig?.comment?.valine || {};
  const appid = valineConfig.appId || '';
  const appkey = valineConfig.appKey || '';
  
  // 添加meta标签，供comment.js读取
  function addMeta(name, content) {
    if (!content) return;
    const meta = document.createElement('meta');
    meta.name = name;
    meta.content = content;
    document.head.appendChild(meta);
  }
  
  // 添加Valine配置的meta标签
  addMeta('valine-appid', appid);
  addMeta('valine-appkey', appkey);
  
  // 如果页面有评论容器，加载comment.js
  if (document.querySelector('.layout-comment')) {
    const script = document.createElement('script');
    script.src = '/js/comment.js';
    document.body.appendChild(script);
  }
})();