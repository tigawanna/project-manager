import { createColumnHelper } from '@tanstack/react-table';
import React from 'react'
import { PaymentResponnse } from '../Payments/util/types';

interface RTableProps {

}

export const RTable: React.FC<RTableProps> = ({}) => {

return (
 <div>

 </div>
);
}

const columnHelper = createColumnHelper<PaymentResponnse>()

export const columns = [
    columnHelper.accessor('id', {
        header: () => <span className=''>ID</span>,
        cell: info => info.getValue(),
        footer: info => info.column.id,
    }),
   columnHelper.accessor('@expand.shop.name', {
       header: () => <span className=''>Shop Name</span>,
        cell: info => info.renderValue(),
       footer: info => <span className='p-1 border-1 '>Shop Name</span>,
    }),
    columnHelper.accessor(row => row?.amount, {
        id: 'amount',
        cell: info => <i>{info.getValue()}</i>,
        header: () => <span className=''>Amount</span>,
        footer: info => info.column.id,
    }),
]







