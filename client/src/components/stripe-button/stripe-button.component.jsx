import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    'pk_test_51KKQh0BHhFiSXRPkB6UMdqd7BMXQnO6Nv1rDPhGgXFZyl7TBuRPmPwaHUr0ML4wbXHd8nqUm1KhP9RKh8XAwKQSC00N5VRS5tr';

    const onToken = token => {
      axios({
        url: 'payment',
        method: 'post',
        data: {
          amount: priceForStripe,
          token
        }
      }).then(response => {
        alert('Payment successful');
      }).catch(err => {
        console.log('Payment error: ', JSON.parse(err));
        alert('There was an issue with your payment. Make sure you use test credit card');
      });
    }

    return (
      <StripeCheckout
        label='Pay Now'
        name='CRWN Clothing'
        billingAddress
        shippingAddress
        image='https://svgshare.com/i/CUz.svg'
        description={`Your total is $${price}`}
        amount={priceForStripe}
        panelLabel='Pay Now'
        token={onToken}
        stripeKey={publishableKey}
      />
    );
};

export default StripeCheckoutButton;