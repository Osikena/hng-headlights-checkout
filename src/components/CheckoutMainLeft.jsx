import 'bootstrap/dist/css/bootstrap.min.css'
import SecurePay from '../icons/Secure Pay.svg'
import CreditCard from '../icons/Credit Card.svg'
import BankTransfer from '../icons/Bank Transfer.svg'
import CheckoutMainLeftInput from './CheckoutMainLeftInput'
import CheckoutMainLeftComp from './CheckoutMainLeftComp'
import { useState } from 'react'

function CheckoutMainLeft() {

  const [cardNumber, setCardNumber] = useState('')
  // const [icon, setIcon] = useState(false)

  function cardNum(value){
    setCardNumber(value);
  }

  return (
    <div className="col-xs-12 col-12-sm col-md-12 col-lg-8 col-lxl-8 col-xxl-8" id='CheckoutMainLeft-container'>

      <h4 id='CheckoutMainLeft-text-1'>Billing Details</h4>

      <div id='CheckoutMainLeft-main-div-1'>

        <div className='row' id='CheckoutMainLeft-main-div-1-sub-div-1'>

          <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6" id='CheckoutMainLeft-col-space-com'>
            <CheckoutMainLeftInput label='First name' placeholder='Bassey' />
          </div>

          <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6" id='CheckoutMainLeft-col'>
            <CheckoutMainLeftInput label='Last name' placeholder='John' />
          </div>
          
        </div>

        <div className='row' id='CheckoutMainLeft-main-div-1-sub-div-2'>

          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6" id='CheckoutMainLeft-col-space'>
            <CheckoutMainLeftInput label='Country' placeholder='Your country' />
          </div>

          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6" id='CheckoutMainLeft-col'>
            <CheckoutMainLeftInput label='ZIP/Postal code' placeholder='Your postal code' />
          </div>
          
        </div>

      </div>

      <h4 id='CheckoutMainLeft-text-2'>Payment Method</h4>
      
      <div id='CheckoutMainLeft-main-div-2'>

        <div className='row' id='CheckoutMainLeft-main-div-2-div-1'>

          <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6" id='CheckoutMainLeft-col-space-com'>
            <CheckoutMainLeftComp text='Credit Card' icon1={CreditCard} space='1vw' border='1px solid #01AA6E' />
          </div>

          <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6" id='CheckoutMainLeft-col'>
            <CheckoutMainLeftComp text='Bank Transfer' icon1={BankTransfer} border='1px solid #222222' />
          </div>

        </div>

        <CheckoutMainLeftInput label='Cardholder name' placeholder='' />

        <div className='row gx-5' id='CheckoutMainLeft-main-div-2-div-2'>

          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6" id='CheckoutMainLeft-col-space'>
            <CheckoutMainLeftInput label='Card number' placeholder='' value={cardNumber} functions={e => cardNum(e.target.value)} />
          </div>

          <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3 col-xl-3 col-xxl-3" id='CheckoutMainLeft-col-space-com'>
            <CheckoutMainLeftInput label='Expiry' placeholder='DD/MM/YYYY' />
          </div>

          <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3 col-xl-3 col-xxl-3" id='CheckoutMainLeft-col'>
            <CheckoutMainLeftInput label='CVV' placeholder='' />
          </div>
          
        </div>

      </div>

      <div id='CheckoutMainLeft-icon-div'>
        <img src={SecurePay} alt="SecurePay" id='CheckoutMainLeft-icon' />
      </div>

      <button id='CheckoutMainLeft-btn'>Pay $23.99</button>

    </div>
  )
}

export default CheckoutMainLeft
