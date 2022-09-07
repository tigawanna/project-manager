import { useFirestoreQueryData } from '@react-query-firebase/firestore';
import { collection, orderBy, query, where } from 'firebase/firestore';
import React from 'react'
import { db } from '../../firebase/firebaseConfig';
import { limit } from 'firebase/firestore';
import { HomeSvg } from '../../assets/Homesvg';
import { formatRelativeTyme } from './../../utils/other/util';


interface NotificationsProps {

}
export interface NotificationType {
  item: Item;
  type: string;
  date:EditedOn
}

export interface Item {
  date: any;
  paymentmode?: string;
  month?: string;
  paymentId?: string;
  madeBy?: string;
  payment: any;
  shopnumber: string;
  shopname?: string;
  monthlyrent?: number;
  shopfloor?: string;
  editedBy?: string;
  editedOn?: EditedOn;
}

export interface EditedOn {
  seconds: number;
  nanoseconds: number;
}

export const Notifications: React.FC<NotificationsProps> = ({}) => {
const notification_index = ["notification"];
  const notificationsRef = query(
    collection(db, "notifications"),
    orderBy("date", "desc"),
    limit(20)

  );    
const notificationsQuery = useFirestoreQueryData<NotificationType,NotificationType[]>(
  notification_index,
  //@ts-ignore
  notificationsRef,
{subscribe:true});
 
if(notificationsQuery.isLoading){
    return(
    <div className="w-full h-screen flex-center ">
     Seems empty right now . No recent activity
    </div>
    )
}
if (notificationsQuery.isError) {
  return (
    <div className="w-full h-screen flex-center text-lg text-red-600">
       {notificationsQuery.error.message}
    </div>
  );
}

const notifications = notificationsQuery?.data  
// console.log("notifications ==== ",notifications)

return (
  <div className="h-full w-full overflow-y-scroll scroll-bar">
    {notifications?.map((item,index) => {
      return <NotificationItem notif={item} key={item.date.seconds + index}/>;
    })}
  </div>
);
}



interface NotificationItemProps {
notif:NotificationType
}

export const NotificationItem: React.FC<NotificationItemProps> = ({notif}) => {

    const getColor = (type: string) => {
  if (type.includes("added shop")) {
    return "rgb(15, 187, 240)";
  }
  if (type.includes("new payment")) {
    return "rgb(36, 241, 115)";
  }
  if (type.includes("delete")) {
    return "rgb(241, 39, 32)";
  }
  if (type.includes("update")) {
    return "rgb(228, 190, 120)";
  }
  return "";
}; 

return (
  <div className="w-full h-fit flex flex-col p-2 bg-slate-700 text-white m-2
  rounded-md ">
    <div className="w-full ">
       <div className="text-sm font-semibold"> {formatRelativeTyme(notif?.date)}</div>
      <div className="text-xl font-bold"> {notif.item.madeBy}</div>
      <div
        style={{
          borderWidth: "2px",
          borderStyle: "solid",
          borderColor: getColor(notif.type),
        }}
        className=""
      ></div>
      <div className="">{notif.type}</div>
    </div>
    <div
      style={{
        borderWidth: "2px",
        borderStyle: "solid",
        borderColor: getColor(notif.type),
      }}
      className=""
    ></div>

    <div className="w-full  font-bold">{notif.item.shopnumber}</div>
  </div>
);
}
