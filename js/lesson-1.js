// Синтаксис объекта
const playlist = {
    name: 'Мой супер плейлист',
    rating: 5,
    tracks: ['трек-1', 'трек-2', 'трек-3'],
    trackCount: 3,
  };

  // playlist.qwe = 5;

  // playlist.rating = 10;

  // console.log(playlist);

  // console.log(playlist);
  // console.log(playlist.tracks);
  // console.log(playlist.name);
  // console.log(playlist.trackCount);

  const propertyName = 'tracks';

  // console.log(playlist.rating);
  // console.log(playlist['rating']);

  // console.log(playlist.propertyName);
  // console.log(playlist[propertyName]);

  /*
   * Короткая запись свойств
   */
  const username = 'Mango';
  const email = 'mango@mail.com';

  const signupData = {
    username,
    email,
  };

  // console.log(signupData);

  /*
   * Вычисляемые свойства
   */

  //  <input name="color" value="tomato" >

  const inputName = 'color';
  const inputValue = 'tomato';

  const colorPickerData = {
    [inputName]: inputValue,
  };

  // console.log(colorPickerData);

  /*
 * Методы объекта и this при обращении к свойствам в методах
 *
 * http://fecore.net.ua/books/m5ph3r-javascript/module-03/images/context.jpg
 *
 * - changeName
 * - addTrack
 * - updateRating
 * - getTrackCount
 */

const playlist = {
    name: 'Мой супер плейлист',
    rating: 5,
    tracks: ['трек-1', 'трек-2', 'трек-3'],
    changeName(newName) {
      console.log('this внутри changeName: ', this);

      this.name = newName;
    },
    addTrack(track) {
      this.tracks.push(track);
    },
    updateRating(newRating) {
      this.rating = newRating;
    },
    getTrackCount() {
      return this.tracks.length;
    },
  };

  console.log(playlist.getTrackCount());

  playlist.changeName('Новое имя');

  playlist.addTrack('новый трек 1');
  console.log(playlist.getTrackCount());

  playlist.addTrack('новый трек 2');
  console.log(playlist.getTrackCount());

  playlist.updateRating(4);

  console.log(playlist);

  /*
 * Перебор через for...of и Object.keys|values|entries
 */

const feedback = {
    good: 5,
    neutral: 10,
    bad: 3,
  };

  let totalFeedback = 0;

  // const keys = Object.keys(feedback);

  // console.log(keys);

  // for (const key of keys) {
  //   console.log(key);
  //   console.log(feedback[key]);

  //   totalFeedback += feedback[key];
  // }

  // console.log('totalFeedback: ', totalFeedback);

  const values = Object.values(feedback);

// console.log(values);

// for (const value of values) {
//   console.log(value);

//   totalFeedback += value;
// }

// console.log('totalFeedback: ', totalFeedback);