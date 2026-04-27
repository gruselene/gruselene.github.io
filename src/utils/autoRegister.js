// 自动注册工具
import { registry } from '../data/registry';

// 自动注册大类
export const autoRegisterCollection = (collection) => {
  registry.registerCollection(collection);
};

// 自动注册小类
export const autoRegisterCategory = (collectionId, category) => {
  registry.registerCategory(collectionId, category);
};

// 自动注册作品
export const autoRegisterWork = (collectionId, categoryId, work) => {
  registry.registerWork(collectionId, categoryId, work);
};
