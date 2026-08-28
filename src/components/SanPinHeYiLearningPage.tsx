import React, { useState, useEffect, useRef } from 'react';
import { 
  ArrowRight, 
  Compass, 
  Layers, 
  Target, 
  CheckCircle2, 
  BookOpen, 
  GraduationCap, 
  FileText, 
  Users, 
  Award, 
  Download, 
  Sparkles, 
  ChevronRight,
  ChevronLeft,
  Play,
  Pause,
  Check,
  Building2,
  TrendingUp,
  Presentation,
  Clock,
  MapPin,
  Eye,
  ShieldCheck,
  ExternalLink
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// Visual Assets
import bookSanpinheyiImg from '../assets/images/book_sanpinheyi_1787619969143.jpg';
import bookDesignPowerImg from '../assets/images/book_design_power_1787619983428.jpg';
import bookWhitepaperMockupImg from '../assets/images/book_whitepaper_mockup_1787619995065.jpg';
import workshopExecutiveImg from '../assets/images/workshop_executive_scene_1787620007630.jpg';
import workshopProductCampImg from '../assets/images/workshop_product_camp_1787620021720.jpg';
import caseXiaoxiandunImg from '../assets/images/case_xiaoxiandun_photo_1787620035912.jpg';
import caseSurgicalRobotImg from '../assets/images/case_surgical_robot_1787620051544.jpg';
import methodologyVisualImg from '../assets/images/methodology_visual_diagram_1787620064287.jpg';
import pillarStrategyImg from '../assets/images/pillar_strategy_diagram_1787620077990.jpg';
import pillarProductImg from '../assets/images/pillar_product_ux_1787620090549.jpg';
import pillarBrandImg from '../assets/images/pillar_brand_semiotics_1787620103763.jpg';
import pillarCmfImg from '../assets/images/pillar_cmf_engineering_1787620117012.jpg';

interface SanPinHeYiLearningPageProps {
  onOpenContactModal: () => void;
  onNavigateDetail?: (url: string) => void;
  CounterComponent?: React.FC<{ target: number }>;
}

const DefaultCounter: React.FC<{ target: number }> = ({ target }) => {
  return <span>{target}</span>;
};

export default function SanPinHeYiLearningPage({
  onOpenContactModal,
  onNavigateDetail,
  CounterComponent = DefaultCounter,
}: SanPinHeYiLearningPageProps) {
  const [downloadSuccess, setDownloadSuccess] = useState(false);
  const [downloadEmail, setDownloadEmail] = useState('');
  const [activeCourseTab, setActiveCourseTab] = useState<'all' | 'executive' | 'product' | 'semiotics' | 'custom'>('all');
  const [activeBookIndex, setActiveBookIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // 苹果风格并排卡片自适应尺寸与居中测量
  const carouselContainerRef = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState(1200);

  useEffect(() => {
    const updateWidth = () => {
      if (carouselContainerRef.current) {
        setContainerWidth(carouselContainerRef.current.offsetWidth);
      }
    };
    updateWidth();
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  }, []);

  const publications = [
    {
      id: 'sanpinheyi',
      title: '《三品合一》',
      author: '贾伟 著',
      publisher: '中信出版集团',
      tag: '品类创新经典 · 畅销专著',
      headline: '从红海竞争走向品类冠军，掌握增长底层逻辑。',
      description: '系统解构中国企业从制造代工走向自主品牌、从产品功能走向心智认同的三位一体方法体系。经由 500+ 爆品与千亿市场实战检验。',
      highlights: [
        '品类战略导航与蓝海赛道锚定',
        'MOT 关键时刻体验与自传播设计',
        '超级品牌符号与心智认同构建'
      ],
      image: bookSanpinheyiImg,
      actionText: '获取精编导读',
    },
    {
      id: 'design-power',
      title: '《设计的力量》',
      author: '贾伟 著',
      publisher: '电子工业出版社',
      tag: '工业设计与商业力量 · 高校推荐教材',
      headline: '温润人心的设计，重塑商业力量。',
      description: '记录中国工业设计二十年崛起与探索之路，阐释设计如何从美学工具跃迁为推动商业增长与产业创新的核心动力。',
      highlights: [
        '从功能满足到情感共鸣的人机温度',
        '东方美学在现代制造业中的新生转化',
        '世界级设计创新思维与爆品实践'
      ],
      image: bookDesignPowerImg,
      actionText: '获取精编导读',
    },
    {
      id: 'whitepaper',
      title: '《爆款设计的底层逻辑》',
      author: '洛可可创新研究院 编著',
      publisher: '内部实战工具集',
      tag: '实战推演工具表单 · 深度解构',
      headline: '500+ 现象级爆品打造工具与推演表单。',
      description: '深度解构小仙炖、悦鲜活、思哲睿、库迪咖啡等现象级爆品打造全流程，提供可复制、开箱即用的落地方法论表单。',
      highlights: [
        '爆品机会点评估与赛道筛选矩阵',
        '用户旅程与 MOT 峰值体验卡片',
        'CMF 趋势核检表与量产管控标准'
      ],
      image: bookWhitepaperMockupImg,
      actionText: '申领实战工具包',
    }
  ];

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setActiveBookIndex((prev) => (prev + 1) % publications.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, publications.length]);

  const handleDownloadSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!downloadEmail) return;
    setDownloadSuccess(true);
    setTimeout(() => {
      setDownloadSuccess(false);
      setDownloadEmail('');
    }, 4000);
  };

  return (
    <div className="w-full bg-[#F5F5F7] text-[#1D1D1F] font-sans antialiased selection:bg-[#0071E3] selection:text-white">
      
      {/* ================= 1. 首屏 HERO 区域 ================= */}
      <section id="learning-hero" className="py-16 md:py-24 text-center bg-[#FFFFFF] relative overflow-hidden border-b border-[#E5E5E5]">
        <div className="max-w-6xl mx-auto px-[5%] relative z-10 flex flex-col items-center">
          
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="h-[1.5px] w-8 bg-[#007BC7]"></span>
            <span className="text-[12px] tracking-[0.3em] font-bold text-[#007BC7] font-mono uppercase">
              METHODOLOGY & ACADEMY
            </span>
            <span className="h-[1.5px] w-8 bg-[#007BC7]"></span>
          </div>

          <motion.h1 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="hero-title text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight text-[#1A1A1A] leading-[1.15] font-display text-center"
          >
            <span className="block">研习创新方法论</span>
            <span className="block mt-1 sm:mt-2">
              掌握<span className="text-[#007BC7]">「品类冠军」</span>底层逻辑
            </span>
          </motion.h1>

          <p className="text-xs md:text-sm font-semibold tracking-[0.3em] text-[#8C8C8C] uppercase mt-4 font-mono">
            LKK Methodology & Innovation Academy
          </p>

          <p className="text-sm md:text-base text-[#4D4D4D] max-w-3xl mt-8 leading-[1.8] font-normal text-center text-balance">
            洛可可 22 年实战沉淀的品类创新科学，经由 500+ 爆品与千亿市场检验，系统面向企业与创新团队开放。
          </p>

          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-8 flex items-center justify-center gap-4 sm:gap-6"
          >
            <button 
              onClick={onOpenContactModal}
              className="bg-[#007BC7] hover:bg-[#005F96] text-white font-medium px-8 py-3 rounded-full text-sm sm:text-base transition-all shadow-md active:scale-95 cursor-pointer flex items-center gap-2"
            >
              <span>预约内训 / 工作坊</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <a 
              href="#workshops-courses"
              className="text-[#007BC7] hover:text-[#005F96] text-sm sm:text-base font-medium flex items-center gap-1 group transition-all"
            >
              <span>了解体系</span>
              <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </a>
          </motion.div>

          {/* 3D 架构全景预览 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="mt-12 sm:mt-14 w-full rounded-[24px] sm:rounded-[32px] overflow-hidden bg-[#F5F5F7] border border-black/5 shadow-[0_16px_48px_rgba(0,0,0,0.06)] group relative"
          >
            <img 
              src={methodologyVisualImg} 
              alt="三品合一方法论架构" 
              className="w-full aspect-[16/9] object-cover group-hover:scale-[1.01] transition-transform duration-700 ease-out"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent p-6 sm:p-8 flex items-end justify-between text-left text-white">
              <div>
                <span className="text-[10px] font-mono tracking-widest uppercase bg-white/20 backdrop-blur-md px-2 py-0.5 rounded-full text-white font-semibold">
                  ARCHITECTURE
                </span>
                <h2 className="text-lg sm:text-xl font-bold mt-1.5 tracking-tight">三品合一 · 创新闭环体系</h2>
                <p className="text-xs text-white/80 mt-0.5 font-light">品类战略 × 体验设计 × 心智符号 × CMF量产工程</p>
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* ================= 2. 核心规格数据 ================= */}
      <section className="py-12 md:py-16 bg-[#F5F5F7] border-b border-[#D2D2D7]/40">
        <div className="max-w-5xl mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 text-center">
            
            <div>
              <div className="text-[42px] sm:text-[54px] font-bold text-[#1D1D1F] tracking-tight leading-tight">
                <CounterComponent target={22} /><span className="text-2xl sm:text-3xl text-[#86868B] font-medium ml-0.5">年</span>
              </div>
              <div className="text-xs sm:text-sm text-[#86868B] mt-1.5 font-medium">行业经验积淀</div>
            </div>

            <div>
              <div className="text-[42px] sm:text-[54px] font-bold text-[#1D1D1F] tracking-tight leading-tight">
                <CounterComponent target={600} /><span className="text-2xl sm:text-3xl text-[#007BC7] font-medium ml-0.5">+</span>
              </div>
              <div className="text-xs sm:text-sm text-[#86868B] mt-1.5 font-medium">专业奖项认证</div>
            </div>

            <div>
              <div className="text-[42px] sm:text-[54px] font-bold text-[#1D1D1F] tracking-tight leading-tight">
                <CounterComponent target={1000} /><span className="text-2xl sm:text-3xl text-[#86868B] font-medium ml-0.5">+</span>
              </div>
              <div className="text-xs sm:text-sm text-[#86868B] mt-1.5 font-medium">行业头部客户认可</div>
            </div>

            <div>
              <div className="text-[42px] sm:text-[54px] font-bold text-[#1D1D1F] tracking-tight leading-tight">
                <CounterComponent target={10000} /><span className="text-2xl sm:text-3xl text-[#007BC7] font-medium ml-0.5">+</span>
              </div>
              <div className="text-xs sm:text-sm text-[#86868B] mt-1.5 font-medium">产品成功落地</div>
            </div>

          </div>
        </div>
      </section>

      {/* ================= SECTION 01: 研学项目与实战营 (参考图二 Apple 经典卡片设计) ================= */}
      <section id="workshops-courses" className="py-20 md:py-28 bg-[#FFFFFF] border-b border-[#D2D2D7]/40">
        <div className="max-w-[95%] w-full mx-auto">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16 gap-6">
            <div>
              <span className="text-xs font-semibold text-[#007BC7] uppercase tracking-widest font-mono block mb-2">
                01 / WORKSHOPS & PROGRAMS
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#1D1D1F] font-display">
                创新研学项目与实战营
              </h2>
              <p className="text-sm md:text-base text-[#86868B] mt-2.5 max-w-xl leading-relaxed">
                洛可可资深导师亲自带教，结合企业真实业务课题，建立方法论肌肉记忆。
              </p>
            </div>

            {/* 分类标签切换 (图二风格胶囊控制栏) */}
            <div className="inline-flex p-1.5 rounded-full bg-[#F5F5F7] border border-black/[0.04] shrink-0 self-start md:self-end shadow-2xs">
              {[
                { id: 'all', label: '全部研学项目' },
                { id: 'executive', label: '高管战略班' },
                { id: 'product', label: '爆品实战营' },
                { id: 'semiotics', label: '超级符号营' },
                { id: 'custom', label: '企业定制营' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveCourseTab(tab.id as any)}
                  className={`px-4 sm:px-5 py-2 text-xs sm:text-sm font-medium rounded-full transition-all cursor-pointer ${
                    activeCourseTab === tab.id
                      ? 'bg-[#FFFFFF] text-[#1D1D1F] shadow-sm font-semibold'
                      : 'text-[#86868B] hover:text-[#1D1D1F]'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* 课程卡片 2x2 网格 - 对应图二浅灰大圆角卡片结构 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            
            {/* 项目 1 */}
            {(activeCourseTab === 'all' || activeCourseTab === 'executive') && (
              <div 
                className="group bg-[#F5F5F7] rounded-[28px] sm:rounded-[32px] p-6 sm:p-8 flex flex-col justify-between border border-black/[0.04] transition-all duration-300 hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)] cursor-pointer"
                onClick={onOpenContactModal}
              >
                <div>
                  {/* 顶部圆角图片 (内嵌 20px 圆角，带左右浮动标签) */}
                  <div className="w-full relative aspect-[16/10] rounded-[20px] overflow-hidden bg-white mb-6 border border-black/5 shadow-2xs">
                    <img 
                      src={workshopExecutiveImg} 
                      alt="总裁战略班：品类顶层设计" 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-3.5 left-3.5 bg-white/90 backdrop-blur-md text-[11px] font-semibold text-[#1D1D1F] px-3.5 py-1 rounded-full border border-black/5 uppercase tracking-wider font-mono shadow-2xs">
                      01 / EXECUTIVE
                    </div>
                    <div className="absolute top-3.5 right-3.5 bg-black/60 backdrop-blur-md text-white text-[11px] font-medium px-3.5 py-1 rounded-full font-mono shadow-2xs">
                      2天1夜 · 线下沉浸
                    </div>
                  </div>

                  {/* 标签 & 标题 */}
                  <div className="text-xs font-semibold text-[#007BC7] font-mono mb-1.5">
                    创始人与核心高管
                  </div>
                  <h3 className="text-2xl sm:text-[26px] font-bold tracking-tight text-[#1D1D1F] group-hover:text-[#007BC7] transition-colors mb-2 font-display">
                    总裁战略班：品类顶层设计
                  </h3>
                  
                  {/* 短副标 (加粗) */}
                  <div className="text-sm font-semibold text-[#1D1D1F] leading-snug mb-2">
                    突破增长瓶颈，以「三品合一」重塑企业第二增长曲线。
                  </div>

                  {/* 描述文本 */}
                  <p className="text-xs sm:text-sm text-[#86868B] leading-relaxed mb-6">
                    面向企业创始人、董事长与核心决策层，深度解析品类定义、赛道锚定与千亿蓝海开辟，贾伟导师团队 1 对 1 私董问诊与顶层商业逻辑推演。
                  </p>

                  {/* 核心亮点 */}
                  <div className="space-y-2.5 mb-6 text-xs sm:text-sm text-[#1D1D1F]/90">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#007BC7] shrink-0" />
                      <span>核心商业逻辑与第二曲线研判</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#007BC7] shrink-0" />
                      <span>贾伟导师团队 1 对 1 私董问诊与顶层诊断</span>
                    </div>
                  </div>
                </div>

                {/* 底部信息与胶囊按钮 */}
                <div className="pt-2 flex items-center justify-between">
                  <span className="text-xs text-[#86868B] font-medium">限额 20 人 / 期</span>
                  <button 
                    onClick={(e) => { e.stopPropagation(); onOpenContactModal?.(); }}
                    className="bg-[#007BC7] hover:bg-[#005F96] text-white text-xs sm:text-sm font-medium px-5 py-2 rounded-full inline-flex items-center gap-1.5 shadow-xs transition-all active:scale-95 cursor-pointer"
                  >
                    <span>申请席位</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            )}

            {/* 项目 2 */}
            {(activeCourseTab === 'all' || activeCourseTab === 'product') && (
              <div 
                className="group bg-[#F5F5F7] rounded-[28px] sm:rounded-[32px] p-6 sm:p-8 flex flex-col justify-between border border-black/[0.04] transition-all duration-300 hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)] cursor-pointer"
                onClick={onOpenContactModal}
              >
                <div>
                  {/* 顶部圆角图片 */}
                  <div className="w-full relative aspect-[16/10] rounded-[20px] overflow-hidden bg-white mb-6 border border-black/5 shadow-2xs">
                    <img 
                      src={workshopProductCampImg} 
                      alt="爆品打造营：从洞察到量产" 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-3.5 left-3.5 bg-white/90 backdrop-blur-md text-[11px] font-semibold text-[#1D1D1F] px-3.5 py-1 rounded-full border border-black/5 uppercase tracking-wider font-mono shadow-2xs">
                      02 / PRODUCT
                    </div>
                    <div className="absolute top-3.5 right-3.5 bg-black/60 backdrop-blur-md text-white text-[11px] font-medium px-3.5 py-1 rounded-full font-mono shadow-2xs">
                      3天全流程 · 场景实战
                    </div>
                  </div>

                  {/* 标签 & 标题 */}
                  <div className="text-xs font-semibold text-[#007BC7] font-mono mb-1.5">
                    产研负责人与产品骨干
                  </div>
                  <h3 className="text-2xl sm:text-[26px] font-bold tracking-tight text-[#1D1D1F] group-hover:text-[#007BC7] transition-colors mb-2 font-display">
                    爆品打造营：从洞察到量产
                  </h3>
                  
                  {/* 短副标 (加粗) */}
                  <div className="text-sm font-semibold text-[#1D1D1F] leading-snug mb-2">
                    聚焦 MOT 关键时刻，打造现象级自传播标杆爆品。
                  </div>

                  {/* 描述文本 */}
                  <p className="text-xs sm:text-sm text-[#86868B] leading-relaxed mb-6">
                    面向产研负责人、产品总监与研发团队，系统拆解爆品定义模型、MOT 体验工具箱与量产工程标准，带真实业务课题全流程推演产出实操方案。
                  </p>

                  {/* 核心亮点 */}
                  <div className="space-y-2.5 mb-6 text-xs sm:text-sm text-[#1D1D1F]/90">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#007BC7] shrink-0" />
                      <span>真实痛点挖掘与爆品 PRD 输入标准</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#007BC7] shrink-0" />
                      <span>MOT 体验地图还原与完整爆品方案推演</span>
                    </div>
                  </div>
                </div>

                {/* 底部信息与胶囊按钮 */}
                <div className="pt-2 flex items-center justify-between">
                  <span className="text-xs text-[#86868B] font-medium">适合产研与研发团队</span>
                  <button 
                    onClick={(e) => { e.stopPropagation(); onOpenContactModal?.(); }}
                    className="bg-[#007BC7] hover:bg-[#005F96] text-white text-xs sm:text-sm font-medium px-5 py-2 rounded-full inline-flex items-center gap-1.5 shadow-xs transition-all active:scale-95 cursor-pointer"
                  >
                    <span>申请席位</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            )}

            {/* 项目 3 */}
            {(activeCourseTab === 'all' || activeCourseTab === 'semiotics') && (
              <div 
                className="group bg-[#F5F5F7] rounded-[28px] sm:rounded-[32px] p-6 sm:p-8 flex flex-col justify-between border border-black/[0.04] transition-all duration-300 hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)] cursor-pointer"
                onClick={onOpenContactModal}
              >
                <div>
                  {/* 顶部圆角图片 */}
                  <div className="w-full relative aspect-[16/10] rounded-[20px] overflow-hidden bg-white mb-6 border border-black/5 shadow-2xs">
                    <img 
                      src={pillarBrandImg} 
                      alt="超级符号实训营：品牌心智占领" 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-3.5 left-3.5 bg-white/90 backdrop-blur-md text-[11px] font-semibold text-[#1D1D1F] px-3.5 py-1 rounded-full border border-black/5 uppercase tracking-wider font-mono shadow-2xs">
                      03 / SEMIOTICS
                    </div>
                    <div className="absolute top-3.5 right-3.5 bg-black/60 backdrop-blur-md text-white text-[11px] font-medium px-3.5 py-1 rounded-full font-mono shadow-2xs">
                      2天实战 · 心智穿透
                    </div>
                  </div>

                  {/* 标签 & 标题 */}
                  <div className="text-xs font-semibold text-[#007BC7] font-mono mb-1.5">
                    品牌总监与市场团队
                  </div>
                  <h3 className="text-2xl sm:text-[26px] font-bold tracking-tight text-[#1D1D1F] group-hover:text-[#007BC7] transition-colors mb-2 font-display">
                    超级符号实训营：品牌心智占领
                  </h3>
                  
                  {/* 短副标 (加粗) */}
                  <div className="text-sm font-semibold text-[#1D1D1F] leading-snug mb-2">
                    视觉认知心理学与货架首秒穿透力实操。
                  </div>

                  {/* 描述文本 */}
                  <p className="text-xs sm:text-sm text-[#86868B] leading-relaxed mb-6">
                    面向品牌总监、主笔设计师与市场团队，系统研习超级品牌符号编码、视觉锤心智穿透与全触点体验规范，把品牌核心价值转化为高价值心智资产。
                  </p>

                  {/* 核心亮点 */}
                  <div className="space-y-2.5 mb-6 text-xs sm:text-sm text-[#1D1D1F]/90">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#007BC7] shrink-0" />
                      <span>超级符号编码与货架陈列穿透实操</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#007BC7] shrink-0" />
                      <span>全触点品牌体验规范与视觉资产沉淀</span>
                    </div>
                  </div>
                </div>

                {/* 底部信息与胶囊按钮 */}
                <div className="pt-2 flex items-center justify-between">
                  <span className="text-xs text-[#86868B] font-medium">限额 30 人 / 期</span>
                  <button 
                    onClick={(e) => { e.stopPropagation(); onOpenContactModal?.(); }}
                    className="bg-[#007BC7] hover:bg-[#005F96] text-white text-xs sm:text-sm font-medium px-5 py-2 rounded-full inline-flex items-center gap-1.5 shadow-xs transition-all active:scale-95 cursor-pointer"
                  >
                    <span>申请席位</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            )}

            {/* 项目 4 */}
            {(activeCourseTab === 'all' || activeCourseTab === 'custom') && (
              <div 
                className="group bg-[#F5F5F7] rounded-[28px] sm:rounded-[32px] p-6 sm:p-8 flex flex-col justify-between border border-black/[0.04] transition-all duration-300 hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)] cursor-pointer"
                onClick={onOpenContactModal}
              >
                <div>
                  {/* 顶部圆角图片 */}
                  <div className="w-full relative aspect-[16/10] rounded-[20px] overflow-hidden bg-white mb-6 border border-black/5 shadow-2xs">
                    <img 
                      src={methodologyVisualImg} 
                      alt="设计思维与组织创新：企业定制内训营" 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-3.5 left-3.5 bg-white/90 backdrop-blur-md text-[11px] font-semibold text-[#1D1D1F] px-3.5 py-1 rounded-full border border-black/5 uppercase tracking-wider font-mono shadow-2xs">
                      04 / CUSTOM ACADEMY
                    </div>
                    <div className="absolute top-3.5 right-3.5 bg-black/60 backdrop-blur-md text-white text-[11px] font-medium px-3.5 py-1 rounded-full font-mono shadow-2xs">
                      企业驻场 · 专属定制
                    </div>
                  </div>

                  {/* 标签 & 标题 */}
                  <div className="text-xs font-semibold text-[#007BC7] font-mono mb-1.5">
                    跨部门创新与业务骨干
                  </div>
                  <h3 className="text-2xl sm:text-[26px] font-bold tracking-tight text-[#1D1D1F] group-hover:text-[#007BC7] transition-colors mb-2 font-display">
                    设计思维与组织创新：企业定制内训营
                  </h3>
                  
                  {/* 短副标 (加粗) */}
                  <div className="text-sm font-semibold text-[#1D1D1F] leading-snug mb-2">
                    打破部门壁垒，将创新方法论转化为组织核心肌肉记忆。
                  </div>

                  {/* 描述文本 */}
                  <p className="text-xs sm:text-sm text-[#86868B] leading-relaxed mb-6">
                    洛可可创新研学专家团队深入企业驻场，结合企业真实战略课题与创新痛点，定制专属实战工作坊，赋能跨部门团队构建自驱动创新体系。
                  </p>

                  {/* 核心亮点 */}
                  <div className="space-y-2.5 mb-6 text-xs sm:text-sm text-[#1D1D1F]/90">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#007BC7] shrink-0" />
                      <span>结合企业真实战略业务命题现场解构实战</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#007BC7] shrink-0" />
                      <span>产出可落地的产品/业务创新行动方案与工具包</span>
                    </div>
                  </div>
                </div>

                {/* 底部信息与胶囊按钮 */}
                <div className="pt-2 flex items-center justify-between">
                  <span className="text-xs text-[#86868B] font-medium">支持企业驻场定制</span>
                  <button 
                    onClick={(e) => { e.stopPropagation(); onOpenContactModal?.(); }}
                    className="bg-[#007BC7] hover:bg-[#005F96] text-white text-xs sm:text-sm font-medium px-5 py-2 rounded-full inline-flex items-center gap-1.5 shadow-xs transition-all active:scale-95 cursor-pointer"
                  >
                    <span>定制方案</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            )}

          </div>
        </div>
      </section>

      {/* ================= SECTION 02: 权威专著研读 (Apple 并排露边横向画廊) ================= */}
      <section id="publications" className="py-20 md:py-28 bg-[#F5F5F7] border-b border-[#D2D2D7]/40 overflow-hidden">
        <div className="w-full mx-auto">
          
          <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16 px-6 sm:px-8">
            <span className="text-[11px] font-semibold text-[#007BC7] uppercase tracking-widest font-mono block mb-2">
              02 / PUBLICATIONS
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#1D1D1F] font-display">
              权威专著研读
            </h2>
            <p className="text-sm md:text-base text-[#86868B] mt-2.5 leading-relaxed">
              洛可可创始人贾伟及创新团队二十年方法论沉淀，被清华大学、长江商学院等收录推荐。
            </p>
          </div>

          {/* 苹果并排画廊容器 (Horizontal Side-by-Side Peeking Track) */}
          {(() => {
            const isMobile = containerWidth < 640;
            const isTablet = containerWidth >= 640 && containerWidth < 1024;
            // 保持原本卡片宽广舒展的经典比例（在桌面端可达 1120px，同时自然露出左右卡片边沿）
            const cardWidth = isMobile 
              ? Math.max(containerWidth * 0.88, 280) 
              : isTablet 
                ? containerWidth * 0.84 
                : Math.min(containerWidth * 0.82, 1120);
            const cardGap = isMobile ? 16 : 28;
            const trackTranslateX = (containerWidth - cardWidth) / 2 - activeBookIndex * (cardWidth + cardGap);

            return (
              <div 
                ref={carouselContainerRef} 
                className="w-full relative overflow-hidden py-2 select-none"
              >
                <motion.div 
                  className="flex items-stretch"
                  style={{ gap: `${cardGap}px` }}
                  animate={{ x: trackTranslateX }}
                  transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
                >
                  {publications.map((book, idx) => (
                    <div 
                      key={book.id} 
                      onClick={() => setActiveBookIndex(idx)}
                      style={{ width: `${cardWidth}px` }}
                      className="shrink-0 flex-none cursor-pointer"
                    >
                      <div className="bg-[#FFFFFF] rounded-[28px] sm:rounded-[36px] md:rounded-[40px] border border-black/5 shadow-[0_12px_44px_rgba(0,0,0,0.06)] min-h-[400px] sm:min-h-[420px] h-full flex flex-col md:flex-row items-center p-8 sm:p-12 md:p-14 gap-8 md:gap-12">
                        
                        {/* 左侧：文字排版 */}
                        <div className="w-full md:w-7/12 flex flex-col items-start text-left">
                          <div className="flex items-center gap-2 mb-3">
                            <span className="text-xs font-mono font-semibold text-[#0071E3] tracking-wide">
                              {book.tag}
                            </span>
                            <span className="text-[#D2D2D7]">·</span>
                            <span className="text-xs text-[#86868B]">
                              {book.publisher}
                            </span>
                          </div>

                          <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#1D1D1F] mb-1 font-display">
                            {book.title}
                            <span className="text-sm sm:text-base font-normal text-[#86868B] ml-2">
                              {book.author}
                            </span>
                          </h3>

                          {/* Apple 经典 Keynote 大字短语 */}
                          <div className="text-lg sm:text-xl md:text-2xl font-bold tracking-tight text-[#1D1D1F] leading-snug my-3 font-display">
                            {book.headline}
                          </div>

                          <p className="text-xs sm:text-sm text-[#86868B] leading-relaxed mb-6 max-w-xl">
                            {book.description}
                          </p>

                          {/* 要点清单（纯文字与图标，无多余内框） */}
                          <div className="space-y-2.5 mb-7 text-xs sm:text-sm text-[#1D1D1F]/80">
                            {book.highlights.map((item, i) => (
                              <div key={i} className="flex items-center gap-2.5">
                                <CheckCircle2 className="w-4 h-4 text-[#0071E3] shrink-0" />
                                <span>{item}</span>
                              </div>
                            ))}
                          </div>

                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              onOpenContactModal();
                            }}
                            className="bg-[#0071E3] hover:bg-[#0077ED] active:scale-95 text-white px-6 py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all shadow-xs cursor-pointer flex items-center gap-1.5"
                          >
                            <span>{book.actionText}</span>
                            <ChevronRight className="w-3.5 h-3.5" />
                          </button>
                        </div>

                        {/* 右侧：纯粹实体/PNG照片展示 */}
                        <div className="w-full md:w-5/12 flex items-center justify-center py-4">
                          <div className="relative flex items-center justify-center max-w-[280px] sm:max-w-[330px] md:max-w-[370px]">
                            <img 
                              src={book.image} 
                              alt={book.title}
                              className="w-full h-auto max-h-[380px] object-contain transition-transform duration-500 hover:scale-[1.03] select-none pointer-events-none drop-shadow-[0_12px_24px_rgba(0,0,0,0.1)]"
                              referrerPolicy="no-referrer"
                            />
                          </div>
                        </div>

                      </div>
                    </div>
                  ))}
                </motion.div>
              </div>
            );
          })()}

          {/* 苹果经典底部控制器：播放/暂停 + 胶囊指示条 */}
          <div className="mt-8 flex items-center justify-center gap-3">
            <button
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              aria-label={isAutoPlaying ? "暂停轮播" : "开始轮播"}
              className="w-8 h-8 rounded-full bg-[#E8E8ED] hover:bg-[#DCDCE0] flex items-center justify-center text-[#1D1D1F] transition-colors cursor-pointer"
            >
              {isAutoPlaying ? (
                <Pause className="w-3.5 h-3.5 fill-[#1D1D1F]" />
              ) : (
                <Play className="w-3.5 h-3.5 fill-[#1D1D1F] ml-0.5" />
              )}
            </button>

            <div className="bg-[#E8E8ED] px-3.5 py-2 rounded-full flex items-center gap-2 shadow-2xs">
              {publications.map((book, idx) => (
                <button
                  key={book.id}
                  onClick={() => setActiveBookIndex(idx)}
                  aria-label={`切换至 ${book.title}`}
                  className={`transition-all duration-300 rounded-full cursor-pointer ${
                    activeBookIndex === idx 
                      ? 'w-7 h-1.5 bg-[#1D1D1F]' 
                      : 'w-1.5 h-1.5 bg-[#86868B]/40 hover:bg-[#86868B]'
                  }`}
                />
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* ================= SECTION 03: 经典案例拆解 ================= */}
      <section id="methodology-cases" className="py-20 md:py-28 bg-[#FFFFFF] border-b border-[#D2D2D7]/40">
        <div className="max-w-[95%] w-full mx-auto">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16 gap-4">
            <div>
              <span className="text-xs font-semibold text-[#007BC7] uppercase tracking-widest font-mono block mb-2">
                03 / CASE STUDIES
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#1D1D1F] font-display">
                标杆爆品方法论深度拆解
              </h2>
            </div>
            <p className="text-sm md:text-base text-[#86868B] max-w-md leading-relaxed">
              以百亿级标杆项目为切片，透视「三品合一」在不同赛道中的实战落地与增长逻辑。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            
            {/* Case 1: 小仙炖 */}
            <div className="group bg-[#F5F5F7] rounded-[28px] sm:rounded-[36px] overflow-hidden border border-black/[0.04] hover:shadow-[0_20px_50px_rgba(0,0,0,0.06)] hover:-translate-y-1 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] flex flex-col justify-between">
              <div>
                <div className="relative aspect-[16/10] overflow-hidden bg-neutral-200">
                  <img 
                    src={caseXiaoxiandunImg} 
                    alt="小仙炖鲜炖燕窝" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md text-white text-[11px] font-medium px-3.5 py-1 rounded-full font-mono shadow-2xs">
                    食品快消 · 百亿创新
                  </div>
                </div>

                <div className="p-8 sm:p-10">
                  <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#1D1D1F] mb-3 font-display">
                    小仙炖：开创新一代滋补品类
                  </h3>
                  <p className="text-sm sm:text-base text-[#86868B] leading-relaxed mb-6">
                    洛可可协助小仙炖定义“鲜炖燕窝”独立品类，通过专利鲜炖瓶型、冷鲜交付系统与超级符号，实现百亿级爆发。
                  </p>

                  <div className="space-y-2.5 text-xs sm:text-sm text-[#1D1D1F]/80 pt-5 border-t border-black/[0.08]">
                    <div className="flex items-center gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#0071E3] shrink-0"></span>
                      <span>品类战略：切割传统干燕窝，确立鲜炖标准</span>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#0071E3] shrink-0"></span>
                      <span>体验创新：专属耐高温鲜炖瓶与人性化开盖</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-8 sm:p-10 pt-0 flex items-center justify-between border-t border-black/[0.08] mt-2">
                <span className="text-xs font-semibold text-[#0071E3] uppercase tracking-wider font-mono">
                  入选商学院经典案例
                </span>
                <button 
                  onClick={() => onNavigateDetail?.('/cases')}
                  className="text-xs sm:text-sm font-semibold text-[#0071E3] hover:underline flex items-center gap-1 cursor-pointer"
                >
                  <span>查看详情</span>
                  <span>›</span>
                </button>
              </div>
            </div>

            {/* Case 2: 思哲睿机器人 */}
            <div className="group bg-[#F5F5F7] rounded-[28px] sm:rounded-[36px] overflow-hidden border border-black/[0.04] hover:shadow-[0_20px_50px_rgba(0,0,0,0.06)] hover:-translate-y-1 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] flex flex-col justify-between">
              <div>
                <div className="relative aspect-[16/10] overflow-hidden bg-neutral-200">
                  <img 
                    src={caseSurgicalRobotImg} 
                    alt="思哲睿手术机器人" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md text-white text-[11px] font-medium px-3.5 py-1 rounded-full font-mono shadow-2xs">
                    医疗健康 · 智能装备
                  </div>
                </div>

                <div className="p-8 sm:p-10">
                  <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#1D1D1F] mb-3 font-display">
                    思哲睿机器人：高端系统人机突破
                  </h3>
                  <p className="text-sm sm:text-base text-[#86868B] leading-relaxed mb-6">
                    洛可可深度参与医生操作台、病患推车与机械臂设计，融合高精尖医疗人机工效与工程开模落地。
                  </p>

                  <div className="space-y-2.5 text-xs sm:text-sm text-[#1D1D1F]/80 pt-5 border-t border-black/[0.08]">
                    <div className="flex items-center gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#0071E3] shrink-0"></span>
                      <span>体验创新：悬浮式控制台与微操力反馈手柄</span>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#0071E3] shrink-0"></span>
                      <span>量产落地：严苛公差管控与医用级外壳验证</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-8 sm:p-10 pt-0 flex items-center justify-between border-t border-black/[0.08] mt-2">
                <span className="text-xs font-semibold text-[#0071E3] uppercase tracking-wider font-mono">
                  荣获红点、iF 设计大奖
                </span>
                <button 
                  onClick={() => onNavigateDetail?.('/cases')}
                  className="text-xs sm:text-sm font-semibold text-[#0071E3] hover:underline flex items-center gap-1 cursor-pointer"
                >
                  <span>查看详情</span>
                  <span>›</span>
                </button>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ================= SECTION 04: 极简白皮书申领 (Apple Pro 级暗黑沉浸卡片) ================= */}
      <section id="enrollment" className="py-20 md:py-28 bg-[#FFFFFF]">
        <div className="max-w-[95%] w-full mx-auto">
          
          <div className="bg-gradient-to-b from-[#1D1D1F] to-[#141415] text-white rounded-[32px] sm:rounded-[44px] p-8 sm:p-14 md:p-16 border border-white/10 shadow-[0_24px_70px_rgba(0,0,0,0.25)] relative overflow-hidden">
            
            {/* Apple 极简环境光晕 */}
            <div className="absolute -top-32 -right-32 w-80 h-80 bg-[#0071E3]/20 rounded-full blur-3xl pointer-events-none"></div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center relative z-10">
              
              {/* Left Column */}
              <div className="lg:col-span-7">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-[#2997FF] text-xs font-mono font-semibold tracking-wider uppercase mb-4 border border-white/10 backdrop-blur-md">
                  FREE TOOLKIT · 实战工具
                </div>

                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white font-display leading-[1.12] mb-4">
                  申领《三品合一》白皮书
                </h2>
                
                <p className="text-base sm:text-lg text-[#A1A1A6] max-w-xl leading-relaxed mb-8 font-normal">
                  获取 50+ 页系统方法论实操指南、爆品评估推演表单与企业内训大纲，为团队构建高胜率创新体系。
                </p>

                <div className="space-y-3.5 text-xs sm:text-sm text-[#F5F5F7]/90">
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-4 h-4 text-[#2997FF] shrink-0" />
                    <span>50+ 页方法论实操 PDF 与爆品机会点诊断表</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-4 h-4 text-[#2997FF] shrink-0" />
                    <span>企业高管内训与工作坊定制方案一对一咨询</span>
                  </div>
                </div>
              </div>

              {/* Right Column: Apple Frosted Glass Form */}
              <div className="lg:col-span-5 bg-white/[0.04] border border-white/10 rounded-[28px] p-6 sm:p-8 backdrop-blur-md shadow-2xl">
                {downloadSuccess ? (
                  <div className="py-8 text-center flex flex-col items-center justify-center">
                    <div className="w-12 h-12 bg-[#2997FF]/20 text-[#2997FF] rounded-full flex items-center justify-center mb-3">
                      <Check className="w-6 h-6 stroke-[2.5]" />
                    </div>
                    <h4 className="text-base font-bold text-white">申请提交成功</h4>
                    <p className="text-xs sm:text-sm text-[#A1A1A6] mt-1.5">
                      资料已发送至您的邮箱，创新顾问将尽快与您联系。
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleDownloadSubmit} className="space-y-4">
                    <div>
                      <label className="block text-xs font-medium text-white/70 mb-2">
                        企业邮箱 / 手机号码
                      </label>
                      <input 
                        type="text" 
                        required
                        value={downloadEmail}
                        onChange={(e) => setDownloadEmail(e.target.value)}
                        placeholder="name@company.com 或 手机号"
                        className="w-full bg-white/[0.08] hover:bg-white/[0.12] focus:bg-white/[0.16] border border-white/15 focus:border-[#2997FF] rounded-full px-5 py-3.5 text-sm text-white placeholder:text-white/40 outline-none transition-all"
                      />
                    </div>

                    <button 
                      type="submit"
                      className="w-full bg-[#0071E3] hover:bg-[#0077ED] active:scale-98 text-white font-medium py-3.5 rounded-full text-sm transition-all flex items-center justify-center gap-2 cursor-pointer shadow-[0_4px_24px_rgba(0,113,227,0.4)]"
                    >
                      <Download className="w-4 h-4" />
                      <span>获取白皮书与课程大纲</span>
                    </button>

                    <p className="text-[11px] text-white/40 text-center">
                      严格保密，仅用于发送研学资料与内训咨询
                    </p>
                  </form>
                )}
              </div>

            </div>
          </div>

        </div>
      </section>

    </div>
  );
}

