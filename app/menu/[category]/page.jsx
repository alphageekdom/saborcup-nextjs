import HeaderImage from '@/components/common/HeaderImage';
import Category from '@/components/menu/Category';

import { PrismaClient } from '@prisma/client';

const CategoryPage = async ({ params }) => {
  const prisma = new PrismaClient();
  const categories = await prisma.category.findMany();

  const { category: type } = params;

  const category = categories.find((item) => item.type === type);

  return (
    <section>
      <HeaderImage imageUrl={category.image}>
        <h1 className='text-4xl md:text-5xl font-bold mb-3'>{category.name}</h1>
        <p className='text-lg md:text-xl'>{category.description}</p>
      </HeaderImage>
      <div className='container mx-auto p-12'>
        <Category category={category} />
      </div>
    </section>
  );
};

export default CategoryPage;
