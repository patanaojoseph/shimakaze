import ProductsContainer from "@/components/products/ProductsContainer";
import React from "react";

const ProductsPage = ({
  searchParams,
}: {
  searchParams: { layout?: string; search?: string };
}) => {
  const layout = searchParams.layout || "grid";
  const search = searchParams.search || "";
  console.log(searchParams);
  return (
    <div>
      <ProductsContainer layout={layout} search={search} />
    </div>
  );
};

export default ProductsPage;
