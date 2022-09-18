const date = new Date();
export const blogList = [
  {
    id: 1,
    title: 'The Lake City',
    category: 'City',
    subCategory: ['Rajasthan', 'Historic', 'travel'],
    description:
      "Udaipur, formerly the capital of the Mewar Kingdom, is a city in the western Indian state of Rajasthan. Founded by Maharana Udai Singh II in 1559, it’s set around a series of artificial lakes and is known for its lavish royal residences. City Palace, overlooking Lake Pichola, is a monumental complex of 11 palaces, courtyards and gardens, famed for its intricate peacock mosaics.",
    authorName: 'VikRam',
    authorAvatar: '/assets/images/author.jpg',
    createdAt: date.toISOString().split('T')[0],
    cover: '/assets/images/1.jpeg',
  },
  {
    id: 2,
    title: 'The Pink City',
    category: 'City',
    subCategory: ['vacation', 'holidays', 'sight seeing'],
    description:
     "Jaipur formerly Jeypore, is the capital and largest city of the Indian state of Rajasthan. As of 2011, the city had a population of 3.1 million, ...",
    authorName: 'ArisTos',
    authorAvatar: '/assets/images/author.jpg',
    createdAt: date.toISOString().split('T')[0],
    cover: '/assets/images/2.jpeg',
  },
  {
    id: 3,
    title: 'Blue City',
    category: 'City',
    subCategory: ['Rajasthan', 'Travel', 'Blue Heaven'],
    description:
     "Jodhpur is a city in the Thar Desert of the northwest Indian state of Rajasthan. Its 15th-century Mehrangarh Fort is a former palace that’s now a museum, displaying weapons, paintings and elaborate royal palanquins (sedan chairs). Set on on a rocky outcrop, the fort overlooks the walled city, where many buildings are painted the city’s iconic shade of blue.",
    authorName: 'ArisTos',
    authorAvatar: '/assets/images/author.jpg',
    createdAt:date.toISOString().split('T')[0],
    cover: '/assets/images/3.jpeg',
  },
  {
    id: 4,
    title: 'The Delicius taste',
    category: 'Food',
    subCategory: ['Tasty', 'Sweets', 'Food'],
    description:
      "There are many different types of cake recipes and numerous ways of categorizing them. The general classification used is whether or not they contain fat, also known as shortening (not the be confused solely with just processed shortening), and are called: SHORTENED (BUTTER OR OIL) CAKES or UNSHORTENED (FOAM) CAKES. Chiffon cakes make up the third category, but here they're often included with unshortened (foam) cakes MORE CAKES",
    authorName: 'ArisTos',
    authorAvatar: '/assets/images/author.jpg',
    createdAt: date.toISOString().split('T')[0],
    cover: '/assets/images/4.jpeg',
  },
  {
    id: 5,
    title: 'Wolf',
    category: 'Animal',
    subCategory: ['dangerous', 'Hunter', 'Twilight'],
    description:
      "The wolf (Canis lupus), also known as the gray wolf or grey wolf, is a large canine native to Eurasia and North America. More than thirty subspecies of Canis lupus have been recognized, and gray wolves, as popularly understood, comprise wild subspecies. The wolf is the largest extant member of the family Canidae.",
    authorName: 'ArisTos',
    authorAvatar: '/assets/images/author.jpg',
    createdAt: date.toISOString().split('T')[0],
    cover: '/assets/images/5.jpeg',
  },
  {
    id: 6,
    title: 'Time Travel',
    category: 'Science',
    subCategory: ['Friction', 'Physics', 'Quantuam'],
    description:
      "Is time travel possible? Short answer: Yes, and you're doing it right now — hurtling into the future at the impressive rate of one second per second. You're pretty much always moving through time at the same speed, whether you're watching paint dry or wishing you had more hours to visit with a friend from out of town. But this isn't the kind of time travel that's captivated countless science fiction writers, or spurred a genre so extensive",
    authorName: 'ArisTos',
    authorAvatar: '/assets/images/author.jpg',
    createdAt: date.toISOString().split('T')[0],
    cover:
      '/assets/images/8.jpeg',
  },
  {
    id: 7,
    title: 'Art & Perception',
    category: 'art',
    subCategory: ['skill', 'design', 'passion'],
    description:
      "rt, also called (to distinguish it from other art forms) visual art, a visual object or experience consciously created through an expression of skill or imagination. The term art encompasses diverse media such as painting, sculpture, printmaking, drawing, decorative arts, photography, and installation.",
    authorName: 'ArisTos',
    authorAvatar: '/assets/images/author.jpg',
    createdAt: date.toISOString().split('T')[0],
    cover: '/assets/images/7.jpg',
  },
];
