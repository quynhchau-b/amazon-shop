/* eslint-disable @next/next/no-img-element */
import ProductItem from "@/components/UI/ProductItem";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from 'swiper/modules';

const defaultProduct = [
  {
    productName:
      "Face Tightener No-Filter Primer, Instant Tightener No-Filter Primer, Skin Tightener Primer Face Makeup, Face Blurring Primer for Face Before Makeup",
    img: "/images/products/1x7ARmkTA0iuUIKr3xD1uokvVzlQRc59xCe18urk.jpg",
    discount: 0,
    sold: 0,
    store: "Dung1234",
  },
  {
    productName:
      "Face Tightener No-Filter Primer, Instant Tightener No-Filter Primer, Skin Tightener Primer Face Makeup, Face Blurring Primer for Face Before Makeup",
    img: "/images/products/1x7ARmkTA0iuUIKr3xD1uokvVzlQRc59xCe18urk.jpg",
    discount: 0,
    sold: 0,
    store: "Dung1234",
  },
  {
    productName:
      "Face Tightener No-Filter Primer, Instant Tightener No-Filter Primer, Skin Tightener Primer Face Makeup, Face Blurring Primer for Face Before Makeup",
    img: "/images/products/1x7ARmkTA0iuUIKr3xD1uokvVzlQRc59xCe18urk.jpg",
    discount: 0,
    sold: 0,
    store: "Dung1234",
  },
  {
    productName:
      "Face Tightener No-Filter Primer, Instant Tightener No-Filter Primer, Skin Tightener Primer Face Makeup, Face Blurring Primer for Face Before Makeup",
    img: "/images/products/1x7ARmkTA0iuUIKr3xD1uokvVzlQRc59xCe18urk.jpg",
    discount: 0,
    sold: 0,
    store: "Dung1234",
  },
];

