import React from 'react'

export const Cards = () => {
    return (
        <section className="grid grid-cols-3 w-[1046px] h-[1028px] ">
            <div className="bg-white text-black p-4 rounded-lg w-[328px] h-[292px] py-[35px] px-[40px] gap-5 shadow-[0px_13px_19px_#00000012] hover:shadow-pink-400 hover:scale-110 transition duration-300">
                <div className="bg-pink-200 p-2 mb-4 w-[70px] h-[76px] py-[22px] px-[19px] gap-2.5 rounded-[10px]"></div>
                <h3 className="font-montserrat text-[16px] font-bold leading-[24px] text-left text-[#252B42] mb-2">
                    Training Courses
                </h3>
                <div className="w-[50px] h-[2px] gap-0 bg-[#E74040] mb-3"></div>
                <p className="text-sm text-gray-600 w-[222px] h-[60px]  font-montserrat text-[14px] font-normal leading-[20px] text-left">
                    The gradual accumulation of information about atomic and small-scale
                    behaviour...
                </p>
            </div>
            <div className="bg-white text-black p-4 rounded-lg w-[328px] h-[292px] py-[35px] px-[40px] gap-5 shadow-[0px_13px_19px_#00000012] hover:shadow-green-400 hover:scale-110 transition duration-300 ">
                <div className="bg-green-200 p-2 mb-4 w-[70px] h-[76px] py-[22px] px-[19px] gap-2.5 rounded-[10px]"></div>
                <h3 className="font-montserrat text-[16px] font-bold leading-[24px] text-left text-[#252B42] mb-2">
                    2,769 Online Courses
                </h3>
                <div className="w-[50px] h-[2px] gap-0 bg-[#E74040] mb-3"></div>
                <p className="text-sm text-gray-600 w-[222px] h-[60px]  font-montserrat text-[14px] font-normal leading-[20px] text-left">
                    The gradual accumulation of information about atomic and small-scale
                    behaviour...
                </p>
            </div>
            <div className="bg-[#23A6F0] text-white p-4 rounded-lg w-[328px] h-[292px] py-[35px] px-[40px] gap-5 shadow-[0px_13px_19px_#00000012] hover:shadow-white hover:scale-110 transition duration-300">
                <div className="bg-white p-2 mb-4 w-[70px] h-[76px] py-[22px] px-[19px] gap-2.5 rounded-[10px]"></div>
                <h3 className="font-montserrat text-[16px] font-bold leading-[24px] text-left mb-2 ">
                    Training Courses
                </h3>
                <div className="w-[50px] h-[2px] gap-0 bg-white mb-3"></div>
                <p className="text-sm w-[222px] h-[60px]  font-montserrat text-[14px] font-normal leading-[20px] text-left">
                    The gradual accumulation of information about atomic and small-scale
                    behaviour...
                </p>
            </div>
        </section>
    )
}
