import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import * as Print from 'expo-print';
import { shareAsync } from 'expo-sharing';
import { CheckoutTemplate } from '../components/templates';

const CheckoutScreen = (props) => {
  const [loading, setLoading] = useState(false);
  const [pdfList, setPdfList] = useState('');
  const pdfCPF = `CPF: ${props.cpf}`;
  const pdfTotal = `Valor Total: ${props.total.toFixed(2)}`;

  const html = `
<html>
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no" />
  </head>
  <body style="text-align: center;">
    <h1 style="font-size: 40px; font-family: Helvetica Neue; font-weight: normal;">
      COMPROVANTE DE COMPRA
    </h1>
    <br>
    <br>
    <h3>
    ${pdfCPF}
    <h3>
    <br>
    ${pdfList}
    <br>
    <h3>
    ${pdfTotal}
    </h3>
  </body>
</html>
`;

  const setList = async () => {
    var listAux = '';
    for (x in props.listCart) {
      listAux += ` Fruta: ${props.listCart[x].fruit}  Preço: ${props.listCart[x].price} /`;
    }
    setPdfList(await listAux.substring(0, listAux.length - 1));
  };

  const onPressCheck = async () => {
    setLoading(true);
    await setList();
    const { uri } = await Print.printToFileAsync({ html });
    await shareAsync(uri, { UTI: '.pdf', mimeType: 'application/pdf' });
    setLoading(false);
  };

  useEffect(() => {
    setList();
  }, [props.listCart]);

  return (
    <CheckoutTemplate
      onPressNoItem={() => props.navigation.navigate('HomeScreen')}
      cpf={props.cpf}
      total={props.total.toFixed(2)}
      data={props.listCart}
      onPressCheck={onPressCheck}
      loading={loading}
    />
  );
};

const mapStateToProps = ({ UserReducer, ListReducer }) => {
  const { cpf } = UserReducer;
  const { total, listCart } = ListReducer;
  return {
    cpf,
    total,
    listCart
  };
};

export default connect(mapStateToProps)(CheckoutScreen);
