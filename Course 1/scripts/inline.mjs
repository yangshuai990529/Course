import { readFileSync,writeFileSync,readdirSync } from 'node:fs';
const files=readdirSync('dist/assets');
const js=readFileSync('dist/assets/'+files.find(x=>x.endsWith('.js')),'utf8');
const css=readFileSync('dist/assets/'+files.find(x=>x.endsWith('.css')),'utf8');
const html=`<!doctype html><html lang="zh-CN"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Lesson 00 · 数字产品设计行业认知</title><style>${css}</style></head><body><div id="root"></div><script type="module">${js.replace(/<\/script/gi,'<\\/script')}</script></body></html>`;
writeFileSync('index.html',html);writeFileSync('dist/index.html',html);
console.log('Offline index.html: '+(Buffer.byteLength(html)/1024).toFixed(0)+' KB');
