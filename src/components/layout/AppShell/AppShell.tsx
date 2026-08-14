import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";

type AppShellProps = {
  children: React.ReactNode;
};

export default function AppShell({
  children,
}: AppShellProps) {
  return (
    <div>
      <Header />

      <div>
        <Sidebar />

        <main>
          {children}
        </main>
      </div>
    </div>
  );
}
