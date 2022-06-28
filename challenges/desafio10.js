db.produtos.find({
  $and: [
    { proteínas: { $gte: 30 } },
    { proteínas: { $lte: 40 } },
],
}, 
  { nome: 1,
    _id: 0,
});