import Toast from 'react-bootstrap/Modal'
import ToastHeader from 'react-bootstrap/ToastHeader'
import Alert from 'react-bootstrap/Alert'

const ErrorMessage = ({showError, setShowError, errorMessage, setErrorMessage}) => {
    const toggleShowError = () => {
        setShowError(false)
        setErrorMessage('')
    }
  return (<>
    <Toast show={showError}>
          <Toast.Header closeButton onClick={toggleShowError} className="bg-warning" >
            <strong className="me-auto outline-warning">Error</strong>
          </Toast.Header>
          <Toast.Body>{errorMessage}</Toast.Body>
    </Toast>
    {/* <Alert variant="danger" onClose={toggleShowError} dismissible>
        <Alert.Heading>Error!</Alert.Heading>
        <p>
        {errorMessage}
        </p>
      </Alert> */}
  </>
  )
}

export default ErrorMessage