import Image from "next/image";
import Link from "next/link";
import { auth } from "@/auth";
import Logout from "./Logout";
const Navbar = async () => {
    const session = await auth()
    // console.log(session);
    return (
        <nav className="bg-gray-800">
            <div className="container flex">
                <div className="px-8 py-4 bg-primary md:flex items-center cursor-pointer relative group hidden">
                    <span className="text-white">
                        <i className="fa-solid fa-bars"></i>
                    </span>
                    <span className="capitalize ml-2 text-white hidden">All Categories</span>

                    <div className="absolute left-0 top-full bg-white shadow-md py-3 divide-y divide-gray-300 divide-dashed opacity-0 group-hover:opacity-100 transition duration-300 invisible group-hover:visible w-[300px]">
                        <Link href="#"
                            className="flex items-center px-6 py-3 hover:bg-gray-100 transition">
                            <Image src="/assets/images/icons/sofa.svg" alt="sofa" width={20} height={20} className="w-5 h-5 object-contain" />
                            <span className="ml-6 text-gray-600 text-sm">Sofa</span>
                        </Link>
                        <Link href="#"
                            className="flex items-center px-6 py-3 hover:bg-gray-100 transition">
                            <Image src="/assets/images/icons/terrace.svg" alt="terrace" width={20} height={20} className="w-5 h-5 object-contain" />
                            <span className="ml-6 text-gray-600 text-sm">Living Room</span>
                        </Link>
                        <Link href="#"
                            className="flex items-center px-6 py-3 hover:bg-gray-100 transition">
                            <Image src="/assets/images/icons/bed.svg" alt="bed" width={20} height={20} className="w-5 h-5 object-contain" />
                            <span className="ml-6 text-gray-600 text-sm">Bedroom</span>
                        </Link>
                        <Link href="#"
                            className="flex items-center px-6 py-3 hover:bg-gray-100 transition">
                            <Image src="/assets/images/icons/office.svg" alt="office" width={20} height={20} className="w-5 h-5 object-contain" />
                            <span className="ml-6 text-gray-600 text-sm">Office</span>
                        </Link>
                        <Link href="#"
                            className="flex items-center px-6 py-3 hover:bg-gray-100 transition">
                            <Image src="/assets/images/icons/outdoor-cafe.svg" alt="outdoor cafe" width={20} height={20} className="w-5 h-5 object-contain" />
                            <span className="ml-6 text-gray-600 text-sm">Outdoor</span>
                        </Link>
                        <Link href="#"
                            className="flex items-center px-6 py-3 hover:bg-gray-100 transition">
                            <Image src="/assets/images/icons/bed-2.svg" alt="mattress" width={20} height={20} className="w-5 h-5 object-contain" />
                            <span className="ml-6 text-gray-600 text-sm">Mattress</span>
                        </Link>
                    </div>
                </div>

                <div className="flex items-center justify-between flex-grow md:pl-12 py-5">
                    <div className="flex items-center space-x-6 capitalize">
                        <Link href="/" className="text-gray-200 hover:text-white transition">Home</Link>
                        <Link href="/" className="text-gray-200 hover:text-white transition">Shop</Link>
                        <Link href="/" className="text-gray-200 hover:text-white transition">About us</Link>
                        <Link href="/" className="text-gray-200 hover:text-white transition">Contact us</Link>

                    </div>
                    {
                        session?.user ? (
                            <div className="text-gray-200 hover:text-white transition">
                                <span className="mx-1"> {session?.user?.name} </span>
                                <span> | </span>
                                <Logout />
                            </div>
                        ) : (
                            <Link href="/login" className="text-gray-200 hover:text-white transition">Login</Link>
                        )
                    }

                </div>
            </div>
        </nav>
    );
};

export default Navbar;
