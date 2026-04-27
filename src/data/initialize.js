// 初始化所有的大类和小类数据
// 这个文件会在应用启动时被导入，确保所有数据都被注册
// 数据来源于 worksData.js，保持单一数据源

import { registry } from './registry';
import { collections, categories } from './worksData';

// 注册所有大类
collections.forEach(collection => {
  registry.registerCollection(collection);
});

// 注册所有小类和作品
Object.keys(categories).forEach(collectionId => {
  const categoryList = categories[collectionId];
  
  categoryList.forEach(category => {
    // 注册小类（不包含 works 字段）
    const { works, ...categoryData } = category;
    registry.registerCategory(collectionId, categoryData);
    
    // 注册作品
    if (works && works.length > 0) {
      works.forEach(work => {
        registry.registerWork(collectionId, category.id, work);
      });
    }
  });
});

console.log('All categories and works initialized successfully from worksData.js');
