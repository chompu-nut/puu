import { useState } from "react";
import { books } from "./data";

export default function BookSeller() {
  // สร้าง state เก็บรายการหนังสือทั้งหมด
  const [BookList] = useState(books);

  // สร้าง state สำหรับตัวกรอง (เริ่มต้นที่ bestseller)
  const [filter, setFilter] = useState("bestseller");

  // กรองหนังสือตามค่าตัวกรองที่ถูกเลือก
  const filteredBooks = BookList.filter((book) => {
    if (filter === "bestseller") return book.Bestseller; // ถ้าเลือก Bestseller ให้แสดงเฉพาะหนังสือที่มี Bestseller เป็น true
    if (filter === "flashsale") return book.Flashsale; // ถ้าเลือก Flash Sale ให้แสดงเฉพาะหนังสือที่มี Flashsale เป็น true
    return false; // ถ้าไม่มีตัวกรองที่ตรง ให้คืนค่าเป็น false (ไม่แสดงผลหนังสือ)
  });

  return (
    <>
      {/* ส่วน headter */}
      <div className="banner text-center my-6">
        <h1 className="text-3xl font-sans font-bold">
          ยินดีต้อนรับเข้าสู่ร้านขายหนังสือ
        </h1>
        <hr className="my-4 border-gray-400" />
      </div>
      {/* ปุ่มตัวกรองสำหรับ Bestseller และ Flash Sale */}
      <div className="text-center my-4">
        <button
          onClick={() => setFilter("bestseller")} // ตั้งค่าให้กรองเฉพาะ Bestseller
          className={`px-4 py-2 mr-2 rounded-lg ${
            filter === "bestseller"
              ? "bg-red-600 text-white"
              : "bg-gray-300 text-gray-700"
          }`}
        >
          Bestsellers
        </button>
        <button
          onClick={() => setFilter("flashsale")} // ตั้งค่าให้กรองเฉพาะ Flash Sale
          className={`px-4 py-2 rounded-lg ${
            filter === "flashsale"
              ? "bg-green-600 text-white"
              : "bg-gray-300 text-gray-700"
          }`}
        >
          Flash Sale
        </button>
      </div>
{/* ตารางแสดงรายการหนังสือ */}
<div className="overflow-x-auto">
  <table className="min-w-full table-auto border-collapse">
    <thead className="bg-green-500">
      <tr>
        <th className="px-6 py-3 text-left text-white text-xl font-medium">
          ปกหนังสือ
        </th>
        <th className="px-6 py-3 text-left text-white text-xl font-medium">
          ชื่อหนังสือ
        </th>
        <th className="px-6 py-3 text-left text-white text-xl font-medium">
          โปรโมชั่น
        </th>
        <th className="px-6 py-3 text-left text-white text-xl font-medium">
          ราคา
        </th>
        <th className="px-6 py-3 text-left text-white text-xl font-medium">
          ดูรายละเอียด
        </th>
      </tr>
    </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {/* แสดงเฉพาะหนังสือที่ผ่านการกรอง */}
            {filteredBooks.map((item) => (
              <tr key={item.Code} className="bg-white">
                <td className="px-6 py-4 whitespace-nowrap">
                  <a href={`/BookDetail/${item.Code}`}>
                    <img
                      className="object-cover w-24 h-32 rounded-lg shadow-md"
                      src={item.Cover}
                      alt={item.Title}
                    />
                  </a>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <a
                    href={`/BookDetail/${item.Code}`}
                    className="text-md font-semibold tracking-tight text-gray-900"
                  >
                    {item.Title}
                  </a>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {/* แสดงป้ายโปรโมชั่น ถ้าเป็น Bestseller หรือ Flash Sale */}
                  <div className="promotion flex flex-col space-y-2">
                    {item.Bestseller && (
                      <span className="inline-block bg-green-600 text-white px-2 py-1 rounded-lg font-bold">
                        ขายดี!!!
                      </span>
                    )}
                    {item.Flashsale && (
                      <span className="inline-block bg-blue-600 text-white px-2 py-1 rounded-lg font-bold">
                        ลดราคา!!!
                      </span>
                    )}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="text-lg font-bold text-gray-900">
                    {item.Price.toFixed(2)} บาท
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <a
                    href={`/BookDetail/${item.Code}`}
                    className="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-500 dark:hover:bg-blue-600 dark:focus:ring-blue-800"
                  >
                    รายละเอียดเพิ่มเติม
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* ส่วนของฟุตเตอร์ */}
      <div className="banner text-center my-6">
        <hr className="my-4 border-gray-400" />
        <p>
          ขอขอบคุณข้อมูลจาก{" "}
          <a
            href="https://www.naiin.com/"
            className="text-blue-500 hover:underline"
          >
            ร้านหนังสือนายอินทร์ 
          </a>
        </p>
      </div>
    </>
  );
}
