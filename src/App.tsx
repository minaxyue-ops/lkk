import React, { useState, useEffect, useRef, useCallback } from 'react';
import { 
  ChevronDown, 
  Search, 
  ArrowRight, 
  Phone, 
  MapPin, 
  Menu, 
  X, 
  Check, 
  Globe, 
  ChevronLeft, 
  ChevronRight, 
  QrCode, 
  MessageSquare,
  Sparkles,
  ArrowUpRight,
  ShieldCheck,
  GraduationCap
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import LKKLogo from './components/LKKLogo';
import CategoryConsultingPage from './components/CategoryConsultingPage';
import CategoryConsultingPageV2 from './components/CategoryConsultingPageV2';
import ThreeInOneCategoryConsultingPage from './components/ThreeInOneCategoryConsultingPage';
import ProductInnovationConsultingPage from './components/ProductInnovationConsultingPage';
import BrandInnovationConsultingPage from './components/BrandInnovationConsultingPage';
import ProductInnovationPage from './components/ProductInnovationPage';
import BrandInnovationPage from './components/BrandInnovationPage';
import ServiceDetailPage from './components/ServiceDetailPage';
import IndustryCollectionPage from './components/IndustryCollectionPage';
import IndustryDetailPage from './components/IndustryDetailPage';
import { CasesPage } from './components/CasesPage';
import { AboutUsPage } from './components/AboutUsPage';
import { NewsPage } from './components/NewsPage';
import { NewsDetailPage } from './components/NewsDetailPage';
import { ContactUsPage } from './components/ContactUsPage';
import { SuccessPathPage } from './components/SuccessPathPage';
import { ScrollSectionTitle } from './components/ScrollSectionTitle';
import CaseDetailPage from './components/CaseDetailPage';
import SanPinHeYiPage from './components/SanPinHeYiPage';
import SanPinHeYiLearningPage from './components/SanPinHeYiLearningPage';
import { 
  SERVICE_CATEGORIES, 
  NEWS_ARTICLES, 
  PROFESSIONAL_SERVICES, 
  CASE_STUDIES,
  CaseStudy
} from './types';

const CASE_STUDIES_V2: CaseStudy[] = [
  {
    id: 'case-v2-2',
    title: '良品铺子产品包装创新咨询设计',
    description: '从线下走到线上的零食新零售',
    logoType: 'jingkelong'
  },
  {
    id: 'case-v2-1',
    title: '悦鲜活年轻化产品包装创新咨询设计',
    description: '打造差异化视觉识别，助力新品牌抢占年轻消费市场',
    logoType: 'yuexianhuo'
  },
  {
    id: 'case-v2-3',
    title: '故宫博物院"故宫猫"IP形象打造&景区文创产品创新咨询设计',
    description: '幽幽宫殿，一猫当家',
    logoType: 'pophie'
  },
  {
    id: 'case-v2-4',
    title: '艾肯智能净饮机"小智"',
    description: '全新的操作方式，让小智具有强识别和全新品牌口碑！',
    logoType: 'cotti'
  },
  {
    id: 'case-v2-6',
    title: '埃斯顿ED3S系列伺服驱动器产品创新咨询设计',
    description: '全面赋能工业自动化运动控制领域升级',
    logoType: 'estun'
  },
  {
    id: 'case-v2-5',
    title: '思哲睿康多手术机器人产品创新咨询设计',
    description: '集工业设计美学、临床需求、卓越稳定性能于一体',
    logoType: 'sizherui'
  },
  {
    id: 'case-v2-7',
    title: '糯宝 (Pophie) 类生命体情感陪伴机器人',
    description: '融合AI算法、温润触感材料与拟人化微表情',
    logoType: 'pophie'
  },
  {
    id: 'case-v2-8',
    title: '库迪咖啡品牌战略咨询&爆品包装升级',
    description: '塑造全民咖啡品类创新概念，助力跨界爆款孵化',
    logoType: 'cotti'
  },
  {
    id: 'case-v2-9',
    title: '海底捞自热火锅与便携即食产品创新设计',
    description: '打破传统餐饮空间局限，开辟随时随地即享火锅的新品类赛道',
    logoType: 'haidilao'
  }
];

const AWARDS_LIST = [
  'RED DOT',
  'iF DESIGN AWARD',
  'IDEA',
  'G-MARK',
  '红星奖',
  '金点设计奖'
];
const REPEATED_AWARDS = [...AWARDS_LIST, ...AWARDS_LIST, ...AWARDS_LIST, ...AWARDS_LIST];

const CLIENTS_LIST = [
  '诺基亚 (Nokia)',
  '西门子 (Siemens)',
  '三星 (Samsung)',
  '壳牌 (Shell)',
  '松下 (Panasonic)',
  '奥迪 (Audi)',
  '戴尔 (Dell)',
  '联合利华 (Unilever)',
  '雀巢 (Nestlé)',
  '玛氏 (Mars)',
  '通用电气 (GE)',
  '大众 (Volkswagen)',
  '联想',
  '海尔',
  '美的',
  '茅台',
  '青岛啤酒',
  '万达集团',
  '汇源',
  '中储粮',
  '京东',
  '奇瑞汽车',
  '海底捞',
  '吉利',
  '库迪咖啡'
];
const REPEATED_CLIENTS = [...CLIENTS_LIST, ...CLIENTS_LIST];

const Counter: React.FC<{ target: number }> = ({ target }) => {
  const [count, setCount] = useState(0);
  const elementRef = useRef<HTMLSpanElement>(null);
  const animatedRef = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !animatedRef.current) {
            animatedRef.current = true;
            const duration = 1500;
            const startTime = performance.now();

            const update = (now: number) => {
              const progress = Math.min((now - startTime) / duration, 1);
              setCount(Math.floor(progress * target));
              if (progress < 1) {
                requestAnimationFrame(update);
              } else {
                setCount(target);
              }
            };
            requestAnimationFrame(update);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [target]);

  return <span ref={elementRef}>{count}</span>;
};

type PageType = 
  | 'home' 
  | 'category' 
  | 'category-v2'
  | 'three-in-one-category'
  | 'three-in-one'
  | 'three-in-one-learning'
  | 'product' 
  | 'brand' 
  | 'industry'
  | 'industry-detail'
  | 'industrial-design' 
  | 'structural-design' 
  | 'production-landing' 
  | 'full-case-design' 
  | 'packaging-design' 
  | 'ip-design'
  | 'cases'
  | 'case-detail'
  | 'about'
  | 'news'
  | 'news-detail'
  | 'contact'
  | 'success-path';

