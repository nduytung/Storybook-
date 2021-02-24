const NewNote = (props) => {
  let { changeDisplayNote } = props;
  return (
    <div>
      <div
        className="h-screen w-full bg-gray-200 opacity-50 absolute"
        onClick={changeDisplayNote}
      ></div>
      <div className="bg-white rounded-xl mx-2  my-5 absolute py-5 px-2 shadow-xl">
        <p className="text-2xl text-gray-700 px-1">New activity here bae</p>
        <hr className="my-4" />
        <form action="submit">
          <input
            type="text"
            placeholder="Date"
            className="border border-gray-200 rounded-lg leading-14 w-full px-4 my-3"
          />
          <input
            type="text"
            placeholder="Header"
            className="border border-gray-200 rounded-lg leading-14 w-full px-4 my-3"
          />
          <input
            type="text"
            placeholder="Detail"
            className="border border-gray-200 rounded-lg leading-14 w-full px-4 my-3"
          />
          <hr className="my-4" />
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className=" border border-blue-400 rounded-full py-2 text-xl px-8 my-4 text-blue-400"
            >
              Okayyy
            </button>
            <a onClick={changeDisplayNote} className="text-xl text-gray-500">
              Cancel
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewNote;
