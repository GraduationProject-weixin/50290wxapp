# [首页查询更多项目](https://github.com/GraduationProject-weixin) 包安装运行


# 50290wxapp懒人美食帮+springboot

![picture](https://raw.githubusercontent.com/GraduationProject-springboot/.github/main/img/wx.png)

### 点击播放视频 ▼
[![Watch the video](https://i.sstatic.net/Vp2cE.png)]()


# 研究背景
互联网的发展对传统行业带来了一个颠覆性的改变，各行各业都在借助于互联网的思想进行创新，只有更加科学有效的管理办法，加上不断的创新才能提高企业的核心竞争力，才能跟上时代的潮流，要不然面临的就是行业的淘汰。所以要摒弃传统的经营管理模式，插上互联网的翅膀才是未来行业发展的趋势。

随着生活水平的提高和科技的进步，人们的生活水平得到了很大的改善，而近几年受到各种电商宣传的营销刺激，比如最近今年非常火的直播带货，很多商家想到加入电商平台里。而这几年受疫情影响，很多人的生活压力变大，但物价越来越贵，很多人的生活习惯和消费习惯也在慢慢改变，在每天的吃饭选择上更多的用户选择在网上订餐。所以说在这种背景下，很多订餐系统就诞生了，通过互联网建立的订餐平台，作为一种新的思想、新文化的生活方式，可以扩大商家菜品的销售圈子，用户可以随时订餐，并且价格便宜。但由于食物的特殊性，在网上点餐看不到实际餐品的生产过程，造成食品更多的安全问题，各种黑作坊、过期食物、生产环境脏乱差都得不到有效的监控。
## 1.2课题研究内容
本小程序+SpringBoot懒人菜品帮采用商家发布菜品、管理员审核菜品的方式进行食物的监管，由第三方来保证食物的安全。用户可以浏览商家信息、菜品信息进行菜品的购买、收藏、评价以及订单管理、配送查询等，商家可以安排配送等。配送员可以接单完成配送。本系统可以保证食品的安全，使用户吃到放心、可靠的菜品。
## 1.3课题实现目的和意义
目前我国网络差不多已经普及，已经全面进入了5G时代，已经完全满足了用户的各种网络需求，由之前的PC端已经转向了移动互联网时代，通过移动互联网的模式可以不局限与任何时间和地点，对用户来说更加的方便。

对于需要订餐的用户来说，可以有质量保证的订餐平台非常重要，这样就解决了食物的质量。有问题也可以随时和管理员进行反馈，一同监视商家的食品问题。对于商家来说，可以有新的销售平台可以提高自己的业绩，并且通过本平台也可以提高自己的知名度。而对于管理员来说，保证用户吃到放心的食物，给商家提供销售平台，也算是为人民做出了自己的贡献，对配送员来说可以有专业的平台进行接单。所以说开发这样的系统是一个一举多得的事情，是非常具有开发价值的。
## 1.4论文结构安排
`    `本篇论文按照系统调查、系统开发使用的关键技术与环境、系统分析、系统设计、系统实现、系统测试的步骤进行安排。第一章为绪论，相当于系统的调查，包含了系统的开发背景、意义方面信息；第二章介绍本系统在开发中所使用的关键技术。第三章进行系统需求性、可行性等方面的分析。第四章进行数据库建立和系统功能结构的设计。第四章进行系统的编码、界面实现。第五章进行系统功能的测试。第六章为本系统的总结。最后为致谢和参考文献。














# 第2章 开发系统所使用的关键技术和环境
## 2.1微信开发者工具软件介绍
微信开发者工具是用来调试小程序的一个环境包，它最大的的特点就是集成了调试所需要的所有软件，比如像服务器[T](https://baike.baidu.com/item/Apache)omcat还有数据库 MySQl以及系统管理，只需要通过一个微信开发者工具软件就可以完成微信小程序的环境调试，非常的简单，也不需要单独的进行环境配置，而且还额外添加了开发工具的使用和开发所需要的手册等。对于新手来说是非常友好的，只需要安装这一个包就可以了，因为对于新手来说，往往编程不是最难，最难的是环境的配置，这跟电脑系统，电脑硬件配置，软件配置都有一定的关系，随便一个地方出错，都可能导致系统运行不了，所以通过一个微信开发者工具软件就可以解决这些所有的问题。
## 2.2Java语言介绍
Java主要是用来开发动态的一种编程语言，非常的简单易学，所以受到很多人的青睐，非常适合新手的使用，可以通过很短的时间就能学会。而且是开源的环境，有非常丰富的资源环境，非常适合一些中小型项目的开发使用。Java是一种面向对象的OOP，通过OOP可以使编写的代码结构更加的合理，而且还有很好的可维护性，可以直接看到Java的面向过程的写法，最大的特征就是代码可以重复利用，这样开发一个系统同样的一个问题，就可以直接用同一段代码就执行了，这个就很好的减少了代码的存储压力，而且处理速度更好，更好的解决代码封装问题，使建立的系统模型更加的完善。
## 2.3Web技术介绍
Web程序一般可以分为静态网站和动态两种形式，前几年的时候一般用的都是静态的，就是网站直接通过Html进行编写出来的，直接放到服务器上，然后通过Http协议用户就可以直接访问网站，相对来说形式比较单一。但是随着技术的发展，很多业务都拓展到了线上进行，单纯的静态网站所保存的数据远远不能满足用户的需求，大多都需要根据用户的需求进行单独生成动态的页面进行反馈，然后根据需要的需求在进行脚本代码的加工处理，然后通过浏览器进行解析，最后反馈给客户，这种形式就是动态的网站。Web客户端的主要功能就是对信息进行展示，可以结合各种编程语言使用，比如像Jtml ，Css 脚本语言等各种技术，而其中最重要的就是Html语言，他是组成Web程序必不可少的一部分，而脚本程序可以嵌入到Html文本里，通过这个流程可以使Html静态网页转换成动态页面，可以很好的提高系统的可交互性。而编写脚本程序常用的就是JavaScript技术，他的突出特点就是变量非常的灵活，而且兼容性好，不需要在单独进行编译，非常方便使用，可以直接用来设计动态交互的网页，不光是可以用来对客户端部分的编写，而且也可以直接通过脚本程序进行服务端的编写，可以很好的解决Web服务端的执行问题。所以说Web服务器主要包含的技术有Java ,Asp，Jsp等，都可以直接通过Web服务端进行页面展现。
## 2.4UML技术介绍
UML的开发过程中首先是先对对象进行分析研究，然后进行文档化分析，然后在对面向对象的思想进行细化，然后设计建立设计模型，最后觉得就是通过之前建立的各种模型进行编程，UML已经是形成了一个行业内的工业标准，所以在面对UML的时候不要有任何负担，而且一种辅助工具，对于系统开发阶段是有很大益处的。而通过UML我们接触最多的就是用例图了，用例图主要就是描述出来你打算做什么系统，从而实现什么功能，然后通过用例加权限角色的形式用图形展现出来，而用例部分一般都是用一个椭圆的形状来表示，角色部分用一个人的符号表示，通过箭头的形式把他们进行联系起来。而类图主要就是用一个三层表格图来进行展示，里面内容包含类的名字，类的属性，还有类实现所需要的方法，而把这些类之间存在三种关系，就是关联，泛华和依赖。关联是通过一条实线表示，某个类里的属性引用到另个实体类里，这样就形成一种关联关系，而关联关系也分为两种不同的关系，就是聚合和组合，聚合是通过一个空心菱形框来表示，他的最大特性就是当A的实体部分，也可以当B的实体部分，而组合关系恰恰相反，当作为A的实体后就不能在作为B的实体部分了，组合关系一般是采用实心的菱形框表示，以此来进行他们之间的区别。泛华关系是用空心的三角形来标注，可以看成一种对接口的关联关系。依赖关系是如果建立的一个类进行了改动，那么跟他有关联的其他类都会进行相应的改动，会通过类信息进行发送给其他的类，作为另一个类的数据存储部分，然后进行参数变动。
## 2.5 SpringBoot框架介绍
SpringBoot最核心的特色功能就是可以生成独立的微服务单元，就是把所有的代码模块都写在一个单独的应用里，这样功能代码直接的粘合度就非常的高，兼容性更好，而且还可以进行每个功能模块单独部署，不同的模块都能生成不同的小型服务，从而可以进行单独升级，然后实现应用之间的通信。用SpringBoot建立项目的首要步骤就是先配置SpringBoot依赖，建立的时候不需要单独设置版本，直接通过系统自带的场景启动器，就可以直接导入项目所需要的各种Web模块，然后在把所需要的功能场景调取出来，生成一个启动器，直接在项目里引入各种依赖的组件就行，然后需要什么功能就导入什么场景就可以了。
















# 第3章 系统分析
## 3.1系统需求分析
随着计算机信息化技术的蓬勃发展，各行业都开始转向自动化办公模式，传统的工作模式已经不能满足当下的需求，所以为了适应现代化潮流，采用更加科学规范的管理方式，都开始采用计算机信息化管理系统，从而更好的提高工作效率。本系统采用微信小程序的开发模式，结合了数据库一起设计的，所以作为一个独立的系统运行的，解决了繁琐的工作模式。直接通过网络就可以完成工作，不管对于管理员还是对于用户，都能起到一个更好的效果。进一步的实现了节省人力资源，提高了工作效率，业务处理流程更加的简单，更加满足需求。
## 3.2系统可行性分析
开发本系统需要实现什么功能，是否有开发的必要性，是否能满足用户需求等，需要先进行一系列的研究，然后设计出完整的方案，确定系统是否可行，然后才能继续开发，所以开发本系统主要是技术上，经济上，操作上等进行分析。
### 3.2.1经济可行性分析
本系统属于一个开放型的计算机信息化系统，开发成功后可以帮助管理员提高工作效率，完成数据的存储，收集，查询等各种操作，相比传统的手工模式，更加的省时省力，而且查找非常的方便，管理起来更加的简单，使管理更加的科学规范。采用的编程软件和技术全部都是开源的，直接网上就能免费下载，所以开发的费用是非常的低，开发系统所用到的知识，全部都是老师上课所教的，不懂的地方也是在老师和同学的帮助下一起完成的，所以并没有太多的费用。并且本系统的运行条件也不高，只需要基本配置的电脑就可以实现。本系统所使用的技术、环境都为免费的，所需要的资料和控件、图片、素材等都是网上免费下载或者本人自己制做的。所以从这里分析得出，投入不多但是确能带来更大的经济效益。
### 3.2.2操作可行性分析
本系统实现全部采用的是可视化的操作界面，非常直观简单，而且是在网页里进行效果展示，非常容易打开，而且后台数据进行修改后，前台页面可以实时更新。操作的用户只需要会基本的电脑操作就可以使用本系统，而且布局简单，符合现代审美，很容易就可以进行每个功能的操作。在设计中为了方便用户操作也设计了大量的提示词和提示框。所以本系统在系统的操作可行性分析上是可以通过的。
### 3.2.3技术可行性分析
主要是从硬件和软件两方面进行分析，首先开发本系统所需要的硬件设备为PC电脑、手机，目前的硬件设备性能都非常的好，完全可以支撑开发本系统。电脑软件上采用windows操作系统，兼容非常的好，可以支持各种环境的开发运行，手机上采用Android操作系统，可以支持多种环境。数据库采用的MySQL数据库，服务器Tomcat。采用Web形式进行开发，开发技术非常的成熟，已经应用到很多的场景种，通过这些技术完全可以实现功能要求，可以完成动态交互，在经济上是可行的。
## 3.3系统性能分析
性能需求一般是指需要的运行环境是否能得到支撑，不管是硬件还是软件上，数据存储容量和缓冲文件能否得到要求。硬件设备上一般的电脑、手机处理器都可以满足开发要求，处理内存2G以上，硬盘容量120G以上。系统运行过程中可以直接独立运行，不需要依赖其他的环境软件，有很好的兼容性。
## 3.4其他需求分析
主要还要考虑系统的可维护性，就是后期的维护成本高不高，可理解性，就是用户能不能轻松掌握使用的方法，然后进行系统的各种操作。在各种要求都得到满足的情况下，来开发完成本次系统。
## 3.5系统功能分析
本系统的使用角色为管理员、商家和用户、配送员，管理员可以管理菜品信息、订单信息、商家信息、用户信息、配送信息等。管理员用例图如下图3.1所示：

![](/md/blog.001.png)

图3.1管理员用例图

用户可以浏览菜品、商家，在线订餐和查询配送情况，管理订单等，用户用例图如下图3.2所示：

![](/md/blog.002.png)

图3.2用户用例图

商家可以管理菜品信息和订单信息并查询配送情况，商家用例图如下图3.3所示：

![](/md/blog.003.png)

图3.3商家用例图

配送员可以在线接单和管理配送信息。配送员用例图如下图3.4所示：

![](/md/blog.004.png)

图3.4配送员用例图
## 3.6系统业务流程分析
本系统的流程为商家添加菜品信息、管理员审核菜品、用户购买菜品、商家管理用户订单，配送员完成配送、用户管理订单以及管理员审核订单等。本系统的业务流程图如下图3.5所示：

![](/md/blog.005.png)

图3.5系统业务流程图








# 第4章 系统设计
## 4.1系统设计原则
系统详细设计也是很重要的一步，设计的质量高低也决定了程序最终的质量，所以首先要进行系统的合理化详细设计，然后还有读懂理解透彻这个程序的设计规划，这样编写代码的时候才不会出现错误，还要检验逻辑是否正确，性能是否满足用户需求，还要看是否容易理解，是否方便操作，要把所有需要考虑的问题都设计好，这样编写代码的时候才能更省事。

开发一个成功的系统首先要有一个明确的定位，就是开发这个系统的目的，然后确定系统的具体实施功能，具体需要投入的费用，然后进行市场可行性分析，最终确定系统是否可行，然后才能开展下一步的工作。只有经过了详细的前期调研，才能避免在系统开发中出现的很多其他问题，保障系统顺利开发进行。所以说一个成功的系统，首先必须方案思路正确，然后在根据需求设计对应的数据结构，开发环境，网络架构，然后构成一个完整的系统，只有这样才能使系统发挥更大的用处。
## 4.2系统功能结构设计
本系统的功能结构为用户界面、管理员界面和商家界面、配送员界面，不同角色负责的功能不同，对系统的功能设计采用系统功能结构图进行展示。本系统的功能结构图如下图4.1所示：

![](/md/blog.006.png)图4.1系统功能结构图
## 4.3系统数据库设计
### 4.3.1数据库逻辑结构设计
逻辑结构设计就是数据库的一个概念模型，然后转换成数据库管理系统的一个模型，主要先建立单独的数据库ER模型，然后在把这些单独的模型整合起来，成为一个整体的数据库关系模型，然后还有整合各个数据之间的关系熟悉，关键字，还有数据结构和文件结构，通过建立的这些相互关系，从而形成一个完整的数据库关系视图。而逻辑结构设计阶段一般要分为以下几个方面执行，首先是关系模型的转换方面，要将各个数据之间的实体关系，实体熟悉之间的联系进行关联起来，然后还有解决命名问题，每个数据都有自己的专属名称，可以采用原先的名称，也可以重新命名，前提是不能重复就行，其次就是还有把数据的非原子属性进行横向和纵向进行展开。其次我们还要进行数据结构的优化，这样才能保证数据的查询速度，保证系统的流畅运行。最后就是用户权限之间的关系视图设计，因为每个系统有不同的权限用户，所以要建立不同的关系视图，这样才能保证不同用户访问的时候，访问的数据不同，根据用户不同的需求进行单独访问，这样从而保障了数据的安全性，所以不同的数据结构之间要保持一定的数据逻辑独立性。

本系统的实体主要为菜品信息、订单信息、用户信息、管理员信息、配送信息等。

1. 管理员信息的ER图如下图4.2所示：

![](/md/blog.007.png)

图4.2管理员信息ER图

1. 菜品信息ER图如下图4.3所示：

![](/md/blog.008.png)

图4.3菜品信息ER图

（3）订单信息ER图如下图4.4所示：

![](/md/blog.009.png)

图4.4订单信息ER图

（4）配送信息ER图如下图4.5所示：

![](/md/blog.010.png)

图4.5配送信息ER图

`     `（5）用户信息ER图如下图4.6所示：

![](/md/blog.011.png)

图4.5用户信息ER图

（6）系统关系ER图如下图4.6所示：

![](/md/blog.012.png)

图4.6系统关系ER图
### 4.3.2数据库表设计
`   `数据库表是数据库的核心部分，把相同属性的实体设计到一个表，表与表之间进行联系就可以实现数据的正确调用。本系统的数据库表有管理员信息表、菜品信息表、订单信息表、商家信息表等。本系统的数据库表具体如下表4.1-4.12所示：



表4.1 caipinfenlei

![](/md/blog.013.png)

表4.2 caipinxinxi

![](/md/blog.014.png)

表4.3 config

![](/md/blog.015.png)

表4.4 dingdanpeisong

![](/md/blog.016.png)

表4.5 dingdanxinxi

![](/md/blog.017.png)

表4.6 discusscaipinxinxi

![](/md/blog.018.png)

表4.7 peisongwancheng

![](/md/blog.019.png)


表4.8 peisongyuan

![](/md/blog.020.png)

表4.9 shangjia

![](/md/blog.021.png)

表4.10 token

![](/md/blog.022.png)

表4.11 users

![](/md/blog.023.png)

表4.12 yonghu

![](/md/blog.024.png)







# 第5章 系统实现
## 5.1用户登录功能的界面实现
本系统中可以保证安全的功能就是用户登录功能，登录可以验证用户的身份，用户可以注册，当密码忘记后也可以通过忘记密码功能进行找回。在用户登录界面里采用上中下的方式进行设计。在上设计的是功能的名称，在中设计的是账号和密码的输入框，在下设计的是用户注册和忘记密码功能。用户登录功能的实现界面如下图5.1所示：

![](/md/blog.025.png)

图5.1用户登录功能的实现界面
## 5.2用户注册功能的实现界面
`    `本功能设计的目的是帮助游客在线订餐。用户和配送员都可以注册。在注册时需要设置账号和密码。用户注册功能的实现界面如下图5.2所示：

![](/md/blog.026.png)

图5.2用户注册功能的实现界面
## 5.3首页功能的设计实现
用户登录后可进入首页，在首页里可以看到商家信息和菜品信息，可以进行菜品搜索和购买。首页功能的实现界面如下图5.3所示：

![](/md/blog.027.png)

图5.3首页界面的实现
### 5.3.1用户信息管理功能的实现界面
用户可以修改自己注册时填写的资料，可以设置头像以及手机号。用户信息管理功能的实现界面如下图5.4所示：

![](/md/blog.028.png)

图5.4用户信息管理功能的实现界面
### 5.3.2菜品功能的实现界面
用户可以浏览菜品信息，也可以根据菜品的名称进行搜索，菜品信息可以看到图片和价格，菜品信息的实现界面如下图5.5所示：

![](/md/blog.029.png)

图5.5菜品功能的实现界面
### 5.3.3菜品分类功能的实现界面
用户可以在前台浏览菜品的所有分类，也可以搜索菜品分类。菜品分类功能的实现界面如下图5.6所示：

![](/md/blog.030.png)

图5.6菜品分类功能的实现界面
### 5.3.4立即订购功能的实现界面
用户在前台选择喜欢的菜品后可以立即订购，在订购时需要选择地址，立即订购功能的实现界面如下图5.7所示：

![](/md/blog.031.png)

图5.7立即订购功能的实现界面
### 5.3.5我的功能的实现界面
在我的功能里，用户可以管理订单信息，进行订单配送查询和查询配送完成的订单。我的功能实现界面如下图5.8所示：

![](/md/blog.032.png)

图5.8我的功能实现界面
## 5.4商家权限的功能实现
商家可以管理菜品信息和订单信息，可以管理配送订单和查询已完成的所有配送。商家权限的功能实现界面如下图5.9所示：

![](/md/blog.033.png)

图5.9商家权限功能的实现界面
## 5.5管理员权限的功能实现
管理员可以管理菜品分类、菜品信息、订单信息、用户信息、商家信息、配送员信息等。管理员权限的功能实现界面如下图5.10所示：

![](/md/blog.034.png)

图5.10管理员权限的功能实现界面
## 5.6配送员权限的功能实现
`    `配送员可以查询订单和进行接单并完成配送。配送员角色的功能实现界面如下图5.11所示：

![](/md/blog.035.png)

图5.11配送员权限的功能实现界面








# 系统测试










