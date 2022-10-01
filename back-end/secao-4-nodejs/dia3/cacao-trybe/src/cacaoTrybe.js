// src/cacaoTrybe.js

const fs = require('fs').promises;
const { join } = require('path');
const path = '/files/cacaoTrybeFile.json';

const readCacaoTrybeFile = async () => {
  try {
    const contentFile = await fs.readFile(join(__dirname, path), 'utf-8');
    return JSON.parse(contentFile);
  } catch (error) {
    return null;
  }
};

const writeCacaoTrybeFile = async (content) => {
  try {
    const completePath = join(__dirname, path);
    await fs.writeFile(completePath, JSON.stringify(content));
  } catch (e) {
    console.error('Erro ao salvar o arquivo', e.message);
    return null;
  }
}

const updateChoc = async (id, update) => {
  const cacaoTrybe = await readCacaoTrybeFile();
  const chocolateToUpdate = cacaoTrybe.chocolates.find(
    (chocolate) => chocolate.id === id,
  );

  if (chocolateToUpdate) {
    cacaoTrybe.chocolates = cacaoTrybe.chocolates.map((chocolate) => {
        if (chocolate.id === id) return { ...chocolate, ...update };
        return chocolate;
      });
  
    await writeCacaoTrybeFile(cacaoTrybe);
    return { ...chocolateToUpdate, ...update };
  }

  return false;
};

const getAllChocolates = async () => {
  const cacaoTrybe = await readCacaoTrybeFile();
  return cacaoTrybe.chocolates;
};

const getChocById = async (id) => {
const cacaoTrybe = await readCacaoTrybeFile();
const result = cacaoTrybe.chocolates.find((item) => item.id === Number(id));

return result;
};

const getChocTotal = async () => {
    const cacaoTrybe = await readCacaoTrybeFile();

    const result = await cacaoTrybe.chocolates.length;

    return result;
};

const getChocBySearch = async (query) => {
    const cacaoTrybe = await readCacaoTrybeFile();
    const field = cacaoTrybe.chocolates.filter((chocolate) => chocolate.name.toLowerCase().includes(query.toLowerCase()));
    return field;
  };

const geatAllBrands = async () => {
    const cacaoTrybe = await readCacaoTrybeFile();
    return cacaoTrybe.brands;
}

const getBrandsById = async (brandId) => {
    const cacaoTrybe = await readCacaoTrybeFile();
    return cacaoTrybe.chocolates
      .filter((chocolate) => chocolate.brandId === brandId);
  };


module.exports = {
    getAllChocolates,
    geatAllBrands,
    getChocById,
    getBrandsById,
    getChocTotal,
    getChocBySearch,
    updateChoc
};