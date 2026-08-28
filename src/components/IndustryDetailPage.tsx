import React from 'react';
import { motion } from 'motion/react';
import { 
  ArrowRight, 
  ChevronRight, 
  Cpu, 
  Zap,
  Radio, 
  Wrench, 
  ShieldCheck, 
  Bot, 
  Stethoscope, 
  Battery, 
  Sun, 
  Home, 
  Headphones, 
  Gamepad2, 
  Smartphone, 
  Utensils, 
  Store, 
  QrCode, 
  Sparkles, 
  Gift, 
  Heart, 
  Car 
} from 'lucide-react';
import { CaseStudy } from '../types';

export interface IndustryDetailConfig {
  key: string;
  title: string;
  englishTitle: string;
  slogan: string;
  image: string;
  description: string;
  metrics: { value: string; label: string }[];
  capabilities: { title: string; desc?: string; icon?: string }[];
  cases: {
    id: string;
    title: string;
    image: string;
    category: string;
    description: string;
    tags?: string[];
  }[];
}

const COMMON_METRICS = [
  { value: '22年', label: '行业经验积淀' },
  { value: '600+', label: '专业奖项认证' },
  { value: '1000+', label: '行业头部客户认可' },
  { value: '10000+', label: '产品成功落地' },
];

const INDUSTRY_DATA: Record<string, IndustryDetailConfig> = {
  'industrial-equipment': {
    key: 'industrial-equipment',
    title: '智能装备',
    englishTitle: 'SMART INDUSTRIAL EQUIPMENT',
    slogan: '智能革新，引领高端制造升级',
    image: 'https://github.com/minaxyue-ops/MINA/releases/download/1/aisidun.jpg',
    description: '洛可可深耕工业装备领域的创新设计与硬核科技突破，为装备制造企业提供外观造型、高防护结构堆叠、人机中控台到品牌家族化语言（PI）的全流程落地方案，助力装备产业向智能化、高端化跃升。',
    metrics: COMMON_METRICS,
    capabilities: [
      { title: '电气机械' },
      { title: '通信电子' },
      { title: '通用设备' },
      { title: '专用装备' },
    ],
    cases: [
      {
        id: 'case-ind-1',
        title: '南瑞智能就地装置创新咨询设计',
        image: 'https://github.com/minaxyue-ops/MINA/releases/download/1/aisidun.jpg',
        category: '工业装备',
        description: '智能就地控制保护装置全案设计，重塑工业防护与模块化视觉。',
      },
      {
        id: 'case-ind-2',
        title: '黑玛瑙小间距LED拼接屏产品创新咨询设计',
        image: 'https://github.com/minaxyue-ops/MINA/releases/download/1/case_hit.jpg',
        category: '通信电子',
        description: '高精度模块化无缝拼接设计，斩获多项国际顶级工业设计大奖。',
      },
      {
        id: 'case-ind-3',
        title: '白鹤滩水轮发电机顶罩产品创新咨询设计',
        image: 'https://github.com/minaxyue-ops/MINA/releases/download/1/image.39.png',
        category: '专用装备',
        description: '大国重器重工造型与高可靠防护结构，体现硬核大国工业力量。',
      },
      {
        id: 'case-ind-4',
        title: '埃斯顿ED3S系列伺服驱动器产品创新咨询设计',
        image: 'https://github.com/minaxyue-ops/MINA/releases/download/1/aisidun.jpg',
        category: '电气机械',
        description: '建立高效散热与紧凑堆叠的工业驱动器产品家族设计语言。',
      },
      {
        id: 'case-ind-5',
        title: 'PI工业级新风机',
        image: 'https://github.com/minaxyue-ops/MINA/releases/download/1/bannner2.png',
        category: '通用设备',
        description: '工业车间高风量新风过滤系统，钣金冲压与人机维护优化。',
      },
      {
        id: 'case-ind-6',
        title: '金陵智造新型无人叉车',
        image: '/src/assets/images/lkk_humanoid_robot_1783302961282.jpg',
        category: '智能装备',
        description: '重载自主导航AGV叉车造型与激光雷达无死角盲区堆叠。',
      },
    ],
  },
  'robotics': {
    key: 'robotics',
    title: '机器人',
    englishTitle: 'ROBOTICS INNOVATION',
    slogan: '人机共生，开启具身智能时代',
    image: '/src/assets/images/lkk_humanoid_robot_1783302961282.jpg',
    description: '洛可可融合具身智能、仿生美学与精密关节堆叠，为医疗手术机器人、协作工业臂、商业服务机器人及双足人形机器人提供从概念定义到量产交付的创新设计。',
    metrics: COMMON_METRICS,
    capabilities: [
      { title: '手术医疗机器人' },
      { title: '协作工业机器人' },
      { title: '商用服务机器人' },
      { title: '具身智能机器人' },
    ],
    cases: [
      {
        id: 'case-rob-1',
        title: '哈工大智能协作机器人产品设计',
        image: 'https://github.com/minaxyue-ops/MINA/releases/download/1/case_hit.jpg',
        category: '协作机器人',
        description: '打破传统工业臂冰冷形象，采用模块化流线机身与高识别度指示灯。',
      },
      {
        id: 'case-rob-2',
        title: '糯宝 (Pophie) 类生命情感陪伴机器人',
        image: 'https://github.com/minaxyue-ops/MINA/releases/download/1/case_pophie.jpg',
        category: 'AI陪伴',
        description: '拟态有机弧面与亲肤涂层，将科技硬核包裹于温馨的情感纽带之中。',
      },
      {
        id: 'case-rob-3',
        title: '思哲睿康多多手术机器人产品创新设计',
        image: 'https://github.com/minaxyue-ops/MINA/releases/download/1/case_sizherui.jpg',
        category: '医疗机器人',
        description: '融合医疗严谨度与人文亲和力，颠覆传统手术设备生硬感。',
      },
      {
        id: 'case-rob-4',
        title: '双足人形机器人关节电机精密堆叠',
        image: '/src/assets/images/lkk_humanoid_robot_1783302961282.jpg',
        category: '具身智能',
        description: '高功率密度高动态关节电机与铝合金骨架超轻量化。',
      },
      {
        id: 'case-rob-5',
        title: '商用全自动洗地清洁机器人',
        image: 'https://github.com/minaxyue-ops/MINA/releases/download/1/xiaozhi.jpg',
        category: '商用机器人',
        description: '楼宇无人驾驶巡航清洁，大容量净污分离水箱空间堆叠。',
      },
      {
        id: 'case-rob-6',
        title: '电力高压巡检防爆机器人',
        image: 'https://github.com/minaxyue-ops/MINA/releases/download/1/aisidun.jpg',
        category: '特种机器人',
        description: 'IP68高防护双履带底盘与红外热成像传感器集成。',
      },
    ],
  },
  'new-energy': {
    key: 'new-energy',
    title: '智能能源',
    englishTitle: 'SMART ENERGY TECH',
    slogan: '绿色低碳，联动新能源未来',
    image: 'https://github.com/minaxyue-ops/MINA/releases/download/1/image.39.png',
    description: '围绕超充桩、储能电柜、便携户外电源与氢能设施，洛可可打造兼具高防护结构、严苛热管理与前沿CMF质感的新能源产品全案。',
    metrics: COMMON_METRICS,
    capabilities: [
      { title: '智能充电设施' },
      { title: '工商业储能系统' },
      { title: '便携户外电源' },
      { title: '氢能与清洁装备' },
    ],
    cases: [
      {
        id: 'case-ne-1',
        title: '极氪智能充电桩防尘防水高分子外壳',
        image: 'https://github.com/minaxyue-ops/MINA/releases/download/1/image.39.png',
        category: '充电设施',
        description: '户外IP65防护与高分子抗UV喷涂，呼吸灯带交互引导。',
      },
      {
        id: 'case-ne-2',
        title: '便携式高密度光伏户外储能电源',
        image: '/src/assets/images/lkk_coffee_mockup_1783302972120.jpg',
        category: '户外电源',
        description: '铝合金挤出双色防摔包角，双向快充高效散热风道。',
      },
      {
        id: 'case-ne-3',
        title: '工商业集装箱式储能中控柜设计',
        image: 'https://github.com/minaxyue-ops/MINA/releases/download/1/aisidun.jpg',
        category: '工商业储能',
        description: '模块化堆叠储能单元与消防防爆热失控隔离结构。',
      },
      {
        id: 'case-ne-4',
        title: '微网智能能源监控交互终端',
        image: 'https://github.com/minaxyue-ops/MINA/releases/download/1/case_hit.jpg',
        category: '智能中控',
        description: '高对比度户外大屏与光伏储能数字孪生看板。',
      },
      {
        id: 'case-ne-5',
        title: '家用壁挂式交流充电桩',
        image: 'https://github.com/minaxyue-ops/MINA/releases/download/1/bannner2.png',
        category: '家用充电',
        description: '极致超薄壁挂曲面，一体隐藏收纳枪线滑轨。',
      },
      {
        id: 'case-ne-6',
        title: '氢燃料电池重卡前脸造型与风阻优化',
        image: 'https://github.com/minaxyue-ops/MINA/releases/download/1/image.37.png',
        category: '氢能装备',
        description: '流线风阻造型与大面积透气进气格栅重工美学。',
      },
    ],
  },
  'home-appliances': {
    key: 'home-appliances',
    title: '家居家电',
    englishTitle: 'SMART HOME APPLIANCES',
    slogan: '美学居住，重塑智慧生活体验',
    image: 'https://github.com/minaxyue-ops/MINA/releases/download/1/xiaozhi.jpg',
    description: '聚焦家居美学与智慧家电升级，通过柔性质感CMF、隐形交互与家族化PI设计，让科技产品自然融入现代生活空间，提升居家幸福感。',
    metrics: COMMON_METRICS,
    capabilities: [
      { title: '智慧厨房家电' },
      { title: '环境电器与清洁' },
      { title: '个人护理家电' },
      { title: '智能锁与安防' },
    ],
    cases: [
      {
        id: 'case-ha-1',
        title: '西门子新一代智能厨电家族化美学规范',
        image: 'https://github.com/minaxyue-ops/MINA/releases/download/1/xiaozhi.jpg',
        category: '厨电美学',
        description: '拉丝钛金与隐形触控面板，重塑德系精工高端厨电体验。',
      },
      {
        id: 'case-ha-2',
        title: '追觅高端智能洗地机结构与外观创新',
        image: 'https://github.com/minaxyue-ops/MINA/releases/download/1/image.35.png',
        category: '清洁电器',
        description: '自清洁滚刷水路结构与低重心人机推拉手柄。',
      },
      {
        id: 'case-ha-3',
        title: '隐形智能温控新风系统界面与造型',
        image: 'https://github.com/minaxyue-ops/MINA/releases/download/1/bannner2.png',
        category: '环境电器',
        description: '融入极简墙面的隐藏式出风口与空气质量呼吸灯。',
      },
      {
        id: 'case-ha-4',
        title: '智能人脸识别锁一体化纯平面板',
        image: 'https://github.com/minaxyue-ops/MINA/releases/download/1/case_hit.jpg',
        category: '智能安防',
        description: '3D结构光红外人脸识别与全自动静音锁体堆叠。',
      },
      {
        id: 'case-ha-5',
        title: '超轻量无叶静音吹风机CMF创新',
        image: '/src/assets/images/lkk_cosmetics_jars_1783302947995.jpg',
        category: '个护家电',
        description: '11万转高速风机平衡配重与哑光绒面金属质感。',
      },
      {
        id: 'case-ha-6',
        title: '桌面意式胶囊咖啡机微型堆叠',
        image: '/src/assets/images/lkk_coffee_mockup_1783302972120.jpg',
        category: '厨房家电',
        description: '高压水泵紧凑空间布局与磁吸可拆卸接水盘。',
      },
    ],
  },
  'smart-3c': {
    key: 'smart-3c',
    title: '智能3C',
    englishTitle: 'SMART 3C ELECTRONICS',
    slogan: '精密质感，定义极致科技美学',
    image: '/src/assets/images/lkk_coffee_mockup_1783302972120.jpg',
    description: '针对智能穿戴、音频外设、AR/VR眼镜与移动终端，洛可可运用极限空间堆叠、航空级质感CMF与人体工程学设计，打造风靡市场的科技潮品。',
    metrics: COMMON_METRICS,
    capabilities: [
      { title: '智能穿戴设备' },
      { title: '声学与音频终端' },
      { title: 'AR/VR前沿硬件' },
      { title: '智能移动终端' },
    ],
    cases: [
      {
        id: 'case-3c-1',
        title: '开放式降噪蓝牙耳机人机工程设计',
        image: '/src/assets/images/lkk_coffee_mockup_1783302972120.jpg',
        category: '声学终端',
        description: '不入耳空气传导配重与液态硅胶耳挂无感佩戴。',
      },
      {
        id: 'case-3c-2',
        title: '轻量化AR智能眼镜光学堆叠',
        image: 'https://github.com/minaxyue-ops/MINA/releases/download/1/image.35.png',
        category: '前沿硬件',
        description: '鸟眼/Micro-OLED光学方案与超轻碳纤维镜腿。',
      },
      {
        id: 'case-3c-3',
        title: '高端三防智能手表金属CMF与防护',
        image: 'https://github.com/minaxyue-ops/MINA/releases/download/1/case_hit.jpg',
        category: '智能穿戴',
        description: '钛合金削切表壳与100米潜水级气密防护设计。',
      },
      {
        id: 'case-3c-4',
        title: '便携可拆卸无线领夹麦克风',
        image: 'https://github.com/minaxyue-ops/MINA/releases/download/1/gugong.jpg',
        category: '音频终端',
        description: '磁吸收纳充电盒与触控式高清LCD屏交互。',
      },
      {
        id: 'case-3c-5',
        title: '极简三合一桌面无线快充底座',
        image: 'https://github.com/minaxyue-ops/MINA/releases/download/1/xiaozhi.jpg',
        category: '桌面外设',
        description: '精密铝合金氧化配重与散热风道隐藏设计。',
      },
      {
        id: 'case-3c-6',
        title: '桌面高保真水冷音响造型创新',
        image: 'https://github.com/minaxyue-ops/MINA/releases/download/1/bannner2.png',
        category: '桌面外设',
        description: '透明亚克力与流体灯效随音乐律动。',
      },
    ],
  },
  'healthcare': {
    key: 'healthcare',
    title: '智能医疗',
    englishTitle: 'SMART HEALTHCARE & MEDICAL',
    slogan: '专业赋能，守护生命健康品质',
    image: 'https://github.com/minaxyue-ops/MINA/releases/download/1/sizherui.jpg',
    description: '兼顾严谨医疗合规与人文心理关怀，洛可可为大型诊疗设备、手术机器人、家用健康监测及无障碍康复设备提供信任感与人性化并重的落地全案。',
    metrics: COMMON_METRICS,
    capabilities: [
      { title: '手术及诊疗机器人' },
      { title: '医疗影像与大设备' },
      { title: '家用健康监测' },
      { title: '康复辅具与无障碍' },
    ],
    cases: [
      {
        id: 'case-med-1',
        title: '思哲睿康多多手术机器人产品创新设计',
        image: 'https://github.com/minaxyue-ops/MINA/releases/download/1/case_sizherui.jpg',
        category: '诊疗机器人',
        description: '减小患者心理恐惧感的亲和形态与医生多臂协作控制台。',
      },
      {
        id: 'case-med-2',
        title: '掌上超声诊断仪人机手柄与散热结构',
        image: 'https://github.com/minaxyue-ops/MINA/releases/download/1/case_hit.jpg',
        category: '医疗便携',
        description: '口袋式超声探头热传导优化与防滑医用级硅胶包胶。',
      },
      {
        id: 'case-med-3',
        title: '智能胰岛素无针注射器结构创新',
        image: 'https://github.com/minaxyue-ops/MINA/releases/download/1/sizherui.jpg',
        category: '家用健康',
        description: '高压微孔射流推力结构与简易剂量调档机构。',
      },
      {
        id: 'case-med-4',
        title: '居家心电动态监测贴无感穿戴',
        image: 'https://github.com/minaxyue-ops/MINA/releases/download/1/case_pophie.jpg',
        category: '无感监测',
        description: '透气柔性电路与柔韧医用电极贴合技术。',
      },
      {
        id: 'case-med-5',
        title: '下肢智能康复外骨骼机器人',
        image: '/src/assets/images/lkk_humanoid_robot_1783302961282.jpg',
        category: '康复辅具',
        description: '可调节人体工学绑带与关节伺服安全限位保护。',
      },
      {
        id: 'case-med-6',
        title: '全自动无尘血液分析中控台',
        image: 'https://github.com/minaxyue-ops/MINA/releases/download/1/aisidun.jpg',
        category: '实验室大设备',
        description: '实验室模块化钣金罩壳与流线观察窗视距优化。',
      },
    ],
  },
  'food-beverage': {
    key: 'food-beverage',
    title: '食品酒饮',
    englishTitle: 'FOOD & BEVERAGE',
    slogan: '视觉味觉，塑造品牌爆品护城河',
    image: 'https://github.com/minaxyue-ops/MINA/releases/download/1/7.15.1.3.gif',
    description: '洞察新消费人群审美与生活方式，洛可可提供从爆品瓶型开模、锁鲜结构创新、国潮礼盒到品牌IP联名的一站式服务，助力品牌引爆增长。',
    metrics: COMMON_METRICS,
    capabilities: [
      { title: '爆品包装瓶型设计' },
      { title: '锁鲜与结构创新' },
      { title: '国潮与高端礼盒' },
      { title: '品牌视觉IP联名' },
    ],
    cases: [
      {
        id: 'case-fb-1',
        title: '悦鲜活年轻化瓶口阻气锁鲜结构设计',
        image: 'https://github.com/minaxyue-ops/MINA/releases/download/1/7.15.1.3.gif',
        category: '锁鲜结构',
        description: '专利阻气瓶口密封结构，保持鲜奶极致风味与高品质。',
      },
      {
        id: 'case-fb-2',
        title: '海底捞随行即食系列锁鲜加热腔结构',
        image: 'https://github.com/minaxyue-ops/MINA/releases/download/1/image.35.png',
        category: '快消创新',
        description: '人性化防烫隔热腔体与安全蒸汽泄压结构。',
      },
      {
        id: 'case-fb-3',
        title: '库迪咖啡跨界爆款高颜值包装设计',
        image: '/src/assets/images/lkk_coffee_mockup_1783302972120.jpg',
        category: '品牌IP联名',
        description: '潮流IP插画与手提双杯杯套，引发社交打卡裂变。',
      },
      {
        id: 'case-fb-4',
        title: '盒马鲜生高端精酿啤酒铝罐插画与包装',
        image: '/src/assets/images/lkk_cosmetics_jars_1783302947995.jpg',
        category: '精酿啤酒',
        description: '新锐插画艺术风格与触感磨砂罐身。',
      },
      {
        id: 'case-fb-5',
        title: '茅台联名文化礼盒结构与视觉重构',
        image: 'https://github.com/minaxyue-ops/MINA/releases/download/1/gugong.jpg',
        category: '高端礼盒',
        description: '古典榫卯结构盒身与暗纹浮雕工艺。',
      },
      {
        id: 'case-fb-6',
        title: '三只松鼠国潮坚果立体翻折礼盒',
        image: 'https://github.com/minaxyue-ops/MINA/releases/download/1/image.33.png',
        category: '休闲食品',
        description: '开启即展示的立体小剧场包装盒结构。',
      },
    ],
  },
  'retail': {
    key: 'retail',
    title: '连锁零售',
    englishTitle: 'RETAIL & E-COMMERCE',
    slogan: '场景革新，连接商业空间与用户',
    image: '/src/assets/images/case_jingkelong.jpg',
    description: '构建高效集客的零售新场景，洛可可融汇智能自助零售终端、门店SI空间设计与人机工学中控，助力连锁品牌实现坪效与体验双提升。',
    metrics: COMMON_METRICS,
    capabilities: [
      { title: '智能自助零售终端' },
      { title: '门店SI空间与展陈' },
      { title: '新零售收银与中控' },
      { title: '品牌符号与空间导视' },
    ],
    cases: [
      {
        id: 'case-ret-1',
        title: '京客隆新一代自助零售收银系统结构',
        image: '/src/assets/images/case_jingkelong.jpg',
        category: '自助终端',
        description: '模块化扫码/刷脸支付与小票打印人机倾角设计。',
      },
      {
        id: 'case-ret-2',
        title: '良品铺子智能新零售终端工业设计',
        image: 'https://github.com/minaxyue-ops/MINA/releases/download/1/liangpin.jpg',
        category: '新零售',
        description: '极简货架形态与友好人机倾角，提升商业空间转化。',
      },
      {
        id: 'case-ret-3',
        title: '智慧便利店无人结算台人机交互设计',
        image: 'https://github.com/minaxyue-ops/MINA/releases/download/1/xiaozhi.jpg',
        category: '无人零售',
        description: '多重摄像头重力感应识别与触控刷脸一体机。',
      },
      {
        id: 'case-ret-4',
        title: '连锁餐饮标准化模块化厨房设备',
        image: 'https://github.com/minaxyue-ops/MINA/releases/download/1/aisidun.jpg',
        category: '餐饮装备',
        description: '易清洁不锈钢钣金与标准化作业流线设计。',
      },
      {
        id: 'case-ret-5',
        title: '高端美妆品牌快闪店互动展示装置',
        image: '/src/assets/images/lkk_cosmetics_jars_1783302947995.jpg',
        category: '品牌SI',
        description: '沉浸式光影镜面展台与智能试妆屏集成。',
      },
      {
        id: 'case-ret-6',
        title: '智能货架电子墨水屏价签框',
        image: 'https://github.com/minaxyue-ops/MINA/releases/download/1/case_hit.jpg',
        category: '智能导视',
        description: '超低功耗E-ink卡扣显示与快速无线变价。',
      },
    ],
  },
  'beauty-personal-care': {
    key: 'beauty-personal-care',
    title: '美妆个护',
    englishTitle: 'BEAUTY & PERSONAL CARE',
    slogan: '情绪美学，定义纯素与奢华护理',
    image: '/src/assets/images/lkk_cosmetics_jars_1783302947995.jpg',
    description: '深耕后流量时代的美妆个护美学创新，洛可可提供高级感瓶型造型、可持续环保材料（PCR）到居家高颜值美体仪的全链条设计。',
    metrics: COMMON_METRICS,
    capabilities: [
      { title: '奢华瓶型与包材设计' },
      { title: '环保与PCR可持续材料' },
      { title: '智能美体美肤仪器' },
      { title: '品牌感官与情绪包装' },
    ],
    cases: [
      {
        id: 'case-bpc-1',
        title: '高档化妆品亚克力环保材料瓶量产',
        image: '/src/assets/images/lkk_cosmetics_jars_1783302947995.jpg',
        category: '包材创新',
        description: '渐变水晶亚克力材质与环保替换芯结构设计。',
      },
      {
        id: 'case-bpc-2',
        title: '智能RF射频美容仪光学弧面设计',
        image: 'https://github.com/minaxyue-ops/MINA/releases/download/1/case_pophie.jpg',
        category: '美体仪器',
        description: '温感导头人体工学贴合与智能挡位变频。',
      },
      {
        id: 'case-bpc-3',
        title: '磁吸可替换芯奢华口红管外观',
        image: 'https://github.com/minaxyue-ops/MINA/releases/download/1/gugong.jpg',
        category: '彩妆外观',
        description: '重量感金属削切管身与阻尼开合手感。',
      },
      {
        id: 'case-bpc-4',
        title: '纯素护肤极简磨砂玻璃瓶家族包装',
        image: '/src/assets/images/lkk_coffee_mockup_1783302972120.jpg',
        category: '纯素护肤',
        description: '天然木纹瓶盖与半透明蒙砂触感。',
      },
      {
        id: 'case-bpc-5',
        title: '声波洁面仪人体工学手柄与防水结构',
        image: 'https://github.com/minaxyue-ops/MINA/releases/download/1/xiaozhi.jpg',
        category: '洁面仪器',
        description: 'IPX7浑然一体包胶防滑与无线感应充电底座。',
      },
      {
        id: 'case-bpc-6',
        title: '精油香氛冷喷雾化扩香仪',
        image: 'https://github.com/minaxyue-ops/MINA/releases/download/1/image.33.png',
        category: '香氛体验',
        description: '静音超声雾化与火山岩扩香底座造型。',
      },
    ],
  },
  'cultural-creative': {
    key: 'cultural-creative',
    title: '文化创意',
    englishTitle: 'CULTURE & CREATIVE IP',
    slogan: '文化提炼，赋能超级品牌IP资产',
    image: 'https://github.com/minaxyue-ops/MINA/releases/download/1/gugong.jpg',
    description: '提取传统文脉精髓与当代流行潮玩语言，洛可可打造文博衍生品、品牌吉祥物IP、盲盒手办及典藏文化礼盒，让文旅文化长效生金。',
    metrics: COMMON_METRICS,
    capabilities: [
      { title: '博物馆与文旅衍生品' },
      { title: '超级品牌吉祥物IP' },
      { title: '盲盒与潮流手办' },
      { title: '典藏文化礼盒设计' },
    ],
    cases: [
      {
        id: 'case-cc-1',
        title: '故宫文创智能文化设备外观设计',
        image: 'https://github.com/minaxyue-ops/MINA/releases/download/1/gugong.jpg',
        category: '文博衍生',
        description: '古建美学元素与现代智能科技无缝交融。',
      },
      {
        id: 'case-cc-2',
        title: '故宫猫盲盒系列环保多色注塑结构',
        image: 'https://github.com/minaxyue-ops/MINA/releases/download/1/image.33.png',
        category: '潮玩盲盒',
        description: '精细模具分件与环保手感油涂层。',
      },
      {
        id: 'case-cc-3',
        title: '敦煌研究院飞天文创智能音箱外观',
        image: 'https://github.com/minaxyue-ops/MINA/releases/download/1/case_pophie.jpg',
        category: '文创科技',
        description: '飞天飘带律动线条与丝路金属镀金工艺。',
      },
      {
        id: 'case-cc-4',
        title: '国家宝藏金铜礼器文化重构手办',
        image: 'https://github.com/minaxyue-ops/MINA/releases/download/1/image.39.png',
        category: '文化重构',
        description: '将青铜纹饰转化为现代化几何高精手办。',
      },
      {
        id: 'case-cc-5',
        title: '杭州亚运会吉祥物周边文创衍生品',
        image: 'https://github.com/minaxyue-ops/MINA/releases/download/1/bannner2.png',
        category: '体育盛会',
        description: '三只吉祥物江南意韵与现代运动美学。',
      },
      {
        id: 'case-cc-6',
        title: '中国航天太空探索科普礼盒',
        image: '/src/assets/images/lkk_humanoid_robot_1783302961282.jpg',
        category: '航天文创',
        description: '陨石纹理开盒体验与限量版金属徽章。',
      },
    ],
  },
  'pet-economy': {
    key: 'pet-economy',
    title: '宠物经济',
    englishTitle: 'PET ECONOMY INNOVATION',
    slogan: '拟人养宠，开启人宠共居新风尚',
    image: 'https://github.com/minaxyue-ops/MINA/releases/download/1/image.33.png',
    description: '洞察高品质精细养宠需求，洛可可为智能喂水器、防卡粮喂食机、全自动猫砂舱及人宠共用家居提供安全、低噪、高颜值的全套设计。',
    metrics: COMMON_METRICS,
    capabilities: [
      { title: '智能宠物喂养设备' },
      { title: '宠物清洁与健康防护' },
      { title: '人宠共居家居用品' },
      { title: '宠物出行与安全装备' },
    ],
    cases: [
      {
        id: 'case-pet-1',
        title: '智能无线抑菌循环过滤宠物饮水机',
        image: 'https://github.com/minaxyue-ops/MINA/releases/download/1/image.33.png',
        category: '智能饮水',
        description: '水电分离无线感应水泵与涌泉防打湿胡须水槽。',
      },
      {
        id: 'case-pet-2',
        title: '自动密闭除臭智能猫砂舱结构',
        image: 'https://github.com/minaxyue-ops/MINA/releases/download/1/xiaozhi.jpg',
        category: '智能清洁',
        description: '红外防夹猫安全保护与密闭集便舱活氧除臭。',
      },
      {
        id: 'case-pet-3',
        title: '静音大风量宠物立体烘干箱',
        image: 'https://github.com/minaxyue-ops/MINA/releases/download/1/bannner2.png',
        category: '宠物健康',
        description: '底部环形出风与防应激全景透明观察窗。',
      },
      {
        id: 'case-pet-4',
        title: '便携可折叠防爆宠物车载出行舱',
        image: 'https://github.com/minaxyue-ops/MINA/releases/download/1/image.37.png',
        category: '宠物出行',
        description: 'ISOFIX安全座椅接口与抗抓咬高透网布。',
      },
      {
        id: 'case-pet-5',
        title: '智能防卡粮精准称重喂食机',
        image: '/src/assets/images/lkk_coffee_mockup_1783302972120.jpg',
        category: '智能喂养',
        description: '软硅胶搅拌桨防卡粮与离线备用电池供电。',
      },
      {
        id: 'case-pet-6',
        title: '组合式人宠共建猫爬架家居',
        image: 'https://github.com/minaxyue-ops/MINA/releases/download/1/gugong.jpg',
        category: '人宠家居',
        description: '实木多层考究家具质感与模块化组合猫洞。',
      },
    ],
  },
  'transportation': {
    key: 'transportation',
    title: '智能交通',
    englishTitle: 'SMART MOBILITY & TRANSPORTATION',
    slogan: '智慧出行，定义未来交通体验',
    image: 'https://github.com/minaxyue-ops/MINA/releases/download/1/image.37.png',
    description: '涵盖新能源车智能座舱、电动两轮微出行、自动驾驶出租车及飞行汽车概念造型，洛可可致力于打造科技感与人性化交融的未来移动出行体验。',
    metrics: COMMON_METRICS,
    capabilities: [
      { title: '智能座舱与内饰美学' },
      { title: '智能两轮与微出行' },
      { title: '自动驾驶中控与外设' },
      { title: '概念车与飞行器形态' },
    ],
    cases: [
      {
        id: 'case-tra-1',
        title: '极氪智能充电桩与车机外设',
        image: 'https://github.com/minaxyue-ops/MINA/releases/download/1/image.37.png',
        category: '车机外设',
        description: '将先锋猎装车家族设计语言延伸至车主充电生活。',
      },
      {
        id: 'case-tra-2',
        title: '城市年轻轻量电动滑板车一体车架',
        image: 'https://github.com/minaxyue-ops/MINA/releases/download/1/image.39.png',
        category: '微出行',
        description: '镁合金压铸一体成型车架与3秒快速折叠机构。',
      },
      {
        id: 'case-tra-3',
        title: '智能骑行头盔HUD抬头显示',
        image: 'https://github.com/minaxyue-ops/MINA/releases/download/1/case_hit.jpg',
        category: '智能装备',
        description: '风阻流线外壳与集成光波导HUD安全导航。',
      },
    ],
  },
  'home-apparel': {
    key: 'home-apparel',
    title: '家居鞋服',
    englishTitle: 'HOME & APPAREL INNOVATION',
    slogan: '时尚美学，重塑品质生活方式',
    image: 'https://github.com/minaxyue-ops/MINA/releases/download/1/xiaozhi.jpg',
    description: '融合人体工学、高品质面料与现代软装美学，洛可可为家居纺织、智能鞋服与品质日百提供全流程创新设计，赋能品牌溢价与体验重构。',
    metrics: COMMON_METRICS,
    capabilities: [
      { title: '智能人体工学鞋服' },
      { title: '家居软装与纺织美学' },
      { title: '可穿戴温控智能设备' },
      { title: '环保可持续家居面料' },
    ],
    cases: [
      {
        id: 'case-ha-1',
        title: '人体工学减压智能减震跑鞋',
        image: 'https://github.com/minaxyue-ops/MINA/releases/download/1/xiaozhi.jpg',
        category: '智能鞋服',
        description: '3D打印流线中底与一体飞织包裹透气鞋面。',
      },
      {
        id: 'case-ha-2',
        title: '智能恒温发热轻薄保暖服饰',
        image: 'https://github.com/minaxyue-ops/MINA/releases/download/1/bannner2.png',
        category: '温控穿戴',
        description: '柔性石墨烯发热芯片与三档智能控温模块。',
      },
      {
        id: 'case-ha-3',
        title: '现代极简家居软装睡眠深沉系列',
        image: 'https://github.com/minaxyue-ops/MINA/releases/download/1/gugong.jpg',
        category: '家居睡眠',
        description: '天然抗菌竹纤维与微压重力深睡毯设计。',
      },
    ],
  },
  'wellness-health': {
    key: 'wellness-health',
    title: '大健康',
    englishTitle: 'GREAT HEALTH & WELLNESS',
    slogan: '预防养生，全周期健康管理',
    image: 'https://github.com/minaxyue-ops/MINA/releases/download/2%E6%A1%88%E4%BE%8B%E8%AF%A6%E6%83%85%E9%A1%B5%E9%85%8D%E5%9B%BE/1.png',
    description: '聚焦现代滋补养生、家庭健康监测与科学关怀，洛可通过产品创新与东方美学视觉叙事，助力大健康品牌跨越生长周期。',
    metrics: COMMON_METRICS,
    capabilities: [
      { title: '现代滋补品体验创新' },
      { title: '家庭健康监测与理疗' },
      { title: '个人健康体征检测硬件' },
      { title: '科学养生品牌全案升级' },
    ],
    cases: [
      {
        id: 'case-wh-1',
        title: '小仙炖鲜炖燕窝突破性宫廷碗型与全体验重构',
        image: 'https://github.com/minaxyue-ops/MINA/releases/download/2%E6%A1%88%E4%BE%8B%E8%AF%A6%E6%83%85%E9%A1%B5%E9%85%8D%E5%9B%BE/1.png',
        category: '现代滋补',
        description: '首创大口宫廷碗型结构，彻底解决传统瓶身底残留问题。',
      },
      {
        id: 'case-wh-2',
        title: '便携式便携温热颈椎理疗仪',
        image: 'https://github.com/minaxyue-ops/MINA/releases/download/1/sizherui.jpg',
        category: '家庭理疗',
        description: '脉冲电按摩与恒温热敷，流线挂颈紧贴无感佩戴。',
      },
    ],
  },
};

