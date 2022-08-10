db.produtos.updateMany(
{},
{ 
  $set: { avaliacao: 0 },
},
);

db.produtos.updateMany(
{
  tags: { $elemMatch: { $eq: "bovino" } },
},
{ 
  $inc: { avaliacao: 5 },
},
);

db.produtos.updateMany(
{
  tags: { $elemMatch: { $eq: "ave" } },
},
{ 
  $inc: { avaliacao: 3 },
},
);

db.produtos.find({}, { nome: true, avalicacao: true, _id: false });