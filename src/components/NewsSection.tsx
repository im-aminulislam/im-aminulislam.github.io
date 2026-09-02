const news = [
  {
    date: "Sep 2024",
    content: "Started Master of Science in Information Science at Trine University, Michigan",
    isLink: false,
  },
  {
    date: "Jun 2022",
    content: "Completed Bachelor of Engineering at Yunnan University",
    isLink: false,
  },
  {
    date: "2019 – Present",
    content: "Designing and deploying embedded IoT automation projects as an independent engineer",
    link: "#research",
    isLink: true,
  },
];

const NewsSection = () => {
  return (
    <section className="py-12 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="section-heading">News</h2>
          <div className="space-y-4">
            {news.map((item, index) => (
              <div
                key={index}
                className="flex flex-col sm:flex-row gap-2 sm:gap-8"
              >
                <span className="news-date">{item.date}</span>
                <span className="news-content">
                  {item.isLink && item.link ? (
                    <a href={item.link} className="link-accent">
                      {item.content}
                    </a>
                  ) : (
                    item.content
                  )}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
