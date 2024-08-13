import { useState, useEffect } from "react";

const Navbar = () => {
    const [path, setPath] = useState('');
    useEffect(() => {
        setPath(window.location.pathname);
    }, [])

    const linkList = {
        event: 'event',
        news: 'berita',
        mahasiswa: 'mahasiswa',
        stafdosen: 'staf & dosen',
        mitrapers: 'mitra & pers',
        akademik: 'akademik',
        about: 'tentang kami'
    }

    const [clickedLink, setClickedLink] = useState();
    console.log(clickedLink);
    

    const languageList = {
        ID: '/indonesia.png',
        EN: '/inggris.png'
    }

    const modifiedLinkList = (path === '/') ? linkList : Object.fromEntries(
        Object.entries(linkList).filter(([key]) =>
            !['event', 'news', 'mahasiswa', 'stafdosen', 'mitrapers'].includes(key)
        )
    );
    const keysFlag = Object.keys(languageList);
    const keysLink = Object.keys(modifiedLinkList);

    return (
        <div className="fixed w-full z-20 top-0">
            <div className='flex w-full h-[60px] text-sm bg-white text-grey px-20 py-[10px] items-center gap-10'>
                {keysFlag.map((key, index) => (
                    <div key={index} className="flex cursor-pointer">
                        <div className="flex w-8 rounded-md bg-grey overflow-hidden mr-1">
                            <img className="opacity-90 object-cover" src={languageList[key]} />
                        </div>
                        <h1>{key}</h1>
                    </div>
                ))}
            </div>
            <div className='bg-blue w-full h-20 px-20 py-[10px] flex items-center justify-between'>
                <a href={path === '/' ? null : '/'} className='text-white flex items-center cursor-pointer'>
                    <i className="fa-solid fa-graduation-cap text-4xl pr-3" />
                    <div className='flex flex-col font-medium'>
                        <h1 className='text-xl'>Sinergi</h1>
                        <h1 className='text-sm'>University</h1>
                    </div>
                </a>
                <div className='flex gap-[20px] uppercase font-semibold text-white'>
                    {keysLink.map((key, index) => (
                        <a key={index}
                            onClick={() => setClickedLink(key)}
                            href={`#${key}`}
                            className={`cursor-pointer p-[10px] hover:text-yellow ${clickedLink === key ? 'text-yellow' : ''}`}>{linkList[key]}
                            <i className={`${linkList[key] === 'akademik' ? 'inline' : 'hidden'} fa-solid fa-chevron-down text-sm pl-3`}></i>
                        </a>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Navbar