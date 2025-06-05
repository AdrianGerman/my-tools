export const Tools = () => {
  const tools = [
    { name: "Calculadora", color: "bg-red-700" },
    { name: "Conversor de divisas", color: "bg-blue-700" },
    { name: "Temporizador", color: "bg-green-700" },
    { name: "Notas", color: "bg-yellow-700" }
  ]

  return (
    <section className="grid grid-cols-2 md:grid-cols-3 gap-6 font-inter py-12 px-4">
      {tools.map((tool, index) => (
        <div
          key={index}
          className={`w-full aspect-square rounded-2xl shadow-lg text-white flex items-center justify-center p-4 text-center break-words hover:opacity-60 transition-all duration-200 cursor-pointer ${tool.color}`}
        >
          <h2 className="text-sm font-semibold">{tool.name}</h2>
        </div>
      ))}
    </section>
  )
}
