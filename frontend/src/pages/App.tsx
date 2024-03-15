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
        <hr className='custom-hr' />
        <Nav />
        <hr className='custom-hr' />
        <InitialPage />
      </div>
    </>
  )
}

export default App
