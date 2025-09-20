const Modal = (props) => {
  return (
    <>
      <div className="fixed flex h-screen items-center justify-center inset-0 backdrop-blur-xs bg-gray-400/50">
        <div className="flex flex-col items-center justify-center gap-4  h-2/7 bg-white w-1/3 rounded-xl  shadow-gray-500 shadow-lg p-10 text-center">
          {" "}
          <div className="flex gap-6">
            <label className=""> Full Name</label>{" "}
            <input
              value={props.name}
              className="w-2/3 bg-gray-100 px-2 py-1 rounded-lg "
              placeholder="Vectored Matrix"
            />
          </div>{" "}
          <div className="flex  gap-6">
            <label className=""> Occupation</label>{" "}
            <input
              value={props.occupation}
              className="w-2/3 bg-gray-100 px-2 py-1 rounded-lg "
              placeholder="Full Stack"
            />
          </div>{" "}
          <div className="flex gap-6">
            <label className=""> Image URL</label>{" "}
            <input
              value={props.imageurl}
              className="w-2/3 bg-gray-100 px-2 py-1 rounded-lg "
              placeholder="http://www.google.com"
            />
          </div>
          <div className=" h-9 w-full text-right">
            {" "}
            <button
              className=" px-4 py-1 text-sm text-blue-600 font-semibold rounded-full border border-blue-200 hover:text-white hover:bg-blue-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
              onClick={() => {
                props.update();
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

export default Modal;
