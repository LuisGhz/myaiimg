import { Layout } from "antd";
import { Link } from "react-router";
import { useAppStore } from "../store/app/app-store";
import { LogoutOutlined } from "@ant-design/icons";
import { useAppAuth0 } from "../core/hooks/useAppAuth0";

const { Sider } = Layout;

export const AppSider = () => {
  const isMobile = useAppStore((state) => state.isMobile);
  const isCollapsed = useAppStore((state) => state.isSidebarCollapsed);
  const { logout } = useAppAuth0();

  return (
    <Sider
      collapsible
      collapsed={isCollapsed}
      trigger={null}
      className={`${isMobile ? "mobile-sider" : ""} bg-gray-300! dark:bg-gray-950!`}
      style={
        isMobile
          ? {
              position: "absolute",
              zIndex: 100,
              height: "100vh",
            }
          : undefined
      }
      width={250}
      collapsedWidth={0}
    >
      <nav className="flex flex-col justify-between h-full pt-4">
        <ul className="text-app">
          <li>
            <Link
              className="text-app hocusvi:bg-gray-100! dark:hocusvi:bg-gray-900! transc200 block py-2 px-2 wcag-outline"
              to="/generate"
            >
              <span>Generate a new image</span>
            </Link>
          </li>
          <li>
            <Link
              className="text-app hocusvi:bg-gray-100! dark:hocusvi:bg-gray-900! transc200 block py-2 px-2 wcag-outline"
              to="/saved"
            >
              <span>View saved images</span>
            </Link>
          </li>
        </ul>
        <ul>
          <li className="flex justify-end p-4">
            <button
              className="text-app flex items-center gap-2 cursor-pointer hocus:bg-blue-400 wcag-outline transc200 
              hocusvi:bg-gray-100 dark:hocusvi:bg-gray-900 py-2 px-3 rounded"
              type="button"
              onClick={logout}
            >
              <LogoutOutlined className="text-xl" />
              Logout
            </button>
          </li>
        </ul>
      </nav>
    </Sider>
  );
};
