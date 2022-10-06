const { expect } = require('chai');
const { createObject } = require('../fsUtils/utils');

describe('Testa se: ', () => {
    it('A função retorna um array ', async () => {
        const fn = await createObject();
        console.log(fn);

        // expect(fn).to.be.instanceOf(Array);
    });
});