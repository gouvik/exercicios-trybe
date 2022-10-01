const express = require('express');

const app = express();

app.use(express.json());

const cacaoTrybe = require('./cacaoTrybe')

app.get('/chocolates', async (_req, res) => {
    const chocolates = await cacaoTrybe.getAllChocolates();
    res.status(200).json({ chocolates });
});

app.get('/chocolates/total', async (_req, res) => {
    const chocolates = await cacaoTrybe.getChocTotal();

    res.status(200).json({ totalChocolates: chocolates })

});

app.get('/chocolates/brand', async (_req, res) => {
    const brands = await cacaoTrybe.geatAllBrands();
    res.status(200).json({ brands });
});

app.get('/chocolates/search', async (req, res) => {
    const { q } = req.query;
    const choco = await cacaoTrybe.getChocBySearch(q);

    res.status(choco.length === 0 ? 404 : 200).json(choco);
});



app.get('/chocolates/:id', async (req, res) => {
    const { id } = req.params;
    const chocolate = await cacaoTrybe.getChocById(id);

    if (!chocolate) return res.status(404).end();


    res.status(200).json({ chocolate });
});



app.get('/chocolates/brand/:brandId', async (req, res) => {
    const { brandId } = req.params;
    const chocolates = await cacaoTrybe.getBrandsById(Number(brandId));

    res.status(200).json({ chocolates });
});

// bloco PUT

app.put('/chocolates/:id', async (req, res) => {
    const { id } = req.params;
    const { name, brandId } = req.body;
    const updatedChocolate = await cacaoTrybe.updateChoc(Number(id), { name, brandId });
  
    if (updatedChocolate) return res.status(200).json({ chocolate: updatedChocolate });
    res.status(404).json({ message: 'chocolate not found' });
  });


module.exports = app;