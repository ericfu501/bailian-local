const fs = require('fs');
const path = require('path');

// 从 output.md 读取内容
const inputPath = path.join(__dirname, '../files/formatted_output.md');
let inputContent = fs.readFileSync(inputPath, 'utf-8');

// 删除所有的双美元符号 $$
inputContent = inputContent.replace(/\$\$/g, '');

// 在每行后面添加双反斜线 \\
const lines = inputContent.split('\n').map(line => line + '\\\\');

// 用双 $$ 包裹整体内容
const outputContent = `$$\n${lines.join('\n')}\n$$`;

// 保存到 output.md 文件中
fs.writeFileSync(inputPath, outputContent, 'utf-8');

console.log('Formatted content saved to output.md');
