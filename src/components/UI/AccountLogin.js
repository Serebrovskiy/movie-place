import React from 'react';
import './AccountLogin.css';


function AccountLogin() {
  return (
    <from className="account-login">
      <input type="text" className="account-login_input" name="inputLogin" />
      <input type="text" className="account-login_input" name="inputPassword" />
      <button type="button" className="account-login_button">войти</button>
    </from>
  );
}

export default AccountLogin;