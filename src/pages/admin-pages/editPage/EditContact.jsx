import React, { useState } from 'react';
import { PageHeader } from "../../../components/admin-components/PageHeader";
import { InputLink } from '../../../components/admin-components/formElememt/InputLink'

export const EditContact = () => {
   const contactsData = [
      {
         id: 1,
         name: 'Email',
         contact: 'info@baza-trainee.tech',
         link: 'mailto:info@baza-trainee.tech'
      },
      {  
         id: 2,
         name: 'Telegram',
         contact: 'telegram_link',
         link: 'https://t.me/+CBXkAJlsCy83ZDYy'
      }
   ];

   const [email, setEmail] = useState(contactsData[0].contact);
   const [telegram, setTelegram] = useState(contactsData[1].contact);

   const handleSaveChanges = () => {
      console.log("Email:", email);
      console.log("Telegram:", telegram);
      
   };

   const isSaveButtonDisabled = email.trim() === '' || telegram.trim() === '';

   return (
      <section className="edit-contact-container">      
         <PageHeader title={"Редагувати контакти"} />   
         <div className='edit-contact-form-wrap'>
            <div className='edit-contact-form'>          
               <InputLink                  
                  setSmInput={setEmail}
                  label={"Email:"}
                  value={email} 
               /> 
               <InputLink                  
                  setSmInput={setTelegram}
                  label={"Telegram:"}
                  value={telegram} 
               /> 
            </div>        
            <button className="admin-button" onClick={handleSaveChanges} disabled={isSaveButtonDisabled}>Внести зміни</button>  
         </div>     
      </section>
   );
};

