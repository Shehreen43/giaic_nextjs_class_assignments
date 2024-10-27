import React from 'react'

export default function Header() {
    return (
        <header className="flex justify-between items-center mb-6 w-full max-w-[1046px]">
            <div className="text-2xl font-bold hover:scale-110 transition duration-300">BrandName</div>
            <nav className="flex space-x-9 mr-20">
                <a href="#" className="hover:text-blue-400">
                    Home
                </a>
                <a href="#" className="hover:text-blue-400">
                    Product
                </a>
                <a href="#" className="hover:text-blue-400">
                    Pricing
                </a>
                <a href="#" className="hover:text-blue-400">
                    Contact
                </a>
            </nav>
            <div className="text-sm align-right">
                <a
                    href="#"
                    className="w-[41px] h-[22px] mr-8 font-montserrat text-[14px] font-bold leading-[22px] tracking-[0.2px] text-right"
                >
                    Login
                </a>
                <button className="bg-blue-400 px-4 py-2 rounded-[5px] font-montserrat text-[14px] font-bold leading-[22px] tracking-[0.2px] hover:scale-110 transition duration-300">
                    JOIN US
                </button>
            </div>
        </header>
    )
}
