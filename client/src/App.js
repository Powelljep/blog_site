import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ArticlesList from './pages/ArticlesList';
import ArticlePage from './pages/ArticlePage';
import NavBar from './NavBar';
import PageNotFound from './pages/PageNotFound';


function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} exact />
          <Route path="/about" element={ <AboutPage />} />
          <Route path="/articles-list" element={ <ArticlesList />} />
          <Route path="/article/:name" element={<ArticlePage /> } />
          <Route path="/*" element={<PageNotFound />} ></Route>
        </Routes>
    </div>
    </Router>
  );
}

export default App;
