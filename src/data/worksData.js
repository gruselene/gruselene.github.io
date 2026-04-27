// 集中存储所有作品数据
// 这个文件是唯一的数据源，initialize.js 和各个页面组件都从这里读取数据

export const collections = [
  {
    id: 'literature',
    title: 'My Literature',
    description: 'A collection of my literary works',
    url: '/my-literature'
  },
  {
    id: 'translations',
    title: 'My Translations',
    description: 'A collection of my translations',
    url: '/my-translations'
  },
  {
    id: 'external',
    title: 'External Works',
    description: 'A collection of external works',
    url: '/my-external-works'
  }
];

export const categories = {
  literature: [
    {
      id: 'myEnglishPoem',
      title: 'My English Poem',
      description: 'A collection of my English poems',
      url: '/my-literature/myEnglishPoem',
      works: [
        {
          id: 'Poem1',
          title: 'The Golden Hour',
          excerpt: 'Beneath the golden sky, where shadows dance,\nI find my peace in nature\'s gentle glance.\nThe world slows down, time takes its rest,\nIn this golden hour, I am truly blessed.',
          date: '2024-04-27',
          category: 'Poetry',
          url: '/my-literature/myEnglishPoem/Poem1'
        }
      ]
    },
    {
      id: 'myMetredPoem',
      title: 'My Metred Poem',
      description: 'A collection of my metred poems',
      url: '/my-literature/myMetredPoem',
      works: [
        {
          id: 'Poem1',
          title: 'The Rhythm of Life',
          excerpt: 'Life has a rhythm, a beat of its own,\nA melody that carries us through the unknown.\nWith each step we take, with each breath we breathe,\nWe dance to the tune that we ourselves weave.',
          date: '2024-04-27',
          category: 'Poetry',
          url: '/my-literature/myMetredPoem/Poem1'
        }
      ]
    },
    {
      id: 'myNovel',
      title: 'My Novel',
      description: 'A collection of my novels',
      url: '/my-literature/myNovel',
      works: [
        {
          id: 'Work1',
          title: 'The Journey',
          excerpt: 'A tale of adventure and discovery, following the protagonist on a journey through unknown lands.',
          date: '2024-04-27',
          category: 'Novel',
          url: '/my-literature/myNovel/Work1'
        }
      ]
    },
    {
      id: 'myNewPoem',
      title: 'My New Poem',
      description: 'A collection of my new poems',
      url: '/my-literature/myNewPoem',
      works: [
        {
          id: 'Poem1',
          title: 'The Ocean\'s Whisper',
          excerpt: 'The ocean whispers secrets to those who listen,\nIts waves carry tales of distant lands and forgotten histories.',
          date: '2024-04-27',
          category: 'Poetry',
          url: '/my-literature/myNewPoem/Poem1'
        }
      ]
    }
  ],
  translations: [
    {
      id: 'myEnglishToChineseTranslation',
      title: 'My English to Chinese',
      description: 'A collection of my English to Chinese translations',
      url: '/my-translations/myEnglishToChineseTranslation',
      works: [
        {
          id: 'Work1',
          title: 'The Road Not Taken',
          excerpt: 'Two roads diverged in a yellow wood,\nAnd sorry I could not travel both\nAnd be one traveler, long I stood\nAnd looked down one as far as I could\nTo where it bent in the undergrowth.',
          date: '2024-04-27',
          category: 'Translation',
          url: '/my-translations/myEnglishToChineseTranslation/Work1'
        }
      ]
    },
    {
      id: 'myChineseToEnglishTranslation',
      title: 'My Chinese to English',
      description: 'A collection of my Chinese to English translations',
      url: '/my-translations/myChineseToEnglishTranslation',
      works: [
        {
          id: 'Work1',
          title: '静夜思',
          excerpt: '床前明月光，疑是地上霜。举头望明月，低头思故乡。',
          date: '2024-04-27',
          category: 'Translation',
          url: '/my-translations/myChineseToEnglishTranslation/Work1'
        }
      ]
    },
    {
      id: 'myGermanToChineseTranslation',
      title: 'My German to Chinese',
      description: 'A collection of my German to Chinese translations',
      url: '/my-translations/myGermanToChineseTranslation',
      works: [
        {
          id: 'Work1',
          title: 'Die Lorelei',
          excerpt: 'Ich weiß nicht was soll es bedeuten,\nDaß ich so traurig bin;\nEin Märchen aus alten Zeiten,\nDas kommt mir nicht aus dem Sinn.',
          date: '2024-04-27',
          category: 'Translation',
          url: '/my-translations/myGermanToChineseTranslation/Work1'
        }
      ]
    }
  ],
  external: [
    {
      id: 'mySCP',
      title: 'SCP原创和翻译',
      description: 'AStarTwoEyes的SCP原创和翻译合集',
      url: '/my-external-works/mySCP',
      works: [
        {
          id: 'scp-cn-1309',
          title: 'SCP-CN-1309：红色瓢虫拉杆箱',
          excerpt: '所有因为工作而劳累的人，都应该进SCP-CN-1309里面来坐坐！除了骗别人钱的坏人！',
          date: '2024-01-12',
          category: 'SCP中文原创',
          url: 'https://scp-wiki-cn.wikidot.com/scp-cn-1309'
        },
        {
          id: 'scp-cn-2137',
          title: 'SCP-CN-2137：臭屁的幻梦',
          excerpt: '或许他们终将变成臭屁的幻梦！',
          date: '2024-02-15',
          category: 'SCP中文原创',
          url: 'https://scp-wiki-cn.wikidot.com/scp-cn-2137'
        },
        {
          id: 'scp-4237',
          title: 'SCP-4237：何处冬眠',
          excerpt: '寒夜寒兮风萧萧，流水沉吟梦语长。',
          date: '2023-12-05',
          category: 'ENG-CHI translation',
          url: 'https://scp-wiki-cn.wikidot.com/scp-4237'
        },
        {
          id: 'scp-6319',
          title: 'SCP-6319：唱乎月光',
          excerpt: '唱乎皓芒，与君共；唱乎白璋，与君同。',
          date: '2023-11-20',
          category: 'ENG-CHI translation',
          url: 'https://scp-wiki-cn.wikidot.com/scp-6319'
        },
        {
          id: 'scp-7599',
          title: 'SCP-7599（旧）：巴达利斯克之诗',
          excerpt: '智者善销迹，行藏有是非。缄言易免谴，沉默明哲为。然亦请宽恕，难将忠信违。把君心意宣："分裂者万岁。"',
          date: '2023-10-15',
          category: 'ENG-CHI translation',
          url: 'https://scp-wiki-cn.wikidot.com/old:scp-7599'
        }
      ]
    },
    {
      id: 'myWanderersLibrary',
      title: '被放逐者图书馆原创和翻译',
      description: 'AStarTwoEyes在被放逐者图书馆的原创和翻译合集',
      url: '/my-external-works/myWanderersLibrary',
      works: [
        {
          id: 'ngfz-god',
          title: 'the Sculpture from Earth,the King from Faith',
          excerpt: 'Blind of god, scenes, far as a hundred meters come out of his sight; deaf of god, prayers, distant as ten feets can\'t reach his ears.',
          date: '2023-09-10',
          category: 'CHI-ENG translation',
          url: 'https://wanderers-library.wikidot.com/ngfz-god'
        }
      ]
    }
  ]
};
