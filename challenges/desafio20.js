db.produtos.updateOne(
{ nome: { $eq: "Quarteirão com Queijo" } },
{ $pop: { ingredientes: -1 } },
);

db.produtos.find(
{},
{ nome: true, ingredientes: true, _id: false },
);