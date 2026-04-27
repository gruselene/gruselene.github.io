// 存储被注册的大类
let collections = [];

// 获取所有大类
export const getCollections = () => collections;

// 设置大类
export const setCollections = (newCollections) => {
  collections = newCollections;
};

// 清空大类
export const clearCollections = () => {
  collections = [];
};
