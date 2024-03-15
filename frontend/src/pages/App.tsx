import '../styles/App.css'
import InitialPage from '../components/InitialPage'
import Header from '../components/Header'
import Section from '../components/Section'
import Nav from '../components/Nav'

function App() {


  return (
    <>
      <Header />
      <Section />
      <div className='section-app'>
        <hr />
        <Nav />
        <hr />
        <InitialPage />
      </div>
    </>
  )
}

export default App
