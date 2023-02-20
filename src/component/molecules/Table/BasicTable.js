import React from 'react';
import Table from 'react-bootstrap/Table';

function BasicTable(props) {
  return (
    <Table striped bordered hover className={"rounded-corners " + props.className}>
      <thead>
        <tr>
          {/* <th>#</th> */}
          <th>First Name</th>
          <th>Last Name</th>
          <th>Username</th>
        </tr>
      </thead>
      <tbody>
        {props.bodyData?.map((row, index) => (
          <tr key={row.id}>
            {/* <td>{index + 1}</td> */}
            <td>{row.firstName}</td>
            <td>{row.lastName}</td>
            <td>{row.username}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default BasicTable;
