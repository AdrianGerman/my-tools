import { Clock } from "./components/Clock"
import { InfoTools } from "./components/InfoTools"
import { Tools } from "./components/Tools"

function App() {
  return (
    <main className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-radial-glow">
      <div className="flex flex-col w-full justify-center items-center">
        <h1 className="text-5xl font-edu py-12">
          Welcome, <span className="font-bold">from my tools</span>
        </h1>
        <InfoTools />
        <Clock />
        <Tools />
      </div>
    </main>
  )
}

export default App
