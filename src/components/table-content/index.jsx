import React from 'react';
import PropTypes from 'prop-types';

import generateChunks from '../utils/generate-chunks';

const TableContent = ({ products, columnsCount }) => {
  const [chunkedProducts, setChunkedProducts] = React.useState([]);

  React.useEffect(() => {
    setChunkedProducts(generateChunks(products, columnsCount));
  }, [products, columnsCount]);

  const renderTableData = () =>
    chunkedProducts.map((rowProducts) => renderTableRow(rowProducts));

  const renderTableColumn = (product) => (
    <td key={product.id}>
      <img
        alt="gallery"
        className="w-48 h-48 object-cover object-center"
        src={product.imgSrc}
      />
    </td>
  );

  const renderTableRow = (rowProducts) => (
    <tr key={rowProducts.map(({ id }) => id).join(' ')}>
      {rowProducts.map((product) => renderTableColumn(product))}
    </tr>
  );

  return (
    <table>
      <tbody>{renderTableData()}</tbody>
    </table>
  );
};

TableContent.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.string, imgSrc: PropTypes.string })
      .isRequired
  ),
  columnsCount: PropTypes.number,
};

TableContent.defaultProps = {
  products: [],
  columnsCount: 3,
};

export default TableContent;
