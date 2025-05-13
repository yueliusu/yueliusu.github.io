/**
 * Valine comment system initialization
 * For hexo-theme-Annie
 */

(function() {
  // 检查是否存在评论容器
  if (document.querySelector('.layout-comment')) {
    // 从配置中读取Valine设置
    const appid = document.querySelector('meta[name="valine-appid"]')?.getAttribute('content') || ''; 
    const appkey = document.querySelector('meta[name="valine-appkey"]')?.getAttribute('content') || '';
    
    if (!appid || !appkey || appid === 'your_leancloud_appid' || appkey === 'your_leancloud_appkey') {
      console.warn('请在_config.yml中配置正确的LeanCloud AppID和AppKey');
      return;
    }
    
    // 创建评论容器
    const commentContainer = document.querySelector('.layout-comment');
    const vcommentDiv = document.createElement('div');
    vcommentDiv.id = 'vcomment';
    commentContainer.innerHTML = '';
    commentContainer.appendChild(vcommentDiv);
    
    // 加载必要的JS文件
    function loadScript(url, callback) {
      const script = document.createElement('script');
      script.type = 'text/javascript';
      script.src = url;
      script.onload = callback;
      document.head.appendChild(script);
    }
    
    // 先加载LeanCloud SDK，再加载Valine
    loadScript('/plugin/leancloud/av-min.js', function() {
      loadScript('/plugin/comment/valine.min.js', function() {
        // 初始化Valine
        new Valine({
          el: '#vcomment',
          appId: appid,
          appKey: appkey,
          placeholder: '请输入您的评论...',
          avatar: 'mm',
          meta: ['nick', 'mail'],
          pageSize: 10,
          lang: 'zh-CN',
          visitor: false,
          recordIP: false,
          enableQQ: false
        });
      });
    });
  }
})();