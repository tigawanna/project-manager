import React from 'react'
import { TheTable } from '../../table';
import { header } from '../../utils/payment-vars';

interface TestProps {

}

export const Test: React.FC<TestProps> = ({}) => {
const rows = [
  {
    month: "September",
    editedBy: "Dennis",
    paymentmode: "cash_deposit",
    editedOn: {
      seconds: 1662395964,
      nanoseconds: 815000000,
    },
    date: "05/09/2022",
    payment: "4000",
    paymentId: "M1-01l7ozbbonfirst",
    madeBy: "Dennis",
    shopnumber: "M1-01",
  },
  {
    madeBy: "Dennis",
    payment: 1000,
    paymentmode: "mpesa",
    paymentId: "G-02l7ozqej7ground",
    month: "September",
    date: {
      seconds: 1662396125,
      nanoseconds: 69000000,
    },
    shopnumber: "G-02",
  },
  {
    date: {
      seconds: 1662396108,
      nanoseconds: 171000000,
    },
    month: "September",
    paymentId: "M3-04l7ozq1yothird",
    payment: 1000,
    shopnumber: "M3-04",
    madeBy: "Dennis",
    paymentmode: "cheque",
  },
  {
    shopnumber: "M1-02",
    paymentmode: "mpesa",
    payment: 1000,
    month: "September",
    date: {
      seconds: 1662396100,
      nanoseconds: 635000000,
    },
    madeBy: "Dennis",
    paymentId: "M1-02l7ozpw21first",
  },
  {
    shopnumber: "M2-02",
    month: "September",
    paymentmode: "cheque",
    payment: 1000,
    paymentId: "M2-02l7ozpqmwsecond",
    madeBy: "Dennis",
    date: "05/09/2022",
  },
  {
    paymentId: "M2-03l7ozpjs0second",
    shopnumber: "M2-03",
    month: "September",
    date: {
      seconds: 1662396078,
      nanoseconds: 550000000,
    },
    payment: 1000,
    madeBy: "Dennis",
    paymentmode: "cheque",
  },
  {
    paymentId: "M1-01l7ozp8w8first",
    paymentmode: "cash_deposti",
    date: {
      seconds: 1662396070,
      nanoseconds: 259000000,
    },
    madeBy: "Dennis",
    shopnumber: "M1-01",
    month: "September",
    payment: 1000,
  },
  {
    payment: 1000,
    shopnumber: "M3-04",
    paymentId: "M3-04l7ozp441third",
    madeBy: "Dennis",
    month: "September",
    date: {
      seconds: 1662396065,
      nanoseconds: 35000000,
    },
    paymentmode: "mpesa",
  },
  {
    month: "September",
    shopnumber: "M1-01",
    payment: 1000,
    paymentId: "M1-01l7ozozm9first",
    madeBy: "Dennis",
    paymentmode: "direct_deposit",
    date: {
      seconds: 1662396056,
      nanoseconds: 811000000,
    },
  },
  {
    date: {
      seconds: 1662396050,
      nanoseconds: 690000000,
    },
    shopnumber: "M2-02",
    month: "September",
    madeBy: "Dennis",
    paymentmode: "cheque",
    paymentId: "M2-02l7ozotx8second",
    payment: 1000,
  },
  {
    shopnumber: "M3-03",
    madeBy: "Dennis",
    paymentmode: "cash_deposit",
    date: {
      seconds: 1662396043,
      nanoseconds: 259000000,
    },
    paymentId: "M3-03l7ozoo4tthird",
    payment: 1000,
    month: "September",
  },
  {
    paymentId: "G-01l7oza999ground",
    shopnumber: "G-01",
    paymentmode: "mpesa",
    payment: "3000",
    date: {
      seconds: 1662395350,
      nanoseconds: 975000000,
    },
    madeBy: "Dennis",
    month: "September",
  },
  {
    paymentId: "G-01l7oza09qground",
    payment: "5000",
    date: {
      seconds: 1662395350,
      nanoseconds: 975000000,
    },
    paymentmode: "cash_deposti",
    shopnumber: "G-01",
    month: "September",
    madeBy: "Dennis",
  },
  {
    date: "2022-09-05T16:52:52.989Z",
    shopnumber: "G-02",
    madeBy: "Dennis",
    month: "September",
    payment: 1000,
    paymentmode: "cheque",
    paymentId: "G-02l7p04by8ground",
  },
  {
    month: "September",
    shopnumber: "M1-01",
    payment: 1000,
    paymentId: "M1-01l7ozozm9first",
    madeBy: "Dennis",
    paymentmode: "direct_deposit",
    date: {
      seconds: 1662396056,
      nanoseconds: 811000000,
    },
  },
  {
    date: {
      seconds: 1662396050,
      nanoseconds: 690000000,
    },
    shopnumber: "M2-02",
    month: "September",
    madeBy: "Dennis",
    paymentmode: "cheque",
    paymentId: "M2-02l7ozotx8second",
    payment: 1000,
  },
  {
    shopnumber: "M3-03",
    madeBy: "Dennis",
    paymentmode: "cash_deposit",
    date: {
      seconds: 1662396043,
      nanoseconds: 259000000,
    },
    paymentId: "M3-03l7ozoo4tthird",
    payment: 1000,
    month: "September",
  },
  {
    paymentId: "G-01l7oza999ground",
    shopnumber: "G-01",
    paymentmode: "mpesa",
    payment: "3000",
    date: {
      seconds: 1662395350,
      nanoseconds: 975000000,
    },
    madeBy: "Dennis",
    month: "September",
  },
  {
    paymentId: "G-01l7oza09qground",
    payment: "5000",
    date: {
      seconds: 1662395350,
      nanoseconds: 975000000,
    },
    paymentmode: "cash_deposti",
    shopnumber: "G-01",
    month: "September",
    madeBy: "Dennis",
  },
  {
    date: "2022-09-05T16:52:52.989Z",
    shopnumber: "G-02",
    madeBy: "Dennis",
    month: "September",
    payment: 1000,
    paymentmode: "cheque",
    paymentId: "G-02l7p04by8ground",
  },
];
    
return (
  <div className="overflow-y-hidden">
    <div className="absolute w-full h-[50%] overflow-y-scroll">
      <TheTable rows={rows} header={header} />
    </div>
    <div className="absolute top-[60%] w-full h-[50%] overflow-y-scroll">
      <TheTable rows={rows} header={header} />
    </div>

    {/* <div className=" w-full  bg-slate-600  max-h-screen flex flex-col">
      <div className="h-[20%]">
      <div className="h-fit w-full   flex-wrap flex-center fixed top-[10%] right-1 left-1 p-1 z-40">
          <div className="">{shop.shopnumber}</div>
          <div className="h-full w-fit p-2  flex-center rounded-xl">
            <IconContext.Provider
              value={{
                size: "25px",
                className: "mx-[15px] text-white hover:text-purple-600",
              }}
            >
              <FaRegEdit onClick={() => setUpdate(!update)} />
              {!formopen ? (
                <FaPlus onClick={() => setFormOpen(!formopen)} />
              ) : (
                <FaTimes onClick={() => setFormOpen(!formopen)} />
              )}
              <FaPrint
                onClick={() =>
                  navigate("/print-preview", {
                    state: {
                      rows: payments,
                      header,
                      title: `${payments[0].month} payments for ${shop.shopname}`,
                    },
                  })
                }
              />
            </IconContext.Provider>
          </div>
        </div>

        <div className="w-full h-fit bg-slate-500 overfloe-x-hidden">
          <ShopDetails shop={shop} />
        </div>
      </div>

      {formopen ? (
        <SharedPaymentForm
          formopen={formopen}
          input={input}
          setFormOpen={setFormOpen}
          handleChange={handleTheChange}
          handleSubmit={handleTheSubmit}
          error={error}
        />
      ) : null}

      <div
        className="w-full h-[75%] max-h-[80%] z-40 overflow-x-scroll
      lg:overflow-x-hidden flex justify-center"
      >
        <div className="absolute w-[99%] bg-white ">
          <TheTable
            rows={payments}
            header={header}
            error={error}
            update={update}
            validate={validate}
            saveChanges={saveChanges}
            deleteRow={deleteRow}
            clearError={clearError}
          />
        </div>
      </div>
    </div> */}
  </div>
);
}
