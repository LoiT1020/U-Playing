const db = require('./connection');
const { User, Product, Category } = require('../models');

db.once('open', async () => {
  await Category.deleteMany();

  const categories = await Category.insertMany([
    { name: 'Action' },
    { name: 'Adventure' },
    { name: 'Simulation' },
    { name: 'Sport' },
    { name: 'Puzzle' },
    { name: 'Arcade' },
    { name: 'Board' },
    { name: 'Card' },
    { name: 'Casual' },
    { name: 'Racing' },
    { name: 'Role-Play' },
    { name: 'Strategy' },
    { name: 'Trivia' },
    { name: 'Word' },
    { name: 'Board' },
    { name: 'Music' }
  ]);

  console.log('categories seeded');

  await Product.deleteMany();

  const products = await Product.insertMany([
    {
      name: 'Fortnite',
      description:
        'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
      image: 'Fortnite.jpg',
      category: [categories[0]._id,categories[1]._id,categories[10]._id,],
      price: 0.00,
    
    },
    {
      name: 'Minecraft',
      description:
        'Praesent sed lacinia mauris. Nulla congue nibh magna, at feugiat nunc scelerisque quis. Donec iaculis rutrum vulputate. Suspendisse lectus sem, vulputate ac lectus sed, placerat consequat dui.',
      image: 'Minecraft.jpg',
      category: [categories[1]._id,categories[2]._id,categories[10]._id,],
      price: 19.99,
      
    },
    {
      name: 'Roblox',
      category:[categories[0]._id,categories[1]._id,categories[3]._id],
      description:
        'Donec volutpat erat erat, sit amet gravida justo sodales in. Phasellus tempus euismod urna. Proin ultrices nisi ut ipsum congue, vitae porttitor libero suscipit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam lacinia a nisi non congue.',
      image: 'Roblox.jpg',
      price: 0.00,
     
    },
    {
      name: 'League of Legends',
      category: [categories[0]._id,categories[10]._id,categories[11]._id],
      description:
        'Praesent placerat, odio vel euismod venenatis, lectus arcu laoreet felis, et fringilla sapien turpis vestibulum nisl.',
      image: 'LOL.jpg',
      price: 0.00,
     
    },
    {
      name: 'Counter Strike: GO',
      category:  [categories[0]._id,categories[10]._id,categories[11]._id],
      description:
        'Vivamus ut turpis in purus pretium mollis. Donec turpis odio, semper vel interdum ut, vulputate at ex. Duis dignissim nisi vel tortor imperdiet finibus. Aenean aliquam sagittis rutrum.',
      image: 'CS.jpg',
      price: 0.00,
      quantity: 100
    },
    {
      name: 'Valorant',
      category:  [categories[0]._id,categories[10]._id,categories[11]._id],
      description:
        'Vestibulum risus metus, luctus non tortor quis, tincidunt consectetur ex. Nullam vitae lobortis ligula, ut sagittis massa. Curabitur consectetur, tellus at pulvinar venenatis, erat augue cursus erat, eu ullamcorper eros lectus ultrices ipsum. Integer rutrum, augue vitae auctor venenatis, turpis turpis elementum orci, at sagittis risus mi a leo.',
      image: 'Valorant.jpg',
      price: 30.99,
      
    },
    {
      name: 'Rocket League',
      category: [categories[3]._id,categories[10]._id,,categories[9]._id],
      description:
        'In sodales, ipsum quis ultricies porttitor, tellus urna aliquam arcu, eget venenatis purus ligula ut nisi. Fusce ut felis dolor. Mauris justo ante, aliquet non tempus in, tempus ac lorem. Aliquam lacinia dolor eu sem eleifend ultrices. Etiam mattis metus metus. Sed ligula dui, placerat non turpis vitae, suscipit volutpat elit. Phasellus sagittis, diam elementum suscipit fringilla, libero mauris scelerisque ex, ac interdum diam erat non sapien.',
      image: 'R-L.jpg',
      price: 10.00,
    },
    {
      name: 'GTA V',
      category: [categories[1]._id,categories[2]._id,,categories[10]._id,categories[8]._id],
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ornare diam quis eleifend rutrum. Aliquam nulla est, volutpat non enim nec, pharetra gravida augue. Donec vitae dictum neque. Pellentesque arcu lorem, fringilla non ligula ac, tristique bibendum erat. Ut a semper nibh. Quisque a mi et mi tempor ultricies. Maecenas eu ipsum eu enim hendrerit accumsan at euismod urna.',
      image: 'GTA V.jpg',
      price: 29.00,
    },
    {
      name: 'Dota 2',
      category: [categories[0]._id,categories[10]._id,categories[11]._id],
      description: 'Ut vulputate hendrerit nibh, a placerat elit cursus interdum.',
      image: 'dota2.jpg',
      price: 0.00,
    },
    {
      name: 'StarCraft 2',
      category: [categories[11]._id,categories[4]._id,],
      description:
        'Sed a mauris condimentum, elementum enim in, rhoncus dui. Phasellus lobortis leo odio, sit amet pharetra turpis porta quis.',
      image: 'StarCraft2.jpg',
      price: 20.99,
    },
    {
      name: 'Red Alert 3',
      category: [categories[11]._id,categories[4]._id,],
      description:
        'Vestibulum et erat finibus erat suscipit vulputate sed vitae dui. Ut laoreet tellus sit amet justo bibendum ultrices. Donec vitae felis vestibulum, congue augue eu, finibus turpis.',
      image: 'RA3.jpg',
      price: 19.99,
    },
    {
      name: 'Pandemic',
      category: [categories[14]._id,categories[2]._id,,categories[10]._id,categories[8]._id],
      description:
        'Morbi consectetur viverra urna, eu fringilla turpis faucibus sit amet. Suspendisse potenti. Donec at dui ac sapien eleifend hendrerit vel sit amet lectus.',
      image: 'alphabet-blocks.jpg',
      price: 9.99,
      quantity: 600
    }
  ]);

  console.log('products seeded');

  await User.deleteMany();

  await User.create({
    firstName: 'Pamela',
    lastName: 'Washington',
    email: 'pamela@testmail.com',
    password: 'password12345',
    orders: [
      {
        products: [products[0]._id, products[0]._id, products[1]._id]
      }
    ]
  });

  await User.create({
    firstName: 'Elijah',
    lastName: 'Holt',
    email: 'eholt@testmail.com',
    password: 'password12345'
  });

  console.log('users seeded');

  process.exit();
});
