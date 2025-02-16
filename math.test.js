// Integracion Continua
const helloWorld = require('./integracion');

test('Hola Mundo', () => {
    expect(helloWorld()).toBe("Hola Mundo");
});


