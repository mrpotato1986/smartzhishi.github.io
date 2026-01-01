var posts=["2026/01/01/2026年终极保姆级教程：手把手教你用-Cloudflare-GitHub-Hugo-搭建永久免费个人博客/","2025/12/30/如何用-Gemini-和-Nano-Banana-打造爆款产品主图全流程指南/","2025/12/30/【实操复盘】别再给服务商送钱了：我用-Nano-Banana-Veo-3-1-撸出高转化-Listing-视频的“野路子”/","2025/12/30/他们用AI推流一个月赚了5万美金/","2025/12/30/新文章/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };