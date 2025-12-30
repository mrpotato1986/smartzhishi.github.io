var posts=["2025/12/30/他们用AI推流一个月赚了5万美金/","2025/12/30/【实操复盘】别再给服务商送钱了：我用-Nano-Banana-Veo-3-1-撸出高转化-Listing-视频的“野路子”/","2025/12/30/新文章/","2025/12/30/如何用-Gemini-和-Nano-Banana-打造爆款产品主图全流程指南/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };