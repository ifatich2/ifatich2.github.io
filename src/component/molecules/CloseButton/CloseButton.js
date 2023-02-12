import CloseButton from 'react-bootstrap/CloseButton';

function GCloseButton() {
  return (
    <div>
        <div className='p-3' >
            <CloseButton />
            <CloseButton disabled />
        </div>

        <div className='bg-dark p-3'>
            <CloseButton variant="white" />
            <CloseButton variant="white" disabled />
        </div>
    </div>
  );
}

export default GCloseButton;