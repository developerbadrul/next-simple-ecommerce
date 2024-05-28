import ProductDescriptions from "@/components/ProductDescriptions";
import ProductDetails from "@/components/ProductDetails";
import RelatedProducts from "@/components/RelatedProducts";

const page = () => {
    return (
        <>
            <ProductDetails/>
            <ProductDescriptions/>
            <RelatedProducts/>
        </>
    );
};

export default page;