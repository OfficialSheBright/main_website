export default function GenerativeAiFoundationsContent() {
  return (
    <div className="prose prose-lg max-w-none">
      <h2 className="text-3xl font-bold text-gray-800">Generative AI Foundations</h2>
      <p className="text-gray-600">
        Generative AI focuses on creating new data, such as images, text, or audio, that resembles real-world examples.  
        These models learn the underlying patterns of data and can generate realistic outputs, powering applications like image synthesis, text generation, and more.
      </p>

      {/* INFO BOX */}
      <div className="p-4 border-l-4 border-blue-500 bg-blue-100 rounded">
        <h3 className="font-semibold text-blue-800">Why Generative AI?</h3>
        <p className="text-blue-700">
          Generative models enable creative applications, data augmentation, and simulation, and are foundational for modern AI advancements.
        </p>
      </div>

      {/* SECTION 1 */}
      <h3 className="text-2xl font-bold text-gray-800">1. What is Generative Modeling?</h3>
      <p>
        Generative modeling is the process of learning the distribution of data so that new, similar samples can be created.  
        Unlike discriminative models, which classify or predict, generative models produce new data.
      </p>

      {/* SECTION 2 */}
      <h3 className="text-2xl font-bold text-gray-800">2. Autoencoders</h3>
      <p>
        Autoencoders are neural networks that learn to compress and reconstruct data.  
        They are used for dimensionality reduction, denoising, and as building blocks for generative models.
      </p>
      <ul>
        <li>Encoder compresses input</li>
        <li>Decoder reconstructs output</li>
        <li>Latent space representation</li>
      </ul>

      {/* SECTION 3 */}
      <h3 className="text-2xl font-bold text-gray-800">3. GANs (Generative Adversarial Networks)</h3>
      <p>
        GANs consist of two networks: a generator and a discriminator.  
        The generator creates fake data, while the discriminator tries to distinguish real from fake.  
        Training both together leads to highly realistic outputs.
      </p>
      <ul>
        <li>DCGAN: Deep Convolutional GAN for images</li>
        <li>StyleGAN: High-quality image synthesis</li>
      </ul>

      {/* SECTION 4 */}
      <h3 className="text-2xl font-bold text-gray-800">4. Diffusion Models</h3>
      <p>
        Diffusion models generate data by gradually transforming noise into structured outputs.  
        They are state-of-the-art for high-resolution image synthesis.
      </p>
      <ul>
        <li>Stable Diffusion: Popular open-source diffusion model</li>
        <li>Used for text-to-image generation</li>
      </ul>

      {/* CODE EXAMPLE */}
      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
        <code>
{`# Example: Generating images with a pre-trained GAN (PyTorch)
import torch
from torchvision.utils import save_image

z = torch.randn(16, 100)  # latent vector
generated_images = generator(z)
save_image(generated_images, "output.png")
`}
        </code>
      </pre>

      {/* APPLICATIONS BOX */}
      <div className="p-4 border-l-4 border-green-500 bg-green-100 rounded">
        <h3 className="font-semibold text-green-800">Applications of Generative AI</h3>
        <ul className="text-green-700 list-disc ml-6">
          <li>Image and video synthesis</li>
          <li>Text generation</li>
          <li>Data augmentation</li>
          <li>Art and creative design</li>
          <li>Drug discovery and simulation</li>
        </ul>
      </div>

      {/* SUMMARY */}
      <h3 className="text-2xl font-bold text-gray-800">Summary</h3>
      <p>
        Generative AI is revolutionizing how machines create and interact with data.  
        Mastering these foundations opens doors to advanced applications in creativity, science, and technology.
      </p>
    </div>
  );
}