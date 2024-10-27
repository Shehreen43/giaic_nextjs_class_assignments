import React from 'react'

export default function MainContent() {
    return (
        <main className="text-center w-[1046px] mb-10 top-[104px] left-[197px] gap-[80px]">
            <div className="py-10 inline-block w-[699px] h-[496px]">
                <h5 className=" text-center Font-Montserrat text-blue-400 py-9 hover:scale-150 transition duration-300">
                    Wellcome
                </h5>
                <h1 className="font-montserrat text-[58px] font-bold transition duration-500 hover:text-pink-400">
                    Selling on the <br /> internet like a pro
                </h1>
                <p className="mt-5 mb-9 font-montserrat text-[20px] weight-400 leading-[30px] tracking-[0.2px] text-center hover:text-green-300">
                    We know how large objects will act, but things on a <br /> small
                    scale just do not act that way.
                </p>
                <div className="mt-6 space-x-4">
                    <button className="bg-blue-400 px-7 py-2 rounded-lg text-center hover:scale-110 transition duration-300">
                        Get Quote Now
                    </button>
                    <button className="border border-blue-400 px-7 py-2 rounded-lg hover:scale-110 transition duration-300">
                        Learn More
                    </button>
                </div>
            </div>
        </main>
    )
}
