import React, { useRef, useState, useEffect, useLayoutEffect } from "react";
import { collection, limit, orderBy, where } from "firebase/firestore";
import { useFirestoreQueryData } from "@react-query-firebase/firestore";
import { db } from "../../firebase/firebaseConfig";
// import { TheTable } from "table-for-react";
import { Payment as PaymentType } from "./../../utils/other/types";
import { header } from "../../utils/payment-vars";
import { IconContext } from "react-icons";
import { FaRegEdit, FaTimes, FaPlus, FaPrint } from "react-icons/fa";
import { PaymentForm } from "./PaymentForm";
import { useNavigate } from "react-router-dom";
import {
  monthindex,
  months,
  getMonthIndex,
  getmonth,
} from "../../utils/paymentutils";
import {
  deletePayment,
  setPayment,
  dummy_payment,
  insert_dummy_to_cache,
} from "./../../utils/sharedutils";
import { findFloor } from "./../../utils/other/util";
import { useQuery, useQueryClient } from "react-query";
import { TheTable } from "./../../table/index";
import { useCountdownTimer } from "use-countdown-timer";
import { Admin, User } from 'pocketbase';
import useMeasure from "react-use-measure";
import { Profile } from "../auth/types";
import { client } from "../../pocketbase/config";
import { PaymentResponnse } from "./util/types";






interface paymentProps {
  user?: User | null
}

export const Payment: React.FC<paymentProps> = ({ user }) => {

  const [update, setUpdate] = useState(false);
  const [error, setError] = useState({ name: "", error: "" });
  const [open, setOpen] = useState(false);
  const [month, setMonth] = useState<string>(getmonth);
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const [ref, top] = useMeasure();

  const [mainH, setMainH] = useState(window?.innerHeight ?? 0);

  // console.log("total height ==== >>  ", mainH);
  // console.log("top component height ==== >>  ",top.height);
  // console.log("bottom component height ==== >>  ", bottom.height);

 
  const totalHeight = mainH - top.height - 70;
  const bottomHeight = totalHeight;

  // console.log(" ratio === ", ratio);

  const validate = (prev: any, current: any) => {
    setError({ name: "", error: "" });
    return true;
  };

  const saveChanges = (prev: PaymentType, current: PaymentType) => {
    // console.log("saving ...",current)
    const item: PaymentType = {
      date: current.date,
      shopnumber: current.shopnumber.toUpperCase(),
      madeBy: current.madeBy,
      month: current.month,
      payment: current.payment,
      paymentmode: current.paymentmode,
      paymentId: current.paymentId,
      editedBy: user?.profile?.name,
      editedOn: new Date(),
    };
    setPayment(
      item,
      current.paymentId,
      findFloor(current.shopnumber),
      current.shopnumber,
      queryClient
    );
  };

  const deleteRow = (current: PaymentType) => {
    // console.log("delteing current ,",current)
    setError({ name: "name", error: "not john" });
    deletePayment(
      current,
      findFloor(current.shopnumber),
      current.shopnumber,
      queryClient
    );
  };

  const clearError = () => {
    setError({ name: "", error: "" });
  };

  const selectMonth = (index: number) => {
    setMonth(months[index]);
  };


  
  // const paymentRef = query(
  //   collection(db, "payments"),
  //   orderBy("date", "desc"),
  //   where("month", "==", month)
  // );
  // const paymentQuery = useFirestoreQueryData(
  //   ["payments", month],
  //   paymentRef,
  //   {}
  // );

  const getPayments = async () => {
   return await client.records.getList('payments', 1, 50, {
      filter: 'created >= "2022-01-01 00:00:00"', expand:"shop"
    });
  };


  const paymentsQuery =useQuery(["payments"],getPayments,{
    select:(data)=>{
      return data
    }
  })

  console.log("paymentsdata === ",paymentsQuery)
  // if (!paymentQuery.data && month === getmonth) {
  //   insert_dummy_to_cache(dummy_payment,["payments",getmonth],queryClient)
  // }

  if (paymentsQuery.error) {
    return (
      <div className="w-full h-full flex flex-wrap  text-red-900">
        ERROR LOADING payments {paymentsQuery.error?.message}
      </div>
    );
  }

  if (paymentsQuery.isLoading) {
    return <div className="w-full h-full flex-center"> loading ..... </div>;
  }
  const payments = paymentsQuery.data?.items as PaymentResponnse[] | undefined
 
  // console.log("paymets being sent to table ====== ",payments)
 
  return (
    <div className="w-full h-[100%] ">
      <div
        ref={ref}
        className="h-fit w-full bg-slate-400  flex-wrap flex-center fixed top-[60px]
      right-1 left-1 p-1 "
      >
        <div className="h-full w-fit bg-slate-600 p-2  flex-center rounded-xl">
          <IconContext.Provider
            value={{
              size: "25px",
              className: "mx-[15px] text-white hover:text-purple-600",
            }}
          >
            <FaRegEdit onClick={() => setUpdate(!update)} />
            {!open ? (
              <FaPlus onClick={() => setOpen(!open)} />
            ) : (
              <FaTimes onClick={() => setOpen(!open)} />
            )}
            <FaPrint
              onClick={() =>
                navigate("/print-preview", {
                  state: {
                    rows: payments,
                    header,
                    title: `payments for ${payments[0]?.created}`,
                  },
                })
              }
            />
          </IconContext.Provider>
        </div>
        <div className="  ml-3 flex-center flex-wrap">
          {/* eslint-disable-next-line array-callback-return */}
          {months.map((item, index) => {
            if (index <= monthindex) {
              return (
                <div
                  style={{
                    backgroundColor:
                      index === getMonthIndex(month) ? "purple" : "",
                  }}
                  key={index}
                  onClick={() => selectMonth(index)}
                  className="w-fit m-1 bg-slate-600 hover:bg-purple-700 p-2 text-white 
                  cursor-pointer rounded-lg"
                >
                  {item}
                </div>
              );
            }
          })}
        </div>
      </div>

      {open ? (
        <div className="bg-slate-700 fixed z-50 w-full h-full">
          <PaymentForm
            user={user}
            open={open}
            setOpen={setOpen}
            queryClient={queryClient}
          />
        </div>
      ) : null}

      <div
        style={{
          // top: `${ratio}%`,
          height: bottomHeight,
          bottom: 0,
        }}
        className="absolute  w-[95%]  overflow-y-scroll  left-[2%] right-[2%]
      scrollbar-thin scrollbar-thumb-purple-400 "
      >
        {/* <TheTable
          rows={payments}
          header={header}
          update={update}
          error={error}
          validate={validate}
          saveChanges={saveChanges}
          deleteRow={deleteRow}
          clearError={clearError}
        /> */}
        {payments?.map(item=>{
          return(
          <div className="w-full p-1 m-[2px]">
              <div className="w-full p-1 m-[2px]"> {item.id}</div>
              <div className="w-full p-1 m-[2px]">{item["@expand"].shop.name}</div>
               <div className="w-full p-1 m-[2px]">{item["@expand"].shop.tenant}</div>
              
          
           
            </div>
          
          )
        })}
      </div>
   
    </div>
  );
};
