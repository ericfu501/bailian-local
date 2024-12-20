# 项目名称

本项目是一个使用阿里云 DashScope API 和 Node.js 的示例项目。它展示了如何从文件中读取用户输入，调用大模型 API，并将结果保存到文件中。

## 文件说明

- **call_api.js**: 主脚本，负责读取用户输入，调用阿里云大模型 API，并将结果保存到 `output.md` 和 `raw_output.md`。
- **scripts/add_dollar_sign.js**: 处理伪代码中的公式部分，添加 `$` 或 `$$` 标记。
- **scripts/remove_dollar_sign.js**: （假设存在）用于移除伪代码中的 `$` 或 `$$` 标记。
- **prompts/prompt_v2.md**: 模板文件，包含占位符 `{{ input_suedo_code }}`，用于生成完整的用户提示。
- **files/input.md**: 用户输入文件，包含需要处理的伪代码。
- **files/output.md**: 保存模型返回的内容部分。
- **files/raw_output.md**: 保存模型返回的完整响应。

## 使用说明

1. **设置 API Key**: 确保在环境变量中设置了 `DASHSCOPE_API_KEY`，或者在 `call_api.js` 中直接设置 `apiKey`。

2. **运行脚本**:
   - 执行 `call_api.js` 以调用模型并保存结果：
     ```bash
     node call_api.js
     ```
   - 执行 `add_dollar_sign.js` 以处理 `input.md` 中的伪代码：
     ```bash
     node scripts/add_dollar_sign.js
     ```

3. **查看结果**:
   - 处理后的伪代码将保存回 `files/input.md`。
   - 模型的输出将保存到 `files/output.md` 和 `files/raw_output.md`。

## 注意事项

- 确保在运行脚本前，所有必要的文件路径和 API Key 已正确配置。
- 需要安装 `openai` 和其他必要的 Node.js 模块，可以通过 `npm install` 安装。