var posts=["2024/06/09/101对称二叉树/","2024/06/09/104二叉树的最大深度/","2024/06/09/141环形链表/","2024/06/09/136只出现一次的数字/","2024/06/09/131分割回文串/","2024/08/28/17电话号码的字母组合/","2024/08/28/189轮转数组/","2024/06/09/121买卖股票的最佳时期/","2024/08/20/200 岛屿数量/","2024/07/05/2024拍摄进度/","2024/08/21/207课程表/","2024/08/21/208实现Trie前缀树/","2024/06/09/20有效的括号/","2024/06/09/21合并两个有序链表/","2024/08/28/238除自身以外数组的乘积/","2024/08/28/39组合总和/","2024/08/28/22括号生成/","2024/08/28/53最大子数组和/","2024/08/28/41缺失的第一个正数/","2024/08/28/56合并区间/","2024/06/09/70爬楼梯/","2024/08/28/78子集/","2024/06/09/79单词搜索/","2024/06/09/94二叉树的中序遍历/","2024/08/21/994腐烂的橘子/","2024/08/08/Bean的生命周期/","2024/08/27/PicGo搭建图床常见错误/","2024/08/28/46全排列/","2024/08/27/使用PicGo搭建Github图床/","2024/08/27/Spring如何加载Bean对象/","2024/06/15/地铁JK策划案/","2024/08/08/Spring如何使用三级缓存解决循环依赖/","2024/06/26/开发笔记_前端开发/","2024/06/20/开发笔记_合约所有权/","2024/06/20/开发笔记_智能合约/","2024/06/20/开发笔记_启动项目/","2024/08/06/抽奖模块_前置规则/","2024/06/18/刷题路线/","2024/07/31/抽奖模块_表单配置/","2024/06/09/机器学习训练营lightGBM学习笔记/","2024/06/15/校园JK 样片/","2024/06/09/机器学习训练营 幸福感比赛 学习笔记/","2024/06/09/机器学习训练营逻辑回归笔记/","2024/06/13/胶片漂流计划--说明/","2024/06/09/机器学习训练营XGBoost学习笔记/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };