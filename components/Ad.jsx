import Image from 'next/image';
import Link from 'next/link';

const Advertisement = () => {
    return (
        <div className="container pb-16">
            <Link href="#" >
                <div>
                    <Image src="/assets/images/offer.jpg" alt="ads" className="w-full" width={1000} height={1000} />
                </div>
            </Link>
        </div>
    );
};

export default Advertisement;
