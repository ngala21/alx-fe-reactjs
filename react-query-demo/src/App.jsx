import { QueryClient, QueryClientProvider } from 'react-query';
import PostsComponent from './components/PostsComponent';
import { BrowserRouter } from 'react-router-dom';

const queryClient = new QueryClient();

function App() {
  return (
    <Router>
      <Routes>
         <QueryClientProvider client={queryClient}>
         <Route path="/PostsComponent" element={<PostsComponent />} />
         </QueryClientProvider>
      </Routes>
    </Router>
  );
}

export default App
