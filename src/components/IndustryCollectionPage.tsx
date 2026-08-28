import React, { useState, useRef, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import { ScrollSectionTitle } from './ScrollSectionTitle';

interface IndustryItem {
  id: string;
  name: string;
  desc: string;
  image: string;
  detailUrl: string;
}

const TECH_INDUSTRIES: IndustryItem[] = [
  {
    id: 'robotics',
    name: '机器人',
    desc: '人机协同与具身智能形态创新，重塑未来服务与工业机器人作业体验',
    image: '/src/assets/images/lkk_humanoid_robot_1783302961282.jpg',
    detailUrl: '/industry/robotics'
  },
  {
    id: 'smart-3c',
    name: '智能 3C',
    desc: '数码科技与智能硬件爆品打造，引领消费电子潮流与极致用户体验',
    image: '/src/assets/images/lkk_coffee_mockup_1783302972120.jpg',
    detailUrl: '/industry/smart-3c'
  },
  {
    id: 'home-appliances',
    name: '智能家电',
    desc: '品质生活与智能家电体验升级，让人机交互与空间美学和谐共融',
    image: 'https://github.com/minaxyue-ops/MINA/releases/download/1/xiaozhi.jpg',
    detailUrl: '/industry/home-appliances'
  },
  {
    id: 'healthcare',
    name: '智能医疗',
    desc: '高端医疗器械与人性化健康设计，精准赋能诊疗流程与关怀体验',
    image: 'https://github.com/minaxyue-ops/MINA/releases/download/1/sizherui.jpg',
    detailUrl: '/industry/healthcare'
  },
  {
    id: 'industrial-equipment',
    name: '智能装备',
    desc: '智能装备产业升级的设计伙伴，助力企业打造高端制造与人机工程新标杆',
    image: 'https://github.com/minaxyue-ops/MINA/releases/download/1/aisidun.jpg',
    detailUrl: '/industry/industrial-equipment'
  },
  {
    id: 'new-energy',
    name: '智能能源',
    desc: '绿色能源与智慧储能体验重塑，打造零碳时代高辨识度标志性产品',
    image: 'https://github.com/minaxyue-ops/MINA/releases/download/1/image.39.png',
    detailUrl: '/industry/new-energy'
  },
  {
    id: 'transportation',
    name: '智能交通',
    desc: '智慧出行与未来交通载具设计，探索前瞻造型与座舱感知新维度',
    image: 'https://github.com/minaxyue-ops/MINA/releases/download/1/image.37.png',
    detailUrl: '/industry/transportation'
  }
];

const CONSUMER_INDUSTRIES: IndustryItem[] = [
  {
    id: 'food-beverage',
    name: '食品酒饮',
    desc: '新零售食品与差异化包装创新，以高颜值与情绪价值驱动爆品突破',
    image: 'https://github.com/minaxyue-ops/MINA/releases/download/1/7.15.1.3.gif',
    detailUrl: '/industry/food-beverage'
  },
  {
    id: 'pet-economy',
    name: '宠物经济',
    desc: '精细化养宠与人宠友好智能用品，倡导人宠共生的精致生活美学',
    image: 'https://github.com/minaxyue-ops/MINA/releases/download/1/image.33.png',
    detailUrl: '/industry/pet-economy'
  },
  {
    id: 'cultural-creative',
    name: '文化创意',
    desc: '超级IP文创与文化遗产活化，连接传统文化与现代消费新生活方式',
    image: 'https://github.com/minaxyue-ops/MINA/releases/download/1/gugong.jpg',
    detailUrl: '/industry/cultural-creative'
  },
  {
    id: 'home-apparel',
    name: '家居鞋服',
    desc: '时尚软装与人体工学鞋服美学，打造高品质居家与穿戴生活新范式',
    image: 'https://github.com/minaxyue-ops/MINA/releases/download/1/xiaozhi.jpg',
    detailUrl: '/industry/home-apparel'
  },
  {
    id: 'wellness-health',
    name: '大健康',
    desc: '科学养生与现代滋补科技体验，驱动大健康产业全周期品类升级',
    image: 'https://github.com/minaxyue-ops/MINA/releases/download/2%E6%A1%88%E4%BE%8B%E8%AF%A6%E6%83%85%E9%A1%B5%E9%85%8D%E5%9B%BE/1.png',
    detailUrl: '/industry/wellness-health'
  },
  {
    id: 'retail',
    name: '连锁零售',
    desc: '品牌商业空间与新零售体验设计，赋能线下场景转化与品牌资产沉淀',
    image: '/src/assets/images/case_jingkelong.jpg',
    detailUrl: '/industry/retail'
  },
  {
    id: 'beauty-personal-care',
    name: '美妆个护',
    desc: '高颜值个护美学与品牌视觉升级，打造深受年轻一代喜爱的时尚单品',
    image: '/src/assets/images/lkk_cosmetics_jars_1783302947995.jpg',
    detailUrl: '/industry/beauty-personal-care'
  }
];

const DefaultCounter: React.FC<{ target: number }> = ({ target }) => {
  const [count, setCount] = useState(0);
  const elementRef = useRef<HTMLSpanElement>(null);
  const animatedRef = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !animatedRef.current) {
          animatedRef.current = true;
          let start = 0;
          const duration = 2000;
          const stepTime = 20;
          const steps = duration / stepTime;
          const increment = target / steps;

          const timer = setInterval(() => {
            start += increment;
            if (start >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(Math.floor(start));
            }
          }, stepTime);
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [target]);

  return <span ref={elementRef}>{count}</span>;
};

