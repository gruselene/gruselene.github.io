# Gruselene's Mystic Archives

个人博客网站，展示文学作品、翻译和外部创作。

## ⚠️ AI 开发者注意事项

### 重大错误记录

本项目记录了开发过程中犯下的严重错误，供后续 AI 开发者引以为戒：

#### 1. 不要删除本地项目文件！
**错误行为**：在未确认所有进程已停止的情况下，使用 `Remove-Item` 命令删除整个 `web` 文件夹。

**后果**：
- 导致本地项目被删除
- Git 仓库损坏
- 需要重新克隆和配置

**正确做法**：
- 删除项目前，先使用 `taskkill /F /IM node.exe` 停止所有 Node.js 进程
- 确保没有任何程序正在使用项目文件
- 在删除前确认路径是否正确
- 优先考虑备份而非直接删除

#### 2. 不要在 node_modules 中运行项目！
**错误行为**：项目运行时产生的临时文件被错误地放置在 `node_modules` 目录中。

**正确做法**：
- 始终在项目根目录运行命令
- 使用 `cd "E:\Users\34430\Desktop\web"` 切换到正确目录后再执行命令
- 不要修改 `.vite` 等缓存目录的内容

#### 3. 路由链接必须使用 `<Link>` 组件！
**错误行为**：在 `renderExpandableList` 函数中使用了 `<a>` 标签而非 React Router 的 `<Link>` 组件。

**后果**：
- 导致页面导航闪烁
- 从大类直接进入作品页面失败
- 破坏了客户端路由的优势

**正确做法**：
- 在 `show.jsx` 中导入 `Link` from 'react-router-dom'
- 使用 `<Link to={work.url}>` 替代 `<a href={work.url}>`
- 始终使用客户端路由进行内部导航

#### 4. 部署配置要谨慎！
**错误行为**：随意更改部署分支配置，可能导致源代码被构建产物覆盖。

**正确做法**：
- 源代码推送到 `source` 分支
- 构建产物推送到 `main` 分支（或 `gh-pages`）
- 修改部署配置前先备份当前设置
- 使用 `npm run build && npm run deploy` 进行部署

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
