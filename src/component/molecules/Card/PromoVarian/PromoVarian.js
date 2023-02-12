import React, { useState, useEffect } from "react";
import Button from '../../../atoms/Button';
import Image from "../../image/image";
import Stack from 'react-bootstrap/Stack';
import GBadge from '../../Badge/Badge';

export const PromoVarian = ({ title, cardImage, icon, descIcon, buttonValue, KodePromo, date, ...props}) => {
    const [copySuccess, setCopySuccess] = useState("");
    const [isHidden, setIsHidden] = useState(true);
    const [isButtonHidden, setIsButtonHidden] = useState(false);
    const [showCopyButton, setShowCopyButton] = useState(true);
  
    const copyToClipboard = (e) => {
        const textArea = document.createElement("textarea");
        textArea.value = "Contoh Kode Promo";
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand("copy");
        document.body.removeChild(textArea);
        setCopySuccess("Kode Promo berhasil disalin!");
        setShowCopyButton(false);
    };
      
    useEffect(() => {
        let timeoutId = null;
        if (copySuccess) {
        timeoutId = setTimeout(() => {
            setCopySuccess("");
            setShowCopyButton(true);
        }, 2000);
        }
        return () => {
        clearTimeout(timeoutId);
        };
    }, [copySuccess]);

    return (
        <div className="card mb-2 card-promo">
            <Image className="top" src={cardImage} />
            <div className="card-body">
                <Stack className="mb-3" direction="horizontal">
                    <GBadge bg="success" BadgeContent="Syariah" />
                    <button className="btn btn-link ms-auto date">
                        { descIcon }
                    </button>
                </Stack>
                <h5 className="card-title"> { title } </h5>
                <div className="center-content py-3 my-3">
                    <p className="card-text-2"> 
                        <span> <Image className="me-1 mt--1" src={icon} width={16} height={16} alt="" /> </span>
                        {date}
                    </p>
                    <Stack direction="horizontal" className="copy">
                        <h5 id="kode-promo">{KodePromo}</h5>
                        {!copySuccess && (
                            <button id="salin" className="btn btn-link p-0 ms-auto" onClick={copyToClipboard}>
                                <h5>Salin</h5>
                            </button>
                            )}
                        {copySuccess && <GBadge className="ms-auto" bg="success" BadgeContent={copySuccess} />}
                    </Stack>
                </div>
                <div className="bottom-content">
                    <ol>
                        {props.itemList.map((item, index) => (
                            <li key={index}>
                                {item.itemList}
                            </li>
                        ))}
                    </ol>
                    {!isButtonHidden && (
                        <Button id="show-selengkapnya"  variant="tertiary" ripple="dark" onClick={() => { setIsHidden(false); setIsButtonHidden(true);  }} >
                        <h5>{buttonValue}</h5>
                        </Button>
                    )}
                    {!isHidden && (
                        <div className="hide-content">
                        <h5 className="mb-3">Lihat Selengkapnya</h5>
                        <ol>
                            {props.itemList2.map((item, index) => (
                                <li key={index}>
                                    {item.itemList2}
                                </li>
                            ))}
                        </ol>
                        <Button id="hide-selengkapnya" variant="tertiary" ripple="dark" onClick={() => { setIsHidden(true); setIsButtonHidden(false); }} >
                            <h5>Sembunyikan</h5>
                        </Button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default PromoVarian;