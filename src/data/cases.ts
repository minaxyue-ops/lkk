export interface CaseItem {
  id: string;
  title: string;
  brand: string;
  industry: string;
  service: string;
  clientType: string;
  description: string;
  image: string;
  logoType?: string;
}

export const INDUSTRIES = [
  '全部',
  '机器人',
  '智能3C',
  '智能家电',
  '智能医疗',
  '智能装备',
  '智能能源',
  '智能交通',
  '食品酒饮',
  '宠物经济',
  '文化创意',
  '家居鞋服',
  '大健康',
  '连锁零售',
  '美妆个护',
  '综合行业'
];

export const SERVICES = [
  '全部',
  '三品合一类创新咨询',
  '产品创新0-1全案咨询',
  '品牌创新0-1全案咨询',
  '产品创新',
  '品牌创新'
];

export const CLIENT_TYPES = [
  '全部',
  '行业头部企业',
  '独角兽企业',
  '知名国企/央企',
  '上市企业',
  '500强企业',
  '专精特新企业',
  '国家重点项目',
  '其他'
];

// High quality curated case assets list
const IMAGES = [
  'https://github.com/minaxyue-ops/MINA/releases/download/1/7.15.1.3.gif',
  'https://github.com/minaxyue-ops/MINA/releases/download/1/liangpin.jpg',
  'https://github.com/minaxyue-ops/MINA/releases/download/1/gugong.jpg',
  'https://github.com/minaxyue-ops/MINA/releases/download/1/xiaozhi.jpg',
  'https://github.com/minaxyue-ops/MINA/releases/download/1/sizherui.jpg',
  'https://github.com/minaxyue-ops/MINA/releases/download/1/aisidun.jpg',
  'https://github.com/minaxyue-ops/MINA/releases/download/1/image.33.png',
  'https://github.com/minaxyue-ops/MINA/releases/download/1/image.35.png',
  'https://github.com/minaxyue-ops/MINA/releases/download/1/image.36.png',
  'https://github.com/minaxyue-ops/MINA/releases/download/1/image.37.png',
  'https://github.com/minaxyue-ops/MINA/releases/download/1/image.39.png',
  '/src/assets/images/case_pophie.jpg',
  '/src/assets/images/case_jingkelong.jpg',
  '/src/assets/images/lkk_coffee_mockup_1783302972120.jpg',
  '/src/assets/images/lkk_humanoid_robot_1783302961282.jpg',
  '/src/assets/images/lkk_cosmetics_jars_1783302947995.jpg'
];

