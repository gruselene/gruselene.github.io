import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { Home as HomeIcon, BookOpen, User, Github, Twitter, Mail, Menu, X, Library, Eye } from 'lucide-react';
import HomePage from './pages/Home';
import BlogList from './pages/BlogList';
import About from './pages/About';
import MyLiterature from './pages/MyLiterature';
import MyEnglishPoem from './pages/MyLiterature/myEnglishPoem';
import MyEnglishPoem1 from './pages/MyLiterature/myEnglishPoem/Poem1';
import MyMetredPoem from './pages/MyLiterature/myMetredPoem';
import MyMetredPoem1 from './pages/MyLiterature/myMetredPoem/Poem1';
import MyNovel from './pages/MyLiterature/myNovel';
import MyNovel1 from './pages/MyLiterature/myNovel/Novel1';
import MyNewPoem from './pages/MyLiterature/myNewPoem';
import MyNewPoem1 from './pages/MyLiterature/myNewPoem/Poem1';
import MyTranslations from './pages/MyTranslations';
import MyEnglishToChineseTranslation from './pages/MyTranslations/myEnglishToChineseTranslation';
import MyEnglishToChineseWork1 from './pages/MyTranslations/myEnglishToChineseTranslation/Work1';
import MyChineseToEnglishTranslation from './pages/MyTranslations/myChineseToEnglishTranslation';
import MyChineseToEnglishWork1 from './pages/MyTranslations/myChineseToEnglishTranslation/Work1';
import MyGermanToChineseTranslation from './pages/MyTranslations/myGermanToChineseTranslation';
import MyGermanToChineseWork1 from './pages/MyTranslations/myGermanToChineseTranslation/Work1';
import MyExternalWorks from './pages/MyExternalWorks';
import MySCP from './pages/MyExternalWorks/mySCP';
import MyWanderersLibrary from './pages/MyExternalWorks/myWanderersLibrary';

