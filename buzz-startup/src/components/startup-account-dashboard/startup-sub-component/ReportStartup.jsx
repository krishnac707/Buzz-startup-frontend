import React, { useContext } from 'react';
import { StartupDashboardContext } from '../../../context/StartupDashboard.context';


const ReportStartup = () => {

    const { reportStartup } = useContext(StartupDashboardContext)

  return (reportStartup &&
    <div className='text-center'>You haven't Generated any report yet..</div>
  )
}

export default ReportStartup