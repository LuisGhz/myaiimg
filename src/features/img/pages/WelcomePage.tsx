import { Typography } from "antd";

const { Title, Paragraph } = Typography;

// Replace this with your actual user object or context
const user = { email: "user@example.com" };

export const WelcomePage = () => {
  return (
    <>
      <div>
        <Title level={2}>Welcome to MyAIImg! 👋</Title>
        <Paragraph>
          Hello, <strong>{user?.email}</strong>! You are now logged in and ready to start using the
          application.
        </Paragraph>
      </div>

      <div>
        <Title level={4}>User Profile</Title>
        <pre
          style={{
            background: "#f5f5f5",
            padding: "16px",
            borderRadius: "8px",
            overflow: "auto",
          }}
        >
          {JSON.stringify(user, null, 2)}
        </pre>
      </div>
    </>
  );
};
