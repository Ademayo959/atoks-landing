export default function Navbar() {
    return (
        <div className="max-w-7xl mx-auto py-6 flex justify-between">
            <div>
                <h1 className="text-3xl font-spaceGrotesk font-extrabold">ATOKS</h1>
            </div>
            <div className="font-sora flex items-center gap-6">
                <div className="flex items-center gap-1">
                    <p className="text-lg">Home</p>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="h-4 w-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                    </svg>
                </div>
                <p className="text-lg">Features</p>
                <p className="text-lg">Pricing</p>
                <p className="text-lg">Blogs</p>
                <div className="flex items-center gap-1">
                    <p className="text-lg">Pages</p>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="h-4 w-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                    </svg>
                </div>
            </div>
            <div className="
                relative
                bg-black text-white
                flex items-center gap-1.5
                px-7 py-2
                rounded-full
                w-fit h-fit
                overflow-hidden
                bg-linear-to-t from-white/50 via-black to-black
                shadow-md
                ">
                <p className="font-inter">Sign in</p>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={4.0} stroke="currentColor" className="h-3 w-3">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                </svg>
            </div>
        </div>
    )
};
