import { Row } from 'react-bootstrap';
import ListGroup from 'react-bootstrap/ListGroup';

function BasicList(props) {
  return (
    <Row>
      <div className='col-6'>
        <ListGroup variant="numbered flush" as="ol" title={props.title}>
          {props.data.map((item, index) => (
            <ListGroup.Item key={index} className={index === props.activeIndex ? "active" : ""}>
              {item}
            </ListGroup.Item>
          ))}
        </ListGroup>
      </div>

      <div className='col-6'>
        <ListGroup className='border-less'>
          {props.data.map((item, index) => (
            <ListGroup.Item key={index}>{item}</ListGroup.Item>
          ))}
        </ListGroup>
      </div>

      <div className='col-12'>
        <div className="list-group-mobile">
          <p>Langkah 1 dari 4</p>
          <h6>Detail Jaminan</h6>
        </div>
      </div>
    </Row>
  );
}

BasicList.defaultProps = {
  title: 'Default Title',
  data: [
    'List Basic I',
    'List Basic II',
    'List Basic III',
    'List Basic IV',
    'List Basic V'
  ]
}

export default BasicList;