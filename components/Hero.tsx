import Image from 'next/image'
import user1 from '@/assets/user1.jpeg'
import user2 from '@/assets/user2.jpeg'
import user3 from '@/assets/user3.jpeg'
import phone from '@/assets/atoksPhone.png'
import odc from '@/assets/odc.png'
import blackwhite from '@/assets/blackwhite.png'
import estate from '@/assets/estate.png'
import northlane from '@/assets/northlane.png'
import highnorth from '@/assets/highnorth.png'
import profile1 from '@/assets/profile1.jpeg'
import profile2 from '@/assets/profile2.jpeg'
import profile3 from '@/assets/profile3.jpeg'

export default function Hero() {
    return (
        <div className='font-inter max-w-7xl mx-auto relative sm:px-5 lg: px-0'>
            <div className="pointer-events-none absolute inset-x-0 top-[120px] z-0 overflow-hidden text-center">
                <span className="block font-semibold font-montserrat text-[clamp(120px,22vw,420px)] font-black leading-[0.8] tracking-[-0.08em] text-transparent bg-gradient-to-b from-black/[0.065] via-black/[0.03] via-[48%] to-transparent bg-clip-text [-webkit-background-clip:text]">
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
                <div className='justify-self-center'>
                    <p className='text-[2.8rem] sm:text-[3.5rem] tracking-tight lg:text-[4.5rem] my-6 font-sora w-full max-w-250 leading-[1.05] lg:leading-20 text-center font-semibold'>
                        Take control of your financial journey
                    </p>
                </div>
                <div className='justify-self-center'>
                    <p className='text-gray-500 font-spaceGrotesk w-full max-w-120 text-[0.9rem] text-center'>HAQQ Wallet is a community governed DAPP marketplace. A hub or all products, designed to meet user needs.</p>
                </div>
                <div className='justify-self-center my-5'>
                   <div className="
    relative
    flex items-center gap-1.5
    overflow-hidden
    rounded-full
    px-7 py-2.5
    text-black
    /* glass body */
    bg-white/80
    backdrop-blur-md
    /* glass edge */
    border border-white/80
    /* liquid glass shine */
    shadow-[inset_0_1px_1px_rgba(255,255,255,0.95),inset_0_-1px_2px_rgba(0,0,0,0.08),0_4px_15px_rgba(0,0,0,0.08)]
    /* purple/orange liquid */
    before:absolute
    before:-left-[15%]
    before:top-[15%]
    before:h-[70%]
    before:w-[55%]
    before:rounded-full
    before:bg-purple-500/60
    before:blur-xl
    after:absolute
    after:-right-[15%]
    after:top-[15%]
    after:h-[70%]
    after:w-[55%]
    after:rounded-full
    after:bg-orange-300/60
    after:blur-xl
  "
>


                        <p>Get Started Today</p>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={4.0} stroke="currentColor" className="h-3 w-3">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                        </svg>
                    </div>
                </div>
                <div className='justify-self-center'>
                    <Image src={phone} alt='' className='w-full max-w-3xl' />
                </div>
                <div className='py-4'>
                    <p className='font-sora text-[1.5rem] text-gray-700 text-center font-semibold max-sm:px-3'>Trusted by Teams Around the Globe</p>
                    <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 items-center my-3'>
                        <Image src={odc} alt='' className='w-full max-w-60 h-fit mx-auto' />
                        <Image src={estate} alt='' className='w-full max-w-60 h-fit mx-auto' />
                        <Image src={northlane} alt='' className='w-full max-w-60 h-fit mx-auto' />
                        <Image src={blackwhite} alt='' className='w-full max-w-60 h-fit mx-auto' />
                        <Image src={highnorth} alt='' className='w-full max-w-60 h-fit mx-auto' />
                    </div>
                </div>
                <div className='mt-12'>
                    <div className='border border-gray-800 py-1.5 px-6 w-fit rounded-full justify-self-center'>
                        <p className='font-spaceGrotesk'>Senetra</p>
                    </div>
                    <div className='justify-self-center mt-3'>
                        <p className='font-sora leading-10 font-semibold text-[2.5rem] sm:text-[3rem] lg:text-[3.5rem] text-center'>
                            Innovation that works
                        </p>
                    </div>
                    <div className='justify-self-center'>
                        <p className='text-gray-500 font-spaceGrotesk w-full max-w-120 text-[0.9rem] text-center'>
                            Discover how our powerful tools make managing money simpler, faster and smarter
                        </p>
                    </div>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8 mt-12 px-4'>
                    <div className='border border-gray-200 h-fit shadow-lg rounded-xl p-5'>
                        <div className='flex gap-4'>
                            <div>
                                <Image src={profile3} alt='' className='w-13 h-13 rounded-sm' />
                            </div>
                            <div>
                                <p className='font-semibold font-sora text-[1.2rem]'>Steve Rogers</p>
                                <div className='flex items-center gap-1'>
                                    <p className='text-gray-700 text-[0.8rem]'>Brand Designer</p>
                                    <div className='h-1 w-1 rounded-full bg-gray-800'></div>
                                    <p className='text-gray-700 text-[0.8rem]'>London</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <p className='text-[0.95rem] text-gray-600 my-3'>"Atoks makes managing my money feel a lot less complicated. I can see where everything is going without having to think too much about it."</p>
                        </div>
                        <div className='flex justify-between items-center font-sora px-2 sm:px-8'>
                            <div className='text-center'>
                                <p className='text-[0.7rem] text-gray-700/70'>Projects</p>
                                <p className='font-semibold text-[1.2rem]'>50</p>
                            </div>
                            <div className='w-[1px] h-8 bg-gray-200'></div>
                            <div className='text-center'>
                                <p className='text-[0.7rem] text-gray-700/70'>Earnings</p>
                                <p className='font-semibold text-[1.2rem]'>$28k+</p>
                            </div>
                            <div className='w-[1px] h-8 bg-gray-200'></div>
                            <div className='text-center'>
                                <p className='text-[0.7rem] text-gray-700/70 text-[1.2rem]'>Rating</p>
                                <div className='flex items-center gap-1 font-semibold'>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4 text-amber-300">
                                        <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
                                    </svg>
                                    <p>4.5</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='border border-gray-200 h-fit shadow-lg rounded-xl p-5'>
                        <div className='flex gap-4'>
                            <div>
                                <Image src={profile2} alt='' className='w-13 h-13 rounded-sm' />
                            </div>
                            <div>
                                <p className='font-semibold font-sora text-[1.2rem]'>Marcus Williams</p>
                                <div className='flex items-center gap-1'>
                                    <p className='text-gray-700 text-[0.8rem]'>Software Engineer</p>
                                    <div className='h-1 w-1 rounded-full bg-gray-800'></div>
                                    <p className='text-gray-700 text-[0.8rem]'>Luxembörg</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <p className='text-[0.95rem] text-gray-600 my-3'>“I’ve tried a lot of finance apps, but Atoks is one of the few that actually feels simple. Everything I need is right where I expect it to be.”</p>
                        </div>
                        <div className='flex justify-between items-center font-sora px-8'>
                            <div className='text-center'>
                                <p className='text-[0.7rem] text-gray-700/70'>Projects</p>
                                <p className='font-semibold text-[1.2rem]'>47</p>
                            </div>
                            <div className='w-[1px] h-8 bg-gray-200'></div>
                            <div className='text-center'>
                                <p className='text-[0.7rem] text-gray-700/70'>Earnings</p>
                                <p className='font-semibold text-[1.2rem]'>$41k+</p>
                            </div>
                            <div className='w-[1px] h-8 bg-gray-200'></div>
                            <div className='text-center'>
                                <p className='text-[0.7rem] text-gray-700/70'>Rating</p>
                                <div className='flex items-center gap-1 font-semibold text-[1.2rem]'>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4 text-amber-300">
                                        <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
                                    </svg>
                                    <p>4.8</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='border border-gray-200 h-fit shadow-lg rounded-xl p-5'>
                        <div className='flex gap-4'>
                            <div>
                                <Image src={profile1} alt='' className='w-13 h-13 rounded-sm' />
                            </div>
                            <div>
                                <p className='font-semibold font-sora text-[1.2rem]'>Barry Tauge</p>
                                <div className='flex items-center gap-1'>
                                    <p className='text-gray-700 text-[0.8rem]'>Creative Director</p>
                                    <div className='h-1 w-1 rounded-full bg-gray-800'></div>
                                    <p className='text-gray-700 text-[0.8rem]'>Orlando</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <p className='text-[0.95rem] text-gray-600 my-3'>“The best part is how effortless it feels. I can keep track of my spending, manage my cards and stay on top of my finances without the usual clutter.”</p>
                        </div>
                        <div className='flex justify-between items-center font-sora px-8'>
                            <div className='text-center'>
                                <p className='text-[0.7rem] text-gray-700/70'>Projects</p>
                                <p className='font-semibold text-[1.2rem]'>23</p>
                            </div>
                            <div className='w-[1px] h-8 bg-gray-200'></div>
                            <div className='text-center'>
                                <p className='text-[0.7rem] text-gray-700/70'>Earnings</p>
                                <p className='font-semibold text-[1.2rem]'>$14k+</p>
                            </div>
                            <div className='w-[1px] h-8 bg-gray-200'></div>
                            <div className='text-center'>
                                <p className='text-[0.7rem] text-gray-700/70'>Rating</p>
                                <div className='flex items-center gap-1 font-semibold text-[1.2rem]'>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4 text-amber-300">
                                        <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
                                    </svg>
                                    <p>4.6</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};
