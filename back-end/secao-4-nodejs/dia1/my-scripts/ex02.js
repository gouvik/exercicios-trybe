const fs = require('fs').promises;
const readLine = require('readline-sync');

// const id = readLine.questionInt("Digite um ID")

async function readAll() {
  const fileContent = await fs.readFile('./simpsons.json', 'utf-8');
  const simpsons = JSON.parse(fileContent);
  const str = simpsons.map(({ id, name }) => `${id} - ${name}`)
  str.forEach((str) => console.log(str))
}

async function readById(id) {
  const fileContent = await fs.readFile('./simpsons.json', 'utf-8');
  const simpsons = JSON.parse(fileContent);
  const byId = simpsons.find((simpsom) => Number(simpsom.id) === id);

if (!byId) {
  throw new Error("Id não localizado.")
}


return byId;

}

async function removeSimpsomById() {
  const fileContent = await fs.readFile("./simpsons.json", "utf-8");

  const simpsons = JSON.parse(fileContent);

  const newSimpsons = simpsons.filter((simpson) => simpson.id !== "6" && simpson.id !== "10");

  await fs.writeFile("./simpsons.json", JSON.stringify(newSimpsons));
}

async function createSimpsonsFamily() {
  const fileContent = await fs
    .readFile('./simpsons.json', 'utf-8');

  const simpsons = JSON.parse(fileContent);

  const familyIds = [1, 2, 3, 4];
  const simpsonsFamily = simpsons
    .filter((simpson) => familyIds.includes(Number(simpson.id)));

  await fs.writeFile('./simpsonsFamily.json', JSON.stringify(simpsonsFamily));
  }

async function nelsonAdds() {
  const fileContent = await fs.readFile("./simpsonsFamily.json", "utf-8");

  const simpsonsFamily = JSON.parse(fileContent);

  simpsonsFamily.push({ id: "8", name: "Nelson Muntz" });

  await fs.writeFile("./simpsonsFamily.json", JSON.stringify(simpsonsFamily));
}

async function teste() {
  const fileContent = await fs.readFile("./simpsonsFamily.json", "utf-8");
  const simpsonsFamily = JSON.parse(fileContent);

  const newArray = simpsonsFamily.filter((nelson) => nelson.id !== "8");

  newArray.push({ id: "14", name: "Maggie" });

  await fs.writeFile("./simpsonsFamily.json", JSON.stringify(newArray));
}

// A função main é apenas para termos um ponto de entrada centralizado para o nosso script
async function main() {
  // await readAll();
  // const simpsomById = await readById(id)
  // await createSimpsonsFamily()
  // await nelsonAdds();
  await teste();
}

main();

