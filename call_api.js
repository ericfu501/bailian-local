const fs = require('fs');
const OpenAI = require('openai');

// 从 config.json 文件中读取 API Key
const config = JSON.parse(fs.readFileSync('config.json', 'utf-8'));

const openai = new OpenAI({
    apiKey: config.apiKey, // 从配置文件中获取 API Key
    baseURL: "https://dashscope.aliyuncs.com/compatible-mode/v1"
});

// 读取 input.md 文件中的用户提示
const userPrompt = fs.readFileSync('files/input.md', 'utf-8');

// 根据配置文件选择提示模板文件
const promptFile = config.promptFile || 'prompt_v2.md';
let promptTemplate = fs.readFileSync(`prompts/${promptFile}`, 'utf-8');
const completePrompt = promptTemplate.replace('{{ input_psuedo_code }}', userPrompt);

// console.log("prompt template: ", completePrompt, "\n -----------------------------", )
console.log("user prompt: ", userPrompt, "\n --------------------------------------------")

// 转圈加载图标
function startLoading() {
    const spinner = ['|', '/', '-', '\\'];
    let i = 0;
    return setInterval(() => {
        process.stdout.write(`\r *** waiting for model to answer ... ${spinner[i]}`);
        i = (i + 1) % spinner.length;
    }, 100);
}

// 主函数
async function main() {
    const loadingInterval = startLoading();
    try {
        const completion = await openai.chat.completions.create({
            model: "qwen2.5-72b-instruct",  // 模型列表：https://help.aliyun.com/zh/model-studio/getting-started/models
            messages: [
                { role: "system", content: "You are a helpful assistant." },
                { role: "user", content: completePrompt }
            ],
            temperature: 0.7,
            top_p: 0
        });

        clearInterval(loadingInterval);
        process.stdout.write('\r'); // 清除加载图标

        // 将完整的模型输出写入 raw_output.md 文件
        fs.writeFileSync('files/raw_output.json', JSON.stringify(completion), 'utf-8');

        // 提取模型回答的 content 部分并写入 output.md 文件
        const modelResponse = completion.choices[0].message.content;
        fs.writeFileSync('files/output.md', modelResponse, 'utf-8');

        console.log('Model output saved to output.md and raw_output.json');
    } catch (error) {
        clearInterval(loadingInterval);
        process.stdout.write('\r'); // 清除加载图标
        console.error('Error calling Aliyun API:', error);
    }
}

main();
