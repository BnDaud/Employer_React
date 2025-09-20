import { useState } from "react";
import myimage from "./images/lion.jpg";

//import viteLogo from "/vite.svg";
import "./App.css";
import Employer from "./component/employer";

function App() {
  const [employers, setEmployers] = useState([
    {
      name: "Lawal",
      occupation: "Backend Developer",
      image: "https://i.imgur.com/NgqeSfh.png",
    },
    {
      name: "Dela",
      occupation: "Full Stack Developer",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRy0ou7BFvlJ8z0OnllIqotuu53Uajsuamjw&s",
    },

    {
      name: "Esther",
      occupation: "Personnal Assistance",
      image:
        "https://i.pinimg.com/236x/52/22/87/522287f70ec07fa601925df2718d2982.jpg",
    },
    {
      name: "Tom",
      occupation: "Backend Developer",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBSwz9XEUHoM2qNS5DGdihbZNFLz3cHadAXA&s",
    },
    {
      name: "Aang",
      occupation: "Avatar",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbBeNulpbl7PhOW0wiQT3uM0hbpD4pwLKm4Q&s",
    },

    {
      name: "Ben 10",
      occupation: "Avengers",
      image:
        "https://ondemand.spectrum.net/static/15a6d8feb20108eb3c44bfbc2b02d756/2fda2/SH012521070000.jpg",
    },
    {
      name: "Ronaldo",
      occupation: "Footballer",
      image:
        "https://assets.realmadrid.com/is/image/realmadrid/1330603286208?$Mobile$&fit=wrap&wid=312",
    },
    {
      name: "Jerry",
      occupation: "Full Stack Developer",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzNRVknDCVzoku5iSXaV53bU1SeVAAQ0k4rAiykVgphpvYj8H8hjTqc19aKPJBtweJSWc&usqp=CAU",
    },
  ]);

  return (
    <>
      <div className="w-screen h-screen bg-gray-200 pt-4">
        {" "}
        <div className="flex  gap-4 justify-center w-full flex-wrap  ">
          {employers.map((employer) => {
            return (
              <Employer
                name={employer.name}
                occupation={employer.occupation}
                image={employer.image}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}

export default App;
