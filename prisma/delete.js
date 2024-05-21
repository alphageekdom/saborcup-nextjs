const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function main() {
  console.log('Deleting all data from the database...');

  await prisma.cartItem.deleteMany();
  await prisma.event.deleteMany();
  await prisma.category.deleteMany();
  await prisma.item.deleteMany();
  await prisma.message.deleteMany();

  // await prisma.$executeRaw`TRUNCATE TABLE "Event", "Category", "Item", "Message" RESTART IDENTITY`;

  console.log('Deletion completed.');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
