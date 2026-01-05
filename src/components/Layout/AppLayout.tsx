import { useEffect } from "react";
import { Layout, Button, Typography } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import "./AppLayout.css";
import { useAppStore } from "../../store/app/app-store";
import { AppSider } from "../AppSider";

const { Header, Content } = Layout;
const { Title } = Typography;

type Props = {
  children: React.ReactNode;
};

const mobileBreakpoint = 991;

export function AppLayout({ children }: Props) {
  const isMobile = useAppStore((state) => state.isMobile);
  const isSidebarCollapsed = useAppStore((state) => state.isSidebarCollapsed);
  const setIsMobile = useAppStore((state) => state.setIsMobile);
  const collapse = useAppStore((state) => state.collapse);
  const expand = useAppStore((state) => state.expand);

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

        <Content className="bg-app">{children}</Content>
      </Layout>
    </Layout>
  );
}
