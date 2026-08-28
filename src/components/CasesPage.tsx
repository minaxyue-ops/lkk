import React, { useState, useEffect, useMemo, useRef } from 'react';
import { Search, X, Filter, RotateCcw, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { ALL_CASES, INDUSTRIES, SERVICES, CLIENT_TYPES } from '../data/cases';

interface CasesPageProps {
  onSelectCase: (cs: { id: string; title: string; description: string; image?: string; logoType?: any }) => void;
  onOpenContactModal: () => void;
  onNavigateDetail?: (url: string) => void;
}

export const CasesPage: React.FC<CasesPageProps> = ({ onSelectCase, onNavigateDetail }) => {
  // Search & Debounce State
  const [searchInput, setSearchInput] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  // Filter States
  const [selectedIndustry, setSelectedIndustry] = useState('全部');
  const [selectedService, setSelectedService] = useState('全部');
  const [selectedClientType, setSelectedClientType] = useState('全部');

  // Filter change loading progress bar state
  const [isFilterLoading, setIsFilterLoading] = useState<boolean>(false);
  const [loadingKey, setLoadingKey] = useState<number>(0);

  // Pagination State (24 items per batch)
  const pageSize = 24;
  const [displayCount, setDisplayCount] = useState(pageSize);

  // Active touch state for card hover simulation on mobile
  const [activeTouchCard, setActiveTouchCard] = useState<string | null>(null);

  // 300ms Debounce effect for search input
  useEffect(() => {
    const handler = setTimeout(() => {
      setSearchQuery(searchInput);
      setDisplayCount(pageSize);
    }, 300);

    return () => {
      clearTimeout(handler);
    };
  }, [searchInput]);

  // Handlers for state updates
  const triggerLoadingAnimation = () => {
    setIsFilterLoading(true);
    setLoadingKey(prev => prev + 1);
  };

  const handleIndustryChange = (val: string) => {
    if (val === selectedIndustry) return;
    setSelectedIndustry(val);
    setDisplayCount(pageSize);
    triggerLoadingAnimation();
  };

  const handleServiceChange = (val: string) => {
    if (val === selectedService) return;
    setSelectedService(val);
    setDisplayCount(pageSize);
    triggerLoadingAnimation();
  };

  const handleClientTypeChange = (val: string) => {
    if (val === selectedClientType) return;
    setSelectedClientType(val);
    setDisplayCount(pageSize);
    triggerLoadingAnimation();
  };

  const handleSearchClear = () => {
    setSearchInput('');
    setSearchQuery('');
    setDisplayCount(pageSize);
    triggerLoadingAnimation();
  };

  const handleResetFilters = () => {
    setSearchInput('');
    setSearchQuery('');
    setSelectedIndustry('全部');
    setSelectedService('全部');
    setSelectedClientType('全部');
    setDisplayCount(pageSize);
    triggerLoadingAnimation();
  };

  // Filtered dataset
  const filteredCases = useMemo(() => {
    return ALL_CASES.filter((c) => {
      // Search filter
      const q = searchQuery.trim().toLowerCase();
      if (q) {
        const matchTitle = c.title.toLowerCase().includes(q);
        const matchBrand = c.brand.toLowerCase().includes(q);
        const matchDesc = c.description.toLowerCase().includes(q);
        if (!matchTitle && !matchBrand && !matchDesc) return false;
      }

      // Industry filter
      if (selectedIndustry !== '全部' && c.industry !== selectedIndustry) {
        return false;
      }

      // Service filter
      if (selectedService !== '全部' && c.service !== selectedService) {
        return false;
      }

      // Client Type filter
      if (selectedClientType !== '全部' && c.clientType !== selectedClientType) {
        return false;
      }

      return true;
    });
  }, [searchQuery, selectedIndustry, selectedService, selectedClientType]);

  // Paginated items to render
  const displayedCases = useMemo(() => {
    return filteredCases.slice(0, displayCount);
  }, [filteredCases, displayCount]);

  const hasMore = displayCount < filteredCases.length;
  const isFiltered = searchQuery !== '' || selectedIndustry !== '全部' || selectedService !== '全部' || selectedClientType !== '全部';

  return (
    <div className="bg-white min-h-screen text-neutral-800">
      
      {/* 1. BREADCRUMB & PAGE HEADER */}
      <div className="bg-neutral-50/70 border-b border-neutral-100 py-10 md:py-14">
        <div className="max-w-[95%] w-full mx-auto">
          {/* Breadcrumbs */}
          <div className="flex items-center gap-2 text-xs text-neutral-500 mb-4 font-mono">
            <a href="/" className="hover:text-[#007BC7] transition-colors">首页</a>
            <span>/</span>
            <span className="text-neutral-900 font-semibold">精选案例</span>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div>
              <span className="text-xs font-bold text-[#007BC7] uppercase tracking-widest font-mono">PORTFOLIOS & WORKS</span>
              <h1 className="hero-title text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight text-neutral-900 mt-2 leading-[1.05] font-display">
                <span className="char char-black">精</span><span className="char char-black">选</span><span className="char char-black">创</span><span className="char char-black">新</span><span className="char char-black">案</span><span className="char char-black">例</span>
              </h1>
            </div>
            <p className="text-sm text-neutral-500 max-w-xl leading-relaxed">
              洛可可已服务超过数千个品牌客户，荣获多项国际工业设计大奖。汇聚涵盖工业装备、机器人、新能源、美妆个护、医疗健康等多领域的爆品创新实战成果。
            </p>
          </div>
        </div>
      </div>

      {/* 2. DYNAMIC SEARCH & MULTI-DIMENSIONAL PILL FILTER BAR */}
      <div className="relative bg-white border-b border-neutral-200/80 py-4 transition-all">
        <div className="max-w-[95%] w-full mx-auto space-y-4">
          
          {/* Search Input Row with Outer Glow & Clear Button */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="relative w-full md:max-w-md">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400 pointer-events-none" />
              <input 
                type="text"
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                placeholder="搜索案例名称、品牌、关键词..."
                className="w-full pl-10 pr-10 py-2.5 bg-neutral-50/80 hover:bg-neutral-50 focus:bg-white text-sm text-neutral-800 placeholder-neutral-400 rounded-2xl border border-neutral-200 focus:border-[#007BC7] focus:shadow-[0_0_0_3px_rgba(0,123,199,0.15)] outline-none transition-all duration-300"
              />
              <AnimatePresence>
                {searchInput && (
                  <motion.button 
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    onClick={handleSearchClear}
                    className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-neutral-400 hover:text-neutral-700 bg-neutral-200/60 hover:bg-neutral-200 rounded-full cursor-pointer transition-colors"
                    title="清空搜索"
                  >
                    <X className="w-3.5 h-3.5" />
                  </motion.button>
                )}
              </AnimatePresence>
            </div>

            {/* Dynamic Result Counter */}
            <div className="flex items-center gap-2 text-xs md:text-sm text-neutral-600 font-medium">
              <span>为你找到</span>
              <AnimatePresence mode="wait">
                <motion.span
                  key={filteredCases.length}
                  initial={{ y: -8, opacity: 0, scale: 0.8 }}
                  animate={{ y: 0, opacity: 1, scale: 1 }}
                  exit={{ y: 8, opacity: 0, scale: 0.8 }}
                  transition={{ type: "spring", stiffness: 500, damping: 25 }}
                  className="inline-block font-bold text-[#007BC7] font-mono text-base md:text-lg bg-blue-50 px-2 py-0.5 rounded-lg border border-blue-100"
                >
                  {filteredCases.length}
                </motion.span>
              </AnimatePresence>
              <span>个案例</span>
            </div>
          </div>

          {/* Three Dimensional Pill Tab Groups */}
          <div className="space-y-3 pt-1 border-t border-neutral-100">
            
            {/* Industry Filter Group */}
            <div className="flex items-center gap-3">
              <span className="text-xs font-bold text-neutral-400 shrink-0 w-12">行业：</span>
              <div className="flex items-center gap-1.5 overflow-x-auto py-1 scrollbar-none no-scrollbar flex-1">
                {INDUSTRIES.map((ind) => {
                  const isActive = selectedIndustry === ind;
                  return (
                    <button
                      key={ind}
                      onClick={() => handleIndustryChange(ind)}
                      className={`relative px-4 py-1.5 text-xs font-medium rounded-full transition-colors duration-200 shrink-0 select-none cursor-pointer border-none bg-transparent ${
                        isActive ? 'text-white font-bold' : 'text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100/70'
                      }`}
                    >
                      {isActive && (
                        <motion.div
                          layoutId="industry-indicator"
                          className="absolute inset-0 bg-[#007BC7] rounded-full -z-0"
                          transition={{ type: "spring", stiffness: 400, damping: 30 }}
                        />
                      )}
                      <span className="relative z-10">{ind}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Service Filter Group */}
            <div className="flex items-center gap-3">
              <span className="text-xs font-bold text-neutral-400 shrink-0 w-12">服务：</span>
              <div className="flex items-center gap-1.5 overflow-x-auto py-1 scrollbar-none no-scrollbar flex-1">
                {SERVICES.map((srv) => {
                  const isActive = selectedService === srv;
                  return (
                    <button
                      key={srv}
                      onClick={() => handleServiceChange(srv)}
                      className={`relative px-4 py-1.5 text-xs font-medium rounded-full transition-colors duration-200 shrink-0 select-none cursor-pointer border-none bg-transparent ${
                        isActive ? 'text-white font-bold' : 'text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100/70'
                      }`}
                    >
                      {isActive && (
                        <motion.div
                          layoutId="service-indicator"
                          className="absolute inset-0 bg-[#007BC7] rounded-full -z-0"
                          transition={{ type: "spring", stiffness: 400, damping: 30 }}
                        />
                      )}
                      <span className="relative z-10">{srv}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Client Type Filter Group */}
            <div className="flex items-center gap-3">
              <span className="text-xs font-bold text-neutral-400 shrink-0 w-12">客户：</span>
              <div className="flex items-center gap-1.5 overflow-x-auto py-1 scrollbar-none no-scrollbar flex-1">
                {CLIENT_TYPES.map((clt) => {
                  const isActive = selectedClientType === clt;
                  return (
                    <button
                      key={clt}
                      onClick={() => handleClientTypeChange(clt)}
                      className={`relative px-4 py-1.5 text-xs font-medium rounded-full transition-colors duration-200 shrink-0 select-none cursor-pointer border-none bg-transparent ${
                        isActive ? 'text-white font-bold' : 'text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100/70'
                      }`}
                    >
                      {isActive && (
                        <motion.div
                          layoutId="client-indicator"
                          className="absolute inset-0 bg-[#007BC7] rounded-full -z-0"
                          transition={{ type: "spring", stiffness: 400, damping: 30 }}
                        />
                      )}
                      <span className="relative z-10">{clt}</span>
                    </button>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Active Filter Tags Row (Removable Tags) */}
          <AnimatePresence>
            {isFiltered && (
              <motion.div 
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="pt-2 border-t border-neutral-100 flex items-center gap-2 flex-wrap text-xs"
              >
                <span className="text-neutral-400 font-medium">已选：</span>
                
                {searchQuery && (
                  <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-blue-50 text-[#007BC7] border border-blue-100 font-medium">
                    关键词: {searchQuery}
                    <X className="w-3 h-3 cursor-pointer hover:opacity-70 transition-opacity ml-1" onClick={handleSearchClear} />
                  </span>
                )}

                {selectedIndustry !== '全部' && (
                  <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-blue-50 text-[#007BC7] border border-blue-100 font-medium">
                    行业: {selectedIndustry}
                    <X className="w-3 h-3 cursor-pointer hover:opacity-70 transition-opacity ml-1" onClick={() => handleIndustryChange('全部')} />
                  </span>
                )}

                {selectedService !== '全部' && (
                  <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-blue-50 text-[#007BC7] border border-blue-100 font-medium">
                    服务: {selectedService}
                    <X className="w-3 h-3 cursor-pointer hover:opacity-70 transition-opacity ml-1" onClick={() => handleServiceChange('全部')} />
                  </span>
                )}

                {selectedClientType !== '全部' && (
                  <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-blue-50 text-[#007BC7] border border-blue-100 font-medium">
                    客户: {selectedClientType}
                    <X className="w-3 h-3 cursor-pointer hover:opacity-70 transition-opacity ml-1" onClick={() => handleClientTypeChange('全部')} />
                  </span>
                )}

                <button
                  onClick={handleResetFilters}
                  className="inline-flex items-center gap-1 text-xs text-neutral-400 hover:text-[#007BC7] ml-2 transition-colors cursor-pointer bg-transparent border-none"
                >
                  <RotateCcw className="w-3 h-3" />
                  <span>重置所有筛选</span>
                </button>
              </motion.div>
            )}
          </AnimatePresence>

        </div>

        {/* Gradient Flow Loading Progress Bar — Click Feedback Indicator */}
        <AnimatePresence>
          {isFilterLoading && (
            <div className="absolute bottom-0 left-0 w-full h-[2.5px] overflow-hidden z-40 pointer-events-none">
              <motion.div
                key={loadingKey}
                initial={{ width: '0%', opacity: 1 }}
                animate={{ 
                  width: ['0%', '75%', '100%'],
                  opacity: [1, 1, 0]
                }}
                transition={{ 
                  width: { duration: 0.42, ease: [0.16, 1, 0.3, 1] },
                  opacity: { duration: 0.22, delay: 0.35 }
                }}
                onAnimationComplete={() => setIsFilterLoading(false)}
                className="h-full bg-gradient-to-r from-cyan-400 via-[#007BC7] via-sky-400 to-indigo-500 shadow-[0_0_12px_rgba(0,123,199,0.9)]"
              />
            </div>
          )}
        </AnimatePresence>
      </div>

      {/* 3. CASE GRID: DESKTOP 3 COLUMNS, TABLET 2 COLUMNS, MOBILE 1 COLUMN */}
      <div className="py-10 md:py-14">
        <div className="max-w-[95%] w-full mx-auto">
          
          {displayedCases.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
              {displayedCases.map((cs) => {
                const isActiveTouch = activeTouchCard === cs.id;
                return (
                  <a
                    key={cs.id}
                    href={`/cases/${cs.id}`}
                    onClick={(e) => {
                      const isTouch = window.matchMedia('(hover: none)').matches;
                      if (isTouch) {
                        const wasActive = activeTouchCard === cs.id;
                        if (!wasActive) {
                          e.preventDefault();
                          setActiveTouchCard(cs.id);
                          return;
                        }
                      }
                      e.preventDefault();
                      if (onNavigateDetail) {
                        onNavigateDetail(`/cases/${cs.id}`);
                      }
                    }}
                    className={`case-card-v2 ${isActiveTouch ? 'is-active' : ''} block relative text-left w-full outline-none select-none overflow-hidden text-decoration-none`}
                  >
                    <img 
                      src={cs.image} 
                      alt={cs.title} 
                      referrerPolicy="no-referrer"
                      loading="lazy"
                      className="w-full h-full object-cover"
                    />

                    <div className="case-summary-v2">
                      <div className="case-brand-label">{cs.brand}</div>
                      
                      {/* Top Right "案例简介 ↗" Button */}
                      <button 
                        type="button"
                        className="case-detail-arrow cursor-pointer border-none"
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          onSelectCase({
                            id: cs.id,
                            title: cs.title,
                            description: cs.description,
                            image: cs.image,
                            logoType: cs.logoType
                          });
                        }}
                        aria-label="查看案例简介"
                      >
                        <span>案例简介</span><span>↗</span>
                      </button>

                      {/* Bottom 3-Layer Text Block */}
                      <div className="case-bottom-block">
                        <div className="case-divider">-</div>
                        <div className="case-title">{cs.title}</div>
                        <div className="case-desc">{cs.description}</div>
                      </div>
                    </div>
                  </a>
                );
              })}
            </div>
          ) : (
            /* EMPTY STATE */
            <div className="py-20 text-center bg-neutral-50 border-2 border-dashed border-neutral-200 rounded-3xl p-8 max-w-lg mx-auto">
              <div className="w-16 h-16 bg-blue-50 text-[#007BC7] rounded-full flex items-center justify-center mx-auto mb-4">
                <Filter className="w-8 h-8 opacity-70" />
              </div>
              <h3 className="text-lg font-bold text-neutral-800 mb-2">暂无匹配案例</h3>
              <p className="text-xs text-neutral-500 mb-6">
                尝试调整您的筛选条件或检索其它关键词
              </p>
              <button
                onClick={handleResetFilters}
                className="bg-[#007BC7] hover:bg-[#005F96] text-white px-6 py-2.5 rounded-xl font-bold text-xs transition-all shadow-md cursor-pointer"
              >
                清空筛选条件
              </button>
            </div>
          )}

          {/* 4. PAGINATION / LOAD MORE */}
          {displayedCases.length > 0 && (
            <div className="mt-16 text-center flex flex-col items-center justify-center">
              
              {/* Progress Indicator */}
              <div className="text-xs font-mono text-neutral-400 mb-3">
                已加载 <span className="text-neutral-800 font-bold">{displayedCases.length}</span> / {filteredCases.length} 项案例
              </div>

              {/* Progress Bar Track */}
              <div className="w-48 h-1 bg-neutral-200 rounded-full overflow-hidden mb-6">
                <div 
                  className="h-full bg-[#007BC7] transition-all duration-300"
                  style={{ width: `${Math.min(100, (displayedCases.length / filteredCases.length) * 100)}%` }}
                />
              </div>

              {/* Load More Button */}
              {hasMore ? (
                <button
                  onClick={() => setDisplayCount((prev) => prev + pageSize)}
                  className="bg-white hover:bg-[#007BC7] text-[#007BC7] hover:text-white border-2 border-[#007BC7] px-8 py-3 rounded-full font-bold text-sm transition-all shadow-sm hover:shadow-md cursor-pointer flex items-center gap-2"
                >
                  <span>加载更多案例</span>
                  <ChevronDown className="w-4 h-4" />
                </button>
              ) : (
                <p className="text-xs text-neutral-400 font-medium">
                  已展示全部匹配案例 ({filteredCases.length})
                </p>
              )}

            </div>
          )}

        </div>
      </div>

    </div>
  );
};