// Standard core cases (Featured)
const CORE_CASES: CaseItem[] = [
  {
    id: 'case-v2-1',
    brand: '悦鲜活',
    title: '悦鲜活年轻化产品包装创新咨询设计',
    industry: '食品酒饮',
    service: '产品创新0-1全案咨询',
    clientType: '行业头部企业',
    description: '打造差异化视觉识别，通过超瞬时杀菌技术、0.09s黄金保鲜视觉叙事，助力高端鲜乳品牌抢占年轻主流消费市场。',
    image: 'https://github.com/minaxyue-ops/MINA/releases/download/1/7.15.1.3.gif',
    logoType: 'yuexianhuo'
  },
  {
    id: 'case-v2-2',
    brand: '良品铺子',
    title: '良品铺子产品包装创新咨询设计',
    industry: '食品酒饮',
    service: '品牌创新0-1全案咨询',
    clientType: '上市企业',
    description: '从线下走到线上的零食新零售，打造全渠道高辨识度爆品包装与休闲食光品牌视觉系统。',
    image: 'https://github.com/minaxyue-ops/MINA/releases/download/1/liangpin.jpg',
    logoType: 'jingkelong'
  },
  {
    id: 'case-v2-3',
    brand: '故宫博物院',
    title: '故宫博物院"故宫猫"IP形象打造&景区文创产品创新咨询设计',
    industry: '文化创意',
    service: '品牌创新',
    clientType: '知名国企/央企',
    description: '幽幽宫殿，一猫当家。赋能宫廷文化符号年轻化，重塑故宫景区文创品类商业价值。',
    image: 'https://github.com/minaxyue-ops/MINA/releases/download/1/gugong.jpg',
    logoType: 'pophie'
  },
  {
    id: 'case-v2-4',
    brand: '艾肯',
    title: '艾肯智能净饮机"小智"产品创新咨询设计',
    industry: '家居家电',
    service: '产品创新',
    clientType: '500强企业',
    description: '全新的操作方式与无缝集成水路技术，让小智具有极强辨识度与卓越的品牌美誉度。',
    image: 'https://github.com/minaxyue-ops/MINA/releases/download/1/xiaozhi.jpg',
    logoType: 'cotti'
  },
  {
    id: 'case-v2-5',
    brand: '思哲睿',
    title: '思哲睿康多手术机器人产品创新咨询设计',
    industry: '医疗健康',
    service: '产品创新',
    clientType: '独角兽企业',
    description: '集工业设计美学、高精尖临床需求与卓越稳定性能于一体，打破国外高端医疗设备垄断。',
    image: 'https://github.com/minaxyue-ops/MINA/releases/download/1/sizherui.jpg',
    logoType: 'sizherui'
  },
  {
    id: 'case-v2-6',
    brand: '埃斯顿',
    title: '埃斯顿ED3S系列伺服驱动器产品创新咨询设计',
    industry: '工业装备',
    service: '产品创新',
    clientType: '上市企业',
    description: '全面赋能工业自动化运动控制领域升级，打造家族化模块装配与高防护压铸箱体美学。',
    image: 'https://github.com/minaxyue-ops/MINA/releases/download/1/aisidun.jpg',
    logoType: 'estun'
  },
  {
    id: 'musinno',
    brand: '慢阶',
    title: '慢阶「演奏家一号」音乐设备',
    industry: '文化创意',
    service: '三品合一类创新咨询',
    clientType: '专精特新企业',
    description: '全球首款具有工作站属性的乐谱台，打破传统边界，荣获 2023 年德国红点至尊奖。',
    image: '/src/assets/images/musinno_hero_banner_1785826677156.jpg',
    logoType: 'pophie'
  },
  {
    id: 'case-1',
    brand: '糯宝 Pophie',
    title: '糯宝 (Pophie) 类生命体情感陪伴机器人',
    industry: '机器人',
    service: '三品合一类创新咨询',
    clientType: '独角兽企业',
    description: '三品合一，打造类生命体情感陪伴机器人。融合AI算法、温润触感材料与拟人化微表情。',
    image: '/src/assets/images/case_pophie.jpg',
    logoType: 'pophie'
  },
  {
    id: 'case-2',
    brand: '京客隆',
    title: '京客隆品牌战略咨询&爆品打造',
    industry: '连锁零售',
    service: '品牌创新0-1全案咨询',
    clientType: '上市企业',
    description: '塑造京客隆“食品超市”品类创新概念，从品牌重塑、生鲜体验、全域动线到视觉落地提供系统性服务。',
    image: '/src/assets/images/case_jingkelong.jpg',
    logoType: 'jingkelong'
  },
  {
    id: 'case-3',
    brand: '库迪咖啡',
    title: '库迪品牌战略咨询&爆品打造',
    industry: '食品酒饮',
    service: '品牌创新0-1全案咨询',
    clientType: '独角兽企业',
    description: '塑造库迪“全民咖啡”品类创新概念，助力跨界爆款孵化与包装美学升级，打通商业闭环。',
    image: '/src/assets/images/lkk_coffee_mockup_1783302972120.jpg',
    logoType: 'cotti'
  },
  {
    id: 'case-4',
    brand: '小仙炖',
    title: '小仙炖品类创新全案咨询与包装升级',
    industry: '美妆个护',
    service: '三品合一类创新咨询',
    clientType: '独角兽企业',
    description: '确立“鲜炖燕窝”高端红利赛道，全维度打造冰温、保鲜及精巧包装新品类标杆。',
    image: 'https://github.com/minaxyue-ops/MINA/releases/download/1/image.33.png',
    logoType: 'xiaoxiandun'
  },
  {
    id: 'case-5',
    brand: '海底捞',
    title: '海底捞品类创新全案咨询与便携即食产品',
    industry: '食品酒饮',
    service: '三品合一类创新咨询',
    clientType: '上市企业',
    description: '开辟露营、夜市等多场景便携即食产品，实现海底捞正宗火锅味随时随地即刻享。',
    image: 'https://github.com/minaxyue-ops/MINA/releases/download/1/image.35.png',
    logoType: 'haidilao'
  },
  {
    id: 'case-7',
    brand: '埃斯顿卓丰',
    title: '埃斯顿卓丰双足人形机器人产品创新咨询设计',
    industry: '机器人',
    service: '产品创新0-1全案咨询',
    clientType: '上市企业',
    description: '心有所向，携智然而来。打造拟人化流动线条，内部线束深度整合，融合碳纤维高强度材质。',
    image: 'https://github.com/minaxyue-ops/MINA/releases/download/1/image.39.png',
    logoType: 'estun'
  },
  {
    id: 'case-8',
    brand: '哈工大机器人',
    title: '哈工大智能协作机器人产品创新咨询设计',
    industry: '机器人',
    service: '产品创新',
    clientType: '知名国企/央企',
    description: '立足协作机器人敏捷市场，定义行业工业安全美学新标杆。流线型防夹手关节设计与全彩状态环交互。',
    image: 'https://github.com/minaxyue-ops/MINA/releases/download/1/image.37.png',
    logoType: 'hit'
  }
];

