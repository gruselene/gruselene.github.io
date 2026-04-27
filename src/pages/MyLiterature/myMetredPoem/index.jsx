import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Calendar } from 'lucide-react';
import { getCategory } from '../../../data/get';
import { sortByDate, renderSingleColumn, components } from '../../../data/show.jsx';
import { autoRegisterCategory, autoRegisterWork } from '../../../utils/autoRegister';

const MyMetredPoem = () => {
  // 自动注册小类和作品
  useEffect(() => {
    // 注册小类
    autoRegisterCategory('literature', {
      id: 'myMetredPoem',
      title: 'My Metred Poem',
      description: 'A collection of my metred poems',
      url: '/my-literature/myMetredPoem'
    });
    
    // 注册作品
    autoRegisterWork('literature', 'myMetredPoem', {
      id: 'Poem1',
      title: 'Placeholder Metred Poem 1',
      excerpt: 'Your metred poem content goes here...',
      date: '2024-04-27',
      category: 'Poetry',
      url: '/my-literature/myMetredPoem/Poem1'
    });
    
    // 不需要在组件卸载时注销，因为initialize.js已经注册了所有的小类和作品
  }, []);
  
  const category = getCategory('literature', 'myMetredPoem');
  const poems = category ? sortByDate(category.works || []) : [];

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

      {/* Poems List */}
      <section className="space-y-8">
        {renderSingleColumn(poems, (poem) => (
          <article className="mystic-card group">
            {poem.category || poem.date ? (
              <div className="card-meta">
                {poem.category && (
                  <span className="card-category">
                    {poem.category}
                  </span>
                )}
                {poem.date && (
                  <div className="card-date">
                    <Calendar size={12} className="text-gold-500/50" /> {poem.date}
                  </div>
                )}
              </div>
            ) : null}
            {poem.title && (
              <h2 className="card-title">
                <Link to={`/my-literature/myMetredPoem/${poem.id}`}>{poem.title}</Link>
              </h2>
            )}
            {poem.excerpt && (
              <p className="card-excerpt">
                {poem.excerpt ? poem.excerpt.substring(0, 100) + '...' : 'No content available'}
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

export default MyMetredPoem;