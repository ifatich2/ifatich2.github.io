import { useState } from 'react';
import Stack from 'react-bootstrap/Stack';
import Image from "../../image/image";
import Button from '../../../atoms/Button';

function PaymentVarian({ icon, gap, value, eror, className = '', saldo, variant, buttonValue, onSelect, selected, bank }) {
  const hasButton = buttonValue !== null && buttonValue !== undefined;
  const [isActive, setIsActive] = useState(selected);

  const handleClick = () => {
    if (className.includes('not-enough')) {
      return; // Return early and do nothing if it has not-enough class
    }
    setIsActive(!isActive);
    onSelect && onSelect(); // memastikan onSelect sebagai sebuah fungsi dan dijalankan
  };

  return (
    <Stack
      direction="horizontal"
      gap={gap}
      className={`PaymentVarian ${className} ${isActive ? 'active' : ''}`}
      onClick={handleClick}
      disabled={className.includes('not-enough')}
      style={{ cursor: className.includes('not-enough') ? 'default' : 'pointer' }}
    >
      <Image className="me-1 mt--1" src={icon} height={36} width={60} alt="" />
      <div className="">
        <p className="bank-name">{bank}</p>
        <p>{value}</p>
        <p className="saldo">{saldo && `Rp. ${saldo}`}</p>
        <p className="eror">{eror}</p>
      </div>
      {hasButton && (
        <Button className="ms-auto" variant={variant} size="sm" onClick={handleClick}>
          {buttonValue}
        </Button>
      )}
    </Stack>
  );
}

export default PaymentVarian;