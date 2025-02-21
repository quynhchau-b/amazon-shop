/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import styles from "./lauoutType2.module.css";

export default function LayoutType2({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.headerContent}>
          <div>
            <img
              src="/images/logo/amazon_logo.png"
              className="w-[80px] object-contain"
              alt=""
            />
          </div>
          <div className={styles.headerRight}>
            <Link href={"/user"} className="flex gap-1">
              <span>Nguyen Van Anh</span>
              <img
                width="26"
                height="26"
                src="https://img.icons8.com/forma-regular/24/FFFFFF/user.png"
                alt="user"
              />
            </Link>
            <span className="nav-sprite nav-icon"></span>
          </div>
        </div>
        <div className={styles.headerBody}>
          <div className={styles.inputSearch}>
            <input type="text" />
            <div className={styles.iconSearch}>
              <img
                width="24"
                height="24"
                src="https://img.icons8.com/forma-thin/24/search.png"
                alt="search"
              />
            </div>
          </div>
          <div className={styles.hot}>
            <Link href={"/"}> NFT</Link>
            <Link href={"/"}> Video Games</Link>
            <Link href={"/"}> Toys and Games</Link>
            <Link href={"/"}> Tools & Home</Link>
            <Link href={"/"}> Improvement</Link>
            <Link href={"/"}> Sports and Outdoors</Link>
            <Link href={"/"}> Software</Link>
            <Link href={"/"}> Pet</Link>
            <Link href={"/"}> supplies</Link>
          </div>
        </div>
      </div>
      <main className="">{children}</main>
    </div>
  );
}
