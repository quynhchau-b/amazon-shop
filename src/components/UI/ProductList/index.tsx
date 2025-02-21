import Link from "next/link";
import styles from "./productList.module.css";

type IData = {
  productName: string;
  img: string;
  price: number;
};

type IProps = {
  title: string;
  hot: boolean;
  listProduct: IData[];
};

export default function ProductList({ data }: { data: IProps }) {
  return (
    <div className="w-full">
      <div className="w-full mt-[30px] box-border">
        <h4>
          <strong className="text-[24px]">{data.title}</strong>
          {data.hot && <span className="text-base text-[#ff0000]">HOT</span>}
        </h4>
      </div>
      <div className="mt-5 flex gap-[5px]">
        {data.listProduct.map((item, index) => {
          return (
            <Link href={"/detail"} className={styles.box} key={index}>
              <div className={styles.boxContain}>
                <h5 className={styles.title}>{item.productName}</h5>
                <div
                  className={styles.boxImage}
                  style={{
                    backgroundImage: `url(${item.img})`,
                  }}
                ></div>
                <div className={styles.price}>${item.price}</div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
