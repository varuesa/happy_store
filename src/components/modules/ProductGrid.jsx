import ProductCard from "../components/ProductCard";

const ProductGrid = ({ data }) => {
  return (
    <section className="py-4">
      <div className="container">
        <h2>Products</h2>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
          {data.map(item => {
            return (
              <ProductCard key={item.id} product={item} />
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default ProductGrid;