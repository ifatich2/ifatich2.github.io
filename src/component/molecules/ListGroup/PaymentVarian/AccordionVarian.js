import Accordion from 'react-bootstrap/Accordion';
import Image from '../../image/image';
import PaymentVarian from './PaymentVarian';

const AccordionVarian = ({ title, varianData, className, imgSpoiler, spoiler }) => {

  return (
    <Accordion className={`accordion-list ${className}`}>
      <Accordion.Item>
        <Accordion.Header>
          {title}
        </Accordion.Header>
        <Accordion.Body className={'spoiler-container ' + spoiler}>
          <div className={"spoiler"}>
            <Image src={imgSpoiler} width={50} height={30} />
          </div>
        </Accordion.Body>
        <Accordion.Body className='p-0'>
          {varianData.map((varian, index) => (
            <PaymentVarian
              key={index}
              icon={varian.icon}
              value={varian.value}
              saldo={varian.saldo}
              eror={varian.eror}
              selected={varian.selected}
            />
          ))}
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
};

export default AccordionVarian;
