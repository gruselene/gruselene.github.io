# Gruselene's Mystic Archives

个人博客网站，展示文学作品、翻译和外部创作。

## 项目结构

### 内容分类
- **大类**：如 `my-external-works`、`my-translations` 等
- **小类**：如 `myEnglishToChineseTranslation`、`myChineseToEnglishTranslation`、`mySCP` 等
- **作品**：如 `Work1`、`Poem1`、`Novel1` 等

### 页面排版
- **主页**：随机两列排版两个作品
- **作品页**：十个一页，单列排版所有作品，按照最近修改日期降序排列
- **个人展示页**：在作品集栏目会两列排版所有的大类

## 技术栈

- React 18
- React Router v6
- Tailwind CSS
- Vite
- Lucide React (图标库)

## 开发命令

- `npm run dev` - 启动开发服务器
- `npm run build` - 构建生产版本
- `npm run lint` - 代码质量检查
- `npm run preview` - 预览生产构建
- `npm run deploy` - 部署到 GitHub Pages

## 项目结构

```
├── public/              # 静态资源
├── src/                 # 源代码
│   ├── assets/          # 资源文件
│   ├── data/            # 数据文件
│   ├── pages/           # 页面组件
│   │   ├── MyExternalWorks/  # 外部作品
│   │   ├── MyLiterature/     # 文学作品
│   │   ├── MyTranslations/   # 翻译作品
│   │   ├── About.jsx         # 关于页面
│   │   ├── BlogList.jsx      # 博客列表
│   │   └── Home.jsx          # 首页
│   ├── App.jsx          # 应用主组件
│   ├── index.css        # 全局样式
│   └── main.jsx         # 应用入口
├── package.json         # 项目配置
├── tailwind.config.js   # Tailwind 配置
└── vite.config.js       # Vite 配置
```
