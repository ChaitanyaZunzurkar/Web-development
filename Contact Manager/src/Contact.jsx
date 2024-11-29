/* eslint-disable react/prop-types */
import style from './Contact.module.css'
import { FaUserCircle } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";

export default function Contact({contact , deleteContact}) {
    return (
        <div className={style.contact}>
            <div className={style.container}>
                <div>
                    <FaUserCircle color="black" size={40} style={{ marginRight: '8px' }} />
                </div>
                <div className={style.info}>
                    <strong className={style.name}>{contact.name}</strong>
                    <div className={style.ContactInfo}>
                        <p>{contact.email}</p>
                        <p>{contact.number}</p>
                    </div>
                </div>
            </div>
            <div>
                <RiDeleteBin6Line color="red" size={17} style={{ cursor: 'pointer' }} onClick={() => deleteContact(contact)}/>
            </div>
        </div>
    )
}