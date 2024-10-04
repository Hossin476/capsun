import React from 'react'

const mainNews = {
    title: "Innovative Battery Technology Revolutionizes Renewable Energy Storage",
    subtitle: "New advancements promise longer-lasting and more efficient energy solutions",
    date: "2024-10-04",
    image: "/public/img.jpeg"
};

const otherNews = [
    {
        title: "NASA's Artemis II Crew Selected for Moon Mission",
        date: "2024-10-04"
    },
    {
        title: "Breakthrough in Cancer Treatment Shows Promising Results",
        date: "2024-10-04"
    },
    {
        title: "New Study Links Exercise to Improved Mental Health",
        date: "2024-10-04"
    },
    {
        title: "Major Advances in Electric Vehicle Technology Unveiled",
        date: "2024-10-04"
    }
];


function News() {
    return (
        <section className="w-full mx-auto px-4 py-12 font-inter" id='news'>
            <h2 className="text-3xl font-inter mb-8 text-white">Latest News</h2>
            <div className="flex flex-col lg:flex-row gap-6">
                <div className="lg:w-4/5 relative overflow-hidden rounded-lg shadow-lg">
                    <img
                        src={mainNews.image}
                        alt={mainNews.title}
                        width={800}
                        height={600}
                        className="object-cover w-full h-[400px] lg:h-[500px]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
                        <h3 className="text-2xl md:text-3xl font-bold mb-2">{mainNews.title}</h3>
                        <p className="mb-4 text-sm md:text-base">{mainNews.subtitle}</p>
                        <div className="flex justify-between items-center">
                            <a
                                className="bg-white text-black cursor-pointer px-4 py-2 rounded-md text-sm font-medium hover:bg-opacity-90 transition-colors"
                            >
                                Read More
                            </a>
                            <span className="text-sm">{mainNews.date}</span>
                        </div>
                    </div>
                </div>
                <div className="lg:w-1/5 space-y-6">
                    {otherNews.map((news, index) => (
                        <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                            <div className="p-4">
                                <h4 className="mb-2 line-clamp-2">{news.title}</h4>
                                <div className="flex justify-between items-center">
                                    <a
                                        className="text-blue-600 hover:underline text-sm cursor-pointer"
                                    >
                                        Read More
                                    </a>
                                    <span className="text-sm text-gray-500">{news.date}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default News