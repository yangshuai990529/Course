import {chromium} from '@playwright/test';
const browser=await chromium.launch({channel:'chrome',headless:true});const page=await browser.newPage({viewport:{width:1920,height:1080}});await page.goto('file://'+process.cwd()+'/index.html');
await page.getByRole('button',{name:'切换为静态海报'}).waitFor();await page.screenshot({path:'qa/cover-final.png'});await page.getByRole('button',{name:'切换为静态海报'}).click();await page.getByRole('button',{name:'转为可交互界面 ↗'}).click();await page.getByRole('button',{name:'切换为静态海报'}).waitFor();
async function go(n){await page.getByRole('button',{name:'☷ 章节'}).click();await page.locator('.directory-grid button').nth(n-1).click();await page.waitForTimeout(750)}
await go(9);await page.getByRole('button',{name:'低保真',exact:true}).click();if(!await page.locator('.phone.wire').count())throw Error('wireframe');await page.getByRole('button',{name:'高保真',exact:true}).click();await page.getByRole('button',{name:'组件状态',exact:true}).click();await page.getByText('可选、已选、提交完成等状态一致反馈。').waitFor();
await go(10);await page.getByRole('button',{name:'测试',exact:true}).click();await page.getByText('测试用例、缺陷记录、验证结果').waitFor();
await go(12);await page.getByRole('button',{name:'To G',exact:true}).click();await page.getByText('面向政府与公共服务',{exact:true}).waitFor();
await go(16);await page.getByRole('button',{name:'To B',exact:true}).click();await page.getByLabel('项目与预算说明').fill('评审 300元');await page.getByRole('button',{name:'提交模拟申请'}).click();await page.getByText('已进入部门审核，审批前不能确认场地。').waitFor();
await go(17);await page.getByRole('button',{name:'07 测试验收'}).click();await page.getByText('测试记录、缺陷与复测结果').waitFor();
await go(18);await page.getByRole('button',{name:'开发周期',exact:true}).click();await page.getByRole('button',{name:'A 缩小范围，先保证点单闭环'}).click();await page.getByText('延后推荐',{exact:true}).waitFor();
await go(21);await page.getByRole('button',{name:'代码实现',exact:true}).click();await page.getByText('能运行但规则错误',{exact:true}).waitFor();
await go(23);await page.getByRole('button',{name:'发现更多精彩世界 ✨ 今天立即体验所有新功能'}).click();await page.getByRole('button',{name:'查找密码显示状态问题'}).click();await page.getByRole('button',{name:'登录',exact:true}).click();await page.getByRole('button',{name:'继续表示已阅读使用说明'}).click();await page.getByRole('button',{name:'（失败后没有提示）'}).click();await page.getByText('已发现 5 / 5').waitFor();
await go(24);await page.getByRole('button',{name:'结果验证',exact:true}).click();await page.getByText('实际操作，检查规则、状态和结果。').waitFor();
await go(26);await page.getByRole('button',{name:'4 小时 UX 与交互原型 05'}).click();await page.getByText('可操作并可测试的原型').waitFor();
await go(27);const downloadPromise=page.waitForEvent('download');await page.getByRole('button',{name:'下载分析',exact:true}).click();const download=await downloadPromise;if(download.suggestedFilename()!=='Lesson00-产品分析.txt')throw Error('Download');
console.log('Cover morph, all remaining interaction systems and exercise download passed.');await browser.close();
