import Link from "next/link";

export default function Footer() {
    return(
        <footer className="bg-gray-900 text-gray-300 text-sm mt-10 w-full">
      <div className="bg-gray-800 text-center py-3">
        <a href="#top" className="text-white hover:underline">Back To Top</a>
      </div>
      <div className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-white font-semibold mb-2">Get to Know Us</h3>
          <ul>
            <li><Link href="#" className="hover:underline">About Us</Link></li>
            <li><Link href="#" className="hover:underline">Careers</Link></li>
            <li><Link href="#" className="hover:underline">Press Releases</Link></li>
            <li><Link href="#" className="hover:underline">Amazon Science</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="text-white font-semibold mb-2">Connect with Us</h3>
          <ul>
            <li><Link href="#" className="hover:underline">Facebook</Link></li>
            <li><Link href="#" className="hover:underline">Twitter</Link></li>
            <li><Link href="#" className="hover:underline">Instagram</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="text-white font-semibold mb-2">Make Money with Us</h3>
          <ul>
            <li><Link href="#" className="hover:underline">Sell on Amazon</Link></li>
            <li><Link href="#" className="hover:underline">Sell under Amazon Accelerator</Link></li>
            <li><Link href="#" className="hover:underline">Protect and Build Your Brand</Link></li>
            <li><Link href="#" className="hover:underline">Amazon Global Selling</Link></li>
            <li><Link href="#" className="hover:underline">Become an Affiliate</Link></li>
            <li><Link href="#" className="hover:underline">Fulfillment by Amazon</Link></li>
            <li><Link href="#" className="hover:underline">Advertise Your Products</Link></li>
            <li><Link href="#" className="hover:underline">Amazon Pay on Merchants</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="text-white font-semibold mb-2">Let Us Help You</h3>
          <ul>
            <li><Link href="#" className="hover:underline">COVID-19 and Amazon</Link></li>
            <li><Link href="#" className="hover:underline">Your Account</Link></li>
            <li><Link href="#" className="hover:underline">Returns Centre</Link></li>
            <li><Link href="#" className="hover:underline">Help</Link></li>
            <li><Link href="#" className="hover:underline">100% Purchase Protection</Link></li>
            <li><Link href="#" className="hover:underline">Amazon App Download</Link></li>
          </ul>
        </div>
      </div>
      <div className="bg-gray-800 text-center py-3 text-xs">
        <p>Condition for Use & Sale | Privacy Notice | Your Ads Privacy Choices</p>
        <p>&copy; 1996-2024, Amazon.com, Inc. or its affiliates</p>
      </div>
    </footer>
    )
}