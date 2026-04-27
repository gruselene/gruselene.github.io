import React from 'react';
import { Calendar } from 'lucide-react';
import { getCategory } from '../../../data/get';
import { sortByDate, renderSingleColumn, components } from '../../../data/show.jsx';

const MySCP = () => {
  const category = getCategory('external', 'mySCP');
  const scpWorks = category ? sortByDate(category.works || []) : [];

  return (
    <div className="space-y-16">
      {/* Header */}
      <section className="text-center space-y-8">
        <h1 className="text-4xl font-serif font-bold tracking-[0.3em] uppercase bg-gradient-to-r from-gold-400 to-white bg-clip-text text-transparent">
          {category?.title || 'SCP原创和翻译'}
        </h1>
        <p className="text-mystic-300 font-serif italic opacity-70">
          {category?.description || 'AStarTwoEyes的SCP原创和翻译合集'}
        </p>
      </section>

      {/* SCP Works List */}
      <section className="space-y-8">
        {renderSingleColumn(scpWorks, (work) => (
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
                <a href={work.url} target="_blank" rel="noopener noreferrer">{work.title}</a>
              </h2>
            )}
            {work.excerpt && (
              <p className="card-excerpt">
                {work.excerpt}
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

export default MySCP;
