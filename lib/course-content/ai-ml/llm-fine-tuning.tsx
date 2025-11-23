export default function LlmFineTuningContent() {
  return (
    <div className="prose prose-lg max-w-none">
      <h2 className="text-3xl font-bold text-gray-800">LLM Fine-Tuning</h2>
      <p className="text-gray-600">
        Fine-tuning Large Language Models (LLMs) adapts pre-trained models to specific tasks or domains.  
        Techniques like instruction tuning, LoRA, and QLoRA enable efficient and targeted improvements in model performance.
      </p>

      {/* INFO BOX */}
      <div className="p-4 border-l-4 border-blue-500 bg-blue-100 rounded">
        <h3 className="font-semibold text-blue-800">Why Fine-Tune LLMs?</h3>
        <p className="text-blue-700">
          Fine-tuning customizes LLMs for specialized tasks, improves accuracy, and reduces resource requirements compared to training from scratch.
        </p>
      </div>

      {/* SECTION 1 */}
      <h3 className="text-2xl font-bold text-gray-800">1. Instruction Tuning</h3>
      <p>
        Instruction tuning trains LLMs to follow specific prompts or instructions, improving usability for real-world applications.
      </p>
      <ul>
        <li>Aligns model outputs with user intent</li>
        <li>Used in chatbots and virtual assistants</li>
      </ul>

      {/* SECTION 2 */}
      <h3 className="text-2xl font-bold text-gray-800">2. LoRA (Low-Rank Adaptation)</h3>
      <p>
        LoRA is a parameter-efficient fine-tuning method that injects small trainable matrices into the model, reducing memory and compute needs.
      </p>
      <ul>
        <li>Efficient adaptation for large models</li>
        <li>Minimal impact on original weights</li>
      </ul>

      {/* SECTION 3 */}
      <h3 className="text-2xl font-bold text-gray-800">3. QLoRA</h3>
      <p>
        QLoRA combines quantization and LoRA for even more efficient fine-tuning, enabling use on consumer hardware.
      </p>
      <ul>
        <li>Quantizes model weights to lower precision</li>
        <li>Reduces memory footprint</li>
      </ul>

      {/* SECTION 4 */}
      <h3 className="text-2xl font-bold text-gray-800">4. Parameter-Efficient Fine-Tuning (PEFT)</h3>
      <p>
        PEFT methods focus on updating only a small subset of model parameters, making fine-tuning scalable and cost-effective.
      </p>
      <ul>
        <li>Adapters, prefix-tuning, and other techniques</li>
        <li>Widely used for domain adaptation</li>
      </ul>

      {/* CODE EXAMPLE */}
      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
        <code>
{`# Example: Fine-tuning with LoRA (Python, Hugging Face PEFT)
from peft import LoraConfig, get_peft_model

config = LoraConfig(r=8, lora_alpha=32, target_modules=["q_proj", "v_proj"])
model = get_peft_model(base_model, config)
model.train()
`}
        </code>
      </pre>

      {/* APPLICATIONS BOX */}
      <div className="p-4 border-l-4 border-green-500 bg-green-100 rounded">
        <h3 className="font-semibold text-green-800">Applications of LLM Fine-Tuning</h3>
        <ul className="text-green-700 list-disc ml-6">
          <li>Domain-specific chatbots</li>
          <li>Legal and medical document analysis</li>
          <li>Custom Q&A systems</li>
          <li>Personalized content generation</li>
        </ul>
      </div>

      {/* SUMMARY */}
      <h3 className="text-2xl font-bold text-gray-800">Summary</h3>
      <p>
        LLM fine-tuning unlocks the full potential of large models for specialized tasks.  
        Mastering these techniques enables rapid adaptation and deployment of advanced AI solutions.
      </p>
    </div>
  );
}