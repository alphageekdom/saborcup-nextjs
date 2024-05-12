const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function main() {
  console.log('Deleting all data from the database...');

  await prisma.event.deleteMany();
  await prisma.category.deleteMany();
  await prisma.items.deleteMany();

  await prisma.$executeRaw`TRUNCATE TABLE "Event", "Category", "Items" RESTART IDENTITY`;

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
