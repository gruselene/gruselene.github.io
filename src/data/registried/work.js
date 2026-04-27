// 存储被注册的作品
let works = [];

// 获取所有作品
export const getWorks = () => works;

// 设置作品
export const setWorks = (newWorks) => {
  works = newWorks;
};

// 清空作品
export const clearWorks = () => {
  works = [];
};
