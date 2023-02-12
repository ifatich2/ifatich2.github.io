import Pagination from 'react-bootstrap/Pagination';

let active = 2;
let items = [];
for (let number = 1; number <= 4; number++) {
  items.push(
    <Pagination.Item key={number} active={number === active}>
      {number}
    </Pagination.Item>,
  );
}

function BasicPagination() {
  return (
    <Pagination>
        <Pagination.Prev />
        {items}
        <Pagination.Ellipsis />
        <Pagination.Next />
    </Pagination>
  );
}

export default BasicPagination;