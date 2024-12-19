// 将原始伪代码中公式的部分用 $ 或 $$ 标注

const fs = require('fs');
const path = require('path');

const useDoubleDollar = true; // 设置为 true 使用 $$，设置为 false 使用 $

function addDollarSign(input) {
  const lines = input.split('\n');
  const dollarSign = useDoubleDollar ? '$$' : '$'; // 根据配置选择符号
  const latexPattern = /[\\{}^_]/; // 匹配 LaTeX 代码中常见的符号

  const result = lines.map(line => {
    if (latexPattern.test(line)) {
      const commentIndex = line.indexOf('//');
      if (commentIndex !== -1) {
        return `${dollarSign}${line.substring(0, commentIndex)}${dollarSign}${line.substring(commentIndex)}`.replace('${', '\\${');
      } else {
        return `${dollarSign}${line}${dollarSign}`.replace('${', '\\${');
      }
    }
    return line;
  });

  return result.join('\n');
}

// 从 files/input.md 读取内容
const inputPath = path.join(__dirname, '../files/input.md');
const inputContent = fs.readFileSync(inputPath, 'utf-8');

// 执行原始的代码逻辑
const outputContent = addDollarSign(inputContent);

// 保存到原文件中
fs.writeFileSync(inputPath, outputContent, 'utf8');

console.log('Formatted content saved to input.md');
