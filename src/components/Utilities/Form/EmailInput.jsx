import { useState } from "react";
import useValidation from "../Contexts/UserContext";

const EmailInput = () => {

  const [email, setEmail] = useState('');
  const { bind: bindEmail } = useValidation(email, setEmail, 'email');

  return (
    <>
      <div className="form-floating mt-2">
        <input 
          type="email"
          id="email"
          name="email"
          autoComplete="off"
          placeholder="example@mail.com"
          required
          {...bindEmail}
        />
        <label htmlFor="email" className="form-label d-flex">Adresse mail :
        </label>
      </div>
      <div 
        id="uidnote"
        className={emailFocus && email && !validEmail ? "instructions mt-2 alert alert-warning" : "offscreen d-none"}
        role="alert"
      >
        <FontAwesomeIcon icon={faInfoCircle}/>
        &nbsp;L'adresse mail doit avoir le bon format.
      </div>  
    </>
  );
};

export default EmailInput;