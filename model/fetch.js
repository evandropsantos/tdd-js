export const citiesResponse = {
    json: () => ({ "count": 1, "next": null, "previous": null, "results": [{ "name": "São Paulo", "slug": "sao-paulo" }] }),
    status: 200
  };
  
  export const textResponse = {
    text: () => '<html></html>',
    status: 200
  };
  
  export const jsonResponse = {
    json: () => ({ 'message': 'Sucesso' }),
    status: 200
  };
  
  export const errorResponse = {
    json: () => ({ 'message': 'Unauthorized' }),
    status: 401
  };