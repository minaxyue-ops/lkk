import React, { useState, useRef, useEffect } from 'react';
import { ArrowRight, ArrowLeft, ChevronRight, CheckCircle2, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { CaseStudy } from '../types';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface CategoryConsultingPageProps {
  onOpenContactModal: () => void;
  onSelectCase: (cs: CaseStudy) => void;
  onNavigateDetail?: (url: string) => void;
  CounterComponent: React.FC<{ target: number }>;
}

interface ExperienceCardProps {
  title: string;
  imgSrc: string;
}

function ExperienceCard({ title, imgSrc }: ExperienceCardProps) {
  return (
    <div className="w-full">
      <div
        className="experience-card relative w-full aspect-[16/9.2] sm:aspect-[16/9] rounded-2xl overflow-hidden select-none"
        style={{
          boxShadow: '0 2px 6px rgba(0, 0, 0, 0.025), 0 6px 16px rgba(0, 0, 0, 0.038)',
        }}
      >
        <img
          src={imgSrc}
          alt={title}
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}

export default function CategoryConsultingPage({
  onOpenContactModal,
  onSelectCase,
  onNavigateDetail,
  CounterComponent,
}: CategoryConsultingPageProps) {
  const statsContainerRef = useRef<HTMLDivElement>(null);
  const [hoveredStage, setHoveredStage] = useState<number | null>(null);
  const [expandedMature, setExpandedMature] = useState<boolean>(false);
  const [activeDecisionNode, setActiveDecisionNode] = useState<number>(0);
  const [activeProblemIndex, setActiveProblemIndex] = useState<number>(0);

  useEffect(() => {
    // 1. SCROLL-DRIVEN STACKING STATS CARDS TIMELINE
    const statsContainer = statsContainerRef.current;
    let statsCtx: gsap.Context | null = null;

    const handleWindowLoad = () => {
      ScrollTrigger.refresh();
    };
    window.addEventListener('load', handleWindowLoad);

    if (statsContainer) {
      statsCtx = gsap.context(() => {
        const cards = statsContainer.querySelectorAll('.stat-card');
        if (cards.length) {
          const collapsedHeight = 108;
          const overlap = 52;

          const tl = gsap.timeline({ paused: true });

          cards.forEach((card, i) => {
            const eyebrow = card.querySelector('.stat-eyebrow');
            const details = card.querySelector('.card-details');
            const number = card.querySelector('.stat-number');

            tl.to(card, {
              height: collapsedHeight,
              marginTop: i === 0 ? 0 : -overlap,
              paddingTop: '1rem',
              paddingBottom: '1rem',
              borderRadius: '1rem',
              ease: 'none',
              duration: 1,
            }, i)
            .to([eyebrow, details], {
              opacity: 0,
              height: 0,
              marginTop: 0,
              marginBottom: 0,
              paddingTop: 0,
              paddingBottom: 0,
              overflow: 'hidden',
              ease: 'none',
              duration: 0.6,
            }, i)
            .to(number, {
              fontSize: '32px',
              ease: 'none',
              duration: 0.6,
            }, i);
          });

          const totalDuration = tl.duration();

          const pullSpacer = statsContainer.parentElement?.querySelector('.stats-bottom-pull-spacer');
          if (pullSpacer) {
            tl.to(pullSpacer, {
              marginTop: () => {
                const currentInitialHeight = statsContainer.offsetHeight;
                const currentFoldedHeight = 348;
                const heightDiff = Math.max(0, currentInitialHeight - currentFoldedHeight);
                return -heightDiff;
              },
              ease: 'none',
              duration: totalDuration,
            }, 0);
          }

          const pxPerSecond = 300;
          const scrollDistance = totalDuration * pxPerSecond;

          ScrollTrigger.create({
            trigger: statsContainer,
            start: 'top 80px',
            end: `+=${scrollDistance}`,
            scrub: true,
            pin: true,
            pinSpacing: true,
            animation: tl,
          });

          ScrollTrigger.refresh();
        }
      }, statsContainer);
    }

    const handleImageLoad = () => {
      ScrollTrigger.refresh();
    };
    const loadedImages = document.querySelectorAll('img');
    loadedImages.forEach((img) => {
      if (img.complete) {
        ScrollTrigger.refresh();
      } else {
        img.addEventListener('load', handleImageLoad);
      }
    });

    return () => {
      if (statsCtx) statsCtx.revert();
      window.removeEventListener('load', handleWindowLoad);
      loadedImages.forEach((img) => {
        img.removeEventListener('load', handleImageLoad);
      });
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  // 13 FAQ items
  const faqItems = [
    {
      q: "什么是洛可可的“三品合一”方法论？",
      a: "“三品合一”是洛可可集团历时22年沉淀的核心创新方法论，指将“品类创新（战略定位）”、“产品创新（极致工业设计/结构/体验）”与“品牌创新（视觉IP/营销话语/核心价值）”高度整合。通过三者高度协同，确保企业的战略定位不跑偏，设计能真正落地，品牌有爆发声量，助力企业从品类机会切入，直达商业爆品，成就细分品类冠军。"
    },
    {
      q: "品类创新咨询与传统的管理咨询/品牌咨询相比，核心差异在哪里？",
      a: "传统管理咨询侧重于宏观的财务战略和组织规划，品牌咨询侧重于视觉升级或单纯的营销创意。而洛可可的品类创新咨询是“战略+产品设计+量产落地”的三位一体。我们不仅帮助企业挖掘高成长、红利巨大的细分赛道（定义品类），更凭借自身行业领先的工业设计与供应链闭环能力，直接研发打造出承载该定位的爆品（产品创新）和超级符号（品牌创新），实现“咨询即爆品，落地即增长”。"
    },
    {
      q: "洛可可如何帮助企业在红海或空白市场中寻找新的品类机会？",
      a: "我们通过独创的“品类扫描仪”研究模型，基于用户痛点深挖、竞争对手防御空隙、产业技术革新红利、及政策和消费趋势变化进行全景扫描。我们会深入一线进行海量定量数据分析和深度定性洞察，过滤低天花板赛道，最终定位出一个既具备爆发性增长空间、又符合企业基因与制造壁垒的最佳“黄金细分品类”。"
    },
    {
      q: "品类创新“七步法”具体包含哪些闭环步骤？",
      a: "洛可可品类创新完整闭环包括：1. 洞察并锚定细分品类机会；2. 科学定义核心品类内涵与溢价点；3. 打造标志性的核心爆品（拳头产品设计）；4. 提炼占领心智的品类核心营销话语；5. 构建具辨识度的超级品牌视觉IP系统；6. 整合全域商业渠道与新媒体营销场景；7. 行业咨询专家与主笔设计团队进行“长期战术陪跑”。"
    },
    {
      q: "中小企业或传统制造型企业是否适合启动品类创新咨询？",
      a: "非常适合。传统制造型企业往往面临“有极强制造与代工能力、但无自主高毛利品牌，陷入低价竞争”的瓶颈。中小企业则往往资源受限，无法与头部巨头正面对冲。品类创新正是中小企业和传统制造业“以小博大、破局逆袭”的最优路径。通过精确定位一个高辨识度、低防御力的细分品类，饱和攻击，能够快速成为这个全新赛道的领跑者。"
    },
    {
      q: "洛可可如何保证品类咨询方案能真正上市量产，而不仅仅是纸上谈兵？",
      a: "洛可可是中国首批“国家级工业设计示范企业”，集团内拥有实力雄厚的外观设计师、机械结构工程团队、材料学家及打样测试中心，并在全国拥有强大的柔性制造供应链网络。在进行品类咨询和爆品定义伊始，设计工程和供应链团队就会全程介入。我们在方案阶段就会进行结构可行性、材料工艺难度和目标BOM成本核算评估，确保每一款方案都具备高度的量产上市可行性。"
    },
    {
      q: "“产品创新”在“三品合一”体系中扮演了怎样的角色？",
      a: "产品是品类最本质的硬件载体。没有极致的产品力作为护城河，再惊艳的品类战略和品牌口号也只是无源之水。洛可可产品创新不仅打磨令人惊艳的外观美学，更深入打通人性化的交互体验、先进的结构堆叠、创新的降本材料与人机工程学，让消费者在使用产品的瞬间，直观感知到新品类的核心价值，彻底转化为品牌忠实用户。"
    },
    {
      q: "“品牌创新 0-1 全案咨询”具体包含哪些服务？",
      a: "这是洛可可专门为从0到1孵化的新品牌，或成熟集团开拓新业务线量身定制的无忧管家式服务。具体涵盖：品牌核心定位、品牌专属命名、全套话语表达体系、标志性的超级LOGO及辅助符号视觉系统、高颜值的核心产品线包装设计、品牌视觉规范白皮书以及商业空间体验终端的整体设计，帮助新品牌生来便具备无可争议的主角姿态。"
    },
    {
      q: "洛可可目前主要服务哪些类型的客户？",
      a: "我们的服务涵盖世界500强企业（如诺基亚、西门子、三星、奥迪等）、国内500强行业支柱（如海尔、美的、茅台、青岛啤酒、京东、海底捞等），以及大量在细分行业深耕的中坚腰部企业，和高爆发性成长的行业新星品牌（如小仙炖、悦鲜活、库迪咖啡等）。无论企业处于哪个发展阶段，我们都能量身定制高ROI的创新战略方案。"
    },
    {
      q: "一个典型的品类创新咨询项目合作周期大概有多久？",
      a: "典型的系统化全案合作周期通常在 3 到 6 个月。前期深度用户洞察与品类定位大约需要 4 到 6 周；中期进行标志性爆品的产品设计（外观与结构工程）及超级品牌视觉IP/包装设计大约需要 8 到 12 周；后期开模打样、试产验证与营销话语提炼约需要 4 到 6 周。我们也会提供 12 个月以上的长期专家顾问委员会陪跑，确保成果彻底落地生根。"
    },
    {
      q: "洛可可品类创新咨询的收费模式是怎样的？",
      a: "我们坚持“一案一议”的透明定制化收费标准。收费会依据企业所处的产业赛道复杂度、项目需要覆盖的市场调研深度与广度、工业产品设计的工程研发技术难度、以及所需的供应链配对精度等因素综合合理核算。我们会给出不同层级的方案配置供企业灵活选择，力保每一分创新投入都能创造显著的商业增长溢价。"
    },
    {
      q: "洛可可在品类创新领域累积获得了哪些重磅奖项认证？",
      a: "洛可可是全球公认的创意设计实力灯塔，已累积荣获红点设计奖（Red Dot）、德国iF设计奖、美国IDEA、日本G-Mark、中国工业设计红星奖、台湾金点设计奖等在内的国内外重磅奖项超过 600 项。我们不仅注重美学价值，更将这些设计标准转化为企业在终端市场降维打击的绝对竞争壁垒。"
    },
    {
      q: "如何启动与洛可可创新咨询团队的第一步合作？",
      a: "您只需在页面底部的咨询表单中提交您的联系方式，或直接拨打我们的官方服务专线：400-062-3130。我们的垂直行业总监将在 24 小时内与您直接取得联系，开展深度的一对一线上/线下商业痛点诊断，并在会后免费为您匹配并出具第一版极具针对性的《项目定制建议书框架》。"
    }
  ];

  // Cases list (6 cases)
  const categoryCases: CaseStudy[] = [
    {
      id: 'case-v2-1',
      title: '悦鲜活年轻化产品包装创新咨询设计',
      description: '打造差异化视觉识别，以超瞬时黄金杀菌技术视觉传达，助力新品牌抢占年轻消费乳品高端红利市场。',
      logoType: 'yuexianhuo'
    },
    {
      id: 'case-v2-2',
      title: '良品铺子产品包装创新咨询设计',
      description: '打造高品质健康零食视觉体系与全新品牌超级符号，实现线下连锁走到线上电商全域零食新零售的体验跨越。',
      logoType: 'jingkelong'
    },
    {
      id: 'case-category-3',
      title: '三泉冷面品牌包装创新咨询设计',
      description: '将地道朝鲜族传统冷面进行现代化品类定位重构，用国潮插画与锁鲜结构开启便捷速食消费新风尚。',
      logoType: 'pophie'
    },
    {
      id: 'case-category-4',
      title: '飞鹤茁然品牌&产品包装创新咨询设计',
      description: '锁定儿童配方奶粉全新高增量黄金蓝海赛道，通过森林IP形象设计与锁鲜科技包装，传递天然纯净的生命原力。',
      logoType: 'cotti'
    },
    {
      id: 'case-category-5',
      title: '庐阳城市品牌文创整案创新咨询设计',
      description: '深度解构合肥庐阳千年古城文脉，打造特色超级文创IP矩阵与全场景商业伴手礼，赋能现代都市文旅产业升级。',
      logoType: 'sizherui'
    },
    {
      id: 'case-category-6',
      title: '四川小平故里红色文创产品创新咨询设计',
      description: '开辟兼具时代温度与生活美学的新红色文创品类标杆。融合历史教育场景，研发高品质日常生活好物，传递伟人故里情怀。',
      logoType: 'estun'
    }
  ];

  // Placeholder backgrounds for cases to keep UI high contrast and stylish
  const getPlaceholderBg = (idx: number) => {
    const bgs = [
      'bg-gradient-to-br from-sky-50 to-blue-50/20',
      'bg-gradient-to-br from-red-50 to-orange-50/20',
      'bg-gradient-to-br from-emerald-50 to-teal-50/20',
      'bg-gradient-to-br from-purple-50 to-indigo-50/20',
      'bg-gradient-to-br from-amber-50 to-orange-50/20',
      'bg-gradient-to-br from-rose-50 to-red-50/20',
    ];
    return bgs[idx % bgs.length];
  };

  const getCaseV2Data = (cs: CaseStudy) => {
    switch (cs.id) {
      case 'case-v2-1':
        return { brand: '悦鲜活', title: cs.title, desc: cs.description };
      case 'case-v2-2':
        return { brand: '良品铺子', title: cs.title, desc: cs.description };
      case 'case-category-3':
        return { brand: '三泉冷面', title: cs.title, desc: cs.description };
      case 'case-category-4':
        return { brand: '飞鹤茁然', title: cs.title, desc: cs.description };
      case 'case-category-5':
        return { brand: '庐阳文创', title: cs.title, desc: cs.description };
      case 'case-category-6':
        return { brand: '小平故里', title: cs.title, desc: cs.description };
      default:
        return { brand: '洛可可咨询', title: cs.title, desc: cs.description };
    }
  };

  // Local images matching
  const getCaseImage = (cs: CaseStudy) => {
    if (cs.id === 'case-v2-1') return '/src/assets/images/case_yuexianhuo.jpg';
    if (cs.id === 'case-v2-2') return '/src/assets/images/case_jingkelong.jpg';
    return null;
  };

  return (
    <div className="w-full bg-white">
      
      {/* 1. HERO - QUANTITATIVE STATS SECTION */}
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

          <div className="mt-8">
            <button 
              onClick={() => onNavigateDetail ? onNavigateDetail('/three-in-one') : onOpenContactModal()}
              className="bg-[#007BC7] hover:bg-[#005F96] text-white font-bold px-8 py-3.5 rounded-full text-sm transition-all duration-300 shadow-md flex items-center gap-2 cursor-pointer group"
            >
              三品合一
              <ArrowRight className="w-4 h-4 text-white transform group-hover:translate-x-1 transition-transform" />
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
                <CounterComponent target={22} />年
              </div>
              <div className="achievement-label">行业经验积淀</div>
            </div>

            {/* Card 2: 600+ 专业奖项认证 */}
            <div className="achievement-card">
              <div className="achievement-number">
                <CounterComponent target={600} />+
              </div>
              <div className="achievement-label">专业奖项认证</div>
            </div>

            {/* Card 3: 1000+ 行业头部客户认可 */}
            <div className="achievement-card">
              <div className="achievement-number">
                <CounterComponent target={1000} />+
              </div>
              <div className="achievement-label">行业头部客户认可</div>
            </div>

            {/* Card 4: 10000+ 产品成功落地 */}
            <div className="achievement-card">
              <div className="achievement-number">
                <CounterComponent target={10000} />+
              </div>
              <div className="achievement-label">产品成功落地</div>
            </div>
          </div>
        </div>
      </section>

      {/* THREE-IN-ONE METHODOLOGY ANIMATION SECTION (三品合一方法论动态信息图: 无侧边距、与上下板块0间距满屏 16:9比例) */}
      <section id="category-collection-methodology-infographic" className="w-full bg-[#FFFFFF] p-0 m-0 overflow-hidden leading-none block">
        <div className="w-full aspect-[16/9] p-0 m-0 overflow-hidden">
          <video 
            src="https://github.com/minaxyue-ops/MINA/releases/download/1/2026-08-20.163819.mp4" 
            autoPlay 
            loop 
            muted 
            playsInline
            className="w-full h-full object-cover block select-none p-0 m-0 border-none outline-none"
          />
        </div>
      </section>

      {/* 2. SERVICES - THREE CARD SERVICE AREA */}
      <section id="category-services" className="py-20 bg-[#F0F0F0]/50 border-b border-[#E5E5E5]">
        <div className="max-w-[95%] w-full mx-auto relative z-10">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16 gap-6">
            <div>
              <span className="text-xs font-semibold text-[#007BC7] uppercase tracking-widest font-mono block mb-2">EXPERTISE</span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#1D1D1F] font-display">
                专业服务
              </h2>
            </div>
            <p className="text-sm md:text-base text-[#86868B] max-w-md leading-relaxed font-normal">
              我们依托于核心的“战略定位+整合研发设计”闭环服务能力，提供从品类、产品、到品牌的高爆发全案咨询。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Card 1: 三品合一品类咨询 */}
            <motion.div 
              whileHover={{ y: -8 }}
              onClick={() => onNavigateDetail?.('/three-in-one-category')}
              className="group bg-white rounded-3xl overflow-hidden border border-[#E5E5E5] hover:border-[#007BC7] shadow-sm hover:shadow-xl transition-all duration-400 ease-[cubic-bezier(0.65,0,0.35,1)] flex flex-col justify-between cursor-pointer"
            >
              <div className="h-64 relative overflow-hidden bg-neutral-100 border-b border-[#E5E5E5] flex items-center justify-center">
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md text-[10px] font-bold text-[#1a1a1a] px-3 py-1 rounded-full border border-[#E5E5E5] uppercase tracking-wider font-mono">
                  CATEGORY INNOVATION
                </div>
              </div>
              <div className="p-6 sm:p-8 flex-grow flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-[#1a1a1a] group-hover:text-[#007BC7] transition-colors duration-400 ease-[cubic-bezier(0.65,0,0.35,1)] mb-4 font-display">
                    三品合一品类咨询
                  </h3>
                  <ul className="grid grid-cols-2 gap-x-3 gap-y-2.5">
                    {['品类竞争', '用户洞察', '技术规划', '品类战略', '品类品牌', '品类产品', '品类营销'].map((b, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-[#4D4D4D] leading-tight">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#007BC7] shrink-0"></span>
                        <span className="truncate">{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-6 pt-5 sm:mt-8 sm:pt-6 border-t border-[#E5E5E5] flex items-center justify-between">
                  <span className="text-xs text-[#8C8C8C] font-semibold uppercase tracking-wider group-hover:text-[#007BC7] transition-colors duration-400 ease-[cubic-bezier(0.65,0,0.35,1)]">
                    立即对接
                  </span>
                  <div className="w-10 h-10 rounded-full bg-neutral-50 group-hover:bg-[#007BC7] flex items-center justify-center text-[#8C8C8C] group-hover:text-white transition-all duration-400 ease-[cubic-bezier(0.65,0,0.35,1)] transform group-hover:rotate-45">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Card 2: 产品创新0-1全案咨询 */}
            <motion.div 
              whileHover={{ y: -8 }}
              onClick={() => onNavigateDetail?.('/product-innovation-consulting')}
              className="group bg-white rounded-3xl overflow-hidden border border-[#E5E5E5] hover:border-[#007BC7] shadow-sm hover:shadow-xl transition-all duration-400 ease-[cubic-bezier(0.65,0,0.35,1)] flex flex-col justify-between cursor-pointer"
            >
              <div className="h-64 relative overflow-hidden bg-neutral-100 border-b border-[#E5E5E5] flex items-center justify-center">
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md text-[10px] font-bold text-[#1a1a1a] px-3 py-1 rounded-full border border-[#E5E5E5] uppercase tracking-wider font-mono">
                  PRODUCT INNOVATION
                </div>
              </div>
              <div className="p-6 sm:p-8 flex-grow flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-[#1a1a1a] group-hover:text-[#007BC7] transition-colors duration-400 ease-[cubic-bezier(0.65,0,0.35,1)] mb-4 font-display">
                    产品创新0-1全案咨询
                  </h3>
                  <ul className="grid grid-cols-2 gap-x-3 gap-y-2.5">
                    {['产品线规划', '产品家族化', '产品定义', '产品美学', '产品落地'].map((b, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-[#4D4D4D] leading-tight">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#007BC7] shrink-0"></span>
                        <span className="truncate">{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-6 pt-5 sm:mt-8 sm:pt-6 border-t border-[#E5E5E5] flex items-center justify-between">
                  <span className="text-xs text-[#8C8C8C] font-semibold uppercase tracking-wider group-hover:text-[#007BC7] transition-colors duration-400 ease-[cubic-bezier(0.65,0,0.35,1)]">
                    立即对接
                  </span>
                  <div className="w-10 h-10 rounded-full bg-neutral-50 group-hover:bg-[#007BC7] flex items-center justify-center text-[#8C8C8C] group-hover:text-white transition-all duration-400 ease-[cubic-bezier(0.65,0,0.35,1)] transform group-hover:rotate-45">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Card 3: 品牌创新0-1全案咨询 */}
            <motion.div 
              whileHover={{ y: -8 }}
              onClick={() => onNavigateDetail?.('/brand-innovation-consulting')}
              className="group bg-white rounded-3xl overflow-hidden border border-[#E5E5E5] hover:border-[#007BC7] shadow-sm hover:shadow-xl transition-all duration-400 ease-[cubic-bezier(0.65,0,0.35,1)] flex flex-col justify-between cursor-pointer"
            >
              <div className="h-64 relative overflow-hidden bg-neutral-100 border-b border-[#E5E5E5] flex items-center justify-center">
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md text-[10px] font-bold text-[#1a1a1a] px-3 py-1 rounded-full border border-[#E5E5E5] uppercase tracking-wider font-mono">
                  BRAND INNOVATION
                </div>
              </div>
              <div className="p-6 sm:p-8 flex-grow flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-[#1a1a1a] group-hover:text-[#007BC7] transition-colors duration-400 ease-[cubic-bezier(0.65,0,0.35,1)] mb-4 font-display">
                    品牌创新0-1全案咨询
                  </h3>
                  <ul className="grid gap-2.5">
                    {['品牌价值', '品牌定位', '品牌话语', '品牌美学'].map((b, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-[#4D4D4D] leading-tight">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#007BC7] shrink-0"></span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-6 pt-5 sm:mt-8 sm:pt-6 border-t border-[#E5E5E5] flex items-center justify-between">
                  <span className="text-xs text-[#8C8C8C] font-semibold uppercase tracking-wider group-hover:text-[#007BC7] transition-colors duration-400 ease-[cubic-bezier(0.65,0,0.35,1)]">
                    立即对接
                  </span>
                  <div className="w-10 h-10 rounded-full bg-neutral-50 group-hover:bg-[#007BC7] flex items-center justify-center text-[#8C8C8C] group-hover:text-white transition-all duration-400 ease-[cubic-bezier(0.65,0,0.35,1)] transform group-hover:rotate-45">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 3. SERVICE MATCHING / 01 - 找到你的问题，再找到适合你的服务 (STRATEGIC DECISION ROADMAP REDESIGN) */}
      <section id="service-matching" className="py-24 lg:py-36 bg-[#FAFAFA] w-full border-b border-[#E5E5E5] relative overflow-hidden">
        
        {/* Subtle Architectural Strategic Background Grid and Guideline Accents */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.035]">
          <div className="w-full h-full" style={{ backgroundImage: 'radial-gradient(#1A1A1A 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
        </div>

        <div className="max-w-[95%] xl:max-w-[1440px] w-full mx-auto relative z-10">
          
          {/* Section Header: International Editorial & Strategic Stature */}
          <motion.div 
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 lg:mb-20 gap-8 pb-8 border-b border-[#E5E5E5]"
          >
            <div className="max-w-2xl">
              <div className="flex items-center gap-2.5 mb-3">
                <span className="inline-block w-2 h-2 rounded-full bg-[#007BC7] animate-pulse"></span>
                <span className="text-xs font-bold text-[#007BC7] uppercase tracking-[0.25em] font-mono">
                  SERVICE MATCHING / 01
                </span>
                <span className="text-xs text-[#8C8C8C] font-mono">· STRATEGIC DECISION PATHWAY</span>
              </div>
              <h2 className="section-title scroll-reveal-heading text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-[#1A1A1A] font-display leading-[1.12]">
                找到你的问题，再找到适合你的服务
              </h2>
            </div>
            
            <div className="lg:max-w-md text-left">
              <p className="text-sm md:text-base text-[#4D4D4D] font-normal leading-relaxed">
                根据你的品类阶段、用户心智与业务问题，匹配更适合你的创新服务。
              </p>
              <div className="mt-3 flex items-center gap-2 text-xs font-mono text-[#007BC7] font-semibold">
                <span>问题识别</span>
                <span className="text-[#8C8C8C]">→</span>
                <span>方向判断</span>
                <span className="text-[#8C8C8C]">→</span>
                <span>创新落地</span>
              </div>
            </div>
          </motion.div>

          {/* Interactive Diagnosis State Indicator & Global Strategic Phase Controller */}
          <div className="mb-12 bg-white border border-[#E5E5E5] rounded-2xl p-5 sm:p-6 shadow-xs transition-all duration-300">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
              <div className="flex items-start sm:items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#007BC7]/10 text-[#007BC7] flex items-center justify-center font-mono font-bold text-sm shrink-0 border border-[#007BC7]/20">
                  {hoveredStage !== null ? `0${hoveredStage + 1}` : '★'}
                </div>
                <div className="text-left">
                  <div className="text-sm sm:text-base font-bold text-[#1A1A1A] flex items-center gap-2 flex-wrap">
                    <span>
                      {hoveredStage === 0 && '当前诊断阶段：01 导入期'}
                      {hoveredStage === 1 && '当前诊断阶段：02 成长期'}
                      {hoveredStage === 2 && '当前诊断阶段：03 成熟期'}
                      {hoveredStage === 3 && '当前诊断阶段：04 衰退期'}
                      {hoveredStage === null && '全景战略决策视图：请根据企业当前核心挑战匹配创新路径'}
                    </span>
                    {hoveredStage !== null && (
                      <span className="px-2 py-0.5 rounded text-[11px] font-mono font-medium bg-[#007BC7] text-white">
                        已激活重点推荐
                      </span>
                    )}
                  </div>
                  <div className="text-xs sm:text-sm text-[#8C8C8C] mt-1 leading-relaxed">
                    {hoveredStage === 0 && '核心挑战：品类认知模糊 · 价值标准未立 · 需明确赛道与原型 · 优先推荐【品类问题】路径'}
                    {hoveredStage === 1 && '核心挑战：竞争对手跟进 · 需做强产品体验与产品线 · 抢占品牌第一记忆 · 优先推荐【产品】与【品牌】路径'}
                    {hoveredStage === 2 && '核心挑战：同质化竞争加剧 · 增长见顶 · 需价值重构或分化新品类 · 优先推荐【品类/产品/品牌】深度协同'}
                    {hoveredStage === 3 && '核心挑战：旧品类退潮 · 心智转移 · 需开辟第二增长曲线与新赛道 · 优先推荐【品类创新】全案重构'}
                    {hoveredStage === null && '支持按阶段筛选重点方向，或沿下方三大战略判断路径（品类 → 产品 → 品牌）直接深入：'}
                  </div>
                </div>
              </div>

              {/* Quick Stage Switch Controller */}
              <div className="flex items-center gap-2 self-start lg:self-auto shrink-0 flex-wrap">
                <span className="text-xs font-mono text-[#8C8C8C] mr-1 hidden sm:inline font-medium">阶段模拟诊断:</span>
                {[
                  { id: 0, label: '01 导入期' },
                  { id: 1, label: '02 成长期' },
                  { id: 2, label: '03 成熟期' },
                  { id: 3, label: '04 衰退期' },
                ].map((st) => (
                  <button
                    key={st.id}
                    onClick={() => setHoveredStage(hoveredStage === st.id ? null : st.id)}
                    className={`px-3.5 py-1.5 rounded-lg text-xs font-mono font-medium transition-all duration-200 cursor-pointer ${
                      hoveredStage === st.id
                        ? 'bg-[#007BC7] text-white font-bold shadow-xs scale-105'
                        : 'bg-neutral-100 text-[#4D4D4D] hover:bg-neutral-200 hover:text-[#1A1A1A]'
                    }`}
                  >
                    {st.label}
                  </button>
                ))}
                {hoveredStage !== null && (
                  <button
                    onClick={() => setHoveredStage(null)}
                    className="px-2.5 py-1.5 text-xs text-[#8C8C8C] hover:text-[#1A1A1A] underline font-mono cursor-pointer ml-1"
                  >
                    清除重置
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* UNIFIED DECISION ROADMAP CONTAINER */}
          <div 
            id="screen-problems-accordion" 
            className="pb-10 lg:pb-12 max-w-[98%] xl:max-w-[1560px] w-full mx-auto relative z-10"
          >
            {/* Main Card Container */}
            <div className="w-full bg-[#FBFBFD] rounded-[32px] sm:rounded-[36px] p-4 sm:p-6 lg:p-7 border border-black/[0.04] shadow-[0_4px_24px_rgba(0,0,0,0.02)]">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-6 items-stretch">
                
                {/* Left Column: Stacked Diagnostic Question Cards (lg:col-span-6) */}
                <div className="lg:col-span-6 flex flex-col justify-between gap-2 h-full">
                  {[
                    {
                      id: '01',
                      idx: 0,
                      title: '品类问题',
                      subLabel: '方向判断',
                      description: '探寻增量赛道与新品类定义，打破内卷与价格战',
                    },
                    {
                      id: '02',
                      idx: 1,
                      title: '产品问题',
                      subLabel: '从机会到产品落地',
                      description: '打造极致用户体验与爆品原型，打通工程与量产交付',
                    },
                    {
                      id: '03',
                      idx: 2,
                      title: '品牌问题',
                      subLabel: '建立用户选择理由',
                      description: '沉淀品牌心智资产与独特表达，构建超级符号与高溢价',
                    },
                  ].map((item) => {
                    const isActive = activeProblemIndex === item.idx;

                    return (
                      <div
                        key={item.id}
                        onClick={() => setActiveProblemIndex(item.idx)}
                        className={`group relative overflow-hidden rounded-[24px] cursor-pointer transition-all duration-300 flex-1 flex items-center select-none ${
                          isActive
                            ? 'bg-white shadow-[0_6px_20px_rgba(0,0,0,0.05)]'
                            : 'bg-[#F2F2F5] hover:bg-[#EBEBEF]'
                        }`}
                      >
                        {/* Number sits on the left, vertically centered, with left ~30% submerged/cut off by card container overflow (enlarged by 30%) */}
                        <div className="absolute -left-7 sm:-left-9 lg:-left-11 top-1/2 -translate-y-1/2 z-0 pointer-events-none select-none flex items-center">
                          <span 
                            className={`text-[120px] sm:text-[140px] lg:text-[152px] font-black font-sans tracking-tighter leading-none block transition-colors duration-300 ${
                              isActive ? 'text-[#1D1D1F]' : 'text-[#D2D2D7]'
                            }`}
                          >
                            {item.id}
                          </span>
                        </div>

                        {/* Content positioned in independent layer with left offset for larger number */}
                        <div className="relative z-10 py-5 sm:py-6 pr-5 sm:pr-6 pl-28 sm:pl-36 lg:pl-42 flex flex-col justify-center text-left w-full">
                          <div className="flex items-center gap-2 mb-1.5 flex-wrap">
                            <h4 className="text-xl sm:text-2xl font-bold font-display text-[#1D1D1F] tracking-tight leading-none">
                              {item.title}
                            </h4>
                            <span className="text-xs font-mono text-[#86868B]">
                              · {item.subLabel}
                            </span>
                          </div>

                          <p className="text-xs sm:text-sm leading-relaxed text-[#48484A] font-normal">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Right Column: Hero Visual Card + Diagnostic Grid (lg:col-span-6) */}
                <div className="lg:col-span-6 h-full flex flex-col">
                  <AnimatePresence mode="wait">
                    {activeProblemIndex === 0 && (
                      <motion.div 
                        key="service-panel-0"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                        className="bg-white rounded-[24px] sm:rounded-[28px] overflow-hidden border border-black/[0.04] shadow-xs flex flex-col justify-between h-full text-left"
                      >
                        {/* Top Visual Image Banner - 0 Distance to Top/Left/Right, uniform bottom rounded corners */}
                        <div className="relative w-full h-[220px] sm:h-[240px] rounded-b-[24px] sm:rounded-b-[28px] overflow-hidden select-none">
                          <img 
                            src="/src/assets/images/workshop_executive_scene_1787620007630.jpg"
                            alt="三品合一品类创新咨询"
                            referrerPolicy="no-referrer"
                            className="w-full h-full object-cover"
                          />
                          {/* Gradient Scrim */}
                          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-black/10" />

                          {/* Bottom Left Title on Image */}
                          <div className="absolute bottom-4 left-5 right-48 z-10 text-white">
                            <h4 className="text-xl sm:text-2xl font-bold font-display tracking-tight text-white leading-tight">
                              三品合一品类创新咨询
                            </h4>
                          </div>

                          {/* Bottom Right CTA Action Button - White Background */}
                          <div className="absolute bottom-4 right-4 z-10">
                            <button 
                              onClick={() => onNavigateDetail?.('/three-in-one-category')}
                              className="px-4.5 sm:px-5 py-2 sm:py-2.5 rounded-full bg-white hover:bg-[#F5F5F7] active:scale-[0.98] text-[#1D1D1F] text-xs sm:text-sm font-semibold transition-all duration-200 flex items-center gap-1.5 shadow-[0_4px_16px_rgba(0,0,0,0.18)] group cursor-pointer"
                            >
                              <span>了解三品合一品类创新</span>
                              <ArrowRight className="w-4 h-4 text-[#1D1D1F] group-hover:translate-x-0.5 transition-transform" />
                            </button>
                          </div>
                        </div>

                        {/* Content Below Image */}
                        <div className="p-5 sm:p-6 flex flex-col justify-between flex-1">
                          {/* Diagnostic Problem Tags Grid */}
                          <div className="space-y-3 mb-4">
                            <div className="flex items-center gap-2">
                              <span className="px-2.5 py-0.5 bg-[#1D1D1F] text-white text-xs font-mono font-medium rounded">
                                当你的核心问题是：
                              </span>
                            </div>

                            {/* 2x2 Problem Question Cards */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                              {[
                                '只能打价格战',
                                '增长没有新方向',
                                '产品和品牌没有形成合力',
                                '想做新品类，却缺少路径',
                              ].map((q, qIdx) => (
                                <div 
                                  key={qIdx}
                                  className="flex items-center gap-2.5 p-2.5 px-3.5 rounded-xl bg-[#F5F5F7]"
                                >
                                  <div className="w-1.5 h-1.5 rounded-full bg-[#8E8E93] shrink-0" />
                                  <span className="text-xs sm:text-sm font-medium text-[#1D1D1F]">
                                    {q}
                                  </span>
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* Core Statement Question Callout */}
                          <div className="py-3 px-4 bg-[#F5F5F7] rounded-xl flex items-center justify-between gap-4">
                            <div>
                              <span className="text-[10px] font-mono uppercase tracking-wider text-[#86868B] font-semibold block mb-0.5">
                                核心解决
                              </span>
                              <span className="text-sm sm:text-base text-[#1D1D1F] font-semibold font-display">
                                “我的产品应该进入什么方向？”
                              </span>
                            </div>
                            <span className="text-xs font-mono text-[#86868B] shrink-0">方向判断</span>
                          </div>
                        </div>
                      </motion.div>
                    )}

                    {activeProblemIndex === 1 && (
                      <motion.div 
                        key="service-panel-1"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                        className="bg-white rounded-[24px] sm:rounded-[28px] overflow-hidden border border-black/[0.04] shadow-xs flex flex-col justify-between h-full text-left"
                      >
                        {/* Top Visual Image Banner - 0 Distance to Top/Left/Right, uniform bottom rounded corners */}
                        <div className="relative w-full h-[220px] sm:h-[240px] rounded-b-[24px] sm:rounded-b-[28px] overflow-hidden select-none">
                          <img 
                            src="/src/assets/images/pillar_product_ux_1787620090549.jpg"
                            alt="产品创新0-1全案咨询"
                            referrerPolicy="no-referrer"
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-black/10" />

                          {/* Bottom Left Title on Image */}
                          <div className="absolute bottom-4 left-5 right-48 z-10 text-white">
                            <h4 className="text-xl sm:text-2xl font-bold font-display tracking-tight text-white leading-tight">
                              产品创新0-1全案咨询
                            </h4>
                          </div>

                          {/* Bottom Right CTA Action Button - White Background */}
                          <div className="absolute bottom-4 right-4 z-10">
                            <button 
                              onClick={() => onNavigateDetail?.('/product-innovation-consulting')}
                              className="px-4.5 sm:px-5 py-2 sm:py-2.5 rounded-full bg-white hover:bg-[#F5F5F7] active:scale-[0.98] text-[#1D1D1F] text-xs sm:text-sm font-semibold transition-all duration-200 flex items-center gap-1.5 shadow-[0_4px_16px_rgba(0,0,0,0.18)] group cursor-pointer"
                            >
                              <span>了解产品创新全案</span>
                              <ArrowRight className="w-4 h-4 text-[#1D1D1F] group-hover:translate-x-0.5 transition-transform" />
                            </button>
                          </div>
                        </div>

                        {/* Content Below Image */}
                        <div className="p-5 sm:p-6 flex flex-col justify-between flex-1">
                          {/* Diagnostic Problem Tags Grid */}
                          <div className="space-y-3 mb-4">
                            <div className="flex items-center gap-2">
                              <span className="px-2.5 py-0.5 bg-[#1D1D1F] text-white text-xs font-mono font-medium rounded">
                                当你的核心问题是：
                              </span>
                            </div>

                            {/* 2x2 Problem Question Cards */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                              {[
                                '有想法，没有产品路径',
                                '产品缺少差异化',
                                '设计无法量产',
                                '研发与市场脱节',
                              ].map((q, qIdx) => (
                                <div 
                                  key={qIdx}
                                  className="flex items-center gap-2.5 p-2.5 px-3.5 rounded-xl bg-[#F5F5F7]"
                                >
                                  <div className="w-1.5 h-1.5 rounded-full bg-[#8E8E93] shrink-0" />
                                  <span className="text-xs sm:text-sm font-medium text-[#1D1D1F]">
                                    {q}
                                  </span>
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* Core Statement Question Callout */}
                          <div className="py-3 px-4 bg-[#F5F5F7] rounded-xl flex items-center justify-between gap-4">
                            <div>
                              <span className="text-[10px] font-mono uppercase tracking-wider text-[#86868B] font-semibold block mb-0.5">
                                核心解决
                              </span>
                              <span className="text-sm sm:text-base text-[#1D1D1F] font-semibold font-display">
                                “我应该打造什么产品？”
                              </span>
                            </div>
                            <span className="text-xs font-mono text-[#86868B] shrink-0">产品落地</span>
                          </div>
                        </div>
                      </motion.div>
                    )}

                    {activeProblemIndex === 2 && (
                      <motion.div 
                        key="service-panel-2"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                        className="bg-white rounded-[24px] sm:rounded-[28px] overflow-hidden border border-black/[0.04] shadow-xs flex flex-col justify-between h-full text-left"
                      >
                        {/* Top Visual Image Banner - 0 Distance to Top/Left/Right, uniform bottom rounded corners */}
                        <div className="relative w-full h-[220px] sm:h-[240px] rounded-b-[24px] sm:rounded-b-[28px] overflow-hidden select-none">
                          <img 
                            src="/src/assets/images/pillar_brand_semiotics_1787620103763.jpg"
                            alt="品牌创新0-1全案咨询"
                            referrerPolicy="no-referrer"
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-black/10" />

                          {/* Bottom Left Title on Image */}
                          <div className="absolute bottom-4 left-5 right-48 z-10 text-white">
                            <h4 className="text-xl sm:text-2xl font-bold font-display tracking-tight text-white leading-tight">
                              品牌创新0-1全案咨询
                            </h4>
                          </div>

                          {/* Bottom Right CTA Action Button - White Background */}
                          <div className="absolute bottom-4 right-4 z-10">
                            <button 
                              onClick={() => onNavigateDetail?.('/brand-innovation-consulting')}
                              className="px-4.5 sm:px-5 py-2 sm:py-2.5 rounded-full bg-white hover:bg-[#F5F5F7] active:scale-[0.98] text-[#1D1D1F] text-xs sm:text-sm font-semibold transition-all duration-200 flex items-center gap-1.5 shadow-[0_4px_16px_rgba(0,0,0,0.18)] group cursor-pointer"
                            >
                              <span>了解品牌创新全案</span>
                              <ArrowRight className="w-4 h-4 text-[#1D1D1F] group-hover:translate-x-0.5 transition-transform" />
                            </button>
                          </div>
                        </div>

                        {/* Content Below Image */}
                        <div className="p-5 sm:p-6 flex flex-col justify-between flex-1">
                          {/* Diagnostic Problem Tags Grid */}
                          <div className="space-y-3 mb-4">
                            <div className="flex items-center gap-2">
                              <span className="px-2.5 py-0.5 bg-[#1D1D1F] text-white text-xs font-mono font-medium rounded">
                                当你的核心问题是：
                              </span>
                            </div>

                            {/* 2x2 Problem Question Cards */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                              {[
                                '品牌定位不清',
                                '视觉缺少统一性',
                                '产品有价值，品牌无溢价',
                                '传播缺少核心表达',
                              ].map((q, qIdx) => (
                                <div 
                                  key={qIdx}
                                  className="flex items-center gap-2.5 p-2.5 px-3.5 rounded-xl bg-[#F5F5F7]"
                                >
                                  <div className="w-1.5 h-1.5 rounded-full bg-[#8E8E93] shrink-0" />
                                  <span className="text-xs sm:text-sm font-medium text-[#1D1D1F]">
                                    {q}
                                  </span>
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* Core Statement Question Callout */}
                          <div className="py-3 px-4 bg-[#F5F5F7] rounded-xl flex items-center justify-between gap-4">
                            <div>
                              <span className="text-[10px] font-mono uppercase tracking-wider text-[#86868B] font-semibold block mb-0.5">
                                核心解决
                              </span>
                              <span className="text-sm sm:text-base text-[#1D1D1F] font-semibold font-display">
                                “我的品牌如何建立壁垒？”
                              </span>
                            </div>
                            <span className="text-xs font-mono text-[#86868B] shrink-0">选择理由</span>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </div>

          {/* Strategic Consultation Guidance Banner (Grand Editorial Layout) */}
          <div className="bg-white border border-neutral-200/70 rounded-3xl p-8 sm:p-12 lg:p-14 text-center shadow-[0_4px_24px_rgba(0,0,0,0.03)] relative overflow-hidden">
            {/* Background ambient lighting */}
            <div className="absolute -right-16 -bottom-16 w-80 h-80 bg-[#007BC7]/[0.03] rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -left-16 -top-16 w-80 h-80 bg-[#007BC7]/[0.03] rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 max-w-3xl mx-auto">
              <span className="text-xs font-mono font-bold tracking-widest text-[#007BC7] uppercase block mb-3">
                STRATEGIC DIAGNOSIS & ADVISORY
              </span>
              <h4 className="text-2xl sm:text-3xl lg:text-[36px] font-extrabold text-[#1D1D1F] font-display tracking-tight mb-3">
                不确定当前所处的品类阶段与问题？
              </h4>
              <p className="text-sm sm:text-base text-[#424245] leading-relaxed mb-8 max-w-xl mx-auto font-normal">
                与洛可可资深战略咨询顾问展开 1 对 1 诊断沟通，梳理企业业务现状与创新契机。
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <button
                  onClick={onOpenContactModal}
                  className="w-full sm:w-auto h-12 sm:h-13 px-8 bg-[#007BC7] hover:bg-[#005F96] text-white text-sm font-semibold rounded-xl transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer shadow-[0_2px_8px_rgba(0,123,199,0.25)] hover:shadow-[0_4px_14px_rgba(0,123,199,0.35)]"
                >
                  <span>预约专家品类诊断</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  onClick={() => onNavigateDetail?.('/three-in-one-category')}
                  className="w-full sm:w-auto h-12 sm:h-13 px-6 bg-transparent hover:bg-neutral-100/70 text-[#1D1D1F] hover:text-[#007BC7] text-sm font-medium rounded-xl transition-colors flex items-center justify-center gap-2 cursor-pointer group"
                >
                  <span>查看三品合一全案方法论</span>
                  <ArrowRight className="w-4 h-4 text-[#86868B] group-hover:text-[#007BC7] group-hover:translate-x-0.5 transition-all" />
                </button>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 3. CASES - GRID WORK REUSING HOMEPAGE DESIGN SYSTEM (3 COLUMNS x 2 ROWS) - RENAME TO 案例锦集 */}
      <section id="category-cases" className="py-20 bg-white border-b border-[#E5E5E5]">
        <div className="max-w-[95%] w-full mx-auto relative z-10">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16 gap-6">
            <div>
              <span className="text-xs font-semibold text-[#007BC7] uppercase tracking-widest font-mono block mb-2">PORTFOLIOS</span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#1D1D1F] font-display">
                案例锦集
              </h2>
            </div>
            <p className="text-sm md:text-base text-[#86868B] max-w-md leading-relaxed font-normal">
              洛可可战略咨询助力以下领军企业，成功实现颠覆性品类战略突围与超级爆品打造。
            </p>
          </div>

          <div className="case-grid-v2">
            {categoryCases.map((cs, idx) => {
              const v2Data = getCaseV2Data(cs);
              const imgSource = getCaseImage(cs);
              return (
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
                  {imgSource ? (
                    <img 
                      src={imgSource} 
                      alt={cs.title} 
                      referrerPolicy="no-referrer"
                      loading="lazy"
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div 
                      className={`w-full h-full flex items-center justify-center p-6 ${getPlaceholderBg(idx)}`}
                    >
                      <span className="text-xs font-extrabold text-[#007BC7] tracking-wider text-center uppercase font-mono">
                        {v2Data.brand} SPECIAL CASE
                      </span>
                    </div>
                  )}
                  
                  {/* Overlay text detail block */}
                  <div className="case-summary-v2">
                    <div className="case-brand-label">{v2Data.brand}</div>
                    
                    <button 
                      type="button"
                      className="case-detail-arrow cursor-pointer border-none"
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        onSelectCase(cs);
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
          </div>

        </div>
      </section>

      {/* 4. FAQ - SUCCESS PATH SECTION */}
      <section 
        id="category-faq" 
        className="py-20 bg-white w-full overflow-hidden border-b border-[#E5E5E5]"
      >
        {/* Title Area - Left aligned */}
        <div className="max-w-[95%] w-full mx-auto relative z-10 mb-12 md:mb-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <span className="text-xs font-semibold text-[#007BC7] uppercase tracking-widest font-mono block mb-2">FAQ</span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#1D1D1F] font-display">
                成功路径
              </h2>
            </div>
            <p className="text-sm md:text-base text-[#86868B] max-w-md leading-relaxed font-normal">
              关于洛可可“三品合一”战略咨询与爆品落地全流程，解答您关心的一切核心诉求。
            </p>
          </div>
        </div>

        {/* Full-width List Container */}
        <div className="flex flex-col border-t border-[#E5E5E5] w-full">
          {faqItems.map((item, index) => (
            <div 
              key={index} 
              className="w-full border-b border-[#E5E5E5]"
            >
              {/* Centered item content with 50% reduced side margins */}
              <div className="max-w-[92.5%] lg:max-w-[85%] w-full mx-auto px-3 py-6 flex flex-col text-left group">
                <h4 className="text-[16px] font-semibold text-[#1a1a1a] group-hover:text-[#007BC7] transition-colors duration-300">
                  {item.q}
                </h4>
                <p className="mt-2 text-[14px] text-[#4D4D4D] leading-[1.6]">
                  {item.a}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. CLIENTS - SERVICE CLIENTS SECTION */}
      <section id="category-clients" className="py-20 md:py-24 bg-white w-full border-b border-[#E5E5E5]">
        <div className="max-w-[95%] w-full mx-auto relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16 gap-6">
            <div>
              <span className="text-xs font-semibold text-[#007BC7] uppercase tracking-widest font-mono block mb-2">
                OUR CLIENTS
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#1D1D1F] font-display">
                服务客户
              </h2>
            </div>
            <p className="text-sm md:text-base text-[#86868B] max-w-md leading-relaxed font-normal">
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
