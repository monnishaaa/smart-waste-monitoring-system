function CollectionCard({ title, value, icon, color }) {
  return (
    <div className="bg-white rounded-xl shadow-md p-5 hover:shadow-lg transition">

      <div className="text-4xl mb-3 text-center">
        {icon}
      </div>

      <h3 className="text-gray-600 text-center font-medium">
        {title}
      </h3>

      <h1 className={`text-3xl font-bold text-center mt-3 ${color}`}>
        {value}
      </h1>

    </div>
  );
}

export default CollectionCard;