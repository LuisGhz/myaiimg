import { useAppAuth0 } from "./core/hooks/useAppAuth0";
import { Typography, Button, Layout } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import { AppSider } from "./components/AppSider";
import { useAppStore } from "./store/app/app-store";
import { useEffect } from "react";
import { Outlet } from "react-router";

const { Title } = Typography;
const { Header, Content } = Layout;

type AuthAppProps = {
  children: React.ReactNode;
};

const AuthApp = ({ children }: AuthAppProps) => {
  const { isLoading, isAuthenticated } = useAppAuth0();

  if (isLoading) return "Loading...";
  if (!isAuthenticated) return null;

  return <>{children}</>;
};

function App() {
  const isMobile = useAppStore((state) => state.isMobile);
  const isSidebarCollapsed = useAppStore((state) => state.isSidebarCollapsed);
  const setIsMobile = useAppStore((state) => state.setIsMobile);
  const collapse = useAppStore((state) => state.collapse);
  const expand = useAppStore((state) => state.expand);

  const mobileBreakpoint = 991;

  useEffect(() => {
    const checkMobile = () => {
      const isMobile = window.innerWidth < mobileBreakpoint;
      setIsMobile(isMobile);
      if (isMobile) collapse();
      else expand();
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const toggleSider = () => {
    if (isSidebarCollapsed) {
      expand();
    } else {
      collapse();
    }
  };

  const handleBackdropClick = () => {
    if (isMobile) collapse();
  };

  return (
    <Layout style={{ minHeight: "100vh" }}>
      {isMobile && !isSidebarCollapsed && (
        <div className="backdrop" onClick={handleBackdropClick} />
      )}
      <AppSider />
      <Layout style={{ marginLeft: isMobile ? 0 : isSidebarCollapsed ? 80 : 250 }}>
        <Header className="bg-app">
          {(isSidebarCollapsed || isMobile) && (
            <Button
              type="text"
              icon={<MenuOutlined />}
              onClick={toggleSider}
              style={{
                fontSize: "16px",
                width: 48,
                height: 48,
              }}
            />
          )}
          <Title className="text-app" level={3} style={{ margin: 0 }}>
            MyAIImg
          </Title>
        </Header>

        <Content className="bg-app">
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
}

export default function AppWrapper() {
  return (
    <AuthApp>
      <App />
    </AuthApp>
  );
}
