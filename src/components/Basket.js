export default function Basket (props) {
  const { cartItems, onAdd, onRemove } = props
  const itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0)
  const taxPrice = itemsPrice * 0.14
  const shippingPrice = itemsPrice > 2000 ? 0 : 20
  const totalPrice = itemsPrice + taxPrice + shippingPrice
  return (
    <aside className='block col-1'>
      <h2>Cart Items</h2>
      {cartItems.length === 0 && <div>Cart is empty</div>}

      {/* map each item to a div and set key to get rid of warning */}
      {cartItems.map(item => (
        <div key={item.id} className='row'>
          <div className='col-1'>{item.name}</div>
          <div className='col-1'>
            <button onClick={() => onRemove(item)} className='remove'>
              -
            </button>
            <button onClick={() => onAdd(item)} className='add'>
              +
            </button>
          </div>
          <div className='col-1 text-right'>
            {item.qty} x ${item.price.toFixed(2)}
          </div>
        </div>
      ))}
      {cartItems.length !== 0 && (
        <>
          <hr />
          <div className='row'>
            <div className='col-1'>Items Price</div>
            {/* toFixed changes the number to two decimal point */}
            <div className='col-1 text-right'>${itemsPrice.toFixed(2)}</div>
          </div>
          <div className='row'>
            <div className='col-1'>Tax Price</div>
            <div className='col-1 text-right'>${taxPrice.toFixed(2)}</div>
          </div>
          <div className='row'>
            <div className='col-1'>Shipping Price</div>
            <div className='col-1 text-right'>${shippingPrice.toFixed(2)}</div>
          </div>
          <div className='row'>
            <div className='col-1'>
              <strong>Total Price</strong>
            </div>
            <div className='col-1 text-right'>
              <strong>${totalPrice.toFixed(2)}</strong>
            </div>
          </div>
          <div className='row'>
            <button onClick={() => alert('ImplementCheckout!')}>
              Checkout
            </button>
          </div>
        </>
      )}
    </aside>
  )
}
