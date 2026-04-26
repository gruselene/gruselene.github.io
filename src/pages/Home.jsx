import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, Clock, Calendar, Sparkles, User } from 'lucide-react';

const HomePage = () => {
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

  // Randomly select 2 posts
  const [featuredPosts, setFeaturedPosts] = React.useState([]);

  React.useEffect(() => {
    const shuffled = [...allPosts].sort(() => 0.5 - Math.random());
    setFeaturedPosts(shuffled.slice(0, 2));
  }, []);

  return (
    <div className="space-y-24">
      {/* Hero Section */}
      <section className="text-center py-24 relative overflow-hidden">
        {/* Background Decorative Element */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gold-500/5 rounded-full blur-[100px] pointer-events-none"></div>
        
        <div className="relative space-y-8">
          <div className="flex justify-center mb-4">
            <Sparkles className="text-gold-500/50 animate-pulse" size={32} />
          </div>
          <h1 className="flex flex-col items-center font-serif font-black text-white tracking-tighter leading-tight">
            <span className="glimmer-text text-5xl md:text-7xl mb-2">VERUM</span>
            <span className="text-base md:text-xl lg:text-2xl tracking-[0.3em] uppercase opacity-70 whitespace-nowrap">
              sine mendacio, certum et verissimum
            </span>
          </h1>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="space-y-12">
        <div className="ornate-divider">
          <div className="ornate-symbol"></div>
        </div>
        
        <div className="flex flex-col items-center space-y-4">
          <h2 className="text-3xl font-serif font-bold flex items-center gap-4">
            <span className="h-px w-8 bg-gold-500/30"></span>
            <span className="bg-gradient-to-r from-gold-400 to-white bg-clip-text text-transparent">LIBRI</span>
            <span className="h-px w-8 bg-gold-500/30"></span>
          </h2>
          <p className="text-sm text-mystic-300 font-serif italic opacity-60 uppercase tracking-widest">adaptationes mirabiles</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {featuredPosts.map((post) => (
            <article key={post.id} className="mystic-card group p-8">
              <div className="space-y-6 relative z-10">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-serif tracking-[0.3em] text-gold-500 uppercase">
                    {post.category}
                  </span>
                  <div className="text-[10px] text-mystic-300 uppercase tracking-widest flex items-center gap-1.5">
                    <Calendar size={12} className="text-gold-500/50" /> {post.date}
                  </div>
                </div>
                <h3 className="text-2xl font-serif font-bold text-white group-hover:text-gold-400 transition-colors duration-500">
                  <a href={post.url} target="_blank" rel="noopener noreferrer">{post.title}</a>
                </h3>
                <p className="text-mystic-300 text-sm leading-relaxed font-serif italic opacity-80 line-clamp-3">
                  {post.excerpt}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Ritual / Newsletter */}
    </div>
  );
};

export default HomePage;
