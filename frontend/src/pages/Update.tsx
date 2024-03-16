import UpdateClient from "../components/UpdateClient";
import Header from "../components/Header";
import Section from "../components/Section";

const Update = () => {
  return (
    <>
      <Header />
      <Section />
      <div className='section-app'>
        <hr className='custom-hr' />
        <UpdateClient />
      </div>
    </>
  )
}

export default Update
