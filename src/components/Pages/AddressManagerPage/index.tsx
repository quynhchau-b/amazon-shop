/* eslint-disable @next/next/no-img-element */
import { useState } from "react";

export default function AddressManagerPage() {
    const [selectedAddress, setSelectedAddress] = useState(0);

    const addresses = [
      {
        name: "Nguyễn Văn Anh",
        address: "Số 33 Cửa Bắc - Hoàn Kiếm - Hà Nội",
        phone: "0123456787",
        default: true,
      },
      {
        name: "Nguyễn Văn An",
        address: "Số 33 Hoàn Kiếm hà nội",
        phone: "02378213123",
        default: false,
      },
    ];
    return(
        <div className="w-full bg-white shadow-md rounded-lg p-4">
      <div className="flex items-center space-x-4 p-4">
        <img
          src="https://placehold.co/50"
          alt="Avatar"
          className="w-12 h-12 rounded-full"
        />
        <div>
          <p className="font-semibold">nguyenvana</p>
          <p className="text-gray-500 text-sm">nguyenvana@gmail.com</p>
        </div>
      </div>
      
      <button className="w-full bg-blue-600 text-white py-2 rounded-md font-bold">
        Danh sách địa chỉ giao hàng
      </button>
      
      <div className="mt-4 space-y-3">
        {addresses.map((addr, index) => (
          <label
            key={index}
            className="flex items-start p-4 border rounded-lg cursor-pointer"
          >
            <input
              type="radio"
              name="address"
              checked={selectedAddress === index}
              onChange={() => setSelectedAddress(index)}
              className="mt-1"
            />
            <div className="ml-3">
              <p className="font-bold">{addr.name}</p>
              <p className="text-gray-600">Địa chỉ: {addr.address}</p>
              <p className="text-gray-600">SDT: {addr.phone}</p>
              {addr.default && (
                <p className="italic text-gray-500">(Địa chỉ mặc định)</p>
              )}
            </div>
          </label>
        ))}
      </div>

      <button className="w-full bg-green-600 text-white py-2 rounded-md mt-4 font-bold">
        Thêm địa chỉ mới
      </button>
    </div>
    )
}