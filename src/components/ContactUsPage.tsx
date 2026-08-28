import React, { useState, useEffect, useRef, useMemo } from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Building2, 
  ChevronDown, 
  Send, 
  CheckCircle2, 
  Copy, 
  Briefcase, 
  Search, 
  Sparkles,
  ArrowRight,
  ExternalLink,
  Users,
  Image
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import * as echarts from 'echarts';
import chinaGeoJson from '../data/china.json';

// Ensure echarts is globally available for echarts-gl if loaded
if (typeof window !== 'undefined') {
  (window as any).echarts = echarts;
  import('echarts-gl').catch(() => {});
}

interface OfficeInfo {
  id: string;
  name: string;
  city: string;
  isHQ?: boolean;
  coords: [number, number]; // [lng, lat]
  phone: string;
  email: string;
  address: string;
  desc: string;
  tag: string;
  image?: string;
}

interface JobPosition {
  id: string;
  title: string;
  city: string;
  department: string;
  type: string;
  responsibilities: string[];
  requirements: string[];
  email: string;
}

interface ContactUsPageProps {
  onOpenContactModal?: () => void;
  onNavigate?: (path: string) => void;
}

// 9 Cities Official Office Data
const OFFICES_DATA: OfficeInfo[] = [
  {
    id: 'beijing',
    name: '北京•总部',
    city: '北京',
    isHQ: true,
    coords: [116.4074, 39.9042],
    phone: '400 692 9690',
    email: 'lkk@lkkdesign.com',
    address: '北京市朝阳区来广营西路5号望京诚盈中心3号楼',
    desc: '集团战略决策中心、AI设计实验室与品牌创新事业集群所在地。',
    tag: '集团总部 · 创新策源地',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'shenzhen',
    name: '深圳',
    city: '深圳',
    coords: [114.0579, 22.5431],
    phone: '400 692 9690',
    email: 'lkk@lkkdesign.com',
    address: '深圳市福田区深业上城CEEC10层',
    desc: '深度依托大湾区电子信息与智能硬件产业链，打造全球硬件爆款。',
    tag: '华南创新中心 · 硬件基地',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'shanghai',
    name: '上海',
    city: '上海',
    coords: [121.4737, 31.2304],
    phone: '400 692 9690',
    email: 'lkk@lkkdesign.com',
    address: '上海市黄浦区局门路457号八号桥四期408室',
    desc: '立足华东时尚与新消费高地，赋能全球品牌年轻化与品类突破。',
    tag: '华东创新中心 · 品牌设计',
    image: 'https://images.unsplash.com/photo-1541888946425-d0fbb186a5b7?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'suzhou',
    name: '苏州',
    city: '苏州',
    coords: [120.5853, 31.2989],
    phone: '400 692 9690',
    email: 'lkk@lkkdesign.com',
    address: '江苏省苏州市工业园区酝慧路168号星洲大厦8楼',
    desc: '聚焦高端制造、医疗器械与精密仪器领域的深度研发与工业设计。',
    tag: '医疗与高端制造创新中心',
    image: 'https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'hangzhou',
    name: '杭州',
    city: '杭州',
    coords: [120.1551, 30.2741],
    phone: '400 692 9690',
    email: 'lkk@lkkdesign.com',
    address: '浙江省杭州市余杭区仓前街道梦想小镇创业大街26幢',
    desc: '紧密联动数字经济与电商智造，驱动新零售与智能生活终端升级。',
    tag: '数字电商与生活创新中心',
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'nanjing',
    name: '南京',
    city: '南京',
    coords: [118.7969, 32.0603],
    phone: '400 692 9690',
    email: 'lkk@lkkdesign.com',
    address: '江苏省南京市秦淮区菱角市66号国家领军创业园18号楼',
    desc: '融合高校科技成果转化与硬科技产品创新，助力传统企业智造升级。',
    tag: '硬科技与成果转化基地',
    image: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'chengdu',
    name: '成都',
    city: '成都',
    coords: [104.0668, 30.5728],
    phone: '400 692 9690',
    email: 'lkk@lkkdesign.com',
    address: '成都市成华区仙韵一路450号天府设计产业园',
    desc: '西南区域创意设计枢纽，文创IP、休食快消与智能出行设计基地。',
    tag: '西南创新中心 · 文创IP',
    image: 'https://images.unsplash.com/photo-1517502884422-41eaead166d4?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'foshan',
    name: '佛山',
    city: '佛山',
    coords: [113.1220, 23.0288],
    phone: '400 692 9690',
    email: 'lkk@lkkdesign.com',
    address: '佛山南海区桂城街道海八路金融公园1号馆',
    desc: '深耕家电集群与泛家居产业，工业设计深度融入万亿制造产业链。',
    tag: '泛家居与智能家电基地',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'nanchang',
    name: '南昌',
    city: '南昌',
    coords: [115.8581, 28.6820],
    phone: '400 692 9690',
    email: 'lkk@lkkdesign.com',
    address: '江西省南昌市青山湖区上海路699号699文化创意园68栋优创空间2楼B07',
    desc: '服务中部崛起的产业创新窗口，助力地方特色产业品类升级。',
    tag: '中部特色产业创新中心',
    image: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=800&q=80'
  }
];

// Mapping of City to official Province name in GeoJSON
const CITY_TO_PROVINCE: Record<string, string> = {
  '北京•总部': '北京市',
  '深圳': '广东省',
  '上海': '上海市',
  '苏州': '江苏省',
  '杭州': '浙江省',
  '南京': '江苏省',
  '成都': '四川省',
  '佛山': '广东省',
  '南昌': '江西省',
};

// Complete 34 provincial administrative regions matching GeoJSON
const ALL_PROVINCE_NAMES = [
  '北京市', '天津市', '河北省', '山西省', '内蒙古自治区',
  '辽宁省', '吉林省', '黑龙江省', '上海市', '江苏省',
  '浙江省', '安徽省', '福建省', '江西省', '山东省',
  '河南省', '湖北省', '湖南省', '广东省', '广西壮族自治区',
  '海南省', '重庆市', '四川省', '贵州省', '云南省',
  '西藏自治区', '陕西省', '甘肃省', '青海省', '宁夏回族自治区',
  '新疆维吾尔自治区', '台湾省', '香港特别行政区', '澳门特别行政区'
];

