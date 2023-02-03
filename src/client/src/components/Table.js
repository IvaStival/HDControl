import { Fragment } from 'react';

import './Table.css';

const Table = ({data, config, keyFn}) => {
    const renderedRows = data.map((row) => {
        const renderedCells = config.map((column) => {
            // const className = classname({
            //                             "font-medium text-gray-900 whitespace-nowrap dark:text-white" : column.highLight
            //                         });
            return (<td key={column.label}>{column.render(row)}</td>)
        });

        return (
            <tr key={keyFn(row)}>
                {renderedCells}
            </tr>
        )
    })

    const renderedHeaders = config.map((column) => {
        if(column.header){
            return <Fragment key={column.name}>{column.header()}</Fragment>
        }

        return <th key={column.label}>
                {column.label}
            </th>
    })

    return (
        <table className='table-content'>
            <thead >
                <tr>
                    {renderedHeaders}
                </tr>
            </thead>
            <tbody>
                {renderedRows}
            </tbody>
        </table>
    )
}

export default Table;