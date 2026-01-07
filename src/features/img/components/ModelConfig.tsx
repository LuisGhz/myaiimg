import { Select } from "antd";
import { useState } from "react";
import { GptOptions } from "./GptOptions";
import { NanoBananaOptions } from "./NanoBananaOptions";

export const ModelConfig = () => {
  const [model, setModel] = useState<string | null>(null);

  return (
    <section className="flex gap-3">
      <Select
        style={{ width: 150 }}
        placeholder="Model"
        value={model}
        onChange={(value) => setModel(value)}
        options={[
          {
            value: "gpt-image-1.5",
            label: "GPT Image 1.5",
          },
          {
            value: "gpt-image-1",
            label: "GPT Image 1",
          },
          {
            value: "gpt-image-1-mini",
            label: "GPT Image 1 mini",
          },
          {
            value: "nano-banana",
            label: "Nano Banana",
          },
          {
            value: "nano-banana-pro",
            label: "Nano Banana Pro",
          },
        ]}
      />
      {model && (model.startsWith("gpt") ? <GptOptions /> : <NanoBananaOptions />)}
    </section>
  );
};
