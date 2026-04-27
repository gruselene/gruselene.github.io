import React from 'react';
import { Link } from 'react-router-dom';
import { Award, GraduationCap, Scroll, Calendar } from 'lucide-react';
import { getAllCollections, getAllExperiences } from '../data/get';
import { sortByName, renderTwoColumns, renderSingleColumn } from '../data/show.jsx';
import baoxiangSvg from '../assets/baoxiang.svg';

const About = () => {
  return (
    <div className="space-y-24">
      {/* Intro Header */}
      <section className="text-center space-y-8 relative">
        <div className="w-40 h-40 mx-auto relative group">
          {/* Animated Background Rings */}
          <div className="absolute inset-0 border border-gold-500/20 rounded-full animate-ping duration-[3000ms]"></div>
          <div className="absolute inset-4 border border-gold-500/40 rounded-full animate-pulse"></div>
          
          <div className="w-full h-full flex items-center justify-center relative z-10">
            <img 
              src={baoxiangSvg}
              alt="Baoxiang Pattern" 
              className="w-32 h-32 drop-shadow-[0_0_15px_rgba(255,191,0,0.4)] group-hover:scale-110 group-hover:drop-shadow-[0_0_25px_rgba(255,191,0,0.6)] transition-all duration-1000"
            />
          </div>
        </div>
        
        <div className="space-y-4 flex justify-center">
          <h1 className="text-4xl font-serif font-bold tracking-[0.3em] uppercase bg-gradient-to-r from-gold-400 to-white bg-clip-text text-transparent w-fit">GRUSELENE</h1>
        </div>
      </section>

      {/* Biography */}
      <section className="relative p-10 border border-mystic-800 bg-mystic-900/20 drop-cap">
        <div className="absolute top-0 left-0 w-full h-full bg-parchment opacity-[0.03] pointer-events-none"></div>
        <Scroll className="absolute -top-4 -left-4 text-gold-600/40 bg-mystic-950 p-1" size={32} />
        <div className="prose prose-invert max-w-none text-mystic-300 font-serif italic leading-relaxed space-y-6 text-lg">
          <p>
            欢迎来到我的作品角落。此处将展示我在化学研究、文学创作等方面的成果。化学方面，我对电池材料、新型器件、计算化学感兴趣；文学方面，我对恐怖文学、传统文学、诗歌感兴趣。另外，我计划在闲暇时间开发小型的我的世界模组（咕咕咕）。
          </p>
          <p>
            目前，我对各个领域了解尚浅，希望能不断探索理性美学的边界。此处或许也会记录一些灵感，希望能与你产生共鸣。
          </p>
        </div>
      </section>

      {/* Experience Achievements */}
      <section className="space-y-10">
        <h2 className="text-2xl font-serif font-bold text-white flex items-center gap-4">
          <Award className="text-gold-500 flex-shrink-0" size={24} />
          <span className="tracking-widest uppercase">个人历程</span>
          <div className="h-px flex-grow bg-mystic-800"></div>
        </h2>
        {renderSingleColumn(getAllExperiences(), (experience) => {
          // 根据icon字段动态渲染图标
          const IconComponent = {
            'GraduationCap': GraduationCap,
            'Award': Award,
            'Calendar': Calendar,
            'Scroll': Scroll
          }[experience.icon] || GraduationCap;
          
          return (
            <div className="mystic-card p-8 group">
              <div className="flex items-center gap-4 mb-2">
                <div className="flex-shrink-0 w-10 h-10 border border-mystic-800 flex items-center justify-center text-mystic-300 group-hover:border-gold-600/50 group-hover:text-gold-500 transition-all duration-500">
                  <IconComponent size={20} />
                </div>
                <h3 className="card-title text-xl">{experience.title}</h3>
              </div>
              {experience.subtitle && (
                <p className="text-sm text-gold-600 font-serif tracking-widest uppercase ml-14 mb-2">{experience.subtitle}</p>
              )}
              <p className="text-sm text-mystic-300 font-serif italic leading-relaxed ml-14">
                {experience.description}
              </p>
            </div>
          );
        })}
      </section>

      {/* Works Collection */}
      <section className="space-y-10">
        <h2 className="text-2xl font-serif font-bold text-white flex items-center gap-4">
          <Scroll className="text-gold-500 flex-shrink-0" size={24} />
          <span className="tracking-widest uppercase">作品集</span>
          <div className="h-px flex-grow bg-mystic-800"></div>
        </h2>
        {renderTwoColumns(sortByName(getAllCollections()), (collection) => (
          <article key={collection.id} className="mystic-card group overflow-hidden">
            <Link to={collection.url} className="block relative z-10">
              <h3 className="card-title">
                {collection.title}
              </h3>
              <p className="card-excerpt">
                {collection.description}
              </p>
            </Link>
          </article>
        ))}
      </section>
    </div>
  );
};

export default About;
