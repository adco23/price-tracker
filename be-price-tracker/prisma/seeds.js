const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function main() {
  await prisma.price.deleteMany();
  await prisma.brandProduct.deleteMany();
  await prisma.packaging.deleteMany();
  await prisma.store.deleteMany();
  await prisma.unit.deleteMany();
  await prisma.brand.deleteMany();
  await prisma.product.deleteMany();

  await prisma.$executeRaw`ALTER TABLE price AUTO_INCREMENT = 1`;
  await prisma.$executeRaw`ALTER TABLE brandproduct AUTO_INCREMENT = 1`;
  await prisma.$executeRaw`ALTER TABLE packaging AUTO_INCREMENT = 1`;
  await prisma.$executeRaw`ALTER TABLE store AUTO_INCREMENT = 1`;
  await prisma.$executeRaw`ALTER TABLE unit AUTO_INCREMENT = 1`;
  await prisma.$executeRaw`ALTER TABLE brand AUTO_INCREMENT = 1`;
  await prisma.$executeRaw`ALTER TABLE product AUTO_INCREMENT = 1`;

  await prisma.unit.createMany({
    data: [
      { title: 'metro', symbol: 'm' },
      { title: 'centimetro', symbol: 'cm' },
      { title: 'litro', symbol: 'l' },
      { title: 'kilogramo', symbol: 'kg' },
      { title: 'gramo', symbol: 'gr' },
      { title: 'unidad', symbol: 'u' },
      { title: 'docena', symbol: 'doc' },
    ],
  });

  await prisma.brand.createMany({
    data: [
      { name: 'La Virginia' },
      { name: 'NESCAFE Dolca' },
      { name: 'Rexona' },
      { name: 'Colgate' },
    ],
  });

  await prisma.product.createMany({
    data: [
      {
        title: 'Manzana',
        description: 'Manzana roja fresca',
      },
      {
        title: 'Capuccino',
        description: '',
      },
    ]}
  );

  await prisma.store.createMany({
    data: [
      { name: 'ChangoMas' },
      { name: 'Red de kioskos' },
      { name: 'Kiosko 24hs' }
    ]
  });

  await prisma.brandProduct.createMany({
    data: [
      {
        productId: 2,
        brandId: 1,
      },
      {
        productId: 2,
        brandId: 2,
      },
    ]
  });

  await prisma.packaging.createMany({
    data: [
      {
        productId: 2,
        unitId: 5,
        quantity: 125,
      },
      {
        productId: 2,
        unitId: 5,
        quantity: 275,
      },
      {
        productId: 2,
        unitId: 5,
        quantity: 210,
      },
    ]
  });

  await prisma.price.createMany({
    data: [
      {
        value: 100,
        date: new Date(),
        storeId: 1,
        productId: 1,
        packId: 1,
        brandId: 1,
      },
      {
        value: 200,
        date: new Date(),
        storeId: 1,
        productId: 1,
        packId: 1,
        brandId: 1,
      },
      {
        value: 300,
        date: new Date(),
        storeId: 1,
        productId: 1,
        packId: 1,
        brandId: 1,
      },
    ]
  })
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
