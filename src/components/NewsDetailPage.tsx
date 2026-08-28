import React, { useState } from 'react';
import { 
  ArrowRight, 
  ArrowLeft,
  Calendar, 
  Clock, 
  Eye, 
  Share2, 
  Sparkles, 
  ChevronRight,
  BookOpen
} from 'lucide-react';
import { motion } from 'motion/react';

export interface ContentBlock {
  type: 'paragraph' | 'subtitle' | 'image';
  text?: string;
  src?: string;
  caption?: string;
}

export interface NewsArticleDetail {
  id: string;
  title: string;
  date: string;
  category: string;
  description: string; // 摘要/导语 (miaoshu)
  image: string;
  imageCaption?: string;
  author?: string;
  readTime?: string;
  views?: number;
  contentBlocks: ContentBlock[];
}

export const DETAILED_NEWS_DATABASE: Record<string, NewsArticleDetail> = {
  'news-1': {
    id: 'news-1',
    title: '风起势至，共赢未来 | 品类突围·AI助手重磅发布',
    date: '2023年5月30日',
    category: '公司动态',
    description: '洛可可创新设计集团在20周年盛典上正式发布新一代品类战略与AI设计智能助手，深度探讨数字化时代的品牌价值重塑与智能制造赋能。',
    image: '/src/assets/images/news_1.jpg',
    imageCaption: '洛可可20周年创新峰会现场：贾伟发表“AI品类突围”主题演讲',
    author: '洛可可品牌中心',
    readTime: '4 分钟',
    views: 3420,
    contentBlocks: [
      {
        type: 'paragraph',
        text: '在洛可可创新设计集团成立20周年之际，主题为“风起势至·品类突围”的年度创新峰会在上海成功举行。创始人贾伟发表主旨演讲，全面重磅推出基于大模型的“AI品类创新助手”以及“三品合一”爆品全案服务范式。'
      },
      {
        type: 'subtitle',
        text: '《三浪叠加，元生宇宙》'
      },
      {
        type: 'paragraph',
        text: '贾伟指出，在消费分级与数字化浪潮叠加的今天，传统产品创新正面临流量红利见顶与同质化竞争加剧的双重瓶颈。洛可通过20年近万个成功案例的沉淀，将算法与设计经验深度结合，帮助客户精准识别高潜赛道。'
      },
      {
        type: 'image',
        src: '/src/assets/images/news_2.jpg',
        caption: '洛可可AI设计智能助手人机协同交互界面演示'
      },
      {
        type: 'subtitle',
        text: '《人机共创，开启设计新纪元》'
      },
      {
        type: 'paragraph',
        text: '未来，洛可可将继续立足“咨询+设计”一体化矩阵，全面助力企业实现从单品爆款到品类常青的战略跨越。通过算法赋能与人性化设计的深度融合，打破传统研发周期，为实体制造企业提供确定性的商业增量。'
      },
      {
        type: 'paragraph',
        text: '大会现场还展示了多个由AI辅助完成的机器人与智能家电设计案例，展现了极高的研发效率与美学质感，受到与会数百位知名企业家与首席产品官的高度关注。'
      }
    ]
  },
  'news-2': {
    id: 'news-2',
    title: '设计国补 | 北京企业最高获20W！洛可可全流程协助申报',
    date: '2023年6月11日',
    category: '行业资讯',
    description: '北京市经信局重磅福利来袭——工业设计服务券申领全面开启！最高可享20万元国家补贴。洛可可作为国家级工业设计中心，全流程协助申报。',
    image: '/src/assets/images/news_2.jpg',
    imageCaption: '北京市工业设计服务券专项申报支持政策说明会',
    author: '产业政策研究部',
    readTime: '3 分钟',
    views: 2890,
    contentBlocks: [
      {
        type: 'paragraph',
        text: '为加快推动北京市制造业高质量发展，深化工业设计与实体经济融合，北京市经济和信息化局正式启动工业设计服务券专项支持工作。'
      },
      {
        type: 'subtitle',
        text: '《政策红利直达，精准赋能专精特新》'
      },
      {
        type: 'paragraph',
        text: '符合条件的高新技术企业、专精特新“小巨人”企业在采购工业设计服务时，可享受最高20万元资金补贴。作为国家级工业设计中心，洛可可将设立专项服务通道，为申报企业提供合同梳理、申报材料准备及全流程专家辅导。'
      },
      {
        type: 'image',
        src: '/src/assets/images/news_3.jpg',
        caption: '洛可可国家级工业设计中心研发与样品测试车间'
      },
      {
        type: 'subtitle',
        text: '《一对一绿色通道，无忧合规申报》'
      },
      {
        type: 'paragraph',
        text: '欢迎有产品升级与外观结构设计需求的北京企事业单位及时联系洛可可顾问团队，共享政策红利，共同打造具有市场爆发力的标志性工业产品。'
      }
    ]
  },
  'news-3': {
    id: 'news-3',
    title: '洛可可20周年，贾伟：创造不可能，展望AI新纪元',
    date: '2023年4月18日',
    category: '公司动态',
    description: '在20周年的分享会上，贾伟先生动情回顾了洛可可从一间小办公室成长为全球化咨询设计集团的历程，并展望洛可可的AI新纪元。',
    image: '/src/assets/images/news_3.jpg',
    imageCaption: '贾伟于西岸艺术中心回顾洛可可20年创业峥嵘岁月',
    author: '贾伟演讲录',
    readTime: '6 分钟',
    views: 4510,
    contentBlocks: [
      {
        type: 'paragraph',
        text: '20年前，洛可可诞生于北京的一间地下室；20年后的今天，洛可可已经成长为拥有数千名设计师、服务超一万家全球客户的创新设计服务平台。'
      },
      {
        type: 'subtitle',
        text: '《用设计让世界更美好》'
      },
      {
        type: 'paragraph',
        text: '“我们一直在做一件事情：用设计让世界变得更美好。”贾伟在演讲中提到，“AI时代的到来不是对设计师的替代，而是对人类创造力的极大放飞。洛可可将率先开启‘人机共创’新纪元。”'
      },
      {
        type: 'image',
        src: '/src/assets/images/news_1.jpg',
        caption: '洛可可历年获奖设计作品展现场'
      },
      {
        type: 'subtitle',
        text: '《从单点设计到三品合一爆品全案》'
      },
      {
        type: 'paragraph',
        text: '大会现场展示了多个由AI辅助完成的机器人与智能家电设计案例，展现了极高的研发效率与美学质感。未来洛可可将继续以品类创新为引擎，助力中国品牌登顶世界舞台。'
      }
    ]
  },
  'news-4': {
    id: 'news-4',
    title: '喜讯！洛可可荣膺2023德国红点奖最高荣誉 (Best of the Best)',
    date: '2023年7月22日',
    category: '获奖喜讯',
    description: '全球工业设计顶级盛事德国红点奖揭晓，洛可可设计团队选送的医疗智能机器人凭卓越的人机工程与视觉设计，一举夺得Supreme视觉荣誉。',
    image: '/src/assets/images/news_1.jpg',
    imageCaption: '2023德国红点奖颁奖盛典红毯现场',
    author: '国际奖项工作组',
    readTime: '3 分钟',
    views: 1980,
    contentBlocks: [
      {
        type: 'paragraph',
        text: '2023年德国红点设计大奖（Red Dot Award）评审结果揭晓，洛可可为合作伙伴研发的手术辅助机器人产品从全球数万件参赛作品中脱颖而出，荣获“Best of the Best”最高奖项。'
      },
      {
        type: 'subtitle',
        text: '《人机工程与临床安全学的完美碰撞》'
      },
      {
        type: 'paragraph',
        text: '红点奖评审团指出：“该产品将高精度的临床医疗功能与极具亲和力的人机交互语言巧妙结合，打破了以往医疗设备冰冷沉重的刻板印象，是工业设计赋能医疗科技的杰出示范。”'
      },
      {
        type: 'image',
        src: '/src/assets/images/news_2.jpg',
        caption: '荣获红点 Supreme 奖的手术辅助机器人细节展项'
      },
      {
        type: 'paragraph',
        text: '截至目前，洛可可累计斩获红点、iF、IDEA、红星奖等国际国内顶级设计大奖已突破500项，持续夯实创意设计领跑者实力。'
      }
    ]
  },
  'news-5': {
    id: 'news-5',
    title: '央视专题报道：洛可可工业设计赋能实体经济高质量发展',
    date: '2023年8月15日',
    category: '媒体报道',
    description: '央视财经频道深度聚焦中国制造转型升级，走访洛可可北京创新设计中心，解读“设计+供应链”如何助力传统制造业焕发新生。',
    image: '/src/assets/images/news_2.jpg',
    imageCaption: '央视财经《设计驱动新制造》摄制组深入洛可可研发中心',
    author: '央视财经报道组',
    readTime: '5 分钟',
    views: 6120,
    contentBlocks: [
      {
        type: 'paragraph',
        text: '中央电视台财经频道推出专栏报道《设计驱动新制造》。记者实地探访了洛可可创新中心，近距离感受工业设计如何将一项前沿科研成果转化为市场热销产品。'
      },
      {
        type: 'subtitle',
        text: '《从代工工厂到品类爆款的华丽蜕变》'
      },
      {
        type: 'paragraph',
        text: '报道重点展示了洛可可帮助某传统家用电器品牌重新定位爆款电饭煲的全过程。通过精准用户体验研究与流线型外观重塑，该产品上市仅3个月销量即突破30万台。'
      },
      {
        type: 'image',
        src: '/src/assets/images/news_3.jpg',
        caption: '洛可可高级产品总监受访讲解柔性供应链整合方案'
      },
      {
        type: 'subtitle',
        text: '《供应链整合与商业模式创新》'
      },
      {
        type: 'paragraph',
        text: '洛可可总裁在接受采访时表示：“工业设计不仅是看得到的包装与外壳，更是看不见的供应链整合与商业模式创新。”'
      }
    ]
  },
  'news-6': {
    id: 'news-6',
    title: '品类创新 | 悦鲜活年轻化牛奶包装荣获iF设计大奖',
    date: '2023年9月08日',
    category: '品牌事件',
    description: '洛可可打造的悦鲜活高端鲜乳系列，通过差异化瓶型结构与0.09s黄金保鲜视觉叙事，一举夺得2023德国iF设计奖。',
    image: '/src/assets/images/news_3.jpg',
    imageCaption: '悦鲜活年轻化高端鲜乳系列瓶型与品牌视觉系统',
    author: '快消品事业部',
    readTime: '4 分钟',
    views: 2310,
    contentBlocks: [
      {
        type: 'paragraph',
        text: '在快消乳品同质化严重的市场竞争中，洛可可受邀为君乐宝旗下“悦鲜活”品牌提供全新的年轻化包装与品牌视觉升级方案。'
      },
      {
        type: 'subtitle',
        text: '《人体工学与0.09s黄金杀菌视觉叙事》'
      },
      {
        type: 'paragraph',
        text: '设计团队打破传统牛奶盒外观，采用人体工学微弧瓶身与高透明度材质，凸显鲜奶晶莹质感；同时将杀菌时间参数进行艺术化印制，建立了强有力的品质信任状。'
      },
      {
        type: 'image',
        src: '/src/assets/images/news_1.jpg',
        caption: '悦鲜活冷链展柜高辨识度陈列视觉呈现'
      },
      {
        type: 'paragraph',
        text: '该设计帮助悦鲜活迅速打入年轻一代白领圈层，实现了销量与品牌的双重突破，奠定了其在高端鲜乳品类的领跑地位。'
      }
    ]
  }
};

