const FooterSection = () => {
    return (
        <div className='w-full h-[280px] flex flex-col bg-grey2 text-black py-[45px] px-20 gap-5'>
            <div className='flex justify-between items-center'>
                <div className='flex w-2/3 flex-col gap-3'>
                    <div className='flex items-center cursor-pointer'>
                        <i className="fa-solid fa-graduation-cap text-4xl pr-3" />
                        <div className='flex flex-col font-medium'>
                            <h1 className='text-xl'>Sinergi</h1>
                            <h1 className='text-sm'>University</h1>
                        </div>
                    </div>
                    <h1>Jl. Kemang, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta</h1>
                    <div className='flex gap-5 text-xl text-bluesky'>
                        <button><i class="fa-brands fa-facebook-f hover:text-blue"></i></button>
                        <button><i class="fa-brands fa-twitter hover:text-blue"></i></button>
                        <button><i class="fa-brands fa-square-instagram hover:text-blue"></i></button>
                        <button><i class="fa-brands fa-youtube hover:text-blue"></i></button>
                    </div>
                </div>
                <div className="w-1/3 grid grid-cols-2 grid-flow-row gap-3 font-semibold">
                    <button className="flex justify-start items-center w-fit hover:text-bluesky">Academic<i class="fa-solid fa-arrow-right ml-2 text-sm text-bluesky"></i></button>
                    <button className="flex justify-start items-center w-fit hover:text-bluesky">News<i class="fa-solid fa-arrow-right ml-2 text-sm text-bluesky"></i></button>
                    <button className="flex justify-start items-center w-fit hover:text-bluesky">Admission<i class="fa-solid fa-arrow-right ml-2 text-sm text-bluesky"></i></button>
                    <button className="flex justify-start items-center w-fit hover:text-bluesky">About Us<i class="fa-solid fa-arrow-right ml-2 text-sm text-bluesky"></i></button>
                </div>
            </div>
            <div className='w-full h-[2px] bg-grey3'></div>
            <h1 className='text-grey4 text-sm'>
                <i class="fa-regular fa-copyright mr-1"></i>2024 Sinergi University. All Rights Reserved
                <span className='mx-2'>|</span>
                <span className='py-2 cursor-pointer hover:text-bluesky'>
                    <a href='https://github.com/ihwan4rfa' target='_blank'><i class="fa-brands fa-github mr-1"></i>ihwan4rfa</a>
                </span>
            </h1>
        </div>
    )
}

export default FooterSection
