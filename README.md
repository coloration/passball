# Passball

<https://passball.colorlives.com>

### Infomation

- wechat miniprogram: <https://mp.weixin.qq.com/>
  - username: m17600119652@163.com
- <https://www.mongodb.com/atlas> 
- design: <https://www.figma.com/file/2ZrujqCDUGv2ztF7l0Njoo/PRACTICE?type=design&node-id=102%3A2&mode=design&t=jfHZXGZqG9RwNRX3-1>

### Develop stack

- netlify
- mongodb
- nuxt
- keystone.js ? cms


### dest

- web app pwa 
- microprogram x
- google play android


### 爬虫

- resource
  - <https://data.qtx.com/> 赛事，赛程，转会信息，积分榜，射手榜
  - <>
- github action 定时任务爬取赛事，转会信息, 格式化，存储到monogodb
- serverless 访问monogodb






### 开发日志


- 0713(T)
  - [x] 爬虫可用
  - [x] taro可以启动

- 0714(F) 
  - [] 服务器读取mongodb数据返回前端
  - [x] 构建简单版小程序进行显示 taro
  - [x] 首页 taro
  - [x] 联赛页 taro

- 0717(M)
  - [x] 购买域名 colorlives
  - [x] 小程序需要备案域名 转发接口需要云开发支持 先放弃小程序开发，先开发网页版贴片广告

- 0718(T)

- 0719(W)
  - [x] 域名设置
  - [x] nuxt 基础和配置
  - [x] 基本样式编写

- 0720(T)
  - [x] 数据库连接问题
  - [x] 项目部署 passball.colorlives.com
  - [x] 定义数据结构

- 0721(F)
  - [x] 爬取22-23赛季五大联赛赛程积分数据

- 0722(S)
  - [x] 新建项目负责数据爬取，整理，存储 @coloration/passball-schedule

- 0723(S)
  - [x] 整理五大联赛过去五年赛程数据，存储数据库
  - [x] nuxt调用数据库并返给前端

- 0724(M)
  - [x] 联赛基本信息，赛季筛选

- 0725(M)
  - [x] 五大联赛2023 賽程, 積分榜


- 0726(T)
  - [x] 杯賽數據

- next day

  - [] 最近一周比赛 fixture from to, league,round, home, away, time, date, address, status, score, github action. 赛事名次 半小时一更新
  - [] 联赛转会信息
  - [] 联赛射手榜
  - [] 積分榜被動查詢
  - [] 賽程被動查詢



### 比賽狀態

https://www.api-football.com/documentation-v3#tag/Fixtures/operation/get-fixtures


### 

重要賽事

五大聯賽，歐洲杯，世界杯，女足世界杯, 歐洲冠軍聯賽

[
  1, // World Cup
  2, // UEFA Champions League
  3, // UEFA Europa League
  7, // Asian Cup
  8, // World Cup - Women
  480, // Olympics Men
  524, // Olympics Women
  39, // Premier League
  61, // Ligue 1
  78, // Bundesliga
  135, // Serie A
  140, // Laliga
]

2023.07.31 内测

### TODO 


- 看一下 puppter 的下载源
- serverless 解决数据库连接问题 nextweek
- nuxt3 使用 postcss 插件(不能用)
- logo 设计 midjourney discord 0721
- 网页设计
- google广告贴片
  需要网站先有流量 google adsence
- 整理数据结构
- 先加google analysis
- how to ssr
  - 名称要不要映射
- netlify 二级域名 https
- 翻译数据
- 焦點戰賽事速看

### Roadmap



- 五大联赛赛程
- 球队赛程
- 转会信息
- 竞猜积分
- 用户登录


