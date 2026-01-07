import { Select } from "antd";

export const GptOptions = () => {
  return (
    <div className="flex gap-2">
      <Select
        placeholder="Size"
        style={{
          width: 110,
        }}
        options={[
          {
            value: "1024x1024",
            label: "1024x1024",
          },
          {
            value: "1536x1024",
            label: "1536x1024",
          },
          {
            value: "1024x1536",
            label: "1024x1536",
          },
        ]}
      />
      <Select
        placeholder="Quality"
        style={{
          width: 100,
        }}
        options={[
          {
            value: "auto",
            label: "Auto",
          },
          {
            value: "low",
            label: "Low",
          },
          {
            value: "medium",
            label: "Medium",
          },
          {
            value: "high",
            label: "High",
          },
        ]}
      />
      <Select
        placeholder="Style"
        style={{
          width: 100,
        }}
        options={[
          {
            value: "natural",
            label: "Natural",
          },
          {
            value: "vivid",
            label: "Vivid",
          },
        ]}
      />
    </div>
  );
};
