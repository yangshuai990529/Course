import ts from 'typescript';
import {readFileSync,writeFileSync} from 'node:fs';
const js=ts.transpile(readFileSync('src/course.ts','utf8'),{target:ts.ScriptTarget.ES2022,module:ts.ModuleKind.ESNext});
const {lessons,chapters}=await import('data:text/javascript;base64,'+Buffer.from(js).toString('base64'));
const labels={goal:'教学目标',talk:'建议讲解话术',example:'案例与证据边界',question:'课堂提问',interaction:'互动说明',doubt:'学生可能的疑问',summary:'知识点总结'};
let time=0;
writeFileSync('讲师备注.md','# Lesson 00 · 讲师备注\n\n总时长 120 分钟。腾讯会议分享时关闭课件备注面板，或在另一台设备打开本文。所有演示均为本地教学模拟。\n\n'+lessons.map((l,i)=>{const start=time;time+=l.minutes;return `## ${String(i+1).padStart(2,'0')} ${l.title.replace('\n',' ')}\n\n章节：${chapters[l.chapter]}\n\n建议时长：${l.minutes} 分钟，课程第 ${start}–${time} 分钟。\n\n`+Object.entries(l.notes).map(([k,v])=>`### ${labels[k]}\n\n${v}\n`).join('\n')}).join('\n'));
writeFileSync('课堂练习.md',`# Lesson 00 · 课堂练习\n\n## 课内练习\n\n1. 第 2 页：预约按钮可以点击后，需要设计哪些结果和失败反馈？\n2. 第 7 页：分别以减少等待、提高复购为目标选择首版功能，解释取舍。\n3. 第 8 页：体验两种点单路径，比较步骤、理解成本、错误风险和反馈。\n4. 第 14 页：筛选待审核订单，查看金额，审核一笔，切换观察员验证限制。\n5. 第 15 页：提交一次公共场馆预约，检查缺字段、材料确认和状态反馈。\n6. 第 18 页：三个评审情境分别选择方案，说明成本、体验、范围和风险。\n7. 第 22 页：体验 GUI、CUI 与 Agent，分别尝试确认、澄清、取消与接管。\n8. 第 23 页：发现五个问题，再检查修正版的输入校验与密码显示。\n9. 第 25 页：完成五个任务责任判断，不把 AI 输出当作最终事实。\n\n## 课后产品分析\n\n选择一个熟悉的 App、网站、电视或设备软件。无需提供个人敏感信息。\n\n- 产品面向谁？区分使用者、购买方与业务类型。\n- 解决什么问题？具体到用户情境。\n- 核心用户流程是什么？至少列出四步并说明结果。\n- UI 有哪些特点？指出一项信息层级或组件状态。\n- UX 可能有哪些问题？写出具体操作、后果和验证办法。\n- AI 可以辅助什么？说明人工还需要检查什么。\n\n## 讲师评价\n\n检查任务是否具体，事实与假设是否区分，建议是否可验证。课件的完整度检查只判断六项是否填写，不评价分析质量。\n\n## 参考要点\n\nPM：目标、范围、规则与优先级；UX：任务、流程、信息和验证；UI：清晰呈现、组件与状态。职责可重叠。\n\nTo C 关注消费者任务与体验，To B 强调业务效率、流程、数据与权限，To G 强调事项规范、状态透明与可访问性。业务类型不是仅按界面复杂度判断。\n\nAI 可辅助生成草稿、原型、代码和检查用例，但仍需核验证据与实际操作。业务规则和跨团队取舍需要明确责任。\n`);
console.log('27 场景，'+time+' 分钟，备注与练习已导出。');
