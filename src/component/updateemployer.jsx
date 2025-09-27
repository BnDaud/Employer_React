import { useState } from "react";

const UpdateModal = (props) => {
  const [edit, setEdit] = useState(props);
  console.log(edit);
  return (
    <>
      <div className="fixed flex h-screen items-center justify-center inset-0 backdrop-blur-xs bg-gray-400/50">
        <div className="flex flex-col items-center justify-center gap-4  h-2/7 bg-white w-1/3 rounded-xl  shadow-gray-500 shadow-lg p-10 text-center">
          {" "}
          <div className="flex gap-6">
            <label className=""> Full Name</label>{" "}
            <input
              value={edit.name}
              className="w-2/3 bg-gray-100 px-2 py-1 rounded-lg "
              placeholder="Vectored Matrix"
              onChange={(e) => {
                setEdit({ ...edit, name: e.target.value });
              }}
            />
          </div>{" "}
          <div className="flex  gap-6">
            <label className=""> Occupation</label>{" "}
            <input
              value={edit.occupation}
              className="w-2/3 bg-gray-100 px-2 py-1 rounded-lg "
              placeholder="Full Stack"
              onChange={(e) => {
                setEdit({ ...edit, occupation: e.target.value });
              }}
            />
          </div>{" "}
          <div className="flex gap-6">
            <label className=""> Image URL</label>{" "}
            <input
              value={edit.image}
              className="w-2/3 bg-gray-100 px-2 py-1 rounded-lg "
              placeholder="http://www.google.com"
              onChange={(e) => {
                setEdit({ ...edit, image: e.target.value });
              }}
            />
          </div>
          <div className=" h-9 w-full text-right">
            {" "}
            <button
              className=" px-4 py-1 text-sm text-blue-600 font-semibold rounded-full border border-blue-200 hover:text-white hover:bg-blue-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
              onClick={() => {
                props.update(edit);
              }}
            >
              Update
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default UpdateModal;
