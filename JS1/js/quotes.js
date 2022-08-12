const quotes = [
  {
    quotes:
      "There is nothing in the world so irresistibly contagious as laughter and good humor.",
    author: "Charles Dickens",
    korean: "이 세상에 웃음과 좋은 유머만큼 잘 전염되는 것은 없다.",
  },
  {
    quotes: "Love all, trust a few. Do wrong to none.",
    author: "William Shakespeare",
    korean: "모두 사랑하라, 몇 명만 믿어라. 누구에게도 잘못을 하지 마라.",
  },
  {
    quotes:
      "The nice thing about egotists is that they don't talk about other people.",
    author: "Lucille S. Harper",
    korean:
      "에고티스트의 좋은 점은 다른 사람에 대해 왈가불가하지 않는다는 것이다.",
  },
  {
    quotes:
      "A man's character may be learned from the adjectives which he habitually uses in conversation.",
    author: "Mark Twain",
    korean: "대화에서 습관적으로 쓰는 형용사에서 그 사람의 성격을 알 수 있다.",
  },
  {
    quotes: "He has all the virtues I dislike and none of the vices I admire.",
    author: "Winston Churchill",
    korean:
      "그 작자는 내가 싫어하는 모든 미덕을 갖췄으면서도 내가 좋아하는 악덕은 하나도 없다.",
  },
  {
    quotes: "Our remedies oft in ourselves do lie.",
    author: "Shakespeare",
    korean: "우리의 병을 고치기 위한 방법은 곧잘 우리 자신 안에 있다.",
  },
  {
    quotes: "Golf is a good walk spoiled.",
    author: "Mark Twain",
    korean: "골프는 좋은 산보--하지만 망쳐진 산보이다.",
  },
  {
    quotes: "Marriage is the only adventure open to the cowardly.",
    author: "Voltaire",
    korean: "결혼은 겁쟁이들에게 유일하게 열려진 모험이다.",
  },
  {
    quotes:
      "We do not act rightly because we have virtue or excellence, but we rather have those because we have acted rightly.",
    author: "Aristotle",
    korean:
      "우리에게 미덕이나 탁월함이 있어서 우리가 의롭게 행동하는 것이 아니라, 우리가 의롭게 행동하기 때문에 미덕과 탁월함을 가지게 된다.",
  },
  {
    quotes:
      "Be slow to fall into friendship; but when thou art in, continue firm & constant.",
    author: "Socrates",
    korean:
      "우정에 빠질 때는 천천히 하라; 하지만 그 속에 들어서는 강인하고 변치 마라.",
  },
];

const quote = document.querySelector("div#quote span:first-child");
const author = document.querySelector("div#quote span:last-child");

const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
quote.innerText = randomQuote.quotes;
author.innerText = randomQuote.author;
