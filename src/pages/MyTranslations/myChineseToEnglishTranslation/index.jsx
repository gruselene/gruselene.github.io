import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Calendar } from 'lucide-react';
import { getCategory } from '../../../data/get';
import { sortByDate, renderSingleColumn, components } from '../../../data/show.jsx';
import { autoRegisterCategory, autoRegisterWork } from '../../../utils/autoRegister';

const MyChineseToEnglishTranslation = () => {
  // 自动注册小类和作品
  useEffect(() => {
    // 注册小类
    autoRegisterCategory('translations', {
      id: 'myChineseToEnglishTranslation',
      title: 'My Chinese to English',
      description: 'A collection of my Chinese to English translations',
      url: '/my-translations/myChineseToEnglishTranslation'
    });
    
    // 注册作品
    autoRegisterWork('translations', 'myChineseToEnglishTranslation', {
      id: 'Work1',
      title: 'Placeholder Chinese to English Translation 1',
      excerpt: 'Original Chinese text goes here...',
      date: '2024-04-27',
      category: 'Translation',
      url: '/my-translations/myChineseToEnglishTranslation/Work1'
    });
    
    // 不需要在组件卸载时注销，因为initialize.js已经注册了所有的小类和作品
  }, []);
  
  // Find the myChineseToEnglishTranslation category
  const category = getCategory('translations', 'myChineseToEnglishTranslation');
  const translationWorks = category ? sortByDate(category.works || []) : [];

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

      {/* Works List */}
      <section className="space-y-8">
        {renderSingleColumn(translationWorks, (work) => (
          <article className="mystic-card group">
            {work.category || work.date ? (
              <div className="card-meta">
                {work.category && (
                  <span className="card-category">
                    {work.category}
                  </span>
                )}
                {work.date && (
                  <div className="card-date">
                    <Calendar size={12} className="text-gold-500/50" /> {work.date}
                  </div>
                )}
              </div>
            ) : null}
            {work.title && (
              <h2 className="card-title">
                <Link to={`/my-translations/myChineseToEnglishTranslation/${work.id}`}>{work.title}</Link>
              </h2>
            )}
            {work.excerpt && (
              <p className="card-excerpt">
                {work.excerpt ? work.excerpt.substring(0, 100) + '...' : 'No content available'}
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

export default MyChineseToEnglishTranslation;