// Province center coordinates for close-up zoom & pan focus
const PROVINCE_CENTERS: Record<string, [number, number]> = {
  '北京市': [116.4074, 40.2],
  '广东省': [113.8, 23.2],
  '上海市': [121.4737, 31.2],
  '江苏省': [119.8, 32.2],
  '浙江省': [120.2, 29.3],
  '四川省': [103.8, 30.5],
  '江西省': [115.8, 27.8],
  '天津市': [117.2, 39.1],
  '河北省': [114.5, 38.0],
  '山西省': [112.5, 37.8],
  '内蒙古自治区': [111.7, 40.8],
  '辽宁省': [123.4, 41.8],
  '吉林省': [125.3, 43.8],
  '黑龙江省': [126.6, 45.7],
  '安徽省': [117.2, 31.8],
  '福建省': [119.3, 26.0],
  '山东省': [117.0, 36.6],
  '河南省': [113.6, 34.7],
  '湖北省': [114.3, 30.5],
  '湖南省': [112.9, 28.1],
  '广西壮族自治区': [108.3, 22.8],
  '海南省': [110.3, 20.0],
  '重庆市': [106.5, 29.5],
  '贵州省': [106.7, 26.5],
  '云南省': [102.8, 24.8],
  '西藏自治区': [91.1, 29.6],
  '陕西省': [108.9, 34.2],
  '甘肃省': [103.8, 36.0],
  '青海省': [101.7, 36.6],
  '宁夏回族自治区': [106.2, 38.4],
  '新疆维吾尔自治区': [87.6, 43.8],
  '台湾省': [121.0, 23.8],
  '香港特别行政区': [114.2, 22.3],
  '澳门特别行政区': [113.5, 22.2]
};

const cityRegionMap: Record<string, string[]> = {
  '北京•总部': ['辽宁省', '吉林省', '黑龙江省', '天津市', '河北省'],
  '成都': ['陕西省', '甘肃省', '宁夏回族自治区', '青海省', '新疆维吾尔自治区', '西藏自治区', '云南省', '贵州省', '重庆市', '广西壮族自治区'],
  '上海': ['江苏省', '浙江省', '安徽省', '山东省'],
  '苏州': ['江苏省', '浙江省', '安徽省'],
  '南京': ['江苏省', '安徽省', '山东省'],
  '杭州': ['浙江省', '江苏省', '福建省'],
  '深圳': ['广西壮族自治区', '海南省', '福建省', '湖南省'],
  '佛山': ['广西壮族自治区', '海南省', '湖南省'],
  '南昌': ['湖北省', '安徽省'],
};

// 各省会/代表城市的经纬度坐标（用于连线终点定位）
const provinceCoords: Record<string, [number, number]> = {
  '辽宁省': [123.4315, 41.8057], '吉林省': [125.3245, 43.8868], '黑龙江省': [126.6425, 45.7569],
  '天津市': [117.1901, 39.1084], '河北省': [114.5149, 38.0428],
  '陕西省': [108.9540, 34.2650], '甘肃省': [103.8236, 36.0581], '宁夏回族自治区': [106.2782, 38.4664],
  '青海省': [101.7782, 36.6171], '新疆维吾尔自治区': [87.6168, 43.8256], '西藏自治区': [91.1322, 29.6600],
  '云南省': [102.8329, 24.8801], '贵州省': [106.7135, 26.5783], '重庆市': [106.5516, 29.5630],
  '广西壮族自治区': [108.3200, 22.8240], '江苏省': [118.7969, 32.0603], '浙江省': [120.1551, 30.2741],
  '安徽省': [117.2830, 31.8612], '山东省': [117.0009, 36.6758], '海南省': [110.3312, 20.0311],
  '福建省': [119.2965, 26.0789], '湖南省': [112.9836, 28.1127], '湖北省': [114.3054, 30.5931],
};

function generateLinesForCity(cityName: string, originCoord: [number, number]) {
  const targetProvinces = cityRegionMap[cityName] || [];
  return targetProvinces
    .filter((p) => provinceCoords[p])
    .map((p) => ({ coords: [originCoord, provinceCoords[p]] }));
}

