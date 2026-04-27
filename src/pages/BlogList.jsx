import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Calendar, Search, BookOpen, Scroll } from 'lucide-react';
import { getAllCollections } from '../data/get';
import { sortByDate, renderSingleColumn, components } from '../data/show.jsx';

const BlogList = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 10;
  const navigate = useNavigate();
  const location = useLocation();
  
  // Combine all works from different collections with unique IDs
  const collections = getAllCollections();
  const allWorksCombined = collections.flatMap(collection => 
    collection.categories.flatMap(category => 
      (category.works || []).map(work => ({ ...work, uniqueId: `${category.id}-${work.id}` }))
    )
  );
  
  // 根据日期排序
  const sortedWorks = sortByDate(allWorksCombined);

  const filteredPosts = sortedWorks.filter(post => {
    const query = searchQuery.toLowerCase();
    return (
      post.title.toLowerCase().includes(query) ||
      (post.excerpt && post.excerpt.toLowerCase().includes(query)) ||
      (post.content && post.content.toLowerCase().includes(query)) ||
      post.category.toLowerCase().includes(query)
    );
  });

  // 分页逻辑
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

  return (
    <div className="space-y-24">
      <header className="space-y-6 max-w-2xl relative p-8">
        <h1 className="text-4xl font-serif font-bold tracking-widest uppercase bg-gradient-to-r from-gold-400 to-white bg-clip-text text-transparent w-fit">
          LIBRI
        </h1>
        <p className="text-mystic-300 font-serif italic leading-relaxed uppercase tracking-widest opacity-60">
          {filteredPosts.length} in tabulas referre
        </p>
        
        {/* Search Bar */}
        <div className="relative group max-w-md">
          <div className="absolute inset-0 bg-gold-500/10 blur-md opacity-0 group-focus-within:opacity-100 transition-opacity"></div>
          <div className="relative flex items-center border border-mystic-800 bg-mystic-900/50 focus-within:border-gold-600/50 transition-all duration-500">
            <Search className="ml-4 text-mystic-500" size={18} />
            <input
              type="text"
              placeholder="excutere..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-3 bg-transparent text-mystic-100 placeholder:text-mystic-700 focus:outline-none font-serif text-sm tracking-widest"
            />
          </div>
        </div>
      </header>

      <div className="space-y-8">
        {currentPosts.length > 0 ? (
          renderSingleColumn(currentPosts, (post) => (
            <article className="mystic-card">
              {post.category || post.date ? (
                <div className="card-meta">
                  {post.category && (
                    <span className="card-category">
                      {post.category}
                    </span>
                  )}
                  {post.date && (
                    <div className="card-date">
                      <Calendar size={12} className="text-gold-500/50" /> {post.date}
                    </div>
                  )}
                </div>
              ) : null}
              {post.title && (
                <h3 className="card-title">
                  {post.url ? (
                    post.url.startsWith('/') ? (
                      <Link to={post.url}>{post.title}</Link>
                    ) : (
                      <a href={post.url} target="_blank" rel="noopener noreferrer">{post.title}</a>
                    )
                  ) : (
                    <span>{post.title}</span>
                  )}
                </h3>
              )}
              {(post.excerpt || post.content) && (
                <p className="card-excerpt">
                  {post.excerpt || post.content || ''}
                </p>
              )}
            </article>
          ), {
          divide: components.alienisComponent
        })
        ) : (
          <div className="text-center py-20">
            <p className="text-mystic-300 font-serif italic opacity-60">
              nihil inveniendum est
            </p>
          </div>
        )}
      </div>

      {/* 分页控件 */}
      {totalPages > 1 && (
        <div className="flex justify-center space-x-2 py-8">
          <button 
            onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className="px-4 py-2 border border-mystic-800 bg-mystic-900/50 hover:border-gold-600/50 transition-all duration-500 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Previous
          </button>
          {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`px-4 py-2 border transition-all duration-500 ${currentPage === page ? 'border-gold-600 bg-gold-600/10' : 'border-mystic-800 bg-mystic-900/50 hover:border-gold-600/50'}`}
            >
              {page}
            </button>
          ))}
          <button 
            onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
            className="px-4 py-2 border border-mystic-800 bg-mystic-900/50 hover:border-gold-600/50 transition-all duration-500 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default BlogList;
