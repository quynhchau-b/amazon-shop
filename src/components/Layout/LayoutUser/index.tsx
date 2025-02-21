/* eslint-disable @next/next/no-img-element */
import React from "react";
import LayoutType2 from "../LayoutType2";
import {
  FaUserCog,
  FaHistory,
  FaClipboardList,
  FaMapMarkerAlt,
  FaHeadset,
} from "react-icons/fa";
import Button from "@/components/UI/Button";
import Link from "next/link";

const MenuItem = ({
  link,
  icon,
  text,
}: {
  link: string;
  icon: React.ReactNode;
  text: string;
}) => {
  return (
    <li className="flex items-center justify-between p-2 rounded-md hover:bg-gray-100 cursor-pointer">
      <Link href={link} className="flex items-center space-x-2">
        {icon}
        <span>{text}</span>
      </Link>
      <span>&gt;</span>
    </li>
  );
};

export default function LayoutUser({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <LayoutType2>
      <img
        className="h-[200px] object-cover w-full mb-5"
        src="/images/banner/1736852319_Amazon.png"
        alt=""
      />
      <div className="grid grid-cols-1 md:grid-cols-4">
        <div className="col-span-1">
          <div className="max-w-sm mx-auto bg-white shadow-md  p-4 ">
            <h2 className="text-lg font-semibold mb-2">Menu người dùng</h2>
            <div className="w-full border-b border-solid border-[#ccc]"></div>
            <ul className="space-y-2">
              <MenuItem
                link={"/user"}
                icon={<FaUserCog />}
                text="Thông tin cá nhân"
              />
              <MenuItem
                link={"/user"}
                icon={<FaHistory />}
                text="Lịch sử giao dịch"
              />
              <MenuItem
                link="/user/orders"
                icon={<FaClipboardList />}
                text="Quản lý đơn hàng"
              />
              <MenuItem
                link="/user/addressManager"
                icon={<FaMapMarkerAlt />}
                text="Quản lý địa chỉ giao hàng"
              />
              <MenuItem
                link="/user/support"
                icon={<FaHeadset />}
                text="Hỗ trợ khách hàng"
              />
            </ul>
            <Button className="w-full bg-[#ffa500] text-white mt-4">
              Đăng xuất
            </Button>
          </div>
        </div>

        <div className="col-span-1 md:col-span-3 px-1">{children}</div>
      </div>
    </LayoutType2>
  );
}
