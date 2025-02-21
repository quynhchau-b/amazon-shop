/* eslint-disable @next/next/no-img-element */
"use client";

import Head from "next/head";
import Image from "next/image";
import styles from "./index.module.css";
import ShopSection from "@/components/UI/ShopSection";
import ProductList from "@/components/UI/ProductList";
import Footer from "@/components/UI/Footer";
import Link from "next/link";

const dataNFT = {
  title: 'Product NFT',
  hot: true,
  listProduct: [
    {
      productName: 'NFT Pixelmon',
      img: '/images/products/FZHBGnMoubuUMW5qNYSmWEOZBsJRSIo4B0yPRtXK.png',
      price: 129
    },
    {
      productName: 'NFT Pixelmon',
      img: '/images/products/FZHBGnMoubuUMW5qNYSmWEOZBsJRSIo4B0yPRtXK.png',
      price: 129
    },
    {
      productName: 'NFT Pixelmon',
      img: '/images/products/FZHBGnMoubuUMW5qNYSmWEOZBsJRSIo4B0yPRtXK.png',
      price: 129
    },
  ]
}

const dataForYou = {
  title: 'Product for you',
  hot: false,
  listProduct: [
    {
      productName: 'NFT Pixelmon',
      img: '/images/products/FZHBGnMoubuUMW5qNYSmWEOZBsJRSIo4B0yPRtXK.png',
      price: 129
    },
    {
      productName: 'NFT Pixelmon',
      img: '/images/products/FZHBGnMoubuUMW5qNYSmWEOZBsJRSIo4B0yPRtXK.png',
      price: 129
    },
    {
      productName: 'NFT Pixelmon',
      img: '/images/products/FZHBGnMoubuUMW5qNYSmWEOZBsJRSIo4B0yPRtXK.png',
      price: 129
    },
  ]
}

export default function HomePage() {
  return (
    <div className="bg-[#fff] min-h-screen flex flex-col items-center text-black">
      <Head>
        <title>Amazon Clone</title>
      </Head>

      {/* Navbar */}
      <nav className="w-full bg-black text-white p-4 flex justify-between items-center h-[60px] py-2">
        <div className="text-xl font-bold">
          <img
            src="/images/logo/amazon_logo.png"
            alt=""
            className="w-[120px] h-[60px]"
          />
        </div>
        <div className="w-[900px] h-[40px] flex">
          <select
            name=""
            id=""
            value={"all"}
            className="h-full bg-[#efefef] rounded-tl rounded-bl text-black"
          >
            <option value="all">All</option>
          </select>
          <input
            type="text"
            placeholder="Search Amazon"
            className="p-2 rounded-md w-full text-black"
          />
          <div className="bg-[#febd68] rounded-tr rounded-br  flex justify-center items-center">
            <img
              width="30"
              height="30"
              className="text-white w-8 h-8 fill-white"
              src="https://img.icons8.com/ios/100/FFFFFF/search--v1.png"
              alt="search--v1"
            />
          </div>
        </div>
        <Link href={'/auth'}>Sign In Now</Link>
      </nav>
      <div className="w-full h-10 flex items-center bg-[#222f3d] text-white pl-[30px] pr-[80px]">
        <div>
          <img
            width="20"
            height="20"
            src="https://img.icons8.com/ios-filled/50/FFFFFF/menu--v6.png"
            alt="menu--v6"
          />
        </div>
        <div className="flex w-full text-[0.9rem] justify-evenly pl-[10px]">
          <div>NFT</div>

          <div>Video Games</div>

          <div>Toys and Games</div>

          <div>Tools & Home Improvement</div>

          <div>Sports and Outdoors</div>

          <div>Software</div>

          <div>Pet supplies</div>
        </div>
      </div>

      <div className="max-w-[1320px]">
        <div className={`${styles.banner} ${styles.bgHero}`}>
          <p className={styles.title}>
            You are on amazon.com. You can also shop on Amazon India for
            millions of products with fast local delivery. Click hear to go
            amazon
          </p>
        </div>

        {/* Categories */}
        {/* <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-6">
          {categories.map((category) => (
            <div
              key={category.title}
              className="bg-white p-4 rounded shadow-md hover:shadow-lg transition"
            >
              <h2 className="text-xl font-semibold mb-2">{category.title}</h2>
              <Image
                src={category.image}
                alt={category.title}
                width={300}
                height={200}
                className="rounded"
              />
            </div>
          ))}
        </div> */}
        <ShopSection />

        <div className={`${styles.banner} ${styles.bgAz}`}>
        
        </div>

        <ProductList data={dataNFT} />
        <ProductList data={dataForYou} />
        <div>

        </div>
      </div>

      <Footer />
    </div>
  );
}
