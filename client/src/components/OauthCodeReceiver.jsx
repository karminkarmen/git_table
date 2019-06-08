import * as React from 'react';
import { connect } from 'react-redux';
import { Dimmer, Loader } from 'semantic-ui-react';
import { fetchLoggedUserName } from '../actions/user';

class OauthReceiver extends React.Component {
  login = location => {
    this.props.fetchLoggedUserName(location);
  };

  componentDidMount() {
    this.login(window.location);
  }

  render() {
    const { hasErrored, isLoading } = this.props;
    if (hasErrored) {
      return <p>User is not authorized</p>;
    }
    if (isLoading) {
      return (
        <Dimmer active>
          <Loader size="medium">Loading</Loader>
        </Dimmer>
      );
    }
    return null;
  }
}

const mapStateToProps = state => {
  return {
    hasErrored: state.userDataHasErrored,
    isLoading: state.userDataIsLoading,
  };
};

export default connect(
  mapStateToProps,
  { fetchLoggedUserName }
)(OauthReceiver);