export default function DetailPage() {
  const router = useRouter();

  const images = [
    "http://amaz-shiping.com/storage/avatars/1x7ARmkTA0iuUIKr3xD1uokvVzlQRc59xCe18urk.jpg",
    "http://amaz-shiping.com/storage/images/hiXObGkVlYhgYC2wHVv38iI3zrKaoMBjaZqxPOKO.jpg",
    "http://amaz-shiping.com/storage/images/ohdojmeb6916p8z7xnPsAFG8bDl0D6cjtnztgiEe.jpg",
    "http://amaz-shiping.com/storage/images/86ZJvGdhfmZOQEGgCvfuQuJkZQtzZnO5drUVfIPy.jpg",
  ];
  return (
    <div>
      <div className="grid grid-cols-4 w-full">
        <div className="col-span-3">
          <div className="mb-4">
            <h1 className="text-lg font-bold text-blue-700">
              Face Tightener No-Filter Primer, Instant Tightener No-Filter
              Primer, Skin Tightener Primer Face Makeup, Face Blurring Primer
              for Face Before Makeup
            </h1>
            <div className="flex items-center text-sm text-blue-700 mt-1">
              <span>5.0</span>
              <div className="flex text-orange-400 ml-2">
                {[...Array(5)].map((_, index) => (
                  <i key={index} className="fa-solid fa-star opacity-50"></i>
                ))}
              </div>
              <span className="text-gray-700 ml-2">(0)</span>
            </div>
          </div>

 {/* Image Carousel */}
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            loop={true}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination, Navigation]}
            navigation={true}
            className="mySwiper w-full h-[500px]"
            autoplay
            speed={3000}
          >
            {images.map((src, index) => (
              <SwiperSlide key={index}>
                <div
                  key={index}
                  className="w-full h-full bg-contain bg-center bg-no-repeat"
                  style={{ backgroundImage: `url(${src})` }}
                ></div>
              </SwiperSlide>
            ))}
          </Swiper>

         

          {/* Product Details */}
          <section className="mt-6">
            <h2 className="text-xl font-semibold">Thông tin chi tiết</h2>
            <p className="mt-2 text-gray-700 text-[14px]">
              【Face Tightener No-Filter Primer】Face Tightener Primer quickly
              tightens, relieves dark circles and sagging skin, and creates a
              flawless looking 【Instant No-Filter Prime】This face tightening
              cream primer filter-free primer temporarily reduces the appearance
              of fine lines, pores and imperfections, creating a foundation for
              your makeup 【Excellent Texture】Light texture, easy to push away
              and good ductility when applying, will not bring heavy burden to
              the skin 【Multi-functional Makeup】Face Tightener Cream tightens
              pores, fades fine lines, and makes your complexion smooth and
              silky 【Universal Applicability】Suitable for all types of skin,
              quickly film or be absorbed after application, non-sticky, does
              not affect the subsequent makeup or layered with other makeup
            </p>
          </section>

          <section className="mt-6">
            <h2 className="text-xl font-semibold">Đánh giá sản phẩm</h2>
            <p className="text-center text-gray-600 mt-2">Chưa có đánh giá</p>
          </section>

          {/* Related Products */}
          <section className="mt-6">
            <h2 className="text-xl font-semibold">Sản phẩm khác</h2>
            <div className="flex overflow-x-auto space-x-4 mt-2">
              {defaultProduct.map((item, index) => (
                <div key={index} className="!w-[200px] p-2 border rounded-md">
                  <img
                    src="/images/products/kjK07uXuFia5zgjLDQn531EfFt2a5mDYdBB43BYH.jpg"
                    alt="Product"
                    width={150}
                    height={150}
                    className="w-full h-[176px] object-cover"
                  />
                  <p className="text-sm mt-2 font-semibold text-gray-800">
                    Product Name Here
                  </p>
                  <div className="flex justify-between items-center mt-1">
                    <span className="text-xs text-gray-400 line-through">
                      $15
                    </span>
                    <span className="text-sm text-orange-500 font-semibold">
                      $15
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="mt-6">
            <h2 className="text-xl font-semibold">Cửa hàng sản phẩm</h2>
            <div className="border-t mt-4 pt-4">
              <img
                src="https://amaz-shiping.com/storage/images/cccd/1732692296_0_185.jpg"
                alt="Store Banner"
                width={300}
                height={100}
                className="w-full h-24 object-cover"
              />
              <div
                className="flex items-center mt-2 cursor-pointer p-2 border rounded-md"
                onClick={() => router.push("/storeHome?id=127")}
              >
                <img
                  src="https://amaz-shiping.com/storage/images/avatar/1732692296_avatar_185.jpg"
                  alt="Store Avatar"
                  width={32}
                  height={32}
                  className="w-8 h-8 object-cover rounded-full"
                />
                <span className="ml-2">Cửa hàng Phuong240895</span>
              </div>
            </div>
          </section>

          <div className="mt-10 border-b border-solid border-[#ccc]">
            <div className="text-[18px] font-bold">Sản phẩm trending</div>
            <div className="flex">
              {defaultProduct.map((item, index) => (
                <ProductItem item={item} key={index} />
              ))}
            </div>
          </div>

          <div className="mt-10 border-b border-solid border-[#ccc]">
            <div className="text-[18px] font-bold">Sản phẩm hot</div>
            <div className="flex">
              {defaultProduct.map((item, index) => (
                <ProductItem item={item} key={index} />
              ))}
            </div>
          </div>
        </div>
        <div className="sticky top-0 shadow-lg rounded-lg p-5 bg-white">
          <section>
            <div className="flex justify-center">
              <img
                src="https://s.alicdn.com/@img/imgextra/i4/O1CN01NHT8pu1UCLYzeRbta_!!6000000002481-2-tps-315-39.png"
                alt="Product Banner"
                width={315}
                height={39}
              />
            </div>
            <hr className="my-3 border-gray-300" />

            <div>
              <div className="text-lg font-bold">Price for product:</div>
              <div className="text-2xl">
                <span className="line-through text-gray-500 text-xl">$8</span>{" "}
                <span className="text-orange-500">$8</span>
              </div>
              <hr className="my-3 border-gray-300" />
              <div className="text-sm">
                <div className="text-base font-bold">Stock Information:</div>
                <span className="text-green-500 text-sm">
                  100 number in stock
                </span>
                <span className="text-orange-500 text-sm">Sold 0 item</span>
              </div>
            </div>

            <div className="mt-5 font-semibold">Shipping</div>
            <div className="p-2 border rounded-md border-gray-300 mt-2">
              <div className="flex items-center">
                <strong className="mr-2">Standard</strong> |
                <img
                  src="https://s.alicdn.com/@img/imgextra/i4/O1CN01Ak958l1VkzC8exN6O_!!6000000002692-2-tps-429-69.png"
                  alt="Shipping Icon"
                  width={100}
                  height={20}
                  className="ml-2"
                />
              </div>
              <p className="text-sm">
                Shipping fee:{" "}
                <span className="text-green-500">Free by voucher</span>
              </p>
              <p className="text-sm">
                Time shipping: <span className="text-blue-500">3-5 days</span>
              </p>
            </div>
          </section>

          <div className="mt-5 font-semibold flex items-center">
            Protections for{" "}
            <img
              src="https://img.alicdn.com/imgextra/i4/O1CN01Q0xzSC295NmdNInyE_!!6000000008016-2-tps-479-58.png"
              alt="Alibaba Protection"
              width={100}
              height={20}
              className="ml-2"
            />
          </div>

          <div className="mt-2 text-green-500 font-medium">
            Guaranteed delivery via
          </div>
          <p className="text-sm">
            Expect your order to be delivered before scheduled dates or receive
            a 10% delay compensation
          </p>

          <div className="mt-2 text-green-500 font-medium">Secure payments</div>
          <p className="text-sm">
            Every payment you make on Alibaba.com is secured with strict SSL
            encryption and PCI DSS data protection protocols
          </p>

          <div className="mt-2 text-green-500 font-medium">
            Standard refund policy
          </div>
          <p className="text-sm">
            Claim a refund if your order doesn&apos;t ship, is missing, or
            arrives with product issues
          </p>

          <div className="flex justify-center mt-6">
            <button className="bg-orange-500 text-white text-lg font-bold py-2 px-5 rounded-full w-1/2">
              Order now
            </button>
          </div>

          <section className="mt-5">
            <div className="font-semibold">Alibaba Protection</div>
            <p className="text-sm">
              Alibaba.com protects all your orders placed and paid on the
              platform with
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
