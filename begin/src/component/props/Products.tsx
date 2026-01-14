import ProductCard from './ProductCard';

function Products() {
  const product = {
    name: 'Laptop',
    price: 123.4567,
  };
  return (
    <>
      <ProductCard
        name={product.name}
        price={product.price}
        formatPrice={(p: number) => `$${p.toFixed(2)}`}
      />
    </>
  );
}

export default Products;