// Job Openings Database
const JOB_POSITIONS: JobPosition[] = [
  {
    id: 'job-1',
    title: '资深工业设计总监 / 主理人',
    city: '北京',
    department: '工业设计事业部',
    type: '全职 · 10年以上经验',
    email: 'hr@lkkdesign.com',
    responsibilities: [
      '负责集团核心工业设计团队的项目管控与设计美学把控，主导大型客户的产品战略与品类创新设计；',
      '深入研究行业技术与用户体验趋势，输出具有市场爆款潜力的工业设计解决方案；',
      '指导并带教中高级设计师，构建高标准的设计美学规范与高效人机工程研判流程。'
    ],
    requirements: [
      '工业设计或相关专业本科及以上学历，10年以上知名设计公司或科技品牌设计管理经验；',
      '拥有多项国际顶级设计大奖（Red Dot Best of the Best, iF, IDEA等）获奖记录优先；',
      '具有极强的前瞻审美、商业洞察力及跨团队沟通协调能力。'
    ]
  },
  {
    id: 'job-2',
    title: '智能硬件结构设计专家',
    city: '深圳',
    department: '硬件工程中心',
    type: '全职 · 5-8年经验',
    email: 'hr@lkkdesign.com',
    responsibilities: [
      '负责消费电子、智能机器人及医疗设备的堆叠与结构工程开发，确保落地可量产；',
      '配合工业设计团队开展可行性评估，解决塑胶、模具、三防及散热等结构难点；',
      '把控试产、模具检讨及工厂量产交付流程，对产品结构成本与品质负责。'
    ],
    requirements: [
      '机械工程、模具设计或相关专业本科以上，5年以上精密电子结构设计经验；',
      '精通 Creo / ProE / SolidWorks / AutoCAD 等结构设计软件及钣金、注塑工艺；',
      '有完整的从0到1百万级量产项目跟进案例者优先。'
    ]
  },
  {
    id: 'job-3',
    title: '品牌策略咨询总监 (品类突围)',
    city: '上海',
    department: '品类战略咨询部',
    type: '全职 · 8-10年经验',
    email: 'hr@lkkdesign.com',
    responsibilities: [
      '主导消费品、快消乳品及健康科技等领域客户的品牌定位、品类突围策略及三品合一规划；',
      '通过定量与定性市场调研，精准提炼高潜力蓝海赛道与消费者核心买点；',
      '撰写高质量品牌战略报告并面向企业C-Level高管汇报，护航设计方案落地。'
    ],
    requirements: [
      '市场营销、广告学或战略管理等专业本科以上，8年以上品牌咨询或4A广告公司策略经验；',
      '具备深厚的商业敏锐度，擅长将品牌定位转化为具体的产品、包装与视觉符号；',
      '有成功的品类创新与新锐爆款打造全案经验。'
    ]
  },
  {
    id: 'job-4',
    title: '医疗器械工业设计师',
    city: '苏州',
    department: '医疗科技设计部',
    type: '全职 · 3-5年经验',
    email: 'hr@lkkdesign.com',
    responsibilities: [
      '负责手术机器人、体外诊断设备（IVD）及家用健康器械的外观与人机工程设计；',
      '与医疗法规与临床医师深入沟通，遵循医疗器械无菌化与人机安全标准；',
      '完成产品造型渲染、CMF方案制定及产品宣传视觉表现。'
    ],
    requirements: [
      '工业设计专业，3年以上医疗设备或大型工业设备设计经验；',
      '熟悉医疗场景人机交互与CMF材料应用，具备优秀的手绘草图与3D建模能力；',
      '拥有医疗器械相关红星奖或德国iF/Red Dot获奖作品者优先。'
    ]
  },
  {
    id: 'job-5',
    title: '体验设计专家 (UX/UI Designer)',
    city: '杭州',
    department: '数字体验实验室',
    type: '全职 · 4-6年经验',
    email: 'hr@lkkdesign.com',
    responsibilities: [
      '主导智能车载屏、智能家居中控及AI机器人多模态交互界面的UX体系搭建；',
      '输出用户旅程地图、信息架构、交互原型与极具质感的UI视觉设计规范；',
      '与前端与算法团队紧密配合，实现动效与交互细节的高品质还原。'
    ],
    requirements: [
      '视觉传达、交互设计或数字媒体相关专业本科以上，4年以上UX/UI经验；',
      '精通 Figma / Sketch / Principle / After Effects 等交互与动效设计工具；',
      '对AI Agent交互、语音/触控多模态融合有深厚探索者优先。'
    ]
  },
  {
    id: 'job-6',
    title: '硬科技产学研商务总监',
    city: '南京',
    department: '商业发展部',
    type: '全职 · 5年以上经验',
    email: 'hr@lkkdesign.com',
    responsibilities: [
      '负责华东区域专精特新企业、科研院所及龙头制造企业的商务合作开拓；',
      '深入挖掘企业在产品升级、工业设计与供应链对接方面的核心痛点，提供组合式创新解决方案；',
      '建立并维护长远战略合作伙伴关系，对区域销售目标与项目回款负责。'
    ],
    requirements: [
      '本科及以上学历，5年以上TO B高阶商务或咨询设计服务销售背景；',
      '具备出色的商务谈判、提案呈现及大客户关照能力；',
      '对工业设计行业与制造业转型升级有深刻认知。'
    ]
  },
  {
    id: 'job-7',
    title: '文创IP与潮流衍生品设计师',
    city: '成都',
    department: '文创IP事业部',
    type: '全职 · 3-5年经验',
    email: 'hr@lkkdesign.com',
    responsibilities: [
      '负责知名文旅景区、博物馆及品牌IP的形象开发、盲盒手办与衍生品设计；',
      '把控潮玩公仔的3D雕刻建模、涂装CMF及包装延展；',
      '研究泛Z世代消费者审美倾向，输出具有传播话题度的爆款文创设计。'
    ],
    requirements: [
      '动漫插画、玩具设计或工业设计相关专业，3年以上文创IP/潮玩设计经验；',
      '精通 ZBrush / Blender / Keyshot / Photoshop / Illustrator 等建模与绘图软件；',
      '有知名IP（如故宫、博物馆文创）成功落地案例者优先。'
    ]
  },
  {
    id: 'job-8',
    title: '智能家电CMF材料专家',
    city: '佛山',
    department: 'CMF创新研究中心',
    type: '全职 · 4-6年经验',
    email: 'hr@lkkdesign.com',
    responsibilities: [
      '研究泛家居与厨电领域的年度色彩、材料与工艺（CMF）流行趋势；',
      '搭建集团CMF样板库，与供应商建立环保可再生材料与特殊表面处理应用测试；',
      '为客户产品项目提供最具竞争力的CMF方案与批量打样跟进。'
    ],
    requirements: [
      '材料学、艺术设计或工业设计相关专业，4年以上CMF设计研发经验；',
      '熟悉注塑、喷涂、阳极氧化、PVD、IMD等金属与塑料表面工艺流程；',
      '具备极高的审美敏感度与供应链材料把控力。'
    ]
  },
  {
    id: 'job-9',
    title: '快消品包装创新设计师',
    city: '南昌',
    department: '包装体验设计组',
    type: '全职 · 2-4年经验',
    email: 'hr@lkkdesign.com',
    responsibilities: [
      '负责食品饮料、日化快消品的结构包装创新、瓶型造型与视觉烫印延展；',
      '优化开箱体验与环保折叠结构，提升货架展示吸引力与消费信任感；',
      '配合工厂完成印刷打样、刀模检讨与批量生产跟踪。'
    ],
    requirements: [
      '包装工程、视觉传达或工业设计专业本科以上；',
      '熟练运用 C4D / Rhino / AI / PS 进行包装三维建模与视觉贴图渲染；',
      '熟悉各类纸盒、玻璃瓶及软包装工艺与打样测试。'
    ]
  }
];

