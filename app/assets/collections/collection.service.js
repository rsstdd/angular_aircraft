'use strict'

getItems() {
  return this.$http.get('/api/cameras')
  .then((items) => {
    return items.data;
  })
  .catch((err) => {
    console.log(err);
  })
}
