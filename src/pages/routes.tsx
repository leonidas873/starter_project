import { createBrowserRouter } from 'react-router-dom';

import Layout from '../components/Layout';
import BlogsPage from './blogsPage';
import CategoriesPage from './categoriesPage';
import ContactPage from './contactPage';
import HomePage from './homePage';
import ReviewsPage from './reviewsPage';
import FaqsPage from './faqsPage';
import AboutUsPage from './aboutUsPage';
import SingleProduct from './singleProductPage'; // Import the SingleProduct component
import ShopPage from './ShopPage';

const router = createBrowserRouter([
  {
    path: '/starter_project',
    element: <Layout />, // Layout as a wrapper
    children: [
      {
        path: '',
        element: <HomePage />, // Home page
      },
      {
        path: 'aboutus',
        element: <AboutUsPage />, // About Us page
      },
      {
        path: 'blogs',
        element: <BlogsPage />, // Blogs page
      },
      {
        path: 'categories',
        element: <CategoriesPage />, // Categories page
      },
      {
        path: 'contact',
        element: <ContactPage />, // Contact page
      },
      {
        path: 'faqs',
        element: <FaqsPage />, // FAQs page
      },
      {
        path: 'reviews',
        element: <ReviewsPage />, // Reviews page
      },

      {
        path: 'shop',
        element: <ShopPage />, // Shop page
      },
      {
        path: 'shop/:productId',
        element: <SingleProduct />, // Shop page
      },
    ],
  },
]);

export default router;
