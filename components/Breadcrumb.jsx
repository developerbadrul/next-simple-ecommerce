import Link from 'next/link';
import React from 'react';

const Breadcrumb = () => {
    return (
        <div className="container py-4 flex items-center gap-3">
            <Link href="../index.html" className="text-primary text-base">
                <i className="fa-solid fa-house"></i>
            </Link>
            <span className="text-sm text-gray-400">
                <i className="fa-solid fa-chevron-right"></i>
            </span>
            <p className="text-gray-600 font-medium">Checkout</p>
        </div>
    );
};

export default Breadcrumb;