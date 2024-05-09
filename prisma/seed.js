const { PrismaClient } = require('@prisma/client');
const fs = require('fs');

const prisma = new PrismaClient();

// Read the data from 'events.json'
const events = JSON.parse(fs.readFileSync('./events.json', 'utf8'));

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
