import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [jokes, setjokes] = useState([]);

  useEffect(() => {
    axios
      .get("/api/jokes")
      .then((response) => {
        setjokes(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  });

  return (
    <div className="flex flex-col justify-center items-center w-screen  gap-10 bg-slate-700">
      <h1 className=" text-7xl text-white  mt-14  border-b-8 border-white p-2">
        Funny {jokes.length} Jokes 🥰👇
      </h1>
      <div>
        {jokes.map((joke) => (
          <div key={joke.id} className="flex flex-col ">
            <h3 className=" w-32 flex justify-center items-center h-14 b text-2xl mb-3 shadow-inner shadow-white bg-yellow-600 rounded-3xl">
              {joke.title}
            </h3>
            <div className="h-20   w-full flex items-center p-5 pl-10 rounded-lg bg-black border-b-2 border-white  text-white shadow-white shadow-2xl  mb-10 text-lg">
              {joke.content}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
