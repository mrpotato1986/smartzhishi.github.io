var posts=["2025/12/30/hello-world/","2025/12/30/新文章/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };