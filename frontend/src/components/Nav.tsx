import { useNavigate } from "react-router-dom"
import '../styles/App.css'

const Nav = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate('/client')
  };
  return (
    <>
      <div className="nav">
        <div className="container-nav">
          <h5>Listagem de usuários</h5>
          <p>Escolha um cliente para visualizar os detalhes</p>
        </div>
        
          <button className="button-nav" type="button" onClick={handleNavigate}>Novo cliente</button>
        
      </div>
    </>
  )
}

export default Nav
