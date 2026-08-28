export interface ServiceCategory {
  id: string;
  name: string;
  description: string;
}

export interface ProfessionalService {
  id: string;
  category: string;
  title: string;
  bullets: string[];
  image?: string;
}

export interface CaseStudy {
  id: string;
  title: string;
  description: string;
  image?: string;
  logoType?: 'jingkelong' | 'cotti' | 'haidilao' | 'pophie' | 'xiaoxiandun' | 'sizherui' | 'estun' | 'hit' | 'yuexianhuo';
}

export interface NewsArticle {
  id: string;
  title: string;
  date: string;
  description: string;
  image: string;
}

export const SERVICE_CATEGORIES: ServiceCategory[] = [
  // 科技类 (7个)
  { id: '1', name: '机器人', description: '智联万物，创建体验新生态' },
  { id: '2', name: '智能3C', description: '数码科技，极智终端创新' },
  { id: '3', name: '智能家电', description: '科技赋能，重构智慧家居生活' },
  { id: '4', name: '智能医疗', description: '专业赋能，守护生命健康品质' },
  { id: '5', name: '智能装备', description: '智能革新，引领高端制造升级' },
  { id: '6', name: '智能能源', description: '绿色低碳，联动新能源未来' },
  { id: '7', name: '智能交通', description: '智慧出行，定义未来交通体验' },
  // 消费类 (7个)
  { id: '8', name: '食品酒饮', description: '爆品打造，焕新消费餐饮场景' },
  { id: '9', name: '宠物经济', description: '品类创新，赋能造物新生态' },
  { id: '10', name: '文化创意', description: '科技美学，点亮文创智慧生活' },
  { id: '11', name: '家居鞋服', description: '时尚美学，重塑品质生活方式' },
  { id: '12', name: '大健康', description: '预防养生，全周期健康管理' },
  { id: '13', name: '连锁零售', description: '业态重构，打造终端沉浸体验' },
  { id: '14', name: '美妆个护', description: '极致审美，塑造时尚美学品牌' },
];

export const NEWS_ARTICLES: NewsArticle[] = [
  {
    id: 'news-1',
    title: '风起势至，共赢未来 | 品类突围·AI',
    date: '2023年5月30日，以“品类突围·AI”',
    description: '洛可可创新设计集团在20周年盛典上正式发布新一代品类战略与AI设计智能助手，深度探讨数字化时代的品牌价值重塑。',
    image: '/src/assets/images/news_1.jpg'
  },
  {
    id: 'news-2',
    title: '设计国补 | 北京企业最高获20W！',
    date: '北京市经信局重磅福利来袭——6月11日...',
    description: '工业设计服务券申领全面开启！最高可享20万元国家补贴。洛可可作为国家级工业设计中心，全流程协助申报。',
    image: '/src/assets/images/news_2.jpg'
  },
  {
    id: 'news-3',
    title: '洛可可20周年，贾伟：创造不可能',
    date: '不久之前，洛可可的创始人贾伟在上海西岸艺...',
    description: '在20周年的分享会上，贾伟先生动情回顾了洛可可从一间小办公室成长为全球化咨询设计集团的历程，并展望洛可可的AI新纪元。',
    image: '/src/assets/images/news_3.jpg'
  }
];

export const PROFESSIONAL_SERVICES: ProfessionalService[] = [
  {
    id: 'service-1',
    category: 'Category Innovation',
    title: '品类创新咨询',
    image: 'https://github.com/minaxyue-ops/MINA/releases/download/1/Group.73.1.png',
    bullets: [
      '三品合一品类创新咨询',
      '产品创新0-1全案咨询',
      '品牌创新0-1全案咨询'
    ]
  },
  {
    id: 'service-2',
    category: 'Product innovation',
    title: '产品设计',
    image: 'https://github.com/minaxyue-ops/MINA/releases/download/1/Group.73.2.png',
    bullets: [
      '工业设计',
      '结构设计',
      '生产落地'
    ]
  },
  {
    id: 'service-3',
    category: 'Innovation',
    title: '品牌设计',
    image: 'https://github.com/minaxyue-ops/MINA/releases/download/1/Group.73.3.png',
    bullets: [
      '全案设计',
      '包装设计',
      'IP设计'
    ]
  }
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'case-1',
    title: '糯宝 (Pophie) 类生命体情感陪伴机器人',
    description: '三品合一，打造类生命体情感陪伴机器人。融合AI算法、温润触感材料与拟人化微表情，开启家庭温情互动新纪元。',
    logoType: 'pophie'
  },
  {
    id: 'case-2',
    title: '京客隆品牌战略咨询&爆品打造',
    description: '塑造京客隆“食品超市”品类创新概念，从品牌重塑、生鲜体验、全域动线到视觉落地提供系统性创新服务。',
    logoType: 'jingkelong'
  },
  {
    id: 'case-3',
    title: '库迪品牌战略咨询&爆品打造',
    description: '塑造库迪“全民咖啡”品类创新概念，助力跨界爆款孵化与包装美学升级，打通从战略到落地的商业闭环。',
    logoType: 'cotti'
  },
  {
    id: 'case-4',
    title: '小仙炖品类创新全案咨询',
    description: '咨询+设计赋能产品营销极致体验。确立“鲜炖燕窝”高端红利赛道，全维度打造冰温、保鲜及精巧包装新品类标杆。',
    logoType: 'xiaoxiandun'
  },
  {
    id: 'case-5',
    title: '海底捞品类创新全案咨询',
    description: '以品类创新挖掘火锅“第三场景”。打破堂食壁垒，开辟露营、夜市等多场景便携即食产品，实现海底捞正宗火锅味随时随地即刻享。',
    logoType: 'haidilao'
  },
  {
    id: 'case-6',
    title: '思哲睿康多多手术机器人产品创新咨询设计',
    description: '集工业设计美学、高精尖临床需求与卓越稳定性能于一体。打破国外垄断，优化多悬臂协同人机工程设计。',
    logoType: 'sizherui'
  },
  {
    id: 'case-7',
    title: '埃斯顿卓丰双足人形机器人产品创新咨询设计',
    description: '心有所向，携智然而来。打造拟人化流动线条，内部线束深度整合，融合碳纤维高强度材质与前沿工业美学。',
    logoType: 'estun'
  },
  {
    id: 'case-8',
    title: '哈工大智能协作机器人产品创新咨询设计',
    description: '立足协作机器人敏捷市场，定义行业工业安全美学新标杆。流线型防夹手关节设计与全彩状态环交互。',
    logoType: 'hit'
  },
  {
    id: 'case-9',
    title: '悦鲜活年轻化产品包装创新咨询设计',
    description: '打造差异化视觉识别。通过超瞬时杀菌技术、0.09s黄金保鲜视觉叙事，助力高端鲜乳品牌抢占年轻主流消费市场。',
    logoType: 'yuexianhuo'
  },
  {
    id: 'musinno',
    title: '慢阶「演奏家一号」音乐设备',
    description: '全球首款具有工作站属性的乐谱台，打破传统边界，荣获 2023 年德国红点至尊奖。',
    image: '/src/assets/images/musinno_hero_banner_1785826677156.jpg',
    logoType: 'pophie'
  }
];

