import React, { createContext, useContext, useEffect, useState } from 'react'
import { authDataContext } from './authContext'
import axios from 'axios'

export const userDataContext = createContext()
function UserContext({children}) {
    let [userData,setUserData] = useState("")
    let {serverUrl} = useContext(authDataContext)


  //  const getCurrentUser = async () => {
  //       try {
  //           const tokenCookie = document.cookie.split('; ').find((cookie) => cookie.startsWith('token='))

  //           if (!tokenCookie) {
  //               setUserData(null)
  //               return
  //           }

  //           let result = await axios.get(serverUrl + "/api/user/getcurrentuser",{withCredentials:true})

  //           setUserData(result.data)

  //       } catch (error) {
  //           setUserData(null)
  //           if (error?.response?.status !== 400) {
  //               console.log(error)
  //           }
  //       }
  //   }
  const getCurrentUser = async () => {
    try {
        const result = await axios.get(
            serverUrl + "/api/user/getcurrentuser",
            { withCredentials: true }
        );

        setUserData(result.data);

    } catch (error) {
        setUserData(null);

        if (error?.response?.status !== 400) {
            console.log(error);
        }
    }
};

    useEffect(()=>{
     getCurrentUser()
    },[serverUrl])



    let value = {
     userData,setUserData,getCurrentUser
    }
    
   
  return (
    <div>
      <userDataContext.Provider value={value}>
        {children}
      </userDataContext.Provider>
    </div>
  )
}

export default UserContext
