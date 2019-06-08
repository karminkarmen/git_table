import * as React from 'react';
import { connect } from 'react-redux';
import { Table, Menu, Icon } from 'semantic-ui-react';
import { setPageNumber } from '../../actions/pagination';

const RepositoriesTableFooter = props => {
  const { pageNumber, repositories, rowsCount, setPageNumber } = props;
  let pagesCount = Math.ceil(repositories.length / rowsCount);
  return (
    <Table.Footer>
      <Table.Row>
        <Table.HeaderCell colSpan="5">
          <Menu floated="right" pagination inverted>
            <Menu.Item
              icon
              onClick={() =>
                setPageNumber(pageNumber > 0 ? pageNumber - 1 : pageNumber)
              }
            >
              <Icon name="chevron left" />
            </Menu.Item>
            {createFooterMenuItems(pagesCount, pageNumber, setPageNumber)}
            <Menu.Item
              icon
              onClick={() =>
                setPageNumber(
                  pageNumber < pagesCount - 1 ? pageNumber + 1 : pageNumber
                )
              }
            >
              <Icon name="chevron right" />
            </Menu.Item>
          </Menu>
        </Table.HeaderCell>
      </Table.Row>
    </Table.Footer>
  );
};
const mapStateToProps = state => {
  const { pageNumber, repositories, rowsCount } = state;
  return {
    pageNumber,
    repositories,
    rowsCount,
  };
};

export default connect(
  mapStateToProps,
  { setPageNumber }
)(RepositoriesTableFooter);

const createFooterMenuItems = (pagesCount, pageNumber, setPageNumber) => {
  let footerItems = [];

  for (let i = 0; i < pagesCount; i++) {
    footerItems.push(
      <Menu.Item
        key={i}
        active={pageNumber === i ? true : null}
        onClick={() => setPageNumber(i)}
      >
        {i + 1}
      </Menu.Item>
    );
  }
  return footerItems;
};
