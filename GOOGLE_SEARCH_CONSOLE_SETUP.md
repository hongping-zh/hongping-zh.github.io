# Google Search Console 设置指南

## 第一步：提交站点到 Google Search Console

1. 访问 [Google Search Console](https://search.google.com/search-console/)
2. 点击 "添加资源"
3. 选择 "网址前缀" 方式
4. 输入：`https://hongping-zh.github.io`
5. 验证所有权（推荐使用 HTML 文件验证）

### HTML 文件验证方法：
- Google 会提供一个验证文件（如 `google1234567890abcdef.html`）
- 下载该文件
- 上传到仓库根目录
- 提交并推送到 GitHub
- 等待 GitHub Pages 部署完成（约 1-2 分钟）
- 返回 Google Search Console 点击"验证"

## 第二步：提交 Sitemap

1. 在 Google Search Console 左侧菜单选择 "站点地图"
2. 输入：`sitemap.xml`
3. 点击 "提交"

## 第三步：请求索引

1. 在顶部搜索框输入：`https://hongping-zh.github.io/`
2. 点击 "请求编入索引"
3. 等待 Google 抓取（通常 1-7 天）

## 第四步：监控收录状态

定期检查以下指标：
- **覆盖率**：查看已索引的页面数
- **效果**：查看搜索展示次数和点击次数
- **增强功能**：确认结构化数据无错误

## 加速收录的技巧

### 1. 建立外链
在以下位置添加链接：
- ✅ GitHub 仓库 README
- ✅ 个人博客/网站
- ✅ Product Hunt
- ✅ Hacker News
- ✅ Reddit (r/MachineLearning, r/opensource)
- ✅ Twitter/X
- ✅ LinkedIn

### 2. 内容优化
- ✅ 已添加 JSON-LD 结构化数据
- ✅ 已添加 Open Graph 标签
- ✅ 已添加语义化 HTML
- ✅ 已优化页面标题和描述

### 3. 技术优化
- ✅ sitemap.xml 已创建
- ✅ robots.txt 已创建
- ✅ canonical URL 已设置
- ✅ meta robots 已设置为 index,follow

## 预期时间线

- **提交后 1-3 天**：Google 开始抓取
- **3-7 天**：页面被索引
- **1-2 周**：开始出现在搜索结果中
- **1 个月**：排名逐渐稳定

## 关键词策略

已优化的关键词：
- LLM energy efficiency
- GPU optimization
- quantization
- INT8
- GitHub bot
- energy audit
- machine learning
- AI sustainability
- carbon footprint
- green AI

## 检查收录状态

在 Google 搜索框输入：
```
site:hongping-zh.github.io
```

如果看到结果，说明已被收录。

## 常见问题

**Q: 多久能被收录？**
A: 通常 3-7 天，但可能需要 2-4 周。

**Q: 如何加快收录？**
A: 建立高质量外链，在社交媒体分享，定期更新内容。

**Q: 为什么还没被收录？**
A: 检查 robots.txt 是否正确，确认 sitemap 已提交，查看 Search Console 的错误报告。

## 联系方式

如有问题，请在 [GitHub Issues](https://github.com/hongping-zh/ecocompute-dynamic-eval/issues) 提出。
