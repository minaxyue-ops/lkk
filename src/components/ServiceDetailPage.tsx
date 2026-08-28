import React from 'react';
import { ArrowRight, ShieldCheck, Sparkles, Zap, Award, Layers, ChevronRight } from 'lucide-react';
import { motion } from 'motion/react';
import { CaseStudy } from '../types';

export interface ProcessStep {
  step: string;
  title: string;
  image: string;
  keywords: string[];
}

export interface ServiceDetailConfig {
  serviceKey: string;
  parentCategory: string;
  parentPath: string;
  title: string;
  englishTitle: string;
  slogan: string;
  description: string;
  metrics: { value: string; label: string }[];
  capabilities: { title: string; desc: string; icon: string }[];
  process: ProcessStep[];
  featuredCases: {
    id: string;
    title: string;
    image: string;
    category: string;
    tags: string[];
    description: string;
  }[];
}

const SERVICE_DATA: Record<string, ServiceDetailConfig> = {
  'industrial-design': {
    serviceKey: 'industrial-design',
    parentCategory: '产品创新',
    parentPath: '/product-innovation',
    title: '工业设计',
    englishTitle: 'INDUSTRIAL DESIGN',
    slogan: '硬核科技与人文美学的极致融合',
    description: '洛可可工业设计团队凭借20年工业设计沉淀，深度打通人机工程学、材料工艺与消费心理学。我们为垂直领域客户提供从产品外观定义、概念形态探索、CMF（色彩/材质/表面处理）规范到可制造性设计的全流程落地服务，打造终端市场降维打击的美学护城河。',
    metrics: [
      { value: '22年', label: '行业经验积淀' },
      { value: '600+', label: '专业奖项认证' },
      { value: '1000+', label: '行业头部客户认可' },
      { value: '10000+', label: '产品成功落地' },
    ],
    capabilities: [
      { title: '外观创新与形态探索', desc: '手绘概念草图、3D曲面造型推敲、比例尺度微调，为产品赋予极具识别度的美学张力。', icon: 'Sparkles' },
      { title: '人机工程与交互体验', desc: '基于手感人因测试与深度人机交互测试，优化手持与操作姿态，提升产品使用愉悦度。', icon: 'Zap' },
      { title: 'CMF材料与工艺创新', desc: '探索前沿新材料与表面处理工艺（CMF），定制高端质感色彩，建立行业领先的工艺标准。', icon: 'Layers' },
      { title: '家族化设计语言 (PI)', desc: '构建企业专属品牌PI视觉资产，兼顾DFM可制造性评估，确保创意完美无瑕落地。', icon: 'ShieldCheck' },
    ],
    process: [
      {
        step: '01',
        title: '需求调研',
        image: 'https://github.com/minaxyue-ops/MINA/releases/download/1/banner1.jpg',
        keywords: ['需求拆解', '用户画像', '市场研判', '竞品分析'],
      },
      {
        step: '02',
        title: '概念设计',
        image: 'https://github.com/minaxyue-ops/MINA/releases/download/1/image.35.png',
        keywords: ['创意发散', '方案草图', '功能规划', '视觉定调'],
      },
      {
        step: '03',
        title: '深化验证',
        image: 'https://github.com/minaxyue-ops/MINA/releases/download/1/image.39.png',
        keywords: ['细节打磨', '原型制作', '产品测试', '可行性评估'],
      },
      {
        step: '04',
        title: '落地交付',
        image: 'https://github.com/minaxyue-ops/MINA/releases/download/1/bannner2.png',
        keywords: ['工艺对接', '打样确认', '生产适配', '成果交付'],
      },
    ],
    featuredCases: [
      {
        id: 'case-sizherui',
        title: '思哲睿康多多手术机器人产品创新设计',
        image: 'https://github.com/minaxyue-ops/MINA/releases/download/1/case_sizherui.jpg',
        category: '医疗健康',
        tags: ['医疗机器人', '人机工学', 'CMF创新'],
        description: '融合医疗严谨度与人文亲和力，颠覆传统手术设备生硬感，斩获德国Red Dot设计大奖。',
      },
      {
        id: 'case-hit',
        title: '哈工大智能协作机器人产品设计',
        image: 'https://github.com/minaxyue-ops/MINA/releases/download/1/case_hit.jpg',
        category: '智能制造',
        tags: ['工业装备', '安全人机', '家族语言'],
        description: '打破传统工业臂冰冷形象，采用模块化流线机身与高识别度环形指示灯，兼顾安全与科技感。',
      },
      {
        id: 'case-pophie',
        title: '糯宝 (Pophie) 类生命情感陪伴机器人',
        image: 'https://github.com/minaxyue-ops/MINA/releases/download/1/case_pophie.jpg',
        category: 'AI陪伴',
        tags: ['消费电子', '生命形态', '亲肤触感'],
        description: '采用拟态有机弧面与亲肤涂层，将科技硬核包裹于温馨的情感纽带之中。',
      },
      {
        id: 'case-aisidun',
        title: '艾斯顿智能自动化装备工业设计',
        image: 'https://github.com/minaxyue-ops/MINA/releases/download/1/aisidun.jpg',
        category: '智能装备',
        tags: ['工业设计', '模块化', '品牌PI'],
        description: '重塑工业化视觉秩序，打造高辨识度高端智造装备标杆。',
      },
      {
        id: 'case-gugong',
        title: '故宫文创智能文化设备外观设计',
        image: 'https://github.com/minaxyue-ops/MINA/releases/download/1/gugong.jpg',
        category: '文化科技',
        tags: ['文创设备', '古典元素', '现代科技'],
        description: '将古建美学元素与现代智能科技无缝交融，赋予文化载体时代新意。',
      },
      {
        id: 'case-liangpin',
        title: '良品铺子智能新零售终端工业设计',
        image: 'https://github.com/minaxyue-ops/MINA/releases/download/1/liangpin.jpg',
        category: '商业终端',
        tags: ['新零售', '人机倾角', '高转化率'],
        description: '极简货架形态与友好人机倾角，提升商业空间视觉吸引力与购买转化。',
      },
    ],
  },
  'structural-design': {
    serviceKey: 'structural-design',
    parentCategory: '产品创新',
    parentPath: '/product-innovation',
    title: '结构设计',
    englishTitle: 'STRUCTURAL DESIGN',
    slogan: '精密工程与创新堆叠的技术护城河',
    description: '洛可可结构设计拥有实力雄厚的机械、电子及材料学工程专家团队。我们在外观创意初期即深度参与，严苛精算整机空间堆叠、热管理、防水防尘及目标BOM成本，打通人性化联动机构与严苛测试标准，确保设计无缝还原。',
    metrics: [
      { value: '22年', label: '行业经验积淀' },
      { value: '600+', label: '专业奖项认证' },
      { value: '1000+', label: '行业头部客户认可' },
      { value: '10000+', label: '产品成功落地' },
    ],
    capabilities: [
      { title: '精密空间堆叠与微型化', desc: '挑战极限整机尺寸，优化PCB主板与电池结构排布，完成热流场仿真与电磁屏蔽设计。', icon: 'Layers' },
      { title: '创新联动机构与传动', desc: '研发阻尼传动、磁吸翻转、齿轮减速及复杂折叠铰链，赋予产品顺滑无比的操作体感。', icon: 'Zap' },
      { title: '三防与严苛可靠性', desc: '攻克IP68深入级防水防尘、1.5米跌落抗冲击及高低温热循环测试结构难题。', icon: 'ShieldCheck' },
      { title: 'BOM成本精算与模具优化', desc: '优化卡扣与螺钉数量，推行模块化共用件，大幅降低注塑开模费用与大货装配工时。', icon: 'Award' },
    ],
    process: [
      {
        step: '01',
        title: '需求与架构',
        image: 'https://github.com/minaxyue-ops/MINA/releases/download/1/banner1.jpg',
        keywords: ['需求拆解', '架构堆叠', '可行性研判', '空间规划'],
      },
      {
        step: '02',
        title: '3D建模仿真',
        image: 'https://github.com/minaxyue-ops/MINA/releases/download/1/image.35.png',
        keywords: ['参数化建模', '有限元FEA', '模流分析', '干涉排查'],
      },
      {
        step: '03',
        title: '原型与测试',
        image: 'https://github.com/minaxyue-ops/MINA/releases/download/1/image.39.png',
        keywords: ['手板打样', '装配测试', '按键手感', '跌落评估'],
      },
      {
        step: '04',
        title: '模具与交付',
        image: 'https://github.com/minaxyue-ops/MINA/releases/download/1/bannner2.png',
        keywords: ['模具审查', 'T0/T1试模', '公差精算', '量产交接'],
      },
    ],
    featuredCases: [
      {
        id: 'case-jingkelong',
        title: '京客隆新一代自助零售收银系统结构堆叠',
        image: 'https://github.com/minaxyue-ops/MINA/releases/download/1/case_jingkelong.jpg',
        category: '自助终端',
        tags: ['精密机构', '模块化', '维护效率'],
        description: '超薄钣金架构内紧凑堆叠打印机与POS组件，维护开盖时间缩短70%。',
      },
      {
        id: 'case-haidilao',
        title: '海底捞随行即食锁鲜加热腔结构设计',
        image: 'https://github.com/minaxyue-ops/MINA/releases/download/1/case_haidilao.jpg',
        category: '快消设备',
        tags: ['阻燃防烫', '热传导', '双重安全'],
        description: '双层空气隔热腔与泄压排气阀结构，确保发热过程罐体外壁温度降至安全范围。',
      },
      {
        id: 'case-yuexianhuo',
        title: '悦鲜活年轻化阻气锁鲜瓶口结构',
        image: 'https://github.com/minaxyue-ops/MINA/releases/download/1/case_yuexianhuo.jpg',
        category: '快消包装',
        tags: ['注塑瓶盖', '气密密封', '易开盖'],
        description: '微米级止逆密封结构设计，兼顾单手轻松拧开与极佳的长效锁鲜气密性。',
      },
      {
        id: 'case-sizherui-struct',
        title: '康多多手术机器人高精度微米级传动结构',
        image: 'https://github.com/minaxyue-ops/MINA/releases/download/1/case_sizherui.jpg',
        category: '医疗精造',
        tags: ['微米级传动', '无间隙结构', '医疗可靠性'],
        description: '无间隙高精密齿轮减速与阻尼连杆，确保手术微米级稳定平滑操纵。',
      },
      {
        id: 'case-hit-struct',
        title: '哈工大协作机器人防夹手安全关节机构',
        image: 'https://github.com/minaxyue-ops/MINA/releases/download/1/case_hit.jpg',
        category: '工业机构',
        tags: ['防夹手机构', '扭矩限制', '安全人机'],
        description: '专利防护扭矩限位机构，大幅提升人机协作环境下的安全防护等级。',
      },
      {
        id: 'case-pophie-struct',
        title: '糯宝陪伴机器人双色注塑骨架结构',
        image: 'https://github.com/minaxyue-ops/MINA/releases/download/1/case_pophie.jpg',
        category: '消费电子',
        tags: ['双色注塑', '防摔设计', '内骨架'],
        description: '软胶与硬质内骨架紧密咬合，兼顾高跌落抗冲击与细腻亲肤手感。',
      },
    ],
  },
  'production-landing': {
    serviceKey: 'production-landing',
    parentCategory: '产品创新',
    parentPath: '/product-innovation',
    title: '生产落地',
    englishTitle: 'PRODUCTION & SUPPLY CHAIN',
    slogan: '从设计图纸到万级量产的供应链托管闭环',
    description: '洛可可研发供应链生态整合全国1000+优质制造资源，提供从样机试制、模具开发、小批量试产（NPI）到品质控制与大批量生产交付的一站式供应链托管服务，帮助企业跨越硬件创新的“死亡之谷”。',
    metrics: [
      { value: '22年', label: '行业经验积淀' },
      { value: '600+', label: '专业奖项认证' },
      { value: '1000+', label: '行业头部客户认可' },
      { value: '10000+', label: '产品成功落地' },
    ],
    capabilities: [
      { title: '模具开发与全程监理', desc: '模流分析（Moldflow）指导模具开模，安排驻厂工程督导，严控模具钢材、冷却水路与T0-T3试模。', icon: 'Award' },
      { title: '小批试产与NPI流程', desc: '编写标准化SOP作业指导书，设计专属产线测试治具，严格验证良率并打磨组装工序。', icon: 'Zap' },
      { title: '元器件与供应链托管', desc: '协同芯片、显示屏、塑胶及五金件工厂采购，发挥规模化采购优势降低供应链采购成本。', icon: 'Layers' },
      { title: '全生命周期品质QC', desc: '驻厂QC全程监装，执行AQL抽检标准、跌落/振动/环境老化测试，提供完备出厂检测报告。', icon: 'ShieldCheck' },
    ],
    process: [
      {
        step: '01',
        title: '需求与匹配',
        image: 'https://github.com/minaxyue-ops/MINA/releases/download/1/banner1.jpg',
        keywords: ['工艺评估', '工厂匹配', '资质审查', '产能规划'],
      },
      {
        step: '02',
        title: '模具与试模',
        image: 'https://github.com/minaxyue-ops/MINA/releases/download/1/image.35.png',
        keywords: ['模流分析', '钢材监控', '试模出样', '全检报告'],
      },
      {
        step: '03',
        title: 'NPI与试产',
        image: 'https://github.com/minaxyue-ops/MINA/releases/download/1/image.39.png',
        keywords: ['小批试产', 'SOP编写', '防呆治具', '良率打磨'],
      },
      {
        step: '04',
        title: '量产与交付',
        image: 'https://github.com/minaxyue-ops/MINA/releases/download/1/bannner2.png',
        keywords: ['驻厂QC', '老化测试', '打包抽检', '安全交付'],
      },
    ],
    featuredCases: [
      {
        id: 'case-sizherui-prod',
        title: '思哲睿手术机器人精密外壳模具与量产落地',
        image: 'https://github.com/minaxyue-ops/MINA/releases/download/1/case_sizherui.jpg',
        category: '医疗制造',
        tags: ['高精模具', '医疗级QC', '小批量精造'],
        description: '成功攻克医疗级阻燃ABS+PC大型复合模具变形控制难题，实现零公差扣合。',
      },
      {
        id: 'case-hit-prod',
        title: '哈工大协作机器人机械关节五金量产',
        image: 'https://github.com/minaxyue-ops/MINA/releases/download/1/case_hit.jpg',
        category: '工业制造',
        tags: ['CNC加工', '阳极氧化', '模组交付'],
        description: '铝合金多轴CNC精准加工与高要求表面阳极氧化处理，实现零瑕疵批量交付。',
      },
      {
        id: 'case-pophie-prod',
        title: '糯宝陪伴机器人软胶双色注塑量产',
        image: 'https://github.com/minaxyue-ops/MINA/releases/download/1/case_pophie.jpg',
        category: '消费电子',
        tags: ['双色注塑', '包胶工艺', '整机托管'],
        description: '解决软胶与硬质骨架附着力难题，提供整机组装包材成品出厂一站式服务。',
      },
      {
        id: 'case-jingkelong-prod',
        title: '京客隆终端设备钣金模具与批量供货',
        image: 'https://github.com/minaxyue-ops/MINA/releases/download/1/case_jingkelong.jpg',
        category: '商业设备',
        tags: ['钣金加工', '数控冲压', '准时交付'],
        description: '高精度数控冲压与静电喷涂，保障全国门店规模化安装部署进度。',
      },
      {
        id: 'case-yuexianhuo-prod',
        title: '悦鲜活高速吹瓶与注塑量产落地',
        image: 'https://github.com/minaxyue-ops/MINA/releases/download/1/case_yuexianhuo.jpg',
        category: '快消生产',
        tags: ['高速注塑', '无菌车间', '合格率99.8%'],
        description: '每小时数万级高速模具注塑与全自动防误封盖，实现超低损耗率。',
      },
      {
        id: 'case-haidilao-prod',
        title: '海底捞锁鲜盒注塑与自动化装配',
        image: 'https://github.com/minaxyue-ops/MINA/releases/download/1/case_haidilao.jpg',
        category: '餐饮制造',
        tags: ['食品级PP', '无尘装配', '全程溯源'],
        description: '食品级PP无尘车间自动化生产线，全流程质量监控与批次溯源。',
      },
    ],
  },
  'full-case-design': {
    serviceKey: 'full-case-design',
    parentCategory: '品牌创新',
    parentPath: '/brand-innovation',
    title: '品牌全案设计',
    englishTitle: 'FULL CASE BRAND DESIGN',
    slogan: '重构品牌心智，打造商业高溢价资产',
    description: '洛可可品牌全案设计融合商业战略与极致美学，从品牌战略定位、命名、视觉识别系统（VI）、超级符号到终端物料与品牌手册，打造具备高辨识度与强情感粘性的品牌全案体系。',
    metrics: [
      { value: '22年', label: '行业经验积淀' },
      { value: '600+', label: '专业奖项认证' },
      { value: '1000+', label: '行业头部客户认可' },
      { value: '10000+', label: '产品成功落地' },
    ],
    capabilities: [
      { title: '品牌战略定位', desc: '深度梳理企业基因与市场竞争态势，明确差异化战略定位与品牌核心价值主张。', icon: 'Sparkles' },
      { title: '超级符号与VI系统', desc: '打造极具商业穿透力的品牌Logo与超级符号，建立严谨统一的VI视觉识别规范。', icon: 'Award' },
      { title: '终端触点与SI空间', desc: '延展办公物料、宣传画册、展台空间SI系统及线上数字化媒体视觉矩阵。', icon: 'Layers' },
      { title: '品牌故事与传播管理', desc: '撰写动人的品牌故事与Slogan，输出标准VI管理手册，确保品牌资产全渠道不走样。', icon: 'ShieldCheck' },
    ],
    process: [
      {
        step: '01',
        title: '诊断与定位',
        image: 'https://github.com/minaxyue-ops/MINA/releases/download/1/banner1.jpg',
        keywords: ['高管访谈', '受众洞察', '赛道分析', '品牌定位'],
      },
      {
        step: '02',
        title: '符号与创作',
        image: 'https://github.com/minaxyue-ops/MINA/releases/download/1/image.35.png',
        keywords: ['图形探索', '超级符号', '色彩测试', '视觉穿透'],
      },
      {
        step: '03',
        title: 'VI与规范',
        image: 'https://github.com/minaxyue-ops/MINA/releases/download/1/image.39.png',
        keywords: ['基础规范', '触点延展', '手册绘制', '商标查重'],
      },
      {
        step: '04',
        title: '发布与管理',
        image: 'https://github.com/minaxyue-ops/MINA/releases/download/1/bannner2.png',
        keywords: ['发布物料', '印刷打样', '线上上线', '资产交接'],
      },
    ],
    featuredCases: [
      {
        id: 'case-xiaoxiandun',
        title: '小鲜炖鲜炖燕窝品牌全案与VI体验重构',
        image: 'https://github.com/minaxyue-ops/MINA/releases/download/1/image.33.png',
        category: '高端滋补',
        tags: ['品牌全案', 'VI系统', '超级视觉'],
        description: '重塑鲜炖燕窝高端品类心智，以精致碗形超级符号奠定品牌高溢价基石。',
      },
      {
        id: 'case-haidilao-brand',
        title: '海底捞随行餐饮品牌年轻化全案',
        image: 'https://github.com/minaxyue-ops/MINA/releases/download/1/image.35.png',
        category: '快消餐饮',
        tags: ['品牌焕新', '超级符号', '活力色彩'],
        description: '打造充满食欲与年轻活力的超级符号，助力海底捞打入零售快消新赛道。',
      },
      {
        id: 'case-cotti-brand',
        title: '库迪咖啡爆款视觉全案与跨界快闪',
        image: 'https://github.com/minaxyue-ops/MINA/releases/download/1/case_pophie.jpg',
        category: '连锁饮品',
        tags: ['饮品全案', '快闪IP', '流行视觉'],
        description: '高饱和度红白视觉与潮流语言，帮助库迪咖啡在极短时间内开设数千家门店。',
      },
      {
        id: 'case-sanriam-brand',
        title: '洛可可SANRIAM潮玩品牌全案设计',
        image: 'https://github.com/minaxyue-ops/MINA/releases/download/1/image.39.png',
        category: '潮流文创',
        tags: ['潮玩品牌', '世界观', '符号矩阵'],
        description: '赛博朋克与治愈系融合，建立高认同度的品牌精神家园。',
      },
      {
        id: 'case-yuexianhuo-brand',
        title: '悦鲜活品牌视觉重构与超级符号',
        image: 'https://github.com/minaxyue-ops/MINA/releases/download/1/case_yuexianhuo.jpg',
        category: '快消乳业',
        tags: ['品牌VI', '超级符号', '认知抢占'],
        description: '鲜明蓝白品牌标志，上市即抢占消费者对低温锁鲜牛奶的品类认知。',
      },
      {
        id: 'case-gugong-brand',
        title: '故宫文创品牌IP化商业视觉全案',
        image: 'https://github.com/minaxyue-ops/MINA/releases/download/1/gugong.jpg',
        category: '文化品牌',
        tags: ['文创品牌', '东方美学', '商业延展'],
        description: '传统文脉与现代商业美学结合，赋能多品类文创跨界营销。',
      },
    ],
  },
  'packaging-design': {
    serviceKey: 'packaging-design',
    parentCategory: '品牌创新',
    parentPath: '/brand-innovation',
    title: '包装设计',
    englishTitle: 'PACKAGING DESIGN',
    slogan: '货架第一触点的超级商业爆发力',
    description: '包装是产品面向消费者的第一销售员。洛可可遵循“看得到、记得住、想下单”的商业爆发原则，结合环保材质与精湛结构，打造极具货架穿透力与社媒传播力的高颜值爆款包装。',
    metrics: [
      { value: '22年', label: '行业经验积淀' },
      { value: '600+', label: '专业奖项认证' },
      { value: '1000+', label: '行业头部客户认可' },
      { value: '10000+', label: '产品成功落地' },
    ],
    capabilities: [
      { title: '爆款视觉与货架占位', desc: '构建高强对比色彩与大字报超级画面，让产品在满目琳琅的货架中瞬间抓人眼球。', icon: 'Sparkles' },
      { title: '盒型结构与开箱仪式', desc: '研发独创拆盒结构与提携手柄，提升消费者拆箱仪式感与社交分享欲望。', icon: 'Layers' },
      { title: '环保减塑与成本控制', desc: '采用甘蔗渣、可降解PLA等环保材质，优化排版减少模切浪费，降低大货印刷成本。', icon: 'Zap' },
      { title: '礼盒与跨界限定系列', desc: '定制高端节日礼盒、IP联名限定包装，为产品注入浓厚的情感与文创属性。', icon: 'Award' },
    ],
    process: [
      {
        step: '01',
        title: '竞品与货架',
        image: 'https://github.com/minaxyue-ops/MINA/releases/download/1/banner1.jpg',
        keywords: ['商超考察', '受众偏好', '视线捕捉', '差异定位'],
      },
      {
        step: '02',
        title: '视觉与盒型',
        image: 'https://github.com/minaxyue-ops/MINA/releases/download/1/image.35.png',
        keywords: ['封面插画', '刀线展开', '3D模拟', '拆盒体验'],
      },
      {
        step: '03',
        title: '打样与跟色',
        image: 'https://github.com/minaxyue-ops/MINA/releases/download/1/image.39.png',
        keywords: ['材质甄选', '专色PANTONE', '工艺打版', '样品确认'],
      },
      {
        step: '04',
        title: '印制与交付',
        image: 'https://github.com/minaxyue-ops/MINA/releases/download/1/bannner2.png',
        keywords: ['矢量刀线', '现场跟色', '质检抽查', '大货交付'],
      },
    ],
    featuredCases: [
      {
        id: 'case-yuexianhuo-pkg',
        title: '悦鲜活年轻化锁鲜包装与瓶型创新',
        image: 'https://github.com/minaxyue-ops/MINA/releases/download/1/case_yuexianhuo.jpg',
        category: '乳品快消',
        tags: ['瓶型设计', '快消包装', '货架穿透'],
        description: '高透明人体工学瓶型配合醒目的锁鲜标识，上市即拉动销量爆发式增长。',
      },
      {
        id: 'case-haidilao-pkg',
        title: '海底捞随行自热系列包装视觉重构',
        image: 'https://github.com/minaxyue-ops/MINA/releases/download/1/case_haidilao.jpg',
        category: '方便食品',
        tags: ['自热包装', '红火插画', '拆盒体验'],
        description: '充满食欲感的插画风格与安全隔热外封套，大幅提升线上与线下购买意愿。',
      },
      {
        id: 'case-cotti-pkg',
        title: '库迪咖啡爆款艺术杯套与环保包装设计',
        image: 'https://github.com/minaxyue-ops/MINA/releases/download/1/case_hit.jpg',
        category: '茶饮快消',
        tags: ['杯套插画', '社媒爆品', '联名包装'],
        description: '将艺术展搬进咖啡杯，每季推出高颜值联名杯套，引发小红书海量打卡。',
      },
      {
        id: 'case-xiaoxiandun-pkg',
        title: '小鲜炖限量版精美礼盒包装设计',
        image: 'https://github.com/minaxyue-ops/MINA/releases/download/1/image.33.png',
        category: '高端礼盒',
        tags: ['绸缎质感', '拆盒仪式', '高端定位'],
        description: '精致绸缎触感与典雅开箱阻尼，完美提升高端健康礼品的社交溢价。',
      },
      {
        id: 'case-gugong-pkg',
        title: '故宫文创节日尊享礼盒包装',
        image: 'https://github.com/minaxyue-ops/MINA/releases/download/1/gugong.jpg',
        category: '文创礼盒',
        tags: ['雕花压纹', '烫金工艺', '文化沉淀'],
        description: '雕花压纹与古典烫金，将皇家宫廷文化典藏呈于消费者掌心。',
      },
      {
        id: 'case-liangpin-pkg',
        title: '良品铺子爆款零食系列包装',
        image: 'https://github.com/minaxyue-ops/MINA/releases/download/1/liangpin.jpg',
        category: '休闲食品',
        tags: ['透明视窗', '味觉符号', '冲动购买'],
        description: '透明视窗配合醒目的味觉色彩符号，极速激发终端消费购买欲望。',
      },
    ],
  },
  'ip-design': {
    serviceKey: 'ip-design',
    parentCategory: '品牌创新',
    parentPath: '/brand-innovation',
    title: 'IP设计',
    englishTitle: 'IP & CHARACTER DESIGN',
    slogan: '赋予品牌人格，打造长效情绪价值',
    description: '构建品牌人格化资产。洛可可IP设计中心提供从角色形象孵化、3D造型建模、世界观设定到衍生品全产业链开发，打通品牌与新一代消费者的情感连接，实现长效商业变现。',
    metrics: [
      { value: '22年', label: '行业经验积淀' },
      { value: '600+', label: '专业奖项认证' },
      { value: '1000+', label: '行业头部客户认可' },
      { value: '10000+', label: '产品成功落地' },
    ],
    capabilities: [
      { title: '角色形象孵化与世界观', desc: '塑造极具亲和力与故事感的人物/动物吉祥物，赋予其独一无二的性格与灵魂。', icon: 'Sparkles' },
      { title: '3D高精雕刻与三视图', desc: '进行标准三视图绘制，运用ZBrush精细雕刻3D手办模型，制定动作与表情库。', icon: 'Layers' },
      { title: '社媒图库与动态表情包', desc: '开发节日主题插画图库、微信动态表情包，让IP融入用户日常社交交流场景。', icon: 'Zap' },
      { title: '潮玩与周边衍生品全案', desc: '拓展盲盒潮玩、毛绒公仔、文创生活用品，实现IP商业价值的最大化变现。', icon: 'Award' },
    ],
    process: [
      {
        step: '01',
        title: '角色与定位',
        image: 'https://github.com/minaxyue-ops/MINA/releases/download/1/banner1.jpg',
        keywords: ['受众偏好', '情绪共鸣', '人格塑造', '世界观设定'],
      },
      {
        step: '02',
        title: '原画与3D',
        image: 'https://github.com/minaxyue-ops/MINA/releases/download/1/image.35.png',
        keywords: ['草图推敲', '三视图绘制', '3D雕刻', '姿态设定'],
      },
      {
        step: '03',
        title: '图库与表情',
        image: 'https://github.com/minaxyue-ops/MINA/releases/download/1/image.39.png',
        keywords: ['社媒图库', '动态表情包', '节日插画', '规范输出'],
      },
      {
        step: '04',
        title: '衍生与量产',
        image: 'https://github.com/minaxyue-ops/MINA/releases/download/1/bannner2.png',
        keywords: ['3D拆件打样', '材质跟进', '品质抽检', '上市交付'],
      },
    ],
    featuredCases: [
      {
        id: 'case-pophie-ip',
        title: '糯宝 (Pophie) 类生命情感陪伴IP孵化',
        image: 'https://github.com/minaxyue-ops/MINA/releases/download/1/case_pophie.jpg',
        category: '情感陪伴',
        tags: ['AI陪伴', '情感IP', '3D造型'],
        description: '以软萌可亲的生命体形态，搭配细腻的眼部表情微交互，打动无数年轻人心智。',
      },
      {
        id: 'case-sanriam-ip',
        title: '洛可可SANRIAM原创潮玩IP与衍生品',
        image: 'https://github.com/minaxyue-ops/MINA/releases/download/1/image.39.png',
        category: '潮玩文创',
        tags: ['潮玩IP', '盲盒开发', '角色宇宙'],
        description: '独特的赛博朋克与治愈系融合风格，盲盒上线即掀起收集热潮。',
      },
      {
        id: 'case-cultural-ip',
        title: '大型文旅集团商业吉祥物与IP衍生矩阵',
        image: 'https://github.com/minaxyue-ops/MINA/releases/download/1/case_sizherui.jpg',
        category: '文旅IP',
        tags: ['文旅吉祥物', '衍生周边', '形象焕新'],
        description: '将传统文化元素与现代卡通语言结合，衍生品年销售额超千万元。',
      },
      {
        id: 'case-xiaozhi-ip',
        title: '故宫智能小智IP角色造型设计',
        image: 'https://github.com/minaxyue-ops/MINA/releases/download/1/xiaozhi.jpg',
        category: '文化IP',
        tags: ['宫廷神兽', 'Q版拟人', '年轻化'],
        description: '宫廷神兽Q版拟人化，化身为知识渊博的导览陪伴伙伴。',
      },
      {
        id: 'case-cotti-ip',
        title: '库迪咖啡跨界潮玩IP形象联名',
        image: 'https://github.com/minaxyue-ops/MINA/releases/download/1/case_hit.jpg',
        category: '饮品IP',
        tags: ['潮流小熊', '联名周边', '杯套插画'],
        description: '潮流小熊IP联动饮品杯套与限定周边，掀起社交打卡狂潮。',
      },
      {
        id: 'case-aisidun-ip',
        title: '艾斯顿智造工业硬核吉祥物设计',
        image: 'https://github.com/minaxyue-ops/MINA/releases/download/1/aisidun.jpg',
        category: '品牌吉祥物',
        tags: ['工业IP', '科技感', '品牌粘性'],
        description: '将重工装备拟人化为科技感小战神，大大拉近与B端与C端用户的距离。',
      },
    ],
  },
};

