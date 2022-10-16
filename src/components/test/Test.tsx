import React from 'react'
import { useQuery } from 'react-query';
import { client } from '../../pocketbase/config';
import { TheTable } from '../../table';

import { Record } from 'pocketbase';
import { useReactTable, getCoreRowModel, flexRender, createColumnHelper } from '@tanstack/react-table';
import { columns } from '../ReactTable/RTable';
import { PaymentResponnse } from '../Payments/util/types';

interface TestProps {

}
// id: string
// created: string
// updated: string
// "@collectionId": string
// "@collectionName": string
// "@expand": Expand
// amount: number
// createdBy: string
// deletedAt: string
// deletedBy: string
// shop: string
// updatedBy: string
export const header = [
  { name: "PayId", prop: "id", type: "string", editable: true },
  { name: "Created On ", prop: "created", type: "date", editable: true },
  { name: "Updated On", prop: "updated", type: "date", editable: true },
  { name: "Amount", prop: "amount", type: "number", editable: true },
  { name: "Shop name", prop: "shop.name", type: "expand", editable: true },



]

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

console.log("data === ",data)
return (
<div className=" w-full min-h-screen h-full">
    <TheTable
          rows={data}
          header={header}
   
        />
  </div>
);
}



