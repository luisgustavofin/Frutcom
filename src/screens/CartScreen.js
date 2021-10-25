import React from 'react';
import { connect } from 'react-redux';
import { CartTemplate } from '../components/templates';
import { addListCart, editTotal } from '../store/actions';

const CartScreen = (props) => {
  const deleteItem = async (fruit, price) => {
    if (props.listCart.length <= 1) {
      props.editTotal(0);
      props.addListCart();
    }
    else {
      const newList = await props.listCart;
      const newTotal = props.total;
      const removeIndex = await newList.findIndex(item => item.fruit === fruit);
      newList.splice(removeIndex, 1);
      props.editTotal(parseFloat(newTotal) - parseFloat(price));
      props.addListCart(await newList);
    }
  };

  return (
    <CartTemplate
      onPressNoItem={() => props.navigation.navigate('HomeScreen')}
      onPressCheckout={() => props.navigation.navigate('CheckoutScreen')}
      data={props.listCart}
      total={props.total.toFixed(2)}
      onPressDelete={(f, p) => deleteItem(f, p)}
    />
  );
};

const mapStateToProps = ({ ListReducer }) => {
  const { total, listCart } = ListReducer;
  return {
    total,
    listCart
  };
};

export default connect(mapStateToProps, { addListCart, editTotal })(CartScreen);
