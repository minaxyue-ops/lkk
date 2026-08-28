import React, { useState } from 'react';
import { motion } from 'motion/react';

interface SuccessPathPageProps {
  onOpenContactModal?: () => void;
}

export const SuccessPathPage: React.FC<SuccessPathPageProps> = () => {
  const [activeCategory, setActiveCategory] = useState<string>('全部');

  const categories = ['全部', '核心方法论', '关于洛可可', '解决方案'];

  // 32 条完整的 FAQ 列表，覆盖全方位问答
  const faqList = [
    {
      q: '什么是洛可可的“三品合一”方法论？',
      a: '“三品合一”是洛可可集团历时22年沉淀的核心创新方法论，指将“品类创新（战略定位）”、“产品创新（极致工业设计/结构/体验）”与“品牌创新（视觉IP/营销话语/核心价值）”高度整合。通过三者高度协同，确保企业的战略定位不跑偏，设计能真正落地，品牌有爆发声量，助力企业从品类机会切入，直达商业爆品，成就细分品类冠军。',
      cat: '核心方法论',
    },
    {
      q: '品类创新咨询与传统的管理咨询/品牌咨询相比，核心差异在哪里？',
      a: '传统管理咨询侧重于宏观的财务战略和组织规划，品牌咨询侧重于视觉升级或单纯的营销创意。而洛可可的品类创新咨询是“战略+产品设计+量产落地”的三位一体。我们不仅帮助企业挖掘高成长、红利巨大的细分赛道（定义品类），更凭借自身行业领先的工业设计与供应链闭环能力，直接研发打造出承载该定位的爆品（产品创新）和超级符号（品牌创新），实现“咨询即爆品，落地即增长”。',
      cat: '核心方法论',
    },
    {
      q: '洛可可如何帮助企业在红海或空白市场中寻找新的品类机会？',
      a: '我们通过独创的“品类扫描仪”研究模型，基于用户痛点深挖、竞争对手防御空隙、产业技术革新红利、及政策和消费趋势变化进行全景扫描。我们会深入一线进行海量定量数据分析和深度定性洞察，过滤低天花板赛道，最终定位出一个既具备爆发性增长空间、又符合企业基因与制造壁垒的最佳“黄金细分品类”。',
      cat: '核心方法论',
    },
    {
      q: '品类创新“七步法”具体包含哪些闭环步骤？',
      a: '洛可可品类创新完整闭环包括：1. 洞察并锚定细分品类机会；2. 科学定义核心品类内涵与溢价点；3. 打造标志性的核心爆品（拳头产品设计）；4. 提炼占领心智的品类核心营销话语；5. 构建具辨识度的超级品牌视觉IP系统；6. 整合全域商业渠道与新媒体营销场景；7. 行业咨询专家与主笔设计团队进行“长期战术陪跑”。',
      cat: '核心方法论',
    },
    {
      q: '中小企业或传统制造型企业是否适合启动品类创新咨询？',
      a: '非常适合。传统制造型企业往往面临“有极强制造与代工能力、但无自主高毛利品牌，陷入低价竞争”的瓶颈。中小企业则往往资源受限，无法与头部巨头正面对冲。品类创新正是中小企业和传统制造业“以小博大、破局逆袭”的最优路径。通过精确定位一个高辨识度、低防御力的细分品类，饱和攻击，能够快速成为这个全新赛道的领跑者。',
      cat: '解决方案',
    },
    {
      q: '洛可可如何保证品类咨询方案能真正上市量产，而不仅仅是纸上谈兵？',
      a: '洛可可是中国首批“国家级工业设计示范企业”，集团内拥有实力雄厚的外观设计师、机械结构工程团队、材料学家及打样测试中心，并在全国拥有强大的柔性制造供应链网络。在进行品类咨询和爆品定义伊始，设计工程和供应链团队就会全程介入。我们在方案阶段就会进行结构可行性、材料工艺难度和目标BOM成本核算评估，确保每一款方案都具备高度的量产上市可行性。',
      cat: '解决方案',
    },
    {
      q: '“产品创新”在“三品合一”体系中扮演了怎样的角色？',
      a: '产品是品类最本质的硬件载体。没有极致的产品力作为护城河，再惊艳的品类战略和品牌口号也只是无源之水。洛可可产品创新不仅打磨令人惊艳的外观美学，更深入打通人性化的交互体验、先进的结构堆叠、创新的降本材料与人机工程学，让消费者在使用产品的瞬间，直观感知到新品类的核心价值，彻底转化为品牌忠实用户。',
      cat: '核心方法论',
    },
    {
      q: '“品牌创新 0-1 全案咨询”具体包含哪些服务？',
      a: '这是洛可可专门为从0到1孵化的新品牌，或成熟集团开拓新业务线量身定制的无忧管家式服务。具体涵盖：品牌核心定位、品牌专属命名、全套话语表达体系、标志性的超级LOGO及辅助符号视觉系统、高颜值的核心产品线包装设计、品牌视觉规范白皮书以及商业空间体验终端的整体设计，帮助新品牌生来便具备无可争议的主角姿态。',
      cat: '解决方案',
    },
    {
      q: '洛可可目前主要服务哪些类型的客户？',
      a: '我们的服务涵盖世界500强企业（如诺基亚、西门子、三星、奥迪等）、国内500强行业支柱（如海尔、美的、茅台、青岛啤酒、京东、海底捞等），以及大量在细分行业深耕的中坚腰部企业，和高爆发性成长的行业新星品牌（如小仙炖、悦鲜活、库迪咖啡等）。无论企业处于哪个发展阶段，我们都能量身定制高ROI的创新战略方案。',
      cat: '关于洛可可',
    },
    {
      q: '一个典型的品类创新咨询项目合作周期大概有多久？',
      a: '典型的系统化全案合作周期通常在 3 到 6 个月。前期深度用户洞察与品类定位大约需要 4 到 6 周；中期进行标志性爆品的产品设计（外观与结构工程）及超级品牌视觉IP/包装设计大约需要 8 到 12 周；后期开模打样、试产验证与营销话语提炼约需要 4 到 6 周。我们也会提供 12 个月以上的长期专家顾问委员会陪跑，确保成果彻底落地生根。',
      cat: '解决方案',
    },
    {
      q: '洛可可品类创新咨询的收费模式是怎样的？',
      a: '我们坚持“一案一议”的透明定制化收费标准。收费会依据企业所处的产业赛道复杂度、项目需要覆盖 Market 调研深度与广度、工业产品设计的工程研发技术难度、以及所需的供应链配对精度等因素综合合理核算。我们会给出不同层级的方案配置供企业灵活选择，力保每一分创新投入都能创造显著的商业增长溢价。',
      cat: '解决方案',
    },
    {
      q: '洛可可在品类创新领域累积获得了哪些重磅奖项认证？',
      a: '洛可可是全球公认的创意设计实力灯塔，已累积荣获红点设计奖（Red Dot）、德国iF设计奖、美国IDEA、日本G-Mark、中国工业设计红星奖、台湾金点设计奖等在内的国内外重磅奖项超过 600 项。我们不仅注重美学价值，更将这些设计标准转化为企业在终端市场降维打击的绝对竞争壁垒。',
      cat: '关于洛可可',
    },
    {
      q: '如何启动与洛可可创新咨询团队的第一步合作？',
      a: '您只需在页面底部的咨询表单中提交您的联系方式，或直接拨打我们的官方服务专线：400-062-3130。我们的垂直行业总监将在 24 小时内与您直接取得联系，开展深度的一对一线上/线下商业痛点诊断，并在会后免费为您匹配并出具第一版极具针对性的《项目定制建议书框架》。',
      cat: '关于洛可可',
    },
    {
      q: '洛可可在消费电子与智能硬件品类有哪些成功落地经验？',
      a: '洛可可曾为艾肯打造小智智能净饮机、思哲睿手术机器人、埃斯顿伺服驱动器等系列高精尖硬件爆品。我们在芯片电路板微型化堆叠、热散热结构优化、人机工学交互屏设计方面拥有上千项专利积淀，助力硬件产品获得美学与销量的双重突破。',
      cat: '解决方案',
    },
    {
      q: '工业设计与结构研发环节如何与品牌痛点洞察实时联动？',
      a: '在项目启动伊始，洛可可的商业咨询顾问、外观设计师与结构工程师即组建联合战术小组。用户深访与竞争对手拆解的每一条核心结论，都会直接转化为设计规范中的“杀手锏功能”与“超级视觉符号”，实现策略与设计的无缝衔接。',
      cat: '核心方法论',
    },
    {
      q: '洛可可如何帮助传统快消企业完成年轻化产品升级与包装重塑？',
      a: '我们通过对Z世代消费者生活方式与审美变迁的深入洞察，为悦鲜活鲜乳、良品铺子零食、三泉冷面等知名品牌进行了包装重塑。结合环保新型材料与高视觉张力的插画IP，让传统品牌在电商与实体货架上脱颖而出。',
      cat: '解决方案',
    },
    {
      q: '在医疗健康与高端器械品类，洛可可具备怎样的资质与能力？',
      a: '洛可可设有专门的医疗器械设计中心，严格遵循ISO13485医疗质量管理体系认证。团队深刻理解无菌防污设计、人机工学抗疲劳握把及FDA/CE注册认证的工程要求，已为思哲睿、鱼跃医疗等企业研发数十款国家级优秀医疗设备。',
      cat: '关于洛可可',
    },
    {
      q: '什么是洛可可的“爆品营销杠杆”与商业转化路径？',
      a: '爆品营销杠杆是指以极致的产品体验和极具传播力的超级符号为支点，借助新媒体与社交圈层的自然裂变，以极低的获客成本撬动几何级增长。洛可可不仅设计产品，更设计产品的“自传播属性”。',
      cat: '核心方法论',
    },
    {
      q: '洛可可如何协助企业打造具高度辨识度的超级品牌IP形象？',
      a: '我们从企业的历史文化与产品核心价值中提炼灵感，如故宫博物院“故宫猫”IP及飞鹤“森林伙伴”IP。通过IP性格设定、3D形象雕刻、文创衍生品开发与商业空间拓展，为品牌注入持久的情感溢价。',
      cat: '解决方案',
    },
    {
      q: '项目实施过程中，客户团队需要配合投入哪些资源与协同人手？',
      a: '客户需指定一名拥有决策权的负责人（如董事长、CMO或产品总监）牵头，并安排市场、研发、供应链核心人员参与关键里程碑节点（如需求对齐会、中期概念评审会、终案发布会）的讨论，确保方案决策顺畅。',
      cat: '解决方案',
    },
    {
      q: '洛可可的供应链柔性匹配服务包含哪些具体内容？',
      a: '洛可可依托强大的洛客（LKKER）制造生态，精选全国超5000家经过品质审计的精密模具厂、注塑厂、SMT贴片厂与包装印刷厂。我们为客户提供BOM成本预估、手板打样、小批量试产及大货量产全流程供应链撮合与品质把控。',
      cat: '解决方案',
    },
    {
      q: '在新能源与工业装备领域，洛可可的创新逻辑有何异同？',
      a: '工业装备与新能源产品更强调稳定性、防护等级（IP rating）与模块化维护效率。洛可可在保持极佳家族化外观美学的同时，通过钢板冲压工艺优化、散热风道仿真分析与人机操作台优化，大幅提升设备的工业质感与生产安全性。',
      cat: '解决方案',
    },
    {
      q: '洛可可如何保障项目全流程的商业机密与知识产权安全？',
      a: '在合作前，我们与客户签署具有法律效力的严格保密协议（NDA）。内部实行项目组隔离制度与商业机密加密管理，所有专利成果与设计著作权最终均归客户所有，全面保障客户的核心商业资产安全。',
      cat: '关于洛可可',
    },
    {
      q: '品牌话语表达体系是如何帮助企业占领消费者心智的？',
      a: '好产品需要一句“一秒能听懂、一听就记住、一记就购买”的超级口号。洛可可品牌咨询团队提炼直击痛点的营销话语，配合终端货架与新媒体画面，形成强有力的组合拳，降低品牌的二次传播成本。',
      cat: '核心方法论',
    },
    {
      q: '针对高爆发成长的初创团队，洛可可是否有轻量化的敏捷创新方案？',
      a: '有的。我们推出了针对高潜初创企业与DTC品牌的“敏捷爆品加速营”，缩减非必要的前期沉淀环节，聚焦于核心单品的外观体验重塑与关键定位突破，帮助初创团队在最短时间内推出令人惊艳的产品。',
      cat: '解决方案',
    },
    {
      q: '洛可可的海外国际设计团队与全球市场拓展能力如何？',
      a: '洛可可先后在欧洲与东亚建立了合作设计据点，聚集了数十位具有国际视野的外籍资深设计师。我们不仅能帮国内企业完成产品出海的本地化审美适配，还能帮助海外品牌顺利打入中国市场。',
      cat: '关于洛可可',
    },
    {
      q: '交付完成后，洛可可是否提供长期的顾问与战术陪跑服务？',
      a: '是的。我们提供最长可达1-3年的“长期战术陪跑”服务。垂直行业总监与主笔设计师将作为企业的外部专家顾问，参与新产品迭代规划、市场营销反馈修正及供应链技术难题攻坚。',
      cat: '解决方案',
    },
    {
      q: '洛可可如何帮助企业进行产品线的家族化与阵列式规划？',
      a: '我们为企业制定贯穿旗舰款、主力款与入门款的“家族化视觉DNA（PI）”。通过统一的线条语言、材质纹理与按键交互逻辑，建立强有力的品牌视觉识别阵列，降低多款产品的研发与模具成本。',
      cat: '核心方法论',
    },
    {
      q: '人机工程学与用户体验研究在爆品打造中占据什么地位？',
      a: '用户体验研究是洛可可产品研发的基石。我们建立有人体尺寸数据库与握持舒适度测试系统，在设计初期即进行大量模型软手板摸底，确保任何一款产品不仅好看，而且更好用、更省力。',
      cat: '核心方法论',
    },
    {
      q: '洛可可设计的产品在终端市场表现出的投资回报率（ROI）如何？',
      a: '洛可可服务的近万个案例中，绝大多数客户实现了数十倍乃至上百倍的商业回报。极致的产品设计不仅能大幅提升产品溢价与毛利润，更能显著降低营销推流成本，实现长期可持续增长。',
      cat: '关于洛可可',
    },
    {
      q: '在复杂多变的宏观经济环境下，品类创新为何是企业的核心避风港？',
      a: '当旧赛道陷入价格战与存量博弈时，唯有通过品类创新开辟增量市场才能打破内卷。品类创新帮助企业摆脱同质化厮杀，建立独有的市场定价权与品牌护城河，是企业跨越经济周期的致胜关键。',
      cat: '核心方法论',
    },
    {
      q: '提交咨询需求后，洛可可的商务与专家团队多久能反馈方案框架？',
      a: '在您提交联系方式后，我们的垂直行业总监将在24小时内进行首轮沟通诊断，并在48-72小时内为您量身出具初版项目建议书与合作规划框架，高效响应您的创新诉求。',
      cat: '关于洛可可',
    },
  ];

  // 根据当前激活标签过滤（若为'全部'则显示全部）
  const filteredFaqList = activeCategory === '全部' 
    ? faqList 
    : faqList.filter(item => item.cat === activeCategory);

  return (
    <div className="w-full bg-white text-neutral-900 min-h-screen">
      
      {/* 1. BREADCRUMB & PAGE HEADER (参照案例页 slogan 排版设计规范) */}
      <div className="bg-neutral-50/70 border-b border-neutral-100 py-10 md:py-14">
        <div className="max-w-[95%] w-full mx-auto">
          {/* Breadcrumbs */}
          <div className="flex items-center gap-2 text-xs text-neutral-500 mb-4 font-mono">
            <a href="/" className="hover:text-[#007BC7] transition-colors">首页</a>
            <span>/</span>
            <span className="text-neutral-900 font-semibold">成功路径</span>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div>
              <span className="text-xs font-bold text-[#007BC7] uppercase tracking-widest font-mono">
                LKK SUCCESS PATH
              </span>
              <h1 className="hero-title text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight text-neutral-900 mt-2 leading-[1.05] font-display">
                <span className="text-neutral-900">成功路径</span>
                <span className="text-neutral-400 font-light mx-2">·</span>
                <span className="text-[#007BC7]">三品合一</span>
              </h1>
            </div>
            <p className="text-sm text-neutral-500 max-w-xl leading-relaxed">
              洛可可22年商业创新经验沉淀，从战略认知、产品研发到爆品营销杠杆的全链路闭环落地图谱。
            </p>
          </div>
        </div>
      </div>

      {/* 2. FAQ / 问答板块 —— 包含专属分类筛选栏，内容为单列展示 */}
      <section id="success-path-faq" className="py-8 md:py-12 bg-white w-full border-b border-[#E5E5E5]">
        
        {/* 属于 FAQ 板块的分类筛选栏 —— 取消悬浮固定 */}
        <div className="max-w-[95%] w-full mx-auto mb-8 py-3 px-4 bg-white border-b border-neutral-200/60 rounded-xl">
          <div className="flex items-center justify-start md:justify-center gap-2 sm:gap-3 md:gap-4 overflow-x-auto no-scrollbar py-1">
            {categories.map((cat) => {
              const isActive = activeCategory === cat;
              const count = cat === '全部' ? faqList.length : faqList.filter(item => item.cat === cat).length;

              return (
                <motion.button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.97 }}
                  className={`relative px-4 py-2 rounded-full text-sm md:text-[15px] font-medium transition-all duration-200 cursor-pointer border-none bg-transparent flex items-center gap-2 shrink-0 select-none ${
                    isActive
                      ? 'text-[#007BC7] font-semibold'
                      : 'text-[#595959] hover:text-[#1a1a1a] hover:bg-neutral-100/70'
                  }`}
                >
                  {/* 活动状态的高亮背景衬底 */}
                  {isActive && (
                    <motion.div
                      layoutId="activeCategoryBg"
                      className="absolute inset-0 bg-blue-50/80 rounded-full border border-blue-100"
                      transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                    />
                  )}

                  {/* 标签文本 */}
                  <span className="relative z-10">{cat}</span>

                  {/* 数量计数 Badge */}
                  <span
                    className={`relative z-10 text-xs px-2 py-0.5 rounded-full font-mono transition-colors duration-200 ${
                      isActive
                        ? 'bg-[#007BC7] text-white font-bold'
                        : 'bg-neutral-100 text-neutral-500 group-hover:bg-neutral-200'
                    }`}
                  >
                    {count}
                  </span>
                </motion.button>
              );
            })}
          </div>
        </div>

        {/* 单列 FAQ 列表 (Single Column) 带平滑淡入切换动画 */}
        <div className="max-w-[95%] w-full mx-auto">
          <motion.div 
            key={activeCategory}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            className="flex flex-col border-t border-[#E5E5E5]"
          >
            {filteredFaqList.map((item, index) => (
              <div 
                key={index} 
                className="w-full py-6 border-b border-[#E5E5E5] flex flex-col text-left group transition-colors duration-200 hover:bg-neutral-50/50 px-2 sm:px-4 rounded-lg"
              >
                {/* 问题标题（16px，字重600，#1A1A1A，hover 变 #007BC7，0.3s ease 过渡） */}
                <h4 className="text-[16px] font-semibold text-[#1a1a1a] group-hover:text-[#007BC7] transition-colors duration-300 leading-snug flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-neutral-300 group-hover:bg-[#007BC7] transition-colors duration-300 shrink-0"></span>
                  {item.q}
                </h4>

                {/* 回答内容（14px，#4D4D4D，行高1.6，默认直接展示） */}
                <p className="mt-2.5 text-[14px] text-[#4D4D4D] leading-[1.6] pl-3.5">
                  {item.a}
                </p>
              </div>
            ))}
          </motion.div>
        </div>

      </section>

    </div>
  );
};

