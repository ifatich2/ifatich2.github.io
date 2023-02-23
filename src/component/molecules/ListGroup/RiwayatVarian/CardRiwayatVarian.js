import Stack from 'react-bootstrap/Stack';
import Image from "../../image/image";
import GBadge from "../../Badge/Badge";


function CardRiwayatVarian({ className, icon, value, date, badge, status, emas }) {

  return (
    <div className={'riwayatVarian ' + className}>
      <Stack className='mb-22' direction="horizontal" >
        <div className="">
          <p>{value}</p>
          <p className="date">{date}</p>
        </div>
        <Image className="ms-auto mt--1" src={icon} height={36} width={60} alt="" />
      </Stack>
      <Stack className='border-top' direction="horizontal" >
        <GBadge bg={badge} BadgeContent={status} />
        <p className="ms-auto emas">{emas + "gram"}</p>
      </Stack>
    </div>
  );
}

export default CardRiwayatVarian;
