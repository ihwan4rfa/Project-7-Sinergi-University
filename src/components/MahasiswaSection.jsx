const MahasiswaSection = () => {
    const activityList = [
        {
            image: '/5.jpg',
            title: 'Your Must-Read Roadmap to Optimize for New HTS Codes',
            date: '21 Sept 2023',
            author: 'John Doe'
        },
        {
            image: '/6.jpg',
            title: 'Transpacific Shifts: Import Demand Is Changing the World’s Busiest Trade Lane',
            date: '10 Jun 2023',
            author: 'Ihwan Arfa'
        },
        {
            image: '/7.jpg',
            title: 'IMF World Economic Outlook Revises Growth Forecasts',
            date: '17 Agu 2023',
            author: 'Soekarno'
        },
        {
            image: '/8.jpg',
            title: 'We’re moving Masks for NHS Heroes and we need your support',
            date: '1 Jan 2023',
            author: 'Hashirama'
        },
        {
            image: '/9.jpg',
            title: 'Your Must-Read Roadmap to Optimize for New HTS Codes',
            date: '21 Sept 2023',
            author: 'John Doe'
        },
        {
            image: '/1.jpg',
            title: 'Transpacific Shifts: Import Demand Is Changing the World’s Busiest Trade Lane',
            date: '10 Jun 2023',
            author: 'Ihwan Arfa'
        },
        {
            image: '/10.jpg',
            title: 'IMF World Economic Outlook Revises Growth Forecasts',
            date: '17 Agu 2023',
            author: 'Soekarno'
        },
        {
            image: '/5.jpg',
            title: 'We’re moving Masks for NHS Heroes and we need your support',
            date: '1 Jan 2023',
            author: 'Hashirama'
        },
    ]

    return (
        <div className='flex flex-col w-full h-[657px] py-[40px] px-20 text-black gap-10'>
            <div className='flex flex-col gap-2'>
                <div className='flex justify-between items-center'>
                    <div>
                        <h1 className='text-2xl font-semibold'>Mahasiswa</h1>
                        <h1 className='text-sm'>Berita terkini mengenai aktivitas, prestasi, dan riset mahasiswa</h1>
                    </div>
                </div>
                <div className='w-full h-[2px] bg-yellow'></div>
            </div>
            <div className="w-full h-[478px] grid grid-cols-4 grid-flow-row gap-10">
                {activityList.map((activity, index) => (
                    <div key={index} className="h-[219px] flex flex-col gap-[10px]">
                        <div className="h-[140px] w-full overflow-hidden flex items-center justify-center rounded-[10px]">
                            <img className="object-cover w-full h-full" src={activity.image} />
                        </div>
                        <div className="flex flex-col h-[69px] gap-[10px]">
                            <h1 className="font-semibold leading-[19px] text-ellipsis overflow-hidden line-clamp-2">{activity.title}</h1>
                            <h1 className="text-sm">{activity.date}<span className="mx-[10px]">•</span>Oleh {activity.author}</h1>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default MahasiswaSection
