var posts=["2024/06/09/101对称二叉树/","2024/06/09/121买卖股票的最佳时期/","2024/06/09/104二叉树的最大深度/","2024/06/09/136只出现一次的数字/","2024/06/09/141环形链表/","2024/06/09/20有效的括号/","2024/06/09/21合并两个有序链表/","2024/06/09/70爬楼梯/","2024/06/18/刷题路线/","2024/06/15/地铁JK策划案/","2024/06/09/94二叉树的中序遍历/","2024/06/20/开发笔记_合约所有权/","2024/06/20/开发笔记_后端部署/","2024/06/20/开发笔记_启动项目/","2024/06/20/开发笔记_智能合约/","2024/06/09/机器学习训练营 幸福感比赛 学习笔记/","2024/06/09/机器学习训练营XGBoost学习笔记/","2024/06/09/机器学习训练营lightGBM学习笔记/","2024/06/13/胶片漂流计划--说明/","2024/06/15/校园JK 样片/","2024/06/09/机器学习训练营逻辑回归笔记/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };