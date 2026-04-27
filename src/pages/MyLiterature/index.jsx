import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getCollection } from '../../data/get';
import { sortByName, renderExpandableList } from '../../data/show.jsx';
import { autoRegisterCollection } from '../../utils/autoRegister';

const MyLiterature = () => {
  // 自动注册大类
  useEffect(() => {
    autoRegisterCollection({
      id: 'literature',
      title: 'Literature',
      description: 'A collection of my literary works',
      url: '/my-literature'
    });
  }, []);
  
  const [myLiterature, setMyLiterature] = useState(getCollection('literature'));
  const [categories, setCategories] = useState(myLiterature ? sortByName(myLiterature.categories || []) : []);
  
  // 定期检查小类数据是否可用
  useEffect(() => {
    const checkDataInterval = setInterval(() => {
      const updatedMyLiterature = getCollection('literature');
      if (updatedMyLiterature && (updatedMyLiterature.categories && updatedMyLiterature.categories.length > 0)) {
        setMyLiterature(updatedMyLiterature);
        setCategories(sortByName(updatedMyLiterature.categories || []));
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
          LITERATURE
        </h1>
        <p className="text-mystic-300 font-serif italic opacity-70">
          {myLiterature.description}
        </p>
      </section>

      {/* Literature Categories */}
      <section>
        {renderExpandableList(categories, renderHeader)}
      </section>
    </div>
  );
};

export default MyLiterature;
