import React, { useState } from 'react';
import { ArrowUpRight, Search, PanelLeftClose, PanelLeftOpen } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { ScrollSectionTitle } from './ScrollSectionTitle';

interface CaseDetailPageProps {
  caseId?: string;
  onOpenContactModal: () => void;
  onNavigate: (url: string) => void;
  onSelectRelatedCase?: (caseId: string) => void;
}

interface RelatedCaseItem {
  id: string;
  brand: string;
  title: string;
  category: string;
  industry: string;
  description: string;
  image?: string;
}

// 对应固定相关案例列表
const EXACT_RELATED_CASES: RelatedCaseItem[] = [
  {
    id: 'estun',
    brand: '埃斯顿',
    title: '埃斯顿Codroid02第二代人形机器人',
    category: '工业设计',
    industry: '机器人',
    description: '突破传统工业机器人机械冰冷形象，打造兼具科技感与亲和力的新一代人形机器人',
    image: 'https://github.com/minaxyue-ops/MINA/releases/download/1/image.39.png'
  },
  {
    id: 'musinno',
    brand: '慢阶',
    title: '慢阶「演奏家一号」音乐设备',
    category: '品类创新',
    industry: '文化创意',
    description: '全球首款具有工作站属性的乐谱台，荣获2023红点至尊奖',
    image: '/src/assets/images/musinno_hero_banner_1785826677156.jpg'
  },
  {
    id: 'xiaoxiandun',
    brand: '小仙炖',
    title: '小仙炖·品类创新全案咨询',
    category: '品类创新',
    industry: '食品酒饮',
    description: '开创鲜炖燕窝新品类，三年突破260万份',
    image: 'https://github.com/minaxyue-ops/MINA/releases/download/1/image.33.png'
  },
  {
    id: 'yuexianhuo',
    brand: '悦鲜活',
    title: '悦鲜活年轻化产品包装创新',
    category: '包装设计',
    industry: '食品酒饮',
    description: '打造差异化视觉识别，助力新品牌抢占年轻心智',
    image: '/src/assets/images/case_yuexianhuo.jpg'
  },
  {
    id: 'case-v2-2',
    brand: '良品铺子',
    title: '良品铺子产品包装创新咨询',
    category: '包装设计',
    industry: '食品酒饮',
    description: '从线下走到线上的零食新零售',
    image: 'https://github.com/minaxyue-ops/MINA/releases/download/1/liangpin.jpg'
  },
  {
    id: 'case-category-3',
    brand: '三泉冷面',
    title: '三泉冷面品牌包装创新咨询',
    category: '品牌全案设计',
    industry: '食品酒饮',
    description: '开启美味即享清爽',
    image: 'https://github.com/minaxyue-ops/MINA/releases/download/1/image.33.png'
  },
  {
    id: 'case-category-4',
    brand: '飞鹤茁然',
    title: '飞鹤茁然品牌&产品包装创',
    category: 'IP设计',
    industry: '食品酒饮',
    description: '打造三至六岁儿童专属奶粉品牌',
    image: 'https://github.com/minaxyue-ops/MINA/releases/download/1/image.35.png'
  },
  {
    id: 'case-category-5',
    brand: '庐阳文创',
    title: '庐阳城市品牌文创整案创新',
    category: '品牌全案设计',
    industry: '文化创意',
    description: '创新设计带动文旅产业发展',
    image: 'https://github.com/minaxyue-ops/MINA/releases/download/1/gugong.jpg'
  }
];

const INDUSTRY_TAGS = [
  '全部',
  '工业装备',
  '机器人',
  '新能源',
  '家居家电',
  '智能3C',
  '医疗健康',
  '食品酒饮',
  '连锁零售',
  '美妆个护',
  '文化创意',
  '宠物经济',
  '交通工具',
  '综合行业'
];

const CATEGORY_TAGS = [
  '全部',
  '工业设计',
  '结构设计',
  '生产落地',
  '品牌全案设计',
  'IP设计',
  '包装设计'
];

