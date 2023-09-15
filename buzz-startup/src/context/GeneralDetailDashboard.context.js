import { createContext, useState } from "react";


export const GeneralDetailDashboardContext =  createContext();

const GeneralDetailDashboardProvider = ({children}) => {

    const [profilePic,setProfilePic] = useState(true);
    const [aboutMe,setAboutMe] =  useState(false);
    const [generalDetailInside,setGeneralDetailInside] = useState(false);
    const [otherDetails,setOtherDetails] = useState(false);

    return (
        <GeneralDetailDashboardContext.Provider value={{profilePic,setProfilePic,
            aboutMe,setAboutMe,
            generalDetailInside,setGeneralDetailInside,
            otherDetails,setOtherDetails
        }}>{children}</GeneralDetailDashboardContext.Provider>
    )
}

export default GeneralDetailDashboardProvider