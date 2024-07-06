import { useParams } from 'react-router-dom';

export default function SingleProduct() {
  const { productId } = useParams();

  return <div>singleProduct {productId}</div>;
}
