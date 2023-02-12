import React from 'react';
import Table from 'react-bootstrap/Table';
import PropTypes from 'prop-types';

function BasicTable(props) {
  return (
    <Table striped bordered hover className={props.className}>
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Username</th>
        </tr>
      </thead>
      <tbody>
        {props.bodyData.map((row, index) => (
          <tr key={row.id}>
            <td>{index + 1}</td>
            <td>{row.firstName}</td>
            <td>{row.lastName}</td>
            <td>{row.username}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

BasicTable.propTypes = {
  className: PropTypes.string,
  bodyData: PropTypes.array.isRequired
};

BasicTable.defaultProps = {
    bodyData : [
        {id: 1, firstName: 'Mark', lastName: 'Otto', username: '@mdo'},
        {id: 2, firstName: 'Jacob', lastName: 'Thornton', username: '@fat'},
        {id: 3, firstName: 'Larry', lastName: 'the Bird', username: '@twitter'}
    ]
};  

export default BasicTable;
