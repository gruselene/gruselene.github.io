// 存储被注册的小类
let categories = [];

// 获取所有小类
export const getCategories = () => categories;

// 设置小类
export const setCategories = (newCategories) => {
  categories = newCategories;
};

// 清空小类
export const clearCategories = () => {
  categories = [];
};
