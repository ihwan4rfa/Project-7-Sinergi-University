const NewsSection = () => {
    const newsList = [
        {
            image: '/1.jpg',
            title: 'Your Must-Read Roadmap to Optimize for New HTS Codes',
            date: '21 Sept 2023',
            author: 'John Doe'
        },
        {
            image: '/2.jpg',
            title: 'Transpacific Shifts: Import Demand Is Changing the World’s Busiest Trade Lane',
            date: '10 Jun 2023',
            author: 'Ihwan Arfa'
        },
        {
            image: '/3.jpg',
            title: 'IMF World Economic Outlook Revises Growth Forecasts',
            date: '17 Agu 2023',
            author: 'Soekarno'
        },
        {
            image: '/4.jpg',
            title: 'We’re moving Masks for NHS Heroes and we need your support',
            date: '1 Jan 2023',
            author: 'Hashirama'
        },
    ]

    return (
        <div className="flex relative flex-col w-full h-[636px] py-[40px] px-20 items-center justify-center text-black overflow-hidden">
            <img className=" absolute top-0 z-0 w-full h-full object-cover opacity-15" src="/background.jpg" />
            <div className="relative w-full z-10 flex flex-col gap-10">
                <div className="flex flex-col items-center">
                    <h1 className="font-semibold text-2xl">Berita Terbaru</h1>
                    <div className="w-[188px] h-[2px] bg-yellow"></div>
                </div>
                <div className="flex h-[478px] w-full gap-10">
                    <div className="flex flex-col gap-[10px] w-1/2 h-[464px]">
                        <div className="rounded-[10px] w-full h-[399px] overflow-hidden flex items-center justify-center">
                            <img className="w-full h-full object-cover" src="/port-workers.jpg" />
                        </div>
                        <div className="flex flex-col gap-[10px]">
                            <h1 className="font-semibold text-xl">Port Workers Portray the Reality of Bottlenecks</h1>
                            <h1 className="text-sm">21 Sept 2023<span className="mx-[10px]">•</span>Oleh John Doe</h1>
                        </div>
                    </div>
                    <div className="w-1/2 h-[478px] grid grid-cols-2 grid-flow-row gap-10">
                        {newsList.map((news, index) => (
                            <div key={index} className="h-[219px] flex flex-col gap-[10px]">
                                <div className="h-[140px] w-full overflow-hidden flex items-center justify-center rounded-[10px]">
                                    <img className="object-cover w-full h-full" src={news.image} />
                                </div>
                                <div className="flex flex-col h-[69px] gap-[10px]">
                                    <h1 className="font-semibold leading-[19px] text-ellipsis overflow-hidden line-clamp-2">{news.title}</h1>
                                    <h1 className="text-sm">{news.date}<span className="mx-[10px]">•</span>Oleh {news.author}</h1>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewsSection
