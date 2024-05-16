import '@/assets/styles/global.css';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { CartProvider } from '@/context/CartContext';
import { Poppins } from 'next/font/google';

const poppins_init = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-poppins',
});

export const metadata = {
  title: 'SaborCup —— Cafe',
  description: 'Hispanic coffee shop',
  keywords: 'cafe, coffee, bakery, hispanic, latino, small business',
};

const MainLayout = ({ children }) => {
  return (
    <CartProvider>
      <html lang='en' className={poppins_init}>
        <body>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </body>
      </html>
    </CartProvider>
  );
};

export default MainLayout;
