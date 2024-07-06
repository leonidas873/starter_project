import { useNavigate } from 'react-router-dom';

interface IProps {
  id: number;
  title: string;
}

export default function ProductCard({ id, title }: IProps) {
  const navigate = useNavigate();
  const handleNavigation = () => {
    navigate('/shop/' + id);
  };

  return (
    <div onClick={handleNavigation} className="bg-red-200">
      this is product Card
      <ul>
        <li>id: {id}</li>
        <li>title: {title}</li>
      </ul>
    </div>
  );
}
