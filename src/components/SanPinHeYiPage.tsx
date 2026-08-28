import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, Compass, Layers, Target, Check, CheckCircle2, GraduationCap, Play, Pause, ChevronRight, ChevronLeft, FileText, ArrowUpRight, Download } from 'lucide-react';
import { motion } from 'motion/react';

// Visual Assets
import bookSanpinheyiImg from '../assets/images/book_sanpinheyi_1787619969143.jpg';
import bookDesignPowerImg from '../assets/images/book_design_power_1787619983428.jpg';
import bookWhitepaperMockupImg from '../assets/images/book_whitepaper_mockup_1787619995065.jpg';
import caseSurgicalRobotImg from '../assets/images/case_surgical_robot_1787620051544.jpg';
import methodologyDiagramImg from '../assets/images/methodology_visual_diagram_1787620064287.jpg';

interface SanPinHeYiPageProps {
  onOpenContactModal: () => void;
  onNavigateDetail?: (url: string) => void;
  CounterComponent?: React.FC<{ target: number }>;
}

const DefaultCounter: React.FC<{ target: number }> = ({ target }) => {
  return <span>{target}</span>;
};

export default function SanPinHeYiPage({
  onOpenContactModal,
  onNavigateDetail,
  CounterComponent = DefaultCounter,
}: SanPinHeYiPageProps) {
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
  return (
    <div className="w-full bg-[#FFFFFF] text-[#4D4D4D] font-sans antialiased">
      
      {/* ================= 1. 首屏 HERO 区域 (调整为「携手洛可可，开启您的『三品合一』创新之旅」) ================= */}
      <section id="sanpinheyi-hero" className="py-16 md:py-24 text-center bg-[#FFFFFF] relative overflow-hidden border-b border-[#E5E5E5]">
        <div className="max-w-6xl mx-auto px-[5%] relative z-10 flex flex-col items-center">
          
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="h-[1.5px] w-8 bg-[#007BC7]"></span>
            <span className="text-[12px] tracking-[0.3em] font-bold text-[#007BC7] font-mono uppercase">
              THREE-IN-ONE INNOVATION JOURNEY
            </span>
            <span className="h-[1.5px] w-8 bg-[#007BC7]"></span>
          </div>

          <motion.h1 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="hero-title text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight text-[#1A1A1A] leading-[1.15] font-display text-center"
          >
            <span className="block">携手洛可可</span>
            <span className="block mt-1 sm:mt-2">
              开启您的<span className="text-[#007BC7]">「三品合一」</span>创新之旅
            </span>
          </motion.h1>

          <p className="text-xs md:text-sm font-semibold tracking-[0.3em] text-[#8C8C8C] uppercase mt-4 font-mono">
            LKK Consulting & Design Group
          </p>

          <p className="text-sm md:text-base text-[#4D4D4D] max-w-3xl mt-8 leading-[1.8] font-normal text-center text-balance">
            不论您处于开辟新品类、突破制造代工、还是寻求产品与品牌升级阶段，我们的资深品类专家与主笔设计团队随时为您提供全案诊断与咨询。
          </p>

          <div className="mt-8 flex items-center justify-center">
            <button 
              onClick={onOpenContactModal}
              className="bg-[#007BC7] hover:bg-[#005F96] text-white font-bold px-9 py-4 rounded-full text-sm sm:text-base transition-all duration-300 shadow-sm hover:shadow flex items-center gap-2.5 cursor-pointer group"
            >
              <span>预约资深专家咨询</span>
              <ArrowRight className="w-4 h-4 text-white transform group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

        </div>
      </section>

      {/* ================= 2. QUANTIFIED ACHIEVEMENTS SECTION ================= */}
      <section className="achievement-section">
        <div className="max-w-[95%] w-full mx-auto">
          <div className="achievement-grid">
            <div className="achievement-card">
              <div className="achievement-number">
                <CounterComponent target={22} />年
              </div>
              <div className="achievement-label">行业经验积淀</div>
            </div>

            <div className="achievement-card">
              <div className="achievement-number">
                <CounterComponent target={600} />+
              </div>
              <div className="achievement-label">专业奖项认证</div>
            </div>

            <div className="achievement-card">
              <div className="achievement-number">
                <CounterComponent target={1000} />+
              </div>
              <div className="achievement-label">行业头部客户认可</div>
            </div>

            <div className="achievement-card">
              <div className="achievement-number">
                <CounterComponent target={10000} />+
              </div>
              <div className="achievement-label">产品成功落地</div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= 3. 核心正文：三品合一方法论 动态信息图展示区域 ================= */}
      {/* 
        设计要求严格落实：
        - 纯净简洁视觉内容承载区，无卡片容器、无圆角边框、无阴影、无外框装饰、无悬浮窗口效果、无背景杂色
        - 大面积横向接近全宽展示，不设明显左右侧边距
        - 纯净自动循环播放 GIF 动态信息图，无播放按钮/控制条等播放器组件
        - 页面空间比例呼应品类创新咨询页节奏，留足舒适上下呼吸空间
      */}
      <section id="sanpinheyi-infographic" className="w-full bg-[#FFFFFF] py-12 md:py-20">
        <div className="w-full px-0 sm:px-2 md:px-4 mx-auto flex items-center justify-center">
          <div className="w-full aspect-[16/9] overflow-hidden">
            <video 
              src="https://github.com/minaxyue-ops/MINA/releases/download/1/2026-08-20.163819.mp4" 
              autoPlay 
              loop 
              muted 
              playsInline
              className="w-full h-full object-cover block mx-auto select-none"
            />
          </div>
        </div>
      </section>

      {/* ================= 4. METHODOLOGY THREE PILLARS (三品合一核心内涵) ================= */}
      <section className="py-16 md:py-24 border-t border-[#E5E5E5] bg-white text-[#1A1A1A]">
        <div className="max-w-[95%] w-full mx-auto">
          
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16 gap-6">
            <div>
              <span className="text-xs font-semibold text-[#007BC7] uppercase tracking-widest font-mono block mb-2">
                01 / THREE PILLARS
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#1D1D1F] font-display">
                三品协同：突破企业单点增长天花板
              </h2>
            </div>
            <p className="text-sm md:text-base text-[#86868B] max-w-md leading-relaxed font-normal">
              传统设计往往割裂战略、外观与品牌营销。“三品合一”将商业判断、硬件体验与用户心智融为一体，形成相互支撑的高爆发增长飞轮。
            </p>
          </div>

          {/* 3 Pillars Grid - Apple 官网视觉体系重构 (3级字号、4色收敛、细线图标、极简线性对勾、精炼文案) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            
            {/* Pillar 1: 品类战略 */}
            <div className="bg-[#F5F5F7] rounded-[22px] p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(0,0,0,0.04)] flex flex-col justify-between text-left">
              <div>
                {/* 44px 浅灰克制图标容器 + 1.5px 细线黑灰图标 */}
                <div className="w-11 h-11 rounded-xl bg-black/[0.04] text-[#1D1D1F] flex items-center justify-center mb-6">
                  <Compass className="w-5 h-5 stroke-[1.5]" />
                </div>
                {/* 三级字号 (11-12px 等宽大写宽字距，保留品牌蓝 #007BC7) */}
                <div className="text-[11px] sm:text-[12px] font-mono font-medium text-[#007BC7] uppercase tracking-[1.5px] mb-2.5">
                  PILLAR 01 · 战略导航
                </div>
                {/* 一级字号 (26-28px Semibold 600，Apple 字体栈，主文字 #1D1D1F) */}
                <h4 className="text-[24px] sm:text-[26px] lg:text-[28px] font-semibold tracking-[-0.3px] mb-4 text-[#1D1D1F] leading-[1.25] font-[-apple-system,BlinkMacSystemFont,'SF_Pro_Display','PingFang_SC','Helvetica_Neue',sans-serif]">
                  品类战略：回答「做什么」
                </h4>
                {/* 二级字号正文 (15px Regular，次文字 #424245，行高 1.6，精炼文案) */}
                <p className="text-[15px] font-normal leading-[1.6] mb-6 text-[#424245]">
                  洞察行业趋势与用户痛点，锁定高价值细分赛道，确立商业定位与进入策略。
                </p>
              </div>

              <div>
                {/* 1px 极浅分割线 (rgba(0,0,0,0.08)) */}
                <div className="w-full h-px bg-black/[0.08] mb-5"></div>
                {/* 二级字号列表 (15px Medium，线性极简对勾保留品牌蓝 #007BC7，间距 14px) */}
                <ul className="flex flex-col gap-3.5 w-full text-[15px] font-medium text-[#424245]">
                  <li className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-[#007BC7] shrink-0 stroke-[2.2]" />
                    <span>赛道价值判断与机会挖掘</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-[#007BC7] shrink-0 stroke-[2.2]" />
                    <span>差异化定位与价值主张</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-[#007BC7] shrink-0 stroke-[2.2]" />
                    <span>产品路线图与梯队规划</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Pillar 2: 产品创新 */}
            <div className="bg-[#F5F5F7] rounded-[22px] p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(0,0,0,0.04)] flex flex-col justify-between text-left">
              <div>
                {/* 44px 浅灰克制图标容器 + 1.5px 细线黑灰图标 */}
                <div className="w-11 h-11 rounded-xl bg-black/[0.04] text-[#1D1D1F] flex items-center justify-center mb-6">
                  <Layers className="w-5 h-5 stroke-[1.5]" />
                </div>
                {/* 三级字号 (11-12px 等宽大写宽字距，保留品牌蓝 #007BC7) */}
                <div className="text-[11px] sm:text-[12px] font-mono font-medium text-[#007BC7] uppercase tracking-[1.5px] mb-2.5">
                  PILLAR 02 · 体验底座
                </div>
                {/* 一级字号 (26-28px Semibold 600，Apple 字体栈，主文字 #1D1D1F) */}
                <h4 className="text-[24px] sm:text-[26px] lg:text-[28px] font-semibold tracking-[-0.3px] mb-4 text-[#1D1D1F] leading-[1.25] font-[-apple-system,BlinkMacSystemFont,'SF_Pro_Display','PingFang_SC','Helvetica_Neue',sans-serif]">
                  产品创新：回答「如何被体验」
                </h4>
                {/* 二级字号正文 (15px Regular，次文字 #424245，行高 1.6，精炼文案) */}
                <p className="text-[15px] font-normal leading-[1.6] mb-6 text-[#424245]">
                  以工业设计牵引结构工程与供应链制造，将战略概念转化为高品质落地量产。
                </p>
              </div>

              <div>
                {/* 1px 极浅分割线 (rgba(0,0,0,0.08)) */}
                <div className="w-full h-px bg-black/[0.08] mb-5"></div>
                {/* 二级字号列表 (15px Medium，线性极简对勾保留品牌蓝 #007BC7，间距 14px) */}
                <ul className="flex flex-col gap-3.5 w-full text-[15px] font-medium text-[#424245]">
                  <li className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-[#007BC7] shrink-0 stroke-[2.2]" />
                    <span>标志性外观与 CMF 质感定义</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-[#007BC7] shrink-0 stroke-[2.2]" />
                    <span>结构工程与开模可行性验证</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-[#007BC7] shrink-0 stroke-[2.2]" />
                    <span>供应链制造协同与量产落地</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Pillar 3: 品牌创新 */}
            <div className="bg-[#F5F5F7] rounded-[22px] p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(0,0,0,0.04)] flex flex-col justify-between text-left">
              <div>
                {/* 44px 浅灰克制图标容器 + 1.5px 细线黑灰图标 */}
                <div className="w-11 h-11 rounded-xl bg-black/[0.04] text-[#1D1D1F] flex items-center justify-center mb-6">
                  <Target className="w-5 h-5 stroke-[1.5]" />
                </div>
                {/* 三级字号 (11-12px 等宽大写宽字距，保留品牌蓝 #007BC7) */}
                <div className="text-[11px] sm:text-[12px] font-mono font-medium text-[#007BC7] uppercase tracking-[1.5px] mb-2.5">
                  PILLAR 03 · 心智认同
                </div>
                {/* 一级字号 (26-28px Semibold 600，Apple 字体栈，主文字 #1D1D1F) */}
                <h4 className="text-[24px] sm:text-[26px] lg:text-[28px] font-semibold tracking-[-0.3px] mb-4 text-[#1D1D1F] leading-[1.25] font-[-apple-system,BlinkMacSystemFont,'SF_Pro_Display','PingFang_SC','Helvetica_Neue',sans-serif]">
                  品牌创新：回答「如何被选择」
                </h4>
                {/* 二级字号正文 (15px Regular，次文字 #424245，行高 1.6，精炼文案) */}
                <p className="text-[15px] font-normal leading-[1.6] mb-6 text-[#424245]">
                  构建超级品牌符号与视觉识别体系，通过包装与传播赋能产品心智溢价。
                </p>
              </div>

              <div>
                {/* 1px 极浅分割线 (rgba(0,0,0,0.08)) */}
                <div className="w-full h-px bg-black/[0.08] mb-5"></div>
                {/* 二级字号列表 (15px Medium，线性极简对勾保留品牌蓝 #007BC7，间距 14px) */}
                <ul className="flex flex-col gap-3.5 w-full text-[15px] font-medium text-[#424245]">
                  <li className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-[#007BC7] shrink-0 stroke-[2.2]" />
                    <span>品牌话语与超级记忆符号</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-[#007BC7] shrink-0 stroke-[2.2]" />
                    <span>包装系统与货架视觉冲击</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-[#007BC7] shrink-0 stroke-[2.2]" />
                    <span>全触点传播规范与资产积淀</span>
                  </li>
                </ul>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ================= 5. SECTION 02: 权威专著研读 (Apple 并排露边横向画廊) ================= */}
      <section id="publications" className="py-20 md:py-28 bg-[#F5F5F7] border-t border-[#E5E5E5] overflow-hidden">
        <div className="w-full mx-auto">
          
          <div className="max-w-[95%] w-full mx-auto mb-12 md:mb-16">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div>
                <span className="text-xs font-semibold text-[#007BC7] uppercase tracking-widest font-mono block mb-2">
                  02 / PUBLICATIONS & RESEARCH
                </span>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#1D1D1F] font-display">
                  权威专著研读
                </h2>
              </div>
              <p className="text-sm md:text-base text-[#86868B] max-w-md leading-relaxed font-normal">
                洛可可创始人贾伟及创新团队二十年方法论沉淀，被清华大学、长江商学院等收录推荐。
              </p>
            </div>
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
                            <span className="text-xs font-mono font-bold text-[#007BC7] tracking-wide">
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

                          <p className="text-xs sm:text-sm text-[#4D4D4D] leading-relaxed mb-6 max-w-xl">
                            {book.description}
                          </p>

                          {/* 要点清单（纯文字与图标，无多余内框） */}
                          <div className="space-y-2.5 mb-7 text-xs sm:text-sm text-[#1D1D1F]/80">
                            {book.highlights.map((item, i) => (
                              <div key={i} className="flex items-center gap-2.5">
                                <CheckCircle2 className="w-4 h-4 text-[#007BC7] shrink-0" />
                                <span>{item}</span>
                              </div>
                            ))}
                          </div>

                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              onOpenContactModal();
                            }}
                            className="bg-[#007BC7] hover:bg-[#005F96] active:scale-95 text-white px-6 py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all shadow-xs cursor-pointer flex items-center gap-1.5"
                          >
                            <span>{book.actionText}</span>
                            <ChevronRight className="w-3.5 h-3.5" />
                          </button>
                        </div>

                        {/* 右侧：实体照片展示 */}
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

          {/* 底部控制器：播放/暂停 + 胶囊指示条 */}
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
                      ? 'w-7 h-1.5 bg-[#007BC7]' 
                      : 'w-1.5 h-1.5 bg-[#86868B]/40 hover:bg-[#86868B]'
                  }`}
                />
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* ================= 6. 课题研究与行业报告板块 (Apple.com 旗舰 Bento 视觉体系 · 极致视觉冲击 · 文字少而精) ================= */}
      <section id="research-reports" className="py-24 sm:py-32 bg-[#FFFFFF] border-t border-[#E5E5E5] text-left">
        <div className="max-w-6xl mx-auto px-[5%]">
          
          {/* 章节标题区 (Apple 纯粹留白与大字排版) */}
          <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
            <div className="text-[11px] sm:text-[12px] font-mono font-medium text-[#007BC7] uppercase tracking-[2px] mb-3">
              RESEARCH & INSIGHTS
            </div>
            <h2 className="text-[32px] sm:text-[44px] lg:text-[48px] font-semibold text-[#1D1D1F] leading-[1.15] tracking-[-0.8px] mb-4 font-[-apple-system,BlinkMacSystemFont,'SF_Pro_Display','PingFang_SC','Helvetica_Neue',sans-serif]">
              前瞻课题与行业深度报告
            </h2>
            <p className="text-[16px] sm:text-[17px] text-[#86868B] leading-[1.5] max-w-xl mx-auto font-normal">
              以 20 年实战沉淀与 500+ 爆品孵化数据，洞悉下一代品类增长范式。
            </p>
          </div>

          {/* Bento Grid 视觉矩阵 (旗舰主报告 + 2 大前沿专题) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
            
            {/* 旗舰主白皮书卡片 (8 栏高冲击力大卡片) */}
            <div 
              onClick={onOpenContactModal}
              className="lg:col-span-12 group bg-[#F5F5F7] rounded-[28px] p-8 sm:p-12 lg:p-14 overflow-hidden relative transition-all duration-500 hover:shadow-[0_24px_48px_rgba(0,0,0,0.06)] cursor-pointer flex flex-col md:flex-row items-center justify-between gap-10"
            >
              {/* 左侧文字区：极度精炼、层级分明 */}
              <div className="w-full md:w-1/2 flex flex-col items-start z-10">
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#007BC7]/10 text-[#007BC7] text-[11px] font-mono font-medium uppercase tracking-[1px] mb-6">
                  FLAGSHIP REPORT · 年度重磅
                </span>

                <h3 className="text-[26px] sm:text-[34px] lg:text-[38px] font-semibold text-[#1D1D1F] leading-[1.2] tracking-[-0.5px] mb-4 font-[-apple-system,BlinkMacSystemFont,'SF_Pro_Display','PingFang_SC','Helvetica_Neue',sans-serif] group-hover:text-[#007BC7] transition-colors">
                  《中国品类创新与爆品孵化白皮书》
                </h3>

                <p className="text-[15px] sm:text-[16px] text-[#424245] leading-[1.6] mb-8 max-w-md font-normal">
                  系统解构中国企业从制造代工到品类冠军、从功能竞争到心智卡位的全链路增长模型。
                </p>

                {/* Apple 经典药丸胶囊按钮 */}
                <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#1D1D1F] text-[#FFFFFF] text-[14px] font-medium transition-all duration-300 group-hover:bg-[#007BC7] shadow-sm">
                  <span>获取完整白皮书</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              </div>

              {/* 右侧白皮书实体封面浮动展示 (Apple 实体光影与微透视) */}
              <div className="w-full md:w-1/2 flex items-center justify-center relative">
                <div className="w-full max-w-[340px] sm:max-w-[400px] aspect-[4/3] rounded-2xl overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.12)] border border-black/[0.04] transition-all duration-500 group-hover:scale-[1.03] group-hover:shadow-[0_28px_56px_rgba(0,0,0,0.16)]">
                  <img 
                    src={bookWhitepaperMockupImg} 
                    alt="中国品类创新与爆品孵化白皮书" 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
            </div>

            {/* 专题报告 01: 具身智能与高端医疗 (6 栏分栏卡片) */}
            <div 
              onClick={onOpenContactModal}
              className="lg:col-span-6 group bg-[#F5F5F7] rounded-[28px] p-8 sm:p-10 flex flex-col justify-between overflow-hidden transition-all duration-500 hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)] cursor-pointer"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <span className="text-[11px] font-mono font-medium text-[#007BC7] tracking-[1.5px] uppercase">
                    TOPIC 01 · 硬科技工效
                  </span>
                  <span className="text-[11px] font-mono text-[#86868B]">
                    专业课题
                  </span>
                </div>

                <h3 className="text-[22px] sm:text-[26px] font-semibold text-[#1D1D1F] leading-[1.25] tracking-[-0.3px] mb-3 font-[-apple-system,BlinkMacSystemFont,'SF_Pro_Display','PingFang_SC','Helvetica_Neue',sans-serif] group-hover:text-[#007BC7] transition-colors">
                  医疗与具身智能人机工效研究报告
                </h3>

                <p className="text-[15px] text-[#424245] leading-[1.6] mb-6">
                  解构手术机器人与精密硬件的高精密机械工程与高容错人机交互范式。
                </p>
              </div>

              <div>
                {/* 视觉缩略展示 */}
                <div className="w-full h-48 sm:h-56 rounded-xl overflow-hidden mb-6 shadow-[0_8px_20px_rgba(0,0,0,0.06)] border border-black/[0.04]">
                  <img 
                    src={caseSurgicalRobotImg} 
                    alt="医疗与具身智能人机工效研究" 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                </div>

                {/* 底部动作链接 */}
                <div className="flex items-center justify-between pt-2">
                  <span className="inline-flex items-center text-[15px] font-normal text-[#007BC7] group-hover:underline underline-offset-4">
                    <span>获取课题报告</span>
                    <span className="text-[18px] font-light leading-none transition-transform duration-200 group-hover:translate-x-1 ml-1">&rsaquo;</span>
                  </span>
                </div>
              </div>
            </div>

            {/* 专题报告 02: 制造企业自主品牌突围 (6 栏分栏卡片) */}
            <div 
              onClick={onOpenContactModal}
              className="lg:col-span-6 group bg-[#F5F5F7] rounded-[28px] p-8 sm:p-10 flex flex-col justify-between overflow-hidden transition-all duration-500 hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)] cursor-pointer"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <span className="text-[11px] font-mono font-medium text-[#007BC7] tracking-[1.5px] uppercase">
                    TOPIC 02 · 产业转型
                  </span>
                  <span className="text-[11px] font-mono text-[#86868B]">
                    实操指南
                  </span>
                </div>

                <h3 className="text-[22px] sm:text-[26px] font-semibold text-[#1D1D1F] leading-[1.25] tracking-[-0.3px] mb-3 font-[-apple-system,BlinkMacSystemFont,'SF_Pro_Display','PingFang_SC','Helvetica_Neue',sans-serif] group-hover:text-[#007BC7] transition-colors">
                  制造企业转型自主品牌突围实操指南
                </h3>

                <p className="text-[15px] text-[#424245] leading-[1.6] mb-6">
                  提炼专精特新制造龙头从 OEM/ODM 到自主品类冠军的阶梯突围方法。
                </p>
              </div>

              <div>
                {/* 视觉缩略展示 */}
                <div className="w-full h-48 sm:h-56 rounded-xl overflow-hidden mb-6 shadow-[0_8px_20px_rgba(0,0,0,0.06)] border border-black/[0.04]">
                  <img 
                    src={methodologyDiagramImg} 
                    alt="制造企业转型自主品牌突围实操指南" 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                </div>

                {/* 底部动作链接 */}
                <div className="flex items-center justify-between pt-2">
                  <span className="inline-flex items-center text-[15px] font-normal text-[#007BC7] group-hover:underline underline-offset-4">
                    <span>获取课题报告</span>
                    <span className="text-[18px] font-light leading-none transition-transform duration-200 group-hover:translate-x-1 ml-1">&rsaquo;</span>
                  </span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
}
