import React from 'react'
import { GrHome } from "react-icons/gr";
import { IconContext } from "react-icons/lib";
import { Link} from "react-router-dom";
import { FaUserCircle } from 'react-icons/fa';
import { useAuthSignOut} from '@react-query-firebase/auth';
import { auth } from '../../../firebase/firebaseConfig';
import { User } from 'firebase/auth';
import { useQueryClient } from 'react-query';
import { Consent } from '../../Modal/Consent';
import { useState } from 'react';

interface ToolbarProps {
user?:User|null
}

export const Toolbar: React.FC<ToolbarProps> = ({user}) => {
const [open, setOpen] = useState(false)

const queryClient = useQueryClient()   
const mutation = useAuthSignOut(auth,{
onMutate: () => {  queryClient.invalidateQueries('user')  },
// onError:(error)=>{console.log("error signing out ==== ",error)}
});

const image =user?.photoURL;


return (
 <div className='w-[100%] bg-slate-500 h-16 max-h-16'>
<IconContext.Provider value={{ size: "25px", className: "table-edit-icons" }} >

{open?<Consent setOpen={setOpen} message={"Sign Out?"} action={mutation.mutate}/>:null}

 <div className='flex flex-grow flex-1 text-lg font-bold h-full w-full'>
     <div className='m-1 w-full p-3 bg-slate-400 flex-center'>
     <Link to="/"><GrHome /></Link>
     </div>
     {/* <div className='m-1 w-full p-3 bg-slate-600 flex-center'>
     <Link to="/project">Project</Link>
     </div> */}
      <div className='m-1 w-full p-3 bg-slate-300 flex-center text-slate-800'>
     <Link to="/payments">Payments</Link>
     </div>
     <div className='m-1 w-full p-3 bg-slate-300 flex-center text-slate-700'>
     <Link to="/shops">Shops</Link>
     </div>

     <div 
      onClick={()=>setOpen(true)}
     className='  rounded-md  flex-center h-full w-40 m-1'>
      {!user?<FaUserCircle />
       :<img  
    //   @ts-ignore 
       src={image} 
       alt={''}
       className="rounded-[50%] h-[70%]  min-w-[40px] w-full"
       />}
     </div>

</div>   
</IconContext.Provider>
 </div>
);
}
