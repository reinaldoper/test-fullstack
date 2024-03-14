import { useEffect, useState } from "react";
import clientApi from "../services/fetchApi";

const InitialPage = () => {
  const [clients, setClients] = useState([])

  useEffect(() => {
    const student = async () => {
      const headers: RequestInit = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        }
      }

      const { message } = await clientApi(headers, null)
      setClients(message);
      
    };
    student();

  }, [clients])

  console.log(clients);
  

  return (
    <>
      {clients.length}
    </>
  )
}

export default InitialPage
