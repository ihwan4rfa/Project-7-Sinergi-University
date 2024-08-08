import React from 'react'

const Navbar = () => {

    const linkList = [
        'berita',
        'akademik',
        'admisi',
        'beasiswa',
        'tentang kami'
    ]

    return (
        <div className='bg-primaryblue w-full h-20 px-20 py-[10px] flex items-center justify-between'>
            <div className='text-white flex items-center'>
                <i class="fa-solid fa-graduation-cap text-4xl pr-3" />
                <div className='flex flex-col gap-0'>
                    <h1 className='text-xl'>Sinergi</h1>
                    <h1 className='text-sm'>University</h1>
                </div>
            </div>
            <div className='flex gap-[20px] uppercase font-semibold text-white'>
                {linkList.map((link, index) => (
                    <h1 key={index} className='cursor-pointer p-[10px]'>{link}<i class={`${link === 'akademik' ? 'inline' : 'hidden'} fa-solid fa-chevron-down text-sm pl-3`}></i></h1>
                ))}
            </div>
        </div>
    )
}

export default Navbar