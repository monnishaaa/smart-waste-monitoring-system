function Header() {
  return (
    <header className="bg-white shadow-sm px-8 py-5">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-teal-700">
            Smart Waste Monitoring System
          </h1>

          <p className="text-gray-500 mt-1">
            Municipal Corporation - Admin Portal
          </p>
        </div>

        {/* Right side (reserved for future profile/logout) */}
        <div></div>
      </div>
    </header>
  );
}

export default Header;