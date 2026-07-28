import { NavLink } from "react-router-dom";

function Sidebar() {
  const menuItems = [
    { name: "Dashboard", path: "/", icon: "📊" },
    { name: "Households", path: "/households", icon: "🏠" },
    { name: "Collection", path: "/collection", icon: "🚛" },
    { name: "Rewards", path: "/rewards", icon: "🎁" },
    { name: "Reports", path: "/reports", icon: "📈" },
    { name: "Officers", path: "/officers", icon: "👮" },
  ];

  return (
    <aside className="w-64 min-h-screen bg-green-800 text-white">

      <div className="p-6 border-b border-green-700">
        <h1 className="text-3xl font-bold">🏛 SWMS</h1>
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
                  ? "bg-green-600 font-semibold"
                  : "hover:bg-green-700"
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