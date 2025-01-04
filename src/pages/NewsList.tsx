import ListItem from "@/components/ListItem";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useState } from "react";
import { ExternalLink } from "lucide-react";

const mockNews = [
  {
    id: 1,
    title: "New Tech IPO Oversubscribed by 150 Times",
    date: "2 hours ago",
    source: "Financial Times",
    content: `The latest tech IPO has seen unprecedented demand, with the issue being oversubscribed by 150 times. This remarkable response from investors highlights the strong appetite for technology stocks in the current market environment. The company plans to use the funds for expansion and R&D initiatives.

    Key Highlights:
    - Total issue size: ₹1,500 Cr
    - Price band: ₹450-500
    - Retail portion oversubscribed by 75x
    - QIB portion oversubscribed by 200x`,
  },
  {
    id: 2,
    title: "Green Energy Corp IPO to Open Next Week",
    date: "5 hours ago",
    source: "Economic Times",
    content: `Green Energy Corp, a leading renewable energy company, is set to open its IPO next week. The company has set an aggressive pricing strategy to attract retail investors. Market analysts are positive about the company's growth prospects given the increasing focus on sustainable energy solutions.

    Key Details:
    - Issue opens: March 20, 2024
    - Price band: ₹250-280
    - Minimum lot size: 50 shares
    - Issue closes: March 23, 2024`,
  },
  {
    id: 3,
    title: "Digital Payments Inc IPO Listing Date Announced",
    date: "1 day ago",
    source: "Business Standard",
    content: `Digital Payments Inc has announced its listing date following a successful IPO. The company's shares will be listed on both NSE and BSE. The IPO received strong response across investor categories, particularly from institutional investors.

    Important Information:
    - Listing Date: March 25, 2024
    - Issue Price: ₹800-850
    - Total Issue Size: ₹2,000 Cr
    - Expected Listing Premium: 25-30%`,
  },
];

const brokers = [
  {
    name: "Zerodha",
    url: "https://zerodha.com/open-account",
  },
  {
    name: "Groww",
    url: "https://groww.in/open-demat-account",
  },
  {
    name: "Upstox",
    url: "https://upstox.com/open-account",
  },
  {
    name: "Angel One",
    url: "https://www.angelone.in/open-demat-account",
  },
];

const NewsList = () => {
  const [selectedNews, setSelectedNews] = useState<typeof mockNews[0] | null>(null);

  const handleNewsClick = (news: typeof mockNews[0]) => {
    setSelectedNews(news);
  };

  const openLink = (url: string) => {
    window.open(url, '_blank');
  };

  return (
    <div className="page-transition">
      <div className="mb-6">
        <h1 className="text-2xl font-bold">IPO News</h1>
        <p className="text-muted-foreground">Latest updates from the IPO market</p>
      </div>
      
      <div className="grid gap-6 md:grid-cols-2">
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
              className="cursor-pointer"
              onClick={() => handleNewsClick(news)}
            />
          ))}
        </div>

        <div className="space-y-6">
          <div className="rounded-lg border p-4">
            <h2 className="text-lg font-semibold mb-4">Open Demat Account</h2>
            <div className="grid gap-3">
              {brokers.map((broker) => (
                <Button
                  key={broker.name}
                  variant="outline"
                  className="w-full justify-between"
                  onClick={() => openLink(broker.url)}
                >
                  {broker.name}
                  <ExternalLink className="h-4 w-4" />
                </Button>
              ))}
            </div>
          </div>

          <div className="rounded-lg border p-4">
            <h2 className="text-lg font-semibold mb-4">Quick Links</h2>
            <div className="grid gap-3">
              <Button
                variant="outline"
                className="w-full justify-between"
                onClick={() => openLink("https://www.bseindia.com/investors/appli_check.aspx")}
              >
                Check IPO Allotment Status
                <ExternalLink className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      <Dialog open={!!selectedNews} onOpenChange={() => setSelectedNews(null)}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>{selectedNews?.title}</DialogTitle>
          </DialogHeader>
          <div className="mt-4">
            <div className="flex justify-between items-center text-sm text-muted-foreground mb-4">
              <span>{selectedNews?.source}</span>
              <span>{selectedNews?.date}</span>
            </div>
            <div className="whitespace-pre-line">
              {selectedNews?.content}
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default NewsList;