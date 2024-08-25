import React, { useEffect, useState } from 'react';
import CraftCard from './CraftCard';

const Craft = () => {
    const [crafts, setCrafts] = useState([]);
    useEffect(() => {
        fetch("http://localhost:5000/art")
            .then(res => res.json())
            .then(data => {
                const firstSixCrafts = data.slice(0, 6);
                setCrafts(firstSixCrafts);

            })
    }, [])
    // console.log(crafts);

    return (
        <div className='mt-4'>
            <div className="bg-[#ECECF2] dark:bg-gray-300 p-4 rounded-3xl border-dashed border-2 border-[#C56652] text-center m-4">
                <h2 className="text-5xl font-semibold">  <span className="text-[#C56652]">Craft</span> Items  </h2>
            </div>
            <div className="md:grid md:grid-cols-3 md:gap-5 space-y-4 md:space-y-0 mt-4">
                {
                    crafts.map(craft => (
                        
                        <CraftCard key={craft._id} craft={craft}></CraftCard>
                    ))
                }
            </div>
        </div>
    );
};

export default Craft;