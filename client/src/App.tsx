import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
import Editor from "@/pages/editor";
import ViewForm from "@/pages/view-form";
import Results from "@/pages/results";
import Templates from "@/pages/templates";
import TemplatePreview from "@/pages/template-preview";
import Dashboard from "@/pages/dashboard";
import EventManage from "@/pages/event-manage";
import EventSettings from "@/pages/event-settings";
import Login from "@/pages/login";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/editor" component={Editor} />
      <Route path="/templates" component={Templates} />
      <Route path="/template-preview" component={TemplatePreview} />
      <Route path="/view/:id" component={ViewForm} />
      <Route path="/results" component={Results} />
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/event/:id" component={EventManage} />
      <Route path="/event/:id/settings" component={EventSettings} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;