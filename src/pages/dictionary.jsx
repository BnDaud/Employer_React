import React, { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";

const Dictionary = () => {
  const navigate = useNavigate();
  const [word, setWord] = useState("");
  const [meaning, setMeaning] = useState("");
  const URL = "https://api.dictionaryapi.dev/api/v2/entries/en/";

  const getMeaning = async () => {
    //console.log(URL);
    try {
      const res = await fetch(URL + word);
      if (!res) {
        throw new Error("Invalid URL");
      }
      const data = await res.json();
      const d1 = data[0];
      const { meanings } = d1;
      const { definitions } = meanings[0];
      const { definition } = definitions[0];
      console.log(definition);
      setMeaning(definition);
    } catch (error) {
      console.error("Error", error);
    }
  };

  return (
    <>
      {meaning ? (
        <div className="bg-gray-300 mt-5">
          {" "}
          The Definition of the word {word} : is {meaning}
        </div>
      ) : (
        ""
      )}
      <div className="h-screen bg-gray-300 flex items-center justify-center">
        <div className="flex items-center size-95 bg-gray-200 px-4 rounded-lg">
          {" "}
          <div className="">
            <div className="flex gap-4 items-center ">
              {" "}
              <p>Word To Search</p>
              <input
                value={word}
                onChange={(e) => {
                  setWord(e.target.value);
                }}
                className="bg-white rounded-lg focus:outline-none px-2 py-1"
              />
            </div>
            <div className="flex justify-center ">
              <div
                onClick={() => getMeaning()}
                className="mt-5 bg-blue-800 w-15 text-center py-1 px-2 rounded-lg cursor-pointer"
              >
                Search
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dictionary;
