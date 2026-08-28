import Image from 'next/image'
import user1 from '@/assets/user1.jpeg'
import user2 from '@/assets/user2.jpeg'
import user3 from '@/assets/user3.jpeg'
import phone from '@/assets/atoksPhone.png'

export default function Hero() {
    return (
        <div className='font-inter max-w-7xl mx-auto relative'>
            <div className="pointer-events-none absolute inset-x-0 top-[120px] z-0 overflow-hidden text-center">
                <span className="block font-semibold font-montserrat text-[clamp(180px,22vw,420px)] font-black leading-[0.8] tracking-[-0.08em] text-transparent bg-gradient-to-b from-black/[0.065] via-black/[0.03] via-[48%] to-transparent bg-clip-text [-webkit-background-clip:text]">
                    ATOKS
                </span>
            </div>
            <div className='justify-self-center'>
                <div className='flex gap-2 justify-self-center mt-14'>
                    <div className='flex'>
                        <Image src={user1} alt="" className='h-9 w-9 rounded-full object-cover border-2 border-white' />
                        <Image src={user2} alt="" className='h-9 w-9 rounded-full object-cover border-2 border-white -ml-3.5' />
                        <Image src={user3} alt="" className='h-9 w-9 rounded-full object-cover border-2 border-white -ml-3.5' />
                        <div className='h-9 w-9 rounded-full bg-amber-600 border-2 border-white text-white text-[11px] flex items-center justify-center font-sora -ml-3.5'>10+</div>
                    </div>
                    <div>
                        <div className='flex items-center gap-1'>
                            <div className='flex'>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4 text-amber-300">
                                    <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4 text-amber-300">
                                    <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4 text-amber-300">
                                    <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4 text-amber-300">
                                    <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4 text-amber-300">
                                    <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <div>
                                <p className='font-sora text-[11px]'>5.0+</p>
                            </div>
                        </div>
                        <div>
                            <p className='text-[11px] font-sora'>1000+ customers joined</p>
                        </div>
                    </div>
                </div>
                <div>
                    <p className='text-[4.5rem] my-6 font-sora w-250 leading-20 text-center font-semibold'>Take control of your financial journey</p>
                </div>
                <div className='justify-self-center'>
                    <p className='text-gray-500 font-spaceGrotesk w-120 text-[0.9rem] text-center'>HAQQ Wallet is a community governed DAPP marketplace. A hub or all products, designed to meet user needs.</p>
                </div>
                <div className='justify-self-center my-5'>
                    <div className="
                            relative
                            bg-black text-white
                            flex items-center gap-1.5
                            px-7 py-2.5
                            rounded-full
                            w-fit h-fit
                            overflow-hidden
                            bg-linear-to-r from-purple-600 via-orange-300 to-orange-300
                            shadow-lg
                        ">
                        <p>Get Started Today</p>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={4.0} stroke="currentColor" className="h-3 w-3">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                        </svg>
                    </div>
                </div>
                <div className='justify-self-center'>
                    <Image src={phone} alt='' className='max-w-3xl' />
                </div>
                <div className='py-4'>
                    <p className='font-sora text-[1.5rem] text-gray-700 text-center font-semibold'>Trusted by Teams Around the Globe</p>
                </div>
            </div>
        </div>
    )
};
