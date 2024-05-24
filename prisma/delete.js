const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function main() {
  console.log('Clearing database...');

  await prisma.cartItem.deleteMany();
  // await prisma.cart.deleteMany();
  await prisma.product.deleteMany();
  await prisma.event.deleteMany();
  await prisma.message.deleteMany();
  await prisma.category.deleteMany();

  console.log('Database cleared.');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
