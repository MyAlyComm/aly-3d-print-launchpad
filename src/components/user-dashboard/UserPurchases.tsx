
import { useState, useEffect } from "react";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

// Update to use a more generic User type
interface UserPurchasesProps {
  user: {
    id?: string;
    email?: string;
    [key: string]: any;
  };
}

interface Purchase {
  id: string;
  name: string;
  date: string;
  amount: string;
  status: 'completed' | 'pending' | 'failed';
  accessUrl: string;
}

export const UserPurchases = ({ user }: UserPurchasesProps) => {
  const navigate = useNavigate();
  const [purchases, setPurchases] = useState<Purchase[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    const fetchPurchases = () => {
      // In a real implementation, we would fetch from Supabase
      // For demo purposes, let's create a mock purchase for the 3D Printing Blueprint
      
      // Check if the user has access to the ebook based on localStorage
      const hasAccess = localStorage.getItem("hasAccessToEbook") === "true";
      
      if (hasAccess) {
        setPurchases([
          {
            id: "3d-blueprint",
            name: "3D Printing Blueprint",
            date: new Date().toLocaleDateString(),
            amount: "$49.99",
            status: 'completed',
            accessUrl: "/dashboard/3d-blueprint"
          }
        ]);
      } else {
        setPurchases([]);
      }
      
      setIsLoading(false);
    };
    
    fetchPurchases();
  }, [user.id]);
  
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold tracking-tight">Your Purchases</h2>
        <p className="text-gray-500">View and access your purchased products</p>
      </div>
      
      {isLoading ? (
        <div className="flex items-center justify-center py-10">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
        </div>
      ) : purchases.length > 0 ? (
        <div className="rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Product</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {purchases.map((purchase) => (
                <TableRow key={purchase.id}>
                  <TableCell className="font-medium">{purchase.name}</TableCell>
                  <TableCell>{purchase.date}</TableCell>
                  <TableCell>{purchase.amount}</TableCell>
                  <TableCell>
                    <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                      purchase.status === 'completed'
                        ? 'bg-green-100 text-green-800'
                        : purchase.status === 'pending'
                        ? 'bg-yellow-100 text-yellow-800'
                        : 'bg-red-100 text-red-800'
                    }`}>
                      {purchase.status.charAt(0).toUpperCase() + purchase.status.slice(1)}
                    </span>
                  </TableCell>
                  <TableCell>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => navigate(purchase.accessUrl)}
                    >
                      Access
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      ) : (
        <div className="text-center py-10 border rounded-md bg-gray-50">
          <h3 className="text-lg font-medium text-gray-900">No purchases found</h3>
          <p className="mt-1 text-sm text-gray-500">
            You haven't made any purchases yet.
          </p>
          <div className="mt-6">
            <Button onClick={() => navigate("/")}>
              Explore Products
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};
