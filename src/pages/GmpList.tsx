import ListItem from "@/components/ListItem";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const mockGmps = [
  {
    id: 1,
    name: "Tech Solutions Ltd",
    gmp: "+75",
    price: "450",
  },
  {
    id: 2,
    name: "Green Energy Corp",
    gmp: "+45",
    price: "250",
  },
  {
    id: 3,
    name: "Digital Payments Inc",
    gmp: "+120",
    price: "800",
  },
];

const GmpList = () => {
  const { toast } = useToast();

  const handleDownload = () => {
    // Convert data to CSV format
    const headers = ["Company Name", "GMP", "Issue Price"];
    const csvData = mockGmps.map(gmp => 
      `${gmp.name},${gmp.gmp},${gmp.price}`
    ).join("\n");
    
    const csvContent = `${headers.join(",")}\n${csvData}`;
    
    // Create blob and download
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const link = document.createElement("a");
    const url = URL.createObjectURL(blob);
    
    link.setAttribute("href", url);
    link.setAttribute("download", "gmp_data.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    toast({
      title: "Download Started",
      description: "Your GMP data is being downloaded",
    });
  };

  return (
    <div className="page-transition">
      <div className="mb-6 flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold">Grey Market Premium</h1>
          <p className="text-muted-foreground">Latest GMP updates</p>
        </div>
        <Button 
          variant="outline" 
          size="sm" 
          onClick={handleDownload}
          className="flex items-center gap-2"
        >
          <Download size={16} />
          Download
        </Button>
      </div>
      
      <div>
        {mockGmps.map((gmp) => (
          <ListItem
            key={gmp.id}
            title={gmp.name}
            subtitle={`Issue Price: ₹${gmp.price}`}
            extra={
              <div className="text-green-600 font-semibold">
                +₹{gmp.gmp}
              </div>
            }
          />
        ))}
      </div>
    </div>
  );
};

export default GmpList;