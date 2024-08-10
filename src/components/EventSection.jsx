import { useState, useEffect, useRef } from "react";

const EventSection = () => {
    const eventList = [
        {
            image: '/mini-degree.avif',
            title: 'Mini Degree',
            date: '26-29 April 2024',
        },
        {
            image: '/admission-talk.jpg',
            title: 'Admission Talk',
            date: '19 April 2024',
        },
        {
            image: '/open-house.jpg',
            title: 'Open House',
            date: '23 Maret 2024',
        },
        {
            image: '/career-launchpad.jpg',
            title: 'Career Launchpad: Empowering Vocational Future',
            date: '1 Maret 2024',
        },
        {
            image: '/mini-degree-3.jpg',
            title: 'Mini Degree 3.0',
            date: '26-29 April 2024',
        },
        {
            image: '/admission-talk.jpg',
            title: 'Admission Talk',
            date: '19 April 2024',
        },
        {
            image: '/open-house.jpg',
            title: 'Open House',
            date: '23 Maret 2024',
        },
        {
            image: '/career-launchpad.jpg',
            title: 'Career Launchpad: Empowering Vocational Future',
            date: '1 Maret 2024',
        },
        {
            image: '/mini-degree.avif',
            title: 'Mini Degree',
            date: '26-29 April 2024',
        },
        {
            image: '/admission-talk.jpg',
            title: 'Admission Talk',
            date: '19 April 2024',
        },
        {
            image: '/open-house.jpg',
            title: 'Open House',
            date: '23 Maret 2024',
        },
        {
            image: '/career-launchpad.jpg',
            title: 'Career Launchpad: Empowering Vocational Future',
            date: '1 Maret 2024',
        },
    ]


    const [currentIndex, setCurrentIndex] = useState(0);
    const containerRef = useRef(null);

    const handleNext = () => {
        const isLastItem = currentIndex === eventList.length - 5;
        const newIndex = isLastItem ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    const handlePrevious = () => {
        const isFirstItem = currentIndex === 0;
        const newIndex = isFirstItem ? eventList.length - 5 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    useEffect(() => {
        const container = containerRef.current;

        if (container) {
            container.scrollTo({
                left: currentIndex * 266,
                behavior: 'smooth'
            });
        }
    }, [currentIndex]);

    return (
        <div id="event" className='flex flex-col w-full h-[536px] py-[40px] bg-black text-white gap-10 mt-[140px]'>
            <div className='flex flex-col gap-2 px-20'>
                <div className='flex justify-between items-center'>
                    <div>
                        <h1 className='text-2xl font-semibold'>Event Kami</h1>
                        <h1 className='text-sm'>Informasi terbaru tentang Event Universitas Sinergi</h1>
                    </div>
                    <div className='flex text-2xl gap-3'>
                        <button onClick={handlePrevious}><i className="fa-regular fa-circle-left hover:text-yellow cursor-pointer"></i></button>
                        <button onClick={handleNext}><i className="fa-regular fa-circle-right hover:text-yellow cursor-pointer"></i></button>
                    </div>
                </div>
                <div className='w-full h-[2px] bg-yellow'></div>
            </div>
            <div ref={containerRef} className='w-auto h-[536px] flex mx-20 overflow-x-scroll style-scrollbar rounded-[10px]'>
                <div className="flex gap-4">
                    {eventList.map((event, index) => (
                        <a key={index} className='group cursor-pointer w-[250px] h-[327px] flex flex-col gap-[10px]'>
                            <div className='w-[250px] h-[250px] rounded-[10px] overflow-hidden'>
                                <img className='object-cover h-full' src={event.image} />
                            </div>
                            <div>
                                <h1 className='font-bold group-hover:text-bluesky'>{event.title}</h1>
                                <h1 className='text-sm'>{event.date}</h1>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default EventSection;
