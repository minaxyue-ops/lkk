import React, { useState, useRef } from 'react';
import { 
  ArrowRight, 
  Lightbulb, 
  Rocket, 
  RefreshCw, 
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';
import { motion } from 'motion/react';
import CategorySection04 from './CategorySection04';

interface ProductInnovationConsultingPageProps {
  onOpenContactModal: () => void;
  onNavigateDetail?: (url: string) => void;
  CounterComponent?: React.FC<{ target: number }>;
}

// Default Counter fallback if not provided
const DefaultCounter: React.FC<{ target: number }> = ({ target }) => {
  return <span>{target}</span>;
};

export default function ProductInnovationConsultingPage({
  onOpenContactModal,
  onNavigateDetail,
  CounterComponent = DefaultCounter,
}: ProductInnovationConsultingPageProps) {
  // State for Section 3 (Pipeline Hover State)
  const [hoveredModule, setHoveredModule] = useState<number | null>(null);

  // State for Section 6 (9 Cases Horizontal Drag / Touch Swipe Carousel - 3 Groups)
  const [currentGroup, setCurrentGroup] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState(0);
  const [hasDragged, setHasDragged] = useState(false);
  const startXRef = useRef(0);
  const lastWheelTimeRef = useRef(0);

  const totalGroups = 3;

  const handleNextGroup = () => {
    if (currentGroup < totalGroups - 1) {
      setCurrentGroup((prev) => prev + 1);
    }
  };

  const handlePrevGroup = () => {
    if (currentGroup > 0) {
      setCurrentGroup((prev) => prev - 1);
    }
  };

  const handleDragStart = (clientX: number) => {
    setIsDragging(true);
    setHasDragged(false);
    startXRef.current = clientX;
    setDragOffset(0);
  };

  const handleDragMove = (clientX: number) => {
    if (!isDragging) return;
    const delta = clientX - startXRef.current;
    if (Math.abs(delta) > 6) {
      setHasDragged(true);
    }

    let effectiveDelta = delta;
    if (currentGroup === 0 && delta < 0) {
      effectiveDelta = delta * 0.15;
    } else if (currentGroup === totalGroups - 1 && delta > 0) {
      effectiveDelta = delta * 0.15;
    }
    setDragOffset(effectiveDelta);
  };

  const handleDragEnd = () => {
    if (!isDragging) return;
    setIsDragging(false);

    // Direction Requirement:
    // User drags/swipes right (dragOffset >= 50) -> Switch to Next Case Group
    // User drags/swipes left (dragOffset <= -50) -> Return to Previous Case Group
    if (dragOffset >= 50) {
      handleNextGroup();
    } else if (dragOffset <= -50) {
      handlePrevGroup();
    }

    setDragOffset(0);
  };

  const handleWheel = (e: React.WheelEvent) => {
    if (Math.abs(e.deltaX) > Math.abs(e.deltaY) && Math.abs(e.deltaX) > 20) {
      const now = Date.now();
      if (now - lastWheelTimeRef.current > 450) {
        if (e.deltaX < -20) {
          handleNextGroup();
          lastWheelTimeRef.current = now;
        } else if (e.deltaX > 20) {
          handlePrevGroup();
          lastWheelTimeRef.current = now;
        }
      }
    }
  };

  // ================= DATA DEFINITIONS =================

  // SECTION 01 (原05): 哪些企业适合做 (4类企业 - 4列布局)
  const TARGET_ENTERPRISES = [
    {
      icon: Lightbulb,
      title: '从 0 孵化新品',
      desc: '有产品方向或初步想法，需要从 0 开始系统孵化'
    },
    {
      icon: Rocket,
      title: '打造核心爆品',
      desc: '需要开发新品、打造核心单品或爆款产品'
    },
    {
      icon: RefreshCw,
      title: '产品系统迭代',
      desc: '老产品缺少竞争力，需要系统迭代升级'
    },
    {
      icon: CheckCircle2,
      title: '兼顾体验与量产',
      desc: '希望产品既有体验差异，又能顺利量产上市'
    }
  ];

  // SECTION 02 (原03): 新品为什么做不出来 (4大问题)
  const PRODUCT_CHALLENGES = [
    {
      num: '01',
      title: '有想法，没有产品路径',
      desc: '概念停留在脑中，缺少从需求到方案的定义过程。'
    },
    {
      num: '02',
      title: '产品缺少差异化',
      desc: '外观、功能和体验趋同，上市后难以成为用户首选。'
    },
    {
      num: '03',
      title: '设计无法量产',
      desc: '方案好看，但受工艺、成本、结构或供应链限制无法落地。'
    },
    {
      num: '04',
      title: '研发与市场脱节',
      desc: '产品做出来了，却没有击中用户场景和真实购买理由。'
    }
  ];

  // SECTION 04: 服务定义 (3个核心服务卡片)
  const THREE_PRODUCT_SERVICES = [
    {
      num: '01',
      title: '产品策略',
      desc: '市场机会、用户需求、产品定位与产品矩阵规划。'
    },
    {
      num: '02',
      title: '创新设计',
      desc: '产品定义、工业设计、交互体验、CMF 与产品美学。'
    },
    {
      num: '03',
      title: '研发落地',
      desc: '结构工程、打样测试、供应链协同与量产适配。'
    }
  ];

  // SECTION 05: 交付成果 (4行交付结构)
  const FOUR_PRODUCT_DELIVERABLES = [
    {
      num: '01',
      title: '机会判断',
      actions: '市场趋势、竞品分析、产品机会、概念原型',
      result: '判断什么产品值得做'
    },
    {
      num: '02',
      title: '产品定义',
      actions: '用户研究、场景洞察、产品定位、需求文档',
      result: '明确为谁做、解决什么'
    },
    {
      num: '03',
      title: '创新设计',
      actions: '产品策略、产品线规划、工业设计、交互与 CMF 方案',
      result: '形成有竞争力的产品方案'
    },
    {
      num: '04',
      title: '研发落地',
      actions: '结构设计、工程验证、供应链管理、量产支持',
      result: '实现高品质稳定量产交付'
    }
  ];

  // SECTION 05 (原01): 产品落地全链路 (5个模块 - 顺序调整为1-3-2-4-5)
  const PIPELINE_MODULES = [
    {
      num: '01',
      title: '产品线规划',
      desc: '规划产品矩阵的宽度、长度与深度，明确引流款、利润款、形象款等角色，构建有层次的产品组合。',
      tags: ['矩阵宽度', '引流与利润款', '产品组合']
    },
    {
      num: '02',
      title: '产品定义',
      desc: '将核心价值主张转化为具体产品的场景体验、软硬件核心参数与核心卖点，以产品需求文档精准锁定开发方向。',
      tags: ['场景体验', '核心卖点', 'PRD需求文档']
    },
    {
      num: '03',
      title: '产品家族化',
      desc: '通过统一的视觉识别元素与交互规范串联产品线，形成具有家族感的产品阵列，强化品牌识别的一致性与系列感。',
      tags: ['PI设计语言', '交互规范', '家族系列感']
    },
    {
      num: '04',
      title: '产品美学',
      desc: '从产品造型、色彩、材质到交互细节进行一体化设计，让产品体验与品牌价值保持一致。',
      tags: ['工业造型', 'CMF工艺', '交互细节']
    },
    {
      num: '05',
      title: '产品落地',
      desc: '协调供应链、制造与品控资源，将设计方案高效转化为可量产、可交付的实际产品。',
      tags: ['供应链协同', '结构工程', '量产交付']
    }
  ];

  // SECTION 06: 8个真实产品全案案例
  const CASES = [
    {
      id: 'case-charging-robot',
      client: '智能移动充电机器人',
      subtitle: '打破固定充电桩位限制，定义移动储能补电新形态',
      image: 'https://github.com/minaxyue-ops/MINA/releases/download/1/image.39.png',
      defaultResult: '从概念定义到全功能量产，开创自主寻车储充一体化新标杆。',
      painPoint: '传统车位固定充电桩受限于电网容量与固定车位，存在寻桩繁琐与油车占位问题。',
      action: '完成全向自主移动底盘与柔性机械臂一体化定义，高防护工业美学与CMF工程落地。',
      result: '打通“桩找车”智能化闭环，已在多个智慧园区及高速服务区规模化量产交付。',
      url: '/cases/estun'
    },
    {
      id: 'case-geely-station',
      client: '吉利智能充换电站',
      subtitle: '模块化预制式换电架构，极速 60 秒全自动电池更换',
      image: 'https://github.com/minaxyue-ops/MINA/releases/download/1/image.35.png',
      defaultResult: '重构城市级换电基础设施体验，兼顾极速换电与模块化量产建站。',
      painPoint: '传统换电站体积庞大、施工周期长且人机交互冰冷，缺乏城市基础设施级美学识别。',
      action: '定义轻量化集装箱模块矩阵，一体化打通工业外壳防护、高精传感器与交互灯光。',
      result: '单车换电缩短至60秒，大幅削减土建周期与工程成本，已在全国数十个核心城市布设。',
      url: '/cases/musinno'
    },
    {
      id: 'case-musinno-workstation',
      client: '慢阶「演奏家一号」智能音乐设备',
      subtitle: '全球首款工作站属性乐谱台，从概念草图到红点至尊奖量产实体',
      image: '/src/assets/images/musinno_hero_banner_1785826677156.jpg',
      defaultResult: '打通消费电子与专业乐器界限，斩获2023红点至尊奖并实现批量量产。',
      painPoint: '专业乐手排练设备繁琐杂乱，传统谱架无法承载现代数字乐谱与多接口音频交互。',
      action: '完成硬件架构空间精密堆叠、航空级阻尼转轴机构研发与高精度压铸模具量产落地。',
      result: '实现从0到1商业化量产交付，广泛进入国内外顶级交响乐团与专业音乐学院。',
      url: '/cases/musinno'
    },
    {
      id: 'pophie',
      client: '糯宝 Pophie',
      subtitle: '软硬件一体化打造类生命体情感陪伴机器人',
      image: '/src/assets/images/case_pophie.jpg',
      defaultResult: '融合AI算法与温润触感，开创家庭情感机器人新品类。',
      painPoint: '传统陪伴硬件机械冰冷，缺少情感交互与持续陪伴粘性。',
      action: '软硬一体化定义生命感造型、微表情反馈与亲和力品牌语言。',
      result: '上市即获科技与母婴圈层高度认可，荣获多项国际顶级设计大奖。',
      url: '/cases/case-1'
    },
    {
      id: '55degree',
      client: '55度杯',
      subtitle: '以产品创新建立新的使用体验与品类认知',
      image: 'https://images.unsplash.com/photo-1517256064527-09c73fc73e38?auto=format&fit=crop&w=800&q=80',
      defaultResult: '开创“快速降温杯”品类，上市即引发全网现象级热销。',
      painPoint: '保温杯市场同质化白热化，缺乏突破性功能使用场景。',
      action: '发现摇摇降温核心体验，一体化打造品类爆品与超级符号。',
      result: '创造数亿元销售神话，奠定降温杯品类霸主地位。',
      url: '/cases/55degree'
    },
    {
      id: 'estun',
      client: '埃斯顿工业机器人',
      subtitle: '重塑高端智能制造装备人机工程与家族化美学',
      image: 'https://github.com/minaxyue-ops/MINA/releases/download/1/image.36.png',
      defaultResult: '建立统一的PI家族化产品语言，大幅提升国产高端工控品牌溢价。',
      painPoint: '多条产品线风格割裂，示教器与工业控制柜操作体验复杂繁琐。',
      action: '打造工业级防跌落人机工学示教器，重构整机防尘散热与极简几何家族语系。',
      result: '成功进驻汽车、光伏等多条头部高端制造产线，销量翻倍增长。',
      url: '/cases/estun'
    },
    {
      id: 'haidilao',
      client: '海底捞',
      subtitle: '堂食体验延伸至家庭即食，开创便携自热火锅',
      image: 'https://github.com/minaxyue-ops/MINA/releases/download/1/image.37.png',
      defaultResult: '拓宽火锅消费场景，自热即食系列年销售额破数亿元。',
      painPoint: '堂食场景受物理空间限制，自热发热包安全与排气体验痛点显著。',
      action: '定义自加热火锅微负压防烫安全结构与模块化包装，沉淀家族化零售视觉。',
      result: '成为快消零售第二增长曲线，引领行业即食火锅标准化浪潮。',
      url: '/cases/case-5'
    },
    {
      id: 'xiaoxiandun',
      client: '小仙炖',
      subtitle: '确立“鲜炖燕窝”高端赛道，全维度打造保鲜标杆',
      image: 'https://github.com/minaxyue-ops/MINA/releases/download/1/image.33.png',
      defaultResult: '开创即食滋补冷鲜新品类，连续多年位列全网销量第一。',
      painPoint: '传统燕窝繁琐耗时，即食燕窝品质存疑，亟需冷鲜包装信任支点。',
      action: '定义“鲜炖”品类标准，主导冷鲜包装容器、阻隔锁鲜与高端视觉符号。',
      result: '建立国民级鲜炖燕窝第一认知，引爆数十亿级高端滋补赛道。',
      url: '/cases/xiaoxiandun'
    },
    {
      id: 'hit-robot',
      client: '哈工大智能协作机器人',
      subtitle: '定义行业工业安全美学与柔性人机协作新标杆',
      image: 'https://github.com/minaxyue-ops/MINA/releases/download/1/image.37.png',
      defaultResult: '从核心关节构型到整体工业防尘散热一体化落地，获国际设计大奖与行业广泛应用。',
      painPoint: '传统工业机械臂形态笨重生硬，人机协作存在安全视线盲区与夹手隐患。',
      action: '重构流线型防夹手关节外壳、人机工程示教交互与直观的全彩状态反馈灯环。',
      result: '大幅提升产线人机协作安全性与操作效率，广泛进驻汽车与精密电子组装产线。',
      url: '/cases/case-8'
    }
  ];

  const CASE_GROUPS = [
    CASES.slice(0, 3), // [Case 1, Case 2, Case 3]
    CASES.slice(3, 6), // [Case 4, Case 5, Case 6]
    CASES.slice(6, 9), // [Case 7, Case 8, Case 9]
  ];

  const canPrev = currentGroup > 0;
  const canNext = currentGroup < totalGroups - 1;

  // SECTION 07: FAQ (6个问题)
  const FAQS = [
    {
      q: '1. 只有一个想法，没有图纸，可以启动吗？',
      a: '完全可以。很多成功产品最初都只是一个模糊的需求或方向。我们会在项目第一阶段（机会判断与产品定义）协助您进行市场与用户场景调研，梳理功能清单与核心卖点，输出规范的产品需求文档（PRD），再逐步推进概念设计与工程图纸开发。'
    },
    {
      q: '2. 从概念到量产通常需要多久？',
      a: '根据产品复杂度和技术成熟度，通常周期为 3 至 6 个月。简单消费品或快消硬件约需 2-3 个月；涉及复杂精密机械结构、多层PCB硬件堆叠或高难度模具的智能硬件，一般需要 4-6 个月完成从概念设计、手板验证、T0-T3试模到小批量试产（NPI）。'
    },
    {
      q: '3. 服务是否包含工业设计、结构设计与打样？',
      a: '包含。产品创新0-1全案提供从外观工业设计、CMF材质选型、机械/结构工程设计、有限元FEA仿真到CNC手板打样、功能样机测试的全套交付物，确保设计方案在进入模具阶段前经过充分的物理与人机验证。'
    },
    {
      q: '4. 是否协同供应链和工厂完成量产？',
      a: '是的。洛可可拥有覆盖全国的制造供应链生态库，项目后期会协同驻厂工程师参与模具审查、试模监理（T0-T3）、SOP作业指导书制定，并协助对接匹配的注塑、钣金、电子贴片（SMT）及整机组装工厂，直至大批量产良率稳定。'
    },
    {
      q: '5. 产品创新全案是否包含品牌设计？',
      a: '本全案服务高度聚焦于“实体产品本身”的定义、设计、工程与量产落地，不包含完整的品牌战略定位与全套VI/品牌话语体系。但我们会在产品外观上包含产品LOGO丝印规范、产品名标识及基础包装盒刀版图设计。如需深度品牌战略与营销体系，可咨询我们的“品牌创新0-1”或“三品合一”全案。'
    },
    {
      q: '6. 如何判断一个产品概念是否值得投入开发？',
      a: '我们在项目启动初期会通过“三维过滤模型”进行严格评估：一是用户真实需求与痛点强度；二是市场竞争格局与定价天花板；三是现有供应链制造难度与目标BOM成本预估。只有通过可行性评估的产品概念，才会推进重资产的模具和量产投入。'
    }
  ];

  return (
    <div className="w-full bg-[#FFFFFF] text-[#1D1D1F] font-sans antialiased selection:bg-[#0071E3] selection:text-white">
      
      {/* ================= HERO SECTION ================= */}
      <section id="product-hero" className="py-20 md:py-28 text-center bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(0,113,227,0.08),rgba(255,255,255,0))] relative overflow-hidden border-b border-black/[0.06]">
        <div className="max-w-4xl mx-auto px-[5%] relative z-10 flex flex-col items-center">
          
          {/* Eyebrow Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/[0.04] border border-black/[0.06] mb-8">
            <span className="w-2 h-2 rounded-full bg-[#0071E3] animate-pulse" />
            <span className="text-xs font-semibold tracking-wider text-[#1D1D1F] uppercase font-mono">
              PRODUCT INNOVATION 0–1 CONSULTING
            </span>
          </div>

          {/* Main Headline */}
          <motion.h1 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="hero-title text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-[#1D1D1F] leading-[1.08] font-display"
          >
            <span className="text-[#0071E3]">产品创新</span>
            <span className="text-[#1D1D1F]"> · </span>
            <span className="text-[#1D1D1F]">0–1 全案咨询</span>
          </motion.h1>

          <p className="text-xs md:text-sm font-semibold tracking-[0.25em] text-[#86868B] uppercase mt-4 font-mono">
            LKK Consulting & Design Group
          </p>

          <p className="text-base sm:text-lg text-[#86868B] max-w-3xl mt-8 leading-relaxed font-normal text-center text-balance">
            帮助企业将已有产品方向或初步想法，转化为可量产、可上市、具有市场竞争力的实体产品。聚焦产品定义、创新设计、研发协同与量产落地，打通从创意概念到商业交付的全流程闭环。
          </p>

          <div className="mt-10 flex items-center justify-center gap-4">
            <button 
              onClick={onOpenContactModal}
              className="bg-[#0071E3] hover:bg-[#0077ED] text-white font-medium px-8 py-3.5 rounded-full text-sm sm:text-base transition-all duration-300 shadow-sm hover:shadow flex items-center gap-2 cursor-pointer active:scale-98"
            >
              预约产品创新专家咨询
              <ArrowRight className="w-4 h-4 text-white" />
            </button>
          </div>

        </div>
      </section>

      {/* ================= QUANTIFIED ACHIEVEMENTS SECTION ================= */}
      <section className="py-12 bg-white border-b border-black/[0.06]">
        <div className="max-w-[95%] xl:max-w-[1440px] w-full mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            <div className="p-6 sm:p-8 rounded-3xl bg-[#F5F5F7] border border-black/[0.04] hover:bg-white hover:shadow-lg hover:border-black/[0.08] transition-all duration-300 text-center flex flex-col items-center justify-center">
              <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1D1D1F] tracking-tight font-display mb-1 flex items-baseline justify-center">
                <span className="text-[#0071E3]"><CounterComponent target={22} /></span>
                <span className="text-xl sm:text-2xl ml-1 text-[#1D1D1F]">年</span>
              </div>
              <div className="text-xs sm:text-sm text-[#86868B] font-medium tracking-wide">行业经验积淀</div>
            </div>

            <div className="p-6 sm:p-8 rounded-3xl bg-[#F5F5F7] border border-black/[0.04] hover:bg-white hover:shadow-lg hover:border-black/[0.08] transition-all duration-300 text-center flex flex-col items-center justify-center">
              <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1D1D1F] tracking-tight font-display mb-1 flex items-baseline justify-center">
                <span className="text-[#0071E3]"><CounterComponent target={600} /></span>
                <span className="text-xl sm:text-2xl ml-0.5 text-[#0071E3]">+</span>
              </div>
              <div className="text-xs sm:text-sm text-[#86868B] font-medium tracking-wide">专业奖项认证</div>
            </div>

            <div className="p-6 sm:p-8 rounded-3xl bg-[#F5F5F7] border border-black/[0.04] hover:bg-white hover:shadow-lg hover:border-black/[0.08] transition-all duration-300 text-center flex flex-col items-center justify-center">
              <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1D1D1F] tracking-tight font-display mb-1 flex items-baseline justify-center">
                <span className="text-[#0071E3]"><CounterComponent target={1000} /></span>
                <span className="text-xl sm:text-2xl ml-0.5 text-[#0071E3]">+</span>
              </div>
              <div className="text-xs sm:text-sm text-[#86868B] font-medium tracking-wide">行业头部客户认可</div>
            </div>

            <div className="p-6 sm:p-8 rounded-3xl bg-[#F5F5F7] border border-black/[0.04] hover:bg-white hover:shadow-lg hover:border-black/[0.08] transition-all duration-300 text-center flex flex-col items-center justify-center">
              <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1D1D1F] tracking-tight font-display mb-1 flex items-baseline justify-center">
                <span className="text-[#0071E3]"><CounterComponent target={10000} /></span>
                <span className="text-xl sm:text-2xl ml-0.5 text-[#0071E3]">+</span>
              </div>
              <div className="text-xs sm:text-sm text-[#86868B] font-medium tracking-wide">产品成功落地</div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SECTION 01: 哪些企业适合做 (WHO IT IS FOR / 01) ================= */}
      <section id="section-product-who-it-is-for" className="py-20 lg:py-28 bg-[#FFFFFF] border-b border-black/[0.06]">
        <div className="max-w-[95%] xl:max-w-[1440px] w-full mx-auto">
          
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16 gap-6">
            <div>
              <span className="text-xs font-semibold text-[#0071E3] uppercase tracking-widest font-mono block mb-2">
                01 / WHO IT IS FOR
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#1D1D1F] font-display">
                哪些企业适合做
              </h2>
            </div>
            <p className="text-sm md:text-base text-[#86868B] max-w-md leading-relaxed font-normal">
              适合已有产品方向，希望完成新品孵化、产品迭代或量产上市的企业。
            </p>
          </div>

          {/* 4 Enterprise Columns - Bento Style */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {TARGET_ENTERPRISES.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <div 
                  key={idx} 
                  className="group p-6 sm:p-8 rounded-3xl bg-[#F5F5F7] border border-black/[0.04] hover:bg-white hover:shadow-xl hover:border-black/[0.08] transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    {/* Apple Style Icon Badge */}
                    <div className="w-12 h-12 rounded-2xl bg-white border border-black/[0.06] group-hover:border-[#0071E3] group-hover:bg-[#0071E3]/5 flex items-center justify-center mb-6 transition-all duration-300 shadow-2xs">
                      <IconComp className="w-6 h-6 text-[#1D1D1F] group-hover:text-[#0071E3] transition-colors duration-300" />
                    </div>

                    <h3 className="text-xl font-bold text-[#1D1D1F] mb-3 font-display tracking-tight group-hover:text-[#0071E3] transition-colors duration-200">
                      {item.title}
                    </h3>

                    <p className="text-sm text-[#86868B] leading-relaxed font-normal">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ================= SECTION 02: 新品为什么做不出来 (CHALLENGES / 02) ================= */}
      <section id="section-product-challenges" className="py-20 lg:py-28 bg-[#FFFFFF] border-b border-black/[0.06]">
        <div className="max-w-[95%] xl:max-w-[1440px] w-full mx-auto">
          
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16 gap-6">
            <div>
              <span className="text-xs font-semibold text-[#0071E3] uppercase tracking-widest font-mono block mb-2">
                02 / CHALLENGES
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#1D1D1F] font-display">
                新品为什么做不出来
              </h2>
            </div>
            <p className="text-sm md:text-base text-[#86868B] max-w-md leading-relaxed font-normal">
              产品开发失败，往往不是因为缺少创意，而是缺少从用户需求到量产交付的完整路径。
            </p>
          </div>

          {/* 2x2 Bento Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* 01: Card */}
            <div className="relative rounded-3xl bg-[#F5F5F7] border border-black/[0.04] p-8 lg:p-10 hover:bg-white hover:shadow-xl hover:border-black/[0.08] transition-all duration-300 flex flex-col justify-between overflow-hidden group">
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-6">
                  <div className="font-mono text-3xl font-extrabold text-[#0071E3]">
                    {PRODUCT_CHALLENGES[0].num}
                  </div>
                  <span className="text-[11px] font-medium px-3 py-1 rounded-full bg-white/80 backdrop-blur-md text-[#86868B] border border-black/[0.04] shadow-2xs">
                    定义脱节
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-[#1D1D1F] mb-3 font-display tracking-tight group-hover:text-[#0071E3] transition-colors duration-200">
                  {PRODUCT_CHALLENGES[0].title}
                </h3>
                <p className="text-base text-[#86868B] leading-relaxed font-normal max-w-md">
                  {PRODUCT_CHALLENGES[0].desc}
                </p>
              </div>
            </div>

            {/* 02: Card */}
            <div className="relative rounded-3xl bg-[#F5F5F7] border border-black/[0.04] p-8 lg:p-10 hover:bg-white hover:shadow-xl hover:border-black/[0.08] transition-all duration-300 flex flex-col justify-between overflow-hidden group">
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-6">
                  <div className="font-mono text-3xl font-extrabold text-[#86868B] group-hover:text-[#0071E3] transition-colors duration-300">
                    {PRODUCT_CHALLENGES[1].num}
                  </div>
                  <span className="text-[11px] font-medium px-3 py-1 rounded-full bg-white/80 backdrop-blur-md text-[#86868B] border border-black/[0.04] shadow-2xs">
                    设计平庸
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-[#1D1D1F] mb-3 font-display tracking-tight group-hover:text-[#0071E3] transition-colors duration-200">
                  {PRODUCT_CHALLENGES[1].title}
                </h3>
                <p className="text-base text-[#86868B] leading-relaxed font-normal max-w-md">
                  {PRODUCT_CHALLENGES[1].desc}
                </p>
              </div>
            </div>

            {/* 03: Card */}
            <div className="relative rounded-3xl bg-[#F5F5F7] border border-black/[0.04] p-8 lg:p-10 hover:bg-white hover:shadow-xl hover:border-black/[0.08] transition-all duration-300 flex flex-col justify-between overflow-hidden group">
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-6">
                  <div className="font-mono text-3xl font-extrabold text-[#86868B] group-hover:text-[#0071E3] transition-colors duration-300">
                    {PRODUCT_CHALLENGES[2].num}
                  </div>
                  <span className="text-[11px] font-medium px-3 py-1 rounded-full bg-white/80 backdrop-blur-md text-[#86868B] border border-black/[0.04] shadow-2xs">
                    落地受阻
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-[#1D1D1F] mb-3 font-display tracking-tight group-hover:text-[#0071E3] transition-colors duration-200">
                  {PRODUCT_CHALLENGES[2].title}
                </h3>
                <p className="text-base text-[#86868B] leading-relaxed font-normal max-w-md">
                  {PRODUCT_CHALLENGES[2].desc}
                </p>
              </div>
            </div>

            {/* 04: Card */}
            <div className="relative rounded-3xl bg-[#F5F5F7] border border-black/[0.04] p-8 lg:p-10 hover:bg-white hover:shadow-xl hover:border-black/[0.08] transition-all duration-300 flex flex-col justify-between overflow-hidden group">
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-6">
                  <div className="font-mono text-3xl font-extrabold text-[#86868B] group-hover:text-[#0071E3] transition-colors duration-300">
                    {PRODUCT_CHALLENGES[3].num}
                  </div>
                  <span className="text-[11px] font-medium px-3 py-1 rounded-full bg-white/80 backdrop-blur-md text-[#86868B] border border-black/[0.04] shadow-2xs">
                    缺乏闭环
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-[#1D1D1F] mb-3 font-display tracking-tight group-hover:text-[#0071E3] transition-colors duration-200">
                  {PRODUCT_CHALLENGES[3].title}
                </h3>
                <p className="text-base text-[#86868B] leading-relaxed font-normal max-w-md">
                  {PRODUCT_CHALLENGES[3].desc}
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ================= SECTION 03: 产品落地全链路 (METHOD / 03) ================= */}
      <section id="section-product-pipeline" className="py-20 lg:py-28 bg-[#FFFFFF] border-b border-black/[0.06]">
        <div className="max-w-[95%] xl:max-w-[1440px] w-full mx-auto">
          
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16 gap-6">
            <div>
              <span className="text-xs font-semibold text-[#0071E3] uppercase tracking-widest font-mono block mb-2">
                03 / METHOD
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#1D1D1F] font-display">
                产品落地全链路
              </h2>
            </div>
            <p className="text-sm md:text-base text-[#86868B] max-w-md leading-relaxed font-normal">
              从产品矩阵规划到量产交付，让产品价值成为用户可感知、市场可验证的真实体验。
            </p>
          </div>

          {/* Big Container: 5 Horizontal Bento Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
            {PIPELINE_MODULES.map((item, idx) => {
              const isHovered = hoveredModule === idx;
              return (
                <div
                  key={item.num}
                  onMouseEnter={() => setHoveredModule(idx)}
                  onMouseLeave={() => setHoveredModule(null)}
                  className={`group relative p-6 sm:p-7 rounded-3xl transition-all duration-500 bg-[#F5F5F7] border flex flex-col justify-between min-h-[300px] ${
                    isHovered 
                      ? 'bg-white border-black/[0.08] shadow-xl -translate-y-1.5' 
                      : 'border-black/[0.04] hover:bg-white hover:border-black/[0.08] hover:shadow-lg'
                  }`}
                >
                  <div>
                    {/* Number & Tag */}
                    <div className="flex items-center justify-between mb-4">
                      <div className={`font-mono text-2xl sm:text-3xl font-extrabold transition-colors duration-300 ${
                        isHovered ? 'text-[#0071E3]' : 'text-[#86868B] group-hover:text-[#0071E3]'
                      }`}>
                        {item.num}
                      </div>
                      <span className="text-[10px] font-mono text-[#86868B] uppercase tracking-wider">
                        STEP 0{idx + 1}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className={`text-lg font-bold transition-colors duration-300 mb-2.5 font-display tracking-tight ${
                      isHovered ? 'text-[#0071E3]' : 'text-[#1D1D1F] group-hover:text-[#0071E3]'
                    }`}>
                      {item.title}
                    </h3>

                    {/* Description */}
                    <p className="text-xs sm:text-sm text-[#86868B] leading-relaxed mb-4 font-normal">
                      {item.desc}
                    </p>
                  </div>

                  {/* Keywords List */}
                  <div className="space-y-1.5 pt-3 border-t border-black/[0.04]">
                    {item.tags.map((tag, tIdx) => (
                      <div 
                        key={tIdx} 
                        className="text-[11px] text-[#86868B] group-hover:text-[#1D1D1F] transition-colors flex items-center gap-1.5"
                      >
                        <span className="w-1 h-1 rounded-full bg-[#0071E3]/60" />
                        <span>{tag}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ================= SECTION 04: 从想法到产品 (SERVICE DEFINITION / 04) ================= */}
      <CategorySection04
        sectionId="section-product-service"
        badge="SERVICE DEFINITION / 04"
        title="从想法到产品"
        description="打通从市场机会到量产交付的完整闭环，让创新想法转化为真正具备市场竞争力的实体产品。"
        leftCard={{
          badgeTag: 'PRODUCT 0-1',
          badgeText: '全流程落地协同',
          title: '全流程落地协同',
          description: '打通产品定义、工业设计、结构工程与供应链量产，避免创意与制造脱节，确保产品高品质交付与商业成功。',
          image: 'https://images.unsplash.com/photo-1581291518655-9523c932deda?auto=format&fit=crop&w=1600&q=85',
          ctaText: '预约产品创新专家咨询',
          onCtaClick: onOpenContactModal,
        }}
        rightServices={THREE_PRODUCT_SERVICES}
      />

      {/* ================= SECTION 05: 9个产品创新案例横向滑动 / Carousel (CASE STUDIES / 05) ================= */}
      <section id="section-product-cases" className="py-20 lg:py-28 bg-[#FFFFFF] border-b border-black/[0.06] overflow-hidden">
        <div className="max-w-[95%] xl:max-w-[1440px] w-full mx-auto">
          
          {/* Header with Navigation Arrows & Indicator */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16 gap-6">
            <div>
              <span className="text-xs font-semibold text-[#0071E3] uppercase tracking-widest font-mono block mb-2">
                05 / CASE STUDIES
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#1D1D1F] font-display">
                从概念到上市
              </h2>
            </div>
            
            <div className="flex items-center justify-between md:justify-end gap-6">
              <p className="text-sm md:text-base text-[#86868B] max-w-md leading-relaxed font-normal hidden sm:block">
                精选 9 个产品 0–1 孵化、产品迭代与量产落地案例，支持向右拖拽/滑动浏览下一组案例，支持触控与拖拽手势。
              </p>
              
              {/* Pagination Arrows & Group Counter */}
              <div className="flex items-center gap-3 shrink-0">
                <div className="text-xs font-mono font-medium text-[#86868B] mr-1 hidden sm:block">
                  <span className="text-[#0071E3] font-bold">0{currentGroup + 1}</span>
                  <span className="mx-1 text-neutral-300">/</span>
                  <span>0{totalGroups}</span>
                </div>
                <button
                  onClick={handlePrevGroup}
                  disabled={!canPrev}
                  aria-label="Previous Case Group"
                  className={`w-10 h-10 rounded-full border border-black/[0.08] flex items-center justify-center transition-all duration-300 ${
                    canPrev
                      ? 'text-[#1D1D1F] hover:text-white hover:bg-[#0071E3] hover:border-[#0071E3] active:scale-95 cursor-pointer shadow-xs'
                      : 'text-neutral-300 border-neutral-200 opacity-40 cursor-not-allowed'
                  }`}
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={handleNextGroup}
                  disabled={!canNext}
                  aria-label="Next Case Group"
                  className={`w-10 h-10 rounded-full border border-black/[0.08] flex items-center justify-center transition-all duration-300 ${
                    canNext
                      ? 'text-[#1D1D1F] hover:text-white hover:bg-[#0071E3] hover:border-[#0071E3] active:scale-95 cursor-pointer shadow-xs'
                      : 'text-neutral-300 border-neutral-200 opacity-40 cursor-not-allowed'
                  }`}
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Carousel Slide Track Container with Drag / Swipe Gesture */}
          <div 
            onMouseDown={(e) => handleDragStart(e.clientX)}
            onMouseMove={(e) => handleDragMove(e.clientX)}
            onMouseUp={handleDragEnd}
            onMouseLeave={handleDragEnd}
            onTouchStart={(e) => handleDragStart(e.touches[0].clientX)}
            onTouchMove={(e) => handleDragMove(e.touches[0].clientX)}
            onTouchEnd={handleDragEnd}
            onWheel={handleWheel}
            className="w-full overflow-hidden select-none cursor-grab active:cursor-grabbing pb-2"
          >
            <div 
              className="flex w-full will-change-transform"
              style={{
                transform: `translateX(calc(-${currentGroup * 100}% - ${dragOffset}px))`,
                transition: isDragging ? 'none' : 'transform 0.4s cubic-bezier(0.25, 1, 0.5, 1)',
              }}
            >
              {CASE_GROUPS.map((group, groupIdx) => (
                <div 
                  key={groupIdx} 
                  className="w-full shrink-0 basis-full min-w-full box-border"
                  aria-hidden={currentGroup !== groupIdx}
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
                    {group.map((item) => (
                      <div 
                        key={item.id}
                        id={`case-card-${item.id}`}
                        onClick={() => {
                          if (!hasDragged && onNavigateDetail) {
                            onNavigateDetail(item.url);
                          }
                        }}
                        className="w-full min-w-0 box-border group relative rounded-3xl border border-black/[0.04] bg-[#F5F5F7] hover:bg-white overflow-hidden cursor-pointer transition-all duration-500 hover:shadow-xl hover:border-black/[0.08] flex flex-col h-full"
                      >
                        {/* Image Container */}
                        <div className="relative aspect-[16/10] w-full overflow-hidden bg-neutral-200 shrink-0">
                          <img 
                            src={item.image} 
                            alt={item.client}
                            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 pointer-events-none"
                            draggable={false}
                          />

                          <div className="absolute top-4 left-4 z-10">
                            <span className="text-[11px] font-mono font-medium px-3 py-1 rounded-full bg-white/80 backdrop-blur-md text-[#0071E3] border border-black/[0.04] shadow-xs">
                              产品全案
                            </span>
                          </div>

                          {/* Dark Semi-transparent Overlay on Hover (Desktop) */}
                          <div className="absolute inset-0 bg-[#1D1D1F]/90 backdrop-blur-sm p-6 text-white flex flex-col justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden lg:flex">
                            <div className="space-y-3 text-left">
                              <div>
                                <div className="text-[10px] font-mono font-medium uppercase tracking-wider text-[#86868B] mb-0.5">产品机会与用户问题</div>
                                <p className="text-xs md:text-sm leading-relaxed text-neutral-200 line-clamp-2">{item.painPoint}</p>
                              </div>
                              <div>
                                <div className="text-[10px] font-mono font-medium uppercase tracking-wider text-[#0071E3] mb-0.5">洛可可定义与设计动作</div>
                                <p className="text-xs md:text-sm leading-relaxed text-white line-clamp-2">{item.action}</p>
                              </div>
                              <div>
                                <div className="text-[10px] font-mono font-medium uppercase tracking-wider text-emerald-400 mb-0.5">量产与市场结果</div>
                                <p className="text-xs md:text-sm leading-relaxed text-neutral-200 line-clamp-2">{item.result}</p>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Card Content & Footer */}
                        <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between text-left">
                          <div>
                            {/* Top Line: Client Title */}
                            <h3 className="text-xl md:text-2xl font-bold text-[#1D1D1F] font-display tracking-tight group-hover:text-[#0071E3] transition-colors leading-snug line-clamp-1 mb-1">
                              {item.client}
                            </h3>

                            {/* Subtitle / Positioning */}
                            <p className="text-xs md:text-sm text-[#86868B] mb-3 font-normal line-clamp-1">
                              {item.subtitle}
                            </p>

                            {/* Default Result Description */}
                            <p className="text-sm text-[#86868B] leading-relaxed line-clamp-2 min-h-[44px] font-normal">
                              {item.defaultResult}
                            </p>
                          </div>

                          {/* Mobile Summary */}
                          <div className="block lg:hidden mt-4 pt-3.5 border-t border-black/[0.06] text-xs space-y-1.5 text-[#86868B]">
                            <div><span className="text-[#1D1D1F] font-mono font-medium">动作：</span>{item.action}</div>
                            <div><span className="text-emerald-600 font-mono font-medium">结果：</span>{item.result}</div>
                          </div>

                          {/* Card Bottom CTA */}
                          <div className="mt-6 pt-5 border-t border-black/[0.04] flex items-center justify-between">
                            <span className="text-xs font-mono font-semibold text-[#86868B] group-hover:text-[#0071E3] tracking-wider uppercase transition-colors">
                              VIEW CASE STUDY
                            </span>
                            <div className="w-8 h-8 rounded-full bg-white group-hover:bg-[#0071E3] border border-black/[0.06] group-hover:border-[#0071E3] flex items-center justify-center transition-all duration-300 shadow-2xs">
                              <ArrowRight className="w-4 h-4 text-[#1D1D1F] group-hover:text-white group-hover:translate-x-0.5 transition-all duration-300" />
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Dot Indicators */}
          <div className="flex items-center justify-center gap-2 mt-8">
            {CASE_GROUPS.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentGroup(idx)}
                aria-label={`Switch to case group ${idx + 1}`}
                className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                  currentGroup === idx 
                    ? 'w-8 bg-[#0071E3]' 
                    : 'w-2 bg-neutral-300 hover:bg-[#86868B]'
                }`}
              />
            ))}
          </div>

        </div>
      </section>

      {/* ================= SECTION 06: 常见问题 (FAQ / 06) ================= */}
      <section 
        id="section-product-faq" 
        className="py-20 lg:py-28 bg-[#FFFFFF] w-full overflow-hidden border-b border-black/[0.06]"
      >
        {/* Title Area */}
        <div className="max-w-[95%] xl:max-w-[1440px] w-full mx-auto mb-12 md:mb-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <span className="text-xs font-semibold text-[#0071E3] uppercase tracking-widest font-mono block mb-2">
                06 / FAQ
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#1D1D1F] font-display">
                合作前，先把问题说清
              </h2>
            </div>
            <p className="text-sm md:text-base text-[#86868B] max-w-md leading-relaxed font-normal">
              围绕产品开发、量产落地与合作方式，提前回答企业最常见的问题。
            </p>
          </div>
        </div>

        {/* Apple FAQ Bento Grid Cards */}
        <div className="max-w-[95%] xl:max-w-[1440px] w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {FAQS.map((item, index) => (
            <div 
              key={index} 
              className="rounded-3xl bg-[#F5F5F7] p-6 sm:p-8 border border-black/[0.04] hover:bg-white hover:shadow-lg hover:border-black/[0.08] transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <h4 className="text-base sm:text-lg font-bold text-[#1D1D1F] font-display tracking-tight group-hover:text-[#0071E3] transition-colors duration-200 mb-3">
                  {item.q}
                </h4>
                <p className="text-sm text-[#86868B] leading-relaxed font-normal">
                  {item.a}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}

