/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_4094386447")

  // update collection data
  unmarshal({
    "name": "myproducts"
  }, collection)

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_4094386447")

  // update collection data
  unmarshal({
    "name": "Laptops"
  }, collection)

  return app.save(collection)
})
