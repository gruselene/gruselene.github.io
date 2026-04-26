import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ChevronRight, Search, Hash } from 'lucide-react';

const BlogList = () => {
  const [searchQuery, setSearchQuery] = React.useState('');
  
  const allPosts = [
    {
      id: 'scp-cn-1309',
      title: 'SCP-CN-1309：红色瓢虫拉杆箱',
      excerpt: '所有因为工作而劳累的人，都应该进SCP-CN-1309里面来坐坐！除了骗别人钱的坏人！',
      date: '2024.01.12',
      category: 'SCP中文原创',
      url: 'https://scp-wiki-cn.wikidot.com/scp-cn-1309'
    },
    {
      id: 'scp-cn-2137',
      title: 'SCP-CN-2137：臭屁的幻梦',
      excerpt: '或许他们终将变成臭屁的幻梦！',
      date: '2024.02.15',
      category: 'SCP中文原创',
      url: 'https://scp-wiki-cn.wikidot.com/scp-cn-2137'
    },
    {
      id: 'scp-4237',
      title: 'SCP-4237：何处冬眠',
      excerpt: '寒夜寒兮风萧萧，流水沉吟梦语长。',
      date: '2023.12.05',
      category: 'ENG-CHI translation',
      url: 'https://scp-wiki-cn.wikidot.com/scp-4237'
    },
    {
      id: 'scp-6319',
      title: 'SCP-6319：唱乎月光',
      excerpt: '唱乎皓芒，与君共；唱乎白璋，与君同。',
      date: '2023.11.20',
      category: 'ENG-CHI translation',
      url: 'https://scp-wiki-cn.wikidot.com/scp-6319'
    },
    {
      id: 'scp-7599',
      title: 'SCP-7599（旧）：巴达利斯克之诗',
      excerpt: '智者善销迹，行藏有是非。缄言易免谴，沉默明哲为。然亦请宽恕，难将忠信违。把君心意宣：“分裂者万岁。”',
      date: '2023.10.15',
      category: 'ENG-CHI translation',
      url: 'https://scp-wiki-cn.wikidot.com/old:scp-7599'
    },
    {
      id: 'ngfz-god',
      title: 'the Sculpture from Earth,the King from Faith',
      excerpt: 'Blind of god, scenes, far as a hundred meters come out of his sight; deaf of god, prayers, distant as ten feets can’t reach his ears.',
      date: '2023.09.10',
      category: 'CHI-ENG translation',
      url: 'https://wanderers-library.wikidot.com/ngfz-god'
    }
  ];

  return (
    <div className="space-y-24">
      <header className="space-y-6 max-w-2xl relative p-8">
        <h1 className="text-4xl font-serif font-bold tracking-widest uppercase bg-gradient-to-r from-gold-400 to-white bg-clip-text text-transparent w-fit">
          LIBRI
        </h1>
        <p className="text-mystic-300 font-serif italic leading-relaxed uppercase tracking-widest opacity-60">
          {allPosts.length} in tabulas referre
        </p>
        
        {/* Search Bar */}
        <div className="relative group max-w-md">
          <div className="absolute inset-0 bg-gold-500/10 blur-md opacity-0 group-focus-within:opacity-100 transition-opacity"></div>
          <div className="relative flex items-center border border-mystic-800 bg-mystic-900/50 focus-within:border-gold-600/50 transition-all duration-500">
            <Search className="ml-4 text-mystic-500" size={18} />
            <input
              type="text"
              placeholder="excutere..."
              className="w-full px-4 py-3 bg-transparent text-mystic-100 placeholder:text-mystic-700 focus:outline-none font-serif text-sm tracking-widest"
            />
          </div>
        </div>
      </header>

      <div className="space-y-8">
        {allPosts.map((post, index) => (
          <React.Fragment key={post.id}>
            {index > 0 && (
              <div className="ornate-divider !my-4 opacity-20">
                <div className="ornate-symbol scale-75"></div>
              </div>
            )}
            <article className="mystic-card group overflow-hidden">
            <a href={post.url} target="_blank" rel="noopener noreferrer" className="block p-8 relative z-10">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
                <div className="space-y-4 flex-grow">
                  <div className="flex items-center justify-between gap-4">
                    <span className="text-[10px] font-serif tracking-[0.2em] text-gold-500 uppercase border-b border-gold-500/30 pb-0.5">
                      {post.category}
                    </span>
                    <div className="text-[10px] text-mystic-500 uppercase tracking-widest flex items-center gap-1.5">
                      <Calendar size={12} /> {post.date}
                    </div>
                  </div>
                  <h2 className="text-2xl font-serif font-bold text-white group-hover:text-gold-400 transition-colors duration-500">
                    {post.title}
                  </h2>
                  <p className="text-mystic-300 text-sm leading-relaxed font-serif italic opacity-70 line-clamp-2">
                    {post.excerpt}
                  </p>
                </div>
              </div>
            </a>
          </article>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default BlogList;