// Generate comprehensive dataset for 160 cases
function generateCasesData(): CaseItem[] {
  const result: CaseItem[] = [...CORE_CASES];
  
  const industryList = INDUSTRIES.filter(i => i !== '全部');
  const serviceList = SERVICES.filter(s => s !== '全部');
  const clientList = CLIENT_TYPES.filter(c => c !== '全部');

  const brandTemplates: { [key: string]: string[] } = {
    '工业装备': ['南瑞集团', '白鹤滩水压', '金陵智造', '三一重工', '徐工集团', '中联重科', '正泰电气', '施耐德电气', '汇川技术', '东方电气'],
    '机器人': ['优必选', '新松机器人', '极智嘉', '石头科技', '云迹科技', '达闼科技', '珞石机器人', '节卡机器人', '追觅科技', '高仙自动化'],
    '新能源': ['极氪能源', '宁德时代', '阳光电源', '隆基绿能', '特来电', '蜂巢能源', '远景能源', '天合光能', '晶科能源', '蔚来能源'],
    '家居家电': ['西门子家电', '海尔智家', '美的集团', '老板电器', '方太集团', '九阳股份', '科沃斯', '松下电器', '苏泊尔', '戴森'],
    '智能3C': ['大疆创新', '漫步者', '联想集团', '小米集团', 'OPPO', 'VIVO', '安克创新', '韶音科技', '极米科技', '雷蛇'],
    '医疗健康': ['迈瑞医疗', '联影医疗', '鱼跃医疗', '微创医疗', '开立医疗', '新华医疗', '威高集团', '东软医疗', '万东医疗', '乐普医疗'],
    '食品酒饮': ['青岛啤酒', '茅台联名', '三只松鼠', '盒马鲜生', '农夫山泉', '元气森林', '伊利股份', '蒙牛乳业', '喜茶', '奈雪的茶'],
    '连锁零售': ['永辉超市', '盒马X会员店', '名创优品', '便利蜂', '罗森便利店', '7-Eleven', '屈臣氏', '无印良品', '迪卡侬', '宜家家居'],
    '美妆个护': ['百雀羚', '茶树妈妈', '珀莱雅', '薇诺娜', '花西子', '完美日记', '自然堂', '相宜本草', '韩束', '毛戈平'],
    '文化创意': ['敦煌研究院', '国家宝藏', '杭州亚运会', '中国航天', '河南卫视', '陕西历史博物馆', '苏州博物馆', '泡泡玛特', '52TOYS', '卡游'],
    '宠物经济': ['Pawup', '未卡Vetreska', '小佩PETKIT', '霍曼Homerun', 'Pidan', '福来恩', '疯狂小狗', '网易严选宠物', '阿飞和巴弟', '怪兽阿美'],
    '生产': ['精工智造', '立讯精密', '领益智造', '歌尔股份', '蓝思科技', '富士康', '长盈精密', '比亚迪电子', '工业富联', '立讯精密'],
    '综合行业': ['洛可可创新', 'LKK设计', '洛客科技', '水滴设计', '创新设计院', '洛可可品牌', '洛可可战略', '洛可可咨询', '洛可可国际', '洛可可集团']
  };

  const actionTemplates = [
    '产品创新咨询与外观落地',
    '品类战略孵化与视觉形象重构',
    '家族化设计语言与CMF工程规范',
    '人机工程学迭代与结构量产落地',
    '年轻化爆品包装与IP联名策划',
    '智能化硬件人机交互与UI设计',
    '品牌全案升级与空间SI展陈设计',
    '极简生态设计与可持续环保材料应用'
  ];

  let idCounter = 10;

  for (const ind of industryList) {
    const brands = brandTemplates[ind] || ['洛可可创新'];
    for (let i = 0; i < brands.length; i++) {
      for (let sIdx = 0; sIdx < serviceList.length; sIdx++) {
        if (result.length >= 160) break;
        
        const brand = brands[i];
        const service = serviceList[sIdx];
        const clientType = clientList[(i + sIdx) % clientList.length];
        const action = actionTemplates[(i * 3 + sIdx) % actionTemplates.length];
        const img = IMAGES[(i * 5 + sIdx * 3) % IMAGES.length];
        
        idCounter++;
        result.push({
          id: `case-gen-${idCounter}`,
          brand,
          title: `${brand}${ind}${service}${action}`,
          industry: ind,
          service,
          clientType,
          description: `基于洛可可品类创新战略，为${brand}量身定制${ind}领域${service}整体解决方案，助力打造市场爆品标杆。`,
          image: img
        });
      }
    }
  }

  return result;
}

export const ALL_CASES: CaseItem[] = generateCasesData();
