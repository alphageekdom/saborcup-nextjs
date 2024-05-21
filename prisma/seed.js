const { PrismaClient } = require('@prisma/client');
const fs = require('fs');

const prisma = new PrismaClient();

// Read the data from JSON files
const events = JSON.parse(fs.readFileSync('./events.json', 'utf8'));
const categories = JSON.parse(fs.readFileSync('./menu.json', 'utf8'));
const items = JSON.parse(fs.readFileSync('./beverages.json', 'utf8'));
let cartItems = JSON.parse(fs.readFileSync('./cart.json', 'utf8'));

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

  console.log('Seeding categories...');
  for (const category of categories) {
    await prisma.category.create({
      data: {
        name: category.name,
        type: category.type,
        description: category.description,
        isFeatured: Boolean(category.isFeatured),
        image: category.image,
      },
    });
  }

  console.log('Seeding items...');
  const itemMap = {};
  for (const item of items) {
    const createdItem = await prisma.item.create({
      data: {
        name: item.name,
        type: item.type,
        availability: item.availability,
        description: item.description,
        isFeatured: Boolean(item.isFeatured),
        isSeasonal: Boolean(item.isSeasonal),
        images: { set: item.images },
        prices: item.prices,
        sizes: { set: item.sizes },
      },
    });
    itemMap[item.name] = createdItem.id;
  }

  // Update cartItems with the correct item IDs
  cartItems = cartItems.map((cartItem) => ({
    ...cartItem,
    itemId: itemMap[cartItem.name],
  }));

  console.log('Seeding cart items...');
  for (const cartItem of cartItems) {
    if (cartItem.itemId) {
      await prisma.cartItem.create({
        data: {
          type: cartItem.type,
          name: cartItem.name,
          size: cartItem.size,
          quantity: cartItem.quantity,
          price: cartItem.price,
          imageUrl: cartItem.imageUrl,
          itemId: cartItem.itemId, // Ensure itemId is correctly assigned
        },
      });
    } else {
      console.error(
        `Failed to add item to cart: Item with name ${cartItem.name} not found`
      );
    }
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
