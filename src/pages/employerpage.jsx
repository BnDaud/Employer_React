import Employer from "../component/employer";
import Addemployer from "../component/addmodal";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const Employerpage = () => {
  const [employers, setEmployers] = useState([
    {
      id: uuidv4(),
      name: "Lawal",
      occupation: "Backend Developer",
      image: "https://i.imgur.com/NgqeSfh.png",
    },
    {
      id: uuidv4(),
      name: "Dela",
      occupation: "Full Stack Developer",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRy0ou7BFvlJ8z0OnllIqotuu53Uajsuamjw&s",
    },

    {
      id: uuidv4(),
      name: "Esther",
      occupation: "Personnal Assistance",
      image:
        "https://i.pinimg.com/236x/52/22/87/522287f70ec07fa601925df2718d2982.jpg",
    },
    {
      id: uuidv4(),
      name: "Tom",
      occupation: "Backend Developer",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBSwz9XEUHoM2qNS5DGdihbZNFLz3cHadAXA&s",
    },
    {
      id: uuidv4(),
      name: "Aang",
      occupation: "Avatar",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbBeNulpbl7PhOW0wiQT3uM0hbpD4pwLKm4Q&s",
    },

    {
      id: uuidv4(),
      name: "Ben 10",
      occupation: "Avengers",
      image:
        "https://ondemand.spectrum.net/static/15a6d8feb20108eb3c44bfbc2b02d756/2fda2/SH012521070000.jpg",
    },
    {
      id: uuidv4(),
      name: "Ronaldo",
      occupation: "Footballer",
      image:
        "https://assets.realmadrid.com/is/image/realmadrid/1330603286208?$Mobile$&fit=wrap&wid=312",
    },
    {
      id: uuidv4(),
      name: "Jerry",
      occupation: "Full Stack Developer",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzNRVknDCVzoku5iSXaV53bU1SeVAAQ0k4rAiykVgphpvYj8H8hjTqc19aKPJBtweJSWc&usqp=CAU",
    },
  ]);
  const [toggleModal, setToggleModal] = useState(false);

  const toggleModal_ = () => {
    setToggleModal(!toggleModal);
    set;
  };
  const addEmployer = (name, occupation, image) => {
    console.log("clicked");
    console.log(employers);

    setEmployers([
      ...employers,
      {
        id: uuidv4(),
        name: name,
        occupation: occupation,
        image: image,
      },
    ]);
    setToggleModal(!toggleModal);
  };
  return (
    <>
      <div className="w-screen h-screen bg-gray-200 pt-4 space-y-5">
        {" "}
        <div className="flex  gap-4 justify-center w-full flex-wrap  ">
          {employers.map((employer) => {
            return (
              <Employer
                id={employer.id}
                name={employer.name}
                occupation={employer.occupation}
                image={employer.image}
              />
            );
          })}
        </div>
        <div className="flex justify-center">
          <div
            className="bg-purple-600 w-36 text-center text-white rounded-3xl px-2 py-0.5 cursor-pointer"
            onClick={() => setToggleModal(!toggleModal)}
          >
            {" "}
            Add Employer
          </div>
        </div>
        {toggleModal ? (
          <Addemployer add={addEmployer} toggleModal_={toggleModal_} />
        ) : null}
      </div>
    </>
  );
};

export default Employerpage;
