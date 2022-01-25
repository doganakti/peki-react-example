import { useEffect } from "react"

function App() {
  useEffect(() => {
    const script = document.createElement("script")
    script.src = "https://test-api.peki.io/File/ChatBox?appId=61f01bb06a2dd54817603d02"
    script.async = true
    script.crossOrigin = "anonymous"
    document.body.appendChild(script)
    return () => {
      document.body.removeChild(script)
    }
  }, [])

  return <div className="App"></div>
}

export default App