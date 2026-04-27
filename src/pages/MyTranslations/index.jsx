import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getCollection } from '../../data/get';
import { sortByName, renderExpandableList } from '../../data/show.jsx';
import { autoRegisterCollection } from '../../utils/autoRegister';

const MyTranslations = () => {
  // 自动注册大类
  useEffect(() => {
    autoRegisterCollection({
      id: 'translations',
      title: 'Translations',
      description: 'A collection of my translation works',
      url: '/my-translations'
    });
  }, []);
  
  const [myTranslations, setMyTranslations] = useState(getCollection('translations'));
  const [categories, setCategories] = useState(myTranslations ? sortByName(myTranslations.categories || []) : []);
  
  // 定期检查小类数据是否可用
  useEffect(() => {
    const checkDataInterval = setInterval(() => {
      const updatedMyTranslations = getCollection('translations');
      if (updatedMyTranslations && (updatedMyTranslations.categories && updatedMyTranslations.categories.length > 0)) {
        setMyTranslations(updatedMyTranslations);
        setCategories(sortByName(updatedMyTranslations.categories || []));
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
          TRANSLATION
        </h1>
        <p className="text-mystic-300 font-serif italic opacity-70">
          {myTranslations.description}
        </p>
      </section>

      {/* Translation Categories */}
      <section>
        {renderExpandableList(categories, renderHeader)}
      </section>
    </div>
  );
};

export default MyTranslations;
