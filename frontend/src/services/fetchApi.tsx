import fetch from 'cross-fetch';
import { URL } from '../environment/environment';


const clientApi = async (options: RequestInit, path: string | null | number) => {
  const client = await fetch(`${URL}/${path}`, options);
  const response = await client.json();
  return response;
}


export default clientApi;