interface IndustryDetailPageProps {
  industryKey: string;
  onOpenContactModal: () => void;
  onSelectCase: (cs: CaseStudy) => void;
  onNavigateParent?: (parentPath: string) => void;
  onNavigateDetail?: (url: string) => void;
}

export default function IndustryDetailPage({
  industryKey,
  onOpenContactModal,
  onSelectCase,
  onNavigateParent,
  onNavigateDetail,
}: IndustryDetailPageProps) {
  const data = INDUSTRY_DATA[industryKey] || INDUSTRY_DATA['industrial-equipment'];

  const getCapabilityIcon = (title: string, iconName?: string) => {
    if (iconName) {
      switch (iconName) {
        case 'Cpu': return <Cpu className="w-6 h-6 text-[#007BC7]" />;
        case 'Zap': return <Zap className="w-6 h-6 text-[#007BC7]" />;
        case 'ShieldCheck': return <ShieldCheck className="w-6 h-6 text-[#007BC7]" />;
        case 'Bot': return <Bot className="w-6 h-6 text-[#007BC7]" />;
        case 'Stethoscope': return <Stethoscope className="w-6 h-6 text-[#007BC7]" />;
        case 'Battery': return <Battery className="w-6 h-6 text-[#007BC7]" />;
        case 'Home': return <Home className="w-6 h-6 text-[#007BC7]" />;
        case 'Smartphone': return <Smartphone className="w-6 h-6 text-[#007BC7]" />;
        case 'Utensils': return <Utensils className="w-6 h-6 text-[#007BC7]" />;
        case 'Store': return <Store className="w-6 h-6 text-[#007BC7]" />;
        case 'Sparkles': return <Sparkles className="w-6 h-6 text-[#007BC7]" />;
        case 'Heart': return <Heart className="w-6 h-6 text-[#007BC7]" />;
        case 'Car': return <Car className="w-6 h-6 text-[#007BC7]" />;
      }
    }

    if (title.includes('电气') || title.includes('芯片') || title.includes('智能') || title.includes('具身') || title.includes('电子')) return <Cpu className="w-6 h-6 text-[#007BC7]" />;
    if (title.includes('通信') || title.includes('网络') || title.includes('安防') || title.includes('中控')) return <Radio className="w-6 h-6 text-[#007BC7]" />;
    if (title.includes('通用') || title.includes('设备') || title.includes('机械') || title.includes('工具')) return <Wrench className="w-6 h-6 text-[#007BC7]" />;
    if (title.includes('专用') || title.includes('装备') || title.includes('防护') || title.includes('安全')) return <ShieldCheck className="w-6 h-6 text-[#007BC7]" />;
    if (title.includes('机器人') || title.includes('工业臂')) return <Bot className="w-6 h-6 text-[#007BC7]" />;
    if (title.includes('手术') || title.includes('诊疗') || title.includes('医疗') || title.includes('康复') || title.includes('生化')) return <Stethoscope className="w-6 h-6 text-[#007BC7]" />;
    if (title.includes('充电') || title.includes('电源') || title.includes('电池') || title.includes('储能')) return <Battery className="w-6 h-6 text-[#007BC7]" />;
    if (title.includes('氢能') || title.includes('清洁') || title.includes('环境') || title.includes('环保') || title.includes('PCR')) return <Sun className="w-6 h-6 text-[#007BC7]" />;
    if (title.includes('厨房') || title.includes('家电')) return <Home className="w-6 h-6 text-[#007BC7]" />;
    if (title.includes('穿戴') || title.includes('耳机') || title.includes('办公') || title.includes('配件')) return <Headphones className="w-6 h-6 text-[#007BC7]" />;
    if (title.includes('电竞') || title.includes('游戏')) return <Gamepad2 className="w-6 h-6 text-[#007BC7]" />;
    if (title.includes('3C') || title.includes('手机') || title.includes('消费电子')) return <Smartphone className="w-6 h-6 text-[#007BC7]" />;
    if (title.includes('酒饮') || title.includes('食品') || title.includes('餐饮') || title.includes('瓶型')) return <Utensils className="w-6 h-6 text-[#007BC7]" />;
    if (title.includes('零售') || title.includes('空间') || title.includes('便利') || title.includes('货柜')) return <Store className="w-6 h-6 text-[#007BC7]" />;
    if (title.includes('价签') || title.includes('二维码')) return <QrCode className="w-6 h-6 text-[#007BC7]" />;
    if (title.includes('奢华') || title.includes('美妆') || title.includes('美体') || title.includes('感官') || title.includes('情绪')) return <Sparkles className="w-6 h-6 text-[#007BC7]" />;
    if (title.includes('博物馆') || title.includes('文创') || title.includes('手办') || title.includes('礼盒') || title.includes('吉祥物')) return <Gift className="w-6 h-6 text-[#007BC7]" />;
    if (title.includes('宠物') || title.includes('喂养') || title.includes('洗护')) return <Heart className="w-6 h-6 text-[#007BC7]" />;
    if (title.includes('出行') || title.includes('滑板') || title.includes('车') || title.includes('飞行器')) return <Car className="w-6 h-6 text-[#007BC7]" />;

    return <Sparkles className="w-6 h-6 text-[#007BC7]" />;
  };

  return (
    <div className="w-full bg-white text-[#1a1a1a] transition-colors">
      
      {/* SCOPED STYLES FOR SERVICE CLASSIFICATION & CASE GRID GRAYSCALE HOVER */}
      <style>{`
        /* 服务分类 #FAFAFA 卡片 - 完全照搬"工业设计"分页 */
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
              onClick={() => onNavigateParent && onNavigateParent('/industry')}
              className="hover:text-[#007BC7] transition-colors cursor-pointer border-none bg-transparent p-0"
            >
              垂直行业赛道
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
              联系我们
              <ArrowRight className="w-4 h-4 text-white" />
            </button>
            <span className="text-[11px] text-[#8C8C8C] text-center font-mono mt-1">
              资深行业专家 1V1 深度对接
            </span>
          </div>

        </div>
      </section>

      {/* Glassmorphism Metrics Grid Section */}
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

      {/* 三、服务分类——完全照搬"工业设计"分页视觉设计与交互 */}
      <section className="py-16 md:py-20 bg-white border-b border-[#E5E5E5]">
        <div className="max-w-[95%] mx-auto px-4">
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
              聚焦垂直领域的特定技术场景与用户体验需求，提供针对性的全闭环解决方案。
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
            {data.capabilities.map((cap, idx) => (
              <div key={idx} className="category-card group cursor-pointer flex flex-col items-center">
                {/* 72px圆形图标徽章 */}
                <div className="category-icon-badge text-[#007BC7]">
                  {getCapabilityIcon(cap.title, cap.icon)}
                </div>
                {/* 标题文字 */}
                <h3 className="text-base md:text-lg font-semibold text-[#1A1A1A] font-display mb-2">
                  {cap.title}
                </h3>
                {/* 2行 line-clamp 描述 (原本没有描述文字的不强行补充) */}
                {cap.desc && (
                  <p className="category-desc">
                    {cap.desc}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 四、案例锦集——照搬首页成功案例灰度悬停网格 (名称保持"案例锦集") */}
      <section className="py-16 md:py-24 bg-white border-b border-[#E5E5E5]">
        <div className="max-w-[95%] mx-auto px-4">
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
              甄选垂直行业代表性爆品案例，展现行业创新与设计落地的商业成果。
            </p>
          </div>

          <div className="case-grid-v2">
            {data.cases.map((cs) => (
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

    </div>
  );
}
