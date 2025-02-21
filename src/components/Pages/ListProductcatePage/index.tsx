/* eslint-disable @next/next/no-img-element */
import ProductItem from "@/components/UI/ProductItem";
import { truncateText } from "@/ultis/slice";
import { useRouter } from "next/navigation";

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
];

export default function ListProductcatePage() {
  const router = useRouter();
  return (
    <div className="p-3">
      <div className="text-[18px] font-bold">Tất cả sản phẩm</div>
      <div className="flex">
        {defaultProduct.map((item, index) => (
          <ProductItem item={item} key={index} />
        ))}
      </div>
    </div>
  );
}
