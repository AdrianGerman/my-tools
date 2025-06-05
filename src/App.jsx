import { InfoTools } from "./components/InfoTools"

function App() {
  return (
    <main className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-radial-glow">
      <div className="flex flex-col w-full justify-center items-center">
        <h1 className="text-5xl font-edu py-12">
          Hello, <span className="font-bold">from my app</span>
        </h1>
        <InfoTools />
      </div>
    </main>
  )
}

export default App
