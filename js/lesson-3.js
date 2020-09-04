// Деструктуризация объектов:

const playlist = {
    name: 'Мой супер плейлист',
    rating: 5,
    tracks: ['трек-1', 'трек-2', 'трек-3'],
    trackCount: 3,
  };

  const {
    rating,
    tracks,
    name,
    trackCount: numberOfTracks = 0,
    author = 'user',
  } = playlist;

  console.log(numberOfTracks);

  const authors = {
    kiwi: 4,
    poly: 7,
    ajax: 9,
    mango: 6,
  };

// const ratings = Object.values(authors);

// console.log(Math.max(...ratings));

const keys = Object.keys(authors);

for (const key of keys) {
  console.log(key);
  console.log(authors[key]);
}

  const entries = Object.entries(authors);

  // console.log(entries);

  // for (const [name, rating] of entries) {
  //   // ур2
  //   // const [name, rating] = entry;

  //   // ур1
  //   // const name = entry[0];
  //   // const rating = entry[1];

  //   console.log(name, rating);
  // }

  /*
 * Операция rest (сбор)
 */
// const profile = {
//   name: 'Jacques Gluke',
//   tag: 'jgluke',
//   location: 'Ocho Rios, Jamaica',
//   avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/r_oy/128.jpg',
//   stats: {
//     followers: 5603,
//     views: 4827,
//     likes: 1308,
//   },
// };

// const { name, tag, location, ...restProps } = profile;

// console.log(name, tag, location);
// console.log(restProps);
// console.log(profile);