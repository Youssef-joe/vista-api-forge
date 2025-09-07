import { DashboardHeader } from "@/components/dashboard/DashboardHeader";
import { StatsCard } from "@/components/dashboard/StatsCard";
import { RequestBuilder } from "@/components/dashboard/RequestBuilder";
import { RecentActivity } from "@/components/dashboard/RecentActivity";
import { QuickActions } from "@/components/dashboard/QuickActions";
import { Activity, Clock, CheckCircle, AlertTriangle, Zap } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <DashboardHeader />
      
      {/* Main Content */}
      <main className="p-6 space-y-8">
        {/* Welcome Section */}
        <div className="space-y-2">
          <h1 className="text-3xl font-bold">API Testing Dashboard</h1>
          <p className="text-muted-foreground text-lg">
            Professional API testing and development environment
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatsCard
            title="Total Requests"
            value="1,247"
            description="Last 30 days"
            icon={Activity}
            trend={{ value: "12%", isPositive: true }}
          />
          <StatsCard
            title="Avg Response Time"
            value="245ms"
            description="Across all endpoints"
            icon={Clock}
            trend={{ value: "8ms", isPositive: false }}
          />
          <StatsCard
            title="Success Rate"
            value="98.2%"
            description="Successful requests"
            icon={CheckCircle}
            trend={{ value: "0.3%", isPositive: true }}
          />
          <StatsCard
            title="Active Endpoints"
            value="42"
            description="Currently monitored"
            icon={Zap}
            trend={{ value: "3", isPositive: true }}
          />
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Request Builder - Takes up 2 columns */}
          <div className="lg:col-span-2">
            <RequestBuilder />
          </div>
          
          {/* Sidebar Content */}
          <div className="space-y-6">
            <QuickActions />
            <RecentActivity />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;