import Header from "@/components/control-center/header/Header";
import Sidebar from "@/components/control-center/sidebar/Sidebar";

export default function ControlCenterLayout({
  children,
}: {
  children: React.ReactNode;
}) {
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
