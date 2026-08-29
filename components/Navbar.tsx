"use client";
import { useState } from "react"

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(true)

    return (
        <header className="w-full">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 sm:px-8 lg:px-0">
                {/* Logo */}
                <div>
                    <h1 className="font-spaceGrotesk text-2xl font-extrabold sm:text-3xl">
                        ATOKS
                    </h1>
                </div>
                {/* Desktop Navigation */}
                <nav className="hidden items-center gap-5 font-sora lg:flex">
                    <div className="flex items-center gap-1">
                        <p className="text-base xl:text-lg">Home</p>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="h-4 w-4">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="m19.5 8.25-7.5 7.5-7.5-7.5"
                            />
                        </svg>
                    </div>
                    <p className="text-base xl:text-lg">Features</p>
                    <p className="text-base xl:text-lg">Pricing</p>
                    <p className="text-base xl:text-lg">Blogs</p>
                    <div className="flex items-center gap-1">
                        <p className="text-base xl:text-lg">Pages</p>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="h-4 w-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5"/>
                        </svg>
                    </div>
                </nav>
                {/* Right side */}
                <div className="flex items-center gap-3">
                    {/* Sign in */}
                    <button
                        className=" relative flex items-center gap-1.5 overflow-hidden rounded-full bg-black px-5 py-2 text-sm text-white shadow-md sm:px-7 sm:py-2 sm:text-base">
                        <span className="font-inter">Sign in</span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={4} stroke="currentColor" className="h-3 w-3">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"/>
                        </svg>
                    </button>
                    {/* Mobile menu button */}
                    <button onClick={() => setIsOpen(!isOpen)}
                        aria-label="Open menu"
                        className=" flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-5 w-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16"/>
                        </svg>
                    </button>
                </div>
            </div>
            {isOpen && (
                <div className=" mx-4 mt-2 overflow-hidden rounded-2xl border border-gray-200 bg-white p-2 shadow-[0_8px_30px_rgba(0,0,0,0.06)]">
                    <nav className="flex flex-col font-sora">
                        <a
                            href="#features"
                            className=" flex items-center justify-between rounded-xl px-4 py-3 text-[15px] transition-colors hover:bg-gray-50">
                            <span>Features</span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="h-4 w-4 text-gray-400">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5"/>
                            </svg>
                        </a>
                        <a href="#pricing"
                            className=" flex items-center justify-between rounded-xl px-4 py-3 text-[15px] transition-colors hover:bg-gray-50">
                            <span>Pricing</span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="h-4 w-4 text-gray-400">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5"/>
                            </svg>
                        </a>
                        <a href="#blogs"
                            className=" flex items-center justify-between rounded-xl px-4 py-3 text-[15px] transition-colors hover:bg-gray-50">
                            <span>Blogs</span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="h-4 w-4 text-gray-400">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5"/>
                            </svg>
                        </a>
                        <button
                            className=" flex w-full items-center justify-between rounded-xl px-4 py-3 text-left text-[15px] transition-colors hover:bg-gray-50">
                            <span>Pages</span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="h-4 w-4 text-gray-400">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5"/>
                            </svg>
                        </button>
                    </nav>
                </div>
            )}
        </header>
    )
};
