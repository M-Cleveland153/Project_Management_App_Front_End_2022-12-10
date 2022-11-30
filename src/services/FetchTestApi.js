import React from "react";

import useAxios from './useAxios.js';

const AxiosAPI = () => {

    const { response, loading, error } = useAxios({
        method: 'put',
        url: '/put',
        headers: { accept: '*/*' },
        params: {
            userId: 14,
            title: 'The Doctor',
            homePlanet: 'Gallifrey',
            age: 'unknown',
            vehicle: 'T.A.R.D.I.S.'
        },
    });

    return (
        <div className='api'>
            <h1>Posts</h1>

            {loading ? ( <p>loading...</p>) : 
             (
                <div>
                    {error && (
                        <div>
                            <p>{error.message}</p>
                        </div>
                    )}
                    <div>
                        {response && <p>{response.args.userId} <br/> {response.args.title} <br/> {response.args.homePlanet} <br/> {response.args.vehicle}</p>}
                        {console.log(response)}
                    </div>
                </div>
            )}
        </div>
    );
};

export default AxiosAPI;