export const ContactUsPage: React.FC<ContactUsPageProps> = ({ onNavigate }) => {
  // Active selected office (default 'all' to show all network lines)
  const [activeOfficeId, setActiveOfficeId] = useState<string>('all');
  
  // ECharts Map container ref
  const chartRef = useRef<HTMLDivElement>(null);
  const chartInstanceRef = useRef<echarts.ECharts | null>(null);
  const [mapLoaded, setMapLoaded] = useState<boolean>(false);
  const [mapError, setMapError] = useState<boolean>(false);

  // Office copy address feedback state
  const [copiedId, setCopiedId] = useState<string | null>(null);

  // Active Job Accordion state
  const [expandedJobId, setExpandedJobId] = useState<string | null>('job-1');
  const [jobCityFilter, setJobCityFilter] = useState<string>('全部');

  // Contact Form state
  const [formState, setFormState] = useState({
    name: '',
    phone: '',
    company: '',
    city: '',
    demand: ''
  });
  const [formSubmitted, setFormSubmitted] = useState<boolean>(false);

  // Active office object (defaults to Beijing HQ if 'all')
  const activeOffice = useMemo(() => {
    if (activeOfficeId === 'all') return OFFICES_DATA[0];
    return OFFICES_DATA.find(o => o.id === activeOfficeId) || OFFICES_DATA[0];
  }, [activeOfficeId]);

  // Filtered Jobs
  const filteredJobs = useMemo(() => {
    if (jobCityFilter === '全部') return JOB_POSITIONS;
    return JOB_POSITIONS.filter(j => j.city === jobCityFilter);
  }, [jobCityFilter]);

  // Handle City Change from map or list
  const handleSelectOffice = (officeId: string) => {
    setActiveOfficeId(officeId);
  };

  // Copy Address Helper
  const handleCopyAddress = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  // Form Submit Handler
  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.phone) return;
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormState({ name: '', phone: '', company: '', city: '', demand: '' });
    }, 4000);
  };

  // Load ECharts Map directly from local bundled GeoJSON
  useEffect(() => {
    if (!chartRef.current) return;

    const echartsObj = (window as any).echarts || echarts;

    try {
      // Register China map using bundled local GeoJSON
      echartsObj.registerMap('china', chinaGeoJson as any);

      // Initialize ECharts Instance safely
      if (chartInstanceRef.current && typeof chartInstanceRef.current.dispose === 'function') {
        try {
          chartInstanceRef.current.dispose();
        } catch (_) {}
      }
      const chart = echartsObj.init(chartRef.current);
      chartInstanceRef.current = chart;

      setMapLoaded(true);
      setMapError(false);

      // Handle Map Click on Scatter or Geo regions
      chart.on('click', (params: any) => {
        if (params && params.data && params.data.officeId) {
          setActiveOfficeId((prev) => prev === params.data.officeId ? 'all' : params.data.officeId);
        } else if (params && params.name) {
          const matchedOffice = OFFICES_DATA.find(o => CITY_TO_PROVINCE[o.name] === params.name);
          if (matchedOffice) {
            setActiveOfficeId((prev) => prev === matchedOffice.id ? 'all' : matchedOffice.id);
          }
        }
      });

      // Blank area click handler to restore 'all'
      if (chart.getZr && typeof chart.getZr === 'function') {
        const zr = chart.getZr();
        if (zr && typeof zr.on === 'function') {
          zr.on('click', (event: any) => {
            if (event && !event.target) {
              setActiveOfficeId('all');
            }
          });
        }
      }

      // Resize observer for responsive layout changes
      const handleResize = () => {
        if (chartInstanceRef.current && typeof chartInstanceRef.current.resize === 'function') {
          try {
            chartInstanceRef.current.resize();
          } catch (_) {}
        }
      };

      const resizeObserver = new ResizeObserver(() => {
        handleResize();
      });
      resizeObserver.observe(chartRef.current);

      window.addEventListener('resize', handleResize);

      return () => {
        resizeObserver.disconnect();
        window.removeEventListener('resize', handleResize);
        if (chartInstanceRef.current) {
          if (typeof chartInstanceRef.current.dispose === 'function') {
            try {
              chartInstanceRef.current.dispose();
            } catch (_) {}
          }
          chartInstanceRef.current = null;
        }
      };
    } catch (err) {
      console.error('Failed to initialize local China map:', err);
      setMapError(true);
    }
  }, []);

  // Update ECharts options whenever activeOfficeId changes or map loads
  useEffect(() => {
    if (!chartInstanceRef.current || !mapLoaded) return;

    const chart = chartInstanceRef.current;

    // Determine line data, highlighted province, center, zoom, and regions
    let linesData: any[] = [];
    let highlightedProvince: string | null = null;
    let targetCenter: [number, number] = [104.2, 36.2];
    let targetZoom: number = 1.0914;
    const selectedCity = OFFICES_DATA.find((c) => c.id === activeOfficeId);

    if (activeOfficeId === 'all' || !selectedCity) {
      OFFICES_DATA.forEach((city) => {
        linesData = linesData.concat(generateLinesForCity(city.name, city.coords));
      });
      targetCenter = [104.2, 36.2];
      targetZoom = 1.0914;
    } else {
      linesData = generateLinesForCity(selectedCity.name, selectedCity.coords);
      highlightedProvince = CITY_TO_PROVINCE[selectedCity.name] || null;
      if (highlightedProvince && PROVINCE_CENTERS[highlightedProvince]) {
        targetCenter = PROVINCE_CENTERS[highlightedProvince];
      } else {
        targetCenter = selectedCity.coords;
      }
      // Tailored zoom levels according to city/region scale
      if (selectedCity.id === 'beijing') targetZoom = 2.0;
      else if (selectedCity.id === 'shenzhen' || selectedCity.id === 'foshan') targetZoom = 2.2;
      else if (selectedCity.id === 'shanghai' || selectedCity.id === 'suzhou' || selectedCity.id === 'hangzhou' || selectedCity.id === 'nanjing') targetZoom = 2.3;
      else if (selectedCity.id === 'chengdu') targetZoom = 2.0;
      else if (selectedCity.id === 'nanchang') targetZoom = 2.3;
      else targetZoom = 2.1;
    }

    // Highlight selected province with distinct area color and border, no shadow
    const provinceRegions = ALL_PROVINCE_NAMES.map((name) => {
      if (name === highlightedProvince) {
        return {
          name,
          itemStyle: {
            areaColor: '#84A9D6',     // 加深 8% 后的选中高亮省份颜色
            borderColor: '#0071B8',   // 加深 8% 后的边界色
            borderWidth: 2.5,
            shadowBlur: 0,
            shadowOffsetY: 0,
          },
        };
      }
      return {
        name,
        itemStyle: {
          areaColor: '#B4BCC8',       // 加深 8% 后的陆地填充色
          borderColor: '#0071B8',     // 加深 8% 后的边界色
          borderWidth: 1,
          shadowBlur: 0,
          shadowOffsetY: 0,
        },
      };
    });

    const option: any = {
      backgroundColor: 'transparent',
      animation: true,
      animationDurationUpdate: 800,
      animationEasingUpdate: 'cubicOut',
      tooltip: {
        show: true,
        trigger: 'item',
        formatter: (params: any) => {
          if (params && params.seriesType === 'scatter' && params.data && params.data.name) {
            return `<div style="font-family: sans-serif; font-weight: 600; padding: 2px 4px; color: #111;">${params.data.name}创新中心</div>`;
          }
          if (params && params.name) {
            return `<div style="font-family: sans-serif; font-weight: 600; padding: 2px 4px; color: #111;">${params.name}</div>`;
          }
          return '';
        },
        backgroundColor: 'rgba(255, 255, 255, 0.95)',
        borderColor: '#E5E5E5',
        borderWidth: 1,
        textStyle: { color: '#1A1A1A', fontSize: 12 },
        extraCssText: 'box-shadow: 0 8px 20px rgba(0,0,0,0.12); border-radius: 8px;'
      },
      geo: {
        id: 'chinaGeo',
        map: 'china',
        roam: false,
        animation: true,
        animationDurationUpdate: 800,
        animationEasingUpdate: 'cubicOut',
        zoom: targetZoom,
        center: targetCenter,
        layoutCenter: ['38%', '48%'], // 地图稍向左平移，消除左侧视觉空白且确保边缘不被遮挡
        layoutSize: '92%',
        itemStyle: {
          areaColor: '#B4BCC8',      // 陆地填充色，加深 8% 后的银灰调
          borderColor: '#0071B8',    // 边界发光色，加深 8% 后的深蓝
          borderWidth: 1,
          shadowBlur: 0,
          shadowOffsetY: 0,
        },
        emphasis: {
          itemStyle: {
            areaColor: '#9BBDDE',    // 悬浮加深 8% 后的高亮色
          },
          label: {
            show: false,
          },
        },
        regions: provinceRegions,
      },
      series: [
        {
          id: 'radiatingLines',
          type: 'lines',
          coordinateSystem: 'geo',
          silent: true,
          effect: {
            show: true,
            period: 3.2,
            trailLength: 0.35,
            symbol: 'path://M -4.5,0 C -4.5,-2.5 4.5,-2.5 4.5,0 C 4.5,4.5 1.8,12 0,16 C -1.8,12 -4.5,4.5 -4.5,0 Z', // 形状：末端(头部0,0)圆粗，始端(尾部0,16)尖细
            symbolSize: [3.5, 7], // 动态发射粒子缩小
            color: '#FFFFFF',
          },
          lineStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
              { offset: 0, color: 'rgba(255, 255, 255, 1.0)' },   // 始端 (公司区) 不透明度 100%
              { offset: 1, color: 'rgba(255, 255, 255, 0.08)' }, // 末端 (辐射区) 不透明度 8%
            ]),
            width: 1.2,
            curveness: 0.3,
          },
          data: linesData,
        },
        {
          id: 'selectedOfficeRipple',
          type: 'effectScatter',
          coordinateSystem: 'geo',
          rippleEffect: {
            period: 3,
            scale: 4,
            brushType: 'stroke',
          },
          showEffectOn: 'render',
          itemStyle: {
            color: '#FFFFFF',
            shadowBlur: 14,
            shadowColor: 'rgba(255, 255, 255, 0.95)',
          },
          data: selectedCity ? [
            {
              name: selectedCity.name,
              value: [...selectedCity.coords, 100],
              officeId: selectedCity.id,
            }
          ] : [],
          zlevel: 3,
        },
        {
          id: 'cityMarkers',
          type: 'scatter',
          coordinateSystem: 'geo',
          symbol: 'circle',
          data: OFFICES_DATA.map((o) => {
            const isSelected = activeOfficeId === o.id;
            return {
              name: o.name,
              value: [...o.coords, isSelected ? 100 : 50],
              officeId: o.id,
              itemStyle: {
                color: '#FFFFFF', // 公司位置点改为白色
                shadowBlur: isSelected ? 14 : 6,
                shadowColor: isSelected ? 'rgba(255, 255, 255, 0.95)' : 'rgba(0, 123, 199, 0.4)',
                borderColor: isSelected ? '#007BC7' : 'rgba(0, 123, 199, 0.3)',
                borderWidth: isSelected ? 2 : 1,
              },
              label: {
                show: true,
                formatter: '{b}',
                color: '#1A1A1A',
                fontWeight: 700,
                fontSize: isSelected ? 13 : 12,
                backgroundColor: isSelected ? 'rgba(255, 255, 255, 0.98)' : 'rgba(255, 255, 255, 0.88)',
                borderColor: isSelected ? '#007BC7' : 'rgba(0, 123, 199, 0.3)',
                borderWidth: isSelected ? 1.5 : 1,
                padding: [4, 9],
                borderRadius: 4,
                position: 'top',
              },
            };
          }),
          symbolSize: (val: any, params: any) => {
            return params.data && params.data.officeId === activeOfficeId ? 14 : 10;
          },
          emphasis: {
            itemStyle: {
              color: '#FFFFFF',
            },
          },
        },
      ],
    };

    try {
      chart.setOption(option, { notMerge: false, lazyUpdate: false });
    } catch (err) {
      console.warn('Map render failed:', err);
    }
  }, [activeOfficeId, mapLoaded]);

  return (
    <div className="w-full bg-white text-neutral-900 min-h-screen pt-20">
      
      {/* HEADER HERO SECTION (案例页风格排版) */}
      <div className="bg-neutral-50/70 border-b border-neutral-100 py-8 md:py-12">
        <div className="max-w-[95%] w-full mx-auto">
          {/* 面包屑导航 */}
          <div className="flex items-center gap-2 text-xs text-neutral-500 mb-4 font-mono">
            <button 
              onClick={() => onNavigate && onNavigate('/home')} 
              className="hover:text-[#007BC7] transition-colors bg-transparent border-none p-0 cursor-pointer"
            >
              首页
            </button>
            <span>/</span>
            <span className="text-neutral-900 font-semibold">联系我们</span>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <span className="h-[1.5px] w-6 bg-[#007BC7]"></span>
                <span className="text-xs font-bold text-[#007BC7] uppercase tracking-widest font-mono">
                  全国创新集群 · 即刻联系
                </span>
              </div>
              <h1 className="hero-title text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight text-[#1A1A1A] leading-[1.15] font-display text-left">
                <span className="block">分布中国主要经济圈</span>
                <span className="block mt-1 sm:mt-2">共创商业增长</span>
              </h1>
            </div>

            <p className="text-sm text-neutral-500 max-w-xl leading-relaxed">
              洛可可立足北京集团总部，在深圳、上海、苏州、杭州、南京、成都、佛山、南昌设立9大创新中心。本地化响应+全球化协同，随时随地开启全案设计合作。
            </p>
          </div>
        </div>
      </div>

      {/* SECTION 2: MAP & OFFICE ADDRESSES INTERACTIVE SECTION */}
      <section className="py-8 bg-white">
        <div className="max-w-[95%] w-full mx-auto">
          
          {/* Map + Office Details Floating Stage */}
          <div className="map-3d-wrapper rounded-3xl border border-neutral-200/80 shadow-2xl relative overflow-hidden flex flex-col justify-center">
            {/* Top-Left Sunlight Rays Layer above Canvas (auto-weakened when zoomed) */}
            <div className={`map-sunlight-overlay ${activeOfficeId !== 'all' ? 'is-zoomed' : ''}`} />
            
            {/* Top Floating Filter Bar (10 Cities Selection Pills) */}
            <div className="absolute top-4 left-4 right-4 z-20 pointer-events-auto bg-white/40 backdrop-blur-md p-2 rounded-2xl border border-white/60 shadow-sm">
              <div className="grid grid-cols-2 sm:grid-cols-5 lg:grid-cols-10 gap-1.5 w-full">
                <button
                  onClick={() => setActiveOfficeId('all')}
                  className={`w-full px-2 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer whitespace-nowrap flex items-center justify-center gap-1 select-none ${
                    activeOfficeId === 'all'
                      ? 'bg-[#007BC7] text-white shadow-md shadow-blue-500/20 scale-[1.02]'
                      : 'bg-white/60 hover:bg-white/90 text-neutral-700'
                  }`}
                >
                  <Building2 className={`w-3.5 h-3.5 ${activeOfficeId === 'all' ? 'text-white' : 'text-neutral-500'}`} />
                  <span>全部辐射网</span>
                </button>

                {OFFICES_DATA.map((off) => {
                  const isActive = off.id === activeOfficeId;
                  return (
                    <button
                      key={off.id}
                      onClick={() => handleSelectOffice(off.id === activeOfficeId ? 'all' : off.id)}
                      className={`w-full px-2 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer whitespace-nowrap flex items-center justify-center gap-1 select-none ${
                        isActive
                          ? 'bg-[#007BC7] text-white shadow-md shadow-blue-500/20 scale-[1.02]'
                          : 'bg-white/60 hover:bg-white/90 text-neutral-700'
                      }`}
                    >
                      <Building2 className={`w-3.5 h-3.5 ${isActive ? 'text-white' : 'text-neutral-500'}`} />
                      <span>{off.name}</span>
                      {off.isHQ && (
                        <span className={`text-[10px] px-1 py-0.2 rounded font-mono ${isActive ? 'bg-white/20 text-white' : 'bg-blue-100 text-[#007BC7]'}`}>
                          HQ
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* China Map Canvas Stage */}
            <div className="map-3d-stage map-radiation-pulse">
              <div 
                ref={chartRef} 
                className="map-3d-canvas"
              />
            </div>

            {mapError && (
              <div className="absolute inset-0 bg-neutral-100/90 flex flex-col items-center justify-center p-6 text-center text-neutral-600 z-20">
                <MapPin className="w-10 h-10 text-[#007BC7] mb-2" />
                <p className="text-sm font-semibold">地图加载中，请稍后或刷新页面</p>
              </div>
            )}

            <div className="absolute bottom-4 left-6 text-[11px] text-neutral-600 font-mono flex items-center gap-2 z-10 pointer-events-none bg-white/70 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/80 shadow-sm">
              <span>* 点击地图标点独立展示辐射范围</span>
              <span>|</span>
              <span>点击空白处恢复全网辐射</span>
            </div>

            {/* Right: Floating Active Office Information Card (Frosted Glass with Equal Top/Bottom Margins) */}
            <div className="office-info-panel-wrapper">
              <div className="office-info-panel my-4 mx-4 lg:my-0 lg:mx-0">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeOffice.id}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -16 }}
                    transition={{ duration: 0.35, ease: 'easeOut' }}
                    className="flex flex-col justify-between relative z-10"
                  >
                    <div>
                      {/* Office Visual Photo (图片区域组内占比增加8%：由 aspect-[16/9] 调整为 aspect-[16/10]) */}
                      <div className="w-full aspect-[16/10] rounded-2xl bg-neutral-900/10 mb-5 overflow-hidden relative group border border-white/80 shadow-md z-10 shrink-0">
                        <img 
                          src={activeOffice.image || 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80'} 
                          alt={`${activeOffice.name}创新中心实景`} 
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 block"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/75 via-neutral-900/20 to-transparent z-10 pointer-events-none" />
                        <div className="absolute bottom-3.5 left-4 right-4 z-20 flex items-center justify-between text-white pointer-events-none">
                          <span className="text-xs font-mono font-bold tracking-wider drop-shadow-sm">
                            {activeOffice.tag}
                          </span>
                          <span className="text-[10px] bg-white/25 backdrop-blur-md px-2.5 py-0.5 rounded-md text-white font-mono font-semibold shadow-xs">
                            {activeOffice.city}
                          </span>
                        </div>
                      </div>

                      {/* Office Title */}
                      <div className="flex items-center justify-between mb-3 relative z-10">
                        <h3 className="text-xl md:text-2xl font-black text-neutral-900 font-display">
                          洛可可 · {activeOffice.name}
                        </h3>
                        {activeOffice.isHQ && (
                          <span className="bg-[#007BC7] text-white text-xs font-bold px-2.5 py-0.5 rounded-full font-mono shadow-sm">
                            集团 HQ
                          </span>
                        )}
                      </div>

                      <p className="text-xs text-neutral-600 leading-relaxed mb-4 relative z-10">
                        {activeOffice.desc}
                      </p>

                    {/* Contact Details List */}
                    <div className="space-y-3 text-xs">
                      
                      {/* Phone */}
                      <div className="flex items-start gap-3 bg-white/50 backdrop-blur-md p-3 rounded-xl border border-white/70 shadow-sm">
                        <div className="w-7 h-7 rounded-lg bg-blue-50/80 text-[#007BC7] flex items-center justify-center shrink-0 mt-0.5">
                          <Phone className="w-3.5 h-3.5" />
                        </div>
                        <div>
                          <div className="text-[10px] font-mono text-neutral-400 font-semibold">客服电话</div>
                          <a href={`tel:${activeOffice.phone.replace(/\s+/g, '')}`} className="text-neutral-800 font-bold hover:text-[#007BC7] transition-colors font-mono">
                            {activeOffice.phone}
                          </a>
                        </div>
                      </div>

                      {/* Email */}
                      <div className="flex items-start gap-3 bg-white/50 backdrop-blur-md p-3 rounded-xl border border-white/70 shadow-sm">
                        <div className="w-7 h-7 rounded-lg bg-blue-50/80 text-[#007BC7] flex items-center justify-center shrink-0 mt-0.5">
                          <Mail className="w-3.5 h-3.5" />
                        </div>
                        <div>
                          <div className="text-[10px] font-mono text-neutral-400 font-semibold">官方邮箱</div>
                          <a href={`mailto:${activeOffice.email}`} className="text-neutral-800 font-bold hover:text-[#007BC7] transition-colors font-mono">
                            {activeOffice.email}
                          </a>
                        </div>
                      </div>

                      {/* Address */}
                      <div className="flex items-start gap-3 bg-white/50 backdrop-blur-md p-3 rounded-xl border border-white/70 shadow-sm">
                        <div className="w-7 h-7 rounded-lg bg-blue-50/80 text-[#007BC7] flex items-center justify-center shrink-0 mt-0.5">
                          <MapPin className="w-3.5 h-3.5" />
                        </div>
                        <div className="flex-grow">
                          <div className="text-[10px] font-mono text-neutral-400 font-semibold">详细地址</div>
                          <div className="text-neutral-800 font-medium leading-snug mt-0.5">
                            {activeOffice.address}
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>


                </motion.div>
              </AnimatePresence>
            </div>
          </div>

        </div>

        </div>
      </section>

      {/* SECTION 3: JOIN US ENVIRONMENT & CULTURE SECTION (参照“关于我们”页的企业环境板块) */}
      <section className="py-16 bg-white border-t border-neutral-200/60">
        <div className="max-w-[95%] w-full mx-auto">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-4 border-b border-neutral-200/60 gap-4">
            <div>
              <span className="text-xs font-bold text-[#007BC7] uppercase tracking-widest font-mono">
                JOIN US & ENVIRONMENT
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-neutral-900 mt-1 font-display">
                加入我们
              </h2>
            </div>
            <p className="text-xs md:text-sm text-neutral-500 max-w-md leading-relaxed font-normal">
              开放、包容、充满创造力的办公与成长生态，期待与富有激情的设计师、工程师与咨询专家同行。
            </p>
          </div>

          {/* Single Image Banner with Strict 16:9 Aspect Ratio (参照企业环境板块) */}
          <div className="w-full aspect-[16/9] rounded-[8px] bg-[#F5F5F5] border border-neutral-200/60 flex flex-col items-center justify-center text-neutral-400 p-6 overflow-hidden">
            <Image className="w-12 h-12 mb-3 text-neutral-400/80 stroke-[1.5]" />
            <span className="text-sm font-semibold text-neutral-600 font-mono">
              [待替换：加入我们 / 工作环境形象大图]
            </span>
            <span className="text-xs text-neutral-400 mt-1">开放、包容、充满创造力的办公生态</span>
          </div>

        </div>
      </section>

      {/* SECTION 4: LKK TALENT POOL & RECRUITMENT POSITIONS */}
      <section className="py-16 bg-neutral-50/60 border-t border-neutral-200/60">
        <div className="max-w-[95%] w-full mx-auto">
          
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-4 border-b border-neutral-200/60 gap-4">
            <div>
              <span className="text-xs font-bold text-[#007BC7] uppercase tracking-widest font-mono">
                LKK TALENT POOL
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-neutral-900 mt-1 font-display">
                洛可可的人才储备计划
              </h2>
            </div>
            <p className="text-xs md:text-sm text-neutral-500 max-w-md leading-relaxed font-normal">
              洛可可提供开放的创意平台与极具竞争力的薪酬福利，期待与富有激情的设计师、工程师与咨询专家同行。
            </p>
          </div>

          {/* City Filter Pills (Same filter bar style as Cases page) */}
          <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-6 scrollbar-none">
            {['全部', '北京', '深圳', '上海', '苏州', '杭州', '南京', '成都', '佛山', '南昌'].map((city) => {
              const isActive = jobCityFilter === city;
              const count = city === '全部' ? JOB_POSITIONS.length : JOB_POSITIONS.filter(j => j.city === city).length;

              return (
                <button
                  key={city}
                  onClick={() => setJobCityFilter(city)}
                  className={`px-4 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer whitespace-nowrap flex items-center gap-1.5 ${
                    isActive
                      ? 'bg-[#007BC7] text-white shadow-md shadow-blue-500/20'
                      : 'bg-white text-neutral-600 hover:bg-neutral-200/80 border border-neutral-200'
                  }`}
                >
                  <span>{city === '全部' ? '全部城市' : city}</span>
                  <span className={`px-1.5 py-0.2 rounded-full text-[10px] font-mono ${isActive ? 'bg-white/20 text-white' : 'bg-neutral-100 text-neutral-400'}`}>
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Accordion Jobs List */}
          <div className="space-y-4">
            {filteredJobs.length > 0 ? (
              filteredJobs.map((job) => {
                const isExpanded = expandedJobId === job.id;
                return (
                  <div
                    key={job.id}
                    className={`bg-white rounded-2xl border transition-all duration-300 overflow-hidden ${
                      isExpanded 
                        ? 'border-[#007BC7] shadow-lg ring-1 ring-blue-500/10' 
                        : 'border-neutral-200 hover:border-neutral-300 shadow-sm'
                    }`}
                  >
                    {/* Header Row */}
                    <button
                      onClick={() => setExpandedJobId(isExpanded ? null : job.id)}
                      className="w-full p-6 text-left flex items-center justify-between gap-4 cursor-pointer select-none bg-white hover:bg-neutral-50/50 transition-colors"
                    >
                      <div className="flex flex-col sm:flex-row sm:items-center gap-3">
                        <span className="text-base sm:text-lg font-bold text-neutral-900 font-display">
                          {job.title}
                        </span>
                        <div className="flex items-center gap-2">
                          <span className="bg-blue-50 text-[#007BC7] px-2.5 py-0.5 rounded text-xs font-semibold font-mono">
                            {job.city}
                          </span>
                          <span className="bg-neutral-100 text-neutral-500 px-2.5 py-0.5 rounded text-xs font-mono">
                            {job.department}
                          </span>
                          <span className="text-xs text-neutral-400 font-mono hidden md:inline-block">
                            {job.type}
                          </span>
                        </div>
                      </div>

                      <div className="flex items-center gap-3 shrink-0">
                        <span className="text-xs font-semibold text-[#007BC7] hidden sm:inline-block">
                          {isExpanded ? '收起详情' : '了解更多'}
                        </span>
                        <div className={`w-8 h-8 rounded-full bg-neutral-100 flex items-center justify-center transition-transform duration-300 ${isExpanded ? 'rotate-180 bg-blue-50 text-[#007BC7]' : 'text-neutral-500'}`}>
                          <ChevronDown className="w-4 h-4" />
                        </div>
                      </div>
                    </button>

                    {/* Accordion Smooth Expanded Content */}
                    <AnimatePresence initial={false}>
                      {isExpanded && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                        >
                          <div className="p-6 pt-2 border-t border-neutral-100 bg-neutral-50/40 space-y-6 text-xs md:text-sm text-neutral-700">
                            
                            {/* Responsibilities */}
                            <div>
                              <h4 className="font-bold text-neutral-900 mb-2 font-display flex items-center gap-2">
                                <Briefcase className="w-4 h-4 text-[#007BC7]" />
                                岗位职责：
                              </h4>
                              <ul className="list-disc list-inside space-y-1.5 text-neutral-600 pl-1 leading-relaxed">
                                {job.responsibilities.map((r, i) => (
                                  <li key={i}>{r}</li>
                                ))}
                              </ul>
                            </div>

                            {/* Requirements */}
                            <div>
                              <h4 className="font-bold text-neutral-900 mb-2 font-display flex items-center gap-2">
                                <Users className="w-4 h-4 text-[#007BC7]" />
                                任职资格：
                              </h4>
                              <ul className="list-disc list-inside space-y-1.5 text-neutral-600 pl-1 leading-relaxed">
                                {job.requirements.map((req, i) => (
                                  <li key={i}>{req}</li>
                                ))}
                              </ul>
                            </div>

                            {/* Application Info Footer Bar */}
                            <div className="pt-4 border-t border-neutral-200/60 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-white p-4 rounded-xl border border-neutral-200">
                              <div>
                                <span className="text-xs text-neutral-400 font-mono block">简历及作品集投递至：</span>
                                <a href={`mailto:${job.email}?subject=应聘_${job.title}_${job.city}`} className="text-sm font-bold text-[#007BC7] font-mono hover:underline">
                                  {job.email}
                                </a>
                                <span className="text-[11px] text-neutral-400 ml-2">（邮件主题格式：姓名+应聘岗位+工作城市）</span>
                              </div>

                              <a
                                href={`mailto:${job.email}?subject=应聘_${job.title}_${job.city}`}
                                className="bg-[#007BC7] hover:bg-[#005F96] text-white text-xs font-bold px-5 py-2.5 rounded-xl transition-all shadow-md cursor-pointer flex items-center gap-2"
                              >
                                <Send className="w-3.5 h-3.5" />
                                投递此岗位
                              </a>
                            </div>

                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })
            ) : (
              <div className="py-16 bg-white rounded-2xl text-center border border-dashed border-neutral-200 text-neutral-400 text-sm">
                该城市暂无开放中的岗位
              </div>
            )}
          </div>

        </div>
      </section>

      {/* Section 4 removed as requested */}
    </div>
  );
};

export default ContactUsPage;
