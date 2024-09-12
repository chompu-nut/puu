import { books } from "./data";
import { useParams } from "@remix-run/react";

export default function BookDetail() {
  const { bookId } = useParams();
  const book = books.find((item) => item.Code === bookId);

  if (!book) {
    return <p>Book not found</p>;
  }

  return (
    <div className="flex justify-center my-6">
      <div className="max-w-4xl bg-white border border-gray-300 rounded-lg shadow-lg">
        <div className="p-6">
          <h1 className="text-3xl font-sans font-bold text-center mb-4 text-green-800">
            รายละเอียดหนังสือ
          </h1>
          <hr className="my-4 border-green-300" />
          <div className="flex flex-col lg:flex-row items-center">
            <img
              src={book.Cover}
              alt={book.Title}
              className="object-cover w-64 h-96 rounded-lg shadow-md"
            />
            <div className="lg:ml-8 mt-6 lg:mt-0 text-gray-800">
              <h2 className="text-2xl font-bold mb-2 text-green-700">
                ชื่อหนังสือ: {book.Title}
              </h2>
              <p className="text-lg mb-4">
                <span className="font-semibold">รายละเอียด: </span>
                {book.Description}
              </p>
              <p className="text-lg mb-4">
                <span className="font-semibold">ราคา: </span>
                {book.Price.toFixed(2)} บาท
              </p>
              <p className="text-lg mb-4">
                <span className="font-semibold">ผู้แต่ง: </span>
                {book.Author}
              </p>
              <p className="text-lg mb-4">
                <span className="font-semibold">สำนักพิมพ์: </span>
                {book.Publishing}
              </p>
              <a
                href="/"
                className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mt-4"
              >
                ย้อนกลับ
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
