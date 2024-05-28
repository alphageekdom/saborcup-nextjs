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
  title: 'SaborCup',
  description:
    'Welcome to SaborCup in Orange County, where we blend rich Hispanic heritage with exceptional coffee and baked goods. Explore our modern café with a cultural twist, featuring locally-sourced ingredients, vegan options, and monthly events.',
  keywords:
    'SaborCup Coffee Shop, Hispanic Coffee, Orange County Cafes, Vegan Coffee Options, Local Coffee Shop, Café de Olla, Champurrado Frappes',
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
