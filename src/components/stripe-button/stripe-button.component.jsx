import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    'pk_test_51KKQh0BHhFiSXRPkB6UMdqd7BMXQnO6Nv1rDPhGgXFZyl7TBuRPmPwaHUr0ML4wbXHd8nqUm1KhP9RKh8XAwKQSC00N5VRS5tr';

    const onToken = token => {
      console.log(token);
      alert('Payment Success');
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