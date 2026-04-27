// 调用注册了的的大类信息小类信息和作品信息的方法
import { getCollections } from './registried/collection';
import { getCategories } from './registried/category';
import { getWorks } from './registried/work';
import { experiences } from './registried/experience';
import { buildCollectionIndex, buildCategoryIndex } from './indexing';

// 获取指定大类
export const getCollection = (id) => {
  const collectionIndex = buildCollectionIndex();
  return collectionIndex[id] || null;
};

// 获取指定小类
export const getCategory = (collectionId, categoryId) => {
  const categoryIndex = buildCategoryIndex();
  return categoryIndex[`${collectionId}:${categoryId}`] || null;
};

// 获取指定作品
export const getWork = (collectionId, categoryId, workId) => {
  return getWorks().find(work => 
    work.collectionId === collectionId && 
    work.categoryId === categoryId && 
    work.id === workId
  );
};

// 获取所有大类
export const getAllCollections = () => {
  const collectionIndex = buildCollectionIndex();
  return Object.values(collectionIndex);
};

// 获取指定大类下的所有小类
export const getCategoriesByCollection = (collectionId) => {
  return getCategories().filter(category => category.collectionId === collectionId);
};

// 获取指定小类下的所有作品
export const getWorksByCategory = (collectionId, categoryId) => {
  return getWorks().filter(work => 
    work.collectionId === collectionId && work.categoryId === categoryId
  );
};

// 获取所有个人历程
export const getAllExperiences = () => {
  return experiences;
};
