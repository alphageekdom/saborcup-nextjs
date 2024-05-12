const { PrismaClient } = require('@prisma/client');
const fs = require('fs');

const prisma = new PrismaClient();

// Read the data from 'events.json'
const events = JSON.parse(fs.readFileSync('./events.json', 'utf8'));
const categories = JSON.parse(fs.readFileSync('./menu.json', 'utf8'));
const items = JSON.parse(fs.readFileSync('./beverages.json', 'utf8'));

async function main() {
  console.log('Seeding events...');

  for (const event of events) {
    await prisma.event.create({
      data: {
        title: event.title,
        description: event.description,
        summary: event.summary,
        importance: event.importance,
        cost: parseFloat(event.cost), // Ensure cost is a float
        host: event.host,
        image: event.image,
        startDate: new Date(event.startDate), // Convert to Date
        endDate: new Date(event.endDate), // Convert to Date
        isPast: event.isPast,
      },
    });
  }

  for (const category of categories) {
    await prisma.category.create({
      data: {
        name: category.name,
        type: category.type,
        description: category.description,
        isFeatured: category.isFeatured,
        image: category.image,
      },
    });
  }

  // Seed data for menu items
  for (const item of items) {
    await prisma.item.create({
      data: {
        name: item.name,
        type: item.type,
        availability: item.availability,
        description: item.description,
        isFeatured: item.isFeatured,
        isSeasonal: item.isSeasonal,
        images: { set: item.images },
        prices: item.prices,
        sizes: { set: item.sizes },
      },
    });
  }

  console.log('Seeding completed.');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
