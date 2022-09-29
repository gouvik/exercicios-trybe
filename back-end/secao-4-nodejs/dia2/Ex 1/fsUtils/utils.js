const fs = require('fs').promises;

const activities = [
    {
      id: 1,
      description: 'Banho no cachorro',
      status: 'A fazer',
    },
    {
      id: 2,
      description: 'Cortar a grama',
      status: 'A fazer',
    },
    {
      id: 3,
      description: 'Estudar JavaScript',
      status: 'Feito',
    },
  ];

async function createObject() {
await fs.writeFile('fsUtils/activities.json', JSON.stringify(activities));
}

async function main() {
    await createObject();
}

main();

module.exports = activities;