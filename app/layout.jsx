import { Poppins } from 'next/font/google';
import '@/assets/styles/global.css';

import ToasterConfig from '@/components/common/ToasterConfig';

import TopBanner from '@/components/TopBanner';
import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/Footer';
import { CartProvider } from '@/context/CartContext';

const poppins_init = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-poppins',
});

export const metadata = {
  title: 'SaborCup — Cafe',
  description: 'Hispanic coffee shop',
  keywords: 'cafe, coffee, bakery, hispanic, latino, small business',
};

const MainLayout = ({ children }) => {
  return (
    <CartProvider>
      <html lang='en' className={poppins_init}>
        <body>
          <TopBanner />
          <Navbar />
          <main>{children}</main>
          <Footer />
          <ToasterConfig />
        </body>
      </html>
    </CartProvider>
  );
};

export default MainLayout;
