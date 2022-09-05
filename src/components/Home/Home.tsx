import { User} from 'firebase/auth';
import { doc } from 'firebase/firestore';
import { db } from '../../firebase/firebaseConfig';



interface HomeProps {
user?:User|null
}


export const Home: React.FC<HomeProps> = ({user}) => {


return (
 <div className='w-full h-full  bg-slate-400 flex-center  '> 
  <div className='w-full h-full  bg-slate-400 flex-center  '> 
  </div>
</div>
);


}