interface IndustryCollectionPageProps {
  onOpenContactModal: () => void;
  onNavigateDetail?: (detailUrl: string) => void;
  CounterComponent?: React.FC<{ target: number }>;
}

export default function IndustryCollectionPage({
  onOpenContactModal,
  onNavigateDetail,
  CounterComponent,
}: IndustryCollectionPageProps) {

  const ActiveCounter = CounterComponent || DefaultCounter;

  const handleCardClick = (e: React.MouseEvent<HTMLAnchorElement>, url: string) => {
    e.preventDefault();
    if (onNavigateDetail) {
      onNavigateDetail(url);
    }
  };

  return (
    <div className="w-full bg-white text-[#1a1a1a] transition-colors">
      
      {/* SCOPED STYLES FOR INDUSTRY CARDS GRID & CORNER BADGE HOVER ANIMATION */}
      <style>{`
        .industry-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
        }
        @media (max-width: 1024px) {
          .industry-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }
        @media (max-width: 640px) {
          .industry-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 16px;
          }
        }

        .industry-card {
          position: relative;
          display: block;
          width: 100%;
          aspect-ratio: 3 / 4;
          border-radius: 20px;
          overflow: hidden;
          text-decoration: none;
          background: #000000;
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
          transition: transform 0.4s cubic-bezier(0.25, 1, 0.5, 1), box-shadow 0.4s ease;
        }

        /* 3大跨2列卡片：机器人, 智能家电, 食品酒饮 */
        .industry-card.large {
          grid-column: span 2;
          aspect-ratio: auto;
          height: 100%;
          min-height: 100%;
        }

        /* 尾部收尾卡片：美妆个护 (自动跨满桌面端4列，闭合整个Grid) */
        .industry-card.full {
          grid-column: span 4;
          aspect-ratio: auto;
          height: 240px;
        }

        @media (max-width: 1024px) {
          .industry-card.large {
            grid-column: span 2;
            aspect-ratio: auto;
            height: 100%;
          }
          .industry-card.full {
            grid-column: span 2;
            aspect-ratio: auto;
            height: 100%;
          }
        }

        @media (max-width: 640px) {
          .industry-card.large {
            grid-column: span 2;
            aspect-ratio: 16 / 9;
            height: auto;
          }
          .industry-card.full {
            grid-column: span 2;
            aspect-ratio: 16 / 9;
            height: auto;
          }
        }

        @media (hover: hover) {
          .industry-card:hover {
            transform: translateY(-4px);
            box-shadow: 0 16px 32px -8px rgba(0, 123, 199, 0.25);
          }
        }

        .industry-card-img {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.6s cubic-bezier(0.25, 1, 0.5, 1), filter 0.5s ease;
        }

        @media (hover: hover) {
          .industry-card:hover .industry-card-img {
            transform: scale(1.06);
            filter: brightness(0.9);
          }
        }

        /* 底部渐变暗影与文字标签 */
        .industry-card-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(0, 0, 0, 0.75) 0%, rgba(0, 0, 0, 0.15) 45%, transparent 100%);
          pointer-events: none;
          z-index: 1;
        }

        .industry-card-text {
          position: absolute;
          left: 20px;
          bottom: 20px;
          right: 20px;
          z-index: 2;
          text-align: left;
          pointer-events: none;
        }

        .industry-card-title {
          font-size: 52px;
          font-weight: 700;
          color: #FFFFFF;
          text-shadow: 0 2px 8px rgba(0, 0, 0, 0.5);
          margin-bottom: 10px;
          line-height: 1.15;
          font-family: var(--font-display, inherit);
        }

        @media (max-width: 1280px) {
          .industry-card-title {
            font-size: 42px;
          }
        }

        @media (max-width: 640px) {
          .industry-card-title {
            font-size: 32px;
          }
        }

        .industry-card-desc {
          font-size: 21px;
          font-weight: 300;
          letter-spacing: 0.05em;
          color: rgba(255, 255, 255, 0.85);
          line-height: 1.5;
          text-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        @media (max-width: 1280px) {
          .industry-card-desc {
            font-size: 18px;
          }
        }

        @media (max-width: 640px) {
          .industry-card-desc {
            font-size: 16px;
          }
        }

        /* 阶段二：右上角"撕角"/扇形蓝色色块 (#007BC7) */
        .industry-card-badge {
          position: absolute;
          top: 0;
          right: 0;
          width: 88px;
          height: 88px;
          background: #007BC7;
          border-bottom-left-radius: 100%;
          display: flex;
          align-items: flex-start;
          justify-content: flex-end;
          padding: 14px 14px 0 0;
          transform: scale(0);
          transform-origin: top right;
          opacity: 0;
          transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 0.25s ease;
          z-index: 5;
          pointer-events: none;
        }

        @media (hover: hover) {
          .industry-card:hover .industry-card-badge {
            transform: scale(1);
            opacity: 1;
          }
        }

        /* 阶段三：色块内部白色箭头，延迟0.15s淡入淡出 */
        .industry-card-badge svg {
          width: 30px;
          height: 30px;
          stroke: #FFFFFF;
          stroke-width: 2.8;
          opacity: 0;
          transform: scale(0.5);
          transition: opacity 0.2s ease 0.15s, transform 0.2s ease 0.15s;
        }

        @media (hover: hover) {
          .industry-card:hover .industry-card-badge svg {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>

      {/* 1. HERO - QUANTITATIVE STATS SECTION (REUSED FROM CATEGORY CONSULTING HERO) */}
      <section id="category-hero" className="py-16 md:py-24 text-center bg-radial from-neutral-50/70 via-neutral-50/30 to-white relative overflow-hidden border-b border-neutral-100">
        <div className="max-w-4xl mx-auto px-[5%] relative z-10 flex flex-col items-center">
          
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="h-[1.5px] w-8 bg-[#007BC7]"></span>
            <span className="text-[12px] tracking-[0.3em] font-bold text-[#007BC7] font-mono">CATEGORY INNOVATION STRATEGY</span>
            <span className="h-[1.5px] w-8 bg-[#007BC7]"></span>
          </div>

          <motion.h1 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="hero-title text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight text-neutral-900 leading-[1.05] font-display"
          >
            <span className="text-[#007BC7]">三品合一</span>
            <span className="text-neutral-900"> · </span>
            <span className="text-[#1a1a1a]">品类冠军</span>
          </motion.h1>

          <p className="text-xs md:text-sm font-semibold tracking-[0.3em] text-neutral-400 uppercase mt-4 font-mono">
            LKK Consulting & Design Group
          </p>

          <p className="text-sm md:text-base text-neutral-500 max-w-3xl mt-8 leading-[1.8] font-normal text-center text-balance">
            洛可可独创“三品合一”系统化创新路径，高度整合品类、产品与品牌三重维度，从顶层商业战略到爆品落地研发。我们不仅帮助企业寻找并确立高增长的黄金细分品类赛道，更通过极致设计力、颠覆性技术整合与超级品牌IP化包装，重塑产品溢价与核心话语权，协助大中型制造企业与高成长新锐品牌跨越增长周期，致力于成为细分赛道的品类霸主。
          </p>

          <div className="mt-8 flex items-center justify-center gap-4">
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

      {/* 1.5 QUANTIFIED ACHIEVEMENTS - GLASSMORPHISM CARDS SECTION */}
      <section className="achievement-section">
        <div className="max-w-[95%] w-full mx-auto">
          <div className="achievement-grid">
            {/* Card 1: 22年 行业经验积淀 */}
            <div className="achievement-card">
              <div className="achievement-number">
                <ActiveCounter target={22} />年
              </div>
              <div className="achievement-label">行业经验积淀</div>
            </div>

            {/* Card 2: 600+ 专业奖项认证 */}
            <div className="achievement-card">
              <div className="achievement-number">
                <ActiveCounter target={600} />+
              </div>
              <div className="achievement-label">专业奖项认证</div>
            </div>

            {/* Card 3: 1000+ 行业头部客户认可 */}
            <div className="achievement-card">
              <div className="achievement-number">
                <ActiveCounter target={1000} />+
              </div>
              <div className="achievement-label">行业头部客户认可</div>
            </div>

            {/* Card 4: 10000+ 产品成功落地 */}
            <div className="achievement-card">
              <div className="achievement-number">
                <ActiveCounter target={10000} />+
              </div>
              <div className="achievement-label">产品成功落地</div>
            </div>
          </div>
        </div>
      </section>

      {/* 2.1 科技垂直行业赛道 */}
      <section className="pt-16 md:pt-20 pb-10 bg-white">
        <div className="max-w-[95%] w-full mx-auto">
          
          <ScrollSectionTitle 
            badge="TECH TRACKS"
            title="科技垂直行业赛道"
            subtitle="聚焦硬核科技与智能硬件，涵盖机器人、智能3C、智能家电、智能医疗、智能装备、智能能源、智能交通等领域。"
            align="left"
          />

          <div className="industry-grid">
            {TECH_INDUSTRIES.map((ind, index) => {
              const isLarge = index === 0;
              const cardClass = `industry-card ${isLarge ? 'large' : ''} group cursor-pointer`;

              return (
                <a 
                  key={ind.id}
                  href={ind.detailUrl}
                  onClick={(e) => handleCardClick(e, ind.detailUrl)}
                  className={cardClass}
                >
                  <img 
                    src={ind.image} 
                    alt={ind.name} 
                    className="industry-card-img"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                  
                  <div className="industry-card-overlay" />

                  {/* 右上角蓝色"撕角"色块与白色箭头 */}
                  <div className="industry-card-badge">
                    <svg viewBox="0 0 24 24" fill="none" strokeWidth="2.8" stroke="currentColor">
                      <path d="M7 17L17 7M17 7H8M17 7V16" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>

                  {/* 底部两行文字信息：标题 + 简述 */}
                  <div className="industry-card-text">
                    <div className="industry-card-title">{ind.name}</div>
                    <div className="industry-card-desc">{ind.desc}</div>
                  </div>
                </a>
              );
            })}
          </div>

        </div>
      </section>

      {/* 2.2 消费垂直赛道 */}
      <section className="pt-6 pb-16 md:pb-24 bg-white">
        <div className="max-w-[95%] w-full mx-auto">
          
          <ScrollSectionTitle 
            badge="CONSUMER TRACKS"
            title="消费垂直行业赛道"
            subtitle="驱动新消费与品质生活方式升级，涵盖食品酒饮、宠物经济、文化创意、家居鞋服、大健康、连锁零售、美妆个护等领域。"
            align="left"
          />

          <div className="industry-grid">
            {CONSUMER_INDUSTRIES.map((ind, index) => {
              const isLarge = index === 0;
              const cardClass = `industry-card ${isLarge ? 'large' : ''} group cursor-pointer`;

              return (
                <a 
                  key={ind.id}
                  href={ind.detailUrl}
                  onClick={(e) => handleCardClick(e, ind.detailUrl)}
                  className={cardClass}
                >
                  <img 
                    src={ind.image} 
                    alt={ind.name} 
                    className="industry-card-img"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                  
                  <div className="industry-card-overlay" />

                  {/* 右上角蓝色"撕角"色块与白色箭头 */}
                  <div className="industry-card-badge">
                    <svg viewBox="0 0 24 24" fill="none" strokeWidth="2.8" stroke="currentColor">
                      <path d="M7 17L17 7M17 7H8M17 7V16" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>

                  {/* 底部两行文字信息：标题 + 简述 */}
                  <div className="industry-card-text">
                    <div className="industry-card-title">{ind.name}</div>
                    <div className="industry-card-desc">{ind.desc}</div>
                  </div>
                </a>
              );
            })}
          </div>

        </div>
      </section>

    </div>
  );
}
