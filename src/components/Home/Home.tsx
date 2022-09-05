import { User} from 'firebase/auth';
import { doc } from 'firebase/firestore';
import { db } from '../../firebase/firebaseConfig';



interface HomeProps {
user?:User|null
}


export const Home: React.FC<HomeProps> = ({user}) => {


return (
 <div className='w-full h-full  bg-slate-400 flex-center  '> 

 <div className="min-h-fit h-[80%] flex-col md:flex-row center-flex bg-slate-700 p-5 w-[95%] overflow-y-hidden">
 <div className="flex-center text-slate-200  font-medium w-full p-5 m-2 h-[50%] overflow-y-scroll">

  </div>
 <div className="w-full h-fit flex-col center-flex md:flex-center bg-slate-500">
 <div className='w-full flex-center text-slate-100 text-xl md:text-4xl font-bold'> 
 Welcome {user?.displayName}</div>
    <div className='w-full flex-center '>
      {/* @ts-ignore */}
      {user?.photoURL?<img src={user?.photoURL} 
      alt="user"
     className='w-44 h-44 rounded-[50%] min-h-fit m-2'
     />:null}
    </div>


    </div>

  </div>


 </div>
);


}
