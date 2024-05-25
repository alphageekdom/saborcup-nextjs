import HeaderImage from '@/components/common/HeaderImage';
import Menu from '@/components/Menu';

const MenuPage = () => {
  return (
    <section className='bg-white'>
      <HeaderImage
        imageUrl={
          'https://images.unsplash.com/photo-1577392648386-000e77cbc962?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGNvZmZlZSUyMHNob3AlMjBiZXZlcmFnZXN8ZW58MHwwfDB8fHww'
        }
      >
        <h1 className='text-4xl md:text-5xl font-bold text-white'>Our Menu</h1>
        <p className='text-lg md:text-xl text-white'>
          We have a bit of everything freshly made everyday.
        </p>
      </HeaderImage>
      <div className='container mx-auto p-12'>
        <Menu />
      </div>
    </section>
  );
};

export default MenuPage;
