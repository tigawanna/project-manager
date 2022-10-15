import React from 'react'
import { useQuery } from 'react-query';
import { client } from '../../pocketbase/config';
import { TheTable } from '../../table';
import { header } from '../../utils/payment-vars';

import { Record } from 'pocketbase';
import { useReactTable, getCoreRowModel, flexRender, createColumnHelper } from '@tanstack/react-table';
import { columns } from '../ReactTable/RTable';
import { PaymentResponnse } from '../Payments/util/types';

interface TestProps {

}


export const Test: React.FC<TestProps> = ({}) => {

  const getPayments = async () => {
  return  await client.records.getList('payments', 2, 50, {
      filter: 'created >= "2022-01-01 00:00:00"', expand: "shop"
    });
  };

  const query = useQuery(["test-payments"],getPayments)
  const data = query?.data?.items as PaymentResponnse[] | undefined

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  })

  if (query.error) {
    return (
      <div className="w-full h-full flex flex-wrap  text-red-900">
        ERROR LOADING payments {query.error?.message}
      </div>
    );
  }

  if (query.isLoading) {
    return <div className="w-full h-full flex-center"> loading ..... </div>;
  }


return (
<div className=" w-full min-h-screen h-full">
    <div className="w-full h-full">
      <table className='w-full h-full '>
        <thead className='sticky top-[60px] z-50 w-full '>
          {table.getHeaderGroups().map(headerGroup => (
            <tr key={headerGroup.id} className=''>
              {headerGroup.headers.map(header => (
                <th key={header.id} className='bg-purple-900 p-3'>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody className='w-full '>
          {table.getRowModel().rows.map(row => (
            <tr key={row.id} className=''>
              {row.getVisibleCells().map(cell => (
                <td key={cell.id} className='w-full'>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
        <tfoot>
          {table.getFooterGroups().map(footerGroup => (
            <tr key={footerGroup.id}>
              {footerGroup.headers.map(header => (
                <th key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                      header.column.columnDef.footer,
                      header.getContext()
                    )}
                </th>
              ))}
            </tr>
          ))}
        </tfoot>
      </table>
      <div className="h-4" />
      <button onClick={() => console.log("goo")} className="border p-2">
        Rerender
      </button>
    </div>
  </div>
);
}



