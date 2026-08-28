import React from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import { CaseStudy } from '../types';

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

interface BrandInnovationPageProps {
  onOpenContactModal: () => void;
  onSelectCase: (cs: CaseStudy) => void;
  onNavigateDetail?: (detailUrl: string) => void;
}

export default function BrandInnovationPage({
  onOpenContactModal,
  onSelectCase,
  onNavigateDetail,
}: BrandInnovationPageProps) {
  const sections: SectionData[] = [
    {
      id: 'full-case-design',
      title: '品牌设计',
      englishTitle: 'BRAND DESIGN',
      description: '以用户为核心，打造完整品牌设计体验，通过品牌价值共振完成企业与用户的感性连接，帮助客户实现真实有效的商业价值。',
      detailUrl: '/brand-innovation/full-case-design',
      mainCases: [
        {
          id: 'case-pawup',
          title: 'Pawup小胖爪宠物品牌升级及产品包装创新咨询设计',
          image: 'https://github.com/minaxyue-ops/MINA/releases/download/1/image.33.png',
          tags: ['品牌升级', '宠物品牌', '包装创新'],
          linkText: '查看详情',
        },
        {
          id: 'case-chashumama',
          title: '茶树妈妈儿童洗护系列产品创新咨询设计',
          image: 'https://github.com/minaxyue-ops/MINA/releases/download/1/image.35.png',
          tags: ['儿童洗护', '产品创新', '品牌设计'],
          linkText: '查看详情',
        },
        {
          id: 'case-baiqueling',
          title: '百雀羚赋颜御龄系列产品创新咨询设计',
          image: 'https://github.com/minaxyue-ops/MINA/releases/download/1/image.39.png',
          tags: ['美妆护肤', '产品创新', '品牌设计'],
          linkText: '查看详情',
        },
      ],
      secondaryCases: [
        { id: 'sec-brand-1', title: '库迪品牌战略咨询&爆品打造', tags: ['快消品牌', '战略咨询'] },
        { id: 'sec-brand-2', title: '小仙炖品类创新全案咨询', tags: ['高端滋补', '品类创新'] },
        { id: 'sec-brand-3', title: '京客隆品牌战略咨询&爆品打造', tags: ['零售连锁', '战略咨询'] },
      ],
    },
    {
      id: 'ip-design',
      title: 'IP文创设计',
      englishTitle: 'IP & CULTURAL CREATIVE DESIGN',
      description: '以创意为手法、以产品为载体，从新文创理念出发结合场景思维，通过故事化与体验化的方式传递新文化。',
      detailUrl: '/brand-innovation/ip-design',
      mainCases: [
        {
          id: 'case-xiaoping',
          title: '四川小平故里红色文创产品创新咨询设计',
          image: 'https://github.com/minaxyue-ops/MINA/releases/download/1/gugong.jpg',
          tags: ['红色文创', '文旅创新', '产品设计'],
          linkText: '查看详情',
        },
        {
          id: 'case-wuxiangshan',
          title: '南京无想山景区系列文创产品打造',
          image: 'https://github.com/minaxyue-ops/MINA/releases/download/1/case_pophie.jpg',
          tags: ['景区文创', '形象打造', '周边衍生'],
          linkText: '查看详情',
        },
        {
          id: 'case-bingmayong',
          title: '西安兵马俑景区文创产品打造',
          image: 'https://github.com/minaxyue-ops/MINA/releases/download/1/image.37.png',
          tags: ['超级IP', '历史文化', '文创衍生'],
          linkText: '查看详情',
        },
      ],
      secondaryCases: [
        { id: 'sec-ip-1', title: '故宫博物院"故宫猫"IP形象打造&景区文创产品创新咨询设计', tags: ['故宫IP', '形象设计'] },
        { id: 'sec-ip-2', title: '敦煌景区文创丝巾产品创新咨询设计', tags: ['敦煌文创', '产品设计'] },
        { id: 'sec-ip-3', title: '庐阳城市品牌文创整案创新咨询设计', tags: ['城市品牌', '文创整案'] },
      ],
    },
    {
      id: 'packaging-design',
      title: '包装设计',
      englishTitle: 'PACKAGING DESIGN',
      description: '以品牌调性与用户感知为核心，深度融合产品特性、消费场景与市场审美，兼具视觉吸引力与实用功能性，强化品牌记忆点，打造颜值与销量兼具的包装解决方案，助力产品实现市场突围与商业增值。',
      detailUrl: '/brand-innovation/packaging-design',
      mainCases: [
        {
          id: 'case-liangpin',
          title: '良品铺子产品包装创新咨询设计',
          image: 'https://github.com/minaxyue-ops/MINA/releases/download/1/liangpin.jpg',
          tags: ['休闲食品', '包装创新', '货架穿透'],
          linkText: '查看详情',
        },
        {
          id: 'case-feihe',
          title: '飞鹤茁然品牌&产品包装创新咨询设计',
          image: 'https://github.com/minaxyue-ops/MINA/releases/download/1/case_yuexianhuo.jpg',
          tags: ['乳品快消', '包装视觉', '品牌打造'],
          linkText: '查看详情',
        },
        {
          id: 'case-cutecuter',
          title: '可优可优（Cute & Cuter）宠物食品包装创新咨询设计',
          image: 'https://github.com/minaxyue-ops/MINA/releases/download/1/case_pophie.jpg',
          tags: ['宠物食品', '包装设计', '高颜值'],
          linkText: '查看详情',
        },
      ],
      secondaryCases: [
        { id: 'sec-pkg-1', title: '海底捞品类创新全案咨询', tags: ['快消餐饮', '品类创新'] },
        { id: 'sec-pkg-2', title: '悦鲜活年轻化产品包装创新咨询设计', tags: ['乳品包装', '年轻化'] },
        { id: 'sec-pkg-3', title: '三泉冷面品牌包装创新咨询设计', tags: ['特色快消', '包装设计'] },
      ],
    },
  ];

  const handleCaseClick = (caseId: string, title: string, imgUrl?: string) => {
    const mockCase: CaseStudy = {
      id: caseId,
      title: title,
      image: imgUrl || 'https://github.com/minaxyue-ops/MINA/releases/download/1/image.33.png',
      description: `这是${title}的品牌创新全案成果展示。洛可可深度融合商业战略与设计美学，为品牌打造高辨识度与强商业穿透力的品牌资产。`,
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

        /* 品牌设计：光晕在右上角 */
        #full-case-design {
          background-color: #FFFFFF !important;
          background-image: radial-gradient(circle at 85% 10%, rgba(232, 240, 255, 0.6) 0%, #FFFFFF 55%), url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.025'/%3E%3C/svg%3E") !important;
        }

        /* IP文创设计：光晕在左下角，与上一板块方向相反，制造呼吸感 */
        #ip-design {
          background-color: #FAFAFA !important;
          background-image: radial-gradient(circle at 15% 90%, rgba(232, 240, 255, 0.5) 0%, #FAFAFA 55%), url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.025'/%3E%3C/svg%3E") !important;
        }

        /* 包装设计：光晕回到右上角偏中，和第一个板块呼应但不完全相同 */
        #packaging-design {
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
        .section-text-link {
          font-size: 15px;
          font-weight: 600;
          transition: color 0.3s ease;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          color: #007BC7 !important;
        }
        .section-text-link:hover {
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
        .section-text-link-secondary:hover {
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

        /* 移动端响应式：改为简单的纵向堆叠 */
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
        }
      `}</style>

      {/* 1. HERO / FIRST SCREEN SECTION */}
      <section 
        id="brand-hero" 
        className="py-16 md:py-24 text-center bg-radial from-neutral-50/70 via-neutral-50/30 to-white relative overflow-hidden border-b border-neutral-100"
      >
        <div className="max-w-4xl mx-auto px-[5%] relative z-10 flex flex-col items-center">
          
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="h-[1.5px] w-8 bg-[#007BC7]"></span>
            <span className="text-[12px] tracking-[0.3em] font-bold text-[#007BC7] font-mono">BRAND INNOVATION & DESIGN</span>
            <span className="h-[1.5px] w-8 bg-[#007BC7]"></span>
          </div>

          <motion.h1 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="hero-title text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight text-neutral-900 leading-[1.05] font-display"
          >
            <span className="text-[#007BC7]">品牌创新</span>
            <span className="text-neutral-900"> · </span>
            <span className="text-[#1a1a1a]">品牌赋能</span>
          </motion.h1>

          <p className="text-xs md:text-sm font-semibold tracking-[0.3em] text-neutral-400 uppercase mt-4 font-mono">
            LKK Brand Innovation Center
          </p>

          <p className="text-sm md:text-base text-neutral-500 max-w-3xl mt-8 leading-[1.8] font-normal text-center text-balance">
            LKK洛可可创新设计集团2004年成立，以用户体验为核心，提供一站式全闭环创新设计服务，涵盖产品策略研究、工业设计、结构设计、品牌设计、文创设计、交互设计、服务设计及研发与供应链管理。公司拥有国家级工业设计中心等权威认证，斩获红点、iF等国内外大奖602项，服务超200家世界500强、300家中国500强企业。深耕食品酒饮、医疗健康、新能源、智能AIoT等多领域，以"咨询+设计"模式与"三品合一"爆品方法论，打造天宫系列、C919客机、故宫猫文创、55度杯等万余款上市产品，助力客户实现品类创新与商业价值增长。
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
      {sections.map((sect) => {
        const [cMain, cSub1, cSub2] = sect.mainCases;
        
        return (
          <React.Fragment key={sect.id}>
            {/* Section Showcase */}
            <section 
              id={sect.id}
              className="section-showcase"
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
                            <div className="case-brand-label">{cMain.tags?.[0] || 'Pawup'}</div>
                            
                            <button
                              type="button"
                              className="case-detail-arrow cursor-pointer border-none"
                              onClick={(e) => {
                                e.preventDefault();
                                e.stopPropagation();
                                handleCaseClick(cMain.id, cMain.title, cMain.image);
                              }}
                              aria-label="查看案例简介"
                            >
                              <span>案例简介</span><span>↗</span>
                            </button>

                            <div className="case-bottom-block">
                              <div className="case-divider">-</div>
                              <div className="case-title">{cMain.title}</div>
                              <div className="case-desc">{cMain.tags ? cMain.tags.join(' · ') : '品牌升级与包装创新'}</div>
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
                            <div className="case-brand-label">{cSub1.tags?.[0] || '茶树妈妈'}</div>
                            
                            <button
                              type="button"
                              className="case-detail-arrow cursor-pointer border-none"
                              onClick={(e) => {
                                e.preventDefault();
                                e.stopPropagation();
                                handleCaseClick(cSub1.id, cSub1.title, cSub1.image);
                              }}
                              aria-label="查看案例简介"
                            >
                              <span>案例简介</span><span>↗</span>
                            </button>

                            <div className="case-bottom-block">
                              <div className="case-divider">-</div>
                              <div className="case-title">{cSub1.title}</div>
                              <div className="case-desc">{cSub1.tags ? cSub1.tags.join(' · ') : '茶树妈妈品牌战略与产品创新'}</div>
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
                            <div className="case-brand-label">{cSub2.tags?.[0] || '百雀羚'}</div>
                            
                            <button
                              type="button"
                              className="case-detail-arrow cursor-pointer border-none"
                              onClick={(e) => {
                                e.preventDefault();
                                e.stopPropagation();
                                handleCaseClick(cSub2.id, cSub2.title, cSub2.image);
                              }}
                              aria-label="查看案例简介"
                            >
                              <span>案例简介</span><span>↗</span>
                            </button>

                            <div className="case-bottom-block">
                              <div className="case-divider">-</div>
                              <div className="case-title">{cSub2.title}</div>
                              <div className="case-desc">{cSub2.tags ? cSub2.tags.join(' · ') : '百雀羚东方美学国潮IP打造'}</div>
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
