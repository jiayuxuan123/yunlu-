const memorialFigures = [
    // 原始数据（第一组）
    {
        id: "yangzhenning",
        name: "杨振宁",
        years: "1922-2025",
        description: "著名华人学者",
        memorialDates: [
            { month: 10, day: 18, type: 'memorial' }
        ],
        bannerStyle: {
            background: "var(--md-sys-color-on-background)",
            color: "var(--md-sys-color-background)"
        },
        bannerText: "沉痛悼念杨振宁先生 1922-2025-10月18日"
    },
    {
        id: "luxun",
        name: "鲁迅",
        years: "1881-1936",
        description: "著名文学家、思想家和无产阶级革命家，中国现代文学的奠基人之一",
        memorialDates: [
            { month: 10, day: 19, type: 'memorial' }
        ],
        bannerStyle: {
            background: "black",
            color: "white"
        },
        bannerText: "沉痛悼念鲁迅先生 1881-1936-10月19日"
    },
    {
        id: "qiansen",
        name: "钱学森",
        years: "1911-2009",
        description: "著名航天科学家，中国航天事业奠基人，被誉为“中国航天之父”“中国导弹之父”",
        memorialDates: [
            { month: 10, day: 31, type: 'memorial' }
        ],
        bannerStyle: {
            background: "black",
            color: "white"
        },
        bannerText: "沉痛悼念钱学森先生 1911-2009-10月31日"
    },
    {
        id: "qiansanqiang",
        name: "钱三强",
        years: "1913-1992",
        description: "核物理学家，中国原子能科学事业的创始人，“两弹一星”功勋奖章获得者，被誉为“中国原子弹之父”",
        memorialDates: [
            { month: 6, day: 28, type: 'memorial' }
        ],
        bannerStyle: {
            background: "black",
            color: "white"
        },
        bannerText: "沉痛悼念钱三强先生 1913-1992-6月28日"
    },
    {
        id: "wangdaheng",
        name: "王大珩",
        years: "1915-2011",
        description: "著名光学科学家和教育学家，“两弹一星”功勋奖章获得者，被誉为“中国光学之父”",
        memorialDates: [
            { month: 7, day: 21, type: 'memorial' }
        ],
        bannerStyle: {
            background: "black",
            color: "white"
        },
        bannerText: "沉痛悼念王大珩先生 1915-2011-7月21日"
    },
    {
        id: "maoyisheng",
        name: "茅以升",
        years: "1896-1989",
        description: "中国桥梁工程的领军者，“中国桥梁工程之父”，他主持修建了钱塘江大桥等",
        memorialDates: [
            { month: 9, day: 26, type: 'memorial' }
        ],
        bannerStyle: {
            background: "black",
            color: "white"
        },
        bannerText: "沉痛悼念茅以升先生 1896-1989-9月26日"
    },
    {
        id: "zhukezhen",
        name: "竺可桢",
        years: "1890-1974",
        description: "“中国气象学之父”，中国现代气象学与地理学的奠基人",
        memorialDates: [
            { month: 2, day: 7, type: 'memorial' }
        ],
        bannerStyle: {
            background: "black",
            color: "white"
        },
        bannerText: "沉痛悼念竺可桢先生 1890-1974-2月7日"
    },
    {
        id: "liangsisheng",
        name: "梁思成",
        years: "1901-1972",
        description: "近代著名建筑学家，中国古建筑保护与建筑教育的先驱",
        memorialDates: [
            { month: 4, day: 1, type: 'memorial' }
        ],
        bannerStyle: {
            background: "black",
            color: "white"
        },
        bannerText: "沉痛悼念梁思成先生 1901-1972-4月1日"
    },
    {
        id: "yuanlongping",
        name: "袁隆平",
        years: "1930-2021",
        description: "“杂交水稻之父”，致力于杂交水稻研究，为解决全球粮食问题作出巨大贡献",
        memorialDates: [
            { month: 5, day: 22, type: 'memorial' }
        ],
        bannerStyle: {
            background: "black",
            color: "white"
        },
        bannerText: "沉痛悼念袁隆平先生 1930-2021-5月22日"
    },
    {
        id: "nanrendong",
        name: "南仁东",
        years: "1945-2017",
        description: "“中国天眼之父”，负责500米口径球面射电望远镜（FAST）的建设",
        memorialDates: [
            { month: 9, day: 15, type: 'memorial' }
        ],
        bannerStyle: {
            background: "black",
            color: "white"
        },
        bannerText: "沉痛悼念南仁东先生 1945-2017-9月15日"
    },
    {
        id: "huangxuhua",
        name: "黄旭华",
        years: "1926-2025-2月6日",
        description: "核潜艇总设计师，带领团队突破核潜艇七大核心技术，实现中国水下核力量“从无到有”",
        memorialDates: [
            { month: 2, day: 6, type: 'memorial' }
        ],
        bannerStyle: {
            background: "black",
            color: "white"
        },
        bannerText: "沉痛悼念黄旭华先生 1926-2025-2月6日"
    },
    {
        id: "zhouenlai",
        name: "周恩来",
        years: "1898-1976",
        description: "伟大的无产阶级革命家、政治家、军事家、外交家，中国人民解放军主要创建人之一，中华人民共和国的开国元勋",
        memorialDates: [
            { month: 1, day: 8, type: 'memorial' }
        ],
        bannerStyle: {
            background: "black",
            color: "white"
        },
        bannerText: "沉痛悼念周恩来总理 1898-1976-1月8日"
    },
    {
        id: "maozedong",
        name: "毛泽东",
        years: "1893-1976",
        description: "中国共产党、中国人民解放军和中华人民共和国的主要缔造者和领导人，伟大的马克思主义者，伟大的无产阶级革命家、战略家、理论家",
        memorialDates: [
            { month: 9, day: 9, type: 'memorial' }
        ],
        bannerStyle: {
            background: "black",
            color: "white"
        },
        bannerText: "沉痛悼念毛泽东主席 1893-1976-9月9日"
    },
    {
        id: "zhude",
        name: "朱德",
        years: "1886-1976",
        description: "伟大的无产阶级革命家、政治家、军事家，中国人民解放军的主要缔造者之一，中华人民共和国的开国元勋",
        memorialDates: [
            { month: 7, day: 6, type: 'memorial' }
        ],
        bannerStyle: {
            background: "black",
            color: "white"
        },
        bannerText: "沉痛悼念朱德委员长 1886-1976-7月6日"
    },
    {
        id: "dengxiaoping",
        name: "邓小平",
        years: "1904-1997",
        description: "中国社会主义改革开放和现代化建设的总设计师，建设有中国特色社会主义理论的创立者",
        memorialDates: [
            { month: 2, day: 19, type: 'memorial' }
        ],
        bannerStyle: {
            background: "black",
            color: "white"
        },
        bannerText: "沉痛悼念邓小平同志 1904-1997-2月19日"
    },
    {
        id: "liushaoqi",
        name: "刘少奇",
        years: "1898-1969",
        description: "中国杰出的革命家、政治家和理论家，中国共产党和中华人民共和国的主要领导人之一",
        memorialDates: [
            { month: 11, day: 12, type: 'memorial' }
        ],
        bannerStyle: {
            background: "black",
            color: "white"
        },
        bannerText: "沉痛悼念刘少奇同志 1898-1969-11月12日"
    },
    // 第二组数据（新增）
    {
        id: "banvtoujiang",
        name: "八女投江",
        years: "1938",
        description: "集体牺牲",
        memorialDates: [
            { month: 10, day: 12, type: 'memorial' }
        ],
        bannerStyle: {
            background: "black",
            color: "white"
        },
        bannerText: "沉痛悼念八女投江烈士 1938-10月12日"
    },
    {
        id: "yuhuahe",
        name: "于化虎",
        years: "1944",
        description: "抗日英雄",
        memorialDates: [
            { month: 7, day: 27, type: 'memorial' }
        ],
        bannerStyle: {
            background: "black",
            color: "white"
        },
        bannerText: "沉痛悼念于化虎烈士 1944-7月27日"
    },
    {
        id: "xiaoyedan",
        name: "小叶丹",
        years: "1942",
        description: "彝族首领",
        memorialDates: [
            { month: 6, day: 18, type: 'memorial' }
        ],
        bannerStyle: {
            background: "black",
            color: "white"
        },
        bannerText: "沉痛悼念小叶丹 1942-6月18日"
    },
    {
        id: "mabenzhai",
        name: "马本斋",
        years: "1944",
        description: "回民支队司令",
        memorialDates: [
            { month: 2, day: 7, type: 'memorial' }
        ],
        bannerStyle: {
            background: "black",
            color: "white"
        },
        bannerText: "沉痛悼念马本斋将军 1944-2月7日"
    },
    {
        id: "fangzhimin",
        name: "方志敏",
        years: "1935",
        description: "革命家",
        memorialDates: [
            { month: 8, day: 6, type: 'memorial' }
        ],
        bannerStyle: {
            background: "black",
            color: "white"
        },
        bannerText: "沉痛悼念方志敏烈士 1935-8月6日"
    },
    {
        id: "maozemin",
        name: "毛泽民",
        years: "1943",
        description: "毛泽东之弟",
        memorialDates: [
            { month: 9, day: 27, type: 'memorial' }
        ],
        bannerStyle: {
            background: "black",
            color: "white"
        },
        bannerText: "沉痛悼念毛泽民烈士 1943-9月27日"
    },
    {
        id: "maozetan",
        name: "毛泽覃",
        years: "1935",
        description: "毛泽东之弟",
        memorialDates: [
            { month: 4, day: 25, type: 'memorial' }
        ],
        bannerStyle: {
            background: "black",
            color: "white"
        },
        bannerText: "沉痛悼念毛泽覃烈士 1935-4月25日"
    },
    {
        id: "wangerzuo",
        name: "王尔琢",
        years: "1928",
        description: "红军将领",
        memorialDates: [
            { month: 8, day: 25, type: 'memorial' }
        ],
        bannerStyle: {
            background: "black",
            color: "white"
        },
        bannerText: "沉痛悼念王尔琢烈士 1928-8月25日"
    },
    {
        id: "wangjinmei",
        name: "王尽美",
        years: "1925",
        description: "中共创始人",
        memorialDates: [
            { month: 8, day: 19, type: 'memorial' }
        ],
        bannerStyle: {
            background: "black",
            color: "white"
        },
        bannerText: "沉痛悼念王尽美烈士 1925-8月19日"
    },
    {
        id: "dengenming",
        name: "邓恩铭",
        years: "1931",
        description: "中共一大代表",
        memorialDates: [
            { month: 4, day: 5, type: 'memorial' }
        ],
        bannerStyle: {
            background: "black",
            color: "white"
        },
        bannerText: "沉痛悼念邓恩铭烈士 1931-4月5日"
    },
    {
        id: "zuoquan",
        name: "左权",
        years: "1942",
        description: "八路军副参谋长",
        memorialDates: [
            { month: 5, day: 25, type: 'memorial' }
        ],
        bannerStyle: {
            background: "black",
            color: "white"
        },
        bannerText: "沉痛悼念左权将军 1942-5月25日"
    },
    {
        id: "baiqiuen",
        name: "白求恩",
        years: "1939",
        description: "加拿大医生",
        memorialDates: [
            { month: 11, day: 12, type: 'memorial' }
        ],
        bannerStyle: {
            background: "black",
            color: "white"
        },
        bannerText: "沉痛悼念白求恩大夫 1939-11月12日"
    },
    {
        id: "liuzhidan",
        name: "刘志丹",
        years: "1936",
        description: "红军将领",
        memorialDates: [
            { month: 4, day: 14, type: 'memorial' }
        ],
        bannerStyle: {
            background: "black",
            color: "white"
        },
        bannerText: "沉痛悼念刘志丹烈士 1936-4月14日"
    },
    {
        id: "liuhulan",
        name: "刘胡兰",
        years: "1947",
        description: "少年英雄",
        memorialDates: [
            { month: 1, day: 12, type: 'memorial' }
        ],
        bannerStyle: {
            background: "black",
            color: "white"
        },
        bannerText: "沉痛悼念刘胡兰烈士 1947-1月12日"
    },
    {
        id: "jihongchang",
        name: "吉鸿昌",
        years: "1934",
        description: "抗日将领",
        memorialDates: [
            { month: 11, day: 24, type: 'memorial' }
        ],
        bannerStyle: {
            background: "black",
            color: "white"
        },
        bannerText: "沉痛悼念吉鸿昌将军 1934-11月24日"
    },
    {
        id: "xiangjingyu",
        name: "向警予",
        years: "1928",
        description: "妇女运动领袖",
        memorialDates: [
            { month: 5, day: 1, type: 'memorial' }
        ],
        bannerStyle: {
            background: "black",
            color: "white"
        },
        bannerText: "沉痛悼念向警予烈士 1928-5月1日"
    },
    {
        id: "zhurui",
        name: "朱瑞",
        years: "1948",
        description: "炮兵之父",
        memorialDates: [
            { month: 10, day: 1, type: 'memorial' }
        ],
        bannerStyle: {
            background: "black",
            color: "white"
        },
        bannerText: "沉痛悼念朱瑞将军 1948-10月1日"
    },
    {
        id: "jiangzhuyun",
        name: "江竹筠",
        years: "1949",
        description: "江姐",
        memorialDates: [
            { month: 11, day: 14, type: 'memorial' }
        ],
        bannerStyle: {
            background: "black",
            color: "white"
        },
        bannerText: "沉痛悼念江竹筠烈士 1949-11月14日"
    },
    {
        id: "lidaizhao",
        name: "李大钊",
        years: "1927",
        description: "革命先驱",
        memorialDates: [
            { month: 4, day: 28, type: 'memorial' }
        ],
        bannerStyle: {
            background: "black",
            color: "white"
        },
        bannerText: "沉痛悼念李大钊烈士 1927-4月28日"
    },
    {
        id: "ligongpu",
        name: "李公朴",
        years: "1946",
        description: "民主战士",
        memorialDates: [
            { month: 7, day: 12, type: 'memorial' }
        ],
        bannerStyle: {
            background: "black",
            color: "white"
        },
        bannerText: "沉痛悼念李公朴先生 1946-7月12日"
    },
    {
        id: "lizhaolin",
        name: "李兆麟",
        years: "1946",
        description: "抗联将领",
        memorialDates: [
            { month: 3, day: 9, type: 'memorial' }
        ],
        bannerStyle: {
            background: "black",
            color: "white"
        },
        bannerText: "沉痛悼念李兆麟将军 1946-3月9日"
    },
    {
        id: "yangkaihui",
        name: "杨开慧",
        years: "1930",
        description: "毛泽东夫人",
        memorialDates: [
            { month: 11, day: 14, type: 'memorial' }
        ],
        bannerStyle: {
            background: "black",
            color: "white"
        },
        bannerText: "沉痛悼念杨开慧烈士 1930-11月14日"
    },
    {
        id: "yanghucheng",
        name: "杨虎城",
        years: "1949",
        description: "西安事变主角",
        memorialDates: [
            { month: 9, day: 6, type: 'memorial' }
        ],
        bannerStyle: {
            background: "black",
            color: "white"
        },
        bannerText: "沉痛悼念杨虎城将军 1949-9月6日"
    },
    {
        id: "yangjingyu",
        name: "杨靖宇",
        years: "1940",
        description: "抗联英雄",
        memorialDates: [
            { month: 2, day: 23, type: 'memorial' }
        ],
        bannerStyle: {
            background: "black",
            color: "white"
        },
        bannerText: "沉痛悼念杨靖宇将军 1940-2月23日"
    },
    {
        id: "chenyannian",
        name: "陈延年",
        years: "1927",
        description: "陈独秀之子",
        memorialDates: [
            { month: 7, day: 4, type: 'memorial' }
        ],
        bannerStyle: {
            background: "black",
            color: "white"
        },
        bannerText: "沉痛悼念陈延年烈士 1927-7月4日"
    },
    {
        id: "chenshuxiang",
        name: "陈树湘",
        years: "1934",
        description: "红军师长",
        memorialDates: [
            { month: 12, day: 18, type: 'memorial' }
        ],
        bannerStyle: {
            background: "black",
            color: "white"
        },
        bannerText: "沉痛悼念陈树湘烈士 1934-12月18日"
    },
    {
        id: "xianxinghai",
        name: "冼星海",
        years: "1945",
        description: "作曲家",
        memorialDates: [
            { month: 10, day: 30, type: 'memorial' }
        ],
        bannerStyle: {
            background: "black",
            color: "white"
        },
        bannerText: "沉痛悼念冼星海先生 1945-10月30日"
    },
    {
        id: "zhouyiqun",
        name: "周逸群",
        years: "1931",
        description: "红军将领",
        memorialDates: [
            { month: 5, day: 20, type: 'memorial' }
        ],
        bannerStyle: {
            background: "black",
            color: "white"
        },
        bannerText: "沉痛悼念周逸群烈士 1931-5月20日"
    },
    {
        id: "luoyinong",
        name: "罗亦农",
        years: "1928",
        description: "早期领导人",
        memorialDates: [
            { month: 4, day: 21, type: 'memorial' }
        ],
        bannerStyle: {
            background: "black",
            color: "white"
        },
        bannerText: "沉痛悼念罗亦农烈士 1928-4月21日"
    },
    {
        id: "zhaoyiman",
        name: "赵一曼",
        years: "1936",
        description: "抗联女英雄",
        memorialDates: [
            { month: 8, day: 2, type: 'memorial' }
        ],
        bannerStyle: {
            background: "black",
            color: "white"
        },
        bannerText: "沉痛悼念赵一曼烈士 1936-8月2日"
    },
    {
        id: "zhaoshiyan",
        name: "赵世炎",
        years: "1927",
        description: "早期领导人",
        memorialDates: [
            { month: 7, day: 19, type: 'memorial' }
        ],
        bannerStyle: {
            background: "black",
            color: "white"
        },
        bannerText: "沉痛悼念赵世炎烈士 1927-7月19日"
    },
    {
        id: "zhaoshangzhi",
        name: "赵尚志",
        years: "1942",
        description: "抗联将领",
        memorialDates: [
            { month: 2, day: 12, type: 'memorial' }
        ],
        bannerStyle: {
            background: "black",
            color: "white"
        },
        bannerText: "沉痛悼念赵尚志将军 1942-2月12日"
    },
    {
        id: "zhaodengyu",
        name: "赵登禹",
        years: "1937",
        description: "抗日将领",
        memorialDates: [
            { month: 7, day: 28, type: 'memorial' }
        ],
        bannerStyle: {
            background: "black",
            color: "white"
        },
        bannerText: "沉痛悼念赵登禹将军 1937-7月28日"
    },
    {
        id: "wenyiduo",
        name: "闻一多",
        years: "1946",
        description: "民主战士",
        memorialDates: [
            { month: 7, day: 15, type: 'memorial' }
        ],
        bannerStyle: {
            background: "black",
            color: "white"
        },
        bannerText: "沉痛悼念闻一多先生 1946-7月15日"
    },
    {
        id: "xiaminghan",
        name: "夏明翰",
        years: "1928",
        description: "革命诗人",
        memorialDates: [
            { month: 3, day: 20, type: 'memorial' }
        ],
        bannerStyle: {
            background: "black",
            color: "white"
        },
        bannerText: "沉痛悼念夏明翰烈士 1928-3月20日"
    },
    {
        id: "nieer",
        name: "聂耳",
        years: "1935",
        description: "作曲家",
        memorialDates: [
            { month: 7, day: 17, type: 'memorial' }
        ],
        bannerStyle: {
            background: "black",
            color: "white"
        },
        bannerText: "沉痛悼念聂耳先生 1935-7月17日"
    },
    {
        id: "pengxuefeng",
        name: "彭雪枫",
        years: "1944",
        description: "新四军将领",
        memorialDates: [
            { month: 9, day: 11, type: 'memorial' }
        ],
        bannerStyle: {
            background: "black",
            color: "white"
        },
        bannerText: "沉痛悼念彭雪枫将军 1944-9月11日"
    },
    {
        id: "dongzhentang",
        name: "董振堂",
        years: "1937",
        description: "红军将领",
        memorialDates: [
            { month: 1, day: 20, type: 'memorial' }
        ],
        bannerStyle: {
            background: "black",
            color: "white"
        },
        bannerText: "沉痛悼念董振堂将军 1937-1月20日"
    },
    {
        id: "xiezichang",
        name: "谢子长",
        years: "1935",
        description: "陕北红军",
        memorialDates: [
            { month: 2, day: 21, type: 'memorial' }
        ],
        bannerStyle: {
            background: "black",
            color: "white"
        },
        bannerText: "沉痛悼念谢子长烈士 1935-2月21日"
    },
    {
        id: "quqiubai",
        name: "瞿秋白",
        years: "1935",
        description: "早期领导人",
        memorialDates: [
            { month: 6, day: 18, type: 'memorial' }
        ],
        bannerStyle: {
            background: "black",
            color: "white"
        },
        bannerText: "沉痛悼念瞿秋白烈士 1935-6月18日"
    }
];