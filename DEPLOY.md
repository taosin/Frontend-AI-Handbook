# 部署指南

本项目支持部署到 **Vercel** 和 **GitHub Pages**。推荐使用 **Vercel**，配置更简单，功能更强大。

## 🚀 推荐方案：Vercel 部署

### 优势
- ✅ **零配置**：自动识别 VitePress，无需额外配置
- ✅ **自动部署**：推送代码自动构建和部署
- ✅ **预览部署**：每个 PR 自动生成预览链接
- ✅ **性能优秀**：全球 CDN，访问速度快
- ✅ **自定义域名**：支持免费自定义域名
- ✅ **HTTPS**：自动配置 SSL 证书

### 部署步骤

1. **安装 Vercel CLI**（可选）
   ```bash
   npm i -g vercel
   ```

2. **在 Vercel 上部署**
   - 访问 [vercel.com](https://vercel.com)
   - 使用 GitHub 账号登录
   - 点击 "New Project"
   - 导入你的 GitHub 仓库
   - Vercel 会自动检测 VitePress 项目
   - 点击 "Deploy" 即可

3. **配置（已自动完成）**
   - Build Command: `npm run build`
   - Output Directory: `docs/.vitepress/dist`
   - Install Command: `npm install`

4. **自定义域名**（可选）
   - 在 Vercel 项目设置中添加自定义域名
   - 自动配置 DNS 和 SSL

### 环境变量（如需要）
在 Vercel 项目设置中可以添加环境变量，例如：
- `NODE_ENV=production`

---

## 📦 GitHub Pages 部署

### 优势
- ✅ **免费**：GitHub 提供免费托管
- ✅ **集成**：与 GitHub 仓库深度集成
- ✅ **简单**：使用 GitHub Actions 自动化部署

### 部署步骤

1. **启用 GitHub Pages**
   - 进入仓库 Settings → Pages
   - Source 选择 "GitHub Actions"

2. **配置工作流**（已创建）
   - 工作流文件：`.github/workflows/deploy.yml`
   - 每次推送到 `main` 或 `master` 分支会自动部署

3. **设置 base 路径**
   - 如果仓库名是 `Frontend-AI-Handbook`
   - 需要在构建时设置环境变量：
   ```bash
   GITHUB_PAGES=true npm run build
   ```
   - 或者修改 `.github/workflows/deploy.yml` 中的构建命令：
   ```yaml
   - name: Build
     run: GITHUB_PAGES=true npm run build
     env:
       GITHUB_PAGES: true
   ```

4. **访问地址**
   - 格式：`https://<username>.github.io/Frontend-AI-Handbook/`
   - 或使用自定义域名

### 更新 GitHub Actions 工作流

我已经创建了 `.github/workflows/deploy.yml` 文件，但需要更新构建命令以支持 base 路径：

```yaml
- name: Build
  run: npm run build
  env:
    GITHUB_PAGES: true
    NODE_ENV: production
```

---

## 🔧 本地测试部署

### 测试 Vercel 构建
```bash
npm run build
npm run preview
```

### 测试 GitHub Pages 构建
```bash
GITHUB_PAGES=true npm run build
cd docs/.vitepress/dist
# 使用本地服务器测试，例如：
python3 -m http.server 8000
```

---

## 📝 部署检查清单

- [ ] 确保 `package.json` 中的构建脚本正确
- [ ] 检查 `docs/.vitepress/config.ts` 中的 base 路径配置
- [ ] 验证所有链接在部署后正常工作
- [ ] 测试搜索功能
- [ ] 检查多语言切换功能
- [ ] 验证移动端响应式布局

---

## 🆚 Vercel vs GitHub Pages 对比

| 特性 | Vercel | GitHub Pages |
|------|--------|--------------|
| 配置难度 | ⭐ 非常简单 | ⭐⭐ 需要配置 Actions |
| 构建速度 | ⚡ 非常快 | 🐢 较慢 |
| 预览部署 | ✅ 每个 PR | ❌ 不支持 |
| 自定义域名 | ✅ 免费 | ✅ 免费 |
| CDN | ✅ 全球 CDN | ⚠️ 有限 |
| 自动 HTTPS | ✅ | ✅ |
| 免费额度 | 充足 | 充足 |

**推荐：优先使用 Vercel，如果需要在 GitHub 生态内，再考虑 GitHub Pages。**

---

## 🐛 常见问题

### 1. 部署后页面 404
- 检查 `base` 路径配置是否正确
- GitHub Pages 需要设置正确的 base 路径（通常是 `/仓库名/`）

### 2. 资源加载失败
- 确保所有资源路径使用相对路径
- 检查 `base` 配置

### 3. 搜索功能不工作
- 确保构建时生成了搜索索引
- 检查 `search` 配置

---

## 📚 相关链接

- [VitePress 部署文档](https://vitepress.dev/guide/deploying)
- [Vercel 文档](https://vercel.com/docs)
- [GitHub Pages 文档](https://docs.github.com/en/pages)
