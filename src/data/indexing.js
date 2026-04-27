// 调用一个大类下面所有小类和一个作品下面所有作品的方法
import { getCollections } from './registried/collection';
import { getCategories } from './registried/category';
import { getWorks } from './registried/work';

// 获取一个大类下面所有小类
export const getCategoriesForCollection = (collectionId) => {
  return getCategories().filter(category => category.collectionId === collectionId);
};

// 获取一个小类下面所有作品
export const getWorksForCategory = (collectionId, categoryId) => {
  return getWorks().filter(work => 
    work.collectionId === collectionId && work.categoryId === categoryId
  );
};

// 构建大类索引
export const buildCollectionIndex = () => {
  const collections = getCollections();
  const index = {};
  
  collections.forEach(collection => {
    const categories = getCategoriesForCollection(collection.id);
    
    // 为每个小类添加作品信息
    const categoriesWithWorks = categories.map(category => ({
      ...category,
      works: getWorksForCategory(collection.id, category.id) || []
    }));
    
    index[collection.id] = {
      ...collection,
      categories: categoriesWithWorks
    };
  });
  
  return index;
};

// 构建小类索引
export const buildCategoryIndex = () => {
  const categories = getCategories();
  const index = {};
  
  categories.forEach(category => {
    const key = `${category.collectionId}:${category.id}`;
    index[key] = {
      ...category,
      works: getWorksForCategory(category.collectionId, category.id)
    };
  });
  
  return index;
};
