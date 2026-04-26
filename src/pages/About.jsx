import React from 'react';
import { Award, GraduationCap, Scroll } from 'lucide-react';
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

      {/* Experience / Achievements */}
      <section className="space-y-10">
        <h2 className="text-2xl font-serif font-bold text-white flex items-center gap-4">
          <Award className="text-gold-500" />
          <span className="tracking-widest uppercase">个人历程</span>
          <div className="h-px flex-grow bg-mystic-800"></div>
        </h2>
        <div className="space-y-6">
          <div className="mystic-card p-8 flex gap-6 items-start group">
            <div className="flex-shrink-0 w-12 h-12 border border-mystic-800 flex items-center justify-center text-mystic-500 group-hover:border-gold-600/50 group-hover:text-gold-500 transition-all duration-500">
              <GraduationCap size={24} />
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-serif font-bold text-white group-hover:text-gold-400 transition-colors">本科@香港中文大学（深圳）</h3>
              <p className="text-sm text-gold-600 font-serif tracking-widest uppercase">2023-2027：在读</p>
              <p className="text-sm text-mystic-300 font-serif italic leading-relaxed">
                初始的阶段，一切都显得那么地自然。
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
