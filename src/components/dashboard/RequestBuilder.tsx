import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Play, Save, Copy, Clock } from "lucide-react";

export function RequestBuilder() {
  const [method, setMethod] = useState("GET");
  const [url, setUrl] = useState("");
  const [response, setResponse] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSendRequest = async () => {
    setIsLoading(true);
    // Simulate API request
    setTimeout(() => {
      setResponse(JSON.stringify({
        "status": 200,
        "message": "Success",
        "data": {
          "users": [
            { "id": 1, "name": "John Doe", "email": "john@example.com" },
            { "id": 2, "name": "Jane Smith", "email": "jane@example.com" }
          ]
        },
        "timestamp": new Date().toISOString()
      }, null, 2));
      setIsLoading(false);
    }, 1500);
  };

  const getMethodColor = (method: string) => {
    switch (method) {
      case "GET": return "bg-success text-success-foreground";
      case "POST": return "bg-primary text-primary-foreground";
      case "PUT": return "bg-warning text-warning-foreground";
      case "DELETE": return "bg-destructive text-destructive-foreground";
      default: return "bg-muted text-muted-foreground";
    }
  };

  return (
    <Card className="flex-1">
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between">
          <CardTitle className="text-xl">API Request Builder</CardTitle>
          <div className="flex items-center space-x-2">
            <Button variant="outline" size="sm">
              <Clock className="h-4 w-4 mr-2" />
              History
            </Button>
            <Button variant="outline" size="sm">
              <Save className="h-4 w-4 mr-2" />
              Save
            </Button>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-6">
        {/* Request Configuration */}
        <div className="space-y-4">
          <div className="flex space-x-3">
            <Select value={method} onValueChange={setMethod}>
              <SelectTrigger className="w-28">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="GET">GET</SelectItem>
                <SelectItem value="POST">POST</SelectItem>
                <SelectItem value="PUT">PUT</SelectItem>
                <SelectItem value="DELETE">DELETE</SelectItem>
                <SelectItem value="PATCH">PATCH</SelectItem>
              </SelectContent>
            </Select>
            
            <div className="flex-1 flex space-x-2">
              <Input
                placeholder="https://api.example.com/users"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                className="flex-1"
              />
              <Button 
                onClick={handleSendRequest}
                disabled={!url || isLoading}
                className="px-8"
              >
                <Play className="h-4 w-4 mr-2" />
                {isLoading ? "Sending..." : "Send"}
              </Button>
            </div>
          </div>
        </div>

        {/* Request Details */}
        <Tabs defaultValue="headers" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="headers">Headers</TabsTrigger>
            <TabsTrigger value="params">Params</TabsTrigger>
            <TabsTrigger value="body">Body</TabsTrigger>
            <TabsTrigger value="auth">Auth</TabsTrigger>
          </TabsList>
          
          <TabsContent value="headers" className="space-y-4 mt-4">
            <div className="space-y-3">
              <div className="flex space-x-3">
                <Input placeholder="Header name" className="flex-1" />
                <Input placeholder="Header value" className="flex-1" />
                <Button variant="outline" size="sm">Remove</Button>
              </div>
              <div className="flex space-x-3">
                <Input placeholder="Content-Type" value="application/json" className="flex-1" />
                <Input placeholder="application/json" className="flex-1" />
                <Button variant="outline" size="sm">Remove</Button>
              </div>
              <Button variant="outline" size="sm">+ Add Header</Button>
            </div>
          </TabsContent>
          
          <TabsContent value="params" className="space-y-4 mt-4">
            <div className="space-y-3">
              <div className="flex space-x-3">
                <Input placeholder="Parameter name" className="flex-1" />
                <Input placeholder="Parameter value" className="flex-1" />
                <Button variant="outline" size="sm">Remove</Button>
              </div>
              <Button variant="outline" size="sm">+ Add Parameter</Button>
            </div>
          </TabsContent>
          
          <TabsContent value="body" className="space-y-4 mt-4">
            <div className="space-y-3">
              <Label>Request Body</Label>
              <Textarea 
                placeholder='{"name": "John Doe", "email": "john@example.com"}'
                className="h-32 font-mono text-sm"
              />
            </div>
          </TabsContent>
          
          <TabsContent value="auth" className="space-y-4 mt-4">
            <div className="space-y-3">
              <Select defaultValue="none">
                <SelectTrigger className="w-48">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="none">No Auth</SelectItem>
                  <SelectItem value="bearer">Bearer Token</SelectItem>
                  <SelectItem value="basic">Basic Auth</SelectItem>
                  <SelectItem value="api-key">API Key</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </TabsContent>
        </Tabs>

        {/* Response Section */}
        {response && (
          <div className="space-y-4 pt-6 border-t">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <h3 className="font-semibold">Response</h3>
                <Badge className={getMethodColor(method)}>{method}</Badge>
                <Badge variant="outline" className="status-success">200 OK</Badge>
              </div>
              <Button variant="outline" size="sm">
                <Copy className="h-4 w-4 mr-2" />
                Copy
              </Button>
            </div>
            
            <div className="code-block">
              <pre className="whitespace-pre-wrap text-sm">{response}</pre>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}