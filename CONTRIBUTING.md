# 贡献指南

## 开发环境设置

1. **安装依赖**
   ```bash
   npm install
   ```

2. **启动开发服务器**
   ```bash
   npm run dev
   ```
   访问 http://localhost:5173

3. **构建生产版本**
   ```bash
   npm run build
   ```

4. **预览生产构建**
   ```bash
   npm run preview
   ```

## 项目结构

```
docs/
├── .vitepress/          # VitePress 配置
│   ├── config.ts        # 主配置文件
│   ├── theme.ts         # 主题配置
│   └── custom.css       # 自定义样式
├── zh/                  # 中文版内容
├── en/                  # 英文版内容
├── index.md             # 中文版首页
└── en/
    └── index.md         # 英文版首页
```

## 添加新内容

### 添加中文内容

1. 在 `docs/zh/` 目录下创建或编辑 Markdown 文件
2. 在 `docs/.vitepress/config.ts` 中的 `sidebar` 配置中添加链接

### 添加英文内容

1. 在 `docs/en/` 目录下创建或编辑 Markdown 文件
2. 在 `docs/.vitepress/config.ts` 中的 `sidebar['/en/']` 配置中添加链接

## 配置说明

### 侧边栏配置

侧边栏配置在 `docs/.vitepress/config.ts` 的 `themeConfig.sidebar` 中：

```typescript
sidebar: {
  '/': [
    {
      text: '章节标题',
      link: '/zh/路径/README'
    },
    {
      text: '分组标题',
      items: [
        { text: '子章节', link: '/zh/路径/README' }
      ]
    }
  ]
}
```

### 多语言支持

VitePress 支持多语言，配置在 `locales` 中：

```typescript
locales: {
  root: {
    label: '中文',
    lang: 'zh-CN',
    link: '/'
  },
  en: {
    label: 'English',
    lang: 'en-US',
    link: '/en/'
  }
}
```

## Markdown 特性

VitePress 支持所有标准 Markdown 语法，以及：

- **Frontmatter**: 用于页面元数据
- **代码高亮**: 自动语法高亮
- **代码组**: 多标签代码块
- **自定义容器**: 提示、警告等
- **数学公式**: KaTeX 支持
- **Mermaid 图表**: 流程图、时序图等

## 提交更改

1. Fork 项目
2. 创建功能分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 开启 Pull Request

## 代码规范

- 使用 Markdown 标准语法
- 保持代码块的语言标识
- 使用有意义的文件名
- 添加适当的 Frontmatter

## 问题反馈

如有问题或建议，请：
- 创建 [Issue](https://github.com/taosin/Frontend-AI-Handbook/issues/new)
- 或提交 [Pull Request](https://github.com/taosin/Frontend-AI-Handbook/pulls)
