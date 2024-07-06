import ProductCard from '../ProductCard';

export default function ShopList() {
  return (
    <div>
      <ProductCard id={1} title={'product1'} />
      <ProductCard id={2} title={'product2'} />
      <ProductCard id={3} title={'product3'} />
    </div>
  );
}
