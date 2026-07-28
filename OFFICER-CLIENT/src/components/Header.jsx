function Header() {
  return (
    <header className="bg-white shadow-md px-8 py-5">
      <div className="flex justify-between items-center">
        {/* Left Side */}
        <div>
          <h1 className="text-3xl font-bold text-green-700">
            Smart Waste Monitoring System
          </h1>

          <p className="text-gray-500 text-sm mt-1">
            Municipal Corporation - Officer Portal
          </p>
        </div>

        {/* Right Side - Empty for now */}
        <div></div>
      </div>
    </header>
  );
}

export default Header;