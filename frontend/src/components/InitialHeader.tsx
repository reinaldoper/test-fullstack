

const InitialHeader = ({ name, content }: { name: string, content: string}) => {
  return (
    <>
      <div className="container-nav">
        <h5>{name}</h5>
        <p>{content}</p>
      </div>
    </>
  )
}

export default InitialHeader;
