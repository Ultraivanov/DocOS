"use client"

import { useState } from "react"

export default function Home() {
  const [config, setConfig] = useState("")
  const [input, setInput] = useState("")
  const [output, setOutput] = useState("")

  const handleRun = async () => {
    const res = await fetch("/api/run", {
      method: "POST",
      body: JSON.stringify({ config, input }),
    })

    const data = await res.json()
    setOutput(data.output)
  }

  return (
    <main className="h-screen grid grid-rows-[1fr_auto] gap-4 p-4">
      <div className="grid grid-cols-2 gap-4">
        
        <textarea
          className="border p-2 h-full"
          placeholder="Write config here..."
          value={config}
          onChange={(e) => setConfig(e.target.value)}
        />

        <pre className="border p-2 overflow-auto">
          {output}
        </pre>

      </div>

      <div className="flex gap-2">
        <input
          className="border p-2 flex-1"
          placeholder="Test input..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />

        <button
          onClick={handleRun}
          className="bg-black text-white px-4"
        >
          Run
        </button>
      </div>
    </main>
  )
}