export default function App() {
  // Current page state
  const [currentPage, setCurrentPage] = useState<PageType>('home');
  const [currentIndustryKey, setCurrentIndustryKey] = useState<string>('industrial-equipment');
  const [currentNewsId, setCurrentNewsId] = useState<string>('news-1');
  const [currentCaseId, setCurrentCaseId] = useState<string>('xiaoxiandun');

  const handleNavigateUrl = (url: string) => {
    if (url === '/about' || url === '/about-us' || url === '#about-lkk') {
      setCurrentPage('about');
    } else if (url === '/contact' || url === '/contact-us' || url === '#contact') {
      setCurrentPage('contact');
    } else if (url === '/case-detail' || url.startsWith('/case-detail') || url.startsWith('/cases/') || url === '/cases/yuexianhuo') {
      const parts = url.split('/');
      const id = parts[parts.length - 1];
      if (id && id !== 'cases' && id !== 'case-detail') {
        setCurrentCaseId(id);
      } else if (url === '/cases/yuexianhuo') {
        setCurrentCaseId('yuexianhuo');
      } else {
        setCurrentCaseId('xiaoxiandun');
      }
      setCurrentPage('case-detail');
    } else if (url === '/cases' || url === '/case-studies' || url === '/cases/') {
      setCurrentPage('cases');
    } else if (url.startsWith('/news-detail') || url.startsWith('/news/')) {
      const parts = url.split('/');
      const id = parts[parts.length - 1];
      if (id && id !== 'news-detail' && id !== 'news') {
        setCurrentNewsId(id);
      }
      setCurrentPage('news-detail');
    } else if (url === '/news' || url === '/news-center' || url.startsWith('/news') || url === '#news-center') {
      setCurrentPage('news');
    } else if (url === '/success-path' || url === '/success' || url === '#success-path') {
      setCurrentPage('success-path');
    } else if (url === '/product-innovation/industrial-design') {
      setCurrentPage('industrial-design');
    } else if (url === '/product-innovation/structural-design') {
      setCurrentPage('structural-design');
    } else if (url === '/product-innovation/production-landing') {
      setCurrentPage('production-landing');
    } else if (url === '/brand-innovation/full-case-design') {
      setCurrentPage('full-case-design');
    } else if (url === '/brand-innovation/packaging-design') {
      setCurrentPage('packaging-design');
    } else if (url === '/brand-innovation/ip-design') {
      setCurrentPage('ip-design');
    } else if (url === '/product-innovation') {
      setCurrentPage('product');
    } else if (url === '/brand-innovation') {
      setCurrentPage('brand');
    } else if (url === '/category-consulting-2' || url === '/category-consulting-v2' || url === '/category-v2' || url === '/category-2') {
      setCurrentPage('category-v2');
    } else if (url === '/category-consulting-1' || url === '/category-consulting-v1' || url === '/category-v1' || url === '/category-1') {
      setCurrentPage('category');
    } else if (url === '/category-consulting' || url === '/category') {
      setCurrentPage('category-v2');
    } else if (url === '/three-in-one' || url === '/sanpinheyi' || url === '#three-in-one' || url === '/three-in-one-philosophy') {
      setCurrentPage('three-in-one');
    } else if (url === '/three-in-one-learning' || url === '/three-in-one/learning' || url === '/learning' || url === '/methodology-learning' || url === '/methodology') {
      setCurrentPage('three-in-one-learning');
    } else if (url === '/three-in-one-category' || url === '/three-in-one-category-consulting' || url === '/category-consulting/three-in-one') {
      setCurrentPage('three-in-one-category');
    } else if (url === '/product-innovation-consulting' || url === '/product-innovation-0-1' || url === '/category-consulting/product-innovation-0-1') {
      setCurrentPage('product-innovation-consulting');
    } else if (url === '/brand-innovation-consulting' || url === '/brand-innovation-0-1' || url === '/category-consulting/brand-innovation-0-1') {
      setCurrentPage('brand-innovation-consulting');
    } else if (url.startsWith('/industry/') || url.startsWith('/hangye/')) {
      const parts = url.split('/');
      const key = parts[parts.length - 1];
      if (key && key !== 'industry' && key !== 'hangye') {
        setCurrentIndustryKey(key);
        setCurrentPage('industry-detail');
      } else {
        setCurrentPage('industry');
      }
    } else if (url === '/industry' || url === '/hangye') {
      setCurrentPage('industry');
    } else {
      setCurrentPage('home');
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Navigation active state
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  // Search query state
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  // Carousel state for news
  const [newsIndex, setNewsIndex] = useState(0);

  // Active state for Banner Carousel
  const [activeBannerIndex, setActiveBannerIndex] = useState(0);



  // Auto-scroll banner carousel (8 seconds interval)
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveBannerIndex((prev) => (prev + 1) % 3);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  // Form submission states
  const [footerForm, setFooterForm] = useState({ name: '', phone: '', company: '', city: '' });
  const [footerFormSuccess, setFooterFormSuccess] = useState(false);
  
  const [modalForm, setModalForm] = useState({ name: '', phone: '', industry: '智能制造', desc: '' });
  const [modalFormSuccess, setModalFormSuccess] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  // Selected case for details modal
  const [selectedCase, setSelectedCase] = useState<CaseStudy | null>(null);

  const isFooterLight = false;

  // Helper to navigate to a section on the Product Innovation page
  const navigateToProductSection = (sectionId: string) => {
    setCurrentPage('product');
    setActiveMenu(null);
    setMobileMenuOpen(false);
    setTimeout(() => {
      const el = document.getElementById(sectionId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }, 120);
  };

  // Active state for Case Studies Style 2 on touch devices
  const [activeV2Card, setActiveV2Card] = useState<string | null>(null);

  // Click outside listener for touch devices to reset active state
  useEffect(() => {
    const handleDocumentClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest('.case-card-v2')) {
        setActiveV2Card(null);
      }
    };
    document.addEventListener('click', handleDocumentClick);
    return () => {
      document.removeEventListener('click', handleDocumentClick);
    };
  }, []);

  const handleV2CardClick = (e: React.MouseEvent, id: string, cs: CaseStudy) => {
    const isTouch = window.matchMedia('(hover: none)').matches;
    if (isTouch) {
      e.stopPropagation();
      const wasActive = activeV2Card === id;
      if (wasActive) {
        setActiveV2Card(null);
      } else {
        setActiveV2Card(id);
      }
    } else {
      setSelectedCase(cs);
    }
  };

  const getCaseLocalImage = (logoType?: string): string | null => {
    switch (logoType) {
      case 'xiaoxiandun':
        return 'https://github.com/minaxyue-ops/MINA/releases/download/1/image.33.png';
      case 'haidilao':
        return 'https://github.com/minaxyue-ops/MINA/releases/download/1/image.35.png';
      case 'sizherui':
        return 'https://github.com/minaxyue-ops/MINA/releases/download/1/image.36.png';
      case 'estun':
        return 'https://github.com/minaxyue-ops/MINA/releases/download/1/image.39.png';
      case 'hit':
        return 'https://github.com/minaxyue-ops/MINA/releases/download/1/image.37.png';
      case 'yuexianhuo':
        return 'https://github.com/minaxyue-ops/MINA/releases/download/1/7.15.1.3.gif';
      case 'pophie':
        return '/src/assets/images/case_pophie.jpg';
      case 'jingkelong':
        return '/src/assets/images/case_jingkelong.jpg';
      case 'cotti':
        return '/src/assets/images/lkk_coffee_mockup_1783302972120.jpg';
      default:
        return null;
    }
  };

  const getCaseV2LocalImage = (id: string): string | null => {
    switch (id) {
      case 'case-v2-1':
        return 'https://github.com/minaxyue-ops/MINA/releases/download/1/7.15.1.3.gif';
      case 'case-v2-2':
        return 'https://github.com/minaxyue-ops/MINA/releases/download/1/liangpin.jpg';
      case 'case-v2-3':
        return 'https://github.com/minaxyue-ops/MINA/releases/download/1/gugong.jpg';
      case 'case-v2-4':
        return 'https://github.com/minaxyue-ops/MINA/releases/download/1/xiaozhi.jpg';
      case 'case-v2-5':
        return 'https://github.com/minaxyue-ops/MINA/releases/download/1/sizherui.jpg';
      case 'case-v2-6':
        return 'https://github.com/minaxyue-ops/MINA/releases/download/1/aisidun.jpg';
      case 'case-v2-7':
        return '/src/assets/images/case_pophie.jpg';
      case 'case-v2-8':
        return '/src/assets/images/lkk_coffee_mockup_1783302972120.jpg';
      case 'case-v2-9':
        return 'https://github.com/minaxyue-ops/MINA/releases/download/1/image.35.png';
      default:
        return null;
    }
  };

  const getCasePlaceholderColor = (logoType?: string): string => {
    if (['jingkelong', 'cotti', 'haidilao', 'pophie'].includes(logoType || '')) {
      return '#E5F2FA';
    }
    return '#F5F5F5';
  };

  const getCaseV2PlaceholderColor = (id: string): string => {
    if (['case-v2-2', 'case-v2-3', 'case-v2-7', 'case-v2-8'].includes(id)) {
      return '#E5F2FA';
    }
    return '#F5F5F5';
  };

  const getCaseImage = (logoType: string | undefined): string => {
    return getCaseLocalImage(logoType) || '';
  };

  const getCaseV2Image = (id: string): string => {
    return getCaseV2LocalImage(id) || '';
  };

  const getCaseShortTitle = (id: string, fullTitle: string): string => {
    switch (id) {
      case 'case-1': return '糯宝 Pophie';
      case 'case-2': return '京客隆';
      case 'case-3': return '库迪咖啡';
      case 'case-4': return '小仙炖';
      case 'case-5': return '海底捞';
      case 'case-6': return '思哲睿康多多';
      case 'case-7': return '埃斯顿卓丰';
      case 'case-8': return '哈工大机器人';
      case 'case-9': return '悦鲜活鲜牛奶';
      default: return fullTitle;
    }
  };

  const getBrandGradient = (logoType: string): string => {
    switch (logoType) {
      case 'pophie':
        return 'bg-gradient-to-br from-amber-50 to-teal-50/20';
      case 'jingkelong':
        return 'bg-gradient-to-br from-red-50 to-orange-50/20';
      case 'cotti':
        return 'bg-gradient-to-br from-orange-50 to-red-50/20';
      case 'haidilao':
        return 'bg-gradient-to-br from-red-50 to-rose-50/30';
      case 'sizherui':
        return 'bg-gradient-to-br from-blue-50 to-indigo-50/20';
      case 'hit':
        return 'bg-gradient-to-br from-slate-100 to-neutral-50/20';
      case 'yuexianhuo':
        return 'bg-gradient-to-br from-sky-50 to-blue-50/10';
      default:
        return 'bg-transparent';
    }
  };

  const getCaseV2Data = (cs: CaseStudy) => {
    switch (cs.id) {
      case 'case-v2-1':
        return {
          brand: '悦鲜活',
          title: '悦鲜活年轻化产品包装创新咨询设计',
          desc: '打造差异化视觉识别，助力新品牌抢占年轻消费市场'
        };
      case 'case-v2-2':
        return {
          brand: '良品铺子',
          title: '良品铺子产品包装创新咨询设计',
          desc: '从线下走到线上的零食新零售'
        };
      case 'case-v2-3':
        return {
          brand: '故宫博物院',
          title: '故宫博物院"故宫猫"IP形象打造&景区文创产品创新咨询设计',
          desc: '幽幽宫殿，一猫当家'
        };
      case 'case-v2-4':
        return {
          brand: '艾肯',
          title: '艾肯智能净饮机"小智"',
          desc: '全新的操作方式，让小智具有强识别和全新品牌口碑！'
        };
      case 'case-v2-5':
        return {
          brand: '思哲睿',
          title: '思哲睿康多手术机器人产品创新咨询设计',
          desc: '集工业设计美学、临床需求、卓越稳定性能于一体'
        };
      case 'case-v2-6':
        return {
          brand: '埃斯顿',
          title: '埃斯顿ED3S系列伺服驱动器产品创新咨询设计',
          desc: '全面赋能工业自动化运动控制领域升级'
        };
      case 'case-v2-7':
        return {
          brand: '糯宝 Pophie',
          title: '糯宝 (Pophie) 类生命体情感陪伴机器人',
          desc: '融合AI算法、温润触感材料与拟人化微表情，打造温情陪伴机器人'
        };
      case 'case-v2-8':
        return {
          brand: '库迪咖啡',
          title: '库迪咖啡品牌战略咨询&爆品包装升级',
          desc: '塑造全民咖啡品类创新概念，助力跨界爆款孵化'
        };
      case 'case-v2-9':
        return {
          brand: '海底捞',
          title: '海底捞自热火锅与便携即食产品创新设计',
          desc: '打破传统餐饮空间局限，开辟随时随地即享火锅的新品类赛道'
        };
      default:
        return {
          brand: cs.title,
          title: cs.title,
          desc: cs.description
        };
    }
  };

  const getCaseDetailInfo = (id: string) => {
    switch (id) {
      case 'case-1':
        return {
          industry: '机器人',
          consulting: '产品创新0-1全案咨询',
          design: '工业设计、结构设计、交互设计'
        };
      case 'case-2':
        return {
          industry: '食品酒饮',
          consulting: '三品合一品类创新咨询',
          design: '品牌全案设计、商业空间设计'
        };
      case 'case-3':
        return {
          industry: '食品酒饮',
          consulting: '品牌创新0-1全案咨询',
          design: '品牌全案设计、包装设计'
        };
      case 'case-4':
      case 'xiaoxiandun':
        return {
          industry: '食品酒饮',
          consulting: '三品合一品类创新咨询',
          design: '包装设计、结构设计'
        };
      case 'case-5':
        return {
          industry: '食品酒饮',
          consulting: '产品创新0-1全案咨询',
          design: '包装设计、IP设计'
        };
      case 'case-6':
        return {
          industry: '医疗健康',
          consulting: '产品创新0-1全案咨询',
          design: '工业设计、结构设计、生产落地'
        };
      case 'case-7':
        return {
          industry: '机器人',
          consulting: '产品创新0-1全案咨询',
          design: '工业设计、结构设计'
        };
      case 'case-8':
        return {
          industry: '机器人',
          consulting: '产品创新0-1全案咨询',
          design: '工业设计、结构设计、交互设计'
        };
      case 'case-9':
        return {
          industry: '食品酒饮',
          consulting: '品牌创新0-1全案咨询',
          design: '包装设计、品牌全案设计'
        };
      case 'case-v2-1':
        return {
          industry: '食品酒饮',
          consulting: '品牌创新0-1全案咨询',
          design: '包装设计、品牌全案设计'
        };
      case 'case-v2-2':
        return {
          industry: '食品酒饮',
          consulting: '产品创新0-1全案咨询',
          design: '包装设计、IP设计'
        };
      case 'case-v2-3':
        return {
          industry: '文化创意',
          consulting: '品牌创新0-1全案咨询',
          design: 'IP设计、包装设计'
        };
      case 'case-v2-4':
        return {
          industry: '家居家电',
          consulting: '产品创新0-1全案咨询',
          design: '工业设计、结构设计、生产落地'
        };
      case 'case-v2-5':
        return {
          industry: '医疗健康',
          consulting: '产品创新0-1全案咨询',
          design: '工业设计、结构设计'
        };
      case 'case-v2-6':
        return {
          industry: '工业装备',
          consulting: '产品创新0-1全案咨询',
          design: '工业设计、结构设计、生产落地'
        };
      case 'case-v2-7':
        return {
          industry: '机器人',
          consulting: '三品合一类创新咨询',
          design: '工业设计、结构设计、CMF设计'
        };
      case 'case-v2-8':
        return {
          industry: '食品酒饮',
          consulting: '品牌创新0-1全案咨询',
          design: '品牌设计、包装升级、爆品打造'
        };
      case 'case-v2-9':
        return {
          industry: '食品酒饮',
          consulting: '产品创新0-1全案咨询',
          design: '结构创新、便携包装设计、体验升级'
        };
      case 'musinno':
      case 'yanzoujia':
      case 'musinno-1':
        return {
          industry: '文化创意 ｜ 新文娱',
          consulting: '品类创新、产品创新、品牌创新、三品合一',
          design: '产品策略、工业设计、结构设计、CMF 设计'
        };
      default:
        return {
          industry: '智能制造',
          consulting: '产品创新0-1全案咨询',
          design: '工业设计、结构设计'
        };
    }
  };

  // Auto-scroll news carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setNewsIndex((prev) => (prev + 1) % NEWS_ARTICLES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);



  // Section Title Scroll Reveal (Scrubbed Bidirectional Scroll Color Reveal)
  useEffect(() => {
    const updateAll = () => {
      const groups = document.querySelectorAll('.scroll-reveal-heading, .section-title');
      if (groups.length === 0) return;

      groups.forEach((group) => {
        // Auto wrap text if no .char elements exist yet
        if (!group.querySelector('.char') && group.childNodes.length > 0) {
          let text = '';
          group.childNodes.forEach((node) => {
            if (node.nodeType === Node.TEXT_NODE) {
              text += node.textContent || '';
            } else if ((node as HTMLElement).classList?.contains('char')) {
              text += (node as HTMLElement).textContent || '';
            } else {
              text += (node as HTMLElement).innerText || '';
            }
          });
          if (text.trim()) {
            group.innerHTML = text
              .trim()
              .split('')
              .map((c) => `<span class="char">${c}</span>`)
              .join('');
          }
        }

        const chars = group.querySelectorAll('.char');
        if (chars.length === 0) return;

        const rect = group.getBoundingClientRect();
        const viewportH = window.innerHeight;
        const startY = viewportH * 0.90; // Reveal begins when header enters bottom 90% of viewport
        const triggerRange = 450;         // Slower progress over 450px scroll range (~0.6-0.7s feel)
        const scrolled = Math.min(Math.max(startY - rect.top, 0), triggerRange);
        const progress = scrolled / triggerRange; // 0 to 1

        const count = chars.length;
        chars.forEach((char, i) => {
          const charStart = count > 1 ? (i / count) * 0.5 : 0;
          const charEnd = count > 1 ? charStart + 0.5 : 1;
          const charProgress = Math.min(Math.max((progress - charStart) / (charEnd - charStart), 0), 1);

          // Interpolate from #D9D9D9 (217, 217, 217) to #1A1A1A (26, 26, 26)
          const r = Math.round(217 - charProgress * (217 - 26));
          const g = Math.round(217 - charProgress * (217 - 26));
          const b = Math.round(217 - charProgress * (217 - 26));
          const opacity = (0.35 + charProgress * 0.65).toFixed(3);

          const el = char as HTMLElement;
          el.style.color = `rgb(${r}, ${g}, ${b})`;
          el.style.opacity = opacity;
          if (charProgress > 0.5) {
            el.classList.add('is-revealed');
          } else {
            el.classList.remove('is-revealed');
          }
        });
      });
    };

    const handleScroll = () => {
      requestAnimationFrame(updateAll);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);
    updateAll();

    // Small delay to ensure any dynamic/layout shifts are accounted for
    const timer = setTimeout(updateAll, 120);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
      clearTimeout(timer);
    };
  }, [currentPage]);

  // Hero Slogan Page-Load cascading animation delay setting
  useEffect(() => {
    const chars = document.querySelectorAll('.hero-title .char');
    chars.forEach((char, i) => {
      (char as HTMLElement).style.animationDelay = `${i * 0.05}s`;
    });
  }, []);

  // Site Header Scroll Behavior (Hide on Scroll Down, Show on Scroll Up, Glassmorphism)
  useEffect(() => {
    const header = document.querySelector('.site-header') as HTMLElement;
    if (!header) return;

    const updateHeight = () => {
      document.body.style.setProperty('--header-height', `${header.offsetHeight}px`);
    };

    updateHeight();
    const resizeObserver = new ResizeObserver(updateHeight);
    resizeObserver.observe(header);

    let lastScrollY = window.scrollY;
    const glassThreshold = 20;

    const handleHeaderScroll = () => {
      const currentScrollY = window.scrollY;

      header.classList.toggle('is-glass', currentScrollY > glassThreshold);

      if (currentScrollY > lastScrollY && currentScrollY > header.offsetHeight) {
        header.classList.add('is-hidden'); // Scroll down, hide
      } else {
        header.classList.remove('is-hidden'); // Scroll up, show
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', handleHeaderScroll, { passive: true });

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener('scroll', handleHeaderScroll);
    };
  }, []);

  const handleFooterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!footerForm.name || !footerForm.phone || !footerForm.company || !footerForm.city) return;
    setFooterFormSuccess(true);
    setTimeout(() => {
      setFooterFormSuccess(false);
      setFooterForm({ name: '', phone: '', company: '', city: '' });
    }, 4000);
  };

  const handleModalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!modalForm.name || !modalForm.phone) return;
    setModalFormSuccess(true);
    setTimeout(() => {
      setModalFormSuccess(false);
      setIsContactModalOpen(false);
      setModalForm({ name: '', phone: '', industry: '智能制造', desc: '' });
    }, 3000);
  };

  // Filter case studies if search query is present
  const filteredCases = searchQuery 
    ? CASE_STUDIES.filter(c => 
        c.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
        c.description.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : CASE_STUDIES;

  const filteredCasesV2 = searchQuery 
    ? CASE_STUDIES_V2.filter(c => 
        c.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
        c.description.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : CASE_STUDIES_V2;

  return (
    <div className="relative min-h-screen bg-white text-neutral-800 selection:bg-[#007BC7] selection:text-white font-sans overflow-x-clip">
      
      {/* SITE HEADER WRAPPER */}
      <div className="site-header">
        {/* 1. TOP NAV BAR */}
      <div className="border-b border-neutral-100 bg-neutral-50/50 text-[11px] text-neutral-500 py-2.5">
        <div className="max-w-[95%] w-full mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          {/* Left Links */}
          <div className="flex items-center gap-4 flex-wrap justify-center">
            <span className="flex items-center gap-1 text-neutral-600 hover:text-[#005F96] cursor-pointer transition-colors">
              <Globe className="w-3.5 h-3.5" />
              China (简体中文)
            </span>
            <span className="h-3 w-px bg-neutral-200"></span>
            <span className="hover:text-[#005F96] cursor-pointer transition-colors">全国办事处</span>
            <span className="h-3 w-px bg-neutral-200"></span>
            <span className="hover:text-[#005F96] cursor-pointer transition-colors">新闻中心</span>
            <span className="h-3 w-px bg-neutral-200"></span>
            <span className="hover:text-[#005F96] cursor-pointer transition-colors">加入我们</span>
          </div>
          {/* Right Phone number */}
          <div className="flex items-center gap-1.5 font-medium tracking-wider text-neutral-700">
            <Phone className="w-[18.2px] h-[18.2px] text-[#007BC7] animate-pulse" />
            <span className="text-[15.6px]">咨询热线：</span>
            <span className="text-[18.2px] font-semibold text-neutral-900 font-display">400-062-3130</span>
          </div>
        </div>
      </div>

      {/* 2. MAIN HEADER */}
      <header className="border-b border-neutral-100 py-3.5 transition-all bg-transparent">
        <div className="max-w-[95%] w-full mx-auto flex items-center justify-between">
          
          {/* Logo (Left aligned, flex-1 to balance center nav) */}
          <div className="flex items-center justify-start flex-1 shrink-0">
            <a 
              href="#" 
              className="inline-flex items-center flex-shrink-0 group" 
              onClick={(e) => { e.preventDefault(); setCurrentPage('home'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            >
              <LKKLogo imgClassName="h-7 md:h-7.5" />
            </a>
          </div>

          {/* Navigation Links (Desktop - Centered) */}
          <nav className="hidden lg:flex items-center justify-center gap-8 shrink-0">
            <div 
              className="relative group"
              onMouseEnter={() => setActiveMenu('品类创新咨询')}
              onMouseLeave={() => setActiveMenu(null)}
            >
              <button 
                onClick={() => { setCurrentPage('category-v2'); setActiveMenu(null); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                className="flex items-center gap-1 text-[15px] font-medium text-neutral-700 hover:text-[#005F96] transition-colors py-2"
              >
                品类创新咨询
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${activeMenu === '品类创新咨询' ? 'rotate-180 text-[#007BC7]' : 'text-neutral-400'}`} />
              </button>
              
              {/* Dropdown Menu */}
              <AnimatePresence>
                {activeMenu === '品类创新咨询' && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute left-1/2 -translate-x-1/2 top-full mt-1 w-[720px] bg-white border border-neutral-100 shadow-2xl rounded-2xl p-5 grid gap-4 z-50"
                  >
                    <div className="flex items-center justify-between border-b border-neutral-100 pb-2">
                      <div className="text-xs font-semibold uppercase tracking-wider text-neutral-500">品类服务专区</div>
                      <div className="flex items-center gap-3 text-xs font-medium">
                        <button 
                          onClick={() => { setCurrentPage('category-v2'); setActiveMenu(null); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                          className={`hover:text-[#007BC7] transition-colors cursor-pointer flex items-center gap-1 ${currentPage === 'category-v2' ? 'text-[#007BC7] font-bold' : 'text-neutral-500'}`}
                        >
                          <span>品类创新咨询二</span>
                          <span className="px-1.5 py-0.2 rounded text-[10px] bg-[#007BC7]/10 text-[#007BC7] font-mono">NEW</span>
                        </button>
                        <span className="text-neutral-200">|</span>
                        <button 
                          onClick={() => { setCurrentPage('category'); setActiveMenu(null); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                          className={`hover:text-[#007BC7] transition-colors cursor-pointer ${currentPage === 'category' ? 'text-[#007BC7] font-bold' : 'text-neutral-500'}`}
                        >
                          品类创新咨询集合页
                        </button>
                      </div>
                    </div>
                    <div className="grid grid-cols-3 gap-4">
                      <button 
                        onClick={() => { setCurrentPage('three-in-one-category'); setActiveMenu(null); window.scrollTo({ top: 0, behavior: 'smooth' }); }} 
                        className="group/item text-left flex flex-col justify-between p-3 rounded-xl hover:bg-neutral-50 transition-colors cursor-pointer w-full"
                      >
                        <div>
                          <div className="font-semibold text-sm text-neutral-800 group-hover/item:text-[#007BC7] transition-colors">三品合一品类创新咨询</div>
                          <div className="text-xs text-neutral-500 mt-1">重构战略定位与市场品类</div>
                        </div>
                        <div className="flex items-center justify-end mt-2">
                          <ArrowRight className="w-4 h-4 text-neutral-300 group-hover/item:text-[#007BC7] group-hover/item:translate-x-1 transition-all" />
                        </div>
                      </button>
                      <button 
                        onClick={() => { setCurrentPage('product-innovation-consulting'); setActiveMenu(null); window.scrollTo({ top: 0, behavior: 'smooth' }); }} 
                        className="group/item text-left flex flex-col justify-between p-3 rounded-xl hover:bg-neutral-50 transition-colors cursor-pointer w-full"
                      >
                        <div>
                          <div className="font-semibold text-sm text-neutral-800 group-hover/item:text-[#007BC7] transition-colors">产品创新0-1全案咨询</div>
                          <div className="text-xs text-neutral-500 mt-1">从用户洞察到爆品定义</div>
                        </div>
                        <div className="flex items-center justify-end mt-2">
                          <ArrowRight className="w-4 h-4 text-neutral-300 group-hover/item:text-[#007BC7] group-hover/item:translate-x-1 transition-all" />
                        </div>
                      </button>
                      <button 
                        onClick={() => { setCurrentPage('brand-innovation-consulting'); setActiveMenu(null); window.scrollTo({ top: 0, behavior: 'smooth' }); }} 
                        className="group/item text-left flex flex-col justify-between p-3 rounded-xl hover:bg-neutral-50 transition-colors cursor-pointer w-full"
                      >
                        <div>
                          <div className="font-semibold text-sm text-neutral-800 group-hover/item:text-[#007BC7] transition-colors">品牌创新0-1全案咨询</div>
                          <div className="text-xs text-neutral-500 mt-1">构建差异化战略与视觉IP</div>
                        </div>
                        <div className="flex items-center justify-end mt-2">
                          <ArrowRight className="w-4 h-4 text-neutral-300 group-hover/item:text-[#007BC7] group-hover/item:translate-x-1 transition-all" />
                        </div>
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <div 
              className="relative group"
              onMouseEnter={() => setActiveMenu('品牌与产品设计')}
              onMouseLeave={() => setActiveMenu(null)}
            >
              <button className="flex items-center gap-1 text-[15px] font-medium text-neutral-700 hover:text-[#005F96] transition-colors py-2">
                品牌&产品设计
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${activeMenu === '品牌与产品设计' ? 'rotate-180 text-[#007BC7]' : 'text-neutral-400'}`} />
              </button>

              <AnimatePresence>
                {activeMenu === '品牌与产品设计' && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute left-1/2 -translate-x-1/2 top-full mt-1 w-[480px] bg-white border border-neutral-100 shadow-2xl rounded-2xl p-6 grid grid-cols-2 gap-6 z-50"
                  >
                    {/* Left Column: 产品创新 */}
                    <div className="flex flex-col">
                      <a 
                        href="/product-innovation" 
                        onClick={(e) => { 
                          e.preventDefault(); 
                          setCurrentPage('product'); 
                          setActiveMenu(null); 
                          window.scrollTo({ top: 0, behavior: 'smooth' }); 
                        }} 
                        className="text-xs font-bold uppercase tracking-wider text-[#007BC7] hover:text-[#005F96] border-b border-neutral-100 pb-2 mb-3 flex items-center justify-between group/title transition-colors"
                      >
                        <span>产品创新</span>
                        <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover/title:opacity-100 transition-opacity" />
                      </a>
                      <div className="flex flex-col divide-y divide-neutral-100">
                        <a 
                          href="/product-innovation/industrial-design" 
                          onClick={(e) => { 
                            e.preventDefault(); 
                            setCurrentPage('industrial-design'); 
                            setActiveMenu(null); 
                            window.scrollTo({ top: 0, behavior: 'smooth' }); 
                          }} 
                          className="py-2.5 hover:text-[#005F96] text-sm text-neutral-700 transition-colors font-medium"
                        >
                          工业设计
                        </a>
                        <a 
                          href="/product-innovation/structural-design" 
                          onClick={(e) => { 
                            e.preventDefault(); 
                            setCurrentPage('structural-design'); 
                            setActiveMenu(null); 
                            window.scrollTo({ top: 0, behavior: 'smooth' }); 
                          }} 
                          className="py-2.5 hover:text-[#005F96] text-sm text-neutral-700 transition-colors font-medium"
                        >
                          结构设计
                        </a>
                        <a 
                          href="/product-innovation/production-landing" 
                          onClick={(e) => { 
                            e.preventDefault(); 
                            setCurrentPage('production-landing'); 
                            setActiveMenu(null); 
                            window.scrollTo({ top: 0, behavior: 'smooth' }); 
                          }} 
                          className="py-2.5 hover:text-[#005F96] text-sm text-neutral-700 transition-colors font-medium"
                        >
                          生产落地
                        </a>
                      </div>
                    </div>

                    {/* Right Column: 品牌创新 */}
                    <div className="flex flex-col">
                      <a 
                        href="/brand-innovation" 
                        onClick={(e) => { 
                          e.preventDefault(); 
                          setCurrentPage('brand'); 
                          setActiveMenu(null); 
                          window.scrollTo({ top: 0, behavior: 'smooth' }); 
                        }} 
                        className="text-xs font-bold uppercase tracking-wider text-[#007BC7] hover:text-[#005F96] border-b border-neutral-100 pb-2 mb-3 flex items-center justify-between group/title transition-colors"
                      >
                        <span>品牌创新</span>
                        <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover/title:opacity-100 transition-opacity" />
                      </a>
                      <div className="flex flex-col divide-y divide-neutral-100">
                        <a 
                          href="/brand-innovation/full-case-design" 
                          onClick={(e) => { 
                            e.preventDefault(); 
                            setCurrentPage('full-case-design'); 
                            setActiveMenu(null); 
                            window.scrollTo({ top: 0, behavior: 'smooth' }); 
                          }} 
                          className="py-2.5 hover:text-[#005F96] text-sm text-neutral-700 transition-colors font-medium"
                        >
                          品牌全案设计
                        </a>
                        <a 
                          href="/brand-innovation/packaging-design" 
                          onClick={(e) => { 
                            e.preventDefault(); 
                            setCurrentPage('packaging-design'); 
                            setActiveMenu(null); 
                            window.scrollTo({ top: 0, behavior: 'smooth' }); 
                          }} 
                          className="py-2.5 hover:text-[#005F96] text-sm text-neutral-700 transition-colors font-medium"
                        >
                          包装设计
                        </a>
                        <a 
                          href="/brand-innovation/ip-design" 
                          onClick={(e) => { 
                            e.preventDefault(); 
                            setCurrentPage('ip-design'); 
                            setActiveMenu(null); 
                            window.scrollTo({ top: 0, behavior: 'smooth' }); 
                          }} 
                          className="py-2.5 hover:text-[#005F96] text-sm text-neutral-700 transition-colors font-medium"
                        >
                          IP设计
                        </a>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <div 
              className="relative group"
              onMouseEnter={() => setActiveMenu('行业')}
              onMouseLeave={() => setActiveMenu(null)}
            >
              <button 
                onClick={() => { setCurrentPage('industry'); setActiveMenu(null); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                className="flex items-center gap-1 text-[15px] font-medium text-neutral-700 hover:text-[#005F96] transition-colors py-2 cursor-pointer"
              >
                行业
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${activeMenu === '行业' ? 'rotate-180 text-[#007BC7]' : 'text-neutral-400'}`} />
              </button>

              <AnimatePresence>
                {activeMenu === '行业' && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute left-1/2 -translate-x-1/2 top-full mt-2 w-[920px] bg-white border border-neutral-100 shadow-2xl rounded-2xl p-5 z-50 text-left"
                  >
                    <div className="flex flex-col gap-4">
                      {/* 科技类 (7个横向一排) */}
                      <div className="flex flex-col gap-2">
                        <div className="text-xs font-bold uppercase tracking-wider text-[#007BC7] border-b border-neutral-100 pb-2">
                          科技类
                        </div>
                        <div className="grid grid-cols-7 gap-2">
                          {[
                            { name: '机器人', path: '/industry/robotics' },
                            { name: '智能3C', path: '/industry/smart-3c' },
                            { name: '智能家电', path: '/industry/home-appliances' },
                            { name: '智能医疗', path: '/industry/healthcare' },
                            { name: '智能装备', path: '/industry/industrial-equipment' },
                            { name: '智能能源', path: '/industry/new-energy' },
                            { name: '智能交通', path: '/industry/transportation' },
                          ].map((item) => (
                            <button 
                              key={item.path}
                              onClick={() => { handleNavigateUrl(item.path); setActiveMenu(null); }} 
                              className="py-2 px-2.5 rounded-xl hover:bg-neutral-50 hover:text-[#005F96] text-sm text-neutral-700 transition-all font-medium text-left w-full border-none bg-transparent cursor-pointer group flex items-center justify-between whitespace-nowrap"
                            >
                              <span>{item.name}</span>
                              <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all text-[#005F96] shrink-0" />
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* 消费类 (7个横向一排) */}
                      <div className="flex flex-col gap-2">
                        <div className="text-xs font-bold uppercase tracking-wider text-[#007BC7] border-b border-neutral-100 pb-2">
                          消费类
                        </div>
                        <div className="grid grid-cols-7 gap-2">
                          {[
                            { name: '食品酒饮', path: '/industry/food-beverage' },
                            { name: '宠物经济', path: '/industry/pet-economy' },
                            { name: '文化创意', path: '/industry/cultural-creative' },
                            { name: '家居鞋服', path: '/industry/home-apparel' },
                            { name: '大健康', path: '/industry/wellness-health' },
                            { name: '连锁零售', path: '/industry/retail' },
                            { name: '美妆个护', path: '/industry/beauty-personal-care' },
                          ].map((item) => (
                            <button 
                              key={item.path}
                              onClick={() => { handleNavigateUrl(item.path); setActiveMenu(null); }} 
                              className="py-2 px-2.5 rounded-xl hover:bg-neutral-50 hover:text-[#005F96] text-sm text-neutral-700 transition-all font-medium text-left w-full border-none bg-transparent cursor-pointer group flex items-center justify-between whitespace-nowrap"
                            >
                              <span>{item.name}</span>
                              <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all text-[#005F96] shrink-0" />
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <button 
              onClick={() => { handleNavigateUrl('/cases'); setActiveMenu(null); }} 
              className={`text-[15px] font-medium transition-colors border-none bg-transparent cursor-pointer ${
                currentPage === 'cases' ? 'text-[#007BC7] font-bold' : 'text-neutral-700 hover:text-[#005F96]'
              }`}
            >
              案例
            </button>

            <div 
              className="relative group"
              onMouseEnter={() => setActiveMenu('三品合一')}
              onMouseLeave={() => setActiveMenu(null)}
            >
              <button 
                onClick={() => { setCurrentPage('three-in-one'); setActiveMenu(null); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                className={`flex items-center gap-1 text-[15px] font-medium transition-colors py-2 cursor-pointer border-none bg-transparent ${
                  currentPage === 'three-in-one' || currentPage === 'three-in-one-learning' ? 'text-[#007BC7] font-bold' : 'text-neutral-700 hover:text-[#005F96]'
                }`}
              >
                三品合一
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${activeMenu === '三品合一' ? 'rotate-180 text-[#007BC7]' : 'text-neutral-400'}`} />
              </button>

              <AnimatePresence>
                {activeMenu === '三品合一' && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute left-1/2 -translate-x-1/2 top-full mt-1 w-[380px] bg-white border border-neutral-100 shadow-2xl rounded-2xl p-3 grid gap-1.5 z-50 text-left"
                  >
                    <button
                      onClick={() => { setCurrentPage('three-in-one'); setActiveMenu(null); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                      className={`group/item text-left px-3.5 py-3 rounded-xl transition-colors cursor-pointer w-full flex items-start justify-between border-none bg-transparent ${
                        currentPage === 'three-in-one' ? 'bg-blue-50/70' : 'hover:bg-neutral-50'
                      }`}
                    >
                      <div className="flex-1 min-w-0">
                        <div className="font-semibold text-sm text-neutral-800 group-hover/item:text-[#007BC7] transition-colors flex items-center justify-between">
                          <span>方法论</span>
                          <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover/item:opacity-100 group-hover/item:translate-x-0.5 transition-all text-[#007BC7]" />
                        </div>
                        <div className="text-xs text-neutral-500 mt-1 leading-relaxed">开启三品合一创新之旅 · 战略与爆品全景</div>
                      </div>
                    </button>

                    <button
                      onClick={() => { setCurrentPage('three-in-one-learning'); setActiveMenu(null); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                      className={`group/item text-left px-3.5 py-3 rounded-xl transition-colors cursor-pointer w-full flex items-start justify-between border-none bg-transparent ${
                        currentPage === 'three-in-one-learning' ? 'bg-blue-50/70' : 'hover:bg-neutral-50'
                      }`}
                    >
                      <div className="flex-1 min-w-0">
                        <div className="font-semibold text-sm text-neutral-800 group-hover/item:text-[#007BC7] transition-colors flex items-center justify-between">
                          <span>研习</span>
                          <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover/item:opacity-100 group-hover/item:translate-x-0.5 transition-all text-[#007BC7]" />
                        </div>
                        <div className="text-xs text-neutral-500 mt-1 leading-relaxed">洛可可方法论研习、经典专著与实战课程</div>
                      </div>
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <div 
              className="relative group"
              onMouseEnter={() => setActiveMenu('我们')}
              onMouseLeave={() => setActiveMenu(null)}
            >
              <button className="flex items-center gap-1 text-[15px] font-medium text-neutral-700 hover:text-[#005F96] transition-colors py-2">
                我们
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${activeMenu === '我们' ? 'rotate-180 text-[#007BC7]' : 'text-neutral-400'}`} />
              </button>

              <AnimatePresence>
                {activeMenu === '我们' && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute right-0 top-full mt-1 w-[480px] bg-white border border-neutral-100 shadow-2xl rounded-2xl p-4 grid grid-cols-4 gap-2 z-50"
                  >
                    <button onClick={() => { handleNavigateUrl('/about'); setActiveMenu(null); }} className={`p-2.5 rounded-xl block text-center text-sm font-medium transition-colors border-none bg-transparent cursor-pointer w-full ${currentPage === 'about' ? 'text-[#007BC7] font-bold bg-blue-50' : 'text-neutral-800 hover:text-[#005F96] hover:bg-neutral-50'}`}>关于我们</button>
                    <button onClick={() => { handleNavigateUrl('/contact'); setActiveMenu(null); }} className={`p-2.5 rounded-xl block text-center text-sm font-medium transition-colors border-none bg-transparent cursor-pointer w-full ${currentPage === 'contact' ? 'text-[#007BC7] font-bold bg-blue-50' : 'text-neutral-800 hover:text-[#005F96] hover:bg-neutral-50'}`}>联系我们</button>
                    <button onClick={() => { handleNavigateUrl('/news'); setActiveMenu(null); }} className={`p-2.5 rounded-xl block text-center text-sm font-medium transition-colors border-none bg-transparent cursor-pointer w-full ${currentPage === 'news' ? 'text-[#007BC7] font-bold bg-blue-50' : 'text-neutral-800 hover:text-[#005F96] hover:bg-neutral-50'}`}>新闻中心</button>
                    <button onClick={() => { handleNavigateUrl('/success-path'); setActiveMenu(null); }} className={`p-2.5 rounded-xl block text-center text-sm font-medium transition-colors border-none bg-transparent cursor-pointer w-full ${currentPage === 'success-path' ? 'text-[#007BC7] font-bold bg-blue-50' : 'text-neutral-800 hover:text-[#005F96] hover:bg-neutral-50'}`}>成功路径</button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </nav>

          {/* Search Box & Mobile Menu Button (Right aligned, flex-1 to balance center nav) */}
          <div className="flex items-center justify-end gap-4 flex-1">
            {/* Search Input - Right Aligned */}
            <div className={`relative hidden md:flex items-center rounded-full border px-3.5 py-1.5 transition-all duration-300 ${isSearchFocused ? 'border-[#007BC7] ring-2 ring-blue-100 w-64' : 'border-neutral-200 w-48'}`}>
              <Search className="w-4 h-4 text-neutral-400 mr-2 shrink-0" aria-hidden="true" />
              <input 
                type="text" 
                placeholder="搜一搜" 
                aria-label="搜索案例"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onFocus={() => setIsSearchFocused(true)}
                onBlur={() => setTimeout(() => setIsSearchFocused(false), 200)}
                className="bg-transparent text-sm w-full outline-none text-neutral-800 placeholder-neutral-400"
              />
              {searchQuery && (
                <button 
                  onClick={() => setSearchQuery('')}
                  className="p-0.5 rounded-full hover:bg-neutral-100 shrink-0"
                >
                  <X className="w-3 h-3 text-neutral-400" />
                </button>
              )}
            </div>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl border border-neutral-200 lg:hidden text-neutral-700 hover:bg-neutral-50 transition-colors"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>
      </div>

      {/* MOBILE MENU NAV */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden border-b border-neutral-100 bg-white px-4 py-6 grid gap-4 z-30 relative"
          >
            {/* Mobile Search */}
            <div className="flex items-center rounded-xl border border-neutral-200 px-3 py-2">
              <Search className="w-4 h-4 text-neutral-400 mr-2" aria-hidden="true" />
              <input 
                type="text" 
                placeholder="搜一搜" 
                aria-label="手机端搜索案例"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="bg-transparent text-sm w-full outline-none text-neutral-800 placeholder-neutral-400"
              />
            </div>
            
            <nav aria-label="手机端导航" className="grid gap-2">
              <span className="text-xs font-semibold text-neutral-400 uppercase tracking-wider">业务专区</span>
              <button onClick={() => { setCurrentPage('category-v2'); setMobileMenuOpen(false); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="py-2 px-3 hover:bg-neutral-50 rounded-lg text-sm font-medium text-[#007BC7] font-bold text-left cursor-pointer flex items-center justify-between">
                <span>品类创新咨询</span>
                <span className="text-[10px] px-1.5 py-0.5 rounded bg-[#007BC7]/10 text-[#007BC7] font-mono">NEW</span>
              </button>
              <button onClick={() => { setCurrentPage('three-in-one-category'); setMobileMenuOpen(false); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="py-2 px-3 hover:bg-neutral-50 rounded-lg text-sm font-medium text-neutral-800 text-left cursor-pointer">三品合一品类创新咨询</button>
              <button onClick={() => { setCurrentPage('product-innovation-consulting'); setMobileMenuOpen(false); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="py-2 px-3 hover:bg-neutral-50 rounded-lg text-sm font-medium text-neutral-800 text-left cursor-pointer">产品创新 0–1 全案咨询</button>
              <button onClick={() => { setCurrentPage('brand-innovation-consulting'); setMobileMenuOpen(false); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="py-2 px-3 hover:bg-neutral-50 rounded-lg text-sm font-medium text-neutral-800 text-left cursor-pointer">品牌创新 0–1 全案咨询</button>
              <button onClick={() => { setCurrentPage('category'); setMobileMenuOpen(false); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="py-2 px-3 hover:bg-neutral-50 rounded-lg text-sm font-medium text-neutral-500 text-left cursor-pointer">品类创新咨询集合页</button>
              <button onClick={() => { setCurrentPage('product'); setMobileMenuOpen(false); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="py-2 px-3 hover:bg-neutral-50 rounded-lg text-sm font-medium text-neutral-800 text-left cursor-pointer">产品创新</button>
              <button onClick={() => { setCurrentPage('brand'); setMobileMenuOpen(false); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="py-2 px-3 hover:bg-neutral-50 rounded-lg text-sm font-medium text-neutral-800 text-left cursor-pointer">品牌创新</button>
              <button 
                onClick={() => { handleNavigateUrl('/cases'); setMobileMenuOpen(false); }} 
                className={`py-2 px-3 rounded-lg text-sm font-medium text-left transition-colors border-none bg-transparent cursor-pointer ${
                  currentPage === 'cases' ? 'bg-blue-50 text-[#007BC7] font-bold' : 'text-neutral-800 hover:bg-neutral-50'
                }`}
              >
                经典成功案例
              </button>
              <button 
                onClick={() => { handleNavigateUrl('/three-in-one'); setMobileMenuOpen(false); }} 
                className={`py-2 px-3 rounded-lg text-sm font-medium text-left transition-colors border-none bg-transparent cursor-pointer ${
                  currentPage === 'three-in-one' ? 'bg-blue-50 text-[#007BC7] font-bold' : 'text-neutral-800 hover:bg-neutral-50'
                }`}
              >
                方法论
              </button>
              <button 
                onClick={() => { handleNavigateUrl('/three-in-one-learning'); setMobileMenuOpen(false); }} 
                className={`py-2 px-3 rounded-lg text-sm font-medium text-left transition-colors border-none bg-transparent cursor-pointer ${
                  currentPage === 'three-in-one-learning' ? 'bg-blue-50 text-[#007BC7] font-bold' : 'text-neutral-800 hover:bg-neutral-50'
                }`}
              >
                研习
              </button>
              <button 
                onClick={() => { handleNavigateUrl('/about'); setMobileMenuOpen(false); }} 
                className={`py-2 px-3 rounded-lg text-sm font-medium text-left transition-colors border-none bg-transparent cursor-pointer ${
                  currentPage === 'about' ? 'bg-blue-50 text-[#007BC7] font-bold' : 'text-neutral-800 hover:bg-neutral-50'
                }`}
              >
                公司简介
              </button>
            </nav>
            
            <button 
              onClick={() => {
                setMobileMenuOpen(false);
                setIsContactModalOpen(true);
              }} 
              className="w-full bg-[#1a1a1a] text-white font-medium py-2.5 rounded-xl text-center shadow-lg hover:bg-[#007BC7] transition-all text-sm"
            >
              即刻获取创新设计方案
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {currentPage === 'home' ? (
        <>
          {/* 3. HERO / BIG TITLE SECTION */}
          <section id="hero-section" className="hero-section py-12 md:py-20 text-center bg-radial from-neutral-50 to-white relative">
        <div className="hero-slogan-block max-w-4xl mx-auto hero-inner">
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="h-[1px] w-8 bg-[#007BC7]"></span>
            <span className="text-[12px] tracking-[0.3em] font-bold text-[#007BC7] font-mono">22 YEARS OF DESIGN EXCELLENCE</span>
            <span className="h-[1px] w-8 bg-[#007BC7]"></span>
          </div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="hero-title text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight text-neutral-900 leading-[1.05] font-display"
          >
            <span className="char char-blue">三</span>
            <span className="char char-blue">品</span>
            <span className="char char-blue">合</span>
            <span className="char char-blue">一</span>
            <span className="char char-black">助</span>
            <span className="char char-black">力</span>
            <span className="char char-black">企</span>
            <span className="char char-black">业</span>
            <span className="char char-black">成</span>
            <span className="char char-black">为</span>
            <span className="char char-black">品</span>
            <span className="char char-black">类</span>
            <span className="char char-black">冠</span>
            <span className="char char-black">军</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xs md:text-sm font-semibold tracking-[0.35em] text-neutral-400 uppercase mt-4 font-mono"
          >
            LKK Consulting & Design Group
          </motion.p>
        </div>

        {/* HERO GRID WORK */}
        <div className="max-w-[95%] w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 mt-12 md:mt-16 text-left items-stretch">
          
          {/* Left Large Banner Card */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-8 relative group overflow-hidden rounded-3xl shadow-lg border border-neutral-100 bg-white flex flex-col justify-center w-full aspect-[16/9]"
          >
            <div className="absolute inset-0 w-full h-full flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${activeBannerIndex * 100}%)` }}>
              
              {/* SLIDE 1: Achievements Slide (Five stats + Logo loop with image background) */}
              <div className="w-full h-full shrink-0 relative bg-neutral-900 text-white flex flex-col justify-between overflow-hidden select-none">
                {/* Background Image that covers the full screen */}
                <div className="absolute inset-0 z-0 transition-transform duration-1000 group-hover:scale-105">
                  <img 
                    src="https://github.com/minaxyue-ops/MINA/releases/download/1/banner1.jpg" 
                    alt="LKK Achievement Background" 
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                  {/* Subtle vignette/shading overlay to guarantee text readability while fully retaining image colors */}
                  <div className="absolute inset-0 bg-neutral-950/25"></div>
                </div>

                {/* Top and middle content wrap with proper paddings, keeping bottom marquee section outside so it fits perfectly flush */}
                <div className="flex flex-col flex-1 justify-between p-4 pb-0 md:pt-6 md:px-8 z-10 w-full">
                  {/* 1. Header */}
                  <div className="flex items-center justify-between">
                    <div className="hero-badge">
                      <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse"></span>
                      <span className="text-[10px] md:text-xs font-bold tracking-[0.2em] text-white font-mono uppercase">
                        DESIGN EXCELLENCE DISPLAY • PAGE 1 OF 3
                      </span>
                    </div>
                    <div className="text-[10px] md:text-xs font-bold text-neutral-300 font-mono tracking-wider">
                      EST. 2004
                    </div>
                  </div>

                  {/* 2. Four Quantitative Stats with Bolder Numbers, evenly distributed inside a CSS Grid */}
                  <div className="stats-section my-auto py-2 w-full px-2 md:px-8">
                    <div className="stat-item">
                      <div className="stat-number">
                        <Counter target={600} /><span className="text-white font-light ml-0.5">+</span>
                      </div>
                      <div className="stat-label">
                        国内外设计大奖
                      </div>
                    </div>

                    <div className="stat-item">
                      <div className="stat-number">
                        <Counter target={200} /><span className="text-white font-light ml-0.5">+</span>
                      </div>
                      <div className="stat-label">
                        国际500强客户
                      </div>
                    </div>

                    <div className="stat-item">
                      <div className="stat-number">
                        <Counter target={300} /><span className="text-white font-light ml-0.5">+</span>
                      </div>
                      <div className="stat-label">
                        国内500强客户
                      </div>
                    </div>

                    <div className="stat-item">
                      <div className="stat-number">
                        <Counter target={100} /><span className="text-white font-light ml-0.5">+</span>
                      </div>
                      <div className="stat-label">
                        打造品类冠军
                      </div>
                    </div>
                  </div>
                </div>

                {/* 3. Double-Row Logo Marquees (Compact and responsive, styled with capsule glass pills) */}
                <div className="hero-logo-marquee-wrapper mt-auto z-10">
                  {/* Row 1: Leftwards Marquee (Awards with custom grey-scaled images - scaled up 30%, gap 64px, pure CSS) */}
                  <div className="logo-marquee-row awards-row">
                    <div className="logo-marquee-track awards-track">
                      <div className="logo-marquee-group awards-group">
                        <img className="logo-item" src="https://github.com/minaxyue-ops/MINA/releases/download/1/jpred.png" alt="德国红点设计奖" width="90" height="40" />
                        <img className="logo-item" src="https://github.com/minaxyue-ops/MINA/releases/download/1/if.png" alt="iF设计奖" width="90" height="40" />
                        <img className="logo-item" src="https://github.com/minaxyue-ops/MINA/releases/download/1/idsa.png" alt="美国IDEA奖" width="90" height="40" />
                        <img className="logo-item" src="https://github.com/minaxyue-ops/MINA/releases/download/1/good.png" alt="日本G-Mark奖" width="90" height="40" />
                        <img className="logo-item" src="https://github.com/minaxyue-ops/MINA/releases/download/1/redstar.png" alt="中国红星奖" width="90" height="40" />
                        <img className="logo-item" src="https://github.com/minaxyue-ops/MINA/releases/download/1/jindian.png" alt="金点设计奖" width="90" height="40" />
                        <img className="logo-item" src="https://github.com/minaxyue-ops/MINA/releases/download/1/k-desgan.png" alt="韩国K-Design奖" width="90" height="40" />
                        <img className="logo-item" src="https://github.com/minaxyue-ops/MINA/releases/download/1/Adesgan.png" alt="意大利A'设计奖" width="90" height="40" />
                      </div>
                      <div className="logo-marquee-group awards-group" aria-hidden="true">
                        <img className="logo-item" src="https://github.com/minaxyue-ops/MINA/releases/download/1/jpred.png" alt="" width="90" height="40" />
                        <img className="logo-item" src="https://github.com/minaxyue-ops/MINA/releases/download/1/if.png" alt="" width="90" height="40" />
                        <img className="logo-item" src="https://github.com/minaxyue-ops/MINA/releases/download/1/idsa.png" alt="" width="90" height="40" />
                        <img className="logo-item" src="https://github.com/minaxyue-ops/MINA/releases/download/1/good.png" alt="" width="90" height="40" />
                        <img className="logo-item" src="https://github.com/minaxyue-ops/MINA/releases/download/1/redstar.png" alt="" width="90" height="40" />
                        <img className="logo-item" src="https://github.com/minaxyue-ops/MINA/releases/download/1/jindian.png" alt="" width="90" height="40" />
                        <img className="logo-item" src="https://github.com/minaxyue-ops/MINA/releases/download/1/k-desgan.png" alt="" width="90" height="40" />
                        <img className="logo-item" src="https://github.com/minaxyue-ops/MINA/releases/download/1/Adesgan.png" alt="" width="90" height="40" />
                      </div>
                    </div>
                  </div>

                  {/* Row 2: Rightwards Marquee (Clients text in glass pills) */}
                  <div className="logo-marquee-row brands-row h-12 md:h-14 flex items-center">
                    <div className="logo-marquee-track brands">
                      <div className="logo-marquee-group brands-group">
                        {CLIENTS_LIST.map((client, i) => (
                          <div 
                            key={`client-1-${i}`} 
                            className="marquee-chip flex items-center justify-center text-[9px] md:text-[10px] font-bold shrink-0" 
                          >
                            {client}
                          </div>
                        ))}
                      </div>
                      <div className="logo-marquee-group brands-group" aria-hidden="true">
                        {CLIENTS_LIST.map((client, i) => (
                          <div 
                            key={`client-2-${i}`} 
                            className="marquee-chip flex items-center justify-center text-[9px] md:text-[10px] font-bold shrink-0" 
                          >
                            {client}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* SLIDE 2: Clean Image-Only Banner Slide */}
              <div className="w-full h-full shrink-0 relative overflow-hidden select-none">
                <img 
                  src="https://github.com/minaxyue-ops/MINA/releases/download/1/bannner2.png" 
                  alt="LKK Design Strategy Banner" 
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* SLIDE 3: Clean Image-Only Banner Slide */}
              <div className="w-full h-full shrink-0 relative overflow-hidden select-none">
                <img 
                  src="https://github.com/minaxyue-ops/MINA/releases/download/1/banner3.png" 
                  alt="LKK Category Innovation Banner" 
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>

            </div>

            {/* Prev/Next arrows on hover */}
            <button
              onClick={(e) => { e.stopPropagation(); setActiveBannerIndex((prev) => (prev - 1 + 3) % 3); }}
              className="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all duration-300 slide-arrow"
              aria-label="Previous Slide"
            >
              <ChevronLeft className="w-4.5 h-4.5" />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); setActiveBannerIndex((prev) => (prev + 1) % 3); }}
              className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all duration-300 slide-arrow"
              aria-label="Next Slide"
            >
              <ChevronRight className="w-4.5 h-4.5" />
            </button>

            {/* Indicator Dots */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-2">
              {[0, 1, 2].map((idx) => (
                <button
                  key={idx}
                  onClick={(e) => { e.stopPropagation(); setActiveBannerIndex(idx); }}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    activeBannerIndex === idx 
                      ? 'bg-[#007BC7] w-6' 
                      : 'bg-neutral-300/60 hover:bg-neutral-400/80'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          </motion.div>

          {/* Right Service Grid (14 categories: 科技类 7个, 消费类 7个) */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="hero-category-grid lg:col-span-4 flex flex-col justify-between rounded-3xl px-3 sm:px-4 md:px-4.5 py-3.5 lg:py-4 border border-neutral-100 h-full"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-3.5 lg:gap-x-4 gap-y-1 lg:gap-y-1.5 flex-1">
              {/* Column 1: 科技类 (7个) */}
              <div className="flex flex-col justify-between">
                {SERVICE_CATEGORIES.slice(0, 7).map((cat) => (
                  <motion.div 
                    key={cat.id}
                    whileHover={{ x: 3 }}
                    onClick={() => {
                      const map: Record<string, string> = {
                        '机器人': '/industry/robotics',
                        '智能3C': '/industry/smart-3c',
                        '智能家电': '/industry/home-appliances',
                        '智能医疗': '/industry/healthcare',
                        '智能装备': '/industry/industrial-equipment',
                        '智能能源': '/industry/new-energy',
                        '智能交通': '/industry/transportation',
                      };
                      handleNavigateUrl(map[cat.name] || '/industry');
                    }}
                    className="group flex flex-col justify-center py-1.5 border-b border-neutral-200/70 hover:border-[#005F96] transition-colors text-left cursor-pointer"
                  >
                    <div>
                      <div className="flex items-center justify-between">
                        <span className="text-xs sm:text-sm font-bold text-neutral-800 group-hover:text-[#005F96] transition-colors">
                          {cat.name}
                        </span>
                        <ArrowRight className="w-3.5 h-3.5 text-neutral-300 group-hover:text-[#005F96] group-hover:translate-x-1 transition-all" />
                      </div>
                      <p className="text-[11px] text-neutral-500 mt-0.5 leading-tight pr-1 line-clamp-1">
                        {cat.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Column 2: 消费类 (7个) */}
              <div className="flex flex-col justify-between">
                {SERVICE_CATEGORIES.slice(7, 14).map((cat) => (
                  <motion.div 
                    key={cat.id}
                    whileHover={{ x: 3 }}
                    onClick={() => {
                      const map: Record<string, string> = {
                        '食品酒饮': '/industry/food-beverage',
                        '宠物经济': '/industry/pet-economy',
                        '文化创意': '/industry/cultural-creative',
                        '家居鞋服': '/industry/home-apparel',
                        '大健康': '/industry/wellness-health',
                        '连锁零售': '/industry/retail',
                        '美妆个护': '/industry/beauty-personal-care',
                      };
                      handleNavigateUrl(map[cat.name] || '/industry');
                    }}
                    className="group flex flex-col justify-center py-1.5 border-b border-neutral-200/70 hover:border-[#005F96] transition-colors text-left cursor-pointer"
                  >
                    <div>
                      <div className="flex items-center justify-between">
                        <span className="text-xs sm:text-sm font-bold text-neutral-800 group-hover:text-[#005F96] transition-colors">
                          {cat.name}
                        </span>
                        <ArrowRight className="w-3.5 h-3.5 text-neutral-300 group-hover:text-[#005F96] group-hover:translate-x-1 transition-all" />
                      </div>
                      <p className="text-[11px] text-neutral-500 mt-0.5 leading-tight pr-1 line-clamp-1">
                        {cat.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

        </div>

        {/* Consultation Banner below the Hero grid */}
        <motion.div 
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="max-w-[95%] w-full mx-auto mt-4 sm:mt-5 rounded-2xl bg-white border border-neutral-100 py-4 px-5 sm:py-5 sm:px-8 flex flex-col items-center justify-center text-center gap-[27px] sm:gap-[32px] shadow-md hover:shadow-lg transition-all duration-300 relative overflow-hidden"
        >
          {/* 顶栏极细微光渐变边线 */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/5 h-[1px] bg-gradient-to-r from-transparent via-[#007BC7]/20 to-transparent pointer-events-none" />

          {/* 1. 描述文本 */}
          <p className="text-[12px] sm:text-[13px] font-normal text-neutral-500 leading-normal text-center w-full max-w-full lg:whitespace-nowrap my-0 tracking-tight sm:tracking-normal">
            洛可可是一家用咨询设计的能力，为垂直行业客户，提供产品创新价值的公司。我们坚持以用户体验为核心，致力于为企业提供行业整体创新解决方案。如需创新设计咨询，请联系专家团队。
          </p>

          {/* 2. 按钮：品牌蓝色质感胶囊 */}
          <button 
            onClick={() => setIsContactModalOpen(true)}
            className="group relative inline-flex items-center gap-1.5 sm:gap-2 bg-gradient-to-r from-[#007BC7] to-[#0284C7] hover:from-[#0066a5] hover:to-[#0270b2] text-white px-5 py-2 sm:px-6 sm:py-2 rounded-full text-xs sm:text-sm font-bold tracking-wide transition-all duration-300 shadow-xs hover:shadow-md hover:scale-[1.01] active:scale-95 cursor-pointer border border-sky-300/30 overflow-hidden"
          >
            {/* 扫光流线 */}
            <span className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/25 to-transparent -translate-x-full group-hover:translate-x-[300%] transition-transform duration-1000 ease-in-out pointer-events-none" />
            
            <span>立即对接垂直专家</span>
            <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white transition-transform duration-300 group-hover:translate-x-1 shrink-0" />
          </button>
        </motion.div>
      </section>

      {/* 4. 专业服务 SECTION */}
      <section id="professional-services" className="py-20 bg-white border-y border-neutral-100">
        <div className="max-w-[95%] w-full mx-auto services-inner">
          {/* Section Header */}
          <ScrollSectionTitle 
            badge="Expertise"
            title="专业服务"
            subtitle="我们依托于独树一帜的“战略咨询 + 整合设计”体系，面向未来进行多维度商业创新设计服务。"
            align="between"
          />

          {/* Three column Service Cards - Apple 官网「沉浸式探索卡片」视觉体系 (大图沉浸式承托卡、通栏大图、纯白悬浮投影、毛玻璃徽章) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PROFESSIONAL_SERVICES.map((service, idx) => {
              const getServiceUrl = (id: string) => {
                if (id === 'service-1') return '/category-consulting';
                if (id === 'service-2') return '/product-innovation';
                if (id === 'service-3') return '/brand-innovation';
                return '/product-innovation';
              };

              return (
                <motion.div 
                  key={service.id}
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
                  onClick={() => handleNavigateUrl(getServiceUrl(service.id))}
                  className="group flex flex-col justify-between h-full bg-[#FFFFFF] rounded-[26px] overflow-hidden border border-black/[0.04] shadow-[0_12px_32px_rgba(0,0,0,0.08)] hover:shadow-[0_20px_48px_rgba(0,0,0,0.12)] transition-all duration-500 cursor-pointer text-left"
                >
                  <div className="flex flex-col w-full">
                    {/* 上层通栏沉浸式大图 (无内边距，贴合卡片顶部与左右两角，占卡片主体体量，悬停 1.03x 缓动) */}
                    <div className="w-full aspect-[16/11] sm:aspect-[4/3] relative overflow-hidden bg-neutral-100 border-b border-black/[0.06]">
                      <img 
                        src={service.image} 
                        alt={service.title} 
                        className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                        referrerPolicy="no-referrer"
                      />
                      {/* 标签徽章 (半透明毛玻璃质感 backdrop-blur-md + bg-white/75，细白边框，等宽大写字距 1.2px，中性深灰 #1D1D1F) */}
                      <div className="absolute top-4 left-4 bg-white/75 backdrop-blur-md border border-white/80 text-[11px] sm:text-[12px] font-medium tracking-[1.2px] uppercase text-[#1D1D1F] px-3.5 py-1.5 rounded-full font-mono shadow-xs">
                        {service.category}
                      </div>
                    </div>

                    {/* 下层文字承托区 (纯白背景，内边距 28–36px，大字号强对比排版) */}
                    <div className="p-7 sm:p-8 lg:p-9 flex flex-col flex-1">
                      {/* 标题排版 (Apple 系统字体栈，26–30px，Semibold 600，行高 1.2，字距 -0.5px，颜色 #1D1D1F) */}
                      <h3 className="text-[26px] sm:text-[28px] lg:text-[30px] font-semibold text-[#1D1D1F] leading-[1.2] tracking-[-0.5px] mb-4 font-[-apple-system,BlinkMacSystemFont,'SF_Pro_Display','PingFang_SC','Helvetica_Neue',sans-serif]">
                        {service.title}
                      </h3>

                      {/* 列表项 (圆点保留现有蓝色 #007BC7，直径 5.5px，首行居中对齐；文字 15-16px Regular #424245，行高 1.65，间距 13px) */}
                      <ul className="flex flex-col items-start gap-3.5 w-full text-[15px] sm:text-[16px] font-normal text-[#424245] leading-[1.65]">
                        {service.bullets.map((bullet, index) => (
                          <li key={index} className="flex items-start justify-start gap-2.5">
                            <span className="w-[5.5px] h-[5.5px] rounded-full bg-[#007BC7] shrink-0 mt-[9px]"></span>
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>

                      {/* 底部「查看详情 >」链接 (保留现有蓝色 #007BC7，字号 15-16px，Regular，纤细 Chevron，悬停 4px 微动效，底边距 28-32px 呼应) */}
                      <div className="mt-8 pt-1 flex items-center justify-start">
                        <span className="inline-flex items-center text-[15px] sm:text-[16px] font-normal text-[#007BC7] transition-colors">
                          <span>查看详情</span>
                          <span className="text-[17px] sm:text-[18px] font-light leading-none transition-transform duration-200 group-hover:translate-x-1 ml-1.5">&rsaquo;</span>
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. 成功案例 SECTION */}
      <section id="case-studies" className="py-20 bg-neutral-50 border-t border-neutral-150">
        <div className="max-w-[95%] w-full mx-auto cases-inner">
          {/* Header */}
          <ScrollSectionTitle 
            badge="Portfolios"
            title="成功案例"
            subtitle="洛可可已服务超过数千个品牌客户，荣获多项国际工业设计大奖。"
            align="between"
          />

          {/* Cases grid V2 */}
          <div className="case-grid-v2">
            {filteredCasesV2.map((cs) => {
              const v2Data = getCaseV2Data(cs);
              return (
                <a 
                  key={cs.id}
                  href={`/cases/${cs.id}`}
                  onClick={(e) => {
                    const isTouch = window.matchMedia('(hover: none)').matches;
                    if (isTouch) {
                      const wasActive = activeV2Card === cs.id;
                      if (!wasActive) {
                        e.preventDefault(); // Stop navigation on touch devices to allow hover effect
                        setActiveV2Card(cs.id);
                        return;
                      }
                    }
                    e.preventDefault();
                    handleNavigateUrl(`/cases/${cs.id}`);
                  }}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      handleNavigateUrl(`/cases/${cs.id}`);
                    }
                  }}
                  tabIndex={0}
                  aria-label={`${cs.title} 案例详情`}
                  className={`case-card-v2 ${activeV2Card === cs.id ? 'is-active' : ''} block`}
                >
                  {getCaseV2LocalImage(cs.id) ? (
                    <img 
                      src={getCaseV2LocalImage(cs.id) || ''} 
                      alt={cs.title} 
                      referrerPolicy="no-referrer"
                      loading="lazy"
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div 
                      style={{ backgroundColor: getCaseV2PlaceholderColor(cs.id) }}
                      className="w-full h-full flex items-center justify-center p-4"
                    >
                      <span className="text-xs font-bold text-neutral-400 select-none text-center">
                        {v2Data.brand}（待替换）
                      </span>
                    </div>
                  )}
                  <div className="case-summary-v2">
                    <div className="case-brand-label">{v2Data.brand}</div>
                    <button 
                      type="button"
                      className="case-detail-arrow" 
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        setSelectedCase(cs);
                      }} 
                      aria-label="查看案例简介"
                    >
                      <span>案例简介</span><span>↗</span>
                    </button>
                    <div className="case-bottom-block">
                      <div className="case-divider">-</div>
                      <div className="case-title">{v2Data.title}</div>
                      <div className="case-desc">{v2Data.desc}</div>
                    </div>
                  </div>
                </a>
              );
            })}

            {filteredCasesV2.length === 0 && (
              <div className="col-span-full py-16 text-center border-2 border-dashed border-neutral-200 rounded-3xl">
                <p className="text-neutral-400">无匹配案例，请尝试搜索其他关键字</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 6. 新闻中心 SECTION - 极致纯粹的 Apple 官网卡片设计语言 */}
      <section id="news-center" className="py-20 md:py-28 bg-[#F5F5F7] border-t border-[#D2D2D7]/50">
        <div className="max-w-[95%] w-full mx-auto news-inner">
          
          <ScrollSectionTitle 
            badge="Company News"
            title="新闻中心"
            subtitle="了解我们的成长足迹，掌握行业新鲜资讯，一站式解锁公司最新动态，读懂我们的价值理念。"
            align="between"
            rightElement={
              <div className="flex items-center gap-2.5">
                <button 
                  onClick={() => setNewsIndex((prev) => (prev - 1 + NEWS_ARTICLES.length) % NEWS_ARTICLES.length)}
                  className="w-9 h-9 rounded-full bg-white/90 hover:bg-white text-[#1D1D1F] flex items-center justify-center transition-all shadow-[0_1px_4px_rgba(0,0,0,0.06)] hover:shadow-[0_2px_8px_rgba(0,0,0,0.12)] active:scale-95 cursor-pointer"
                  aria-label="Previous News"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button 
                  onClick={() => setNewsIndex((prev) => (prev + 1) % NEWS_ARTICLES.length)}
                  className="w-9 h-9 rounded-full bg-[#1D1D1F] hover:bg-[#0071E3] text-white flex items-center justify-center transition-all shadow-[0_1px_4px_rgba(0,0,0,0.08)] hover:shadow-[0_2px_8px_rgba(0,113,227,0.3)] active:scale-95 cursor-pointer"
                  aria-label="Next News"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            }
          />

          {/* Carousel Showcase of Articles - Apple 官网经典纯净卡片呈现 */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.1,
                  delayChildren: 0.05
                }
              }
            }}
          >
            {NEWS_ARTICLES.map((article, index) => {
              const isActive = index === newsIndex;
              return (
                <motion.div 
                  key={article.id}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { 
                      opacity: 1, 
                      y: 0, 
                      transition: {
                        duration: 0.5,
                        ease: [0.16, 1, 0.3, 1]
                      }
                    }
                  }}
                  whileHover={{ y: -6, transition: { duration: 0.3 } }}
                  onClick={() => handleNavigateUrl('/news')}
                  className={`group flex flex-col justify-between bg-white rounded-[22px] p-4.5 sm:p-5 shadow-[0_2px_12px_rgba(0,0,0,0.03)] hover:shadow-[0_16px_36px_rgba(0,0,0,0.08)] transition-all duration-400 cursor-pointer ${isActive ? 'ring-2 ring-[#0071E3]/20 shadow-[0_8px_24px_rgba(0,0,0,0.06)]' : ''}`}
                >
                  <div>
                    {/* News Card Cover (严格保持原有比例 aspect-[16/11]，无边框，极简圆角) */}
                    <div className="relative aspect-[16/11] w-full overflow-hidden rounded-[16px] bg-[#E8E8ED] mb-5 shrink-0">
                      <img 
                        src={article.image} 
                        alt={article.title} 
                        referrerPolicy="no-referrer"
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      />
                      <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-md px-2.5 py-0.5 rounded-full text-[10px] font-semibold text-white tracking-wider font-mono">
                        LKK NEWS
                      </div>
                    </div>

                    {/* 文字排版 - 采用 Apple 官网经典排版规范 */}
                    <div className="text-[12px] font-medium text-[#86868B] mb-2 font-mono">
                      {article.date}
                    </div>
                    <h3 className="text-base sm:text-lg font-semibold text-[#1D1D1F] tracking-tight group-hover:text-[#0071E3] transition-colors leading-snug line-clamp-2 mb-2.5 font-display">
                      {article.title}
                    </h3>
                    <p className="text-[13px] sm:text-sm text-[#86868B] leading-relaxed line-clamp-3 mb-4 font-normal">
                      {article.description}
                    </p>
                  </div>

                  {/* 底部 Apple 式极简纯文本动作链接 */}
                  <div className="pt-2 border-t border-black/[0.04] flex items-center justify-between mt-auto">
                    <span className="text-[#0071E3] group-hover:text-[#0077ED] font-medium text-xs sm:text-sm inline-flex items-center gap-1">
                      <span>阅读资讯全文</span>
                      <span className="text-base leading-none transition-transform group-hover:translate-x-1">&rsaquo;</span>
                    </span>
                    <span className="text-xs text-[#86868B]/60 font-mono">0{index + 1}</span>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* 底部更多入口 - Apple 经典胶囊/文本风格 */}
          <div className="mt-12 flex justify-center">
            <button 
              onClick={() => handleNavigateUrl('/news')}
              className="inline-flex items-center gap-1.5 px-6 py-2.5 rounded-full bg-white hover:bg-white text-[#1D1D1F] hover:text-[#0071E3] text-xs sm:text-sm font-medium transition-all shadow-xs hover:shadow-sm active:scale-95 cursor-pointer border border-black/5"
            >
              <span>查看更多新闻资讯</span>
              <ChevronRight className="w-3.5 h-3.5 text-[#86868B] group-hover:text-[#0071E3]" />
            </button>
          </div>

        </div>
      </section>
        </>
      ) : currentPage === 'cases' ? (
        <CasesPage 
          onOpenContactModal={() => setIsContactModalOpen(true)}
          onSelectCase={(cs) => setSelectedCase(cs as any)}
          onNavigateDetail={handleNavigateUrl}
        />
      ) : currentPage === 'case-detail' ? (
        <CaseDetailPage 
          caseId={currentCaseId}
          onOpenContactModal={() => setIsContactModalOpen(true)}
          onNavigate={handleNavigateUrl}
          onSelectRelatedCase={(id) => {
            setCurrentCaseId(id);
            setCurrentPage('case-detail');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        />
      ) : currentPage === 'about' ? (
        <AboutUsPage 
          onOpenContactModal={() => setIsContactModalOpen(true)}
        />
      ) : currentPage === 'news' ? (
        <NewsPage 
          onOpenContactModal={() => setIsContactModalOpen(true)}
          onSelectArticle={(id) => {
            setCurrentNewsId(id);
            setCurrentPage('news-detail');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          onNavigate={handleNavigateUrl}
        />
      ) : currentPage === 'news-detail' ? (
        <NewsDetailPage 
          articleId={currentNewsId}
          onOpenContactModal={() => setIsContactModalOpen(true)}
          onNavigate={handleNavigateUrl}
        />
      ) : currentPage === 'contact' ? (
        <ContactUsPage 
          onOpenContactModal={() => setIsContactModalOpen(true)}
          onNavigate={handleNavigateUrl}
        />
      ) : currentPage === 'success-path' ? (
        <SuccessPathPage 
          onOpenContactModal={() => setIsContactModalOpen(true)}
        />
      ) : currentPage === 'category' ? (
        <CategoryConsultingPage 
          onOpenContactModal={() => setIsContactModalOpen(true)}
          onSelectCase={(cs) => setSelectedCase(cs)}
          onNavigateDetail={handleNavigateUrl}
          CounterComponent={Counter}
        />
      ) : currentPage === 'category-v2' ? (
        <CategoryConsultingPageV2 
          onOpenContactModal={() => setIsContactModalOpen(true)}
          onSelectCase={(cs) => setSelectedCase(cs)}
          onNavigateDetail={handleNavigateUrl}
          CounterComponent={Counter}
        />
      ) : currentPage === 'three-in-one' ? (
        <SanPinHeYiPage 
          onOpenContactModal={() => setIsContactModalOpen(true)}
          onNavigateDetail={handleNavigateUrl}
          CounterComponent={Counter}
        />
      ) : currentPage === 'three-in-one-learning' ? (
        <SanPinHeYiLearningPage 
          onOpenContactModal={() => setIsContactModalOpen(true)}
          onNavigateDetail={handleNavigateUrl}
          CounterComponent={Counter}
        />
      ) : currentPage === 'three-in-one-category' ? (
        <ThreeInOneCategoryConsultingPage 
          onOpenContactModal={() => setIsContactModalOpen(true)}
          onNavigateDetail={handleNavigateUrl}
          CounterComponent={Counter}
        />
      ) : currentPage === 'product-innovation-consulting' ? (
        <ProductInnovationConsultingPage 
          onOpenContactModal={() => setIsContactModalOpen(true)}
          onNavigateDetail={handleNavigateUrl}
          CounterComponent={Counter}
        />
      ) : currentPage === 'brand-innovation-consulting' ? (
        <BrandInnovationConsultingPage 
          onOpenContactModal={() => setIsContactModalOpen(true)}
          onNavigateDetail={handleNavigateUrl}
          CounterComponent={Counter}
        />
      ) : currentPage === 'product' ? (
        <ProductInnovationPage 
          onOpenContactModal={() => setIsContactModalOpen(true)}
          onSelectCase={(cs) => setSelectedCase(cs)}
          onNavigateDetail={handleNavigateUrl}
        />
      ) : currentPage === 'brand' ? (
        <BrandInnovationPage 
          onOpenContactModal={() => setIsContactModalOpen(true)}
          onSelectCase={(cs) => setSelectedCase(cs)}
          onNavigateDetail={handleNavigateUrl}
        />
      ) : currentPage === 'industry' ? (
        <IndustryCollectionPage 
          onOpenContactModal={() => setIsContactModalOpen(true)}
          onNavigateDetail={handleNavigateUrl}
          CounterComponent={Counter}
        />
      ) : currentPage === 'industry-detail' ? (
        <IndustryDetailPage 
          industryKey={currentIndustryKey}
          onOpenContactModal={() => setIsContactModalOpen(true)}
          onSelectCase={(cs) => setSelectedCase(cs)}
          onNavigateParent={handleNavigateUrl}
          onNavigateDetail={handleNavigateUrl}
        />
      ) : (
        <ServiceDetailPage 
          serviceKey={currentPage}
          onOpenContactModal={() => setIsContactModalOpen(true)}
          onSelectCase={(cs) => setSelectedCase(cs)}
          onNavigateDetail={handleNavigateUrl}
          onBack={() => {
            if (['industrial-design', 'structural-design', 'production-landing'].includes(currentPage)) {
              setCurrentPage('product');
            } else if (['full-case-design', 'packaging-design', 'ip-design'].includes(currentPage)) {
              setCurrentPage('brand');
            } else {
              setCurrentPage('home');
            }
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        />
      )}

      {/* 8. FOOTER WITH ACCORDION & FORMS */}
      <footer 
        id="about-lkk" 
        className={`pt-12 pb-6 relative z-10 transition-colors duration-300 ${
          isFooterLight 
            ? 'bg-[#F5F5F5] text-neutral-600 border-t border-neutral-200' 
            : 'bg-neutral-900 text-neutral-400'
        }`}
      >
        <div className="max-w-[95%] w-full mx-auto footer-inner">
          
          {/* Merged Consultation Area */}
          <div className="rounded-3xl shadow-xl p-6 sm:p-8 lg:p-10 mb-12 relative overflow-hidden bg-[#007BC7] text-white">
            {/* Subtle light overlay */}
            <div className="absolute right-0 top-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -mr-32 -mt-32 pointer-events-none"></div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch relative z-10">
              
              {/* Left Column (Brand Value, Title, Text, Logo, Hotline) - lg:col-span-6 (~50%) to ensure hotline and logo remain in one line without wrapping */}
              <div className="lg:col-span-6 flex flex-col justify-between text-left h-full">
                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-2 px-3 py-1 rounded-full border w-fit text-xs font-semibold tracking-wider bg-white/15 text-white border-white/10">
                    洛可可官方品质保障 · 一对一专家咨询
                  </div>

                  <h2 className="text-2xl sm:text-3xl font-extrabold leading-snug tracking-tight text-left text-white font-display">
                    让设计助力你的品类突围
                  </h2>

                  <p className="text-xs sm:text-sm leading-relaxed text-left text-white/80">
                    洛可可是一家用咨询设计的能力，为垂直行业客户，提供产品创新价值的公司。我们坚持以用户体验为核心，致力于为企业提供行业整体创新解决方案。如需创新设计咨询，请联系专家团队。
                  </p>
                </div>

                {/* Footer Logo and Hotline info - strictly single-line horizontal alignment */}
                <div className="flex flex-row items-center gap-4 sm:gap-6 pt-4 border-t mt-5 border-white/15">
                  <LKKLogo isLight={true} className="shrink-0" imgClassName="h-9 sm:h-10" />
                  <div className="h-8 w-px bg-white/20 shrink-0"></div>
                  <div className="text-left whitespace-nowrap min-w-0">
                    <p className="text-[10px] uppercase tracking-widest font-mono text-white/70">Consultation Hotline</p>
                    <p className="text-xl sm:text-2xl font-black tracking-tight mt-0.5 font-display text-white whitespace-nowrap">400-062-3130</p>
                  </div>
                </div>
              </div>

              {/* Right Column (Conversion Area: Form + WeChat Entry) - lg:col-span-6 (~50%) */}
              <div className="lg:col-span-6 w-full flex flex-col justify-between">
                {footerFormSuccess ? (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="border rounded-2xl p-8 bg-white/10 border-white/20 text-white h-full min-h-[250px] flex flex-col justify-center text-left"
                  >
                    <div className="flex items-center gap-3">
                      <Check className="w-6 h-6 shrink-0 rounded-full p-1 bg-white text-[#007BC7]" />
                      <span className="font-bold text-base text-white">预约提交成功！</span>
                    </div>
                    <p className="text-sm mt-3 leading-relaxed text-left text-white/85">
                      洛可可品类专家将在 1 小时内给您致电，为您提供免费的商业创新评估。
                    </p>
                  </motion.div>
                ) : (
                  <div className="flex flex-col justify-between h-full gap-2.5">
                    
                    {/* Information Input Area + Right Side Action Button */}
                    <form onSubmit={handleFooterSubmit} className="flex flex-col sm:flex-row gap-2.5 items-stretch w-full">
                      {/* 2x2 Inputs Grid */}
                      <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        <input 
                          type="text" 
                          required
                          placeholder="姓名" 
                          aria-label="您的姓名"
                          value={footerForm.name}
                          onChange={(e) => setFooterForm({ ...footerForm, name: e.target.value })}
                          className="w-full bg-white/15 border border-white/10 rounded-xl px-4 py-2 text-sm text-white placeholder-white/60 outline-none focus:border-white focus:ring-1 focus:ring-white transition-all"
                        />
                        <input 
                          type="tel" 
                          required
                          placeholder="电话" 
                          aria-label="您的电话"
                          value={footerForm.phone}
                          onChange={(e) => setFooterForm({ ...footerForm, phone: e.target.value })}
                          className="w-full bg-white/15 border border-white/10 rounded-xl px-4 py-2 text-sm text-white placeholder-white/60 outline-none focus:border-white focus:ring-1 focus:ring-white transition-all"
                        />
                        <input 
                          type="text" 
                          required
                          placeholder="企业名称" 
                          aria-label="企业名称"
                          value={footerForm.company}
                          onChange={(e) => setFooterForm({ ...footerForm, company: e.target.value })}
                          className="w-full bg-white/15 border border-white/10 rounded-xl px-4 py-2 text-sm text-white placeholder-white/60 outline-none focus:border-white focus:ring-1 focus:ring-white transition-all"
                        />
                        <input 
                          type="text" 
                          required
                          placeholder="所在城市" 
                          aria-label="所在城市"
                          value={footerForm.city}
                          onChange={(e) => setFooterForm({ ...footerForm, city: e.target.value })}
                          className="w-full bg-white/15 border border-white/10 rounded-xl px-4 py-2 text-sm text-white placeholder-white/60 outline-none focus:border-white focus:ring-1 focus:ring-white transition-all"
                        />
                      </div>

                      {/* Side-aligned Compact Vertical Consultation Button */}
                      <button 
                        type="submit"
                        className="w-full sm:w-[68px] md:w-[74px] shrink-0 py-3 sm:py-0 bg-white hover:bg-neutral-100 active:scale-[0.98] text-[#007BC7] rounded-2xl transition-all shadow-md hover:shadow-lg flex items-center justify-center cursor-pointer group"
                      >
                        {/* Mobile horizontal text */}
                        <div className="sm:hidden flex items-center justify-center gap-1.5 font-extrabold text-sm">
                          <span>咨询我们</span>
                          <ArrowRight className="w-4 h-4 text-[#007BC7]" />
                        </div>

                        {/* Desktop stacked vertical text */}
                        <div className="hidden sm:flex flex-col items-center justify-center gap-0.5 text-[#007BC7]">
                          <span className="text-[13px] md:text-sm font-black leading-tight tracking-wider">咨询</span>
                          <span className="text-[13px] md:text-sm font-black leading-tight tracking-wider">我们</span>
                          <ArrowRight className="w-3.5 h-3.5 text-[#007BC7] mt-1 transition-transform duration-200 group-hover:translate-y-0.5" />
                        </div>
                      </button>
                    </form>

                    {/* WeChat QR Code Consultation Area (Frameless integration, bottom-aligned with left logo container, enlarged towards top-right) */}
                    <div className="flex flex-col sm:flex-row items-center sm:items-stretch gap-4 sm:gap-5 text-left pt-0">
                      {/* Scaled QR Code Container with 1:1 ratio, enlarged to fill height up to the top spacing */}
                      <div className="w-[130px] h-[130px] sm:w-[145px] sm:h-[145px] md:w-[154px] md:h-[154px] min-w-[130px] sm:min-w-[145px] md:min-w-[154px] bg-white rounded-2xl p-2 sm:p-2.5 flex items-center justify-center shrink-0 shadow-md overflow-hidden self-center sm:self-auto aspect-square">
                        <img 
                          src="https://github.com/minaxyue-ops/MINA/releases/download/1/3.png" 
                          alt="洛可可官方企业微信二维码" 
                          loading="lazy"
                          className="w-full h-full object-contain"
                        />
                      </div>

                      {/* WeChat text details with 3-tier hierarchy */}
                      <div className="flex flex-col justify-between min-w-0 flex-1 py-0.5">
                        <div>
                          {/* Tier 1: English Category Tag */}
                          <span className="text-[10px] sm:text-[11px] font-mono tracking-widest text-white/70 uppercase block font-semibold">
                            WECHAT CONSULTATION
                          </span>
                          
                          {/* Tier 2: Core Headline */}
                          <h4 className="font-bold text-sm sm:text-base text-white mt-0.5 tracking-tight">
                            添加洛可可官方企业微信
                          </h4>
                        </div>
                        
                        {/* Tier 3: Explanatory & Brand Value Text (breaks into rows nicely if needed) */}
                        <div className="mt-1.5 flex flex-col gap-1.5 text-[11px] sm:text-xs text-white/80 leading-relaxed">
                          <p>
                            微信扫码添加，掌握行业爆品打造逻辑、最前沿设计趋势及精选案例拆解。
                          </p>
                          <p className="text-white/70 pt-1.5 border-t border-white/10 text-[10px] sm:text-[11px]">
                            作为国家级工业设计示范企业，洛可可坚持探索数字化设计与品类定位的高效整合，驱动中国制造迈向中国创造。
                          </p>
                        </div>
                      </div>
                    </div>

                  </div>
                )}
              </div>

            </div>
          </div>

          {/* Directory links */}
          <div className="mb-12">
            {/* Nav Links: 5-Column layout with Brand Innovation stacked under Product Innovation */}
            <div className="w-full grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-8 lg:gap-8 xl:gap-12">
              
              {/* 1. 品类创新咨询 (Category Innovation Consulting - excluding 三品合一) */}
              <div className="text-left">
                <h5 className={`font-bold text-xs uppercase tracking-wider mb-3.5 border-l-2 border-[#007BC7] pl-2 transition-colors duration-300 ${isFooterLight ? 'text-neutral-800' : 'text-white'}`}>
                  品类创新咨询
                </h5>
                <ul className="grid gap-1.5 text-xs">
                  <li><button onClick={() => { setCurrentPage('category'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className={`text-left border-none bg-transparent p-0 cursor-pointer transition-colors duration-300 ${isFooterLight ? 'text-neutral-500 hover:text-[#007BC7]' : 'text-neutral-400 hover:text-white'}`}>品类创新集合页</button></li>
                  <li><button onClick={() => { setCurrentPage('category-v2'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className={`text-left border-none bg-transparent p-0 cursor-pointer transition-colors duration-300 ${isFooterLight ? 'text-neutral-500 hover:text-[#007BC7]' : 'text-neutral-400 hover:text-white'}`}>品类创新咨询二</button></li>
                  <li><button onClick={() => { setCurrentPage('product-innovation-consulting'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className={`text-left border-none bg-transparent p-0 cursor-pointer transition-colors duration-300 ${isFooterLight ? 'text-neutral-500 hover:text-[#007BC7]' : 'text-neutral-400 hover:text-white'}`}>产品创新全案咨询</button></li>
                  <li><button onClick={() => { setCurrentPage('brand-innovation-consulting'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className={`text-left border-none bg-transparent p-0 cursor-pointer transition-colors duration-300 ${isFooterLight ? 'text-neutral-500 hover:text-[#007BC7]' : 'text-neutral-400 hover:text-white'}`}>品牌创新全案咨询</button></li>
                </ul>
              </div>

              {/* 2. 产品创新 & 品牌创新 (Product Innovation + Brand Innovation stacked) */}
              <div className="text-left">
                <div>
                  <h5 className={`font-bold text-xs uppercase tracking-wider mb-3.5 border-l-2 border-[#007BC7] pl-2 transition-colors duration-300 ${isFooterLight ? 'text-neutral-800' : 'text-white'}`}>
                    产品创新
                  </h5>
                  <ul className="grid gap-1.5 text-xs">
                    <li><button onClick={() => handleNavigateUrl('/product-innovation/industrial-design')} className={`text-left border-none bg-transparent p-0 cursor-pointer transition-colors duration-300 ${isFooterLight ? 'text-neutral-500 hover:text-[#007BC7]' : 'text-neutral-400 hover:text-white'}`}>工业设计</button></li>
                    <li><button onClick={() => handleNavigateUrl('/product-innovation/structural-design')} className={`text-left border-none bg-transparent p-0 cursor-pointer transition-colors duration-300 ${isFooterLight ? 'text-neutral-500 hover:text-[#007BC7]' : 'text-neutral-400 hover:text-white'}`}>结构设计</button></li>
                    <li><button onClick={() => handleNavigateUrl('/product-innovation/production-landing')} className={`text-left border-none bg-transparent p-0 cursor-pointer transition-colors duration-300 ${isFooterLight ? 'text-neutral-500 hover:text-[#007BC7]' : 'text-neutral-400 hover:text-white'}`}>生产落地</button></li>
                  </ul>
                </div>

                <div className="mt-5">
                  <h5 className={`font-bold text-xs uppercase tracking-wider mb-3.5 border-l-2 border-[#007BC7] pl-2 transition-colors duration-300 ${isFooterLight ? 'text-neutral-800' : 'text-white'}`}>
                    品牌创新
                  </h5>
                  <ul className="grid gap-1.5 text-xs">
                    <li><button onClick={() => handleNavigateUrl('/brand-innovation/full-case-design')} className={`text-left border-none bg-transparent p-0 cursor-pointer transition-colors duration-300 ${isFooterLight ? 'text-neutral-500 hover:text-[#007BC7]' : 'text-neutral-400 hover:text-white'}`}>品牌全案设计</button></li>
                    <li><button onClick={() => handleNavigateUrl('/brand-innovation/packaging-design')} className={`text-left border-none bg-transparent p-0 cursor-pointer transition-colors duration-300 ${isFooterLight ? 'text-neutral-500 hover:text-[#007BC7]' : 'text-neutral-400 hover:text-white'}`}>包装设计</button></li>
                    <li><button onClick={() => handleNavigateUrl('/brand-innovation/ip-design')} className={`text-left border-none bg-transparent p-0 cursor-pointer transition-colors duration-300 ${isFooterLight ? 'text-neutral-500 hover:text-[#007BC7]' : 'text-neutral-400 hover:text-white'}`}>IP设计</button></li>
                  </ul>
                </div>
              </div>

              {/* 3. 科技类 (Tech Industries) */}
              <div className="text-left">
                <h5 className={`font-bold text-xs uppercase tracking-wider mb-3.5 border-l-2 border-[#007BC7] pl-2 transition-colors duration-300 ${isFooterLight ? 'text-neutral-800' : 'text-white'}`}>
                  科技类
                </h5>
                <ul className="grid gap-1.5 text-xs">
                  <li><button onClick={() => handleNavigateUrl('/industry/robotics')} className={`text-left border-none bg-transparent p-0 cursor-pointer transition-colors duration-300 ${isFooterLight ? 'text-neutral-500 hover:text-[#007BC7]' : 'text-neutral-400 hover:text-white'}`}>机器人</button></li>
                  <li><button onClick={() => handleNavigateUrl('/industry/smart-3c')} className={`text-left border-none bg-transparent p-0 cursor-pointer transition-colors duration-300 ${isFooterLight ? 'text-neutral-500 hover:text-[#007BC7]' : 'text-neutral-400 hover:text-white'}`}>智能3C</button></li>
                  <li><button onClick={() => handleNavigateUrl('/industry/home-appliances')} className={`text-left border-none bg-transparent p-0 cursor-pointer transition-colors duration-300 ${isFooterLight ? 'text-neutral-500 hover:text-[#007BC7]' : 'text-neutral-400 hover:text-white'}`}>智能家电</button></li>
                  <li><button onClick={() => handleNavigateUrl('/industry/healthcare')} className={`text-left border-none bg-transparent p-0 cursor-pointer transition-colors duration-300 ${isFooterLight ? 'text-neutral-500 hover:text-[#007BC7]' : 'text-neutral-400 hover:text-white'}`}>智能医疗</button></li>
                  <li><button onClick={() => handleNavigateUrl('/industry/industrial-equipment')} className={`text-left border-none bg-transparent p-0 cursor-pointer transition-colors duration-300 ${isFooterLight ? 'text-neutral-500 hover:text-[#007BC7]' : 'text-neutral-400 hover:text-white'}`}>智能装备</button></li>
                  <li><button onClick={() => handleNavigateUrl('/industry/new-energy')} className={`text-left border-none bg-transparent p-0 cursor-pointer transition-colors duration-300 ${isFooterLight ? 'text-neutral-500 hover:text-[#007BC7]' : 'text-neutral-400 hover:text-white'}`}>智能能源</button></li>
                  <li><button onClick={() => handleNavigateUrl('/industry/transportation')} className={`text-left border-none bg-transparent p-0 cursor-pointer transition-colors duration-300 ${isFooterLight ? 'text-neutral-500 hover:text-[#007BC7]' : 'text-neutral-400 hover:text-white'}`}>智能交通</button></li>
                </ul>
              </div>

              {/* 4. 消费类 (Consumer Industries) */}
              <div className="text-left">
                <h5 className={`font-bold text-xs uppercase tracking-wider mb-3.5 border-l-2 border-[#007BC7] pl-2 transition-colors duration-300 ${isFooterLight ? 'text-neutral-800' : 'text-white'}`}>
                  消费类
                </h5>
                <ul className="grid gap-1.5 text-xs">
                  <li><button onClick={() => handleNavigateUrl('/industry/food-beverage')} className={`text-left border-none bg-transparent p-0 cursor-pointer transition-colors duration-300 ${isFooterLight ? 'text-neutral-500 hover:text-[#007BC7]' : 'text-neutral-400 hover:text-white'}`}>食品酒饮</button></li>
                  <li><button onClick={() => handleNavigateUrl('/industry/pet-economy')} className={`text-left border-none bg-transparent p-0 cursor-pointer transition-colors duration-300 ${isFooterLight ? 'text-neutral-500 hover:text-[#007BC7]' : 'text-neutral-400 hover:text-white'}`}>宠物经济</button></li>
                  <li><button onClick={() => handleNavigateUrl('/industry/cultural-creative')} className={`text-left border-none bg-transparent p-0 cursor-pointer transition-colors duration-300 ${isFooterLight ? 'text-neutral-500 hover:text-[#007BC7]' : 'text-neutral-400 hover:text-white'}`}>文化创意</button></li>
                  <li><button onClick={() => handleNavigateUrl('/industry/home-apparel')} className={`text-left border-none bg-transparent p-0 cursor-pointer transition-colors duration-300 ${isFooterLight ? 'text-neutral-500 hover:text-[#007BC7]' : 'text-neutral-400 hover:text-white'}`}>家居鞋服</button></li>
                  <li><button onClick={() => handleNavigateUrl('/industry/wellness-health')} className={`text-left border-none bg-transparent p-0 cursor-pointer transition-colors duration-300 ${isFooterLight ? 'text-neutral-500 hover:text-[#007BC7]' : 'text-neutral-400 hover:text-white'}`}>大健康</button></li>
                  <li><button onClick={() => handleNavigateUrl('/industry/retail')} className={`text-left border-none bg-transparent p-0 cursor-pointer transition-colors duration-300 ${isFooterLight ? 'text-neutral-500 hover:text-[#007BC7]' : 'text-neutral-400 hover:text-white'}`}>连锁零售</button></li>
                  <li><button onClick={() => handleNavigateUrl('/industry/beauty-personal-care')} className={`text-left border-none bg-transparent p-0 cursor-pointer transition-colors duration-300 ${isFooterLight ? 'text-neutral-500 hover:text-[#007BC7]' : 'text-neutral-400 hover:text-white'}`}>美妆个护</button></li>
                </ul>
              </div>

              {/* 5. 我们 (About Us) */}
              <div className="text-left">
                <h5 className={`font-bold text-xs uppercase tracking-wider mb-3.5 border-l-2 border-[#007BC7] pl-2 transition-colors duration-300 ${isFooterLight ? 'text-neutral-800' : 'text-white'}`}>
                  我们
                </h5>
                <ul className="grid gap-1.5 text-xs">
                  <li><button onClick={() => { handleNavigateUrl('/about'); }} className={`cursor-pointer border-none bg-transparent p-0 text-left transition-colors duration-300 ${isFooterLight ? 'text-neutral-500 hover:text-[#007BC7]' : 'text-neutral-400 hover:text-white'}`}>关于我们</button></li>
                  <li><button onClick={() => { handleNavigateUrl('/news'); }} className={`cursor-pointer border-none bg-transparent p-0 text-left transition-colors duration-300 ${isFooterLight ? 'text-neutral-500 hover:text-[#007BC7]' : 'text-neutral-400 hover:text-white'}`}>新闻中心</button></li>
                  <li><button onClick={() => { handleNavigateUrl('/success-path'); }} className={`cursor-pointer border-none bg-transparent p-0 text-left transition-colors duration-300 ${isFooterLight ? 'text-neutral-500 hover:text-[#007BC7]' : 'text-neutral-400 hover:text-white'}`}>成功路径</button></li>
                  <li><button onClick={() => setIsContactModalOpen(true)} className={`cursor-pointer border-none bg-transparent p-0 text-left focus:outline-none transition-colors duration-300 ${isFooterLight ? 'text-neutral-500 hover:text-[#007BC7]' : 'text-neutral-400 hover:text-white'}`}>联系我们</button></li>
                </ul>
              </div>

            </div>
          </div>

          {/* Legal bottom row */}
          <div className={`border-t pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-neutral-500 transition-colors duration-300 ${isFooterLight ? 'border-neutral-200' : 'border-neutral-800'}`}>
            <div>
              <p>Copyright © 北京洛可可科技有限公司 All Rights Reserved.</p>
            </div>
            
            <div className="flex items-center gap-4 flex-wrap justify-center">
              <span className={`cursor-pointer transition-colors duration-300 ${isFooterLight ? 'hover:text-neutral-700' : 'hover:text-neutral-400'}`}>京ICP备13015144号</span>
              <span className={`cursor-pointer transition-colors duration-300 ${isFooterLight ? 'hover:text-neutral-700' : 'hover:text-neutral-400'}`}>京公网安备11010502042139</span>
            </div>

            {/* Social SVGs */}
            <div className="flex items-center gap-3">
              {/* Douyin */}
              <div 
                className={`w-8 h-8 rounded-full flex items-center justify-center transition-all cursor-pointer ${
                  isFooterLight 
                    ? 'bg-neutral-200 hover:bg-neutral-300 text-neutral-600 hover:text-neutral-900' 
                    : 'bg-neutral-800 hover:bg-neutral-950 text-neutral-400 hover:text-white'
                }`} 
                title="抖音"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                  <path d="M12.53.02C13.84 0 15.14.01 16.44 0c.08 1.53.63 3.01 1.62 4.2 1.01.85 2.29 1.32 3.61 1.4v3.52c-1.18-.02-2.34-.35-3.37-1-.38-.24-.73-.52-1.04-.85v6.52c.06 1.8-.52 3.58-1.64 4.96-1.54 2-4.14 2.92-6.57 2.3-2.48-.52-4.41-2.54-4.85-5.04-.6-3.04 1.15-6.13 4.14-6.94.75-.22 1.54-.29 2.32-.2v3.63c-.4-.08-.82-.08-1.22-.02-1.34.22-2.39 1.34-2.47 2.7-.13 1.56 1.04 2.96 2.6 3.09 1.64.2 3.19-.85 3.42-2.49.07-.32.08-.66.08-.99V0l.4-.02z"/>
                </svg>
              </div>

              {/* Weibo */}
              <div 
                className={`w-8 h-8 rounded-full flex items-center justify-center transition-all cursor-pointer ${
                  isFooterLight 
                    ? 'bg-neutral-200 hover:bg-rose-100 hover:text-rose-600 text-neutral-600' 
                    : 'bg-neutral-800 hover:bg-rose-600 text-neutral-400 hover:text-white'
                }`} 
                title="微博"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                  <path d="M9.73 14.77c-2.47.16-4.57-.75-4.68-2.03-.12-1.28 1.8-2.43 4.27-2.58 2.47-.16 4.58.74 4.69 2.03.11 1.28-1.81 2.42-4.28 2.58zm6.54-7.23c-.45-.48-1.11-.74-1.74-.69-.21.02-.37.2-.35.41.02.21.2.37.41.35.39-.03.79.13 1.07.42.27.29.37.7.27 1.08-.05.19.06.39.25.44.2.05.41-.06.46-.25.17-.61.02-1.28-.41-1.76zm2.46-2.55c-.94-1.04-2.38-1.61-3.78-1.51-.21.01-.37.2-.35.41.02.21.2.37.41.35 1.13-.08 2.3.38 3.06 1.22.76.84 1.07 1.99.85 3.1-.04.2.09.4.29.44.21.04.41-.09.45-.29.28-1.4-.11-2.88-1.08-3.93zM21.27 12.4c-.05-.88-.51-1.68-1.24-2.18-.72-.49-1.61-.63-2.43-.37-1.42-1.22-3.38-1.92-5.45-1.92-5.07 0-9.15 3.32-9.15 7.42 0 4.1 4.08 7.41 9.15 7.41s9.15-3.31 9.15-7.41c0-.44-.05-.88-.13-1.31.54-.42.87-.99.9-1.64zm-11.54 5c-3.74.24-6.91-1.14-7.07-3.08-.16-1.94 2.74-3.71 6.48-3.95 3.74-.24 6.91 1.14 7.07 3.08.16 1.94-2.74 3.71-6.48 3.95zm7.39-4.88c-.1-.13-.29-.16-.42-.06l-.08.06c-.13.1-.16.29-.06.42.06.08.15.11.24.11.06 0 .13-.02.18-.06.13-.1.16-.29.06-.42z"/>
                </svg>
              </div>

              {/* WeChat with hover popup */}
              <div className="relative group/social cursor-pointer">
                <div 
                  className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${
                    isFooterLight 
                      ? 'bg-neutral-200 hover:bg-emerald-50 hover:text-emerald-600 text-neutral-600' 
                      : 'bg-neutral-800 hover:bg-emerald-600 text-neutral-400 hover:text-white'
                  }`}
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                    <path d="M8.53 2.1c-4.43 0-8.02 3.14-8.02 7.01 0 2.18 1.14 4.13 2.92 5.41l-.76 2.27c-.07.21.14.39.32.28l2.67-1.51c.91.31 1.89.47 2.87.47.45 0 .9-.04 1.34-.11-.32-.82-.49-1.7-.49-2.61 0-3.9 3.51-7.07 7.82-7.07.45 0 .9.04 1.34.11C25.4 4.3 20.31 2.1 15.03 2.1H8.53zm9.18 7.07c-3.77 0-6.82 2.71-6.82 6.06 0 1.88.97 3.56 2.49 4.67l-.65 1.94c-.06.18.12.33.27.24l2.27-1.29c.77.27 1.61.41 2.44.41 3.77 0 6.82-2.71 6.82-6.06.01-3.36-3.04-6.07-6.82-6.07zM5.38 6.55c.57 0 1.03.46 1.03 1.03s-.46 1.03-1.03 1.03-1.03-.46-1.03-1.03.46-1.03 1.03-1.03zm6.3 0c.57 0 1.03.46 1.03 1.03s-.46 1.03-1.03 1.03-1.03-.46-1.03-1.03.46-1.03 1.03-1.03zm3.72 10.14c.48 0 .87.39.87.87s-.39.87-.87.87-.87-.39-.87-.87.39-.87.87-.87zm5.24 0c.48 0 .87.39.87.87s-.39.87-.87.87-.87-.39-.87-.87.39-.87.87-.87z"/>
                  </svg>
                </div>
                {/* WeChat QR Popup tooltip */}
                <div className={`absolute bottom-full mb-2 left-1/2 -translate-x-1/2 scale-0 group-hover/social:scale-100 transition-all duration-200 origin-bottom p-2 rounded-lg border shadow-2xl z-20 w-28 ${
                  isFooterLight ? 'bg-white border-neutral-200' : 'bg-neutral-850 border-neutral-700'
                }`}>
                  <div className="w-24 h-24 bg-white rounded-lg p-1 flex items-center justify-center overflow-hidden">
                    <img 
                      src="https://github.com/minaxyue-ops/MINA/releases/download/1/3.png" 
                      alt="洛可可官方企业微信" 
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <p className={`text-[8px] text-center mt-1.5 transition-colors duration-300 ${isFooterLight ? 'text-neutral-500 font-medium' : 'text-neutral-400'}`}>洛可可官方企业微信</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </footer>

      {/* 9. CONTACT POPUP MODAL */}
      <AnimatePresence>
        {isContactModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Overlay */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsContactModalOpen(false)}
              className="absolute inset-0 bg-neutral-950/65 backdrop-blur-sm"
            />

            {/* Card Content */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 15 }}
              className="relative bg-white w-full max-w-xl rounded-3xl overflow-hidden shadow-2xl border border-neutral-100 z-10 p-6 md:p-8"
            >
              <button 
                onClick={() => setIsContactModalOpen(false)}
                className="absolute top-6 right-6 p-1.5 rounded-full hover:bg-neutral-150 text-neutral-400 hover:text-neutral-700 transition-all"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="mb-6">
                <div className="flex items-center gap-2 text-[#007BC7] text-xs font-bold uppercase tracking-wider font-mono">
                  Design & Consulting Proposal
                </div>
                <h3 className="text-2xl font-bold text-neutral-900 mt-1">洛可可创新咨询与设计预约</h3>
                <p className="text-xs text-neutral-500 mt-1 leading-relaxed">
                  提供包括品类定位、工业外观、机械堆叠结构设计、品牌包装设计、开模试产在内的一站式爆品孵化服务。
                </p>
              </div>

              {modalFormSuccess ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-12 text-center flex flex-col items-center justify-center"
                >
                  <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mb-4">
                    <Check className="w-8 h-8 stroke-[3]" />
                  </div>
                  <h4 className="text-lg font-bold text-neutral-900">恭喜，创新方案需求提交成功！</h4>
                  <p className="text-xs text-neutral-500 mt-2 max-w-md mx-auto leading-relaxed">
                    我们已收到您的项目概况。负责该垂直行业的品类总监与资深主笔设计师将在下一个工作日前与您取得联系，并为您量身打造第一版“品类策略初稿”。
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleModalSubmit} className="grid gap-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="modal-name" className="block text-xs font-bold text-neutral-500 mb-1">您的姓名 *</label>
                      <input 
                        id="modal-name"
                        type="text" 
                        required
                        value={modalForm.name}
                        onChange={(e) => setModalForm({ ...modalForm, name: e.target.value })}
                        placeholder="例如：陈经理" 
                        className="w-full bg-neutral-50 border border-neutral-200 rounded-xl px-4 py-2.5 text-sm text-neutral-800 outline-none focus:border-[#007BC7]"
                      />
                    </div>
                    <div>
                      <label htmlFor="modal-phone" className="block text-xs font-bold text-neutral-500 mb-1">您的电话 *</label>
                      <input 
                        id="modal-phone"
                        type="tel" 
                        required
                        value={modalForm.phone}
                        onChange={(e) => setModalForm({ ...modalForm, phone: e.target.value })}
                        placeholder="您的联系电话" 
                        className="w-full bg-neutral-50 border border-neutral-200 rounded-xl px-4 py-2.5 text-sm text-neutral-800 outline-none focus:border-[#007BC7]"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="modal-industry" className="block text-xs font-bold text-neutral-500 mb-1">主营垂直行业赛道</label>
                    <select 
                      id="modal-industry"
                      value={modalForm.industry}
                      onChange={(e) => setModalForm({ ...modalForm, industry: e.target.value })}
                      className="w-full bg-neutral-50 border border-neutral-200 rounded-xl px-4 py-2.5 text-sm text-neutral-800 outline-none focus:border-[#007BC7]"
                    >
                      <option value="机器人">机器人 / 人形机器人 / 具身智能</option>
                      <option value="智能3C">智能3C / 消费电子 / 数码硬件</option>
                      <option value="智能家电">智能家电 / 智慧家居 / 厨电照明</option>
                      <option value="智能医疗">智能医疗 / 医疗器械 / 诊疗装备</option>
                      <option value="智能装备">智能装备 / 高端制造 / 机械设备</option>
                      <option value="智能能源">智能能源 / 储能设施 / 充电桩设备</option>
                      <option value="智能交通">智能交通 / 智能座舱 / 微出行载具</option>
                      <option value="食品酒饮">食品酒饮 / 新零售快消 / 滋补饮品</option>
                      <option value="宠物经济">宠物经济 / 宠物智能用品 / 精致养宠</option>
                      <option value="文化创意">文化创意 / 博物馆文创 / 潮玩IP</option>
                      <option value="家居鞋服">家居鞋服 / 智能穿戴 / 软装纺织</option>
                      <option value="大健康">大健康 / 养生滋补 / 健康管理</option>
                      <option value="连锁零售">连锁零售 / 商业空间 / 新零售SI</option>
                      <option value="美妆个护">美妆个护 / 个护家清 / 美妆容器</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="modal-desc" className="block text-xs font-bold text-neutral-500 mb-1">您的具体创新需求</label>
                    <textarea 
                      id="modal-desc"
                      rows={3}
                      value={modalForm.desc}
                      onChange={(e) => setModalForm({ ...modalForm, desc: e.target.value })}
                      placeholder="例如：我们想打造一款针对家庭端的情感陪伴机器人，需要产品0-1外观设计与结构开模评估。" 
                      className="w-full bg-neutral-50 border border-neutral-200 rounded-xl px-4 py-2.5 text-sm text-neutral-800 outline-none focus:border-[#007BC7] resize-none"
                    />
                  </div>

                  <div className="flex items-center gap-2 text-[10px] text-neutral-400 bg-neutral-50 px-3 py-2 rounded-lg mt-2 border border-neutral-100">
                    <ShieldCheck className="w-4 h-4 text-emerald-500 shrink-0" />
                    安全隐私保护：您提交的所有商业概况、技术机密、姓名及电话将受高标NDA保密条款保护。
                  </div>

                  <button 
                    type="submit"
                    className="w-full bg-[#1a1a1a] hover:bg-[#007BC7] text-white font-bold py-3 rounded-xl transition-all shadow-lg hover:shadow-xl mt-4 flex items-center justify-center gap-2 text-sm"
                  >
                    立即预约品类总监咨询
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* 10. CASE DETAIL POPUP MODAL */}
      <AnimatePresence>
        {selectedCase && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Overlay */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedCase(null)}
              className="absolute inset-0 bg-neutral-950/65 backdrop-blur-sm"
            />

            {/* Card Content */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 15 }}
              className="relative bg-white w-full max-w-2xl rounded-3xl overflow-hidden shadow-2xl border border-neutral-100 z-10 flex flex-col md:flex-row"
            >
              <button 
                onClick={() => setSelectedCase(null)}
                className="absolute top-4 right-4 p-1.5 rounded-full bg-white/80 backdrop-blur-md hover:bg-neutral-150 text-neutral-400 hover:text-neutral-700 transition-all z-20 shadow-sm"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Graphical illustration for Case */}
              <div className="w-full md:w-1/2 bg-neutral-50 flex items-center justify-center p-6 relative min-h-[240px] md:min-h-auto">
                {/* Background Grid Pattern */}
                <div className="absolute inset-0 opacity-[0.03] bg-radial from-neutral-950 to-transparent pointer-events-none"></div>

                {selectedCase.image ? (
                  <img 
                    src={selectedCase.image} 
                    alt={selectedCase.title}
                    referrerPolicy="no-referrer"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                ) : selectedCase.id.startsWith('case-v2-') ? (
                  getCaseV2LocalImage(selectedCase.id) ? (
                    <img 
                      src={getCaseV2LocalImage(selectedCase.id) || ''} 
                      alt={selectedCase.title}
                      referrerPolicy="no-referrer"
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  ) : (
                    <div 
                      style={{ backgroundColor: getCaseV2PlaceholderColor(selectedCase.id) }}
                      className="absolute inset-0 w-full h-full flex items-center justify-center p-4"
                    >
                      <span className="text-sm font-bold text-neutral-400 select-none">
                        {getCaseV2Data(selectedCase).brand}（待替换）
                      </span>
                    </div>
                  )
                ) : ['xiaoxiandun', 'estun', 'haidilao', 'sizherui', 'hit', 'yuexianhuo'].includes(selectedCase.logoType || '') ? (
                  getCaseLocalImage(selectedCase.logoType) ? (
                    <img 
                      src={getCaseLocalImage(selectedCase.logoType) || ''} 
                      alt={selectedCase.title}
                      referrerPolicy="no-referrer"
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  ) : (
                    <div 
                      style={{ backgroundColor: getCasePlaceholderColor(selectedCase.logoType) }}
                      className="absolute inset-0 w-full h-full flex items-center justify-center p-4"
                    >
                      <span className="text-sm font-bold text-neutral-400 select-none">
                        {getCaseShortTitle(selectedCase.id, selectedCase.title)}（待替换）
                      </span>
                    </div>
                  )
                ) : (
                  <div className="scale-125">
                    {selectedCase.logoType === 'pophie' && (
                      <div className="flex flex-col items-center">
                        <div className="flex gap-1">
                          <div className="w-6 h-6 rounded-full bg-amber-400 flex items-center justify-center font-bold text-white text-[9px]">P</div>
                          <div className="w-6 h-6 rounded-full bg-teal-400 flex items-center justify-center font-bold text-white text-[9px]">O</div>
                          <div className="w-6 h-6 rounded-full bg-rose-400 flex items-center justify-center font-bold text-white text-[9px]">P</div>
                        </div>
                        <span className="text-[8px] font-bold text-neutral-400 tracking-widest mt-2 uppercase">Companion AI</span>
                      </div>
                    )}
                    {selectedCase.logoType === 'jingkelong' && (
                      <div className="relative w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center">
                        <div className="w-4 h-4 bg-white rounded-sm mt-3 flex items-center justify-center"><span className="text-red-600 text-[8px] font-bold">京</span></div>
                      </div>
                    )}
                    {selectedCase.logoType === 'cotti' && (
                      <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center text-white font-black text-lg">@</div>
                    )}
                  </div>
                )}
              </div>

              {/* Details of Case study */}
              <div className="w-full md:w-1/2 p-6 md:p-8 text-left flex flex-col justify-between">
                <div>
                  <div className="bg-blue-50 text-[#007BC7] text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full w-fit">
                    品类爆品创新案例 · Class Case
                  </div>
                  
                  <h4 className="text-xl font-bold text-neutral-900 mt-3 leading-snug">
                    {selectedCase.title}
                  </h4>
                  
                  <p className="text-xs text-neutral-500 leading-relaxed mt-4">
                    {selectedCase.description}
                  </p>
                  
                  <div className="mt-6 space-y-2.5">
                    <div className="flex items-center gap-2 text-xs text-neutral-600">
                      <span className="font-bold text-neutral-700">所属行业：</span>
                      <span>{getCaseDetailInfo(selectedCase.id).industry}</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-neutral-600">
                      <span className="font-bold text-neutral-700">咨询服务：</span>
                      <span>{getCaseDetailInfo(selectedCase.id).consulting}</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-neutral-600">
                      <span className="font-bold text-neutral-700">设计服务：</span>
                      <span>{getCaseDetailInfo(selectedCase.id).design}</span>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-neutral-100 flex items-center gap-3 flex-wrap">
                  <button 
                    onClick={() => {
                      setSelectedCase(null);
                      setIsContactModalOpen(true);
                    }}
                    className="w-auto px-6 py-2.5 bg-[#007BC7] hover:bg-[#005F96] text-white font-bold rounded-xl text-xs md:text-sm transition-all whitespace-nowrap cursor-pointer shadow-xs"
                  >
                    即刻联系
                  </button>
                  <button 
                    onClick={() => {
                      setSelectedCase(null);
                      setCurrentPage('case-detail');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="w-auto px-6 py-2.5 bg-white hover:bg-[#E5F2FA] text-[#007BC7] border border-[#007BC7] font-bold rounded-xl text-xs md:text-sm transition-all whitespace-nowrap cursor-pointer"
                  >
                    查看案例详情
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
