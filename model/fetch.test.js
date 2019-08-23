import {
    getHeaders,
    resolveResponse,
    requestGetLegacy,
    requestGet,
    requestPost,
    requestPut,
    requestDelete
  } from '@lib/fetch';
  
  import * as clientSession from '@lib/clientSession'
  import * as mock from '@fixtures/fetch';
  
  describe('Fetch', () => {
    jest.spyOn(clientSession, 'getClientSessionValue').mockImplementation(() => 'mocked-session-cookie');
    jest.spyOn(clientSession, 'getClientSessionDeviceValue').mockImplementation(() => 'mocked-session-device-cookie');
  
    describe('Get Header function', () => {
      test('Should return request headers', () => {
        const headers = getHeaders();
  
        expect(headers).toEqual({
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'X-Client-Session': 'mocked-session-cookie',
          'X-Client-Session-Device': 'mocked-session-device-cookie',
        })
      });
  
      test('Should return headers for a form data', () => {
        const header = getHeaders({}, true);
  
        expect(header).toEqual({
          'Accept': 'application/json',
          'X-Client-Session': 'mocked-session-cookie',
          'X-Client-Session-Device': 'mocked-session-device-cookie',
        })
      });
    });
  
    describe('Resolve response function', () => {
      test('Error in response', () => {
        let data;
        try {
          data = resolveResponse(mock.errorResponse, 'json');
  
        } catch (error) {
          expect(data.status.toString().charAt[0]).not.toBe('2');
          expect(data).toEqual({ 'message': 'Unauthorized' });
        }
      });
  
      test('Should receive a reponse with json type and return response.json()', async () => {
        const data = await resolveResponse(mock.jsonResponse, 'json');
  
        expect(data).toEqual({ 'message': 'Sucesso' });
      });
  
      test('Should receive a reponse with text type and return response.text()', async () => {
        const data = await resolveResponse(mock.textResponse, 'text');
  
        expect(data).toEqual('<html></html>');
      });
    });
  
    describe('Request get function', () => {
      test('Error in get request', async () => {
        jest.spyOn(global, 'fetch').mockImplementation(() => mock.errorResponse);
  
        let cities;
  
        try {
          cities = await requestGet('www.petlove.com.br/api/cities/sp');
  
        } catch (error) {
          expect(cities).toBeUndefined();
        }
      });
  
      test('Perform a get request and return a json', async () => {
        jest.spyOn(global, 'fetch').mockImplementation(() => mock.citiesResponse);
  
        const cities = await requestGet('www.petlove.com.br/api/cities/sp');
  
        expect(cities).toEqual({ "count": 1, "next": null, "previous": null, "results": [{ "name": "São Paulo", "slug": "sao-paulo" }] });
      });
  
      test('Perform a get request and return a text', async () => {
        jest.spyOn(global, 'fetch').mockImplementation(() => mock.textResponse);
  
        const page = await requestGet('www.petlove.com.br', null, 'text');
  
        expect(page).toEqual('<html></html>');
      });
    });
  
    describe('Request post function', () => {
      const data = { a: 1, b: 2 };
      const headers = {};
  
      test('Error in post request', async () => {
        let response;
        jest.spyOn(global, 'fetch').mockImplementation(() => mock.errorResponse);
  
        try {
          response = await requestPost('www.petlove.com.br', data, headers);
  
        } catch (error) {
          expect(response).toBeUndefined();
        }
      });
  
      test('Perform a post request and return a json', async () => {
        jest.spyOn(global, 'fetch').mockImplementation(() => mock.jsonResponse);
  
        const response = await requestPost('www.petlove.com.br', data, headers);
  
        expect(response).toEqual({ 'message': 'Sucesso' });
      });
  
      test('Perform a form data post request and return a json', async () => {
        jest.spyOn(global, 'fetch').mockImplementation(() => mock.jsonResponse);
  
        const response = await requestPost('www.petlove.com.br', data, headers, true);
  
        expect(response).toEqual({ 'message': 'Sucesso' });
      });
  
      test('Perform a post request and return text', async () => {
        jest.spyOn(global, 'fetch').mockImplementation(() => mock.textResponse);
  
        const response = await requestPost('www.petlove.com.br', data, headers, false, 'text');
  
        expect(response).toEqual('<html></html>');
      });
    });
  
    describe('Request put function', () => {
      const data = { a: 1, b: 2 };
      const headers = {};
  
      test('Error in post request', async () => {
        let response;
        jest.spyOn(global, 'fetch').mockImplementation(() => mock.errorResponse);
  
        try {
          response = await requestPost('www.petlove.com.br', data, headers);
  
        } catch (error) {
          expect(response).toBeUndefined();
        }
      });
  
      test('Perform a put request and return a json', async () => {
        jest.spyOn(global, 'fetch').mockImplementation(() => mock.jsonResponse);
  
        const response = await requestPut('www.petlove.com.br', data, headers);
  
        expect(response).toEqual({ 'message': 'Sucesso' });
      });
  
      test('Perform a form data put request and return a json', async () => {
        jest.spyOn(global, 'fetch').mockImplementation(() => mock.jsonResponse);
  
        const response = await requestPut('www.petlove.com.br', data, headers, true);
  
        expect(response).toEqual({ 'message': 'Sucesso' });
      });
  
      test('Perform a put request and return text', async () => {
        jest.spyOn(global, 'fetch').mockImplementation(() => mock.textResponse);
  
        const response = await requestPut('www.petlove.com.br', data, headers, false, 'text');
  
        expect(response).toEqual('<html></html>');
      });
    });
  
    describe('Request delete function', () => {
      test('Error in get request', async () => {
        jest.spyOn(global, 'fetch').mockImplementation(() => mock.errorResponse);
  
        let response;
  
        try {
          response = await requestGet('www.petlove.com.br');
  
        } catch (error) {
          expect(response).toBeUndefined();
        }
      });
  
      test('perform a delete request and return a json', async () => {
        jest.spyOn(global, 'fetch').mockImplementation(() => mock.jsonResponse);
  
        const response = await requestDelete('www.petlove.com.br');
  
        expect(response.status.toString().charAt(0)).toBe('2');
      });
    });
  
    describe('Request get legacy function', () => {
      test('Error in get request', async () => {
        jest.spyOn(global, 'fetch').mockImplementation(() => mock.errorResponse);
  
        let cities;
  
        try {
          cities = await requestGetLegacy('www.petlove.com.br/api/cities/sp');
  
        } catch (error) {
          expect(cities).toBeUndefined();
        }
      });
  
      test('Perform a get request and return a json', async () => {
        jest.spyOn(global, 'fetch').mockImplementation(() => mock.citiesResponse);
  
        const cities = await requestGetLegacy('www.petlove.com.br/api/cities/sp');
  
        expect(cities).toEqual({ "count": 1, "next": null, "previous": null, "results": [{ "name": "São Paulo", "slug": "sao-paulo" }] });
      });
  
      test('Perform a get request and return a text', async () => {
        jest.spyOn(global, 'fetch').mockImplementation(() => mock.textResponse);
  
        const page = await requestGetLegacy('www.petlove.com.br', null, 'text');
  
        expect(page).toEqual('<html></html>');
      });
    });
  });