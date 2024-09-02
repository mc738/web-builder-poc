import './App.css'
import {Button} from "@/components/ui/button.tsx";

function App() {
  return (
      <div>
          <h1 className="text-4xl text-blue-500">
              Hello, World!
          </h1>
          <Button variant={"outline"}>Click me</Button>
      </div>
  )
}

export default App
