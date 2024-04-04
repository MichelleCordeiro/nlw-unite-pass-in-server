import { prisma } from '../src/lib/prisma'

async function seed() {
  await prisma.event.create({
    data: {
      id: 'fd55e2d8-be3d-4db8-be02-1eef03fe81b7',
      title: 'React Native na prática',
      slug: 'react-native-na-pratica',
      details: 'Workshop de React Native',
      maximumAttendees: 300
    }
  })
}

seed().then(() => {
  console.log('Database seeded!')
  prisma.$disconnect()
})
