import { Fragment } from 'react';
import classname from 'classnames';

const Table = ({data, config, keyFn}) => {
    const renderedRows = data.map((row) => {
        const renderedCells = config.map((column) => {
            const className = classname("px-6 py-4", {
                                        "font-medium text-gray-900 whitespace-nowrap dark:text-white" : column.highLight
                                    });
            return (
                <td className={className} key={column.label}>{column.render(row)}</td>
            )
        });

        return (
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700" key={keyFn(row)}>
                {renderedCells}
            </tr>
        )
    })

    const renderedHeaders = config.map((column) => {
        if(column.header){
            return <Fragment key={column.name}>{column.header()}</Fragment>
        }

        return <th className='px-6 py-3' key={column.label}>
                {column.label}
            </th>

    })

    return (
        <table className='w-full text-sm text-left text-gray-500 dark:text-gray-400'>
            <thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
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