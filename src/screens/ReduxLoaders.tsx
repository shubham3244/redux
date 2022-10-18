import React from 'react'
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

const ReduxLoaders = () => {
    return (
        <div>
            <div className="containers">
                <div className="wrap">
                    <div className="minicontainer">
                        <Box sx={{ display: 'flex' }}>
                            <CircularProgress />
                           

                        </Box>
                        <button  className='btn btn-primary'>Start</button>
                            <button  className='btn btn-danger'>Stop</button>
                    </div>
                    <div className="minicontainer">
                        <Box sx={{ display: 'flex' }}>
                            <CircularProgress />
                        </Box>
                        <button  className='btn btn-primary'>Start</button>
                            <button  className='btn btn-danger'>Stop</button>
                    </div>
                </div>
                <div className="wrap">
                    <div className="minicontainer">
                        <Box sx={{ display: 'flex' }}>
                            <CircularProgress />
                        </Box>
                        <button  className='btn btn-primary'>Start</button>
                            <button  className='btn btn-danger'>Stop</button>
                    </div>
                    <div className="minicontainer">
                        <Box sx={{ display: 'flex' }}>
                            <CircularProgress />
                        </Box>
                        <button  className='btn btn-primary'>Start</button>
                            <button  className='btn btn-danger'>Stop</button>
                    </div>

                </div>


                <button  className='btn btn-primary'>Start</button>
                            <button  className='btn btn-danger'>Stop</button>
            </div>

        </div>
    )
}

export default ReduxLoaders