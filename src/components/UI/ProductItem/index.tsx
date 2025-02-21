import { truncateText } from "@/ultis/slice";
import { useRouter } from "next/navigation";

type IProps = {
    productName: string;
    discount: number;
    store: string;
    sold: number
}

/* eslint-disable @next/next/no-img-element */
export default function ProductItem({item}: {item: IProps}) {
    const router = useRouter()
    return (
        <div
                    className="w-1/2 md:w-1/4 bg-[#e5e5e52e] p-2 relative cursor-pointer m-2"
                    onClick={() => router.push("/detail?id=68&s=18")}
                  >
                    <div className="absolute top-2 right-2 flex items-center">
                      <div className="bg-red-600 text-white text-xs font-bold px-2 py-1 rounded">
                        -${item.discount}% cho bạn
                      </div>
                    </div>
                    <img
                      src="https://amaz-shiping.com/storage/avatars/1x7ARmkTA0iuUIKr3xD1uokvVzlQRc59xCe18urk.jpg"
                      alt="Product Image"
                      className="p-2 object-cover w-full h-[176px]"
                    />
                    <span className="text-red-600 text-sm font-bold flex items-center">
                      <i className="fa-solid fa-store mr-1"></i>
                      {item.store}
                    </span>
                    <div className="text-sm font-semibold mt-1">
                      {truncateText(item.productName, 70)}
                    </div>
                    <div className="flex justify-between items-center mt-2">
                      <div className="flex items-center">
                        <span className="text-gray-400 text-xs line-through mr-1">
                          8$
                        </span>
                        <span className="text-orange-500 text-sm">8$</span>
                      </div>
                      <span className="text-gray-700 text-xs">Đã bán: ${item.sold}</span>
                    </div>
                  </div>
    )
}