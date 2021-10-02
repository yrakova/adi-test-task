import React from 'react';
import PropTypes from 'prop-types';

const TableContent = ({ items, columnsList }) => {
  const renderTableData = () => {
    const columnNames = [...columnsList];
    return items.map((item) => {
      const { email: id } = item;
      return (
        <tr key={id}>
          {columnNames.map((columnName) => {
            const { [columnName]: value } = item;
            return <td key={columnName}>{value}</td>;
          })}
        </tr>
      );
    });
  };

  return (
    <table className="w-full">
      <thead>
        <tr>
          {columnsList.map((title) => (
            <th key={title}>{title}</th>
          ))}
        </tr>
      </thead>
      <tbody>{renderTableData()}</tbody>
    </table>
  );
};

TableContent.propTypes = {
  items: PropTypes.arrayOf(PropTypes.any),
  columnsList: PropTypes.arrayOf(PropTypes.string),
};

TableContent.defaultProps = {
  items: [],
  columnsList: [],
};

export default TableContent;
