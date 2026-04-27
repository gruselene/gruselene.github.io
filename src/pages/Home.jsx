import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, Clock, Calendar, Sparkles, User } from 'lucide-react';
import { getCollection } from '../data/get';
import { getRandomItems, renderTwoColumns, frames, components } from '../data/show.jsx';

const HomePage = () => {
  // Randomly select 2 posts
  const [featuredPosts, setFeaturedPosts] = React.useState([]);

  React.useEffect(() => {
    // 定期检查数据是否可用，直到获取到作品数据为止
    const checkDataInterval = setInterval(() => {
      // Combine all works from different collections with unique IDs
      const externalCollection = getCollection('external');
      const literatureCollection = getCollection('literature');
      const translationCollection = getCollection('translations');
      
      const externalWorksList = externalCollection?.categories?.flatMap(category => 
        (category.works || []).map(work => ({ ...work, uniqueId: `${category.id}-${work.id}` }))
      ) || [];
      const literatureWorks = literatureCollection?.categories?.flatMap(category => 
        (category.works || []).map(work => ({ ...work, uniqueId: `${category.id}-${work.id}` }))
      ) || [];
      const translationWorks = translationCollection?.categories?.flatMap(category => 
        (category.works || []).map(work => ({ ...work, uniqueId: `${category.id}-${work.id}` }))
      ) || [];
      
      const allWorksCombined = [
        ...externalWorksList,
        ...literatureWorks,
        ...translationWorks
      ];
      
      // 如果有作品，随机选择 2 个并停止检查
      if (allWorksCombined.length > 0) {
        const randomWorks = getRandomItems(allWorksCombined, 2);
        setFeaturedPosts(randomWorks);
        clearInterval(checkDataInterval);
      }
    }, 500); // 每 500 毫秒检查一次
    
    return () => clearInterval(checkDataInterval);
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
        {components.alienisComponent.children}
        
        <div className="flex flex-col items-center space-y-4 mt-24">
          <h2 className="text-4xl font-serif font-bold">
            <span className="bg-gradient-to-r from-gold-400 to-white bg-clip-text text-transparent">LIBRI</span>
          </h2>
          <p className="text-sm text-mystic-300 font-serif italic opacity-60 uppercase tracking-widest">adaptationes mirabiles</p>
        </div>

        {renderTwoColumns(featuredPosts, (post) => (
            <article key={post.uniqueId} className="mystic-card">
            {post.category || post.date ? (
              <div className="card-meta">
                {post.category && (
                  <span className="card-category">
                    {post.category}
                  </span>
                )}
                {post.date && (
                  <div className="card-date">
                    <Calendar size={12} className="text-gold-500/50" /> {post.date}
                  </div>
                )}
              </div>
            ) : null}
            {post.title && (
              <h3 className="card-title">
                {post.url ? (
                  post.url.startsWith('/') ? (
                    <Link to={post.url}>{post.title}</Link>
                  ) : (
                    <a href={post.url} target="_blank" rel="noopener noreferrer">{post.title}</a>
                  )
                ) : (
                  <span>{post.title}</span>
                )}
              </h3>
            )}
            {post.excerpt && (
              <p className="card-excerpt">
                {post.excerpt}
              </p>
            )}
          </article>
        ))}
      </section>

      {/* Ritual / Newsletter */}
    </div>
  );
};

export default HomePage;
