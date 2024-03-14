import fetch from 'cross-fetch';

const URL = 'http://127.0.0.1:3000/api/clients/';

const clientApi = async (options: RequestInit, path: string | null | number) => {
  const client = await fetch(`${URL}/${path}`, options);
  const response = await client.json();
  return response;
}


export default clientApi;