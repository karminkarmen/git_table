import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './store';
import Form from './components/FormComponent/Form';
import RepositoriesTable from './components/RepositoriesTableComponent/RepositoriesTable';
import styled from 'styled-components';
import Header from './components/HeaderComponent/Header';
import RowsCountSelectBoxComponent from './components/RowsCountSelectBoxComponent/RowsCountSelectBoxComponent';
import Button from './components/ButtonComponent/Button';
import OauthReceiver from './components/OauthCodeReceiver';

const AppStyledDiv = styled.div`
  display: flex;
  align-items: center;
  padding: 10vh 20vw;
  flex-direction: column;
`;

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppStyledDiv className="App">
          <Header />
          <Form />
          <RepositoriesTable />
          <RowsCountSelectBoxComponent />
          <Button />
          <OauthReceiver />
        </AppStyledDiv>
      </Provider>
    );
  }
}

export default App;
