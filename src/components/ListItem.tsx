import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface ListItemProps {
  title: string;
  subtitle?: string;
  extra?: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const ListItem = ({ title, subtitle, extra, className, onClick }: ListItemProps) => {
  return (
    <Card 
      className={cn("p-4 mb-3 hover:shadow-md transition-shadow", className)}
      onClick={onClick}
    >
      <div className="flex justify-between items-start">
        <div>
          <h3 className="font-medium">{title}</h3>
          {subtitle && <p className="text-sm text-muted-foreground">{subtitle}</p>}
        </div>
        {extra && <div>{extra}</div>}
      </div>
    </Card>
  );
};

export default ListItem;