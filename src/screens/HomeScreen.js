import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { StackActions, NavigationActions } from 'react-navigation';
import { v4 as uuidv4 } from 'uuid';
import { HomeTemplate } from '../components/templates';
import { FruitsList } from '../utils';
import { addListCart, editTotal } from '../store/actions';

const HomeScreen = (props) => {
  const [search, setSearch] = useState('');
  const [list, setList] = useState([FruitsList]);
  const [newList, setNewList] = useState([]);

  const resetAction = StackActions.reset({
    index: 0,
    actions: [NavigationActions.navigate({ routeName: 'LoginScreen' })]
  });

  const addItem = async (fruit, price) => {
    const pushList = await props.listCart;
    const newTotal = props.total;
    const randomID = uuidv4();
    pushList.push({ id: randomID, fruit, price });
    props.editTotal(parseFloat(newTotal) + parseFloat(price));
    props.addListCart(await pushList);
  };

  useEffect(() => {
    if (search === '') setList(FruitsList);
    else {
      setNewList(list.filter(
        (item) => item.fruit.toLowerCase().indexOf(search.toLowerCase()) > -1
      ));
    }
  }, [search]);

  return (
    <HomeTemplate
      onPressCart={() => props.navigation.navigate('CartScreen')}
      onPressLogout={() => props.navigation.dispatch(resetAction)}
      onChangeText={(t) => setSearch(t)}
      value={search}
      data={search === '' ? list : newList}
      onPressMore={(f, p) => addItem(f, p)}
      listFruit={props.listCart}
    />
  );
};

const mapStateToProps = ({ UserReducer, ListReducer }) => {
  const { rememberCPFPass, cpf, pass } = UserReducer;
  const { total, listCart } = ListReducer;
  return {
    rememberCPFPass,
    cpf,
    pass,
    total,
    listCart
  };
};

export default connect(mapStateToProps, { addListCart, editTotal })(HomeScreen);
