import CreateClient from "../components/CreateClient"
import Header from "../components/Header"
import Section from "../components/Section"

const Create = () => {
  return (
    <>
      <Header />
      <Section />
      <div className='section-app'>
        <hr className='custom-hr' />
        <CreateClient />
      </div>
    </>
  )
}

export default Create
