import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Calendar } from 'lucide-react';
import { getCategory } from '../../../data/get';
import { sortByDate, renderSingleColumn, components } from '../../../data/show.jsx';
import { autoRegisterCategory, autoRegisterWork } from '../../../utils/autoRegister';

const MyNovel = () => {
  // 自动注册小类和作品
  useEffect(() => {
    // 注册小类
    autoRegisterCategory('literature', {
      id: 'myNovel',
      title: 'My Novel',
      description: 'A collection of my novels',
      url: '/my-literature/myNovel'
    });
    
    // 注册作品
    autoRegisterWork('literature', 'myNovel', {
      id: 'Novel1',
      title: 'Placeholder Novel 1',
      excerpt: 'Your novel content goes here...',
      date: '2024-04-27',
      category: 'Fiction',
      url: '/my-literature/myNovel/Novel1'
    });
    
    // 不需要在组件卸载时注销，因为initialize.js已经注册了所有的小类和作品
  }, []);
  
  const category = getCategory('literature', 'myNovel');
  const novels = category ? sortByDate(category.works || []) : [];

  return (
    <div className="space-y-16">
      {/* Header */}
      <section className="text-center space-y-8">
        <h1 className="text-4xl font-serif font-bold tracking-[0.3em] uppercase bg-gradient-to-r from-gold-400 to-white bg-clip-text text-transparent">
          {category?.title.toUpperCase()}
        </h1>
        <p className="text-mystic-300 font-serif italic opacity-70">
          {category?.description}
        </p>
      </section>

      {/* Novels List */}
      <section className="space-y-8">
        {renderSingleColumn(novels, (novel) => (
          <article className="mystic-card group">
            {novel.category || novel.date ? (
              <div className="card-meta">
                {novel.category && (
                  <span className="card-category">
                    {novel.category}
                  </span>
                )}
                {novel.date && (
                  <div className="card-date">
                    <Calendar size={12} className="text-gold-500/50" /> {novel.date}
                  </div>
                )}
              </div>
            ) : null}
            {novel.title && (
              <h2 className="card-title">
                <Link to={`/my-literature/myNovel/${novel.id}`}>{novel.title}</Link>
              </h2>
            )}
            {novel.excerpt && (
              <p className="card-excerpt">
                {novel.excerpt ? novel.excerpt.substring(0, 100) + '...' : 'No content available'}
              </p>
            )}
          </article>
        ), {
          divide: components.alienisComponent
        })}
      </section>
    </div>
  );
};

export default MyNovel;