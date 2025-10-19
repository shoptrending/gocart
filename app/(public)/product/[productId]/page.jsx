export const runtime = 'edge';

import ProductDescription from "@/components/ProductDescription";
import ProductDetails from "@/components/ProductDetails";

async function getProduct(productId) {
  // Fetch from your backend or database
  const res = await fetch(`https://api.example.com/products/${productId}`);
  return res.json();
}

export default async function Product({ params }) {
  const productId = params.productId;
  const product = await getProduct(productId);

  return (
    <div className="mx-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-gray-600 text-sm mt-8 mb-5">
          Home / Products / {product?.category}
        </div>

        {product && <ProductDetails product={product} />}
        {product && <ProductDescription product={product} />}
      </div>
    </div>
  );
}
