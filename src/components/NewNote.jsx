import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const submitNote = async (data, hideForm) => {
  console.log(JSON.stringify(data));
  const requestPackage = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  };

  await fetch(`${process.env.NEXT_PUBLIC_API_URL}/newNote`, requestPackage)
    .then(() => toast.success("Nhập thành công !"))
    .catch(() => toast.error("Đã có vấn đề, vui longf thử lại"));

  setTimeout(() => {
    hideForm();
  }, 1500);
};

const NewNote = (props) => {
  let { changeDisplayNote } = props;
  let [data, setData] = useState({
    date: "",
    header: "",
    detail: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setData({ ...data, [name]: value });
  };

  return (
    <div>
      <div
        className="h-screen w-full bg-gray-200 opacity-50 top-0 fixed"
        onClick={changeDisplayNote}
      ></div>
      <div className="bg-white rounded-t-3xl  bottom-0  fixed py-5 px-2 shadow-xl">
        <p className="text-2xl text-gray-700 px-1">Thêm một ghi chú nàoo</p>
        <hr className="my-4" />
        <div>
          <input
            type="text"
            placeholder="Ngày"
            name="date"
            value={data.date}
            onChange={handleChange}
            className="border border-gray-200 rounded-lg leading-14 w-full px-4 my-3 "
          />
          <input
            type="text"
            placeholder="Tiêu đề"
            name="header"
            value={data.header}
            onChange={handleChange}
            className="border border-gray-200 rounded-lg leading-14 w-full px-4 my-3 "
          />
          <input
            type="text"
            placeholder="Ghi chú"
            name="detail"
            value={data.detail}
            onChange={handleChange}
            className="border border-gray-200 rounded-lg leading-14 w-full px-4 my-3 "
          />
          <hr className="my-4" />
          <div className="flex items-center justify-center">
            <button
              type="button"
              onClick={() => submitNote(data, changeDisplayNote)}
              className=" text-xl mr-8 text-blue-400"
            >
              Okayyy
            </button>
            <a onClick={changeDisplayNote} className="text-lg text-gray-500">
              Hủy bỏ
            </a>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default NewNote;