const Layout = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const location = useLocation();

  // 页面跳转时滚动到顶部
  React.useEffect(() => {
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'auto'
      });
    };
    
    scrollToTop();
    
    // 确保在 DOM 更新后再次滚动
    const timer = setTimeout(() => {
      scrollToTop();
    }, 100);
    
    return () => clearTimeout(timer);
  }, [location.pathname]);

  const navLinks = [
    { name: 'prospicere', path: '/', icon: <HomeIcon size={16} /> },
    { name: 'meditari', path: '/blog', icon: <BookOpen size={16} /> },
    { name: 'convenire', path: '/about', icon: <User size={16} /> },
  ];

  const socialLinks = [
    { icon: <Github size={22} />, url: 'https://github.com/gruselene' },
    { icon: <Eye size={22} />, url: 'https://www.wikidot.com/user:info/AStarTwoEyes' },
    { icon: <Mail size={22} />, url: 'https://outlook.office.com/mail/' }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-mystic-950 text-mystic-100 selection:bg-gold-500 selection:text-mystic-950 relative overflow-x-hidden">
      {/* Background Ornaments */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-parchment opacity-[0.03]"></div>
        {/* Floating Particles */}
        <div className="floating-particle w-1 h-1 top-[10%] left-[20%]" style={{'--tw-translate-x': '50px', '--tw-translate-y': '-100px'}}></div>
        <div className="floating-particle w-2 h-2 top-[40%] left-[80%]" style={{'--tw-translate-x': '-80px', '--tw-translate-y': '-150px'}}></div>
        <div className="floating-particle w-1 h-1 top-[70%] left-[10%]" style={{'--tw-translate-x': '120px', '--tw-translate-y': '-200px'}}></div>
        <div className="floating-particle w-1.5 h-1.5 top-[90%] left-[50%]" style={{'--tw-translate-x': '-40px', '--tw-translate-y': '-300px'}}></div>
      </div>

      {/* Navigation */}
      <nav className="bg-mystic-950/80 backdrop-blur-md border-b border-mystic-800 sticky top-0 z-50">
        <div className="max-w-5xl mx-auto px-6 sm:px-8">
          <div className="flex items-center h-20">
            {/* Left Icon */}
            <div className="flex-none">
              <Link to="/" className="group flex items-center justify-center w-10 h-10">
                <Library size={20} className="text-gold-500 group-hover:text-gold-400 transition-all duration-300" />
              </Link>
            </div>

            {/* Title - Centered in remaining space */}
            <div className="flex-grow flex items-center justify-center px-4 overflow-hidden">
              <Link to="/" className="hover:opacity-80 transition-opacity flex items-center">
                <span className="text-base md:text-lg lg:text-xl font-serif font-bold tracking-[0.2em] uppercase glimmer-text whitespace-nowrap truncate">
                  GRUSELENE'S MYSTIC ARCHIVES
                </span>
              </Link>
            </div>
            
            {/* Right Icons / Menu */}
            <div className="flex-none flex items-center">
              {/* Desktop Menu */}
              <div className="hidden md:flex items-center space-x-4 lg:space-x-6">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`relative flex items-center space-x-1.5 text-[10px] lg:text-xs font-serif tracking-[0.15em] lg:tracking-widest uppercase transition-all duration-300 group ${
                      location.pathname === link.path ? 'text-gold-500' : 'text-mystic-300 hover:text-gold-400'
                    }`}
                  >
                    <span className="opacity-40 group-hover:opacity-100 transition-opacity scale-90">
                      {React.cloneElement(link.icon, { size: 14 })}
                    </span>
                    <span>{link.name}</span>
                    {location.pathname === link.path && (
                      <span className="absolute -bottom-1 left-0 w-full h-px bg-gold-500 shadow-[0_0_8px_rgba(255,191,0,0.8)]"></span>
                    )}
                  </Link>
                ))}
              </div>

              {/* Mobile Menu Button */}
              <div className="md:hidden flex items-center ml-4">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gold-500 hover:text-gold-400 transition-colors"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-mystic-900 border-b border-mystic-800 animate-in fade-in slide-in-from-top-4 duration-300">
            <div className="px-4 pt-4 pb-6 space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`flex items-center space-x-4 px-4 py-3 rounded-none font-serif tracking-widest uppercase ${
                    location.pathname === link.path ? 'bg-gold-500/10 text-gold-500 border-l-2 border-gold-500' : 'text-mystic-300 hover:bg-mystic-800'
                  }`}
                >
                  {link.icon}
                  <span>{link.name}</span>
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="flex-grow max-w-5xl mx-auto px-6 sm:px-8 py-12 w-full fade-in-mystic relative">
        <div className="relative z-10">
          {children}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-mystic-950 border-t border-mystic-800 py-16">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 text-center">
          <div className="mb-8 opacity-30 flex justify-center items-center space-x-4">
            <div className="h-px w-12 bg-gold-500"></div>
            <Library size={24} className="text-gold-500" />
            <div className="h-px w-12 bg-gold-500"></div>
          </div>
          <div className="flex justify-center space-x-8 mb-10">
            {socialLinks.map((link, idx) => (
              <a 
                key={idx} 
                href={link.url} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-mystic-300 hover:text-gold-500 transition-all duration-500 hover:scale-110"
              >
                {link.icon}
              </a>
            ))}
          </div>
          <p className="text-xs font-serif tracking-[0.3em] text-mystic-300 uppercase opacity-60">
              © {new Date().getFullYear()} Gruselene's Mystic Archives. Whispers from the void.
            </p>
        </div>
      </footer>
    </div>
  );
};

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/blog" element={<BlogList />} />
        <Route path="/my-literature" element={<MyLiterature />} />
        <Route path="/my-literature/myEnglishPoem" element={<MyEnglishPoem />} />
        <Route path="/my-literature/myEnglishPoem/Poem1" element={<MyEnglishPoem1 />} />
        <Route path="/my-literature/myMetredPoem" element={<MyMetredPoem />} />
        <Route path="/my-literature/myMetredPoem/Poem1" element={<MyMetredPoem1 />} />
        <Route path="/my-literature/myNovel" element={<MyNovel />} />
        <Route path="/my-literature/myNovel/Novel1" element={<MyNovel1 />} />
        <Route path="/my-literature/myNewPoem" element={<MyNewPoem />} />
        <Route path="/my-literature/myNewPoem/Poem1" element={<MyNewPoem1 />} />
        <Route path="/my-translations" element={<MyTranslations />} />
        <Route path="/my-translations/myEnglishToChineseTranslation" element={<MyEnglishToChineseTranslation />} />
        <Route path="/my-translations/myEnglishToChineseTranslation/Work1" element={<MyEnglishToChineseWork1 />} />
        <Route path="/my-translations/myChineseToEnglishTranslation" element={<MyChineseToEnglishTranslation />} />
        <Route path="/my-translations/myChineseToEnglishTranslation/Work1" element={<MyChineseToEnglishWork1 />} />
        <Route path="/my-translations/myGermanToChineseTranslation" element={<MyGermanToChineseTranslation />} />
        <Route path="/my-translations/myGermanToChineseTranslation/Work1" element={<MyGermanToChineseWork1 />} />
        <Route path="/my-external-works" element={<MyExternalWorks />} />
        <Route path="/my-external-works/mySCP" element={<MySCP />} />
        <Route path="/my-external-works/myWanderersLibrary" element={<MyWanderersLibrary />} />
        <Route path="/about" element={<About />} />
      </Routes>
      </Layout>
    </Router>
  );
}

export default App;