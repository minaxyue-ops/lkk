import React from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import { CaseStudy } from '../types';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface ProductCase {
  id: string;
  title: string;
  image: string;
  tags: string[];
  linkText: string;
}

interface SecondaryCase {
  id: string;
  title: string;
  tags: string[];
}

interface SectionData {
  id: string;
  title: string;
  englishTitle: string;
  description: string;
  detailUrl: string;
  mainCases: ProductCase[];
  secondaryCases: SecondaryCase[];
}

interface ProductInnovationPageProps {
  onOpenContactModal: () => void;
  onSelectCase: (cs: CaseStudy) => void;
  onNavigateDetail?: (detailUrl: string) => void;
}

export default function ProductInnovationPage({
  onOpenContactModal,
  onSelectCase,
  onNavigateDetail,
}: ProductInnovationPageProps) {
  const sections: SectionData[] = [
    {
      id: 'industrial-design',
      title: '工业设计',
      englishTitle: 'INDUSTRIAL DESIGN',
      description: '洛可可工业设计坚持以用户为中心，融合前沿科技美学、人机工程学与人性深度洞察。我们用国际一流水准的创意美学，为每一个产品构筑起坚实的心智护城河，让产品在终端市场具备降维打击的绝对美学竞争壁垒。',
      detailUrl: '/product-innovation/industrial-design',
      mainCases: [
        {
          id: 'case-sizherui',
          title: '思哲睿康多多手术机器人产品创新设计',
          image: '/src/assets/images/case_sizherui.jpg',
          tags: ['医疗健康', '工业设计', '人机工学'],
          linkText: '查看详情',
        },
        {
          id: 'case-hit',
          title: '哈工大智能协作机器人产品设计',
          image: '/src/assets/images/case_hit.jpg',
          tags: ['智能制造', '协作机器', '关节安全'],
          linkText: '查看详情',
        },
        {
          id: 'case-pophie',
          title: '糯宝 (Pophie) 类生命情感陪伴机器人',
          image: '/src/assets/images/case_pophie.jpg',
          tags: ['AI陪伴', '生命触感', '流线美学'],
          linkText: '查看详情',
        },
      ],
      secondaryCases: [
        { id: 'sec-ind-1', title: '智能超瞬时乳品低温杀菌中控台设计', tags: ['食品酒饮', '界面终端'] },
        { id: 'sec-ind-2', title: '西门子新一代智能厨电家族化美学规范', tags: ['智能家居', '家族设计'] },
        { id: 'sec-ind-3', title: '库迪咖啡跨界爆款高颜值包装艺术设计', tags: ['快消品', '包装设计'] },
      ],
    },
    {
      id: 'structural-design',
      title: '结构设计',
      englishTitle: 'STRUCTURAL DESIGN',
      description: '洛可可结构设计团队拥有实力雄厚的机械、电子及材料学专家。我们在外观方案设计之初即深度介入，核算整机可行性与目标成本，打通人性化的交互动作与精密的空间堆叠，确保创意能够完美无瑕地在物理世界中实现。',
      detailUrl: '/product-innovation/structural-design',
      mainCases: [
        {
          id: 'case-jingkelong',
          title: '京客隆新一代自助零售收银系统结构堆叠',
          image: '/src/assets/images/case_jingkelong.jpg',
          tags: ['自助系统', '精密机构', '模块化'],
          linkText: '查看详情',
        },
        {
          id: 'case-haidilao',
          title: '海底捞随行即食系列锁鲜加热腔结构设计',
          image: '/src/assets/images/case_haidilao.jpg',
          tags: ['温控结构', '阻燃材料', '人性安全'],
          linkText: '查看详情',
        },
        {
          id: 'case-yuexianhuo',
          title: '悦鲜活年轻化瓶口阻气锁鲜结构设计',
          image: '/src/assets/images/case_yuexianhuo.jpg',
          tags: ['材料包装', '气密封装', '降本提效'],
          linkText: '查看详情',
        },
      ],
      secondaryCases: [
        { id: 'sec-str-1', title: '思哲睿多悬臂协同关节精密齿轮传动机构', tags: ['医疗科技', '机械传动'] },
        { id: 'sec-str-2', title: '极氪智能充电桩防尘防水高分子外壳结构', tags: ['新能源', '高防护性'] },
        { id: 'sec-str-3', title: '故宫猫盲盒系列环保多色注塑装配结构', tags: ['IP潮玩', '精细模具'] },
      ],
    },
    {
      id: 'supply-chain',
      title: '研发供应链',
      englishTitle: 'R&D SUPPLY CHAIN',
      description: '我们不仅致力于顶层设计，更深度链接全球柔性制造供应链网络，覆盖打样、精密开模、材料测试到整机量产。洛可可强大的闭环供应链体系真正做到“方案出炉即量产”，严控出货品质与工艺还原，缩短上市时效。',
      detailUrl: '/product-innovation/production-landing',
      mainCases: [
        {
          id: 'case-robot-supply',
          title: '高度集成双足机器人关节电机小批量试产',
          image: '/src/assets/images/lkk_humanoid_robot_1783302961282.jpg',
          tags: ['小批量', '精密开模', '机器人'],
          linkText: '查看详情',
        },
        {
          id: 'case-jars-supply',
          title: '高档化妆品亚克力环保材料瓶量产供应链',
          image: '/src/assets/images/lkk_cosmetics_jars_1783302947995.jpg',
          tags: ['亚克力', '注塑吹瓶', '量产保障'],
          linkText: '查看详情',
        },
        {
          id: 'case-coffee-supply',
          title: '库迪咖啡全国百万级包装材料柔性供应交付',
          image: '/src/assets/images/lkk_coffee_mockup_1783302972120.jpg',
          tags: ['柔性供应', '环保纸塑', '全国物流'],
          linkText: '查看详情',
        },
      ],
      secondaryCases: [
        { id: 'sec-sup-1', title: '哈工大协作机器人全金属外壳特种喷涂供应链', tags: ['特种表面', '工业级'] },
        { id: 'sec-sup-2', title: '小仙炖定制保鲜冰盒多地协作绿色注塑供应', tags: ['快消包材', '协同制造'] },
        { id: 'sec-sup-3', title: '智能净水终端内部多路分水集成阀模具开发', tags: ['高精密模', '开模打样'] },
      ],
    },
  ];

  const handleCaseClick = (caseId: string, title: string) => {
    const mockCase: CaseStudy = {
      id: caseId,
      title: title,
      description: `这是${title}的深度创新案例全流程展示。洛可可战略设计团队提供外观研发、核心人机交互、样机打样以及制造供应链配对一站式服务，完美还原创意美学，助力高水平量产上市。`,
      logoType: caseId.includes('pophie') ? 'pophie' : caseId.includes('jingkelong') ? 'jingkelong' : 'yuexianhuo',
    };
    onSelectCase(mockCase);
  };

  return (
    <div className="w-full bg-white">
      {/* SCOPED CUSTOM STYLES */}
      <style>{`
        /* 静态板块与一大两小网格样式 */
        .section-showcase {
          position: relative;
          padding: 80px 5%;
          width: 100%;
          background-blend-mode: overlay;
        }
        .section-showcase::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 120px;
          background: linear-gradient(to bottom, rgba(0, 0, 0, 0.025), transparent);
          pointer-events: none;
          z-index: 1;
        }

        /* 工业设计：光晕在右上角 */
        #industrial-design {
          background-color: #FFFFFF !important;
          background-image: radial-gradient(circle at 85% 10%, rgba(232, 240, 255, 0.6) 0%, #FFFFFF 55%), url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.025'/%3E%3C/svg%3E") !important;
        }

        /* 结构设计：光晕在左下角，与上一板块方向相反，制造呼吸感 */
        #structural-design {
          background-color: #FAFAFA !important;
          background-image: radial-gradient(circle at 15% 90%, rgba(232, 240, 255, 0.5) 0%, #FAFAFA 55%), url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.025'/%3E%3C/svg%3E") !important;
        }

        /* 研发供应链：光晕回到右上角偏中，和第一个板块呼应但不完全相同 */
        #supply-chain {
          background-color: #FFFFFF !important;
          background-image: radial-gradient(circle at 75% 25%, rgba(232, 240, 255, 0.6) 0%, #FFFFFF 55%), url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.025'/%3E%3C/svg%3E") !important;
        }

        .section-showcase-inner {
          position: relative;
          z-index: 2;
          max-width: 95%;
          margin: 0 auto;
          width: 100%;
          display: flex;
          align-items: center;
          gap: 5%;
        }
        .section-text {
          width: 38%;
          flex-shrink: 0;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        .section-text h2 {
          font-size: clamp(32px, 3.3vw, 48px);
          font-weight: 700;
          line-height: 1.2;
          margin-bottom: 20px;
          color: #1A1A1A !important;
        }
        .theme-dark .section-text h2,
        .theme-light .section-text h2 {
          color: #1A1A1A !important;
        }
        .section-text-line {
          width: 56px;
          height: 3px;
          background-color: #007BC7;
          margin-bottom: 28px;
        }
        .section-text p {
          font-size: 16px;
          font-weight: 400;
          line-height: 1.8;
          margin-bottom: 32px;
          color: #4D4D4D !important;
        }
        .theme-dark .section-text p,
        .theme-light .section-text p {
          color: #4D4D4D !important;
        }
        .section-text-link {
          font-size: 15px;
          font-weight: 600;
          transition: color 0.3s ease;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          color: #007BC7 !important;
        }
        .theme-dark .section-text-link,
        .theme-light .section-text-link {
          color: #007BC7 !important;
        }
        .theme-dark .section-text-link:hover,
        .theme-light .section-text-link:hover {
          color: #005F96 !important;
        }
        .section-text-link-secondary {
          font-size: 15px;
          font-weight: 600;
          transition: color 0.3s ease;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          color: #4D4D4D !important;
        }
        .theme-dark .section-text-link-secondary,
        .theme-light .section-text-link-secondary {
          color: #4D4D4D !important;
        }
        .theme-dark .section-text-link-secondary:hover,
        .theme-light .section-text-link-secondary:hover {
          color: #007BC7 !important;
        }

        /* 一大两小网格 CSS */
        .case-grid {
          display: grid;
          grid-template-columns: 1.4fr 1fr;
          grid-template-rows: 1fr 1fr;
          gap: 16px;
          height: 70vh;
          max-height: 580px;
          min-height: 460px;
          width: 100%;
        }
        .case-main {
          grid-column: 1;
          grid-row: 1 / span 2;
          position: relative;
          border-radius: 8px;
          overflow: hidden;
          display: block;
          height: 100%;
        }
        .case-sub-1 {
          grid-column: 2;
          grid-row: 1;
          position: relative;
          border-radius: 8px;
          overflow: hidden;
          display: block;
          height: 100%;
        }
        .case-sub-2 {
          grid-column: 2;
          grid-row: 2;
          position: relative;
          border-radius: 8px;
          overflow: hidden;
          display: block;
          height: 100%;
        }

        /* 案例卡片悬停交互样式 - 灰度+调暗+标题浮层 */
        .case-hover-card {
          position: relative;
          display: block;
          width: 100%;
          height: 100%;
          border-radius: 24px;
          overflow: hidden;
          text-decoration: none;
          background: #000;
          border: none;
          padding: 0;
        }
        .case-card-bg {
          position: absolute;
          inset: 0;
          z-index: 1;
        }
        .case-card-bg img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          filter: grayscale(0%) brightness(1);
          transition: filter 0.5s ease, transform 0.5s ease;
        }
        .case-hover-card:hover .case-card-bg img {
          filter: grayscale(15%) brightness(0.9);
          transform: scale(1.05);
        }
        .case-hover-card:hover .case-summary-v2 {
          opacity: 1;
          transform: translateY(0);
        }

        /* 移动端响应式：改为简单的纵向堆叠（大图在上，两张小图依次在下，各自宽度100%） */
        @media (max-width: 991px) {
          .section-showcase {
            padding: 48px 5%;
          }
          .section-showcase-inner {
            flex-direction: column-reverse;
            gap: 32px;
          }
          .section-text {
            width: 100%;
          }
          .case-grid {
            display: flex;
            flex-direction: column;
            height: auto;
            gap: 16px;
            min-height: auto;
          }
          .case-main, .case-sub-1, .case-sub-2 {
            width: 100%;
            height: 240px;
            grid-column: auto;
            grid-row: auto;
            border-radius: 8px;
          }
          .case-caption {
            font-size: 14px;
            left: 64px;
            bottom: 16px;
          }
        }
      `}</style>

      {/* 1. HERO / FIRST SCREEN SECTION */}
      <section 
        id="product-hero" 
        className="py-16 md:py-24 text-center bg-radial from-neutral-50/70 via-neutral-50/30 to-white relative overflow-hidden border-b border-neutral-100"
      >
        <div className="max-w-4xl mx-auto px-[5%] relative z-10 flex flex-col items-center">
          
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="h-[1.5px] w-8 bg-[#007BC7]"></span>
            <span className="text-[12px] tracking-[0.3em] font-bold text-[#007BC7] font-mono">PRODUCT INNOVATION & DESIGN</span>
            <span className="h-[1.5px] w-8 bg-[#007BC7]"></span>
          </div>

          <motion.h1 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="hero-title text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight text-neutral-900 leading-[1.05] font-display"
          >
            <span className="text-[#007BC7]">产品创新</span>
            <span className="text-neutral-900"> · </span>
            <span className="text-[#1a1a1a]">爆品打造</span>
          </motion.h1>

          <p className="text-xs md:text-sm font-semibold tracking-[0.3em] text-neutral-400 uppercase mt-4 font-mono">
            LKK Product Innovation Center
          </p>

          <p className="text-sm md:text-base text-neutral-500 max-w-3xl mt-8 leading-[1.8] font-normal text-center text-balance">
            洛可可坚持以用户体验为核心，凭借实力雄厚的外观设计、机械结构工程团队以及供应链闭环能力，为垂直行业客户提供从外观创意、结构研发到量产落地的全流程产品创新服务。通过极致的产品力打通人性化交互、先进结构堆叠以及创新材料降本，让设计真正完美还原，协助企业跨越研发鸿沟，打造细分品类心智爆品。
          </p>

          <div className="mt-8">
            <button 
              onClick={onOpenContactModal}
              className="bg-[#007BC7] hover:bg-[#005F96] text-white font-bold px-8 py-3.5 rounded-full text-sm transition-all duration-300 shadow-md flex items-center gap-2 cursor-pointer border-none"
            >
              联系我们
              <ArrowRight className="w-4 h-4 text-white" />
            </button>
          </div>

        </div>
      </section>

      {/* 2. THE THREE SECTIONS WITH STATIC 1-LARGE + 2-SMALL GRID */}
      {sections.map((sect, sectIdx) => {
        const isDark = false;
        const [cMain, cSub1, cSub2] = sect.mainCases;
        
        return (
          <React.Fragment key={sect.id}>
            {/* Section Showcase */}
            <section 
              id={sect.id}
              className={`section-showcase ${isDark ? 'theme-dark' : 'theme-light'}`}
            >
              <div className="section-showcase-inner">
                {/* Left Side: Static 1-Large + 2-Small Grid */}
                <div className="w-full lg:w-[57%]">
                  <div className="case-grid">
                    {/* Main Case (Large) */}
                    {cMain && (
                      <div className="case-main">
                        <a
                          href={`/cases/${cMain.id}`}
                          onClick={(e) => {
                            e.preventDefault();
                            if (onNavigateDetail) {
                              onNavigateDetail(`/cases/${cMain.id}`);
                            }
                          }}
                          className="case-hover-card case-card-v2 focus:outline-none cursor-pointer text-decoration-none block relative w-full h-full"
                        >
                          <div className="case-card-bg w-full h-full">
                            <img 
                              src={cMain.image} 
                              alt={cMain.title} 
                              referrerPolicy="no-referrer"
                              loading="lazy"
                              className="w-full h-full object-cover"
                            />
                          </div>

                          <div className="case-summary-v2">
                            <div className="case-brand-label">{cMain.tags?.[0] || '洛可可案例'}</div>
                            
                            <button
                              type="button"
                              className="case-detail-arrow cursor-pointer border-none"
                              onClick={(e) => {
                                e.preventDefault();
                                e.stopPropagation();
                                handleCaseClick(cMain.id, cMain.title);
                              }}
                              aria-label="查看案例简介"
                            >
                              <span>案例简介</span><span>↗</span>
                            </button>

                            <div className="case-bottom-block">
                              <div className="case-divider">-</div>
                              <div className="case-title">{cMain.title}</div>
                              <div className="case-desc">{cMain.tags ? cMain.tags.join(' · ') : '产品创新与设计落地'}</div>
                            </div>
                          </div>
                        </a>
                      </div>
                    )}

                    {/* Sub Case 1 (Top Small) */}
                    {cSub1 && (
                      <div className="case-sub-1">
                        <a
                          href={`/cases/${cSub1.id}`}
                          onClick={(e) => {
                            e.preventDefault();
                            if (onNavigateDetail) {
                              onNavigateDetail(`/cases/${cSub1.id}`);
                            }
                          }}
                          className="case-hover-card case-card-v2 focus:outline-none cursor-pointer text-decoration-none block relative w-full h-full"
                        >
                          <div className="case-card-bg w-full h-full">
                            <img 
                              src={cSub1.image} 
                              alt={cSub1.title} 
                              referrerPolicy="no-referrer"
                              loading="lazy"
                              className="w-full h-full object-cover"
                            />
                          </div>

                          <div className="case-summary-v2">
                            <div className="case-brand-label">{cSub1.tags?.[0] || '洛可可案例'}</div>
                            
                            <button
                              type="button"
                              className="case-detail-arrow cursor-pointer border-none"
                              onClick={(e) => {
                                e.preventDefault();
                                e.stopPropagation();
                                handleCaseClick(cSub1.id, cSub1.title);
                              }}
                              aria-label="查看案例简介"
                            >
                              <span>案例简介</span><span>↗</span>
                            </button>

                            <div className="case-bottom-block">
                              <div className="case-divider">-</div>
                              <div className="case-title">{cSub1.title}</div>
                              <div className="case-desc">{cSub1.tags ? cSub1.tags.join(' · ') : '产品创新与设计落地'}</div>
                            </div>
                          </div>
                        </a>
                      </div>
                    )}

                    {/* Sub Case 2 (Bottom Small) */}
                    {cSub2 && (
                      <div className="case-sub-2">
                        <a
                          href={`/cases/${cSub2.id}`}
                          onClick={(e) => {
                            e.preventDefault();
                            if (onNavigateDetail) {
                              onNavigateDetail(`/cases/${cSub2.id}`);
                            }
                          }}
                          className="case-hover-card case-card-v2 focus:outline-none cursor-pointer text-decoration-none block relative w-full h-full"
                        >
                          <div className="case-card-bg w-full h-full">
                            <img 
                              src={cSub2.image} 
                              alt={cSub2.title} 
                              referrerPolicy="no-referrer"
                              loading="lazy"
                              className="w-full h-full object-cover"
                            />
                          </div>

                          <div className="case-summary-v2">
                            <div className="case-brand-label">{cSub2.tags?.[0] || '洛可可案例'}</div>
                            
                            <button
                              type="button"
                              className="case-detail-arrow cursor-pointer border-none"
                              onClick={(e) => {
                                e.preventDefault();
                                e.stopPropagation();
                                handleCaseClick(cSub2.id, cSub2.title);
                              }}
                              aria-label="查看案例简介"
                            >
                              <span>案例简介</span><span>↗</span>
                            </button>

                            <div className="case-bottom-block">
                              <div className="case-divider">-</div>
                              <div className="case-title">{cSub2.title}</div>
                              <div className="case-desc">{cSub2.tags ? cSub2.tags.join(' · ') : '产品创新与设计落地'}</div>
                            </div>
                          </div>
                        </a>
                      </div>
                    )}
                  </div>
                </div>

                {/* Right Side: Section Text */}
                <div className="section-text">
                  <span className="text-xs font-semibold text-[#007BC7] uppercase tracking-widest font-mono block mb-2">
                    {sect.englishTitle}
                  </span>
                  <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#1D1D1F] font-display mb-4">
                    {sect.title.replace(/[。.]+$/, '')}
                  </h2>
                  <div className="section-text-line" />
                  <p className="text-sm md:text-base text-[#86868B] leading-relaxed mb-6 font-normal">
                    {sect.description}
                  </p>
                  
                  <div className="flex items-center gap-6 flex-wrap">
                    <button 
                      onClick={() => {
                        if (onNavigateDetail) {
                          onNavigateDetail(sect.detailUrl);
                        }
                      }}
                      className="section-text-link group border-none bg-transparent p-0 cursor-pointer"
                    >
                      了解详情
                      <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </button>

                    <button 
                      onClick={() => {
                        if (onNavigateDetail) {
                          onNavigateDetail(sect.detailUrl);
                        }
                      }}
                      className="section-text-link-secondary group border-none bg-transparent p-0 cursor-pointer"
                    >
                      更多案例
                      <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </button>
                  </div>
                </div>
              </div>
            </section>
          </React.Fragment>
        );
      })}

    </div>
  );
}
