"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function AuthenticationPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [accountType, setAccountType] = useState("new");
  const router = useRouter()

  return (
    <div className="w-full flex flex-col min-h-screen bg-white text-black">
      {/* Header */}
      <div className="bg-white py-4">
        <Link href={"/"} className="container ml-5 flex justify-start h-[100px]">
          <Image
            src="/images/logo/logo-amazone-6.jpeg"
            alt="Amazon logo"
            width={156}
            objectFit="cover"
            height={85}
          />
        </Link>
      </div>

      {/* Main Content */}
      <div
        className="flex-grow flex flex-col items-center justify-center"
        style={{
          backgroundImage:
            "url(/images/banner/O1CN01ukqrJD1viOwtCxZ8q_!!6000000006206-2-tps-2200-600.avif)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          padding: "12px 14px 28px",
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4">
          <div className="text-white text-center md:text-left mb-8 md:mb-0"></div>
          <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
            <h2 className="text-xl font-bold mb-4">Welcome</h2>
            <form>
              <div className="mb-4">
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    name="account"
                    value="new"
                    checked={accountType === "new"}
                    onChange={() => setAccountType("new")}
                    className="form-radio text-orange-500"
                  />
                  <span className="ml-2">Đăng ký Bạn là người mới?</span>
                </label>
              </div>
              <div className="mb-4">
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    name="account"
                    value="existing"
                    checked={accountType === "existing"}
                    onChange={() => setAccountType("existing")}
                    className="form-radio text-orange-500"
                  />
                  <span className="ml-2">Đăng nhập Đã có tài khoản?</span>
                </label>
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Tên tài khoản</label>
                <input
                  className="w-full px-3 py-2 border rounded"
                  type="text"
                  defaultValue="nguyenvana"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Mật khẩu</label>
                <input
                  className="w-full px-3 py-2 border rounded"
                  type={showPassword ? "text" : "password"}
                  defaultValue="******"
                />
              </div>
              <div className="mb-4">
                <label className="inline-flex items-center">
                  <input
                    type="checkbox"
                    className="form-checkbox"
                    onChange={() => setShowPassword(!showPassword)}
                  />
                  <span className="ml-2">Ẩn / hiện mật khẩu</span>
                </label>
              </div>
              <div>
                <button
                  className="w-full bg-orange-500 text-white py-2 rounded"
                  type="submit"
                  onClick={()=> router.push('/')}
                >
                  Đăng nhập
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-gray-900 text-white py-4">
        <div className="container mx-auto text-center">
          <div className="flex justify-center space-x-4 mb-4">
            <a href="#" className="hover:underline">
              English
            </a>
            <a href="#" className="hover:underline">
              $ USD - U.S. Dollar
            </a>
            <a href="#" className="hover:underline">
              United States
            </a>
          </div>
          <div className="mb-4">
            <a href="#" className="hover:underline">
              Already a customer? Sign in
            </a>
          </div>
          <div className="text-sm space-x-2">
            <a href="#" className="hover:underline">
              Conditions of Use
            </a>
            <a href="#" className="hover:underline">
              Privacy Notice
            </a>
            <a href="#" className="hover:underline">
              Consumer Health Data Privacy Disclosure
            </a>
            <a href="#" className="hover:underline">
              Your Ads Privacy Choices
            </a>
          </div>
          <div className="text-sm mt-4">
            © 1996-2024, Amazon.com, Inc. or its affiliates
          </div>
        </div>
      </div>
    </div>
  );
}
