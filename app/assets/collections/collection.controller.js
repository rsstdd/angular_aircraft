catalogSvc.getItems()
  .then((items) => this.items = items)
  .catch((err) => console.log(err));
