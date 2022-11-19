import 'bootstrap/dist/css/bootstrap.min.css'

function CheckoutMainLeftInput(props) {
  return (
    <div id='CheckoutMainLeftInput-main' >
        <label htmlFor="" id="CheckoutMainLeftInput-label">{props.label}</label>
        <input type="text" name="" id="CheckoutMainLeftInput-input" placeholder={props.placeholder} 
        value={props.value} onInput={props.functions} />
    </div>
  )
}

export default CheckoutMainLeftInput
