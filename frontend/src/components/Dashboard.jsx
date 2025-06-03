import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import DashboardCards from "../components/DashboardCards";

const Dashboard = () => {
  return (
    <div className="flex">
      {/* Sidebar */}
      <div className="hidden md:block">
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="flex-1 ml-0 md:ml-64 p-4">
        <Header />
        <DashboardCards />

        {/* Additional Sections */}
        <div className="mt-10">
          <h2 className="text-xl font-bold mb-4">Recent Activity</h2>
          <div className="bg-white shadow-md rounded-lg p-4">
            <p className="text-sm text-gray-600">No recent activity.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
