import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  // Delete all `User` and `Message` records
  await prisma.message.deleteMany({});
  await prisma.user.deleteMany({});
  // (Re-)Create dummy `User` and `Message` records
  await prisma.user.create({
    data: {
      name: 'Fabian',
      messages: {
        create: [
          {
            body: 'A Note for Fabian',
          },
          {
            body: 'Another note for Fabian',
          },
        ],
      },
    },
  });
  await prisma.user.create({
    data: {
      name: 'Erik',
      messages: {
        create: [
          {
            body: 'A Note for Erik',
          },
          {
            body: 'Another note for Erik',
          },
        ],
      },
    },
  });
  await prisma.user.create({
    data: {
      name: 'Theo',
      messages: {
        create: [
          {
            body: 'A Note for Theo',
          },
          {
            body: 'Another note for Theo',
          },
        ],
      },
    },
  });
}

main().then(() => {
  console.log('Data seeded...');
});
