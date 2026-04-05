# 创建 preview.png 社交分享图片指南

## 🎯 目标
创建一个 1200x630px 的社交分享图片，用于 Open Graph 和 Twitter Card。

## 📋 规格要求

- **尺寸**: 1200 x 630 像素
- **格式**: PNG
- **文件名**: `preview.png`
- **位置**: 仓库根目录

## 🎨 方法一：使用 preview.html 截图（推荐）

### 步骤：
1. 在浏览器中打开 `preview.html`
2. 按 F12 打开开发者工具
3. 按 Ctrl+Shift+P (Windows) 或 Cmd+Shift+P (Mac)
4. 输入 "Capture screenshot"
5. 选择 "Capture node screenshot"
6. 点击 `.preview-container` 元素
7. 保存为 `preview.png`

### 或者使用浏览器扩展：
- **Awesome Screenshot**
- **Nimbus Screenshot**
- **GoFullPage**

## 🎨 方法二：使用在线工具

### 推荐工具：
1. **Canva** (https://www.canva.com)
   - 选择 "自定义尺寸" → 1200 x 630 px
   - 使用深色背景渐变
   - 添加以下文字内容

2. **Figma** (https://www.figma.com)
   - 创建 1200x630 画布
   - 设计社交分享卡片

## 📝 图片内容建议

### 主标题
```
LLM Energy Efficiency Research
```

### 副标题
```
Why Default INT8 Increases Power by 17-33%
```

### 关键数据点（4个）
```
⚠ Default INT8: +17-33% energy vs FP16
✓ Pure INT8: -3-8% energy vs FP16  
🔧 Root cause: Mixed-precision decomposition
🚀 Fix: +79% throughput, -36% energy
```

### 简单图表
显示三个柱状图：
- Default INT8: 红色，长度 80%，标注 "+31.7%"
- Pure INT8: 绿色，长度 45%，标注 "-5.5%"
- FP16: 蓝色，长度 50%，标注 "Baseline"

### 底部徽章
```
🤗 HF Optimum | 🏆 MLCommons #2558 | 📊 93+ Measurements
```

### 网址
```
hongping-zh.github.io
```

## 🎨 设计规范

### 颜色方案
- **背景**: 深色渐变 (#1a1d28 → #2a2d3a)
- **主标题**: 渐变蓝紫色 (#60a5fa → #a78bfa)
- **文字**: 浅灰色 (#e8eaf0)
- **警告色**: 红色 (#ef4444)
- **成功色**: 绿色 (#22c55e)
- **信息色**: 蓝色 (#3b82f6)

### 字体
- **标题**: 粗体，42-48px
- **副标题**: 中等，24-28px
- **正文**: 常规，16-20px
- **小字**: 12-14px

### 布局
```
+--------------------------------------------------+
|  LLM Energy Efficiency Research                  |
|  Why Default INT8 Increases Power by 17-33%      |
|                                                  |
|  [关键发现]              [简单图表]               |
|  ⚠ Default INT8: +17-33%                         |
|  ✓ Pure INT8: -3-8%                              |
|  🔧 Mixed-precision                               |
|  🚀 Fix: +79% / -36%                             |
|                                                  |
|  🤗 HF Optimum | 🏆 MLCommons | 📊 93+ Measurements |
|  hongping-zh.github.io                           |
+--------------------------------------------------+
```

## 🎨 方法三：使用 Python 生成（高级）

如果您熟悉 Python，可以使用以下代码：

```python
from PIL import Image, ImageDraw, ImageFont
import os

# 创建画布
width, height = 1200, 630
img = Image.new('RGB', (width, height), color='#1a1d28')
draw = ImageDraw.Draw(img)

# 添加渐变背景（简化版）
for y in range(height):
    r = int(26 + (42-26) * y/height)
    g = int(29 + (45-29) * y/height)
    b = int(40 + (58-40) * y/height)
    draw.line([(0, y), (width, y)], fill=(r, g, b))

# 加载字体（需要系统字体）
try:
    title_font = ImageFont.truetype("arial.ttf", 48)
    subtitle_font = ImageFont.truetype("arial.ttf", 28)
    text_font = ImageFont.truetype("arial.ttf", 20)
except:
    title_font = ImageFont.load_default()
    subtitle_font = ImageFont.load_default()
    text_font = ImageFont.load_default()

# 添加文字
draw.text((60, 40), "LLM Energy Efficiency Research", 
          fill='#60a5fa', font=title_font)
draw.text((60, 100), "Why Default INT8 Increases Power by 17-33%", 
          fill='#9ca0b0', font=subtitle_font)

# 添加关键发现
findings = [
    ("⚠", "Default INT8: +17-33% energy vs FP16", '#ef4444'),
    ("✓", "Pure INT8: -3-8% energy vs FP16", '#22c55e'),
    ("🔧", "Root cause: Mixed-precision decomposition", '#3b82f6'),
    ("🚀", "Fix: +79% throughput, -36% energy", '#22c55e'),
]

y_pos = 180
for icon, text, color in findings:
    draw.text((60, y_pos), f"{icon} {text}", fill='#e8eaf0', font=text_font)
    y_pos += 40

# 添加底部信息
draw.text((60, 560), "🤗 HF Optimum | 🏆 MLCommons #2558 | 📊 93+ Measurements", 
          fill='#9ca0b0', font=text_font)
draw.text((900, 560), "hongping-zh.github.io", 
          fill='#60a5fa', font=text_font)

# 保存
img.save('preview.png')
print("Preview image created successfully!")
```

## ✅ 验证清单

创建完成后，检查：
- [ ] 尺寸正确：1200 x 630 像素
- [ ] 文件格式：PNG
- [ ] 文件大小：< 1MB（推荐 < 300KB）
- [ ] 所有文字清晰可读
- [ ] 数据准确无误
- [ ] 颜色对比度足够
- [ ] 保存到仓库根目录

## 📤 上传步骤

1. 将 `preview.png` 放到仓库根目录
2. 运行：
   ```bash
   cd "C:\Users\14593\Downloads\hongping-zh.github.io"
   git add preview.png
   git commit -m "Add social media preview image"
   git push
   ```

## 🧪 测试

上传后，使用以下工具测试：
- **Twitter Card Validator**: https://cards-dev.twitter.com/validator
- **Facebook Debugger**: https://developers.facebook.com/tools/debug/
- **LinkedIn Post Inspector**: https://www.linkedin.com/post-inspector/

---

**预计时间**: 15-30 分钟  
**难度**: 中等
