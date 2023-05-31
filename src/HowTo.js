import React,{useState} from 'react'
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import "./CSS/HowTo.css"
const HowTo = ({login}) => {
  const [show, setShow] = useState(true);

  return (
    <>
      <Alert show={show} className={login?'hide':''}>
        <Alert.Heading>About History</Alert.Heading>
        <p>
          To access the History section,please register for an account.
        </p>
        <hr />
        <div className="d-flex justify-content-end">
          <Button onClick={() => setShow(false)} className='closeBtn'>
            Close
          </Button>
        </div>
      </Alert>

      {/* {!show && <Button onClick={() => setShow(true)}>Show Alert</Button>} */}
    </>
  );
}

export default HowTo