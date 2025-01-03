import ListItem from "@/components/ListItem";

const mockNews = [
  {
    id: 1,
    title: "New Tech IPO Oversubscribed by 150 Times",
    date: "2 hours ago",
    source: "Financial Times",
  },
  {
    id: 2,
    title: "Green Energy Corp IPO to Open Next Week",
    date: "5 hours ago",
    source: "Economic Times",
  },
  {
    id: 3,
    title: "Digital Payments Inc IPO Listing Date Announced",
    date: "1 day ago",
    source: "Business Standard",
  },
];

const NewsList = () => {
  return (
    <div className="page-transition">
      <div className="mb-6">
        <h1 className="text-2xl font-bold">IPO News</h1>
        <p className="text-muted-foreground">Latest updates from the IPO market</p>
      </div>
      
      <div>
        {mockNews.map((news) => (
          <ListItem
            key={news.id}
            title={news.title}
            subtitle={news.source}
            extra={
              <span className="text-sm text-muted-foreground">
                {news.date}
              </span>
            }
          />
        ))}
      </div>
    </div>
  );
};

export default NewsList;