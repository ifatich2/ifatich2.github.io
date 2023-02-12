import React from 'react';
import Nav from 'react-bootstrap/Nav';

function TabNav(props) {
  return (
    <Nav fill variant="tabs" defaultActiveKey={props.defaultActiveKey}>
      { props.tabs.map((tab, index) => (
        <Nav.Item key={index}>
          <Nav.Link href={tab.href} eventKey={tab.eventKey} disabled={tab.disabled}>
            {tab.title}
          </Nav.Link>
        </Nav.Item>
      ))}
    </Nav>
  );
}

TabNav.defaultProps = {
  defaultActiveKey: "#",
  tabs: [
    { title: 'Produk', href: "#", eventKey: "#" },
    { title: 'Promo', href: "#", eventKey: "link-1" },
    { title: 'Artikel', href: "#", eventKey: "link-2" },
    { title: 'Acara', href: "#", eventKey: "disabled", disabled: true }
  ]
}

export default TabNav;