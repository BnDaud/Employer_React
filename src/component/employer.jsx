import { useState } from "react";
import Modal from "./modal";

const Employer = (props) => {
  const [modal, setModal] = useState(false);
  const [details, setDetails] = useState(props);

  const update = (newDetails) => {
    setDetails(newDetails);
    setModal(!modal);
  };
  return (
    <>
      <div
        key={details.id}
        className="w-96 py-8 px-8 space-y-2 bg-white rounded-xl shadow-lg sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:gap-x-6"
      >
        <img
          className="block mx-auto size-[100px]  rounded-full sm:mx-0 sm:shrink-0"
          src={details.image}
          alt="Woman's Face"
        />
        <div className="text-center space-y-2 sm:text-left">
          <div className="space-y-0.5">
            <p className="text-lg text-black font-semibold">{details.name}</p>
            <p className="text-slate-500 font-medium">{details.occupation}</p>
          </div>
          <button className="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">
            View
          </button>{" "}
          <button
            className="px-4 py-1 text-sm text-blue-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-blue-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2"
            onClick={() => {
              setModal(!modal);
            }}
          >
            Edit
          </button>
        </div>
        {modal ? (
          <Modal
            name={details.name}
            occupation={details.occupation}
            image={details.image}
            update={update}
          />
        ) : null}
      </div>
    </>
  );
};

export default Employer;
