db.produtos.find({
  calorias: { $lt: 500 },
}, 
  { nome: 1,
    _id: 0,
});