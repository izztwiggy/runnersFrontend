import Eye from '../../images/icons/Eye.svg'
import Button from 'react-bootstrap/Button'

const ShowPassword = (input) => {
    const handleShowPassword = () => {
        console.log('show password')
    }
  return (<>
    <Button onClick={handleShowPassword} variant='outline-none'>
        <img src={Eye} className="showPassword" alt="eye Icon" />
    </Button>
  
  </>
  )
}

export default ShowPassword