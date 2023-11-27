import { Fragment } from "react";

import "./Table.css";

const Table = ({ data, config, keyFn }) => {
  let renderedRows = null;

  if (data.length) {
    renderedRows = data.map((row) => {
      const renderedCells = config.map((column, id) => {
        return <td key={id}>{column.render(row)}</td>;
      });

      return <tr key={keyFn(row)}>{renderedCells}</tr>;
    });
  }

  const renderedHeaders = config.map((column, id) => {
    if (column.header) {
      return <Fragment>{column.header()}</Fragment>;
    }

    return <th key={id}>{column.label}</th>;
  });

  return (
    <table className="table-content">
      <thead>
        <tr>{renderedHeaders}</tr>
      </thead>
      <tbody>{renderedRows}</tbody>
    </table>
  );
};

export default Table;
