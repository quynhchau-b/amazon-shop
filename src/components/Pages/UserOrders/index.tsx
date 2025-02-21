const orders = [
  {
    id: 1,
    user: "nguyenvana",
    product: "TEHAUX Retro Phone Handset for Cell Phone",
    price: "$11",
    status: "Chờ duyệt",
    date: "2024-11-21 22:09:57",
    location: "3316 Harrison Street San Francisco, CA 94112",
    image:
      "https://amaz-shiping.com/storage/avatars/9O2nyw7nMLKy4zAsfEEr1Y7gfOjhw0hM1QlO6gVB.jpg",
  },
  {
    id: 2,
    user: "nguyenvana",
    product: '10.26" Apple Carplay Screen for Car',
    price: "$139",
    status: "Đang giao hàng",
    date: "2024-11-21 21:48:31",
    location: "3625 Hiney Road North Las Vegas, NV 89032",
    image:
      "https://amaz-shiping.com/storage/avatars/9O2nyw7nMLKy4zAsfEEr1Y7gfOjhw0hM1QlO6gVB.jpg",
  },
];

/* eslint-disable @next/next/no-img-element */
export default function UserOrders() {
  return (
    <div className="max-w-4xl mx-auto p-4">
      <h2 className="text-lg font-bold mb-4">Danh sách đơn hàng</h2>
      <div className="flex space-x-4 border-b pb-2 mb-4 text-center text-gray-600">
        <span className="flex-1 font-semibold cursor-pointer">Tất cả</span>
        <span className="flex-1 cursor-pointer">Chờ duyệt</span>
        <span className="flex-1 cursor-pointer">Chuẩn bị</span>
        <span className="flex-1 cursor-pointer">Đang giao</span>
        <span className="flex-1 cursor-pointer">Thành công</span>
      </div>
      {orders.map((order) => (
        <div key={order.id} className="bg-white shadow-md p-4 mb-4 rounded-lg">
          <div className="flex items-start">
            <img
              src={order.image}
              width={100}
              height={100}
              alt={order.product}
              className="rounded-md"
            />
            <div className="ml-4 flex-1">
              <h3 className="font-bold text-gray-800">{order.product}</h3>
              <p className="text-orange-500 font-semibold">
                Tổng tiền: {order.price}
              </p>
              <p className="text-gray-600 text-sm">📍 {order.location}</p>
              <p className="text-gray-500 text-sm">🕒 {order.date}</p>
              <a href="#" className="text-blue-500 text-sm font-medium">
                Xem chi tiết
              </a>
            </div>
            <span className="text-sm text-gray-500 ml-2">{order.status}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
