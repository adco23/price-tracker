const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function main() {
  await prisma.$executeRaw`ALTER TABLE product AUTO_INCREMENT = 1`;
  await prisma.$executeRaw`ALTER TABLE place AUTO_INCREMENT = 1`;
  await prisma.$executeRaw`ALTER TABLE price AUTO_INCREMENT = 1`;

  await prisma.product.createMany({
    data: [
      {
        title: 'Manzana',
        brand: 'Frutas del Sol',
        description: 'Manzana roja fresca',
      },
      {
        title: 'Banana',
        brand: 'Frutas Exóticas',
        description: 'Banana madura',
      },
      {
        title: 'Leche',
        brand: 'Lácteos Primavera',
        description: 'Leche entera',
      },
      {
        title: 'Pan',
        brand: 'Panadería San Jorge',
        description: 'Pan integral',
      },
      { title: 'Café', brand: 'Café del Sur', description: 'Café molido' },
    ],
  });

  await prisma.place.createMany({
    data: [
      {
        name: 'Supermercado Central',
        address: 'Calle Principal 123',
        city: 'Buenos Aires',
      },
      {
        name: 'Tienda Local',
        address: 'Av. Libertador 456',
        city: 'Montevideo',
      },
      {
        name: 'Mercado del Pueblo',
        address: 'Calle 8 Nº 23',
        city: ' city de México',
      },
      { name: 'Supermarket', address: '123 Main St', city: 'New York' },
      { name: 'Mini Mercado', address: 'Av. Paulista 789', city: 'São Paulo' },
    ],
  });

  await prisma.price.createMany({
    data: [
      { id_product: 1, id_place: 1, date: new Date('2024-09-01'), price: 1.5 },
      { id_product: 1, id_place: 2, date: new Date('2024-09-02'), price: 1.55 },
      { id_product: 2, id_place: 3, date: new Date('2024-09-01'), price: 0.8 },
      { id_product: 3, id_place: 4, date: new Date('2024-09-01'), price: 0.99 },
      { id_product: 4, id_place: 5, date: new Date('2024-09-02'), price: 1.2 },
      { id_product: 5, id_place: 1, date: new Date('2024-09-03'), price: 3.99 },
      { id_product: 3, id_place: 2, date: new Date('2024-09-03'), price: 1.05 },
    ],
  });
}

// main()
//   .then(async () => {
//     await prisma.$disconnect()
//   })
//   .catch(async (e) => {
//     console.error(e)
//     await prisma.$disconnect()
//     process.exit(1)
//   })

main()
  .catch((e) => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });
