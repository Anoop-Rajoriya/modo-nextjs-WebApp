import Dashboard from "@/components/Dashboard";
import Login from "@/components/Login";
import Main from "@/components/Main";

export const metadata = {
  title: "Modo - Dashboard",
};

export default function DashboardPage() {
  const isAuthenticat = true;

  let children = (
    <Main>
      <Login />
    </Main>
  );

  if (isAuthenticat) {
    children = (
      <Main>
        <Dashboard />
      </Main>
    );
  }

  return children;
}
