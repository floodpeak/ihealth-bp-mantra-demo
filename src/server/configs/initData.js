import {tableDemoColl} from '/lib/collections';

export default function () {
  if (!tableDemoColl.findOne()) {
    for (let lc = 1; lc <= 5; lc++) {
      const title = `This is the post title: ${lc}`;
      const content = `Post ${lc}'s content is great!`;
      tableDemoColl.insert({title, content});
    }
  }
}
