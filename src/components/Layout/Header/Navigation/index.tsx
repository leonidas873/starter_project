import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav>
      <ul className="flex gap-5">
        <li>
          <Link to="/starter_project">Home</Link>
        </li>
        <li>
          <Link to="/starter_project/aboutus">About Us</Link>
        </li>
        <li>
          <Link to="/starter_project/blogs">Blogs</Link>
        </li>
        <li>
          <Link to="/starter_project/categories">Categories</Link>
        </li>
        <li>
          <Link to="/starter_project/contact">Contact</Link>
        </li>
        <li>
          <Link to="/starter_project/faqs">FAQs</Link>
        </li>
        <li>
          <Link to="/starter_project/reviews">Reviews</Link>
        </li>
        <li>
          <Link to="/starter_project/shop">Shop</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
