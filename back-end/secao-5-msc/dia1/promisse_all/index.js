// 1- Importar o módulo fs e criar a função com o Array de strings. 
// 2- Utilizar a função map para criar um Array de Promises, uma para cada arquivo.
// 3- Utilizar Promise.all para aguardar a escrita de todos os arquivos - ou seja, a resolução de todas as promises.
// 4- Realizar a leitura dos arquivos criados. 


const fs = require('fs').promises;

async function arrayToFile() {
    const strings = ['Finalmente', 'estou', 'usando', 'Promise.all', '!!!'];

    const createFilPromisses = strings
    .map((string, index) => fs.writeFile(`./file${index + 1}.txt`, string));

    await Promise.all(createFilPromisses);

    const fileNames = [

        'file1.txt',
  
        'file2.txt',
  
        'file3.txt',
  
        'file4.txt',
  
        'file5.txt',
  
      ];

      // aqui usamos a mesma estratégia

    // criamos uma promise de leitura para cada item no array `fileNames`

    const readFilesPromises = fileNames
    .map((fileName) => fs.readFile(fileName, 'utf-8'));

    // e aqui esperamos que todas as leituras sejam resolvidas

    const fileContents = await Promise.all(readFilesPromises);
    const newFileContent = fileContents.join(' ');

    await fs.writeFile('./fileAll.txt', newFileContent);

}

// caso queira esperar a resolução, use o `await` ou `.then`
arrayToFile().then
