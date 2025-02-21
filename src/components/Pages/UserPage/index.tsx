/* eslint-disable @next/next/no-img-element */
export default function UserPage() {
    return(
        <div className="max-w-4xl mx-auto p-4">
      {/* User Info */}
      <div className="flex items-center space-x-4">
        <img
          src="https://amaz-shiping.com/storage/images/avatar/1729628104_avatar_13.bmp" // Replace with actual image URL
          alt="User Avatar"
          
          className="rounded-full object-cover h-[56px] w-[56px] border"
        />
        <div>
          <p className="font-bold">@nguyenvana</p>
          <p className="text-gray-500 text-sm">nguyenvana@gmail.com</p>
        </div>
      </div>

      {/* Account Summary */}
      <div className="border p-4 rounded-lg shadow mt-4 grid grid-cols-4 text-center">
        <div>
          <p className="italic font-semibold">0</p>
          <p className="text-sm text-gray-600">My Fans</p>
        </div>
        <div>
          <p className="italic font-semibold">0</p>
          <p className="text-sm text-gray-600">Khách hàng hôm nay</p>
        </div>
        <div>
          <p className="italic font-semibold">0.00</p>
          <p className="text-sm text-gray-600">Tiền ký quỹ</p>
        </div>
        <div>
          <p className="italic font-semibold text-gray-700">1,011.40</p>
          <p className="text-sm text-gray-600">Số dư</p>
        </div>
      </div>

      {/* Orders Section */}
      <div className="mt-6">
        <div className="flex justify-between items-center mb-2">
          <h2 className="text-lg font-semibold">Đơn hàng của tôi</h2>
          <a href="#" className="text-blue-600 text-sm">Xem tất cả &gt;</a>
        </div>

        <div className="grid grid-cols-4 gap-4 text-center">
          <div>
            <span className="block text-2xl">📦</span>
            <p className="text-sm text-gray-600">Chờ duyệt</p>
          </div>
          <div>
            <span className="block text-2xl">📦</span>
            <p className="text-sm text-gray-600">Chuẩn bị</p>
          </div>
          <div>
            <span className="block text-2xl">🚚</span>
            <p className="text-sm text-gray-600">Đang giao</p>
          </div>
          <div>
            <span className="block text-2xl">✅</span>
            <p className="text-sm text-gray-600">Thành công</p>
          </div>
        </div>
      </div>
    </div>
    )
}