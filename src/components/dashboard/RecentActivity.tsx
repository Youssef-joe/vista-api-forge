import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Clock, ExternalLink } from "lucide-react";

interface Activity {
  id: string;
  method: string;
  endpoint: string;
  status: number;
  timestamp: string;
  duration: string;
}

const recentActivities: Activity[] = [
  {
    id: "1",
    method: "GET",
    endpoint: "/api/users",
    status: 200,
    timestamp: "2 minutes ago",
    duration: "245ms"
  },
  {
    id: "2",
    method: "POST",
    endpoint: "/api/auth/login",
    status: 201,
    timestamp: "5 minutes ago",
    duration: "1.2s"
  },
  {
    id: "3",
    method: "PUT",
    endpoint: "/api/users/123",
    status: 200,
    timestamp: "12 minutes ago",
    duration: "456ms"
  },
  {
    id: "4",
    method: "DELETE",
    endpoint: "/api/posts/456",
    status: 404,
    timestamp: "18 minutes ago",
    duration: "123ms"
  },
  {
    id: "5",
    method: "GET",
    endpoint: "/api/analytics",
    status: 500,
    timestamp: "25 minutes ago",
    duration: "2.1s"
  }
];

export function RecentActivity() {
  const getMethodColor = (method: string) => {
    switch (method) {
      case "GET": return "bg-success/10 text-success border-success/20";
      case "POST": return "bg-primary/10 text-primary border-primary/20";
      case "PUT": return "bg-warning/10 text-warning border-warning/20";
      case "DELETE": return "bg-destructive/10 text-destructive border-destructive/20";
      default: return "bg-muted/10 text-muted-foreground border-muted/20";
    }
  };

  const getStatusColor = (status: number) => {
    if (status >= 200 && status < 300) return "status-success";
    if (status >= 400 && status < 500) return "status-warning";
    if (status >= 500) return "status-error";
    return "bg-muted/10 text-muted-foreground border-muted/20";
  };

  return (
    <Card>
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg">Recent Activity</CardTitle>
          <Button variant="ghost" size="sm">
            View All
            <ExternalLink className="h-3 w-3 ml-1" />
          </Button>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-4">
        {recentActivities.map((activity) => (
          <div
            key={activity.id}
            className="flex items-center justify-between p-3 rounded-lg border bg-card/50 hover:bg-card transition-colors"
          >
            <div className="flex items-center space-x-3">
              <Badge className={getMethodColor(activity.method)} variant="outline">
                {activity.method}
              </Badge>
              <div className="flex flex-col">
                <span className="font-mono text-sm font-medium">{activity.endpoint}</span>
                <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                  <Clock className="h-3 w-3" />
                  <span>{activity.timestamp}</span>
                  <span>•</span>
                  <span>{activity.duration}</span>
                </div>
              </div>
            </div>
            
            <Badge className={getStatusColor(activity.status)} variant="outline">
              {activity.status}
            </Badge>
          </div>
        ))}
        
        <div className="pt-2 border-t">
          <Button variant="outline" className="w-full" size="sm">
            Load More Activity
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}