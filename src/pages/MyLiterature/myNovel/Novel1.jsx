import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, ArrowLeft } from 'lucide-react';

const Novel1 = () => {
  return (
    <div className="space-y-12">
      {/* Back Navigation */}
      <Link 
        to="/my-literature/novels" 
        className="inline-flex items-center gap-2 text-mystic-300 hover:text-gold-400 transition-colors duration-300 font-serif text-sm"
      >
        <ArrowLeft size={16} />
        <span>Back to Novels</span>
      </Link>

      {/* Header */}
      <section className="space-y-6">
        <div className="flex items-center justify-between gap-4">
          <span className="text-[10px] font-serif tracking-[0.2em] text-gold-500 uppercase border-b border-gold-500/30 pb-0.5">
            Fiction
          </span>
          <div className="text-[10px] text-mystic-500 uppercase tracking-widest flex items-center gap-1.5">
            <Calendar size={12} /> 2024.04.27
          </div>
        </div>
        <h1 className="text-3xl md:text-4xl font-serif font-bold text-white">
          Placeholder Novel 1
        </h1>
      </section>

      {/* Content */}
      <section className="mystic-card p-8 md:p-12">
        <div className="prose prose-invert max-w-none font-serif">
          <p className="text-mystic-300 leading-relaxed text-lg">
            Your novel content goes here...
          </p>
          
          <p className="text-mystic-300 leading-relaxed mt-6">
            Chapter One
          </p>
          
          <p className="text-mystic-300 leading-relaxed mt-4">
            The story begins in a mysterious place, where shadows dance and whispers echo through the corridors of time...
          </p>
          
          <p className="text-mystic-300 leading-relaxed mt-4">
            Add your novel text here. This is a placeholder for your creative writing.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Novel1;