const NEWS_CATEGORIES = ['全部', '公司动态', '媒体报道', '行业资讯', '品牌事件', '获奖喜讯'];

interface NewsDetailPageProps {
  articleId?: string;
  onOpenContactModal?: () => void;
  onNavigate?: (url: string) => void;
}

export const NewsDetailPage: React.FC<NewsDetailPageProps> = ({
  articleId = 'news-1',
  onOpenContactModal,
  onNavigate
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('全部');

  // Fetch article or fallback to default news-1
  const article: NewsArticleDetail = DETAILED_NEWS_DATABASE[articleId] || DETAILED_NEWS_DATABASE['news-1'];

  const handleCategoryClick = (cat: string) => {
    setActiveCategory(cat);
    if (onNavigate) {
      onNavigate('/news');
    }
  };

  const handleBackToList = () => {
    if (onNavigate) {
      onNavigate('/news');
    }
  };

  return (
    <div className="w-full bg-white text-neutral-900 min-h-screen">
      
      {/* 页首板块——完全照搬"案例详情页"页首排版布局 */}
      <div className="bg-neutral-50/70 border-b border-neutral-100 py-8 md:py-12">
        <div className="max-w-[95%] w-full mx-auto">
          {/* 面包屑导航 */}
          <div className="flex items-center gap-2 text-xs text-neutral-500 mb-4 font-mono">
            <button 
              onClick={() => onNavigate && onNavigate('/home')} 
              className="hover:text-[#007BC7] transition-colors bg-transparent border-none p-0 cursor-pointer"
            >
              首页
            </button>
            <span>/</span>
            <button 
              onClick={handleBackToList} 
              className="hover:text-[#007BC7] transition-colors bg-transparent border-none p-0 cursor-pointer"
            >
              新闻中心
            </button>
            <span>/</span>
            <span className="text-neutral-900 font-semibold">新闻详情</span>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <span className="h-[1.5px] w-6 bg-[#007BC7]"></span>
                <span className="text-xs font-bold text-[#007BC7] uppercase tracking-widest font-mono">
                  NEWS CENTER · 新闻详情
                </span>
              </div>
              <h1 className="hero-title text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight text-[#1A1A1A] leading-[1.05] font-display">
                {article.title}
              </h1>
              {/* 文章元数据信息 */}
              <div className="flex flex-wrap items-center gap-2.5 md:gap-3 text-xs md:text-sm font-semibold tracking-wider text-[#007BC7] uppercase mt-3 font-mono">
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5" />
                  {article.date}
                </span>
                <span>·</span>
                <span>{article.category}</span>
                <span>·</span>
                <span>作者：{article.author || '洛可可品牌中心'}</span>
                <span>·</span>
                <span className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5" />
                  {article.readTime || '4 分钟'}
                </span>
                <span>·</span>
                <span className="flex items-center gap-1.5">
                  <Eye className="w-3.5 h-3.5" />
                  {article.views || 3420} 次阅读
                </span>
              </div>
            </div>

            {article.description && (
              <p className="text-sm text-neutral-500 max-w-xl leading-relaxed">
                {article.description}
              </p>
            )}
          </div>
        </div>
      </div>

      {/* 四、新闻详情内容 */}
      <main className="py-12 md:py-20 bg-white">
        <div className="max-w-[760px] w-full mx-auto px-4 md:px-0">
          
          {/* 主图展示 (8px圆角，宽度撑满，说明文字13px #8C8C8C) */}
          {article.image && (
            <div className="my-8">
              <img 
                src={article.image} 
                alt={article.title} 
                referrerPolicy="no-referrer"
                className="w-full rounded-[8px] object-cover shadow-sm border border-neutral-100 max-h-[460px]"
              />
              {article.imageCaption && (
                <p className="text-[#8C8C8C] text-[13px] text-center mt-[8px]">
                  {article.imageCaption}
                </p>
              )}
            </div>
          )}

          {/* 正文富文本内容：段落16px, #333333或#4D4D4D, 行高1.9, 段落间距24px */}
          <div className="mt-8 space-y-6">
            {article.contentBlocks.map((block, index) => {
              if (block.type === 'subtitle') {
                return (
                  <h3 key={index} className="text-lg md:text-xl font-bold text-[#007BC7] mt-10 mb-4 flex items-center gap-2">
                    <span className="w-1.5 h-4 bg-[#007BC7] rounded-full inline-block"></span>
                    {block.text}
                  </h3>
                );
              }
              if (block.type === 'image') {
                return (
                  <div key={index} className="my-8">
                    <img 
                      src={block.src} 
                      alt={block.caption || '新闻正文配图'} 
                      referrerPolicy="no-referrer"
                      className="w-full rounded-[8px] object-cover shadow-sm border border-neutral-100"
                    />
                    {block.caption && (
                      <p className="text-[#8C8C8C] text-[13px] text-center mt-[8px]">
                        {block.caption}
                      </p>
                    )}
                  </div>
                );
              }
              return (
                <p key={index} className="text-[16px] text-[#333333] leading-[1.9] mb-6 font-normal">
                  {block.text}
                </p>
              );
            })}
          </div>

          {/* Share & Bottom Action */}
          <div className="mt-12 pt-8 border-t border-neutral-100 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-xs text-neutral-400">
              <Share2 className="w-4 h-4 text-[#007BC7]" />
              <span>分享该资讯至社交媒体</span>
            </div>

            <button 
              onClick={handleBackToList}
              className="bg-neutral-100 hover:bg-[#007BC7] hover:text-white text-neutral-700 font-bold px-6 py-2.5 rounded-full text-xs transition-all cursor-pointer flex items-center gap-2"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              返回新闻中心
            </button>
          </div>

        </div>
      </main>

    </div>
  );
};

export default NewsDetailPage;
