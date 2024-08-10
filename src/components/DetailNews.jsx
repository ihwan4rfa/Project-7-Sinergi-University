const DetailNews = () => {
    const news = {
        title: 'Your Must-Read Roadmap to Optimize for New HTS Codes',
        date: '21 Sept 2023',
        author: 'John Doe',
        image: '/port-workers.jpg',
        content: `This is the detailed content of the news article about HTS Codes.`
    };

    const otherNews = [
        {
            title: 'Your Must-Read Roadmap to Optimize for New HTS Codes',
            date: '26 Sept 2024',
            author: 'Dibimbing.id',
        },
        {
            title: 'Transpacific Shifts: Import Demand Is Changing the World’s Busiest Trade Lane',
            date: '10 Jun 2024',
            author: 'Ihwan Arfa'
        },
        {
            title: 'IMF World Economic Outlook Revises Growth Forecasts',
            date: '17 Agu 2024',
            author: 'Soekarno'
        },
        {
            title: 'We’re moving Masks for NHS Heroes and we need your support',
            date: '1 Jan 2024',
            author: 'Hashirama'
        },
        {
            title: 'Your Must-Read Roadmap to Optimize for New HTS Codes',
            date: '21 Sept 2024',
            author: 'Selvia Tunjungsih'
        }
    ]

    return (
        <div className="mt-[140px] flex flex-col">
            <div className="flex px-20 w-full h-[64px] items-center gap-[10px] text-grey4">
                <h1 className="text-bluesky">Berita</h1>
                <i class="fa-solid fa-chevron-right text-sm px-3"></i>
                <h1>Port Workers Portray the Reality of Bottlenecks</h1>
            </div>
            <div className="flex w-full py-10 px-20 gap-10">
                <div className="w-3/5 h-fit flex flex-col gap-10">
                    <div className="flex flex-col gap-5">
                        <h1 className="font-semibold text-2xl">Port Workers Portray the Reality of Bottlenecks</h1>
                        <div className="flex items-center text-grey5">
                            <h1>Oleh Ihwan Arifandi</h1>
                            <h1 className="mx-2">•</h1>
                            <div className="flex items-center">
                                <i class="fa-regular fa-calendar-days mr-2"></i>
                                <h1>26 Sep 2024</h1>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <div className="overflow-hidden w-full h-[413px] rounded-[10px]">
                            <img className="w-full h-full object-cover" src={news.image} />
                        </div>
                    </div>
                    <p className="leading-7">Lorem ipsum dolor sit amet consectetur. Eu egestas amet venenatis volutpat. Ultricies orci sagittis quis mi. Arcu nulla nibh lacinia vulputate molestie sed odio. Diam ultricies ipsum dolor cursus gravida viverra. Vestibulum ultrices dolor quam ut quis in blandit. At odio integer scelerisque orci tellus mi curabitur. <br />
                        Nisi facilisis dolor purus massa lacus sit. Libero est elementum egestas adipiscing. Ultrices volutpat malesuada pharetra aenean nunc fames est. Fusce orci in tortor ultricies diam id. Sed lacus et quam malesuada. Erat molestie sit at amet sit aliquet massa nulla aliquam. In erat integer etiam interdum. Aliquet amet aliquam aliquam id est nulla sem malesuada pulvinar. Fames tempor lobortis aliquam accumsan. Mus congue senectus amet a vehicula facilisis porttitor. Mauris leo ipsum urna ac auctor tincidunt purus semper. <br />
                        Aliquet morbi turpis tellus dictum nunc tempus arcu turpis. Libero quam volutpat facilisis hac semper imperdiet diam donec in. Sagittis non massa tellus morbi quisque. Adipiscing in ultricies turpis adipiscing aliquet felis nisl eget. Malesuada in faucibus blandit nunc tellus arcu tristique vitae viverra. Eget nunc amet etiam senectus urna duis egestas eget ullamcorper. Rhoncus dolor mauris vitae turpis elementum scelerisque. Ipsum odio semper porttitor quis tincidunt nec. Pellentesque purus ornare at nullam adipiscing nec duis. Morbi pellentesque mi ut aliquam id scelerisque. Ornare dignissim vitae ipsum arcu dictum odio integer. Ornare tellus nisi lacus duis luctus. <br />
                        Duis ullamcorper amet amet ut. Facilisi sapien consequat in nec iaculis in lectus est. Aliquam nibh tellus orci turpis erat leo donec non. Et purus aliquam nam urna. Eget quam augue sapien laoreet pretium augue. Feugiat et sit senectus erat convallis habitant. Quisque vestibulum risus adipiscing imperdiet vivamus congue tincidunt tellus at. Eget nunc posuere risus cras mollis sit eu vel. Tellus consequat rhoncus gravida quisque in eget. Maecenas ipsum pharetra quis sed. <br />
                        Nunc placerat viverra sit quis. Id lectus ullamcorper sed suspendisse varius tristique. Quam placerat egestas suspendisse nisi. Blandit et viverra nisl augue et. Elementum posuere condimentum facilisis ante viverra. Enim eget vestibulum mi sagittis donec. Tellus rhoncus massa posuere feugiat sed adipiscing in habitant sodales. Ipsum odio id quisque mauris sit pulvinar viverra nec in. Mi nisl venenatis sagittis et vulputate pretium mi ut. Nisi urna suspendisse senectus netus dignissim ultrices mus. Ut fames dignissim id nibh purus dictum. At nunc vel in sed diam in interdum. Molestie rhoncus egestas tristique id quis amet sed.
                    </p>
                    <div className="flex flex-col gap-2">
                        <h1 className="text-sm font-semibold">Share</h1>
                        <div className="flex text-sm text-white gap-3">
                            <a href="https://www.linkedin.com/in/ihwanarfa" target="_blank" className="w-6 h-6 bg-bluesky hover:bg-blue flex items-center justify-center rounded-full">
                                <i class="fa-brands fa-linkedin-in"></i>
                            </a>
                            <a href="https://www.instagram.com/ihwanarfa" target="_blank" className="w-6 h-6 bg-bluesky hover:bg-blue flex items-center justify-center rounded-full">
                                <i class="fa-brands fa-instagram"></i>
                            </a>
                            <a href="https://wa.me/6285875029000" target="_blank" className="w-6 h-6 bg-bluesky hover:bg-blue flex items-center justify-center rounded-full">
                                <i class="fa-brands fa-whatsapp"></i>
                            </a>
                            <a href="https://www.twitter.com/ihwanarfa" target="_blank" className="w-6 h-6 bg-bluesky hover:bg-blue flex items-center justify-center rounded-full">
                                <i class="fa-brands fa-twitter"></i>
                            </a>
                            <a href="https://wa.me/6285875029000" target="_blank" className="w-6 h-6 bg-bluesky hover:bg-blue flex items-center justify-center rounded-full">
                                <i class="fa-solid fa-share-nodes"></i>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="w-2/5 h-40">
                    <h1 className="text-xl font-semibold">Berita Terkait</h1>
                    {otherNews.map((news, index) => (
                        <div key={index} className="flex flex-col px-3 py-5 w-full gap-3 border-b-2 border-grey6">
                            <h1 className="font-semibold">{news.title}</h1>
                            <div className="flex text-sm text-grey5">
                                <h1><i class="fa-regular fa-user mr-2"></i>{news.author}</h1>
                                <h1 className="mx-2">•</h1>
                                <h1><i class="fa-regular fa-calendar-days mr-2"></i>{news.date}</h1>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default DetailNews
