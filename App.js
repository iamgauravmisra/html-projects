import React,{useState} from "react"
function App(){
  const[guess,setGuess] = useState("")
  const[message,setMessage] = useState("")
  const handleGuess = async()=>{
    const res = await fetch("http://localhost:5000/guess",{
      method:"Post",
      headers:{"content-Type":"application/json"},
      body:JSON.stringify({number:guess})
    })
    const data = await res.json()
    setMessage(data.message)
  }
const resetGame = async()=>{
  await fetch("http://localhost:5000/reset")
  setMessage("New Game Started! Try Again")
    setGuess("")
}

return (
    <div style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      background: "linear-gradient(to right, #74ebd5, #ACB6E5)",
      fontFamily: "Arial, sans-serif"
    }}>
      <div style={{
        background: "white",
        padding: "30px",
        borderRadius: "15px",
        textAlign: "center",
        boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
        width: "350px"
      }}>
        <h2 style={{ color: "#333" }}>🎮 Guess the Number</h2>
        <p style={{ color: "#555" }}>Pick a number between <b>1-100</b></p>

        <input
          type="number"
          value={guess}
          onChange={e => setGuess(e.target.value)}
          placeholder="Enter your guess"
          style={{
            padding: "10px",
            borderRadius: "8px",
            border: "1px solid #ccc",
            width: "80%",
            marginBottom: "10px"
          }}
        />
        <br />

        <button
          onClick={handleGuess}
          style={{
            padding: "10px 20px",
            margin: "5px",
            backgroundColor: "#4CAF50",
            color: "white",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer"
          }}
        >
          Guess
        </button>

        <button
          onClick={resetGame}
          style={{
            padding: "10px 20px",
            margin: "5px",
            backgroundColor: "#FF5722",
            color: "white",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer"
          }}
        >
          Reset
        </button>

        <p style={{ fontSize: "18px", marginTop: "15px", color: "#222" }}>
          {message}
        </p>
      </div>
    </div>
  );
}

export default App;