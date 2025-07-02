import React, { useEffect, useState } from 'react'
import Dashsidebar from '../component/Dashsidebar'
import { useLocation } from 'react-router-dom'
import Dashprofile from '../component/Dashprofile';

function Dashboard() {
  const location = useLocation();
  const [tab, setTab] = useState(null)
  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const tabFromUrl = urlParams.get('tab');
    setTab(tabFromUrl);

  }, []);

    console.log(tab);

  return (
    <div className='flex flex-row border border-1 min-h-screen'>

        <div className='left sm:w-[20%] w-[40%]'>
        <Dashsidebar />
      </div>

      <div className='right sm:w-[80%] w-[40%]'>
        {tab === 'profile' && <Dashprofile />}
      </div>
      
    </div>
  )
}

export default Dashboard