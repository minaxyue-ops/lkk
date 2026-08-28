import React, { useState, useRef } from 'react';
import { ArrowRight, Compass, Layers, ShieldCheck, TrendingUp, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from 'motion/react';
import CategorySection04 from './CategorySection04';

interface ThreeInOneCategoryConsultingPageProps {
  onOpenContactModal: () => void;
  onNavigateDetail?: (url: string) => void;
  CounterComponent?: React.FC<{ target: number }>;
}

// Default Counter fallback if not provided
const DefaultCounter: React.FC<{ target: number }> = ({ target }) => {
  return <span>{target}</span>;
};

export default function ThreeInOneCategoryConsultingPage({
  onOpenContactModal,
  onNavigateDetail,
  CounterComponent = DefaultCounter,
}: ThreeInOneCategoryConsultingPageProps) {
  // State for Section 06 (9 Cases Horizontal Drag / Touch Swipe Carousel - 3 Groups)
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

    // Boundary resistance:
    // If at group 0 and dragging left (delta < 0, toward non-existent prev group), apply resistance
    // If at group 2 and dragging right (delta > 0, toward non-existent next group), apply resistance
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
          // Trackpad swipe right (deltaX negative) -> Next Group
          handleNextGroup();
          lastWheelTimeRef.current = now;
        } else if (e.deltaX > 20) {
          // Trackpad swipe left (deltaX positive) -> Prev Group
          handlePrevGroup();
          lastWheelTimeRef.current = now;
        }
      }
    }
  };

  // ================= DATA DEFINITIONS =================

  // SECTION 01 (原05): 适合哪些企业 (4类企业)
  const TARGET_ENTERPRISES = [
    {
      icon: Compass,
      title: '开辟第二曲线',
      desc: '想开辟新赛道、寻找第二增长曲线的企业'
    },
    {
      icon: Layers,
      title: '突破制造代工',
      desc: '有制造和供应链能力，但缺少品类与品牌溢价的企业'
    },
    {
      icon: ShieldCheck,
      title: '跨越同质陷阱',
      desc: '已有产品或品牌，却被同质化竞争限制增长的企业'
    },
    {
      icon: TrendingUp,
      title: '统筹全案增长',
      desc: '需要统筹战略、产品、品牌，而非采购单点设计服务的企业'
    }
  ];

  // SECTION 02 (原03): 4大增长瓶颈问题
  const CHALLENGES = [
    {
      num: '01',
      title: '只能打价格战',
      desc: '产品同质化严重，竞争持续压低利润空间。'
    },
    {
      num: '02',
      title: '增长没有新方向',
      desc: '原有市场接近天花板，找不到第二增长曲线。'
    },
    {
      num: '03',
      title: '产品和品牌没有形成合力',
      desc: '产品持续迭代，但用户无法感知明确价值与差异。'
    },
    {
      num: '04',
      title: '想做新品类，却缺少路径',
      desc: '有资源和想法，却不知道从哪里切入、如何降低试错风险。'
    }
  ];

  // SECTION 04: 服务定义 (3个核心服务卡片)
  const THREE_CORE_SERVICES = [
    {
      num: '01',
      title: '品类战略',
      desc: '洞察机会，定义赛道，建立品类标准与增长策略。'
    },
    {
      num: '02',
      title: '产品创新',
      desc: '规划产品矩阵，定义核心体验，推进设计研发与量产落地。'
    },
    {
      num: '03',
      title: '品牌创新',
      desc: '建立价值定位、品牌话语、视觉体系与市场传播表达。'
    }
  ];

  // SECTION 05: 交付成果 (4行交付结构)
  const FOUR_DELIVERABLES = [
    {
      num: '01',
      title: '机会判断',
      actions: '趋势洞察、用户研究、竞争地图、技术扫描',
      result: '找到值得进入的品类机会'
    },
    {
      num: '02',
      title: '品类定义',
      actions: '品类定位、价值主张、品类标准、战略推演',
      result: '明确新赛道的竞争规则'
    },
    {
      num: '03',
      title: '产品与品牌构建',
      actions: '产品矩阵、产品定义、品牌定位、话语与视觉系统',
      result: '让品类价值可体验、可识别'
    },
    {
      num: '04',
      title: '上市与引爆',
      actions: '上市策略、传播主题、渠道策略、营销节奏',
      result: '让新品类进入市场并形成认知'
    }
  ];

  // SECTION 05 (原01): 品类创新七步流程
  const SEVEN_STEPS = [
    {
      num: '01',
      title: '品类竞争',
      keywords: ['企业自身研究', '品类趋势洞察', '品类竞争地图', '品类机会识别'],
      phase: '开 / 01–04'
    },
    {
      num: '02',
      title: '用户洞察',
      keywords: ['用户画像', '用户场景', '用户痛点', '用户定位'],
      phase: '开 / 01–04'
    },
    {
      num: '03',
      title: '技术规划',
      keywords: ['技术扫描', '技术整合', '技术路径', '技术研发'],
      phase: '开 / 01–04'
    },
    {
      num: '04',
      title: '品类战略',
      keywords: ['品类机会', '品类定义', '品类标准', '战略推演'],
      phase: '开 / 01–04'
    },
    {
      num: '05',
      title: '品类品牌',
      keywords: ['品牌价值', '品牌定位', '品牌话语', '品牌美学'],
      phase: '创 / 05–06'
    },
    {
      num: '06',
      title: '品类产品',
      keywords: ['产品线规划', '产品家族化', '产品定义', '产品美学', '产品落地'],
      phase: '创 / 05–06'
    },
    {
      num: '07',
      title: '品类营销',
      keywords: ['行业引爆', '社会化引爆', '渠道引爆'],
      phase: '引爆 / 07'
    }
  ];

  // SECTION 06: 8个真实全案案例
  const CASES = [
    {
      id: 'tanmujiang',
      client: '谭木匠',
      subtitle: '从传统梳妆工具，转向东方木艺生活美学',
      image: 'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=800&q=80',
      defaultResult: '从传统礼品转型东方木艺美学，实现品牌高端溢价跃升。',
      painPoint: '传统礼品梳具品类老化，消费场景局限于特定节庆。',
      action: '重构“东方木艺美学”品类定义，全系迭代爆品体验与品牌视觉。',
      result: '拓宽高端送礼与自我关爱场景，销量与品牌溢价同步提升。',
      url: '/cases/tanmujiang'
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
      id: 'miaokelanduo',
      client: '妙可蓝多',
      subtitle: '通过产品、品牌与品类协同建立增长势能',
      image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=800&q=80',
      defaultResult: '开创儿童奶酪棒黄金品类，助力品牌问鼎行业销量冠军。',
      painPoint: '国内奶酪市场被外资垄断，缺乏适合中国儿童的奶酪品类。',
      action: '重新定义“儿童奶酪棒”品类，主导产品造型阻隔包装与品牌IP化。',
      result: '3年实现数十倍爆发式增长，跻身百亿级乳品领军企业。',
      url: '/cases/miaokelanduo'
    },
    {
      id: 'case-1',
      client: '糯宝 Pophie',
      subtitle: '三品合一，打造类生命体情感陪伴机器人',
      image: '/src/assets/images/case_pophie.jpg',
      defaultResult: '融合AI算法与温润触感，定义家庭情感机器人新品类。',
      painPoint: '传统陪伴硬件机械冰冷，缺少情感交互与持续陪伴粘性。',
      action: '软硬一体化定义生命感造型、微表情反馈与亲和力品牌语言。',
      result: '上市即获科技与母婴圈层高度认可，荣获多项国际顶级设计大奖。',
      url: '/cases/case-1'
    },
    {
      id: 'xiaoxiandun',
      client: '小仙炖',
      subtitle: '确立“鲜炖燕窝”高端赛道，全维度打造保鲜标杆',
      image: 'https://github.com/minaxyue-ops/MINA/releases/download/1/image.33.png',
      defaultResult: '开创即食滋补冷鲜新品类，连续多年位列全网销量第一。',
      painPoint: '传统燕窝繁琐耗时，即食燕窝品质存疑，亟需信任新支点。',
      action: '定义“鲜炖”品类标准，主导冷鲜包装容器与高端视觉符号。',
      result: '建立国民级鲜炖燕窝第一认知，引爆数十亿级高端滋补赛道。',
      url: '/cases/xiaoxiandun'
    },
    {
      id: 'haidilao',
      client: '海底捞',
      subtitle: '堂食体验延伸至家庭即食，开创便携自热火锅',
      image: 'https://github.com/minaxyue-ops/MINA/releases/download/1/image.37.png',
      defaultResult: '拓宽火锅消费场景，自热即食系列年销售额破数亿元。',
      painPoint: '堂食场景受物理空间与就餐时段限制，外带即食体验严重脱节。',
      action: '定义自加热火锅结构安全与包装模块，沉淀家族化零售视觉。',
      result: '成为快消零售第二增长曲线，引领行业即食火锅标准化浪潮。',
      url: '/cases/case-5'
    },
    {
      id: 'musinno',
      client: '慢阶 Musinno',
      subtitle: '全球首款工作站属性乐谱台，斩获红点至尊奖',
      image: '/src/assets/images/musinno_hero_banner_1785826677156.jpg',
      defaultResult: '从概念草图到批量量产，打通专业音乐设备新品类。',
      painPoint: '专业音乐演奏家排练设备杂乱，传统谱架无法融合现代数字设备。',
      action: '品类定义乐谱工作站形态，完成全套精密机械架构与极简美学。',
      result: '荣获2023红点至尊奖，进驻国内外数十所顶级音乐学府。',
      url: '/cases/musinno'
    },
    {
      id: 'yuexianhuo',
      client: '悦鲜活',
      subtitle: '超瞬时锁鲜技术赋能，打造年轻化高端鲜乳爆品',
      image: 'https://github.com/minaxyue-ops/MINA/releases/download/1/7.15.1.3.gif',
      defaultResult: '0.09s黄金保鲜叙事，助力品牌跃升高端鲜奶第一梯队。',
      painPoint: '常温奶同质化严重，传统鲜奶保质期短且包装视觉老化。',
      action: '聚焦0.09s瞬时锁鲜科技心智，重构人体工学瓶身与年轻化视觉。',
      result: '销量年复合增长超100%，成为新一代高端鲜奶现象级单品。',
      url: '/cases/case-v2-1'
    },
    {
      id: 'cotti',
      client: '库迪咖啡 Cotti',
      subtitle: '塑造全民咖啡品类创新概念，打通全链路商业闭环',
      image: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=800&q=80',
      defaultResult: '打造爆品咖啡家族化视觉与包装体验，助力全国万店规模快速扩张。',
      painPoint: '新消费咖啡赛道同质化严重，亟需高辨识度与极强亲和力的年轻化爆品体验。',
      action: '提炼全民咖啡品类价值，一体化定义爆品杯型结构、环保包材与超级视觉识别。',
      result: '达成数千家门店开业爆单，成为咖啡零售增长最快的现象级独角兽品牌之一。',
      url: '/cases/case-3'
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
      q: '1. 三品合一全案和只做产品／品牌设计有什么区别？',
      a: '传统单点设计解决“好看”或“好用”的局部痛点，而“三品合一”全案从顶层品类战略开始，将赛道机会、爆品产品研发与品牌定位体系紧密绑在一起。确保每一个设计动作都指向明确的爆品打造与商业增长，避免“策略落不下去”或“设计无法赋能增长”的问题。'
    },
    {
      q: '2. 什么阶段的企业适合启动品类创新？',
      a: '适合面临三类状况的企业：一是原有产品面临价格战同质化内卷；二是希望开辟第二增长曲线的成熟企业；三是具备制造与供应链优势但缺乏品类与品牌溢价的企业。'
    },
    {
      q: '3. 项目周期通常如何安排？',
      a: '典型全案合作周期为 3 至 6 个月。通常分为三大阶段：第 1 个月完成品类机会诊断与竞争地图排查；第 2-3 个月完成品类战略定义、产品矩阵与品牌体系设计；第 4-6 个月推进工程结构样机与上市营销引爆落地。'
    },
    {
      q: '4. 是否包含产品研发、量产与供应链协同？',
      a: '包含。洛可可拥有业内领先的工业设计与供应链资源网络，提供从产品定义、外观结构工程、手板样机研发到对接优质生产供应链的完整量产落地支持。'
    },
    {
      q: '5. 是否包含品牌命名、VI、包装和传播？',
      a: '包含。品牌创新模块涵盖品类命名、品牌定位、超级话语体系、VI 视觉美学体系、爆品包装设计以及上市整合营销节奏规划。'
    },
    {
      q: '6. 可以先从品类战略诊断开始合作吗？',
      a: '可以。我们支持阶段式合作，企业可先启动为期 3-4 周的“品类创新战略诊断”，通过扫描竞争地图与扫描潜在赛道机会明确方向后，再推进后续的产品与品牌全案开发。'
    }
  ];

  return (
    <div className="w-full bg-[#FFFFFF] text-[#4D4D4D] font-sans antialiased">
      
      {/* ================= HERO SECTION ================= */}
      <section id="three-in-one-hero" className="py-20 md:py-28 text-center bg-radial from-neutral-50/80 via-neutral-50/20 to-white relative overflow-hidden border-b border-black/[0.06]">
        <div className="max-w-4xl mx-auto px-[5%] relative z-10 flex flex-col items-center">
          
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="h-[1.5px] w-6 bg-[#0071E3]"></span>
            <span className="text-[11px] tracking-[0.25em] font-semibold text-[#0071E3] font-mono uppercase">THREE-IN-ONE CATEGORY INNOVATION</span>
            <span className="h-[1.5px] w-6 bg-[#0071E3]"></span>
          </div>

          <motion.h1 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="hero-title text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight text-[#1D1D1F] leading-[1.05] font-display"
          >
            <span className="text-[#0071E3]">三品合一</span>
            <span className="text-[#1D1D1F]"> · </span>
            <span className="text-[#1D1D1F]">品类创新咨询</span>
          </motion.h1>

          <p className="text-xs md:text-sm font-medium tracking-[0.2em] text-[#86868B] uppercase mt-4 font-mono">
            LKK Consulting & Design Group
          </p>

          <p className="text-sm md:text-base text-[#86868B] max-w-3xl mt-8 leading-relaxed font-normal text-center text-balance">
            面向希望开辟新赛道、摆脱行业内卷、实现长期增长的企业。以“品类战略”为总纲，统筹推进“产品0-1”与“品牌0-1”协同落地，构建回答“做什么、如何被选择、如何被体验”的完整市场闭环，助力企业打造细分赛道品类标杆。
          </p>

          <div className="mt-8">
            <button 
              onClick={() => onNavigateDetail ? onNavigateDetail('/three-in-one') : onOpenContactModal()}
              className="bg-[#0071E3] hover:bg-[#0077ED] active:scale-[0.98] text-white font-medium px-8 py-3.5 rounded-full text-sm transition-all duration-300 shadow-sm hover:shadow-lg flex items-center gap-2 cursor-pointer group"
            >
              三品合一
              <ArrowRight className="w-4 h-4 text-white transform group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

        </div>
      </section>

      {/* QUANTIFIED ACHIEVEMENTS SECTION */}
      <section className="py-12 md:py-16 bg-[#F5F5F7] border-b border-black/[0.06]">
        <div className="max-w-[95%] xl:max-w-[1440px] w-full mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-black/[0.04] shadow-xs hover:shadow-md transition-all duration-300 text-center flex flex-col justify-center">
              <div className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#1D1D1F] font-display">
                <CounterComponent target={22} />年
              </div>
              <div className="text-xs sm:text-sm text-[#86868B] mt-2 font-normal">行业经验积淀</div>
            </div>

            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-black/[0.04] shadow-xs hover:shadow-md transition-all duration-300 text-center flex flex-col justify-center">
              <div className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#1D1D1F] font-display">
                <CounterComponent target={600} />+
              </div>
              <div className="text-xs sm:text-sm text-[#86868B] mt-2 font-normal">专业奖项认证</div>
            </div>

            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-black/[0.04] shadow-xs hover:shadow-md transition-all duration-300 text-center flex flex-col justify-center">
              <div className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#1D1D1F] font-display">
                <CounterComponent target={1000} />+
              </div>
              <div className="text-xs sm:text-sm text-[#86868B] mt-2 font-normal">行业头部客户认可</div>
            </div>

            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-black/[0.04] shadow-xs hover:shadow-md transition-all duration-300 text-center flex flex-col justify-center">
              <div className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#1D1D1F] font-display">
                <CounterComponent target={10000} />+
              </div>
              <div className="text-xs sm:text-sm text-[#86868B] mt-2 font-normal">产品成功落地</div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SECTION 01: 适合哪些企业 (WHO IT IS FOR / 01) ================= */}
      <section id="section-who-it-is-for" className="py-20 lg:py-28 bg-[#FFFFFF] border-b border-black/[0.06]">
        <div className="max-w-[95%] xl:max-w-[1440px] w-full mx-auto">
          
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16 gap-6">
            <div>
              <span className="text-xs font-semibold text-[#0071E3] uppercase tracking-widest font-mono block mb-2">
                01 / WHO IT IS FOR
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#1D1D1F] font-display">
                适合需要系统突破的企业
              </h2>
            </div>
            <p className="text-sm md:text-base text-[#86868B] max-w-md leading-relaxed font-normal">
              不是所有项目都需要三品合一。它面向的是需要开辟新赛道、统筹产品与品牌长期增长的企业。
            </p>
          </div>

          {/* 4 Enterprise Columns - Apple Bento Style */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {TARGET_ENTERPRISES.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <div key={idx} className="group p-8 rounded-3xl bg-[#F5F5F7] border border-black/[0.04] hover:bg-white hover:shadow-xl hover:border-black/[0.08] transition-all duration-500 flex flex-col justify-between min-h-[260px]">
                  <div>
                    {/* Fine Line Circle Icon */}
                    <div className="w-12 h-12 rounded-2xl bg-white shadow-xs border border-black/[0.06] flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-[#0071E3] transition-all duration-300">
                      <IconComp className="w-5 h-5 text-[#1D1D1F] group-hover:text-white transition-colors duration-300" />
                    </div>

                    <h3 className="text-xl font-bold text-[#1D1D1F] mb-3 font-display tracking-tight">
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

      {/* ================= SECTION 02: 你是否遇到这些增长问题 (CHALLENGES / 02) ================= */}
      <section id="section-growth-challenges" className="py-20 lg:py-28 bg-[#FFFFFF] border-b border-black/[0.06]">
        <div className="max-w-[95%] xl:max-w-[1440px] w-full mx-auto">
          
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16 gap-6">
            <div>
              <span className="text-xs font-semibold text-[#0071E3] uppercase tracking-widest font-mono block mb-2">
                02 / CHALLENGES
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#1D1D1F] font-display">
                增长为什么停在原地
              </h2>
            </div>
            <p className="text-sm md:text-base text-[#86868B] max-w-md leading-relaxed font-normal">
              当企业持续投入却没有新增量，问题往往不在单点设计，而在于缺少一条清晰的品类增长路径。
            </p>
          </div>

          {/* 2x2 Bento Cards - Apple Clean High-Contrast Aesthetic */}
          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6">
            {CHALLENGES.map((item, idx) => (
              <div 
                key={item.num}
                className="relative rounded-3xl bg-[#F5F5F7] border border-black/[0.04] p-8 sm:p-10 lg:p-12 hover:bg-white hover:shadow-xl hover:border-black/[0.08] transition-all duration-500 flex flex-col justify-between group min-h-[240px]"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono text-2xl sm:text-3xl font-bold text-[#0071E3] select-none">
                      {item.num}
                    </span>
                    <span className="w-2 h-2 rounded-full bg-black/10 group-hover:bg-[#0071E3] transition-colors duration-300"></span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-[#1D1D1F] mb-3 font-display tracking-tight leading-snug group-hover:text-[#0071E3] transition-colors duration-200">
                    {item.title}
                  </h3>

                  <p className="text-sm sm:text-base text-[#86868B] leading-relaxed font-normal">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-black/[0.04] flex items-center justify-end">
                  <span className="text-xs font-mono font-medium text-[#86868B] uppercase tracking-wider group-hover:text-[#0071E3] transition-colors">
                    CHALLENGE {item.num}
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ================= SECTION 03: 方法论／核心服务结构 (METHOD / 03) ================= */}
      <section id="section-seven-steps" className="py-20 lg:py-28 bg-[#FFFFFF] border-b border-black/[0.06]">
        <div className="max-w-[95%] xl:max-w-[1440px] w-full mx-auto">
          
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16 gap-6">
            <div>
              <span className="text-xs font-semibold text-[#0071E3] uppercase tracking-widest font-mono block mb-2">
                03 / METHOD
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#1D1D1F] font-display">
                品类创新七步流程
              </h2>
            </div>
            <p className="text-sm md:text-base text-[#86868B] max-w-md leading-relaxed font-normal">
              从发现机会、定义新品类，到构建产品品牌系统并推动市场引爆，形成完整的品类创新闭环。
            </p>
          </div>

          {/* Strategic Roadmap - Apple Bento Stepper */}
          <div className="w-full">
            
            {/* Desktop Horizontal Editorial Roadmap */}
            <div className="hidden lg:block">
              
              {/* Grouping Top Track */}
              <div className="grid grid-cols-7 gap-4 mb-8">
                <div className="col-span-4 flex items-center justify-between px-4 py-2.5 rounded-full bg-[#F5F5F7] border border-black/[0.04]">
                  <span className="font-mono text-xs font-bold text-[#0071E3] tracking-wider uppercase">
                    开 / 01–04
                  </span>
                  <span className="text-xs text-[#86868B] font-medium">机会洞察与战略确立</span>
                </div>
                <div className="col-span-2 flex items-center justify-between px-4 py-2.5 rounded-full bg-[#F5F5F7] border border-black/[0.04]">
                  <span className="font-mono text-xs font-bold text-[#0071E3] tracking-wider uppercase">
                    创 / 05–06
                  </span>
                  <span className="text-xs text-[#86868B] font-medium">产品与品牌协同构建</span>
                </div>
                <div className="col-span-1 flex items-center justify-between px-4 py-2.5 rounded-full bg-[#F5F5F7] border border-black/[0.04]">
                  <span className="font-mono text-xs font-bold text-[#0071E3] tracking-wider uppercase">
                    引爆 / 07
                  </span>
                  <span className="text-xs text-[#86868B] font-medium">全域引爆</span>
                </div>
              </div>

              {/* 7 Columns Apple Bento Cards */}
              <div className="grid grid-cols-7 gap-4">
                {SEVEN_STEPS.map((step, idx) => (
                  <motion.div
                    key={step.num}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.06 }}
                    className="group rounded-2xl bg-[#F5F5F7] hover:bg-white border border-black/[0.04] hover:border-black/[0.08] hover:shadow-lg p-5 flex flex-col justify-between transition-all duration-300 min-h-[300px]"
                  >
                    <div>
                      {/* Number */}
                      <div className="font-mono text-2xl font-bold text-[#0071E3] mb-3">
                        {step.num}
                      </div>

                      {/* Title */}
                      <h3 className="text-base font-bold text-[#1D1D1F] mb-4 font-display tracking-tight group-hover:text-[#0071E3] transition-colors">
                        {step.title}
                      </h3>

                      {/* Keywords List */}
                      <div className="space-y-1.5 pt-3 border-t border-black/[0.06]">
                        {step.keywords.map((kw, kIdx) => (
                          <div 
                            key={kIdx} 
                            className="text-xs text-[#86868B] group-hover:text-[#1D1D1F] transition-colors font-normal leading-relaxed"
                          >
                            • {kw}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="w-full h-1 rounded-full bg-black/5 group-hover:bg-[#0071E3] transition-colors mt-4" />
                  </motion.div>
                ))}
              </div>

            </div>

            {/* Mobile Vertical Editorial Roadmap */}
            <div className="block lg:hidden space-y-4">
              {SEVEN_STEPS.map((step) => (
                <div key={step.num} className="rounded-2xl bg-[#F5F5F7] p-5 border border-black/[0.04]">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2.5">
                      <span className="font-mono text-xl font-bold text-[#0071E3]">
                        {step.num}
                      </span>
                      <h3 className="text-base font-bold text-[#1D1D1F] font-display">
                        {step.title}
                      </h3>
                    </div>
                    <span className="text-[11px] font-mono text-[#0071E3] bg-white px-2.5 py-0.5 rounded-full border border-black/[0.04]">
                      {step.phase}
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-1.5 pt-2 border-t border-black/[0.04]">
                    {step.keywords.map((kw, kIdx) => (
                      <span key={kIdx} className="text-xs bg-white text-[#86868B] px-2.5 py-1 rounded-full border border-black/[0.04]">
                        {kw}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>
      </section>

      {/* ================= SECTION 04: 品类先行，产品与品牌协同 (SERVICE DEFINITION / 04) ================= */}
      <CategorySection04
        sectionId="section-service-definition"
        badge="SERVICE DEFINITION / 04"
        title="品类先行，产品与品牌协同"
        description="以品类战略确定新赛道，再同步完成产品 0-1 与品牌 0-1，让企业拥有可被市场识别、选择并持续增长的新品类。"
        leftCard={{
          badgeTag: 'ONE SYSTEM',
          badgeText: '全案系统化突破',
          title: '全案系统化突破',
          description: '不再做割裂的单点设计。品类战略指引方向，产品体验筑牢底座，品牌传播塑造感知，三者协同形成高爆发增长闭环。',
          image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=85',
          ctaText: '预约三品合一专家咨询',
          onCtaClick: onOpenContactModal,
        }}
        rightServices={THREE_CORE_SERVICES}
      />

      {/* ================= SECTION 05: 9个案例横向滑动 / Carousel (CASE STUDIES / 05) ================= */}
      <section id="section-case-studies" className="py-20 lg:py-28 bg-[#FFFFFF] border-b border-black/[0.06] overflow-hidden">
        <div className="max-w-[95%] xl:max-w-[1440px] w-full mx-auto">
          
          {/* Header with Navigation Arrows & Indicator */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16 gap-6">
            <div>
              <span className="text-xs font-semibold text-[#0071E3] uppercase tracking-widest font-mono block mb-2">
                05 / CASE STUDIES
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#1D1D1F] font-display">
                从策略到市场的真实结果
              </h2>
            </div>
            
            <div className="flex items-center justify-between md:justify-end gap-6">
              <p className="text-sm md:text-base text-[#86868B] max-w-md leading-relaxed font-normal hidden sm:block">
                精选 9 个三品合一标杆全案，支持向右拖拽/滑动浏览下一组案例，支持触控与拖拽手势。
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
                              全案案例
                            </span>
                          </div>

                          {/* Dark Semi-transparent Overlay on Hover (Desktop) */}
                          <div className="absolute inset-0 bg-[#1D1D1F]/90 backdrop-blur-sm p-6 text-white flex flex-col justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden lg:flex">
                            <div className="space-y-3 text-left">
                              <div>
                                <div className="text-[10px] font-mono font-medium uppercase tracking-wider text-[#86868B] mb-0.5">客户原有困境</div>
                                <p className="text-xs md:text-sm leading-relaxed text-neutral-200 line-clamp-2">{item.painPoint}</p>
                              </div>
                              <div>
                                <div className="text-[10px] font-mono font-medium uppercase tracking-wider text-[#0071E3] mb-0.5">洛可可关键动作</div>
                                <p className="text-xs md:text-sm leading-relaxed text-white line-clamp-2">{item.action}</p>
                              </div>
                              <div>
                                <div className="text-[10px] font-mono font-medium uppercase tracking-wider text-emerald-400 mb-0.5">项目结果</div>
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
        id="section-faq" 
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
              围绕服务边界、项目周期和合作方式，提前回答常见决策问题。
            </p>
          </div>
        </div>

        {/* Apple FAQ Bento Grid / Accordion Cards */}
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

