import Stack from 'react-bootstrap/Stack';
import Image from "../../image/image";
import Button from '../../../atoms/Button';

function RiwayatVarian({ icon, gap, value, className = '', subValue, date }) {

  return (
    <Stack
        direction="horizontal"
        gap={gap}
        className={"riwayatVarian " + className }
        disabled={className.includes('not-enough')}
        style={{ cursor: className.includes('not-enough') ? 'default' : 'pointer' }}
    >
        <div className="">
            <p>{value}</p>
            <p className="date">{date}</p>
        </div>
        <Image className="ms-auto mt--1" src={icon} height={36} width={60} alt="" />
    </Stack>
  );
}

export default RiwayatVarian;
