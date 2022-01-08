import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav class="flex items-center justify-between flex-wrap bg-red-600 p-2">
      <div class="flex items-center flex-shrink-0 text-white mr-6">
        <Link to="/">
          <img src="./assets/luxuriuslogo.png" alt="logo" class="w-30 h-20" />
        </Link>
      </div>
      <div class="block lg:hidden">
        <button class="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
          <svg
            class="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div class="w-full flex flex-grow lg:flex lg:items-end lg:w-auto lg:flex-col">
        <ul class="m-2 flex  ">
          <li class="mr-4">
            <img
              src="./assets/social/icon-white-yt.png"
              alt="youtube"
              class="w-30 h-30"
            />
          </li>
          <li class="mr-4">
            <img
              src="./assets/social/icon-white-fb.png"
              alt="facebook"
              class="w-30 h-30"
            />
          </li>
          <li class="mr-4">
            <img
              src="./assets/social/icon-white-ig.png"
              alt="instagram"
              class="w-30 h-30"
            />
          </li>
          <li>
            <div class="flex space-x-5">
              <div class="relative">
              <FaShoppingCart class="text-3xl" />
                <div class="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2">
                  <div class="min-w-[.5rem] inline-flex items-center justify-center h-5 text-xl text-white bg-yellow-500 rounded-full px-1">
                    2
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ul>
        <div class="text-sm lg:flex-grow ">
          <Link
            to="/"
            class="block mt-4 lg:inline-block lg:mt-0 text-zinc-50 hover:text-white mr-4 text-base active:border-b-2 hover:border-b-2"
          >
            Home
          </Link>
          <Link
            to="/Nosotros"
            class="block mt-4 lg:inline-block lg:mt-0 text-zinc-50 hover:text-white mr-4 text-base active:border-b-2 hover:border-b-2"
          >
            Nosotros
          </Link>
          <Link
            to="/NuestrosGins"
            class="block mt-4 lg:inline-block lg:mt-0 text-zinc-50 hover:text-white mr-4  text-base active:border-b-2 hover:border-b-2"
          >
            Nuestros Gins
          </Link>
          <Link
            to="/Cocktails"
            class="block mt-4 lg:inline-block lg:mt-0 text-zinc-50 hover:text-white mr-4  text-base active:border-b-2 hover:border-b-2"
          >
            Cocktails
          </Link>
        </div>
        <div></div>
      </div>
    </nav>
  );
};

export default Navbar;
