import * as React from 'react';
import _ from 'lodash';
import Moment from 'react-moment';
import { connect } from 'react-redux';
import { Table } from 'semantic-ui-react';

const RepositoriesTableBody = props => {
  const { slicedRepositories, userName } = props;
  return (
    <Table.Body>
      {_.map(
        slicedRepositories,
        ({ id, name, owner, stargazers_count, created_at }) => (
          <Table.Row key={id} active={owner.login === userName}>
            <Table.Cell>{id}</Table.Cell>
            <Table.Cell>{name}</Table.Cell>
            <Table.Cell>{owner.login}</Table.Cell>
            <Table.Cell>{stargazers_count}</Table.Cell>
            <Table.Cell>
              <Moment format="YYYY-MM-DD">{created_at}</Moment>
            </Table.Cell>
          </Table.Row>
        )
      )}
    </Table.Body>
  );
};

const mapStateToProps = state => {
  const { userName, slicedRepositories } = state;
  return {
    userName,
    slicedRepositories,
  };
};

export default connect(mapStateToProps)(RepositoriesTableBody);
