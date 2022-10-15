import React from "react";
import { client, providers } from "../config";
import { TheButton } from "./../../components/Shared/Shared/TheButton";


interface LoginProps {}

export const Login: React.FC<LoginProps> = ({}) => {
  let provs = providers.authProviders;
  let redirectUrl = "http://localhost:3000/redirect";


const startLogin = (prov: any) => {
    localStorage.setItem("provider",JSON.stringify(prov));
    const url = provs[0].authUrl + redirectUrl;
    if (typeof window !== "undefined") {
      window.location.href = url;
    }
  };

  return (
    <div className="w-full h-full flex-center-col">
      <div className="text-5xl font-bold ">
        LOGIN WITH
      </div>
      {provs &&
        provs?.map((item, index) => {
          return (
            <TheButton
              key={item.name}
              label={item.name}
              padding={"2%"}
              textSize={"1.3rem"}
              onClick={() => startLogin(item)}
              
            />
          );
        })}
    </div>
  );
};
