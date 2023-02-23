import Stack from 'react-bootstrap/Stack';
import Image from "../../image/image";
import Button from '../../../atoms/Button';

function GCashVarian({ icon, gap, value, className = '', saldo, variant, buttonValue, iconEnd, imgEndVisible, saldoVisible }) {
  const hasButton = buttonValue !== null && buttonValue !== undefined;

  return (
    <Stack
      direction="horizontal"
      gap={gap}
      className={"gCashVarian " + className }
      disabled={className.includes('not-enough')}
      style={{ cursor: className.includes('not-enough') ? 'default' : 'pointer' }}
    >
      <Image className="me-1 mt--1" src={icon} height={36} width={60} alt="" />
      <div className="">
        <p>{value}</p>
      </div>
      {hasButton && (
        <Button className="ms-auto" variant={variant} size="sm">
          {buttonValue}
        </Button>
      )}
      <Image className={"ms-auto mt--1 d-" + imgEndVisible} src={iconEnd} height={24} width={24} alt="" />
      <p className={"ms-auto saldo d-" + saldoVisible}>{saldo && `Rp. ${saldo}`}</p>
    </Stack>
  );
}

export default GCashVarian;