import { createStore, applyMiddleware } from 'redux';
// routes
import Router from './routes';
// theme
import ThemeProvider from './theme';
// components
import ScrollToTop from './components/scroll-to-top';
import { StyledChart } from './components/chart';



// ----------------------------------------------------------------------

export default function App() {
  // const store = createStore(rootReducer, applyMiddleware(ReduxThunk));
  return (
    <ThemeProvider>
      <ScrollToTop />
      <StyledChart />
      <Router />
    </ThemeProvider>
  );
}
