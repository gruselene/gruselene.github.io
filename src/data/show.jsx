// 展示方法和处理方法
import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import * as frames from './asset/frame.jsx';
import * as components from './asset/component.jsx';

// 处理方法

// 根据日期排序（仅文章）
export const sortByDate = (works, descending = true) => {
  return [...works].sort((a, b) => {
    if (a.date && b.date) {
      const dateComparison = new Date(b.date) - new Date(a.date);
      if (dateComparison !== 0) {
        return descending ? dateComparison : -dateComparison;
      }
    }
    // 如果日期相同或没有日期，根据名称排序
    return a.title.localeCompare(b.title);
  });
};

// 根据类别排序（仅文章）
export const sortByCategory = (works, ascending = true) => {
  return [...works].sort((a, b) => {
    if (a.category && b.category) {
      const categoryComparison = a.category.localeCompare(b.category);
      if (categoryComparison !== 0) {
        return ascending ? categoryComparison : -categoryComparison;
      }
    }
    // 如果类别相同或没有类别，根据名称排序
    return a.title.localeCompare(b.title);
  });
};

// 根据名称排序（所有类型）
export const sortByName = (items, ascending = true) => {
  return [...items].sort((a, b) => {
    const nameComparison = a.title.localeCompare(b.title);
    return ascending ? nameComparison : -nameComparison;
  });
};

// 随机选取 n 个（仅文章）
export const getRandomItems = (works, n) => {
  const shuffled = [...works].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, n);
};

// 展示方法

// 单列展示
export const renderSingleColumn = (items, renderItem, options = {}) => {
  const { frame = frames.noFrame, divide = components.noComponent } = options;
  
  return (
    <div {...frame}>
      {items.map((item, index) => (
        <React.Fragment key={item.uniqueId || item.id || index}>
          <div className="mb-0">
            {renderItem(item, index)}
          </div>
          {index < items.length - 1 && (
            <div {...divide} />
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

// 双列展示
export const renderTwoColumns = (items, renderItem, options = {}) => {
  const { frame = frames.noFrame, divide = components.noComponent } = options;
  const frameClassName = frame.className || '';
  const { className: _, ...frameProps } = frame;
  
  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 ${frameClassName}`} style={{ gridAutoRows: '1fr' }} {...frameProps}>
      {items.map((item, index) => (
        <div key={item.id} className="flex flex-col">
          <div className="flex flex-col h-full">
            {renderItem(item, index)}
          </div>
        </div>
      ))}
    </div>
  );
};

// 目录展示
export const renderDirectory = (items, renderItem, options = {}) => {
  const { frame = frames.noFrame, divide = components.noComponent } = options;
  
  return (
    <div {...frame}>
      <ul className="space-y-4">
        {items.map((item, index) => (
          <li key={item.id}>
            {renderItem(item, index)}
            {index < items.length - 1 && (
              <div {...divide} />
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

// 可展开列表展示（适用于大类页面展示小类）
export const renderExpandableList = (items, renderHeader, renderContent, options = {}) => {
  const { frame = frames.noFrame } = options;
  const [expandedId, setExpandedId] = useState(null);
  
  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };
  
  // 渲染作品项
  const renderWorkItem = (work, category) => (
    <div key={work.id} className="work-item">
      <a 
        href={work.url} 
        target={work.url && !work.url.startsWith('/') ? '_blank' : undefined}
        rel={work.url && !work.url.startsWith('/') ? 'noopener noreferrer' : undefined}
        className="block"
      >
        {work.title && <h3 className="work-title">{work.title}</h3>}
        {work.excerpt && <p className="work-excerpt">{work.excerpt.substring(0, 100)}...</p>}
        {(work.date || work.category) && (
          <p className="work-meta">
            {work.date && `${work.date}`}
            {work.date && work.category && ' • '}
            {work.category && work.category}
          </p>
        )}
      </a>
    </div>
  );
  
  // 渲染内容区域
  const renderCategoryContent = (category) => {
    if (!category.works || category.works.length === 0) {
      return (
        <div className="works-container">
          <p className="text-mystic-300 text-sm font-serif italic py-4">暂无作品</p>
        </div>
      );
    }
    
    return (
      <div className="works-container">
        {category.works.map((work) => renderWorkItem(work, category))}
      </div>
    );
  };
  
  return (
    <div {...frame} className="space-y-8">
      {items.map((item) => (
        <div key={item.id} className="mystic-card-2 expandable-card">
          {/* Father Header */}
          <div className="father-header">
            <div className="p-6">
              {renderHeader(item)}
            </div>
            <div className="toggle-container" onClick={() => toggleExpand(item.id)}>
              <button className="toggle-button" onClick={(e) => { e.stopPropagation(); toggleExpand(item.id); }}>
                {expandedId === item.id ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
              </button>
            </div>
          </div>
          
          {/* Content */}
          {expandedId === item.id && (
            <div className="works-list">
              {renderCategoryContent(item)}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export { frames, components };