export default function CaseDetailPage({
  caseId = 'xiaoxiandun',
  onOpenContactModal,
  onNavigate,
  onSelectRelatedCase
}: CaseDetailPageProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeIndustryTag, setActiveIndustryTag] = useState('全部');
  const [activeCategoryTag, setActiveCategoryTag] = useState('全部');
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  const filteredRelatedCases = EXACT_RELATED_CASES.filter((item) => {
    const matchesIndustry =
      activeIndustryTag === '全部' || item.industry === activeIndustryTag;
    const matchesCategory =
      activeCategoryTag === '全部' || item.category === activeCategoryTag;
    const matchesSearch =
      searchQuery.trim() === '' ||
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesIndustry && matchesCategory && matchesSearch;
  });

  const isYueXianHuo = caseId === 'yuexianhuo' || caseId === 'case-v2-1';
  const isMusinno = caseId === 'musinno' || caseId === 'yanzoujia' || caseId === 'musinno-1' || caseId === 'case-musinno' || caseId === 'case-yanzoujia';
  const isEstun = caseId === 'estun' || caseId === 'estun-robot' || caseId === 'case-7' || caseId === 'codroid02' || caseId === 'case-v2-6';

  return (
    <div className="w-full bg-white text-neutral-900 min-h-screen">
      
      {/* 一、Hero 区域 Banner */}
      <div className="bg-neutral-100 border-b border-neutral-200/80 w-full overflow-hidden flex items-center justify-center relative min-h-[140px] md:min-h-[180px] max-h-[320px]">
        <img 
          src={isMusinno ? "/src/assets/images/musinno_hero_banner_1785826677156.jpg" : isEstun ? "https://github.com/minaxyue-ops/MINA/releases/download/1/image.39.png" : isYueXianHuo ? "/src/assets/images/case_yuexianhuo.jpg" : "https://github.com/minaxyue-ops/MINA/releases/download/1/694cfb00bb51b.png"} 
          alt={isMusinno ? "慢阶「演奏家一号」音乐设备 Hero Banner" : isEstun ? "埃斯顿 Codroid 02 第二代人形机器人 Hero Banner" : isYueXianHuo ? "悦鲜活案例 Hero Banner" : "小仙炖案例 Hero Banner"} 
          className="w-full h-full min-h-[140px] md:min-h-[180px] max-h-[320px] object-cover object-center"
        />
      </div>

      {/* 主内容区域 */}
      <div className="w-full max-w-[95%] mx-auto pt-6 md:pt-8 pb-12 md:pb-16 transition-all duration-300">
        
        {/* 折叠后的悬浮展开入口 (ChatGPT 风格浮动入口) */}
        <AnimatePresence>
          {isSidebarCollapsed && (
            <motion.button
              initial={{ opacity: 0, x: -20, scale: 0.95 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: -20, scale: 0.95 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              onClick={() => setIsSidebarCollapsed(false)}
              title="展开探索相关案例侧栏"
              aria-label="展开探索相关案例侧栏"
              className="fixed left-3 sm:left-6 top-[88px] sm:top-[96px] z-30 flex items-center gap-2.5 px-3 sm:px-4 py-2 sm:py-2.5 bg-white/95 backdrop-blur-md shadow-[0_4px_20px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_28px_rgba(0,123,199,0.18)] border border-neutral-200/90 text-[#1A1A1A] hover:text-[#007BC7] rounded-2xl text-xs sm:text-sm font-semibold cursor-pointer transition-all duration-200 group"
            >
              <PanelLeftOpen className="w-4 h-4 text-[#007BC7] group-hover:scale-110 transition-transform" />
              <span className="hidden sm:inline font-medium">探索相关案例</span>
            </motion.button>
          )}
        </AnimatePresence>

        <div className={`anli-content-container relative transition-all duration-300 ${
          isSidebarCollapsed 
            ? 'w-full block' 
            : 'grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start'
        }`}>
          
          {/* 左侧筛选与相关案例栏 (展开状态固定悬浮，不随右侧正文滚动移动) */}
          <AnimatePresence initial={false}>
            {!isSidebarCollapsed && (
              <motion.aside 
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -16 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="lg:col-span-3 w-full lg:sticky lg:top-6 lg:self-start z-20"
              >
                <div className="anli-content-left space-y-6 bg-white p-4 sm:p-5 rounded-3xl border border-neutral-200/60 shadow-xs max-h-[calc(100vh-48px)] overflow-y-auto [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-thumb]:bg-neutral-200 hover:[&::-webkit-scrollbar-thumb]:bg-neutral-300 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-transparent">
                  <div>
                    <h3 className="text-base font-bold text-[#1A1A1A] mb-4 font-display flex items-center justify-between">
                      <span className="flex items-center gap-2">
                        <span>探索相关案例</span>
                        <span className="text-xs font-mono text-[#007BC7] font-semibold">RELATED</span>
                      </span>
                      <button
                        onClick={() => setIsSidebarCollapsed(true)}
                        title="收起侧栏"
                        aria-label="收起侧栏"
                        className="p-1.5 text-neutral-400 hover:text-[#007BC7] hover:bg-neutral-100 rounded-lg transition-colors cursor-pointer"
                      >
                        <PanelLeftClose className="w-4 h-4" />
                      </button>
                    </h3>

                    <div className="relative mb-5">
                      <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400 pointer-events-none" />
                      <input 
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder="搜索案例..."
                        className="w-full pl-10 pr-3 py-2 bg-neutral-50/80 focus:bg-white text-xs sm:text-sm text-[#1A1A1A] placeholder-neutral-400 rounded-xl border border-[#E5E5E5] focus:border-[#007BC7] focus:shadow-[0_0_0_3px_rgba(0,123,199,0.12)] outline-none transition-all duration-200"
                      />
                    </div>

                    <div className="space-y-4 mb-6">
                      <div>
                        <div className="text-[12px] text-[#8C8C8C] font-medium mb-2">
                          垂直行业：
                        </div>
                        <div className="flex flex-wrap gap-1 sm:gap-1.5">
                          {INDUSTRY_TAGS.map((tag) => {
                            const isActive = activeIndustryTag === tag;
                            return (
                              <button
                                key={tag}
                                onClick={() => {
                                  setActiveIndustryTag(tag);
                                  if (tag !== '全部') setActiveCategoryTag('全部');
                                }}
                                className={`px-2 py-0.5 rounded-full text-[11px] sm:text-xs font-medium shrink-0 transition-all cursor-pointer border-none ${
                                  isActive
                                    ? 'bg-[#E8F0FF] text-[#007BC7] font-semibold'
                                    : 'bg-[#F5F5F5] text-[#8C8C8C] hover:text-neutral-700 hover:bg-neutral-200/60'
                                }`}
                              >
                                {tag}
                              </button>
                            );
                          })}
                        </div>
                      </div>

                      <div>
                        <div className="text-[12px] text-[#8C8C8C] font-medium mb-2">
                          产品分类：
                        </div>
                        <div className="flex flex-wrap gap-1 sm:gap-1.5">
                          {CATEGORY_TAGS.map((tag) => {
                            const isActive = activeCategoryTag === tag;
                            return (
                              <button
                                key={tag}
                                onClick={() => {
                                  setActiveCategoryTag(tag);
                                  if (tag !== '全部') setActiveIndustryTag('全部');
                                }}
                                className={`px-2 py-0.5 rounded-full text-[11px] sm:text-xs font-medium shrink-0 transition-all cursor-pointer border-none ${
                                  isActive
                                    ? 'bg-[#E8F0FF] text-[#007BC7] font-semibold'
                                    : 'bg-[#F5F5F5] text-[#8C8C8C] hover:text-neutral-700 hover:bg-neutral-200/60'
                                }`}
                              >
                                {tag}
                              </button>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="divide-y divide-[#E5E5E5] border-t border-[#E5E5E5]">
                    {filteredRelatedCases.length > 0 ? (
                      filteredRelatedCases.map((item) => (
                        <div 
                          key={item.id}
                          onClick={() => {
                            if (onSelectRelatedCase) {
                              onSelectRelatedCase(item.id);
                            } else {
                              window.scrollTo({ top: 0, behavior: 'smooth' });
                            }
                          }}
                          className="py-3.5 group cursor-pointer text-left block"
                        >
                          <div className="flex items-center justify-between mb-1">
                            <span className="text-[10px] font-bold text-[#007BC7] bg-blue-50 px-1.5 py-0.5 rounded font-mono">
                              洛可可设计
                            </span>
                            <ArrowUpRight className="w-3.5 h-3.5 text-neutral-400 group-hover:text-[#007BC7] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-200" />
                          </div>

                          <h4 className="text-[15px] font-semibold text-[#1A1A1A] group-hover:text-[#007BC7] transition-colors duration-200 leading-snug line-clamp-1">
                            {item.title}
                          </h4>

                          <p className="text-[13px] text-[#4D4D4D] mt-0.5 line-clamp-1 leading-relaxed">
                            {item.description}
                          </p>
                        </div>
                      ))
                    ) : (
                      <div className="py-6 text-center text-neutral-400 text-xs">
                        未找到匹配的相关案例
                      </div>
                    )}
                  </div>

                </div>
              </motion.aside>
            )}
          </AnimatePresence>

          {/* 右侧案例详情分节内容 */}
          <main className={`anli-content-right transition-all duration-300 ${
            isSidebarCollapsed 
              ? 'w-full lg:w-[calc(75%-14px)] mx-auto space-y-12 md:space-y-16' 
              : 'lg:col-span-9 space-y-12 md:space-y-16'
          }`}>
            
            {isMusinno ? (
              /* ================= 慢阶「演奏家一号」音乐设备 案例内容 ================= */
              <>
                {/* 1. 项目资料信息 (Blue Card Section) */}
                <section className="bg-[#F0F4F8] text-[#1E293B] rounded-3xl p-6 md:p-8 border border-[#D6E2ED] shadow-xs">
                  <div className="mb-6 p-5 md:p-7 rounded-3xl bg-white border border-[#D6E2ED] shadow-xs flex items-center justify-center min-w-0 overflow-hidden">
                    <h1 
                      title="慢阶「演奏家一号」音乐设备"
                      className="text-3xl md:text-5xl lg:text-[58px] font-bold text-[#0F172A] leading-tight tracking-tight font-display text-center truncate max-w-full"
                    >
                      慢阶「演奏家一号」音乐设备
                    </h1>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-stretch">
                    <div className="md:col-span-7 space-y-4 text-left flex flex-col justify-center">
                      <h3 className="text-lg font-bold text-[#0F172A] font-display mb-3 border-b border-[#CBD5E1] pb-3 flex items-center gap-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-[#0284C7]"></span>
                        项目资料信息
                      </h3>

                      <div className="space-y-[16px]">
                        <div className="flex items-start text-sm">
                          <span className="text-[#64748B] w-24 shrink-0 font-medium">品牌名称</span>
                          <span className="text-[#0F172A] font-semibold">慢阶（MUSINNO）</span>
                        </div>

                        <div className="flex items-start text-sm">
                          <span className="text-[#64748B] w-24 shrink-0 font-medium">所属行业</span>
                          <span className="text-[#0F172A] font-semibold">文化创意 ｜ 新文娱</span>
                        </div>

                        <div className="flex items-start text-sm">
                          <span className="text-[#64748B] w-24 shrink-0 font-medium">咨询服务</span>
                          <span className="text-[#0F172A] font-semibold">品类创新、产品创新、品牌创新、三品合一</span>
                        </div>

                        <div className="flex items-start text-sm">
                          <span className="text-[#64748B] w-24 shrink-0 font-medium">设计服务</span>
                          <span className="text-[#0F172A] font-semibold">产品策略、工业设计、结构设计、CMF 设计、产品生态规划</span>
                        </div>

                        <div className="flex items-start text-sm">
                          <span className="text-[#64748B] w-24 shrink-0 font-medium">服务时间</span>
                          <span className="text-[#0F172A] font-semibold">2023</span>
                        </div>

                        <div className="flex items-start text-sm">
                          <span className="text-[#64748B] w-24 shrink-0 font-medium">成果价值</span>
                          <span className="text-[#0F172A] font-semibold leading-relaxed">
                            演奏家一号成为全球首款具有工作站属性的乐谱台，并荣获 2023 年德国红点至尊奖（Red Dot Best of the Best）。
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="md:col-span-5 flex items-stretch">
                      <div className="w-full h-full min-h-[220px] max-h-[360px] rounded-3xl overflow-hidden bg-white border border-[#D6E2ED] shadow-xs">
                        <img 
                          src="/src/assets/images/musinno_product_detail_1785826692407.jpg" 
                          alt="慢阶演奏家一号产品配图"
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </section>

                {/* 2. 项目背景 —— 上图下文 (配图 16:9) */}
                <section className="space-y-4 text-left">
                  <ScrollSectionTitle 
                    badge="BACKGROUND & CHALLENGES"
                    title="项目背景"
                  />

                  <div className="content-block-1 space-y-6 pt-2">
                    <div className="w-full aspect-[16/9] rounded-3xl overflow-hidden bg-neutral-100 border border-neutral-200/60 shadow-xs">
                      <img 
                        src="/src/assets/images/musinno_hero_banner_1785826677156.jpg" 
                        alt="慢阶演奏家一号项目背景"
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* 核心痛点与突破口突出卡片 */}
                    <div className="bg-[#F8FAFC] border border-[#D6E2ED] rounded-2xl p-5 md:p-6 space-y-3">
                      <div className="flex flex-wrap items-center gap-2 text-xs font-bold text-[#0284C7] uppercase tracking-wider">
                        <span className="bg-[#E0F2FE] px-2.5 py-1 rounded-md">核心挑战</span>
                        <span>传统乐谱架单一功能局限与专业多场景演奏需求冲突</span>
                      </div>
                      <p className="text-[15px] md:text-[16px] text-[#0F172A] font-semibold leading-relaxed">
                        随着专业音乐消费市场不断发展，传统乐谱架功能单一、扩展能力不足、设备之间缺乏统一性以及收纳效率较低，难以满足专业演奏场景下对于功能整合、场景适配以及空间利用效率的需求。
                      </p>
                    </div>

                    <div className="text-[#334155] text-[15px] md:text-[16px] leading-[1.8] space-y-4">
                      <p className="flex items-start gap-2">
                        <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#0284C7] mt-2.5 shrink-0"></span>
                        <span>
                          <strong className="text-[#0F172A]">行业痛点：</strong>随着音乐创作与演奏方式的不断变化，用户不再满足于单一功能的物理支撑设备，而是更加关注设备之间的协同性、扩展能力以及整体使用体验。
                        </span>
                      </p>
                      <p className="flex items-start gap-2">
                        <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#0284C7] mt-2.5 shrink-0"></span>
                        <span>
                          <strong className="text-[#0F172A]">用户诉求：</strong>演奏者希望能够根据不同演奏环境，自由调整设备结构，并灵活搭配不同的功能模块，以满足练习、教学、录制以及现场演出等不同场景的需求。
                        </span>
                      </p>
                      <p className="flex items-start gap-2">
                        <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#0284C7] mt-2.5 shrink-0"></span>
                        <span>
                          <strong className="text-[#0F172A]">破局之道：</strong>慢阶希望打破传统乐谱架的产品边界，携手洛可可围绕用户需求、产品结构、模块体系以及使用体验展开系统性研究，打造出全球首款具有工作站属性的乐谱台——演奏家一号，荣获 2023 年德国红点至尊奖。
                        </span>
                      </p>
                    </div>
                  </div>
                </section>

                {/* 3. 用户咨询 */}
                <section className="space-y-6 text-left">
                  <ScrollSectionTitle 
                    badge="USER CONSULTING"
                    title="用户咨询"
                  />

                  <div className="pt-2 space-y-8">
                    {/* 成果图 */}
                    <div className="flex flex-col gap-6">
                      <div className="w-full aspect-[16/9] rounded-3xl overflow-hidden bg-neutral-100 border border-neutral-200/60 shadow-xs">
                        <img 
                          src="/src/assets/images/musinno_hero_banner_1785826677156.jpg" 
                          alt="咨询服务成果展示 1"
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="w-full aspect-[16/9] rounded-3xl overflow-hidden bg-neutral-100 border border-neutral-200/60 shadow-xs">
                        <img 
                          src="/src/assets/images/musinno_product_detail_1785826692407.jpg" 
                          alt="咨询服务成果展示 2"
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>

                    <div className="pt-4 border-t border-[#D6E2ED]">
                      <div className="content-block-split grid grid-cols-1 md:grid-cols-12 items-stretch gap-y-4 md:gap-y-0">
                        <div className="md:col-span-6 relative z-10 w-full aspect-[8/9] rounded-3xl overflow-hidden bg-neutral-100 border border-neutral-200/80 shadow-md transition-shadow duration-300 hover:shadow-lg">
                          <img 
                            src="/src/assets/images/musinno_product_detail_1785826692407.jpg" 
                            alt="用户咨询深度调研"
                            referrerPolicy="no-referrer"
                            className="w-full h-full object-cover"
                          />
                        </div>

                        <div className="md:col-span-6 relative z-0 w-full md:w-[calc(100%+2rem)] lg:w-[calc(100%+2.5rem)] md:-ml-8 lg:-ml-10 bg-[#F8FAFC] border border-[#D6E2ED] rounded-3xl p-6 sm:p-8 md:p-8 md:pl-12 lg:p-10 lg:pl-14 shadow-xs flex flex-col justify-between md:h-full">
                          <div>
                            <div className="inline-flex items-center gap-2 mb-2">
                              <span className="w-2 h-2 rounded-full bg-[#0284C7]"></span>
                              <span className="text-xs font-bold text-[#0284C7] uppercase tracking-wider">深度用户洞察</span>
                            </div>
                            <h3 className="text-[20px] md:text-[22px] lg:text-[24px] font-bold text-[#1A1A1A] font-display mb-3 md:mb-4 leading-tight">
                              破解传统设备局限，精准匹配专业演奏者痛点
                            </h3>
                          </div>

                          <div className="space-y-3.5 md:space-y-4 text-[#334155] text-[14px] md:text-[15px] leading-relaxed my-auto">
                            <div className="bg-white/90 p-4 md:p-4.5 rounded-2xl border border-[#E2E8F0] shadow-2xs space-y-1.5">
                              <span className="text-xs md:text-sm font-bold text-[#0F172A] block">传统乐谱架普遍缺陷</span>
                              <p className="text-xs md:text-sm text-[#475569] leading-relaxed">
                                传统乐谱架普遍存在 <strong>功能单一、扩展能力不足、设备之间缺乏统一性以及收纳效率较低</strong> 等显著痛点。
                              </p>
                            </div>

                            <div className="bg-white/90 p-4 md:p-4.5 rounded-2xl border border-[#E2E8F0] shadow-2xs space-y-1.5">
                              <span className="text-xs md:text-sm font-bold text-[#0F172A] block">多场景多样化需求</span>
                              <p className="text-xs md:text-sm text-[#475569] leading-relaxed">
                                演奏者希望能够根据不同演奏环境自由调整设备结构，灵活搭配乐谱灯、节拍器、收纳盒与延展板，满足 <strong>练习、教学、录制及现场演出</strong> 等多样场景。
                              </p>
                            </div>

                            <div className="bg-white/90 p-4 md:p-4.5 rounded-2xl border border-[#E2E8F0] shadow-2xs space-y-1.5">
                              <span className="text-xs md:text-sm font-bold text-[#0F172A] block">便捷度与沉浸感重构</span>
                              <p className="text-xs md:text-sm text-[#475569] leading-relaxed">
                                用户更加关注产品的 <strong>稳定性、安全性与便携性</strong>，希望在满足专业需求的同时减少空间占用，提高使用效率，创造更舒适沉浸的演奏体验。
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                {/* 4. 品类创新 */}
                <section className="space-y-4 text-left">
                  <ScrollSectionTitle 
                    badge="CATEGORY INNOVATION"
                    title="品类创新"
                  />

                  <div className="content-block-split reverse grid grid-cols-1 md:grid-cols-12 items-stretch pt-2 gap-y-4 md:gap-y-0">
                    <div className="order-2 md:order-1 md:col-span-6 relative z-0 w-full md:w-[calc(100%+2rem)] lg:w-[calc(100%+2.5rem)] bg-[#F8FAFC] border border-[#D6E2ED] rounded-3xl p-6 sm:p-8 md:p-8 md:pr-12 lg:p-10 lg:pr-14 shadow-xs flex flex-col justify-between md:h-full">
                      <div>
                        <div className="inline-flex items-center gap-2 mb-2">
                          <span className="w-2 h-2 rounded-full bg-[#0284C7]"></span>
                          <span className="text-xs font-bold text-[#0284C7] uppercase tracking-wider">品类开创与定义</span>
                        </div>
                        <h3 className="text-[20px] md:text-[22px] lg:text-[24px] font-bold text-[#1A1A1A] font-display mb-3 md:mb-4 leading-tight">
                          从“单一工具”到“具备工作站属性的综合音乐设备平台”
                        </h3>
                      </div>

                      <div className="space-y-3.5 md:space-y-4 text-[#334155] text-[14px] md:text-[15px] leading-relaxed my-auto">
                        <div className="bg-white/90 p-4 md:p-4.5 rounded-2xl border border-[#E2E8F0] shadow-2xs space-y-1.5">
                          <span className="text-xs md:text-sm font-bold text-[#0F172A] block">突破支撑功能局限</span>
                          <p className="text-xs md:text-sm text-[#475569] leading-relaxed">
                            洛可可重新思考了传统乐谱架的产品定位，突破其单一支撑功能的局限性，将乐谱架从单一工具转化为具备工作站属性的综合性音乐设备平台。
                          </p>
                        </div>

                        <div className="bg-white/90 p-4 md:p-4.5 rounded-2xl border border-[#E2E8F0] shadow-2xs space-y-1.5">
                          <span className="text-xs md:text-sm font-bold text-[#0F172A] block">模块化整合开放架构</span>
                          <p className="text-xs md:text-sm text-[#475569] leading-relaxed">
                            演奏家一号通过模块化整合设计方式，将 <strong>乐谱灯、节拍器、收纳盒以及延展板</strong> 等多个功能模块纳入统一系统之中。
                          </p>
                        </div>

                        <div className="bg-white/90 p-4 md:p-4.5 rounded-2xl border border-[#E2E8F0] shadow-2xs space-y-1.5">
                          <span className="text-xs md:text-sm font-bold text-[#0F172A] block">重新定义设备关系</span>
                          <p className="text-xs md:text-sm text-[#475569] leading-relaxed">
                            不仅提升了产品本身的功能性，也为后续产品生态的持续拓展提供了可能。这一创新方式重新定义了音乐设备之间的关系，为行业提供了新的发展方向。
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="order-1 md:order-2 md:col-span-6 relative z-10 w-full aspect-[8/9] rounded-3xl overflow-hidden bg-neutral-100 border border-neutral-200/80 shadow-md transition-shadow duration-300 hover:shadow-lg">
                      <img 
                        src="/src/assets/images/musinno_hero_banner_1785826677156.jpg" 
                        alt="品类创新策略路径"
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </section>

                {/* 5. 产品创新 */}
                <section className="space-y-4 text-left">
                  <ScrollSectionTitle 
                    badge="PRODUCT INNOVATION"
                    title="产品创新"
                  />

                  <div className="content-block-split grid grid-cols-1 md:grid-cols-12 items-stretch pt-2 gap-y-4 md:gap-y-0">
                    <div className="md:col-span-6 relative z-10 w-full aspect-[8/9] rounded-3xl overflow-hidden bg-neutral-100 border border-neutral-200/80 shadow-md transition-shadow duration-300 hover:shadow-lg">
                      <img 
                        src="/src/assets/images/musinno_product_detail_1785826692407.jpg" 
                        alt="产品创新全维度解决方案"
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <div className="md:col-span-6 relative z-0 w-full md:w-[calc(100%+2rem)] lg:w-[calc(100%+2.5rem)] md:-ml-8 lg:-ml-10 bg-[#F8FAFC] border border-[#D6E2ED] rounded-3xl p-6 sm:p-8 md:p-8 md:pl-12 lg:p-10 lg:pl-14 shadow-xs flex flex-col justify-between md:h-full">
                      <div>
                        <div className="inline-flex items-center gap-2 mb-2">
                          <span className="w-2 h-2 rounded-full bg-[#0284C7]"></span>
                          <span className="text-xs font-bold text-[#0284C7] uppercase tracking-wider">设计理念与五大模块化创新</span>
                        </div>
                        <h3 className="text-[20px] md:text-[22px] lg:text-[24px] font-bold text-[#1A1A1A] font-display mb-3 leading-tight">
                          系统化设计为演奏者创造纯粹舒适体验
                        </h3>
                      </div>

                      <div className="space-y-3.5 md:space-y-4 text-[#334155] text-[14px] md:text-[15px] leading-relaxed my-auto">
                        <div className="bg-white/90 p-3.5 md:p-4 rounded-2xl border border-[#E2E8F0] shadow-2xs space-y-1">
                          <span className="text-xs md:text-sm font-bold text-[#0F172A] block">极致简约设计</span>
                          <p className="text-xs md:text-sm text-[#475569] leading-relaxed">
                            极致简约的设计理念贯穿整个产品开发过程，形成统一、协调且富有秩序感的整体设计语言。
                          </p>
                        </div>

                        <div className="bg-white/90 p-3.5 md:p-4 rounded-2xl border border-[#E2E8F0] shadow-2xs space-y-1">
                          <span className="text-xs md:text-sm font-bold text-[#0F172A] block">模块化设计与结构优化</span>
                          <p className="text-xs md:text-sm text-[#475569] leading-relaxed">
                            开放式模块架构搭配标准化接口，自由组合乐谱灯、节拍器、收纳盒与延展板；金属支架与双层谱面兼顾轻量与承重。
                          </p>
                        </div>

                        <div className="bg-white/90 p-3.5 md:p-4 rounded-2xl border border-[#E2E8F0] shadow-2xs space-y-1">
                          <span className="text-xs md:text-sm font-bold text-[#0F172A] block">便携收纳与生态延伸</span>
                          <p className="text-xs md:text-sm text-[#475569] leading-relaxed">
                            创新 1分钟无须拆卸快速折叠收纳结构，降低运输成本；持续扩展模块生态满足职业演奏者与多元群体需求。
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                {/* 6. 品牌升级 */}
                <section className="space-y-4 text-left">
                  <ScrollSectionTitle 
                    badge="BRAND UPGRADE"
                    title="品牌升级"
                  />

                  <div className="content-block-split reverse grid grid-cols-1 md:grid-cols-12 items-stretch pt-2 gap-y-4 md:gap-y-0">
                    <div className="order-2 md:order-1 md:col-span-6 relative z-0 w-full md:w-[calc(100%+2rem)] lg:w-[calc(100%+2.5rem)] bg-[#F8FAFC] border border-[#D6E2ED] rounded-3xl p-6 sm:p-8 md:p-8 md:pr-12 lg:p-10 lg:pr-14 shadow-xs flex flex-col justify-between md:h-full">
                      <div>
                        <div className="inline-flex items-center gap-2 mb-2">
                          <span className="w-2 h-2 rounded-full bg-[#0284C7]"></span>
                          <span className="text-xs font-bold text-[#0284C7] uppercase tracking-wider">“三品合一”战略</span>
                        </div>
                        <h3 className="text-[20px] md:text-[22px] lg:text-[24px] font-bold text-[#1A1A1A] font-display mb-3 leading-tight">
                          慢阶品牌价值体系全面升维
                        </h3>
                      </div>

                      <div className="space-y-3.5 md:space-y-4 text-[#334155] text-[14px] md:text-[15px] leading-relaxed my-auto">
                        <div className="bg-white/90 p-4 md:p-4.5 rounded-2xl border border-[#E2E8F0] shadow-2xs space-y-1.5">
                          <span className="text-xs md:text-sm font-bold text-[#0F172A] block">品牌定位强化</span>
                          <p className="text-xs md:text-sm text-[#475569] leading-relaxed">
                            演奏家一号不仅是一款创新产品，更是慢阶品牌价值体系的一次全面升级。通过统一产品风格、构建模块体系及建立专业化产品生态，进一步强化了品牌在专业音乐设备领域中的定位。
                          </p>
                        </div>

                        <div className="bg-white/90 p-4 md:p-4.5 rounded-2xl border border-[#E2E8F0] shadow-2xs space-y-1.5">
                          <span className="text-xs md:text-sm font-bold text-[#0F172A] block">核心理念沉淀</span>
                          <p className="text-xs md:text-sm text-[#475569] leading-relaxed">
                            产品所倡导的 <strong>“简约、专业、舒适与高效”</strong> 的理念，通过系统化设计语言提升品牌辨识度，也成为慢阶品牌的重要组成部分。
                          </p>
                        </div>

                        <div className="bg-white/90 p-4 md:p-4.5 rounded-2xl border border-[#E2E8F0] shadow-2xs space-y-1.5">
                          <span className="text-xs md:text-sm font-bold text-[#0F172A] block">音乐体验创造者</span>
                          <p className="text-xs md:text-sm text-[#475569] leading-relaxed">
                            推动慢阶逐渐从单一产品提供者，转变为整体音乐体验的创造者，打通从工具到生态的品牌升维通道。
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="order-1 md:order-2 md:col-span-6 relative z-10 w-full aspect-[8/9] rounded-3xl overflow-hidden bg-neutral-100 border border-neutral-200/80 shadow-md transition-shadow duration-300 hover:shadow-lg">
                      <img 
                        src="/src/assets/images/musinno_hero_banner_1785826677156.jpg" 
                        alt="品牌升级与视觉锤"
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </section>

                {/* 9. 价值展现 —— 上图下文 (配图 16:9 + 数据高亮) */}
                <section className="space-y-4 text-left">
                  <ScrollSectionTitle 
                    badge="COMMERCIAL VALUE"
                    title="价值展现"
                  />

                  <div className="content-block-1 space-y-6 pt-2">
                    <div className="flex flex-col gap-6">
                      <div className="w-full aspect-[16/9] rounded-3xl overflow-hidden bg-neutral-100 border border-neutral-200/60 shadow-xs">
                        <img 
                          src="/src/assets/images/musinno_hero_banner_1785826677156.jpg" 
                          alt="慢阶演奏家一号价值展现 1"
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="w-full aspect-[16/9] rounded-3xl overflow-hidden bg-neutral-100 border border-neutral-200/60 shadow-xs">
                        <img 
                          src="/src/assets/images/musinno_product_detail_1785826692407.jpg" 
                          alt="慢阶演奏家一号价值展现 2"
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>

                    <div className="bg-[#F8FAFC] border border-[#D6E2ED] rounded-2xl p-5 md:p-6 space-y-4 text-[#334155] text-[14px] md:text-[15px] leading-relaxed">
                      <p className="flex items-start gap-2">
                        <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#0284C7] mt-2 shrink-0"></span>
                        <span>
                          <strong className="text-[#0F172A]">用户层面：</strong>产品有效提升了演奏效率，优化了用户体验，并通过统一的模块体系满足了不同场景下的个性化需求。
                        </span>
                      </p>

                      <p className="flex items-start gap-2">
                        <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#0284C7] mt-2 shrink-0"></span>
                        <span>
                          <strong className="text-[#0F172A]">产品层面：</strong>演奏家一号构建了更加完整的产品生态体系，实现了产品功能与使用体验的持续迭代，并建立了可持续发展的模块化架构。
                        </span>
                      </p>

                      <p className="flex items-start gap-2">
                        <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#0284C7] mt-2 shrink-0"></span>
                        <span>
                          <strong className="text-[#0F172A]">品牌层面：</strong>项目进一步强化了慢阶在专业音乐设备领域中的品牌影响力，提升了品牌价值，并推动品牌向更加系统化、专业化的方向持续发展。
                        </span>
                      </p>
                    </div>
                  </div>
                </section>

                {/* 10. 成果展示 —— 纯图垂直连排 */}
                <section className="space-y-6 text-left">
                  <ScrollSectionTitle 
                    badge="ACHIEVEMENTS GALLERY"
                    title="成果展示"
                  />

                  <div className="pt-2">
                    <div className="flex flex-col gap-6">
                      <div className="w-full rounded-3xl overflow-hidden border border-neutral-200/60 shadow-xs bg-neutral-50">
                        <img 
                          src="/src/assets/images/musinno_hero_banner_1785826677156.jpg" 
                          alt="慢阶演奏家一号 成果展示 1"
                          referrerPolicy="no-referrer"
                          className="w-full h-auto hover:scale-[1.01] transition-transform duration-300 block"
                        />
                      </div>

                      <div className="w-full rounded-3xl overflow-hidden border border-neutral-200/60 shadow-xs bg-neutral-50">
                        <img 
                          src="/src/assets/images/musinno_product_detail_1785826692407.jpg" 
                          alt="慢阶演奏家一号 成果展示 2"
                          referrerPolicy="no-referrer"
                          className="w-full h-auto hover:scale-[1.01] transition-transform duration-300 block"
                        />
                      </div>

                      <div className="w-full rounded-3xl overflow-hidden border border-neutral-200/60 shadow-xs bg-neutral-50">
                        <img 
                          src="/src/assets/images/musinno_hero_banner_1785826677156.jpg" 
                          alt="慢阶演奏家一号 成果展示 3"
                          referrerPolicy="no-referrer"
                          className="w-full h-auto hover:scale-[1.01] transition-transform duration-300 block"
                        />
                      </div>
                    </div>
                  </div>
                </section>
              </>
            ) : isYueXianHuo ? (
              /* ================= 悦鲜活 案例内容 ================= */
              <>
                {/* 1. 项目资料信息 */}
                <section className="bg-[#F0F4F8] text-[#1E293B] rounded-3xl p-6 md:p-8 border border-[#D6E2ED] shadow-xs">
                  <div className="mb-6 p-5 md:p-7 rounded-3xl bg-white border border-[#D6E2ED] shadow-xs flex items-center justify-center min-w-0 overflow-hidden">
                    <h1 
                      title="悦鲜活年轻化产品包装创新咨询设计"
                      className="text-3xl md:text-5xl lg:text-[58px] font-bold text-[#0F172A] leading-tight tracking-tight font-display text-center truncate max-w-full"
                    >
                      悦鲜活年轻化产品包装创新咨询设计
                    </h1>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-stretch">
                    <div className="md:col-span-7 space-y-4 text-left flex flex-col justify-center">
                      <h3 className="text-lg font-bold text-[#0F172A] font-display mb-3 border-b border-[#CBD5E1] pb-3 flex items-center gap-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-[#0284C7]"></span>
                        项目资料信息
                      </h3>

                      <div className="space-y-[16px]">
                        <div className="flex items-start text-sm">
                          <span className="text-[#64748B] w-24 shrink-0 font-medium">品牌名称</span>
                          <span className="text-[#0F172A] font-semibold">君乐宝 · 悦鲜活 (YueXianHuo)</span>
                        </div>

                        <div className="flex items-start text-sm">
                          <span className="text-[#64748B] w-24 shrink-0 font-medium">所属行业</span>
                          <span className="text-[#0F172A] font-semibold">食品酒饮 / 高端快消乳品</span>
                        </div>

                        <div className="flex items-start text-sm">
                          <span className="text-[#64748B] w-24 shrink-0 font-medium">咨询服务</span>
                          <span className="text-[#0F172A] font-semibold">三品合一类创新咨询 / 产品创新</span>
                        </div>

                        <div className="flex items-start text-sm">
                          <span className="text-[#64748B] w-24 shrink-0 font-medium">设计服务</span>
                          <span className="text-[#0F172A] font-semibold">瓶型结构设计 / 品牌视觉重构 / 包装创新</span>
                        </div>

                        <div className="flex items-start text-sm">
                          <span className="text-[#64748B] w-24 shrink-0 font-medium">成果价值</span>
                          <span className="text-[#0F172A] font-semibold leading-relaxed">
                            颠覆传统鲜奶包装同质化局限，通过“三品合一”战略成功塑造高端鲜奶标志性爆品，助力悦鲜活快速跃居全国高端鲜奶市场领导品牌。
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="md:col-span-5 flex items-stretch">
                      <div className="w-full h-full min-h-[200px] max-h-[320px] rounded-3xl overflow-hidden bg-white border border-[#D6E2ED] shadow-xs">
                        <img 
                          src="https://github.com/minaxyue-ops/MINA/releases/download/1/7.15.1.3.gif" 
                          alt="悦鲜活项目产品特征配图"
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </section>

                {/* 2. 项目背景 */}
                <section className="space-y-4 text-left">
                  <ScrollSectionTitle 
                    badge="BACKGROUND & CHALLENGES"
                    title="项目背景"
                  />

                  <div className="content-block-1 space-y-4 pt-2">
                    <div className="w-full aspect-[16/9] rounded-3xl overflow-hidden bg-neutral-100 border border-neutral-200/60 shadow-xs">
                      <img 
                        src="/src/assets/images/case_yuexianhuo.jpg" 
                        alt="悦鲜活包装创新项目背景"
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <div className="bg-[#F8FAFC] border border-[#D6E2ED] rounded-2xl p-5 md:p-6 space-y-3">
                      <div className="flex flex-wrap items-center gap-2 text-xs font-bold text-[#0284C7] uppercase tracking-wider">
                        <span className="bg-[#E0F2FE] px-2.5 py-1 rounded-md">核心挑战</span>
                        <span>突破传统鲜奶同质化瓶颈，开启年轻化品质红利</span>
                      </div>
                      <p className="text-[15px] md:text-[16px] text-[#0F172A] font-semibold leading-relaxed">
                        快消乳品市场竞争极其激烈，传统低温鲜奶包装长期陷入同质化的方瓶与塑料袋形态，难以引起Z世代与年轻白领群体的审美共鸣。君乐宝推出高端鲜奶品牌“悦鲜活”，急需通过创新的包装与品牌视觉拉开与竞品的差距。
                      </p>
                    </div>

                    <div className="text-[#334155] text-[15px] md:text-[16px] leading-[1.8] space-y-3">
                      <p>
                        洛可可受邀为“悦鲜活”提供从品类战略、包装结构到品牌视觉重构的“三品合一”整合创新服务，旨在赋予产品极具辨识度的科技感与高颜值形象，抢占高端鲜乳红利赛道。
                      </p>
                    </div>
                  </div>
                </section>

                {/* 3. 用户咨询 */}
                <section className="space-y-6 text-left">
                  <ScrollSectionTitle 
                    badge="USER CONSULTING"
                    title="用户咨询"
                  />

                  <div className="pt-2 space-y-8">
                    <div className="w-full aspect-[16/9] rounded-3xl overflow-hidden bg-neutral-100 border border-neutral-200/60 shadow-xs">
                      <img 
                        src="https://github.com/minaxyue-ops/MINA/releases/download/1/7.15.1.3.gif" 
                        alt="悦鲜活咨询服务成果"
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <div className="pt-4 border-t border-[#D6E2ED]">
                      <div className="content-block-split grid grid-cols-1 md:grid-cols-12 items-stretch gap-y-4 md:gap-y-0">
                        <div className="md:col-span-6 relative z-10 w-full aspect-[8/9] rounded-3xl overflow-hidden bg-neutral-100 border border-neutral-200/80 shadow-md">
                          <img 
                            src="/src/assets/images/case_yuexianhuo.jpg" 
                            alt="悦鲜活用户人群洞察"
                            referrerPolicy="no-referrer"
                            className="w-full h-full object-cover"
                          />
                        </div>

                        <div className="md:col-span-6 relative z-0 w-full md:w-[calc(100%+2rem)] lg:w-[calc(100%+2.5rem)] md:-ml-8 lg:-ml-10 bg-[#F8FAFC] border border-[#D6E2ED] rounded-3xl p-6 sm:p-8 md:p-8 md:pl-12 lg:p-10 lg:pl-14 shadow-xs flex flex-col justify-between md:h-full">
                          <div>
                            <div className="inline-flex items-center gap-2 mb-2">
                              <span className="w-2 h-2 rounded-full bg-[#0284C7]"></span>
                              <span className="text-xs font-bold text-[#0284C7] uppercase tracking-wider">目标客群与行为洞察</span>
                            </div>
                            <h3 className="text-[20px] md:text-[22px] lg:text-[24px] font-bold text-[#1A1A1A] font-display mb-3 md:mb-4 leading-tight">
                              聚焦都市年轻白领与品质家庭的新养鲜习惯
                            </h3>
                          </div>

                          <div className="space-y-3.5 md:space-y-4 text-[#334155] text-[14px] md:text-[15px] leading-relaxed my-auto">
                            <div className="bg-white/90 p-4 rounded-2xl border border-[#E2E8F0] shadow-2xs space-y-1">
                              <span className="text-xs md:text-sm font-bold text-[#0F172A] block">高品质新鲜追求</span>
                              <p className="text-xs md:text-sm text-[#475569]">
                                用户不再满足于传统长保鲜奶，追求活性蛋白更高、口感更纯正的顶级鲜奶。
                              </p>
                            </div>

                            <div className="bg-white/90 p-4 rounded-2xl border border-[#E2E8F0] shadow-2xs space-y-1">
                              <span className="text-xs md:text-sm font-bold text-[#0F172A] block">颜值与手感审美</span>
                              <p className="text-xs md:text-sm text-[#475569]">
                                期待告别平庸呆板的纸盒或劣质塑料感，需要极具高级美学与舒适握持感的现代化包装。
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                {/* 4. 品类创新 */}
                <section className="space-y-4 text-left">
                  <ScrollSectionTitle 
                    badge="CATEGORY INNOVATION"
                    title="品类创新"
                  />

                  <div className="content-block-split reverse grid grid-cols-1 md:grid-cols-12 items-stretch pt-2 gap-y-4 md:gap-y-0">
                    <div className="order-2 md:order-1 md:col-span-6 relative z-0 w-full md:w-[calc(100%+2rem)] lg:w-[calc(100%+2.5rem)] bg-[#F8FAFC] border border-[#D6E2ED] rounded-3xl p-6 sm:p-8 md:p-8 md:pr-12 lg:p-10 lg:pr-14 shadow-xs flex flex-col justify-between md:h-full">
                      <div>
                        <div className="inline-flex items-center gap-2 mb-2">
                          <span className="w-2 h-2 rounded-full bg-[#0284C7]"></span>
                          <span className="text-xs font-bold text-[#0284C7] uppercase tracking-wider">开辟新一代鲜奶赛道</span>
                        </div>
                        <h3 className="text-[20px] md:text-[22px] lg:text-[24px] font-bold text-[#1A1A1A] font-display mb-3 md:mb-4 leading-tight">
                          定义“0.09秒INF超瞬时杀菌鲜奶”新品类
                        </h3>
                      </div>

                      <div className="space-y-3.5 md:space-y-4 text-[#334155] text-[14px] md:text-[15px] leading-relaxed my-auto">
                        <div className="bg-white/90 p-4 rounded-2xl border border-[#E2E8F0] shadow-2xs space-y-1">
                          <span className="text-xs md:text-sm font-bold text-[#0F172A] block">突破传统杀菌局限</span>
                          <p className="text-xs md:text-sm text-[#475569]">
                            引入INF超瞬时杀菌技术，既保留高活性乳蛋白，又延长饮用赏味期，树立鲜奶价值标杆。
                          </p>
                        </div>

                        <div className="bg-white/90 p-4 rounded-2xl border border-[#E2E8F0] shadow-2xs space-y-1">
                          <span className="text-xs md:text-sm font-bold text-[#0F172A] block">全渠道感知塑造</span>
                          <p className="text-xs md:text-sm text-[#475569]">
                            将技术硬核转化为“悦鲜活”品牌独有的直观感知，引导消费者建立鲜奶消费新标准。
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="order-1 md:order-2 md:col-span-6 relative z-10 w-full aspect-[8/9] rounded-3xl overflow-hidden bg-neutral-100 border border-neutral-200/80 shadow-md">
                      <img 
                        src="/src/assets/images/case_yuexianhuo.jpg" 
                        alt="悦鲜出品类创新"
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </section>

                {/* 5. 产品创新 */}
                <section className="space-y-4 text-left">
                  <ScrollSectionTitle 
                    badge="PRODUCT INNOVATION"
                    title="产品创新"
                  />

                  <div className="pt-2">
                    <div className="content-block-split grid grid-cols-1 md:grid-cols-12 items-stretch gap-y-4 md:gap-y-0">
                      <div className="md:col-span-6 relative z-10 w-full aspect-[8/9] rounded-3xl overflow-hidden bg-neutral-100 border border-neutral-200/80 shadow-md">
                        <img 
                          src="https://github.com/minaxyue-ops/MINA/releases/download/1/7.15.1.3.gif" 
                          alt="悦鲜活产品创新"
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover"
                        />
                      </div>

                      <div className="md:col-span-6 relative z-0 w-full md:w-[calc(100%+2rem)] lg:w-[calc(100%+2.5rem)] md:-ml-8 lg:-ml-10 bg-[#F8FAFC] border border-[#D6E2ED] rounded-3xl p-6 sm:p-8 md:p-8 md:pl-12 lg:p-10 lg:pl-14 shadow-xs flex flex-col justify-between md:h-full">
                        <div>
                          <div className="inline-flex items-center gap-2 mb-2">
                            <span className="w-2 h-2 rounded-full bg-[#0284C7]"></span>
                            <span className="text-xs font-bold text-[#0284C7] uppercase tracking-wider">瓶型结构与人机工程创新</span>
                          </div>
                          <h3 className="text-[20px] md:text-[22px] lg:text-[24px] font-bold text-[#1A1A1A] font-display mb-3 leading-tight">
                            结构设计与饮用体验全维颠覆
                          </h3>
                        </div>

                        <div className="grid grid-cols-1 gap-3 my-auto">
                          <div className="bg-white/90 p-3.5 rounded-2xl border border-[#E2E8F0] shadow-2xs flex items-start gap-3">
                            <span className="bg-[#E0F2FE] text-[#0284C7] text-xs font-bold px-2.5 py-1 rounded-md shrink-0 mt-0.5">专利瓶型</span>
                            <p className="text-xs md:text-sm text-[#334155]">
                              打造流线型PET高透瓶身，兼具绝佳握持手感与抗压防滑性能。
                            </p>
                          </div>

                          <div className="bg-white/90 p-3.5 rounded-2xl border border-[#E2E8F0] shadow-2xs flex items-start gap-3">
                            <span className="bg-[#E0F2FE] text-[#0284C7] text-xs font-bold px-2.5 py-1 rounded-md shrink-0 mt-0.5">大口径盖</span>
                            <p className="text-xs md:text-sm text-[#334155]">
                              设计人性化大口径盖体，开启轻松畅快，完美适配场景化快饮诉求。
                            </p>
                          </div>

                          <div className="bg-white/90 p-3.5 rounded-2xl border border-[#E2E8F0] shadow-2xs flex items-start gap-3">
                            <span className="bg-[#E0F2FE] text-[#0284C7] text-xs font-bold px-2.5 py-1 rounded-md shrink-0 mt-0.5">锁鲜封口</span>
                            <p className="text-xs md:text-sm text-[#334155]">
                              多层密封锁鲜技术，保证全程冷链储运中的口感纯正与无菌安全。
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                {/* 6. 品牌升级 */}
                <section className="space-y-4 text-left">
                  <ScrollSectionTitle 
                    badge="BRAND UPGRADE"
                    title="品牌升级"
                  />

                  <div className="content-block-split reverse grid grid-cols-1 md:grid-cols-12 items-stretch pt-2 gap-y-4 md:gap-y-0">
                    <div className="order-2 md:order-1 md:col-span-6 relative z-0 w-full md:w-[calc(100%+2rem)] lg:w-[calc(100%+2.5rem)] bg-[#F8FAFC] border border-[#D6E2ED] rounded-3xl p-6 sm:p-8 md:p-8 md:pr-12 lg:p-10 lg:pr-14 shadow-xs flex flex-col justify-between md:h-full">
                      <div>
                        <div className="inline-flex items-center gap-2 mb-2">
                          <span className="w-2 h-2 rounded-full bg-[#0284C7]"></span>
                          <span className="text-xs font-bold text-[#0284C7] uppercase tracking-wider">年轻化视觉与品牌图腾</span>
                        </div>
                        <h3 className="text-[20px] md:text-[22px] lg:text-[24px] font-bold text-[#1A1A1A] font-display mb-3 leading-tight">
                          高透科技感与极致新鲜视觉符号
                        </h3>
                      </div>

                      <div className="space-y-3.5 text-[#334155] text-[14px] md:text-[15px] leading-relaxed my-auto">
                        <div className="bg-white/90 p-4 rounded-2xl border border-[#E2E8F0] shadow-2xs space-y-1">
                          <span className="text-xs md:text-sm font-bold text-[#0F172A] block">透明纯净视觉锤</span>
                          <p className="text-xs md:text-sm text-[#475569]">
                            采用高光高透质感展示浓郁品质，让品质肉眼可见，打造极具辨识度的货架视觉焦点。
                          </p>
                        </div>

                        <div className="bg-white/90 p-4 rounded-2xl border border-[#E2E8F0] shadow-2xs space-y-1">
                          <span className="text-xs md:text-sm font-bold text-[#0F172A] block">活力时尚色调</span>
                          <p className="text-xs md:text-sm text-[#475569]">
                            精选纯洁蓝与鲜亮主色搭配，注入年轻活力与现代健康美学基因。
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="order-1 md:order-2 md:col-span-6 relative z-10 w-full aspect-[8/9] rounded-3xl overflow-hidden bg-neutral-100 border border-neutral-200/80 shadow-md">
                      <img 
                        src="https://github.com/minaxyue-ops/MINA/releases/download/1/7.15.1.3.gif" 
                        alt="悦鲜活品牌升级"
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </section>

                {/* 8. 价值展现 */}
                <section className="space-y-4 text-left">
                  <ScrollSectionTitle 
                    badge="VALUE PROPOSITION"
                    title="价值展现"
                  />

                  <div className="pt-2 space-y-6">
                    <div className="w-full aspect-[16/9] rounded-3xl overflow-hidden bg-neutral-100 border border-neutral-200/60 shadow-xs">
                      <img 
                        src="/src/assets/images/case_yuexianhuo.jpg" 
                        alt="悦鲜活价值展现全貌"
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <div className="bg-[#F8FAFC] border border-[#D6E2ED] rounded-3xl p-6 md:p-8 space-y-4">
                      <h3 className="text-lg md:text-xl font-bold text-[#0F172A] font-display">
                        从产品创新到高端鲜奶市场领跑者
                      </h3>
                      <p className="text-[#334155] text-sm md:text-base leading-relaxed">
                        通过洛可可“三品合一”整合创新，悦鲜活以独特的瓶型设计与极佳的产品体验，打破传统鲜奶竞争格局，迅速崛起为全国高端鲜奶领军品牌，实现销量与品牌溢价的双重爆发。
                      </p>
                    </div>
                  </div>
                </section>

                {/* 9. 成果展示 */}
                <section className="space-y-4 text-left">
                  <ScrollSectionTitle 
                    badge="ACHIEVEMENTS GALLERY"
                    title="成果展示"
                  />

                  <div className="pt-2 space-y-6">
                    <div className="w-full rounded-3xl overflow-hidden border border-neutral-200/60 shadow-xs bg-neutral-50">
                      <img 
                        src="https://github.com/minaxyue-ops/MINA/releases/download/1/7.15.1.3.gif" 
                        alt="悦鲜活成果展示"
                        referrerPolicy="no-referrer"
                        className="w-full h-auto hover:scale-[1.01] transition-transform duration-300 block"
                      />
                    </div>
                  </div>
                </section>
              </>
            ) : isEstun ? (
              /* ================= 埃斯顿 Codroid 02 第二代人形机器人 案例内容 ================= */
              <>
                {/* 1. 项目资料信息 (Blue Card Section) */}
                <section className="bg-[#F0F4F8] text-[#1E293B] rounded-3xl p-6 md:p-8 border border-[#D6E2ED] shadow-xs">
                  <div className="mb-6 p-5 md:p-7 rounded-3xl bg-white border border-[#D6E2ED] shadow-xs flex items-center justify-center min-w-0 overflow-hidden">
                    <h1 
                      title="埃斯顿第二代人形机器人创新设计"
                      className="text-3xl md:text-5xl lg:text-[58px] font-bold text-[#0F172A] leading-tight tracking-tight font-display text-center truncate max-w-full"
                    >
                      埃斯顿第二代人形机器人创新设计
                    </h1>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-stretch">
                    <div className="md:col-span-7 space-y-4 text-left flex flex-col justify-center">
                      <h3 className="text-lg font-bold text-[#0F172A] font-display mb-3 border-b border-[#CBD5E1] pb-3 flex items-center gap-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-[#0284C7]"></span>
                        项目资料信息
                      </h3>

                      <div className="space-y-[16px]">
                        <div className="flex items-start text-sm">
                          <span className="text-[#64748B] w-24 shrink-0 font-medium">品牌名称</span>
                          <span className="text-[#0F172A] font-semibold">埃斯顿机器人（Codroid 02 第二代人形机器人）</span>
                        </div>

                        <div className="flex items-start text-sm">
                          <span className="text-[#64748B] w-24 shrink-0 font-medium">所属行业</span>
                          <span className="text-[#0F172A] font-semibold">智能制造 ｜ 机器人 ｜ 人工智能</span>
                        </div>

                        <div className="flex items-start text-sm">
                          <span className="text-[#64748B] w-24 shrink-0 font-medium">咨询服务</span>
                          <span className="text-[#0F172A] font-semibold">品类创新、品类咨询、产品创新、三品合一、产品迭代</span>
                        </div>

                        <div className="flex items-start text-sm">
                          <span className="text-[#64748B] w-24 shrink-0 font-medium">设计服务</span>
                          <span className="text-[#0F172A] font-semibold">工业设计、外观设计、CMF 设计、人机体验设计、产品策略规划、品牌营销</span>
                        </div>

                        <div className="flex items-start text-sm">
                          <span className="text-[#64748B] w-24 shrink-0 font-medium">服务时间</span>
                          <span className="text-[#0F172A] font-semibold">2024</span>
                        </div>

                        <div className="flex items-start text-sm">
                          <span className="text-[#64748B] w-24 shrink-0 font-medium">成果价值</span>
                          <span className="text-[#0F172A] font-semibold leading-relaxed">
                            围绕埃斯顿酷卓第二代人形机器人 Codroid 02 展开创新设计，通过未来感外观塑造、人机情感连接和产品体验优化，突破传统工业机器人机械冰冷的形象，打造兼具科技感与亲和力的新一代人形机器人形象。
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="md:col-span-5 flex items-stretch">
                      <div className="w-full h-full min-h-[220px] max-h-[360px] rounded-3xl overflow-hidden bg-white border border-[#D6E2ED] shadow-xs flex items-center justify-center p-2">
                        <img 
                          src="https://github.com/minaxyue-ops/MINA/releases/download/2%E6%A1%88%E4%BE%8B%E8%AF%A6%E6%83%85%E9%A1%B5%E9%85%8D%E5%9B%BE/26.png" 
                          alt="埃斯顿 Codroid 02 第二代人形机器人"
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-contain max-h-[340px]"
                        />
                      </div>
                    </div>
                  </div>
                </section>

                {/* 2. 项目背景 —— 上图下文 (配图 16:9) */}
                <section className="space-y-4 text-left">
                  <ScrollSectionTitle 
                    badge="BACKGROUND & CHALLENGES"
                    title="项目背景"
                  />

                  <div className="content-block-1 space-y-6 pt-2">
                    <div className="w-full aspect-[16/9] rounded-3xl overflow-hidden bg-neutral-100 border border-neutral-200/60 shadow-xs">
                      <img 
                        src="https://github.com/minaxyue-ops/MINA/releases/download/2%E6%A1%88%E4%BE%8B%E8%AF%A6%E6%83%85%E9%A1%B5%E9%85%8D%E5%9B%BE/16.webp" 
                        alt="埃斯顿 Codroid 02 项目背景"
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* 核心痛点与突破口突出卡片 */}
                    <div className="bg-[#F8FAFC] border border-[#D6E2ED] rounded-2xl p-5 md:p-6 space-y-3">
                      <div className="flex flex-wrap items-center gap-2 text-xs font-bold text-[#0284C7] uppercase tracking-wider">
                        <span className="bg-[#E0F2FE] px-2.5 py-1 rounded-md">核心方向</span>
                        <span>以“让科技更有温度”为核心方向，重新塑造机器人与人的连接方式</span>
                      </div>
                      <p className="text-[15px] md:text-[16px] text-[#0F172A] font-semibold leading-relaxed">
                        随着人工智能与机器人技术快速发展，人形机器人正在从工业制造领域逐渐走向更多生活与服务场景。埃斯顿希望突破传统工业机器人的视觉认知，让机器人不仅具备先进技术能力，同时能够建立更加自然的人机互动关系。
                      </p>
                    </div>

                    <div className="text-[#334155] text-[15px] md:text-[16px] leading-[1.8] space-y-4">
                      <p className="flex items-start gap-2">
                        <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#0284C7] mt-2.5 shrink-0"></span>
                        <span>
                          <strong className="text-[#0F172A]">行业背景：</strong>随着人工智能与机器人技术快速发展，人形机器人正在从工业制造领域逐渐走向更多生活与服务场景。
                        </span>
                      </p>
                      <p className="flex items-start gap-2">
                        <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#0284C7] mt-2.5 shrink-0"></span>
                        <span>
                          <strong className="text-[#0F172A]">痛点挑战：</strong>传统机器人长期以功能实现为核心，外观通常呈现机械化、工具化特征，与用户之间存在较强距离感。
                        </span>
                      </p>
                      <p className="flex items-start gap-2">
                        <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#0284C7] mt-2.5 shrink-0"></span>
                        <span>
                          <strong className="text-[#0F172A]">设计突破：</strong>埃斯顿希望通过新一代人形机器人 Codroid 02 的设计升级，突破传统工业机器人的视觉认知，让机器人不仅具备先进技术能力，同时能够建立更加自然的人机互动关系。
                        </span>
                      </p>
                    </div>
                  </div>
                </section>

                {/* 3. 用户咨询 */}
                <section className="space-y-6 text-left">
                  <ScrollSectionTitle 
                    badge="USER CONSULTING"
                    title="用户咨询"
                  />

                  <div className="pt-2 space-y-8">
                    {/* 成果配图 */}
                    <div className="flex flex-col gap-6">
                      <div className="w-full aspect-[16/9] rounded-3xl overflow-hidden bg-neutral-100 border border-neutral-200/60 shadow-xs">
                        <img 
                          src="https://github.com/minaxyue-ops/MINA/releases/download/2%E6%A1%88%E4%BE%8B%E8%AF%A6%E6%83%85%E9%A1%B5%E9%85%8D%E5%9B%BE/18.webp" 
                          alt="埃斯顿 Codroid 02 咨询服务"
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>

                    <div className="pt-4 border-t border-[#D6E2ED]">
                      <div className="content-block-split grid grid-cols-1 md:grid-cols-12 items-stretch gap-y-4 md:gap-y-0">
                        {/* 左侧：图片卡片 */}
                        <div className="md:col-span-6 relative z-10 w-full aspect-[8/9] rounded-3xl overflow-hidden bg-neutral-100 border border-neutral-200/80 shadow-md transition-shadow duration-300 hover:shadow-lg">
                          <img 
                            src="https://github.com/minaxyue-ops/MINA/releases/download/2%E6%A1%88%E4%BE%8B%E8%AF%A6%E6%83%85%E9%A1%B5%E9%85%8D%E5%9B%BE/23.webp" 
                            alt="用户咨询与需求洞察"
                            referrerPolicy="no-referrer"
                            className="w-full h-full object-cover"
                          />
                        </div>

                        {/* 右侧：文字卡片 */}
                        <div className="md:col-span-6 relative z-0 w-full md:w-[calc(100%+2rem)] lg:w-[calc(100%+2.5rem)] md:-ml-8 lg:-ml-10 bg-[#F8FAFC] border border-[#D6E2ED] rounded-3xl p-6 sm:p-8 md:p-8 md:pl-12 lg:p-10 lg:pl-14 shadow-xs flex flex-col justify-between md:h-full">
                          <div>
                            <div className="inline-flex items-center gap-2 mb-2">
                              <span className="w-2 h-2 rounded-full bg-[#0284C7]"></span>
                              <span className="text-xs font-bold text-[#0284C7] uppercase tracking-wider">深度用户洞察</span>
                            </div>
                            <h3 className="text-[20px] md:text-[22px] lg:text-[24px] font-bold text-[#1A1A1A] font-display mb-3 md:mb-4 leading-tight">
                              重塑人机关系 · 满足情感与视觉双重期待
                            </h3>
                          </div>

                          <div className="space-y-3.5 md:space-y-4 text-[#334155] text-[14px] md:text-[15px] leading-relaxed my-auto">
                            <div className="bg-white/90 p-4 md:p-4.5 rounded-2xl border border-[#E2E8F0] shadow-2xs space-y-1.5">
                              <span className="text-xs md:text-sm font-bold text-[#0F172A] block">情感与形象诉求</span>
                              <p className="text-xs md:text-sm text-[#475569] leading-relaxed">
                                相比传统机器人，用户不仅关注功能性能，也期待其具备更友好的形象、更自然的互动体验及更容易被接受的视觉语言。
                              </p>
                            </div>

                            <div className="bg-white/90 p-4 md:p-4.5 rounded-2xl border border-[#E2E8F0] shadow-2xs space-y-1.5">
                              <span className="text-xs md:text-sm font-bold text-[#0F172A] block">体验与感知重构</span>
                              <p className="text-xs md:text-sm text-[#475569] leading-relaxed">
                                基于这一需求，项目通过造型、材质、细节和交互感受的综合设计，打破工业设备带来的冰冷感与心理距离感。
                              </p>
                            </div>

                            <div className="bg-white/90 p-4 md:p-4.5 rounded-2xl border border-[#E2E8F0] shadow-2xs space-y-1.5">
                              <span className="text-xs md:text-sm font-bold text-[#0F172A] block">科技伙伴定位</span>
                              <p className="text-xs md:text-sm text-[#475569] leading-relaxed">
                                让机器人从单纯的技术设备转变为更具陪伴感和未来感的科技伙伴，搭建人机和谐共生的桥梁。
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                {/* 4. 品类创新 —— 左右构图板块 2 */}
                <section className="space-y-4 text-left">
                  <ScrollSectionTitle 
                    badge="CATEGORY INNOVATION"
                    title="品类创新"
                  />

                  <div className="pt-2">
                    <div className="content-block-split reverse grid grid-cols-1 md:grid-cols-12 items-stretch gap-y-4 md:gap-y-0">
                      {/* 左侧：文字卡片 */}
                      <div className="order-2 md:order-1 md:col-span-6 relative z-0 w-full md:w-[calc(100%+2rem)] lg:w-[calc(100%+2.5rem)] bg-[#F8FAFC] border border-[#D6E2ED] rounded-3xl p-6 sm:p-8 md:p-8 md:pr-12 lg:p-10 lg:pr-14 shadow-xs flex flex-col justify-between md:h-full">
                        <div>
                          <div className="inline-flex items-center gap-2 mb-2">
                            <span className="w-2 h-2 rounded-full bg-[#0284C7]"></span>
                            <span className="text-xs font-bold text-[#0284C7] uppercase tracking-wider">品类开创与定义</span>
                          </div>
                          <h3 className="text-[20px] md:text-[22px] lg:text-[24px] font-bold text-[#1A1A1A] font-display mb-3 md:mb-4 leading-tight">
                            从“工业工具”向“智能伙伴”的颠覆转变
                          </h3>
                        </div>

                        <div className="space-y-3.5 md:space-y-4 text-[#334155] text-[14px] md:text-[15px] leading-relaxed my-auto">
                          <div className="bg-white/90 p-4 md:p-4.5 rounded-2xl border border-[#E2E8F0] shadow-2xs space-y-1.5">
                            <span className="text-xs md:text-sm font-bold text-[#0F172A] block">建立新品类认知</span>
                            <p className="text-xs md:text-sm text-[#475569] leading-relaxed">
                              传统工业机器人通常强调效率与精准，但在人形机器人进入大众视野的过程中，产品需要建立全新的品类认知。
                            </p>
                          </div>

                          <div className="bg-white/90 p-4 md:p-4.5 rounded-2xl border border-[#E2E8F0] shadow-2xs space-y-1.5">
                            <span className="text-xs md:text-sm font-bold text-[#0F172A] block">融合科技与情感</span>
                            <p className="text-xs md:text-sm text-[#475569] leading-relaxed">
                              Codroid 02 通过重新定义人形机器人的外观语言，将工业科技属性与情感化设计结合，弱化传统机械感。
                            </p>
                          </div>

                          <div className="bg-white/90 p-4 md:p-4.5 rounded-2xl border border-[#E2E8F0] shadow-2xs space-y-1.5">
                            <span className="text-xs md:text-sm font-bold text-[#0F172A] block">探索未来新形态</span>
                            <p className="text-xs md:text-sm text-[#475569] leading-relaxed">
                              增强未来科技产品的亲和力，推动机器人从“工业工具”向“智能伙伴”方向转变，探索未来机器人新形态。
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* 右侧：图片卡片 */}
                      <div className="order-1 md:order-2 md:col-span-6 relative z-10 w-full aspect-[8/9] rounded-3xl overflow-hidden bg-neutral-100 border border-neutral-200/80 shadow-md transition-shadow duration-300 hover:shadow-lg">
                        <img 
                          src="https://github.com/minaxyue-ops/MINA/releases/download/2%E6%A1%88%E4%BE%8B%E8%AF%A6%E6%83%85%E9%A1%B5%E9%85%8D%E5%9B%BE/22.webp" 
                          alt="品类创新与定位"
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </section>

                {/* 5. 产品创新 */}
                <section className="space-y-4 text-left">
                  <ScrollSectionTitle 
                    badge="PRODUCT INNOVATION"
                    title="产品创新"
                  />

                  <div className="pt-2">
                    <div className="content-block-split grid grid-cols-1 md:grid-cols-12 items-stretch gap-y-4 md:gap-y-0">
                      {/* 左侧：图片卡片 */}
                      <div className="md:col-span-6 relative z-10 w-full aspect-[8/9] rounded-3xl overflow-hidden bg-neutral-100 border border-neutral-200/80 shadow-md transition-shadow duration-300 hover:shadow-lg">
                        <img 
                          src="https://github.com/minaxyue-ops/MINA/releases/download/2%E6%A1%88%E4%BE%8B%E8%AF%A6%E6%83%85%E9%A1%B5%E9%85%8D%E5%9B%BE/25.webp" 
                          alt="产品创新与视觉识别"
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover"
                        />
                      </div>

                      {/* 右侧：文字卡片 */}
                      <div className="md:col-span-6 relative z-0 w-full md:w-[calc(100%+2rem)] lg:w-[calc(100%+2.5rem)] md:-ml-8 lg:-ml-10 bg-[#F8FAFC] border border-[#D6E2ED] rounded-3xl p-6 sm:p-8 md:p-8 md:pl-12 lg:p-10 lg:pl-14 shadow-xs flex flex-col justify-between md:h-full">
                        <div>
                          <div className="inline-flex items-center gap-2 mb-2">
                            <span className="w-2 h-2 rounded-full bg-[#0284C7]"></span>
                            <span className="text-xs font-bold text-[#0284C7] uppercase tracking-wider">设计人与科技的对话方式</span>
                          </div>
                          <h3 className="text-[20px] md:text-[22px] lg:text-[24px] font-bold text-[#1A1A1A] font-display mb-3 leading-tight">
                            四大精细化创新设计与人机科技表达
                          </h3>
                        </div>

                        <div className="space-y-3.5 md:space-y-4 text-[#334155] text-[14px] md:text-[15px] leading-relaxed my-auto">
                          <div className="bg-white/90 p-3.5 md:p-4 rounded-2xl border border-[#E2E8F0] shadow-2xs space-y-1">
                            <span className="text-xs md:text-sm font-bold text-[#0F172A] block">材料搭配与 CMF 工艺</span>
                            <p className="text-xs md:text-sm text-[#475569] leading-relaxed">
                              80%以上铝合金零部件采用 <strong>0.1mm数控精加工与阳极氧化细砂处理</strong>，表面呈现磨砂玻璃般高级质感；关节黑色软胶指示互动区域。
                            </p>
                          </div>

                          <div className="bg-white/90 p-3.5 md:p-4 rounded-2xl border border-[#E2E8F0] shadow-2xs space-y-1">
                            <span className="text-xs md:text-sm font-bold text-[#0F172A] block">未来感呼吸光影</span>
                            <p className="text-xs md:text-sm text-[#475569] leading-relaxed">
                              头部采用黑茶色半透明亚克力罩内置绿色呼吸灯，光影均匀散发呈闪烁效果，赋予机器人生命感与情绪表达。
                            </p>
                          </div>

                          <div className="bg-white/90 p-3.5 md:p-4 rounded-2xl border border-[#E2E8F0] shadow-2xs space-y-1">
                            <span className="text-xs md:text-sm font-bold text-[#0F172A] block">快拆结构与关节细节</span>
                            <p className="text-xs md:text-sm text-[#475569] leading-relaxed">
                              卡槽式快拆电池仓配合手臂与大腿关节哑光黑橡胶圈紧贴，兼顾防尘减震与逼真连贯的运动轨迹弧度。
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                {/* 6. 品牌升级 —— 左右构图板块 4 */}
                <section className="space-y-4 text-left">
                  <ScrollSectionTitle 
                    badge="BRAND UPGRADE"
                    title="品牌升级"
                  />

                  <div className="pt-2">
                    <div className="content-block-split reverse grid grid-cols-1 md:grid-cols-12 items-stretch gap-y-4 md:gap-y-0">
                      {/* 左侧：文字卡片 */}
                      <div className="order-2 md:order-1 md:col-span-6 relative z-0 w-full md:w-[calc(100%+2rem)] lg:w-[calc(100%+2.5rem)] bg-[#F8FAFC] border border-[#D6E2ED] rounded-3xl p-6 sm:p-8 md:p-8 md:pr-12 lg:p-10 lg:pr-14 shadow-xs flex flex-col justify-between md:h-full">
                        <div>
                          <div className="inline-flex items-center gap-2 mb-2">
                            <span className="w-2 h-2 rounded-full bg-[#0284C7]"></span>
                            <span className="text-xs font-bold text-[#0284C7] uppercase tracking-wider">“三品合一”战略</span>
                          </div>
                          <h3 className="text-[20px] md:text-[22px] lg:text-[24px] font-bold text-[#1A1A1A] font-display mb-3 leading-tight">
                            从制造企业向未来智能科技品牌的升维
                          </h3>
                        </div>

                        <div className="space-y-3.5 md:space-y-4 text-[#334155] text-[14px] md:text-[15px] leading-relaxed my-auto">
                          <div className="bg-white/90 p-4 md:p-4.5 rounded-2xl border border-[#E2E8F0] shadow-2xs space-y-1.5">
                            <span className="text-xs md:text-sm font-bold text-[#0F172A] block">品牌定位跨越</span>
                            <p className="text-xs md:text-sm text-[#475569] leading-relaxed">
                              项目不仅完成单一产品外观升级，更推动埃斯顿品牌从传统工业制造企业向未来智能科技品牌转变。
                            </p>
                          </div>

                          <div className="bg-white/90 p-4 md:p-4.5 rounded-2xl border border-[#E2E8F0] shadow-2xs space-y-1.5">
                            <span className="text-xs md:text-sm font-bold text-[#0F172A] block">未来感语言构建</span>
                            <p className="text-xs md:text-sm text-[#475569] leading-relaxed">
                              通过建立具有未来感、人性化和高识别度的产品语言，进一步强化品牌在人形机器人领域的创领地位。
                            </p>
                          </div>

                          <div className="bg-white/90 p-4 md:p-4.5 rounded-2xl border border-[#E2E8F0] shadow-2xs space-y-1.5">
                            <span className="text-xs md:text-sm font-bold text-[#0F172A] block">三位一体价值融合</span>
                            <p className="text-xs md:text-sm text-[#475569] leading-relaxed">
                              项目让技术实力通过设计语言被用户感知，完美实现了品牌价值、产品价值与用户体验的高高度统一。
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* 右侧：图片卡片 */}
                      <div className="order-1 md:order-2 md:col-span-6 relative z-10 w-full aspect-[8/9] rounded-3xl overflow-hidden bg-neutral-100 border border-neutral-200/80 shadow-md transition-shadow duration-300 hover:shadow-lg">
                        <img 
                          src="https://github.com/minaxyue-ops/MINA/releases/download/2%E6%A1%88%E4%BE%8B%E8%AF%A6%E6%83%85%E9%A1%B5%E9%85%8D%E5%9B%BE/20.webp" 
                          alt="品牌升级与定位"
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </section>

                {/* 9. 价值展现 —— 上图下文 (配图 16:9 + 数据高亮) */}
                <section className="space-y-4 text-left">
                  <ScrollSectionTitle 
                    badge="COMMERCIAL VALUE"
                    title="价值展现"
                  />

                  <div className="content-block-1 space-y-6 pt-2">
                    <div className="flex flex-col gap-6">
                      <div className="w-full aspect-[16/9] rounded-3xl overflow-hidden bg-neutral-100 border border-neutral-200/60 shadow-xs">
                        <img 
                          src="https://github.com/minaxyue-ops/MINA/releases/download/2%E6%A1%88%E4%BE%8B%E8%AF%A6%E6%83%85%E9%A1%B5%E9%85%8D%E5%9B%BE/17.webp" 
                          alt="埃斯顿 Codroid 02 价值展现 1"
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="w-full aspect-[16/9] rounded-3xl overflow-hidden bg-neutral-100 border border-neutral-200/60 shadow-xs">
                        <img 
                          src="https://github.com/minaxyue-ops/MINA/releases/download/2%E6%A1%88%E4%BE%8B%E8%AF%A6%E6%83%85%E9%A1%B5%E9%85%8D%E5%9B%BE/19.webp" 
                          alt="埃斯顿 Codroid 02 价值展现 2"
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>

                    <div className="bg-[#F8FAFC] border border-[#D6E2ED] rounded-2xl p-5 md:p-6 space-y-4 text-[#334155] text-[14px] md:text-[15px] leading-relaxed">
                      <p className="flex items-start gap-2">
                        <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#0284C7] mt-2 shrink-0"></span>
                        <span>
                          <strong className="text-[#0F172A]">用户价值：</strong>拥有更加友好、可信赖的视觉形象，消解了工业机械的冰冷感，建立温暖亲近的人机关系。
                        </span>
                      </p>

                      <p className="flex items-start gap-2">
                        <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#0284C7] mt-2 shrink-0"></span>
                        <span>
                          <strong className="text-[#0F172A]">品牌价值：</strong>建立起埃斯顿在未来人形机器人领域的差异化竞争优势，推动企业向未来智能科技品牌升级。
                        </span>
                      </p>

                      <p className="flex items-start gap-2">
                        <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#0284C7] mt-2 shrink-0"></span>
                        <span>
                          <strong className="text-[#0F172A]">行业价值：</strong>探索了人形机器人从单纯功能设备向智能陪伴伙伴发展的全新设计方向，树立人机体验新标杆。
                        </span>
                      </p>
                    </div>
                  </div>
                </section>

                {/* 10. 成果展示 —— 纯图垂直连排 */}
                <section className="space-y-6 text-left">
                  <ScrollSectionTitle 
                    badge="ACHIEVEMENTS GALLERY"
                    title="成果展示"
                  />

                  <div className="pt-2">
                    <div className="flex flex-col gap-6">
                      <div className="w-full rounded-3xl overflow-hidden border border-neutral-200/60 shadow-xs bg-neutral-50">
                        <img 
                          src="https://github.com/minaxyue-ops/MINA/releases/download/2%E6%A1%88%E4%BE%8B%E8%AF%A6%E6%83%85%E9%A1%B5%E9%85%8D%E5%9B%BE/21.webp" 
                          alt="埃斯顿 Codroid 02 成果展示 1"
                          referrerPolicy="no-referrer"
                          className="w-full h-auto hover:scale-[1.01] transition-transform duration-300 block"
                        />
                      </div>

                      <div className="w-full rounded-3xl overflow-hidden border border-neutral-200/60 shadow-xs bg-neutral-50">
                        <img 
                          src="https://github.com/minaxyue-ops/MINA/releases/download/2%E6%A1%88%E4%BE%8B%E8%AF%A6%E6%83%85%E9%A1%B5%E9%85%8D%E5%9B%BE/18.webp" 
                          alt="埃斯顿 Codroid 02 成果展示 2"
                          referrerPolicy="no-referrer"
                          className="w-full h-auto hover:scale-[1.01] transition-transform duration-300 block"
                        />
                      </div>

                      <div className="w-full rounded-3xl overflow-hidden border border-neutral-200/60 shadow-xs bg-neutral-50">
                        <img 
                          src="https://github.com/minaxyue-ops/MINA/releases/download/2%E6%A1%88%E4%BE%8B%E8%AF%A6%E6%83%85%E9%A1%B5%E9%85%8D%E5%9B%BE/16.webp" 
                          alt="埃斯顿 Codroid 02 成果展示 3"
                          referrerPolicy="no-referrer"
                          className="w-full h-auto hover:scale-[1.01] transition-transform duration-300 block"
                        />
                      </div>
                    </div>
                  </div>
                </section>
              </>
            ) : (
              /* ================= 小仙炖·品类创新全案咨询 案例内容 ================= */
              <>
                {/* 二、蓝色“项目资料信息”卡片 */}
                <section className="bg-[#F0F4F8] text-[#1E293B] rounded-3xl p-6 md:p-8 border border-[#D6E2ED] shadow-xs">
                  {/* 顶部标题 */}
                  <div className="mb-6 p-5 md:p-7 rounded-3xl bg-white border border-[#D6E2ED] shadow-xs flex items-center justify-center min-w-0 overflow-hidden">
                    <h1 
                      title="小仙炖品类创新全案咨询"
                      className="text-3xl md:text-5xl lg:text-[58px] font-bold text-[#0F172A] leading-tight tracking-tight font-display text-center truncate max-w-full"
                    >
                      小仙炖品类创新全案咨询
                    </h1>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-stretch">
                    {/* 左侧键值对表格 */}
                    <div className="md:col-span-7 space-y-4 text-left flex flex-col justify-center">
                      <h3 className="text-lg font-bold text-[#0F172A] font-display mb-3 border-b border-[#CBD5E1] pb-3 flex items-center gap-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-[#0284C7]"></span>
                        项目资料信息
                      </h3>

                      <div className="space-y-[16px]">
                        <div className="flex items-start text-sm">
                          <span className="text-[#64748B] w-24 shrink-0 font-medium">品牌名称</span>
                          <span className="text-[#0F172A] font-semibold">小仙炖</span>
                        </div>

                        <div className="flex items-start text-sm">
                          <span className="text-[#64748B] w-24 shrink-0 font-medium">所属行业</span>
                          <span className="text-[#0F172A] font-semibold">食品酒饮</span>
                        </div>

                        <div className="flex items-start text-sm">
                          <span className="text-[#64748B] w-24 shrink-0 font-medium">咨询服务</span>
                          <span className="text-[#0F172A] font-semibold">品类创新、产品创新、品牌创新、三品合一</span>
                        </div>

                        <div className="flex items-start text-sm">
                          <span className="text-[#64748B] w-24 shrink-0 font-medium">设计服务</span>
                          <span className="text-[#0F172A] font-semibold">品牌设计、品牌战略、品牌策划、包装设计</span>
                        </div>

                        <div className="flex items-start text-sm">
                          <span className="text-[#64748B] w-24 shrink-0 font-medium">服务时间</span>
                          <span className="text-[#0F172A] font-semibold">2022</span>
                        </div>

                        <div className="flex items-start text-sm">
                          <span className="text-[#64748B] w-24 shrink-0 font-medium">成果价值</span>
                          <span className="text-[#0F172A] font-semibold leading-relaxed">
                            创立仅三年销量便突破260万份，成为首个斩获世界食品品质评鉴大会奖的中国燕窝品牌。
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* 右侧配图：小仙炖真实素材 */}
                    <div className="md:col-span-5 flex items-stretch">
                      <div className="w-full h-full min-h-[220px] max-h-[360px] rounded-3xl overflow-hidden bg-white border border-[#D6E2ED] shadow-xs">
                        <img 
                          src="https://github.com/minaxyue-ops/MINA/releases/download/2%E6%A1%88%E4%BE%8B%E8%AF%A6%E6%83%85%E9%A1%B5%E9%85%8D%E5%9B%BE/logo.png" 
                          alt="小仙炖产品/品牌视觉图"
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </section>

                {/* 1. 项目背景 —— 上图下文 (配图 16:9) */}
                <section className="space-y-4 text-left">
                  <ScrollSectionTitle 
                    badge="BACKGROUND & CHALLENGES"
                    title="项目背景"
                  />

                  <div className="content-block-1 space-y-6 pt-2">
                    <div className="w-full aspect-[16/9] rounded-3xl overflow-hidden bg-neutral-100 border border-neutral-200/60 shadow-xs">
                      <img 
                        src="https://github.com/minaxyue-ops/MINA/releases/download/2%E6%A1%88%E4%BE%8B%E8%AF%A6%E6%83%85%E9%A1%B5%E9%85%8D%E5%9B%BE/Group.53.png" 
                        alt="小仙炖项目背景"
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* 核心痛点与突破口突出卡片 */}
                    <div className="bg-[#F8FAFC] border border-[#D6E2ED] rounded-2xl p-5 md:p-6 space-y-3">
                      <div className="flex flex-wrap items-center gap-2 text-xs font-bold text-[#0284C7] uppercase tracking-wider">
                        <span className="bg-[#E0F2FE] px-2.5 py-1 rounded-md">核心挑战</span>
                        <span>传统燕窝市场四大通病与新群体需求冲突</span>
                      </div>
                      <p className="text-[15px] md:text-[16px] text-[#0F172A] font-semibold leading-relaxed">
                        传统市场深陷“原料不安全、炖煮耗时间、人群定位模糊、营销手段陈旧”四大痛点，消费者信任度极低；而新一代25-40岁都市女性急需精致、高品质、即开即食的养颜滋补方案。
                      </p>
                    </div>

                    <div className="text-[#334155] text-[15px] md:text-[16px] leading-[1.8] space-y-4">
                      <p className="flex items-start gap-2">
                        <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#0284C7] mt-2.5 shrink-0"></span>
                        <span>
                          <strong className="text-[#0F172A]">行业背景：</strong>2014年小仙炖创立之际，燕窝行业正处于从导入期向成长期过渡的临界点。当时市场规范缺失、品质乱象频发，干燕和传统即食燕窝均无法满足当代消费者的消费升级诉求。
                        </span>
                      </p>
                      <p className="flex items-start gap-2">
                        <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#0284C7] mt-2.5 shrink-0"></span>
                        <span>
                          <strong className="text-[#0F172A]">消费趋势：</strong>养生年轻化趋势凸显，90后与00后养生意识迅速觉醒，都市白领女性对燕窝产品的营养留存、食用便捷性及视觉美感提出了极高的综合标准。
                        </span>
                      </p>
                      <p className="flex items-start gap-2">
                        <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#0284C7] mt-2.5 shrink-0"></span>
                        <span>
                          <strong className="text-[#0F172A]">破局之道：</strong>小仙炖携手洛可可，以“品类、产品、品牌”三重创新为突破口，力求打破传统行业僵局，开创并定义“鲜炖燕窝”新赛道。
                        </span>
                      </p>
                    </div>
                  </div>
                </section>

                {/* 2. 用户咨询 */}
                <section className="space-y-6 text-left">
                  <ScrollSectionTitle 
                    badge="USER CONSULTING"
                    title="用户咨询"
                  />

                  <div className="pt-2 space-y-8">
                    {/* 配图 */}
                    <div className="flex flex-col gap-6">
                      <div className="w-full aspect-[16/9] rounded-3xl overflow-hidden bg-neutral-100 border border-neutral-200/60 shadow-xs">
                        <img 
                          src="https://github.com/minaxyue-ops/MINA/releases/download/2%E6%A1%88%E4%BE%8B%E8%AF%A6%E6%83%85%E9%A1%B5%E9%85%8D%E5%9B%BE/1.png" 
                          alt="咨询服务成果展示 1"
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="w-full aspect-[16/9] rounded-3xl overflow-hidden bg-neutral-100 border border-neutral-200/60 shadow-xs">
                        <img 
                          src="https://github.com/minaxyue-ops/MINA/releases/download/2%E6%A1%88%E4%BE%8B%E8%AF%A6%E6%83%85%E9%A1%B5%E9%85%8D%E5%9B%BE/2.png" 
                          alt="咨询服务成果展示 2"
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>

                    <div className="pt-4 border-t border-[#D6E2ED]">
                      <div className="content-block-split grid grid-cols-1 md:grid-cols-12 items-stretch gap-y-4 md:gap-y-0">
                        {/* 左侧：图片卡片 */}
                        <div className="md:col-span-6 relative z-10 w-full aspect-[8/9] rounded-3xl overflow-hidden bg-neutral-100 border border-neutral-200/80 shadow-md transition-shadow duration-300 hover:shadow-lg">
                          <img 
                            src="https://github.com/minaxyue-ops/MINA/releases/download/2%E6%A1%88%E4%BE%8B%E8%AF%A6%E6%83%85%E9%A1%B5%E9%85%8D%E5%9B%BE/5.png" 
                            alt="用户咨询深度调研"
                            referrerPolicy="no-referrer"
                            className="w-full h-full object-cover"
                          />
                        </div>

                        {/* 右侧：文字卡片 */}
                        <div className="md:col-span-6 relative z-0 w-full md:w-[calc(100%+2rem)] lg:w-[calc(100%+2.5rem)] md:-ml-8 lg:-ml-10 bg-[#F8FAFC] border border-[#D6E2ED] rounded-3xl p-6 sm:p-8 md:p-8 md:pl-12 lg:p-10 lg:pl-14 shadow-xs flex flex-col justify-between md:h-full">
                          <div>
                            <div className="inline-flex items-center gap-2 mb-2">
                              <span className="w-2 h-2 rounded-full bg-[#0284C7]"></span>
                              <span className="text-xs font-bold text-[#0284C7] uppercase tracking-wider">深度用户洞察</span>
                            </div>
                            <h3 className="text-[20px] md:text-[22px] lg:text-[24px] font-bold text-[#1A1A1A] font-display mb-3 md:mb-4 leading-tight">
                              精准锁定都市高知女性群体的双重需求
                            </h3>
                          </div>

                          <div className="space-y-3.5 md:space-y-4 text-[#334155] text-[14px] md:text-[15px] leading-relaxed my-auto">
                            <div className="bg-white/90 p-4 md:p-4.5 rounded-2xl border border-[#E2E8F0] shadow-2xs space-y-1.5">
                              <span className="text-xs md:text-sm font-bold text-[#0F172A] block">核心客群画像</span>
                              <p className="text-xs md:text-sm text-[#475569] leading-relaxed">
                                锁定 <strong>25-40岁都市女性</strong>，其中本科及以上学历高达 <strong>98.5%</strong>，具备中高收入，追求精致进取的生活方式。
                              </p>
                            </div>

                            <div className="bg-white/90 p-4 md:p-4.5 rounded-2xl border border-[#E2E8F0] shadow-2xs space-y-1.5">
                              <span className="text-xs md:text-sm font-bold text-[#0F172A] block">理性与感性双重诉求</span>
                              <p className="text-xs md:text-sm text-[#475569] leading-relaxed">
                                拆解居家、工作、出行、聚会场景，挖掘出“营养、养颜、便捷”的理性刚需与“精致、仪式感”的情感依赖。
                              </p>
                            </div>

                            <div className="bg-white/90 p-4 md:p-4.5 rounded-2xl border border-[#E2E8F0] shadow-2xs space-y-1.5">
                              <span className="text-xs md:text-sm font-bold text-[#0F172A] block">消费决策新特征</span>
                              <p className="text-xs md:text-sm text-[#475569] leading-relaxed">
                                契合年轻人“成分党、测评党”的消费心理，注重溯源品质与透明口碑，为后续创新奠定认知根基。
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                {/* 4. 品类创新 —— 左文右图 (叠卡构图：图片在上层，文字在下层) */}
                <section className="space-y-4 text-left">
                  <ScrollSectionTitle 
                    badge="CATEGORY INNOVATION"
                    title="品类创新"
                  />

                  <div className="content-block-split reverse grid grid-cols-1 md:grid-cols-12 items-stretch pt-2 gap-y-4 md:gap-y-0">
                    {/* 左侧：文字卡片 */}
                    <div className="order-2 md:order-1 md:col-span-6 relative z-0 w-full md:w-[calc(100%+2rem)] lg:w-[calc(100%+2.5rem)] bg-[#F8FAFC] border border-[#D6E2ED] rounded-3xl p-6 sm:p-8 md:p-8 md:pr-12 lg:p-10 lg:pr-14 shadow-xs flex flex-col justify-between md:h-full">
                      <div>
                        <div className="inline-flex items-center gap-2 mb-2">
                          <span className="w-2 h-2 rounded-full bg-[#0284C7]"></span>
                          <span className="text-xs font-bold text-[#0284C7] uppercase tracking-wider">品类开创与定义</span>
                        </div>
                        <h3 className="text-[20px] md:text-[22px] lg:text-[24px] font-bold text-[#1A1A1A] font-display mb-3 md:mb-4 leading-tight">
                          从“干燕”到“鲜炖”的颠覆性升级
                        </h3>
                      </div>

                      <div className="space-y-3.5 md:space-y-4 text-[#334155] text-[14px] md:text-[15px] leading-relaxed my-auto">
                        <div className="bg-white/90 p-4 md:p-4.5 rounded-2xl border border-[#E2E8F0] shadow-2xs space-y-1.5">
                          <span className="text-xs md:text-sm font-bold text-[#0F172A] block">品类痛点破局</span>
                          <p className="text-xs md:text-sm text-[#475569] leading-relaxed">
                            明确传统干燕（炖煮门槛高）与即食燕窝（高温长保失营养）的价值短板，避开同质化恶性竞争。
                          </p>
                        </div>

                        <div className="bg-white/90 p-4 md:p-4.5 rounded-2xl border border-[#E2E8F0] shadow-2xs space-y-1.5">
                          <span className="text-xs md:text-sm font-bold text-[#0F172A] block">“鲜”与“仙”双重核心价值</span>
                          <p className="text-xs md:text-sm text-[#475569] leading-relaxed">
                            <strong>“鲜”</strong>（新鲜、保鲜、鲜美）+ <strong>“仙”</strong>（精致、美丽、方便），全面定义新赛道核心价值。
                          </p>
                        </div>

                        <div className="bg-white/90 p-4 md:p-4.5 rounded-2xl border border-[#E2E8F0] shadow-2xs space-y-1.5">
                          <span className="text-xs md:text-sm font-bold text-[#0F172A] block">制定行业标准</span>
                          <p className="text-xs md:text-sm text-[#475569] leading-relaxed">
                            规划品类从导入期到成长期的演进路径，建立鲜炖燕窝品类标准，助小仙炖抢占领跑地位。
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* 右侧：图片卡片 */}
                    <div className="order-1 md:order-2 md:col-span-6 relative z-10 w-full aspect-[8/9] rounded-3xl overflow-hidden bg-neutral-100 border border-neutral-200/80 shadow-md transition-shadow duration-300 hover:shadow-lg">
                      <img 
                        src="https://github.com/minaxyue-ops/MINA/releases/download/2%E6%A1%88%E4%BE%8B%E8%AF%A6%E6%83%85%E9%A1%B5%E9%85%8D%E5%9B%BE/6.png" 
                        alt="品类创新策略路径"
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </section>

                {/* 5. 产品创新 */}
                <section className="space-y-4 text-left">
                  <ScrollSectionTitle 
                    badge="PRODUCT INNOVATION"
                    title="产品创新"
                  />

                  <div className="pt-2">
                    <div className="content-block-split grid grid-cols-1 md:grid-cols-12 items-stretch gap-y-4 md:gap-y-0">
                      <div className="md:col-span-6 relative z-10 w-full aspect-[8/9] rounded-3xl overflow-hidden bg-neutral-100 border border-neutral-200/80 shadow-md transition-shadow duration-300 hover:shadow-lg">
                        <img 
                          src="https://github.com/minaxyue-ops/MINA/releases/download/2%E6%A1%88%E4%BE%8B%E8%AF%A6%E6%83%85%E9%A1%B5%E9%85%8D%E5%9B%BE/7.png" 
                          alt="产品创新与工艺突破"
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover"
                        />
                      </div>

                      <div className="md:col-span-6 relative z-0 w-full md:w-[calc(100%+2rem)] lg:w-[calc(100%+2.5rem)] md:-ml-8 lg:-ml-10 bg-[#F8FAFC] border border-[#D6E2ED] rounded-3xl p-6 sm:p-8 md:p-8 md:pl-12 lg:p-10 lg:pl-14 shadow-xs flex flex-col justify-between md:h-full">
                        <div>
                          <div className="inline-flex items-center gap-2 mb-2">
                            <span className="w-2 h-2 rounded-full bg-[#0284C7]"></span>
                            <span className="text-xs font-bold text-[#0284C7] uppercase tracking-wider">设计理念与体验重构</span>
                          </div>
                          <h3 className="text-[20px] md:text-[22px] lg:text-[24px] font-bold text-[#1A1A1A] font-display mb-3 leading-tight">
                            首创突破性包装瓶型与全体验重构
                          </h3>
                        </div>

                        <div className="space-y-3.5 md:space-y-4 my-auto">
                          <div className="bg-white/90 p-4 md:p-4.5 rounded-2xl border border-[#E2E8F0] shadow-2xs space-y-1.5">
                            <span className="text-xs md:text-sm font-bold text-[#0F172A] block">碗型升级 · 消除痛点</span>
                            <p className="text-xs md:text-sm text-[#475569] leading-relaxed">
                              颠覆业内传统小口瓶结构，采用贴合中式碗食习惯的大口宫廷碗型，彻底解决瓶底残留无法舀取的问题。
                            </p>
                          </div>

                          <div className="bg-white/90 p-4 md:p-4.5 rounded-2xl border border-[#E2E8F0] shadow-2xs space-y-1.5">
                            <span className="text-xs md:text-sm font-bold text-[#0F172A] block">东方美学 · 手感适配</span>
                            <p className="text-xs md:text-sm text-[#475569] leading-relaxed">
                              底座融合中国高脚碗形态，拉高瓶身线条比例，契合女性纤细手型，兼备化妆品级别的仪式感与精致度。
                            </p>
                          </div>

                          <div className="bg-white/90 p-4 md:p-4.5 rounded-2xl border border-[#E2E8F0] shadow-2xs space-y-1.5">
                            <span className="text-xs md:text-sm font-bold text-[#0F172A] block">透明玻璃 + 中国红 & 全链路渗透</span>
                            <p className="text-xs md:text-sm text-[#475569] leading-relaxed">
                              高透玻璃搭配中国红瓶盖实现内质可视化；将设计延伸至 C2M 服务流程与透明工厂，赋予全维度极致体验。
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                {/* 6. 品牌升级 —— 左文右图 (叠卡构图：图片在上层，文字在下层) */}
                <section className="space-y-4 text-left">
                  <ScrollSectionTitle 
                    badge="BRAND UPGRADE"
                    title="品牌升级"
                  />

                  <div className="content-block-split reverse grid grid-cols-1 md:grid-cols-12 items-stretch pt-2 gap-y-4 md:gap-y-0">
                    {/* 左侧：文字卡片 */}
                    <div className="order-2 md:order-1 md:col-span-6 relative z-0 w-full md:w-[calc(100%+2rem)] lg:w-[calc(100%+2.5rem)] bg-[#F8FAFC] border border-[#D6E2ED] rounded-3xl p-6 sm:p-8 md:p-8 md:pr-12 lg:p-10 lg:pr-14 shadow-xs flex flex-col justify-between md:h-full">
                      <div>
                        <div className="inline-flex items-center gap-2 mb-2">
                          <span className="w-2 h-2 rounded-full bg-[#0284C7]"></span>
                          <span className="text-xs font-bold text-[#0284C7] uppercase tracking-wider">“三品合一”战略</span>
                        </div>
                        <h3 className="text-[20px] md:text-[22px] lg:text-[24px] font-bold text-[#1A1A1A] font-display mb-3 leading-tight">
                          品牌即品类 · 抢占心智标杆
                        </h3>
                      </div>

                      <div className="space-y-3.5 md:space-y-4 text-[#334155] text-[14px] md:text-[15px] leading-relaxed my-auto">
                        <div className="bg-white/90 p-4 md:p-4.5 rounded-2xl border border-[#E2E8F0] shadow-2xs space-y-1.5">
                          <span className="text-xs md:text-sm font-bold text-[#0F172A] block">“三品合一”强绑定</span>
                          <p className="text-xs md:text-sm text-[#475569] leading-relaxed">
                            将“小仙炖”品牌名称与“鲜炖燕窝”品类深度绑定，实现让“小仙炖”成为鲜炖燕窝代名词。
                          </p>
                        </div>

                        <div className="bg-white/90 p-4 md:p-4.5 rounded-2xl border border-[#E2E8F0] shadow-2xs space-y-1.5">
                          <span className="text-xs md:text-sm font-bold text-[#0F172A] block">专属“视觉锤”构筑</span>
                          <p className="text-xs md:text-sm text-[#475569] leading-relaxed">
                            打造透明玻璃、中国盏、中国红的独特美学锤，确立“鲜炖燕窝专家”权威品牌定位。
                          </p>
                        </div>

                        <div className="bg-white/90 p-4 md:p-4.5 rounded-2xl border border-[#E2E8F0] shadow-2xs space-y-1.5">
                          <span className="text-xs md:text-sm font-bold text-[#0F172A] block">立体化破圈传播</span>
                          <p className="text-xs md:text-sm text-[#475569] leading-relaxed">
                            借助明星投资人体验种草、网红测评直播引流，配合透明工厂与空瓶回收深化情感纽带。
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* 右侧：图片卡片 */}
                    <div className="order-1 md:order-2 md:col-span-6 relative z-10 w-full aspect-[8/9] rounded-3xl overflow-hidden bg-neutral-100 border border-neutral-200/80 shadow-md transition-shadow duration-300 hover:shadow-lg">
                      <img 
                        src="https://github.com/minaxyue-ops/MINA/releases/download/2%E6%A1%88%E4%BE%8B%E8%AF%A6%E6%83%85%E9%A1%B5%E9%85%8D%E5%9B%BE/9.png" 
                        alt="品牌升级与视觉锤"
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </section>

                {/* 8. 价值展现 —— 上图下文 (配图 16:9 + 数据高亮) */}
                <section className="space-y-4 text-left">
                  <ScrollSectionTitle 
                    badge="COMMERCIAL VALUE"
                    title="价值展现"
                  />

                  <div className="content-block-1 space-y-6 pt-2">
                    <div className="flex flex-col gap-6">
                      <div className="w-full aspect-[16/9] rounded-3xl overflow-hidden bg-neutral-100 border border-neutral-200/60 shadow-xs">
                        <img 
                          src="https://github.com/minaxyue-ops/MINA/releases/download/2%E6%A1%88%E4%BE%8B%E8%AF%A6%E6%83%85%E9%A1%B5%E9%85%8D%E5%9B%BE/1.png" 
                          alt="小仙炖价值展现 1"
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="w-full aspect-[16/9] rounded-3xl overflow-hidden bg-neutral-100 border border-neutral-200/60 shadow-xs">
                        <img 
                          src="https://github.com/minaxyue-ops/MINA/releases/download/2%E6%A1%88%E4%BE%8B%E8%AF%A6%E6%83%85%E9%A1%B5%E9%85%8D%E5%9B%BE/2.png" 
                          alt="小仙炖价值展现 2"
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>

                    <div className="bg-[#F8FAFC] border border-[#D6E2ED] rounded-2xl p-5 md:p-6 space-y-4 text-[#334155] text-[14px] md:text-[15px] leading-relaxed">
                      <p className="flex items-start gap-2">
                        <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#0284C7] mt-2 shrink-0"></span>
                        <span>
                          <strong className="text-[#0F172A]">赛道领跑：</strong>小仙炖通过品类、产品、品牌的全维度创新，成功开创鲜炖燕窝新品类，跃升为中国鲜炖燕窝第一品牌，重新树立了滋补行业的品质标杆。
                        </span>
                      </p>

                      <p className="flex items-start gap-2">
                        <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#0284C7] mt-2 shrink-0"></span>
                        <span>
                          <strong className="text-[#0F172A]">商业爆发：</strong>以“咨询+设计”双轮驱动，实现了品类、产品、品牌与用户心智的高度合一，成为首个斩获世界品质特别金奖的中国燕窝品牌。
                        </span>
                      </p>

                      <p className="flex items-start gap-2">
                        <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#0284C7] mt-2 shrink-0"></span>
                        <span>
                          <strong className="text-[#0F172A]">社会与行业价值：</strong>推动燕窝行业实现从传统繁琐滋补向年轻化、便捷化升级，为中式传统滋补品类的现代复兴与品牌化提供了可复制的实践样本。
                        </span>
                      </p>
                    </div>
                  </div>
                </section>

                {/* 9. 成果展示 —— 纯图垂直连排 */}
                <section className="space-y-6 text-left">
                    <ScrollSectionTitle 
                      badge="ACHIEVEMENTS GALLERY"
                      title="成果展示"
                    />

                    <div className="pt-2">
                      <div className="flex flex-col gap-6">
                        <div className="w-full rounded-3xl overflow-hidden border border-neutral-200/60 shadow-xs bg-neutral-50">
                          <img 
                            src="https://github.com/minaxyue-ops/MINA/releases/download/2%E6%A1%88%E4%BE%8B%E8%AF%A6%E6%83%85%E9%A1%B5%E9%85%8D%E5%9B%BE/6.png" 
                            alt="成果展示 1"
                            referrerPolicy="no-referrer"
                            className="w-full h-auto hover:scale-[1.01] transition-transform duration-300 block"
                          />
                        </div>

                        <div className="w-full rounded-3xl overflow-hidden border border-neutral-200/60 shadow-xs bg-neutral-50">
                          <img 
                            src="https://github.com/minaxyue-ops/MINA/releases/download/2%E6%A1%88%E4%BE%8B%E8%AF%A6%E6%83%85%E9%A1%B5%E9%85%8D%E5%9B%BE/2.png" 
                            alt="成果展示 3"
                            referrerPolicy="no-referrer"
                            className="w-full h-auto hover:scale-[1.01] transition-transform duration-300 block"
                          />
                        </div>

                        <div className="w-full rounded-3xl overflow-hidden border border-neutral-200/60 shadow-xs bg-neutral-50">
                          <img 
                            src="https://github.com/minaxyue-ops/MINA/releases/download/2%E6%A1%88%E4%BE%8B%E8%AF%A6%E6%83%85%E9%A1%B5%E9%85%8D%E5%9B%BE/7.png" 
                            alt="成果展示 4"
                            referrerPolicy="no-referrer"
                            className="w-full h-auto hover:scale-[1.01] transition-transform duration-300 block"
                          />
                        </div>

                        <div className="w-full rounded-3xl overflow-hidden border border-neutral-200/60 shadow-xs bg-neutral-50">
                          <img 
                            src="https://github.com/minaxyue-ops/MINA/releases/download/2%E6%A1%88%E4%BE%8B%E8%AF%A6%E6%83%85%E9%A1%B5%E9%85%8D%E5%9B%BE/5.png" 
                            alt="成果展示 5"
                            referrerPolicy="no-referrer"
                            className="w-full h-auto hover:scale-[1.01] transition-transform duration-300 block"
                          />
                        </div>

                        <div className="w-full rounded-3xl overflow-hidden border border-neutral-200/60 shadow-xs bg-neutral-50">
                          <img 
                            src="https://github.com/minaxyue-ops/MINA/releases/download/2%E6%A1%88%E4%BE%8B%E8%AF%A6%E6%83%85%E9%A1%B5%E9%85%8D%E5%9B%BE/12.png" 
                            alt="成果展示 6"
                            referrerPolicy="no-referrer"
                            className="w-full h-auto hover:scale-[1.01] transition-transform duration-300 block"
                          />
                        </div>

                        <div className="w-full rounded-3xl overflow-hidden border border-neutral-200/60 shadow-xs bg-neutral-50">
                          <img 
                            src="https://github.com/minaxyue-ops/MINA/releases/download/2%E6%A1%88%E4%BE%8B%E8%AF%A6%E6%83%85%E9%A1%B5%E9%85%8D%E5%9B%BE/10.png" 
                            alt="成果展示 7"
                            referrerPolicy="no-referrer"
                            className="w-full h-auto hover:scale-[1.01] transition-transform duration-300 block"
                          />
                        </div>

                        <div className="w-full rounded-3xl overflow-hidden border border-neutral-200/60 shadow-xs bg-neutral-50">
                          <img 
                            src="https://github.com/minaxyue-ops/MINA/releases/download/2%E6%A1%88%E4%BE%8B%E8%AF%A6%E6%83%85%E9%A1%B5%E9%85%8D%E5%9B%BE/11.png" 
                            alt="成果展示 8"
                            referrerPolicy="no-referrer"
                            className="w-full h-auto hover:scale-[1.01] transition-transform duration-300 block"
                          />
                        </div>
                      </div>
                    </div>
                  </section>
              </>
            )}

          </main>

        </div>
      </div>

    </div>
  );
}
