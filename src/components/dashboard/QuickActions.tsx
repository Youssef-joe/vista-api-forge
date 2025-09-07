import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus, Import, FileText, Settings, Zap, Database } from "lucide-react";

export function QuickActions() {
  const actions = [
    {
      title: "New Request",
      description: "Create a new API request",
      icon: Plus,
      variant: "gradient" as const,
    },
    {
      title: "Import Collection",
      description: "Import from Postman or OpenAPI",
      icon: Import,
      variant: "outline" as const,
    },
    {
      title: "Generate Docs",
      description: "Auto-generate API documentation",
      icon: FileText,
      variant: "outline" as const,
    },
    {
      title: "Environment Setup",
      description: "Configure test environments",
      icon: Settings,
      variant: "outline" as const,
    },
    {
      title: "Performance Test",
      description: "Run load and stress tests",
      icon: Zap,
      variant: "outline" as const,
    },
    {
      title: "Mock Server",
      description: "Start a mock API server",
      icon: Database,
      variant: "outline" as const,
    }
  ];

  return (
    <Card>
      <CardHeader className="pb-4">
        <CardTitle className="text-lg">Quick Actions</CardTitle>
      </CardHeader>
      
      <CardContent>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {actions.map((action, index) => (
            <Button
              key={index}
              variant={action.variant}
              className="h-auto p-4 flex flex-col items-start space-y-2 text-left"
            >
              <div className="flex items-center space-x-2 w-full">
                <action.icon className="h-4 w-4 flex-shrink-0" />
                <span className="font-medium text-sm">{action.title}</span>
              </div>
              <p className="text-xs opacity-80 leading-relaxed">
                {action.description}
              </p>
            </Button>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}