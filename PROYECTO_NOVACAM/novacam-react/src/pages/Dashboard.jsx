import "../styles/dashboard.css";

import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import IncomeSection from "../components/IncomeSection";
import StatsSection from "../components/StatsSection";
import WorkplansSection from "../components/WorkplansSection";
import GoalsSection from "../components/GoalsSection";
import AgendaSection from "../components/AgendaSection";

function Dashboard() {
  return (
    <section className="dashboard">

      {/* SIDEBAR */}

      <Sidebar />

      {/* CONTENIDO */}

      <main className="main-content">

        <Topbar />

        <IncomeSection />

        <StatsSection />

        <WorkplansSection />

        <section className="content-grid">

          <GoalsSection />

          <AgendaSection />

        </section>

      </main>

    </section>
  );
}

export default Dashboard;