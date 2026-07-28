import { NavLink } from "react-router-dom";

function Sidebar() {
  const menuItems = [
    { name: "Dashboard", path: "/", icon: "📊" },
    { name: "Households", path: "/households", icon: "🏠" },
    { name: "Officers", path: "/officers", icon: "👮" },
    { name: "Reports", path: "/reports", icon: "📈" },
    { name: "Settings", path: "/settings", icon: "⚙️" },
  ];

  return (
    <aside className="w-64 min-h-screen bg-teal-700 text-white">
      <div className="p-6 border-b border-teal-600">
        <h1 className="text-2xl font-bold"> SWMS Admin</h1>
      </div>

      <nav className="mt-6">
        {menuItems.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            end={item.path === "/"}
            className={({ isActive }) =>
              `flex items-center gap-3 px-6 py-4 transition ${
                isActive
                  ? "bg-teal-800 font-semibold"
                  : "hover:bg-teal-600"
              }`
            }
          >
            <span>{item.icon}</span>
            <span>{item.name}</span>
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}

export default Sidebar;