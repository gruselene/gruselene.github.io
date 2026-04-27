// 注册系统
// 组织方式：大类 -> 小类 -> 具体作品

import { getCollections, setCollections, clearCollections } from './registried/collection';
import { getCategories, setCategories, clearCategories } from './registried/category';
import { getWorks, setWorks, clearWorks } from './registried/work';

// 最大的常量 registry 包含所有注册方法
export const registry = {
  // 注册大类
  registerCollection(collection) {
    if (!collection.id || !collection.title || !collection.description || !collection.url) {
      console.error('Collection must have id, title, description, and url');
      return false;
    }
    
    const collections = getCollections();
    
    // 检查是否已存在
    const existingIndex = collections.findIndex(c => c.id === collection.id);
    if (existingIndex >= 0) {
      // 更新已有大类
      collections[existingIndex] = {
        ...collections[existingIndex],
        ...collection
      };
    } else {
      // 添加新大类
      collections.push({
        ...collection
      });
    }
    
    setCollections(collections);
    return true;
  },
  
  // 注册小类
  registerCategory(collectionId, category) {
    if (!collectionId || !category.id || !category.title || !category.description || !category.url) {
      console.error('Category must have id, title, description, and url, and collectionId must be provided');
      return false;
    }
    
    const collections = getCollections();
    const categories = getCategories();
    
    if (!collections.find(c => c.id === collectionId)) {
      console.error(`Collection with id ${collectionId} not found`);
      return false;
    }
    
    // 检查是否已存在
    const existingIndex = categories.findIndex(c => 
      c.collectionId === collectionId && c.id === category.id
    );
    
    if (existingIndex >= 0) {
      // 更新已有小类
      categories[existingIndex] = {
        ...categories[existingIndex],
        ...category
      };
    } else {
      // 添加新小类
      categories.push({
        ...category,
        collectionId
      });
    }
    
    setCategories(categories);
    return true;
  },
  
  // 注册作品
  registerWork(collectionId, categoryId, work) {
    if (!collectionId || !categoryId || !work.id || !work.title || !work.excerpt || !work.date || !work.category || !work.url) {
      console.error('Work must have id, title, excerpt, date, category, and url, and collectionId and categoryId must be provided');
      return false;
    }
    
    const categories = getCategories();
    const works = getWorks();
    
    if (!categories.find(c => c.collectionId === collectionId && c.id === categoryId)) {
      console.error(`Category with id ${categoryId} not found in collection ${collectionId}`);
      return false;
    }
    
    // 检查是否已存在
    const existingIndex = works.findIndex(w => 
      w.collectionId === collectionId && 
      w.categoryId === categoryId && 
      w.id === work.id
    );
    
    if (existingIndex >= 0) {
      // 更新已有作品
      works[existingIndex] = {
        ...work,
        collectionId,
        categoryId
      };
    } else {
      // 添加新作品
      works.push({
        ...work,
        collectionId,
        categoryId
      });
    }
    
    setWorks(works);
    return true;
  },
  
  // 扫描并注册所有组件
  scanAndRegister() {
    // 清空现有注册
    clearCollections();
    clearCategories();
    clearWorks();
    
    // 不再扫描 collections 文件夹，因为现在所有的注册都是由各个组件自己完成的
    // 各个组件会在挂载时自动注册自己
  },
  
  // 初始化所有注册
  initialize() {
    // 不再扫描和清空注册信息，因为 initialize.js 已经注册了所有的大类、小类和作品
    // this.scanAndRegister();
    
    // 监听文件变化，自动重新扫描
    if (import.meta.hot) {
      import.meta.hot.on('vite:beforeUpdate', () => {
        // 注释掉这行，避免在热更新时清空注册信息
        // this.scanAndRegister();
      });
    }
  }
};

// 导出 registry
export default registry;