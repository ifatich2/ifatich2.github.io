import { Card, Stack } from 'react-bootstrap';
import Image from "../../image/image";
import Button from '../../../atoms/Button';

function TeContainerVarian({ icon, saldo, saldoBlokir, nomorRekening }) {

    return (
        <Card className="teContainer">
            <Card.Header>
                <Stack direction="horizontal">
                    <div className="">
                        <p >Saldo Efektif</p>
                        <p className="saldo">{saldo + " gr"}</p>
                        <p className="capSaldoBlokir">
                            Saldo blokir : 
                            <span className="saldoBlokir">
                                {" " + saldoBlokir}
                            </span>
                        </p>
                    </div>
                    <Image className="me-1 mt--1 ms-auto" src={icon} height={40} width={40} alt="" />
                </Stack>
            </Card.Header>
            <Card.Body>
                {nomorRekening}
            </Card.Body>
            <Card.Footer>
                <Button className="p-0" variant="tertiary">
                    Utamakan
                </Button>
            </Card.Footer>
        </Card>
    );
}

export default TeContainerVarian;
