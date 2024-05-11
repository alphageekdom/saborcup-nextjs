import Breadcrumbs from '@/components/common/Breadcrumbs';
import HeaderImage from '@/components/HeaderImage';
import menu from '@/menu.json';
import ItemCard from '@/components/FeaturedCard';

const MenuPage = () => {
  const crumbs = [{ title: 'Menu', path: '/menu' }];

  return (
    <section className='bg-white'>
      <HeaderImage
        imageUrl='https://images.unsplash.com/photo-1577392648386-000e77cbc962?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGNvZmZlZSUyMHNob3AlMjBiZXZlcmFnZXN8ZW58MHwwfDB8fHww'
        overlayColor='black'
      >
        <h1 className='text-4xl md:text-5xl font-bold'>Our Menu</h1>
        <p className='text-lg md:text-xl'>
          We have a bit of everything freshly made everyday.
        </p>
      </HeaderImage>
      <div className='container mx-auto p-12'>
        <Breadcrumbs crumbs={crumbs} />
        <h1 className='text-4xl font-bold text-center text-black mb-10'>
          Menu
        </h1>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-11'>
          {menu.map((item) => (
            <ItemCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenuPage;
