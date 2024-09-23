import { useState } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:4200/bajaj", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ data }),
      });

      const result = await response.json();
      console.log("Response from server:", result);
    } catch (error) {
      console.error("Error sending data:", error);
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
<<<<<<< HEAD
=======
          placeholder="Enter the data here"
>>>>>>> 941fa69 (Reinitializing repository after accidental deletion)
          value={data}
          onChange={(e) => {
            setData(e.target.value);
          }}
        />
<<<<<<< HEAD
=======
        <input type="text" placeholder />
>>>>>>> 941fa69 (Reinitializing repository after accidental deletion)
        <button type="submit">Send</button>
      </form>
    </>
  );
}

export default App;
