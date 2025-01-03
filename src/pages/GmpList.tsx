import ListItem from "@/components/ListItem";

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
  return (
    <div className="page-transition">
      <div className="mb-6">
        <h1 className="text-2xl font-bold">Grey Market Premium</h1>
        <p className="text-muted-foreground">Latest GMP updates</p>
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