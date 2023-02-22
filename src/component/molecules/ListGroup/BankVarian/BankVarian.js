import Stack from 'react-bootstrap/Stack';
import Image from "../../image/image";
import Button from '../../../atoms/Button';

function BankVarian({ icon, gap, value, className = '', subValue, variant, buttonValue, imgEndVisible }) {
  const hasButton = buttonValue !== null && buttonValue !== undefined;

  return (
    <Stack
      direction="horizontal"
      gap={gap}
      className={"bankVarian " + className }
      disabled={className.includes('not-enough')}
      style={{ cursor: className.includes('not-enough') ? 'default' : 'pointer' }}
    >
      <Image className="me-1 mt--1" src={icon} height={36} width={60} alt="" />
      <div className="">
        <p>{value}</p>
        <p className="subValue">{subValue}</p>
      </div>
      {hasButton && (
        <Button className="ms-auto" variant={variant} size="sm">
          <Image className={"ms-auto mt--1 d-" + imgEndVisible} src={buttonValue} height={16} width={16} alt="" />
        </Button>
      )}
    </Stack>
  );
}

export default BankVarian;