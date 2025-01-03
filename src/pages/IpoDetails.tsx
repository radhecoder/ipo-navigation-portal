import { useParams } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const mockIpoDetails = {
  1: {
    name: "Tech Solutions Ltd",
    price: "₹450-500",
    status: "Open",
    date: "Mar 15-18, 2024",
    lotSize: 30,
    issueSize: "₹1,500 Cr",
    retailQuota: "35%",
    qibQuota: "50%",
    niiQuota: "15%",
    registrar: "Link Intime India Pvt Ltd",
    description: "Tech Solutions Ltd is a leading technology company specializing in digital transformation solutions and IT services.",
    financials: {
      revenue2023: "₹850 Cr",
      profit2023: "₹120 Cr",
      revenue2022: "₹650 Cr",
      profit2022: "₹85 Cr"
    }
  },
  2: {
    name: "Green Energy Corp",
    price: "₹250-280",
    status: "Upcoming",
    date: "Mar 20-23, 2024",
    lotSize: 50,
    issueSize: "₹800 Cr",
    retailQuota: "35%",
    qibQuota: "50%",
    niiQuota: "15%",
    registrar: "KFin Technologies Ltd",
    description: "Green Energy Corp is focused on renewable energy solutions and sustainable power generation.",
    financials: {
      revenue2023: "₹450 Cr",
      profit2023: "₹65 Cr",
      revenue2022: "₹320 Cr",
      profit2022: "₹40 Cr"
    }
  },
  3: {
    name: "Digital Payments Inc",
    price: "₹800-850",
    status: "Closed",
    date: "Mar 10-13, 2024",
    lotSize: 20,
    issueSize: "₹2,000 Cr",
    retailQuota: "35%",
    qibQuota: "50%",
    niiQuota: "15%",
    registrar: "KFin Technologies Ltd",
    description: "Digital Payments Inc is revolutionizing the digital payment ecosystem with innovative solutions.",
    financials: {
      revenue2023: "₹1,200 Cr",
      profit2023: "₹180 Cr",
      revenue2022: "₹850 Cr",
      profit2022: "₹120 Cr"
    }
  }
};

const IpoDetails = () => {
  const { id } = useParams();
  const ipo = id ? mockIpoDetails[id as keyof typeof mockIpoDetails] : null;

  if (!ipo) {
    return <div className="p-4">IPO not found</div>;
  }

  return (
    <div className="page-transition space-y-4 p-4">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">{ipo.name}</h1>
        <Badge variant={ipo.status === "Open" ? "default" : ipo.status === "Upcoming" ? "secondary" : "outline"}>
          {ipo.status}
        </Badge>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Issue Details</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-4 md:grid-cols-2">
          <div>
            <p className="text-sm text-muted-foreground">Price Band</p>
            <p className="font-medium">{ipo.price}</p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Issue Date</p>
            <p className="font-medium">{ipo.date}</p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Lot Size</p>
            <p className="font-medium">{ipo.lotSize} shares</p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Issue Size</p>
            <p className="font-medium">{ipo.issueSize}</p>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Quota Distribution</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-4 md:grid-cols-3">
          <div>
            <p className="text-sm text-muted-foreground">Retail</p>
            <p className="font-medium">{ipo.retailQuota}</p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground">QIB</p>
            <p className="font-medium">{ipo.qibQuota}</p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground">NII</p>
            <p className="font-medium">{ipo.niiQuota}</p>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Company Overview</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">{ipo.description}</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Financial Performance</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-4 md:grid-cols-2">
          <div>
            <p className="text-sm text-muted-foreground">Revenue (2023)</p>
            <p className="font-medium">{ipo.financials.revenue2023}</p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Profit (2023)</p>
            <p className="font-medium">{ipo.financials.profit2023}</p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Revenue (2022)</p>
            <p className="font-medium">{ipo.financials.revenue2022}</p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Profit (2022)</p>
            <p className="font-medium">{ipo.financials.profit2022}</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default IpoDetails;