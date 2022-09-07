import { User} from 'firebase/auth';
import { HomeSvg } from '../../assets/Homesvg';
// import { db } from '../../firebase/firebaseConfig';
// import { doc } from "firebase/firestore";
import { Notifications } from './../notification/Notifications';



interface HomeProps {
user?:User|null
}


export const Home: React.FC<HomeProps> = ({user}) => {


return (
  <div
    className="w-full h-fit md:h-[95%] md:max-h-full  bg-slate-400 flex flex-col 
    md:flex-row justify-center items-start overflow-hidden
  "
  >
    <div className="w-full h-fit md:h-full flex-center">
      <div
        className="w-[90%] h-full  md:h-[60%] 
      flex flex-col items-center justify-center bg-slate-700 shadow-lg shadow-white"
      >
        <div className="w-full p-2 flex-center text-3xl font-bold text-white">
          Welcome {user?.displayName}
        </div>
        <HomeSvg />
      </div>
    </div>
    <div className="w-[90%] md:w-[30%] h-[85%] m-3 flex flex-col items-center">
      <div
        className="w-full px-2 flex-center text-lg bg-slate-900 rounded-lg
      font-lightbold text-white"
      >
        Notifications
      </div>
      <Notifications />
      <div className="p-2 m-2 min-w-20"></div>
    </div>
  </div>
);


}