interface ServiceDetailPageProps {
  serviceKey: string;
  onOpenContactModal: () => void;
  onSelectCase: (cs: CaseStudy) => void;
  onNavigateParent?: (parentPath: string) => void;
  onNavigateDetail?: (url: string) => void;
  onBack?: () => void;
}

export default function ServiceDetailPage({
  serviceKey,
  onOpenContactModal,
  onSelectCase,
  onNavigateParent,
  onNavigateDetail,
}: ServiceDetailPageProps) {
  const data = SERVICE_DATA[serviceKey] || SERVICE_DATA['industrial-design'];

  const getCapabilityIcon = (iconName: string) => {
    switch (iconName) {
      case 'Sparkles': return <Sparkles className="w-6 h-6 text-[#007BC7]" />;
      case 'Zap': return <Zap className="w-6 h-6 text-[#007BC7]" />;
      case 'Layers': return <Layers className="w-6 h-6 text-[#007BC7]" />;
      case 'ShieldCheck': return <ShieldCheck className="w-6 h-6 text-[#007BC7]" />;
      case 'Award': return <Award className="w-6 h-6 text-[#007BC7]" />;
      default: return <Sparkles className="w-6 h-6 text-[#007BC7]" />;
    }
  };

  return (
    <div className="w-full bg-white text-[#1a1a1a] transition-colors">
      
      {/* SCOPED STYLES FOR SERVICE CLASSIFICATION & PROCESS GHOST NUMBERS */}
      <style>{`
        .category-card {
          background: #FAFAFA;
          border-radius: 12px;
          padding: 32px 24px;
          text-align: center;
          transition: background 0.3s ease, box-shadow 0.3s ease;
        }
        .category-card:hover {
          background: #F5F5F5;
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.06);
        }
        .category-icon-badge {
          width: 72px;
          height: 72px;
          border-radius: 50%;
          background: #E8F0FF;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 20px;
          transition: background 0.3s ease;
        }
        .category-card:hover .category-icon-badge {
          background: #D9E8FF;
        }
        .category-desc {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
          font-size: 14px;
          color: #8C8C8C;
          line-height: 1.6;
        }
        .process-card {
          position: relative;
          overflow: hidden;
          cursor: default;
        }
        .process-card-img-wrap {
          position: relative;
          z-index: 2;
        }
        .process-ghost-number {
          position: absolute;
          right: -12px;
          bottom: -30px;
          font-size: 420px;
          font-weight: 800;
          line-height: 1;
          color: rgba(0, 123, 199, 0.07);
          z-index: 0;
          font-family: var(--font-mono, monospace);
          transition: color 0.35s ease;
          pointer-events: none;
          user-select: none;
        }
        .process-card:hover .process-ghost-number {
          color: rgba(0, 123, 199, 0.17);
        }
        .process-card-footer {
          position: relative;
          z-index: 1;
        }
      `}</style>

      {/* 1. HERO / FIRST SCREEN SECTION (完全照搬品类创新咨询页首屏实现) */}
      <section className="py-16 md:py-24 text-center bg-radial from-neutral-50/70 via-neutral-50/30 to-white relative overflow-hidden border-b border-neutral-100">
        <div className="max-w-4xl mx-auto px-[5%] relative z-10 flex flex-col items-center">
          
          {/* Breadcrumbs */}
          <div className="flex items-center justify-center gap-2 text-xs text-[#8C8C8C] mb-6 font-mono">
            <button 
              onClick={() => onNavigateParent && onNavigateParent('/')}
              className="hover:text-[#007BC7] transition-colors cursor-pointer border-none bg-transparent p-0"
            >
              首页
            </button>
            <ChevronRight className="w-3.5 h-3.5 text-[#8C8C8C]" />
            <button 
              onClick={() => onNavigateParent && onNavigateParent(data.parentPath)}
              className="hover:text-[#007BC7] transition-colors cursor-pointer border-none bg-transparent p-0"
            >
              {data.parentCategory}
            </button>
            <ChevronRight className="w-3.5 h-3.5 text-[#8C8C8C]" />
            <span className="text-[#007BC7] font-bold">{data.title}</span>
          </div>

          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="h-[1.5px] w-8 bg-[#007BC7]"></span>
            <span className="text-[12px] tracking-[0.3em] font-bold text-[#007BC7] font-mono">
              {data.englishTitle}
            </span>
            <span className="h-[1.5px] w-8 bg-[#007BC7]"></span>
          </div>

          <motion.h1 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="hero-title text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight text-neutral-900 leading-[1.05] font-display"
          >
            <span className="text-[#007BC7]">{data.title}</span>
          </motion.h1>

          <p className="text-xs md:text-sm font-semibold tracking-[0.2em] text-[#007BC7] uppercase mt-4 font-mono">
            {data.slogan}
          </p>

          <p className="text-sm md:text-base text-neutral-500 max-w-3xl mt-8 leading-[1.8] font-normal text-center text-balance">
            {data.description}
          </p>

          <div className="mt-8 flex flex-col items-center gap-2">
            <button 
              onClick={onOpenContactModal}
              className="bg-[#007BC7] hover:bg-[#005F96] text-white font-bold px-8 py-3.5 rounded-full text-sm transition-all duration-300 shadow-md flex items-center gap-2 cursor-pointer border-none"
            >
              咨询此项服务
              <ArrowRight className="w-4 h-4 text-white" />
            </button>
            <span className="text-[11px] text-[#8C8C8C] text-center font-mono mt-1">
              资深行业专家 1V1 深度对接
            </span>
          </div>

        </div>
      </section>

      {/* Key Metrics Glassmorphism Section */}
      <section className="achievement-section">
        <div className="max-w-[95%] w-full mx-auto">
          <div className="achievement-grid">
            {data.metrics.map((m, idx) => (
              <div key={idx} className="achievement-card">
                <div className="achievement-number">{m.value}</div>
                <div className="achievement-label">{m.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2. 一、服务分类——图标+标题横向并排 */}
      <section className="py-16 md:py-20 bg-white border-b border-[#E5E5E5]">
        <div className="max-w-[95%] mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 md:mb-12 gap-4">
            <div>
              <span className="text-xs font-bold text-[#007BC7] uppercase tracking-widest font-mono block mb-2">
                SERVICE CATEGORIES
              </span>
              <h2 className="section-title scroll-reveal-heading text-3xl md:text-4xl font-extrabold tracking-tight text-[#1a1a1a] font-display">
                服务分类
              </h2>
            </div>
            <p className="text-xs md:text-sm text-neutral-500 max-w-md leading-relaxed font-normal">
              覆盖从外观体验、结构工程到高精度的模具开发与柔性供应链全流程托管闭环。
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
            {data.capabilities.map((cap, idx) => (
              <div key={idx} className="category-card group cursor-pointer flex flex-col items-center">
                {/* 72px圆形图标徽章 */}
                <div className="category-icon-badge text-[#007BC7]">
                  {getCapabilityIcon(cap.icon)}
                </div>
                {/* 标题文字 */}
                <h3 className="text-base md:text-lg font-semibold text-[#1A1A1A] font-display mb-2">
                  {cap.title}
                </h3>
                {/* 2行 line-clamp 描述 */}
                <p className="category-desc">
                  {cap.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. 二、服务流程——重新设计（视觉与交互整体升级） */}
      <section className="py-16 md:py-24 bg-[#F0F0F0]/40 border-b border-[#E5E5E5] overflow-hidden">
        <div className="max-w-[95%] mx-auto relative">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 md:mb-12 gap-4">
            <div>
              <span className="text-xs font-bold text-[#007BC7] uppercase tracking-widest font-mono block mb-2">
                SERVICE PROCESS
              </span>
              <h2 className="section-title scroll-reveal-heading text-3xl md:text-4xl font-extrabold tracking-tight text-[#1a1a1a] font-display">
                服务流程
              </h2>
            </div>
            <p className="text-xs md:text-sm text-neutral-500 max-w-md leading-relaxed font-normal">
              严谨的标准化创新交付闭环，从敏捷需求匹配、样机研发到规模化量产全程把控。
            </p>
          </div>

          {/* 贯穿4个步骤的动态连接进度线 (桌面端) */}
          <div className="hidden md:block relative mb-12 px-6">
            {/* 默认浅灰色贯穿底线 */}
            <div className="absolute top-1/2 left-[12%] right-[12%] -translate-y-1/2 h-[2px] bg-[#E5E5E5] z-0" />
            
            {/* 品牌蓝从左到右填充描边动画线 */}
            <motion.div 
              className="absolute top-1/2 left-[12%] -translate-y-1/2 h-[2px] bg-[#007BC7] z-0"
              initial={{ width: '0%' }}
              whileInView={{ width: '76%' }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 1.5, ease: 'easeInOut' }}
            />

            {/* 4个步骤联动节点 */}
            <div className="relative z-10 grid grid-cols-4 items-center justify-items-center">
              {data.process.map((p, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ scale: 0.8, backgroundColor: '#E5E5E5', color: '#8C8C8C' }}
                  whileInView={{ scale: 1, backgroundColor: '#007BC7', color: '#FFFFFF' }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.4, delay: idx * 0.38 }}
                  className="w-7 h-7 rounded-full border-2 border-white flex items-center justify-center text-[11px] font-mono font-bold shadow-sm"
                >
                  {p.step}
                </motion.div>
              ))}
            </div>
          </div>

          {/* 4张流程卡片 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 items-stretch relative">
            {data.process.map((p, idx) => (
              <div key={idx} className="process-card relative flex flex-col h-full group rounded-2xl overflow-hidden border border-[#E5E5E5] bg-white shadow-sm hover:border-[#007BC7]/40 hover:shadow-md transition-all duration-300">
                {/* 大号幽灵数字背景层 (无前导0，覆盖整张卡片右下角，z-index: 0) */}
                <span className="process-ghost-number">{idx + 1}</span>

                <div className="p-5 flex flex-col justify-between h-full relative z-10">
                  <div>
                    {/* 上方：4:3配图（z-index: 2，盖在幽灵数字之上） */}
                    <div className="process-card-img-wrap aspect-[4/3] rounded-[12px] overflow-hidden relative mb-4 bg-neutral-100">
                      <img 
                        src={p.image} 
                        alt={p.title} 
                        className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
                        referrerPolicy="no-referrer"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-[#007BC7]/0 group-hover:bg-[#007BC7]/[0.08] transition-colors duration-300 pointer-events-none" />
                    </div>

                    {/* 图片下方：文字 (z-index: 1) */}
                    <div className="process-card-footer pt-1">
                      {/* 步骤名称 */}
                      <h3 className="text-lg md:text-xl font-bold text-[#1A1A1A] font-display mb-3 group-hover:text-[#007BC7] transition-colors">
                        {p.title}
                      </h3>

                      {/* 4个关键词：纵向小列表 + 简约品牌蓝小圆点 */}
                      <div className="flex flex-col gap-2 mt-2">
                        {p.keywords.map((kw, kwIdx) => (
                          <div 
                            key={kwIdx} 
                            className="flex items-center gap-2 text-xs md:text-sm text-[#4D4D4D] transition-transform duration-300 group-hover:translate-x-1"
                            style={{ transitionDelay: `${kwIdx * 45}ms` }}
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-[#007BC7] shrink-0 transition-transform duration-300 group-hover:scale-125" />
                            <span className="font-medium">{kw}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. 三、案例锦集——复用首页"成功案例"（呈现方式二：灰度悬停，板块名称保持"案例锦集"） */}
      <section className="py-16 md:py-20 bg-white border-b border-[#E5E5E5]">
        <div className="max-w-[95%] mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 md:mb-12 gap-4">
            <div>
              <span className="text-xs font-bold text-[#007BC7] uppercase tracking-widest font-mono block mb-2">
                CASE COLLECTION
              </span>
              <h2 className="section-title scroll-reveal-heading text-3xl md:text-4xl font-extrabold tracking-tight text-[#1a1a1a] font-display">
                案例锦集
              </h2>
            </div>
            <p className="text-xs md:text-sm text-neutral-500 max-w-md leading-relaxed font-normal">
              甄选细分赛道代表性爆品案例，展现工业美学与研发落地的深度结合。
            </p>
          </div>

          <div className="case-grid-v2">
            {data.featuredCases.map((cs) => (
              <a 
                key={cs.id}
                href={`/cases/${cs.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  if (onNavigateDetail) {
                    onNavigateDetail(`/cases/${cs.id}`);
                  }
                }}
                className="case-card-v2 block relative text-left w-full outline-none select-none overflow-hidden text-decoration-none"
              >
                <img 
                  src={cs.image} 
                  alt={cs.title} 
                  referrerPolicy="no-referrer"
                  loading="lazy"
                  className="w-full h-full object-cover"
                />

                <div className="case-summary-v2">
                  <div className="case-brand-label">{cs.category}</div>
                  
                  <button 
                    type="button"
                    className="case-detail-arrow cursor-pointer border-none" 
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      onSelectCase({
                        id: cs.id,
                        title: cs.title,
                        image: cs.image,
                        description: cs.description,
                      });
                    }} 
                    aria-label="查看案例简介"
                  >
                    <span>案例简介</span><span>↗</span>
                  </button>

                  <div className="case-bottom-block">
                    <div className="case-divider">-</div>
                    <div className="case-title">{cs.title}</div>
                    <div className="case-desc">{cs.description}</div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* 5. 四、服务客户——复用产品创新页/品类创新页"服务客户"板块 */}
      <section className="py-20 md:py-24 bg-white w-full border-b border-[#E5E5E5]">
        <div className="max-w-[95%] w-full mx-auto relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 md:mb-12 gap-4">
            <div>
              <span className="text-xs font-bold text-[#007BC7] uppercase tracking-widest font-mono block mb-2">
                OUR CLIENTS
              </span>
              <h2 className="section-title scroll-reveal-heading text-3xl md:text-4xl font-extrabold tracking-tight text-[#1a1a1a] font-display">
                服务客户
              </h2>
            </div>
            <p className="text-xs md:text-sm text-neutral-500 max-w-md leading-relaxed font-normal">
              洛可可已服务超过数千个品牌客户，荣获多项国际工业设计大奖，打造诸多行业标杆与爆品。
            </p>
          </div>
          <div className="w-full rounded-3xl overflow-hidden shadow-sm border border-[#E5E5E5] bg-[#F0F0F0]">
            <img 
              src="https://github.com/minaxyue-ops/MINA/releases/download/1/fuwukehu1.jpg" 
              alt="服务客户" 
              referrerPolicy="no-referrer"
              className="w-full h-auto object-cover block"
            />
          </div>
        </div>
      </section>

    </div>
  );
}

