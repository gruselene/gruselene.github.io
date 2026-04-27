import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getCollection } from '../../data/get';
import { sortByName, renderExpandableList } from '../../data/show.jsx';
import { autoRegisterCollection } from '../../utils/autoRegister';

const MyExternalWorks = () => {
  // 自动注册大类
  useEffect(() => {
    autoRegisterCollection({
      id: 'external',
      title: 'External Works',
      description: 'A collection of my works published on external platforms',
      url: '/my-external-works'
    });
  }, []);
  
  const [externalWorks, setExternalWorks] = useState(getCollection('external'));
  const [categories, setCategories] = useState(externalWorks ? sortByName(externalWorks.categories || []) : []);
  
  // 定期检查小类数据是否可用
  useEffect(() => {
    const checkDataInterval = setInterval(() => {
      const updatedExternalWorks = getCollection('external');
      if (updatedExternalWorks && (updatedExternalWorks.categories && updatedExternalWorks.categories.length > 0)) {
        setExternalWorks(updatedExternalWorks);
        setCategories(sortByName(updatedExternalWorks.categories || []));
        clearInterval(checkDataInterval);
      }
    }, 500);
    
    return () => clearInterval(checkDataInterval);
  }, []);

  const renderHeader = (category) => (
    <Link to={category.url} className="flex-1">
      <h2 className="category-title">{category.title}</h2>
    </Link>
  );

  return (
    <div className="space-y-16">
      {/* Header */}
      <section className="text-center space-y-8">
        <h1 className="text-4xl font-serif font-bold tracking-[0.3em] uppercase bg-gradient-to-r from-gold-400 to-white bg-clip-text text-transparent">
          EXTERNAL WORKS
        </h1>
        <p className="text-mystic-300 font-serif italic opacity-70">
          A collection of my works published on external platforms
        </p>
      </section>

      {/* External Works Categories */}
      <section>
        {renderExpandableList(categories, renderHeader)}
      </section>
    </div>
  );
};

export default MyExternalWorks;
