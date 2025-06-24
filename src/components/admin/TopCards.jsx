const TopCards = () => {
  const cards = [
    { title: "Today's Money", value: "$53,000", percent: "+5%", color: "blue" },
    { title: "Today's Users", value: "2,300", percent: "+3%", color: "green" },
    { title: "New Clients", value: "+3,462", percent: "-2%", color: "red" },
    { title: "Sales", value: "$103,430", percent: "+5%", color: "purple" },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {cards.map((card, i) => (
        <div key={i} className="bg-white rounded-2xl shadow p-5">
          <p className="text-gray-500 text-sm">{card.title}</p>
          <div className="flex justify-between items-end mt-2">
            <h2 className="text-2xl font-bold text-gray-800">{card.value}</h2>
            <span
              className={`text-sm ${
                card.percent.startsWith("+") ? "text-green-500" : "text-red-500"
              }`}
            >
              {card.percent}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TopCards;
