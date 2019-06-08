import * as React from 'react';
import Input from '../InputComponent/Input';

class Form extends React.Component {
  render() {
    return (
      <div>
        <Input placeholder="Repository name" />
      </div>
    );
  }
}

export default Form;
