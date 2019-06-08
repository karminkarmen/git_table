import * as React from 'react';
import { connect } from 'react-redux';
import { Table } from 'semantic-ui-react';
import { handleSort } from '../../actions/table';

const RepositoriesTableHeader = props => {
  const { direction, column, handleSort } = props;
  return (
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell
          sorted={column === 'id' ? direction : null}
          onClick={() => handleSort('id', direction)}
        >
          ID
        </Table.HeaderCell>
        <Table.HeaderCell
          sorted={column === 'name' ? direction : null}
          onClick={() => handleSort('name', direction)}
        >
          Repo Title
        </Table.HeaderCell>
        <Table.HeaderCell
          sorted={column === 'owner.login' ? direction : null}
          onClick={() => handleSort('owner.login', direction)}
        >
          Owner
        </Table.HeaderCell>
        <Table.HeaderCell
          sorted={column === 'stargazers_count' ? direction : null}
          onClick={() => handleSort('stargazers_count', direction)}
        >
          Stars
        </Table.HeaderCell>
        <Table.HeaderCell
          sorted={column === 'created_at' ? direction : null}
          onClick={() => handleSort('created_at', direction)}
        >
          Created at
        </Table.HeaderCell>
      </Table.Row>
    </Table.Header>
  );
};
const mapStateToProps = state => {
  return {
    direction: state.direction,
    column: state.column,
  };
};

export default connect(
  mapStateToProps,
  { handleSort }
)(RepositoriesTableHeader);
