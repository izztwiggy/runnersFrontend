import Spinner from 'react-bootstrap/Spinner'

const SpinnerLoad = () => {
  return (
   <>
   <Spinner animation="border" variant="success">
       <Spinner animation='grow' variant="info" size="sm"></Spinner>
   </Spinner>
   
   </>
  )
}

export default SpinnerLoad