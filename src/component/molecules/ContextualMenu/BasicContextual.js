import React from 'react';
import { Dropdown } from 'react-bootstrap';

function BasicContextual() {
  return (
    <Dropdown>
        <Dropdown.Toggle className='btn-contextual' variant='link' id="dropdown-basic" />

        <Dropdown.Menu>
            <Dropdown.Item>Action</Dropdown.Item>
            <Dropdown.Item>Another action</Dropdown.Item>
            <Dropdown.Item>Something else</Dropdown.Item>
        </Dropdown.Menu>
    </Dropdown>
  );
}

export default BasicContextual;
