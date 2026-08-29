export default function Footer() {
    return (
        <footer className="mx-auto mt-16 w-full max-w-7xl border-t border-gray-300 px-5 py-16 sm:px-8 lg:px-0">
            <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_2fr] lg:gap-8 font-sora">
                {/* Brand */}
                <div className="max-w-md">
                    <p className="text-2xl font-semibold tracking-tight">
                        ATOKS
                    </p>
                    <p className="mt-4 max-w-sm font-inter text-sm leading-6 text-gray-600">
                        A simpler way to manage your money, cards, payments, and financial
                        goals — all in one place.
                    </p>
                    <div className="mt-6 flex items-center gap-3">
                        <a href="#" aria-label="Instagram" className="text-gray-600 transition-colors hover:text-black">
                            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24}
                                fill={"currentColor"} viewBox={"0 0 24 24"}>
                                {/* Boxicons v3.0.8 https://boxicons.com | License  https://docs.boxicons.com/free */}
                                <path d="M11.999 7.377a4.623 4.623 0 1 0 0 9.248 4.623 4.623 0 0 0 0-9.248m0 7.627a3.004 3.004 0 1 1 0-6.008 3.004 3.004 0 0 1 0 6.008M16.806 6.129a1.078 1.078 0 1 0 0 2.156 1.078 1.078 0 1 0 0-2.156" /><path d="M20.533 6.111A4.6 4.6 0 0 0 17.9 3.479a6.6 6.6 0 0 0-2.186-.42c-.963-.042-1.268-.054-3.71-.054s-2.755 0-3.71.054a6.6 6.6 0 0 0-2.184.42 4.6 4.6 0 0 0-2.633 2.632 6.6 6.6 0 0 0-.419 2.186c-.043.962-.056 1.267-.056 3.71s0 2.753.056 3.71c.015.748.156 1.486.419 2.187a4.6 4.6 0 0 0 2.634 2.632 6.6 6.6 0 0 0 2.185.45c.963.042 1.268.055 3.71.055s2.755 0 3.71-.055a6.6 6.6 0 0 0 2.186-.419 4.61 4.61 0 0 0 2.633-2.633c.263-.7.404-1.438.419-2.186.043-.962.056-1.267.056-3.71s0-2.753-.056-3.71a6.6 6.6 0 0 0-.421-2.217m-1.218 9.532a5 5 0 0 1-.311 1.688 2.99 2.99 0 0 1-1.712 1.711 5 5 0 0 1-1.67.311c-.95.044-1.218.055-3.654.055-2.438 0-2.687 0-3.655-.055a5 5 0 0 1-1.669-.311 2.99 2.99 0 0 1-1.719-1.711 5.1 5.1 0 0 1-.311-1.669c-.043-.95-.053-1.218-.053-3.654s0-2.686.053-3.655a5 5 0 0 1 .311-1.687c.305-.789.93-1.41 1.719-1.712a5 5 0 0 1 1.669-.311c.951-.043 1.218-.055 3.655-.055s2.687 0 3.654.055a5 5 0 0 1 1.67.311 3 3 0 0 1 1.712 1.712 5.1 5.1 0 0 1 .311 1.669c.043.951.054 1.218.054 3.655s0 2.698-.043 3.654z" />
                            </svg>
                        </a>
                        <a href="#" aria-label="Facebook" className="text-gray-600 transition-colors hover:text-black">
                            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24}
                                fill={"currentColor"} viewBox={"0 0 24 24"}>
                                {/* Boxicons v3.0.8 https://boxicons.com | License  https://docs.boxicons.com/free */}
                                <path d="M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127A22 22 0 0 0 14.201 3c-2.444 0-4.122 1.492-4.122 4.231v2.355H7.332v3.209h2.753v8.202z" />
                            </svg>
                        </a>
                        <a href="#" aria-label="Threads" className="text-gray-600 transition-colors hover:text-black">
                            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24}
                                fill={"currentColor"} viewBox={"0 0 24 24"}>
                                {/* Boxicons v3.0.8 https://boxicons.com | License  https://docs.boxicons.com/free */}
                                <path d="M16.39 11.27c-.09-.04-.17-.08-.26-.12-.15-2.84-1.71-4.47-4.32-4.49h-.04c-1.56 0-2.86.67-3.66 1.88l1.44.98c.6-.91 1.53-1.1 2.22-1.1h.02c.86 0 1.51.26 1.93.74.31.35.51.84.61 1.46-.76-.13-1.59-.17-2.47-.12-2.48.14-4.08 1.59-3.97 3.6.05 1.02.56 1.9 1.43 2.47.73.48 1.68.72 2.66.67 1.3-.07 2.32-.57 3.03-1.47.54-.69.88-1.58 1.03-2.7.62.37 1.08.86 1.33 1.45.43 1 .46 2.65-.89 4-1.18 1.18-2.6 1.69-4.74 1.7-2.38-.02-4.17-.78-5.34-2.26-1.09-1.39-1.66-3.4-1.68-5.97.02-2.57.59-4.58 1.68-5.97 1.17-1.49 2.97-2.25 5.34-2.26 2.39.02 4.22.78 5.43 2.28.59.73 1.04 1.65 1.34 2.73l1.68-.45c-.36-1.32-.92-2.46-1.69-3.4-1.56-1.91-3.83-2.89-6.76-2.91h-.01c-2.92.02-5.17 1-6.68 2.92C3.71 6.64 3.01 9.02 2.99 12c.02 3 .72 5.37 2.06 7.08C6.56 21 8.81 21.98 11.73 22h.01c2.6-.02 4.43-.7 5.94-2.21 1.98-1.97 1.92-4.45 1.26-5.97-.47-1.09-1.36-1.97-2.58-2.56Zm-4.49 4.22c-1.09.06-2.22-.43-2.27-1.47-.04-.78.55-1.64 2.34-1.74.2-.01.41-.02.6-.02.65 0 1.26.06 1.81.18-.21 2.57-1.41 2.99-2.48 3.05" />
                            </svg>
                        </a>
                        <a href="#" aria-label="GitHub" className="text-gray-600 transition-colors hover:text-black">
                            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24}
                                fill={"currentColor"} viewBox={"0 0 24 24"}>
                                {/* Boxicons v3.0.8 https://boxicons.com | License  https://docs.boxicons.com/free */}
                                <path fill-rule="evenodd" d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.6 9.6 0 0 1 2.496-.336 9.6 9.6 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2" clip-rule="evenodd" />
                            </svg>
                        </a>

                    </div>
                </div>


                {/* Company */}
                <div>
                    <p className="text-sm font-semibold">
                        Company
                    </p>

                    <nav className="mt-4 flex flex-col gap-3 font-inter text-sm text-gray-600">
                        <a href="#" className="transition-colors hover:text-black">
                            About
                        </a>

                        <a href="#" className="transition-colors hover:text-black">
                            Careers
                        </a>

                        <a href="#" className="transition-colors hover:text-black">
                            Blog
                        </a>

                        <a href="#" className="transition-colors hover:text-black">
                            Contact
                        </a>
                    </nav>
                </div>


                {/* Product */}
                <div>
                    <p className="text-sm font-semibold">
                        Product
                    </p>

                    <nav className="mt-4 flex flex-col gap-3 font-inter text-sm text-gray-600">
                        <a href="#" className="transition-colors hover:text-black">
                            Features
                        </a>

                        <a href="#" className="transition-colors hover:text-black">
                            Pricing
                        </a>

                        <a href="#" className="transition-colors hover:text-black">
                            Integrations
                        </a>

                        <a href="#" className="transition-colors hover:text-black">
                            Security
                        </a>
                    </nav>
                </div>


                {/* Newsletter */}
                <div className="max-w-md">
                    <p className="text-sm font-semibold">
                        Newsletter
                    </p>

                    <p className="mt-4 text-sm font-medium">
                        Stay in the loop.
                    </p>

                    <p className="mt-2 max-w-sm font-inter text-sm leading-6 text-gray-600">
                        Get product updates, financial tips, and news from ATOKS.
                    </p>

                    <form className="mt-5 flex w-full max-w-md items-center rounded-full border border-gray-200 p-1">

                        <input
                            type="email"
                            placeholder="Your email"
                            className="min-w-0 flex-1 bg-transparent px-4 py-2 text-sm outline-none placeholder:text-gray-400"
                        />

                        <button
                            type="submit"
                            className="
            relative
            flex
            shrink-0
            items-center
            gap-1
            overflow-hidden
            rounded-full
            bg-linear-to-r
            from-purple-600
            via-orange-300
            to-orange-300
            px-5
            py-2.5
            text-sm
            text-white
            shadow-lg
            transition-transform
            hover:scale-[1.02]
            active:scale-[0.98]
          "
                        >
                            <span className="relative z-10">
                                Subscribe
                            </span>

                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="relative z-10 h-4 w-4"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="m8.25 4.5 7.5 7.5-7.5 7.5"
                                />
                            </svg>
                        </button>

                    </form>
                </div>

            </div>


            {/* Bottom */}
            <div className="mt-16 border-t border-gray-200 pt-6">
                <div className="flex flex-col gap-3 font-inter text-xs text-gray-500 sm:flex-row sm:items-center sm:justify-between">

                    <p>
                        © 2026 ATOKS. All rights reserved.
                    </p>

                    <div className="flex gap-5">
                        <a href="#" className="hover:text-black">
                            Privacy
                        </a>

                        <a href="#" className="hover:text-black">
                            Terms
                        </a>
                        <a href="#" className="hover:text-black">
                            Cookies
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
};
