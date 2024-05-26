import Image from 'next/image';
import Link from 'next/link';

const ShopByCategory = () => {
    return (
        <div className="container py-16">
            <h2 className="text-2xl font-medium text-gray-800 uppercase mb-6">Shop by category</h2>
            <div className="grid grid-cols-3 gap-3">
                <div className="relative rounded-sm overflow-hidden group">
                    <Image src="/assets/images/category/category-1.jpg" alt="category 1" layout="fill" className="w-full" />
                    <Link href="#" >
                        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-xl text-white font-roboto font-medium group-hover:bg-opacity-60 transition">Bedroom</div>
                    </Link>
                </div>
                <div className="relative rounded-sm overflow-hidden group">
                    <Image src="/assets/images/category/category-2.jpg" alt="category 2" layout="fill" className="w-full" />
                    <Link href="#" >
                        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-xl text-white font-roboto font-medium group-hover:bg-opacity-60 transition">Mattress</div>
                    </Link>
                </div>
                <div className="relative rounded-sm overflow-hidden group">
                    <Image src="/assets/images/category/category-3.jpg" alt="category 3" layout="fill" className="w-full" />
                    <Link href="#" >
                        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-xl text-white font-roboto font-medium group-hover:bg-opacity-60 transition">Outdoor</div>
                    </Link>
                </div>
                <div className="relative rounded-sm overflow-hidden group">
                    <Image src="/assets/images/category/category-4.jpg" alt="category 4" layout="fill" className="w-full" />
                    <Link href="#" >
                        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-xl text-white font-roboto font-medium group-hover:bg-opacity-60 transition">Sofa</div>
                    </Link>
                </div>
                <div className="relative rounded-sm overflow-hidden group">
                    <Image src="/assets/images/category/category-5.jpg" alt="category 5" layout="fill" className="w-full" />
                    <Link href="#" >
                        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-xl text-white font-roboto font-medium group-hover:bg-opacity-60 transition">Living Room</div>
                    </Link>
                </div>
                <div className="relative rounded-sm overflow-hidden group">
                    <Image src="/assets/images/category/category-6.jpg" alt="category 6" layout="fill" className="w-full" />
                    <Link href="#" >
                        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-xl text-white font-roboto font-medium group-hover:bg-opacity-60 transition">Kitchen</div>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ShopByCategory;
