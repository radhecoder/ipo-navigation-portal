import { useNavigate } from "react-router-dom";
import ListItem from "@/components/ListItem";
import { Badge } from "@/components/ui/badge";

const mockIpos = [
  {
    id: 1,
    name: "Tech Solutions Ltd",
    price: "₹450-500",
    status: "Open",
    date: "Mar 15-18, 2024",
  },
  {
    id: 2,
    name: "Green Energy Corp",
    price: "₹250-280",
    status: "Upcoming",
    date: "Mar 20-23, 2024",
  },
  {
    id: 3,
    name: "Digital Payments Inc",
    price: "₹800-850",
    status: "Closed",
    date: "Mar 10-13, 2024",
  },
];

const IpoList = () => {
  const navigate = useNavigate();

  return (
    <div className="page-transition">
      <div className="mb-6">
        <h1 className="text-2xl font-bold">Current IPOs</h1>
        <p className="text-muted-foreground">Latest IPO listings and updates</p>
      </div>
      
      <div>
        {mockIpos.map((ipo) => (
          <ListItem
            key={ipo.id}
            title={ipo.name}
            subtitle={`Price Band: ${ipo.price} | ${ipo.date}`}
            extra={
              <Badge variant={ipo.status === "Open" ? "default" : ipo.status === "Upcoming" ? "secondary" : "outline"}>
                {ipo.status}
              </Badge>
            }
            className="cursor-pointer"
            onClick={() => navigate(`/ipo/${ipo.id}`)}
          />
        ))}
      </div>
    </div>
  );
};

export default IpoList;