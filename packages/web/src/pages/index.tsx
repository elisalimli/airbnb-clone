import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import ProtectedRoute from "../ui/utils/ProtectedRoute";

const Home = () => {
  const [queryClient] = React.useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <ProtectedRoute>
        <div>Hello world</div>
      </ProtectedRoute>
    </QueryClientProvider>
  );
};

export default Home;
