import React, { useEffect, useState } from 'react'
import './SingleInterestStartupDetail.css'
import { useParams } from 'react-router-dom';
import api from '../../apiConfig';
import toast from 'react-hot-toast';
import Loader from '../../loader-component/Loader';

const SingleInterestStartupDetail = () => {

    const { id } = useParams();
    const [singleStartupDetail, setSingleStartupDetial] = useState(null);

    useEffect(() => {
        const getStartupDetails = async () => {
            try {
                const response = await api.post("/investors/get-single-interested-startup-detail", { startupId: id })
                if (response.data.success) {
                    setSingleStartupDetial(response.data.result)
                }
            }
            catch (err) {
                toast.error(err.response.data.message)
            }
        }
        getStartupDetails()
    }, [])

    if (singleStartupDetail === null) {
        return <Loader loading={true} />;
    }

    return (
        <div className='interest-single-startup-main-div d-flex justify-content-center'>
            {singleStartupDetail && <div className='mt-3 fouder-detail-css single-startup-detail-width test-width p-3'>
                <div>
                    <h2 className='text-center'>Startup Detail</h2>
                </div>
                <div className='startup-general-body'>
                    <div className='startup-general-startup-name-div py-3'>
                        <div className='py-2'>Startup Name :</div>
                        <div className='py-2'>
                            {singleStartupDetail.startupName ? <p>{singleStartupDetail.startupName}</p> : <p>--</p>}
                        </div>
                    </div>
                </div>
                <div className='startup-general-body'>
                    <div className='startup-general-startup-name-div py-3'>
                        <div className='py-2'>Startup Tagline :</div>
                        <div className='py-2'>
                            {singleStartupDetail?.startupTagline ? <p>{singleStartupDetail?.startupTagline}</p> : <p>--</p>}
                        </div>
                    </div>
                </div>
                <div className='startup-general-body'>
                    <div className='startup-general-startup-name-div py-3'>
                        <div className='py-2'>Startup Location :</div>
                        <div className='py-2'>
                            {singleStartupDetail?.startupLocation ? <p>{singleStartupDetail?.startupLocation}</p> : <p>--</p>}
                        </div>
                    </div>
                </div>
                <div className='startup-general-body'>
                    <div className='startup-general-startup-name-div py-3'>
                        <div className='py-2'>Startup Website :</div>
                        <div className='py-2'>
                            {singleStartupDetail?.startupWebsite ? <p>{singleStartupDetail?.startupWebsite}</p> : <p>--</p>}
                        </div>
                    </div>
                </div>
                <div className='startup-general-body'>
                    <div className='startup-general-startup-name-div py-3'>
                        <div className='py-2'>Startup Sector :</div>
                        <div className='py-2'>
                            {singleStartupDetail?.startupSector ? <p>{singleStartupDetail?.startupSector}</p> : <p>--</p>}
                        </div>
                    </div>
                </div>
                <div className='startup-general-body'>
                    <div className='startup-general-startup-name-div py-3'>
                        <div className='py-2'>Startup Highlights :</div>
                        <div className='py-2'>
                            {singleStartupDetail?.startupHighlights ? <p>{singleStartupDetail?.startupHighlights}</p> : <p>--</p>}
                        </div>
                    </div>
                </div>
                <div className='startup-general-body'>
                    <div className='startup-general-startup-name-div py-3'>
                        <div className='py-2'>Startup Story :</div>
                        <div className='py-2'>
                            {singleStartupDetail?.startupStory ? <p>{singleStartupDetail?.startupStory}</p> : <p>--</p>}
                        </div>
                    </div>
                </div>
                <div className='startup-general-body'>
                    <div className='startup-general-startup-name-div py-3'>
                        <div className='py-2'>Startup Problem Statement :</div>
                        <div className='py-2'>
                            {singleStartupDetail?.startupProblemStatement ? <p>{singleStartupDetail?.startupProblemStatement}</p> : <p>--</p>}
                        </div>
                    </div>
                </div>
                <div className='startup-general-body'>
                    <div className='startup-general-startup-name-div py-3'>
                        <div className='py-2'>Startup Solution :</div>
                        <div className='py-2'>
                            {singleStartupDetail?.startupSolution ? <p>{singleStartupDetail?.startupSolution}</p> : <p>--</p>}
                        </div>
                    </div>
                </div>
                <div className='startup-general-body'>
                    <div className='startup-general-startup-name-div py-3'>
                        <div className='py-2'>Startup Product :</div>
                        <div className='py-2'>
                            {singleStartupDetail?.startupProduct ? <p>{singleStartupDetail?.startupProduct}</p> : <p>--</p>}
                        </div>
                    </div>
                </div>
                <div className='startup-general-body'>
                    <div className='startup-general-startup-name-div py-3'>
                        <div className='py-2'>Startup Traction :</div>
                        <div className='py-2'>
                            {singleStartupDetail?.startupTraction ? <p>{singleStartupDetail?.startupTraction}</p> : <p>--</p>}
                        </div>
                    </div>
                </div>
                <div className='startup-general-body'>
                    <div className='startup-general-startup-name-div py-3'>
                        <div className='py-2'>Startup Valuation :</div>
                        <div className='py-2'>
                            {singleStartupDetail?.startupValuation ? <p>{singleStartupDetail?.startupValuation}</p> : <p>--</p>}
                        </div>
                    </div>
                </div>
                <div className='startup-general-body'>
                    <div className='startup-general-startup-name-div py-3'>
                        <div className='py-2'>Startup Funding Ask :</div>
                        <div className='py-2'>
                            {singleStartupDetail?.startupFundingAsk ? <p>{singleStartupDetail?.startupFundingAsk}</p> : <p>--</p>}
                        </div>
                    </div>
                </div>
                <div className='startup-general-body'>
                    <div className='startup-general-startup-name-div py-3'>
                        <div className='py-2'>Startup Minimum Funding :</div>
                        <div className='py-2'>
                            {singleStartupDetail?.startupMinimumFunding ? <p>{singleStartupDetail?.startupMinimumFunding}</p> : <p>--</p>}
                        </div>
                    </div>
                </div>
                <div className='startup-general-body'>
                    <div className='startup-general-startup-name-div py-3'>
                        <div className='py-2'>Startup Commetment So Far :</div>
                        <div className='py-2'>
                            {singleStartupDetail?.startupCommetmentSoFar ? <p>{singleStartupDetail?.startupCommetmentSoFar}</p> : <p>--</p>}
                        </div>
                    </div>
                </div>
            </div>}
        </div>
    )
}

export default SingleInterestStartupDetail