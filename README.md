# Course

数字产品设计交互课程仓库。每个 `Course N` 文件夹对应一门课程和一个独立在线链接。

- 课程目录：https://yangshuai990529.github.io/Course/
- Course 1：https://yangshuai990529.github.io/Course/Course%201/

## 目录结构

```text
Course/
├── index.html                   # 自动生成的课程目录
├── Course 1/
│   ├── index.html               # 可离线打开的正式课件
│   ├── course.json              # 课程名称与简介
│   ├── src/                     # React / TypeScript 源码
│   ├── 讲师备注.md
│   ├── 课堂练习.md
│   └── README.md                # 本课使用与构建说明
├── scripts/build-catalog.mjs
└── .github/workflows/pages.yml
```

## 添加 Course 2 到 Course N

1. 在仓库根目录新建 `Course 2`（或下一个序号）文件夹。
2. 放入正式构建的 `index.html`。优先使用 JS/CSS 内联的离线单文件；如果采用分离资源，放在该课程的 `assets/` 目录，并使用相对路径。
3. 添加 `course.json`，填写实际标题、简介、时长与场景数。例如：

```json
{
  "title": "课程标题",
  "subtitle": "课程简介",
  "duration": "120 分钟",
  "scenes": 25
}
```

4. 如需开发维护，把对应的源码、构建配置和说明也放入课程文件夹。开发改动后必须重新构建 `index.html`，推送源码不会自动更新已构建的课件。
5. 提交并推送到 `main`。GitHub Actions 自动生成课程目录并发布 GitHub Pages。

Course 2 的在线地址为 `https://yangshuai990529.github.io/Course/Course%202/`。后续按同样方式递增，已有文件夹名称和链接保持不变。

本地更新目录与部署内容：

```sh
node scripts/build-catalog.mjs
```

脚本扫描真实存在且含 `index.html` 的 `Course N` 文件夹，按数字排序。缺少 `course.json` 时使用文件夹名称作为标题。GitHub Pages 只发布课程目录、课程 `index.html` 和各课程的 `assets/`，不发布 `node_modules`、测试截图或源码目录。仓库本身是公开的，源码可在 GitHub 浏览。

## Course 1

数字产品设计行业认知：27 个场景、120 分钟。包含 UI/UX/PM 分工、To C/B/G、产品开发、硬件界面、GUI/CUI/Agent、AI 辅助与职业学习路线。所有业务操作与数据均为教学模拟。
