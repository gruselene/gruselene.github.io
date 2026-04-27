# Gruselene's Mystic Archives

个人博客网站，展示文学作品、翻译和外部创作。

## ⚠️ 绝对禁止的操作

### 1. 严禁使用 gh-pages 分支构建网站！
**原因**：使用 `gh-pages -b main` 会将构建产物推送到 main 分支，覆盖源代码！

**后果**：
- 源代码被构建产物覆盖
- 本地项目变成构建产物而非源代码
- 需要从其他分支恢复源代码

**正确做法**：
- 源代码必须只上传到 `source` 分支
- 使用 GitHub Actions 或其他 CI/CD 方式自动构建
- 绝对不要手动使用 `gh-pages -b main` 命令
- 如果要本地构建，请使用 `npm run build` 后手动上传到 main 分支

### 2. 严禁删除本地项目文件！
**错误行为**：在未确认所有进程已停止的情况下，使用命令删除整个项目文件夹。

**正确做法**：
- 删除项目前，先使用 `taskkill /F /IM node.exe` 停止所有 Node.js 进程
- 确保没有任何程序正在使用项目文件

### 3. 路由链接必须使用 `<Link>` 组件！
**错误行为**：在 `renderExpandableList` 函数中使用了 `<a>` 标签而非 React Router 的 `<Link>` 组件。

**后果**：
- 导致页面导航闪烁
- 从大类直接进入作品页面失败

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
