var posts=["2024/06/09/机器学习训练营 幸福感比赛 学习笔记/","2024/06/09/机器学习训练营XGBoost学习笔记/","2024/06/09/机器学习训练营逻辑回归笔记/","2024/06/09/机器学习训练营lightGBM学习笔记/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };