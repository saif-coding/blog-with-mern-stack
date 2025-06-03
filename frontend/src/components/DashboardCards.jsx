import { FaUserAlt, FaFileAlt, FaChartLine } from "react-icons/fa";

const DashboardCards = () => {
  const stats = [
    {
      title: "Total Posts",
      value: 120,
      icon: <FaFileAlt size={24} />,
      color: "bg-blue-100 text-blue-600",
    },
    {
      title: "Total Users",
      value: 34,
      icon: <FaUserAlt size={24} />,
      color: "bg-green-100 text-green-600",
    },
    {
      title: "Page Views",
      value: 5678,
      icon: <FaChartLine size={24} />,
      color: "bg-purple-100 text-purple-600",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
      {stats.map((item, index) => (
        <div
          key={index}
          className={`p-5 rounded-lg shadow-md flex items-center gap-4 ${item.color}`}
        >
          <div className="p-3 bg-white rounded-full">{item.icon}</div>
          <div>
            <h3 className="text-lg font-bold">{item.value}</h3>
            <p className="text-sm">{item.title}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DashboardCards;
