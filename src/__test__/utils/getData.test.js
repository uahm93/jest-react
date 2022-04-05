import getData from "../../utils/getData";
//import  from "";

describe('Fetch Api', () => {
    beforeEach(() => {
        fetch.resetMocks();
    });

    test('Llamar api y retornar datos', () => {
        fetch.mockResponseOnce(JSON.stringify({ data: '123' }));
        getData('https://google.com')
        .then( response => {
            expect(response.data).toEqual('123')
        });

        expect(fetch.mock.calls[0][0]).toEqual('https://google.com');

    })

});