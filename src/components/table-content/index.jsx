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
    <td className="border-1 border-gray-900 p-1" key={product.id}>
      <div className="w-full h-24 border-2 rounded-md bg-gray-200 flex justify-center items-center">
        <p className="text-5xl">{product.id}</p>
      </div>
    </td>
  );

  const renderTableRow = (rowProducts) => (
    <tr key={rowProducts.map(({ id }) => id).join(' ')}>
      {rowProducts.map((product) => renderTableColumn(product))}
    </tr>
  );

  return (
    <table className="w-full">
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
