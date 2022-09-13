import Link from "next/link";
export function Header() {
  return (
    <>
      {/* Fixed header */}
      <div className="bg-white shadow-sm fixed top-0 left-0 right-0 z-[1020]">
        <div className="container mx-auto ">
          {/* Large nav */}
          <nav className="h-[60px] flex justify-center items-center">
            <Link href="/">
              <a className="px-4 hover:underline hover:text-main">About Us</a>
            </Link>
            <Link href="/">
              <a className="px-4 hover:underline hover:text-main">Questions</a>
            </Link>
            <Link href="/">
              <a className="px-4 hover:underline hover:text-main">Support</a>
            </Link>
            <Link href="/">
              <a className="px-4 hover:underline hover:text-main">Sign In</a>
            </Link>
          </nav>

          {/* end of large nav */}
          {/* Mobile nav */}

          {/* end of mobile nav */}
        </div>
      </div>
      {/* end of fixed header */}
      {/* Margin bottom */}
      <div className="w-full mb-[60px]"></div>
      {/* end of margin bottom */}
    </>
  );
}
