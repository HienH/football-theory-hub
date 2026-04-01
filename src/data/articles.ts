export interface Article {
  slug: string;
  title: string;
  date: string;
  tags: string[];
  excerpt: string;
  readingTime: string;
  featured: boolean;
  author: string;
  content: ArticleContent[];
}

export type ArticleContent =
  | { type: "paragraph"; text: string }
  | { type: "heading"; level: 2 | 3; text: string; id: string }
  | { type: "quote"; text: string }
  | { type: "list"; items: string[] }
  | { type: "image"; src: string; caption: string }
  | { type: "callout"; variant: "key-idea" | "coaching-point" | "common-mistake"; title: string; text: string };

export const ALL_TAGS = [
  "Transfers",
  "Midfield",
  "Analysis",
  "Premier League",
  "Liverpool",
  "Xabi Alonso",
  "Arne Slot",
];

export const articles: Article[] = [
  {
    slug: "xabi-alonso-liverpool-inevitable",
    title: "Why Xabi Alonso to Liverpool Feels Inevitable",
    date: "2026-01-14",
    tags: ["Liverpool", "Xabi Alonso", "Arne Slot"],
    excerpt: "With Arne Slot under increasing scrutiny and Alonso now available, the stars are aligning for a reunion that feels less like speculation and more like something pulling into place.",
    readingTime: "5 min",
    featured: true,
    author: "Football Theorist",
    content: [
      { type: "heading", level: 2, text: "The Alonso\u2013Liverpool Connection", id: "alonso-liverpool-connection" },
      { type: "image", src: "/images/liverpoolmanager.webp", caption: "Xabi Alonso" },
      { type: "paragraph", text: "Managers returning to the clubs that shaped them is a familiar idea in football. Sometimes it works, sometimes it doesn\u2019t, but when it does, it creates a rare sense of alignment between club, coach and the fans. For Liverpool, that possibility has long been pointed towards Xabi Alonso. His connection to Liverpool runs deeper than a successful playing spell. It is anchored in the Miracle in Istanbul. Liverpool fans do not simply respect Alonso, they see him as one of their own." },
      { type: "paragraph", text: "When his record-breaking rise at Bayer 04 Leverkusen coincided with the final phase of J\u00fcrgen Klopp\u2019s tenure, a natural succession route appeared to be forming. Unfortunately for the Kop, the pull of Real Madrid ultimately proved irresistible for Alonso." },

      { type: "heading", level: 2, text: "Slot\u2019s First Season", id: "slots-first-season" },
      { type: "paragraph", text: "Liverpool instead turned to Arne Slot, a decision that initially looked justified. A league title in his first season remains a significant achievement. It came within a clear framework. The squad was largely unchanged, there were no major additions, and many of Klopp\u2019s defining principles, intensity, verticality and collective pressing, remained intact. Slot\u2019s influence was seen more in refinement than reinvention, adjusting details rather than reshaping the whole structure." },

      { type: "heading", level: 2, text: "A Season of Transition", id: "season-of-transition" },
      { type: "paragraph", text: "On the contrary, this season has presented a different kind of challenge. Liverpool appear to have entered a genuine transition period, with significant turnover across the squad. Established figures such as Darwin N\u00fa\u00f1ez, Luis D\u00edaz and Trent Alexander-Arnold have departed, while the tragic and untimely passing of Diogo Jota has left an emotional void within the squad." },
      { type: "paragraph", text: "At the same time, the arrivals of Jeremie Frimpong, Milo\u0161 Kerkez, Florian Wirtz, Hugo Ekitike and Alexander Isak point towards a clear shift in direction. Around \u00a3200 million of that outlay has been committed to Ekitike and Isak alone, two forwards who naturally occupy similar central spaces and both expect to start. Rather than strengthening the attack across multiple profiles, that level of investment in one position risks creating a selection dilemma, forcing Arne Slot into difficult decisions by leaving significant investment on the bench." },
      { type: "paragraph", text: "The result is a side that feels fundamentally different. J\u00fcrgen\u2019s imprint has begun to fade, along with the sense of continuity that carried last season\u2019s success. The attacking structure looks less settled, the hierarchy less defined, and the cohesion that once felt instinctive now appears in flux. With a reshaped squad and altered dynamics, Slot is now being judged on a team that is unmistakably his own." },

      { type: "heading", level: 2, text: "Alonso\u2019s Managerial Rise", id: "alonsos-managerial-rise" },
      { type: "paragraph", text: "Meanwhile Alonso\u2019s managerial trajectory has only strengthened his appeal. His unbeaten domestic season with Bayer 04 Leverkusen in his first full campaign placed him firmly on the European map, and a strong follow-up season removed any sense of it being a one-off. Alonso had established himself as one of the most promising coaches in the game and a genuine top-level prospect." },
      { type: "paragraph", text: "His time at Real Madrid C.F. ended in dismissal, but the context is important. The Real Madrid role is unique, with the balance of power often tilted towards the dressing room as much as the touchline. Alonso was brought in to impose greater tactical discipline within a squad of established stars accustomed to autonomy, a shift successfully executed by Paris Saint-Germain under Luis Enrique. However, this approach proved difficult to enforce at Madrid, where player power ultimately shaped the outcome and led to his departure." },

      { type: "heading", level: 2, text: "The Shifting Narrative", id: "shifting-narrative" },
      { type: "paragraph", text: "Meanwhile, Slot\u2019s position has become less secure. After delivering a title, this season has been inconsistent, with Liverpool now fighting to secure a Champions League place rather than setting the pace. Performances have fluctuated, and the emotional connection with the supporters remains limited. Unlike Klopp, whose presence carried beyond results, Slot has yet to fully resonate with the fanbase." },
      { type: "paragraph", text: "That combination has shifted the conversation. What once felt like patience now carries an undercurrent of doubt, and running parallel to that doubt is the continued presence of Alonso. It is that overlap which gives the situation its weight. A manager under increasing scrutiny, and another, with both pedigree and connection, waiting in the background. Not every story in football resolves itself neatly, but this one has begun to feel less like speculation and more like something pulling into place. Liverpool may not have made their move yet, but with Alonso free and the supporters calling for him, the sense of inevitability is hard to shake." },
    ],
  },
  {
    slug: "man-united-midfielder-targets",
    title: "Man United Midfielder Targets",
    date: "2026-02-28",
    tags: ["Transfers", "Midfield", "Analysis"],
    excerpt: "With Casemiro departing and Ugarte struggling, Manchester United's midfield needs an overhaul. We profile four targets who could transform the engine room alongside Kobbie Mainoo and Bruno Fernandes.",
    readingTime: "10 min",
    featured: false,
    author: "Football Theorist",
    content: [
      { type: "heading", level: 2, text: "Intro", id: "intro" },
      { type: "paragraph", text: "With two thirds of the Premier League season complete and the summer window approaching, recruitment planning is already underway. For Manchester United, that focus centres on midfield." },
      { type: "paragraph", text: "Casemiro is set to depart on a free, Manuel Ugarte has struggled to justify his £42 million fee, and Mason Mount has missed over 50 games since arriving in 2023. An overhaul is no longer optional, it is necessary." },
      { type: "paragraph", text: "Under Omar Berrada\u2019s emerging policy of moving on underperforming players quickly, midfield departures feel inevitable. United explored the possibility of signing Carlos Baleba last summer, but Brighton\u2019s valuation made a deal unrealistic after heavy spending in attack." },
      { type: "paragraph", text: "Now, with United pushing for a Champions League place under Michael Carrick and showing signs of stability, the right midfield additions could transform them from competitive to convincing." },

      { type: "heading", level: 2, text: "Tactical Set Up", id: "tactical-set-up" },
      { type: "paragraph", text: "At present, United have looked most effective in either a 4-2-3-1 or 4-3-3. Bruno Fernandes operates in advanced areas, while Kobbie Mainoo plays deeper, progressing possession with composure and intelligence." },
      { type: "paragraph", text: "What the midfield lacks is a physically robust, athletic presence who can break up play, control transitions and dictate tempo from deep. A player comfortable operating as either a 6 or an 8 would add balance to both systems." },
      { type: "paragraph", text: "On paper, this would create a complete unit. The new signing initiates build-up from deeper zones, Bruno influences the final third, and Mainoo connects both phases. The result is a midfield capable of defending transitions, controlling rhythm and sustaining attacking pressure without sacrificing structure." },

      { type: "heading", level: 2, text: "Transfer Targets", id: "transfer-targets" },

      { type: "heading", level: 3, text: "Adam Wharton \u2014 Elite Passer", id: "adam-wharton" },
      { type: "image", src: "/images/adam-wharton.jpg", caption: "Adam Wharton" },
      { type: "paragraph", text: "Wharton stands out as a tempo-controlling midfielder with exceptional passing intelligence for his age. His defining strength is his ability to dictate the rhythm of a game, combining composure on the ball with an advanced understanding of space, timing and passing angles." },
      { type: "paragraph", text: "Technically, he possesses a wide passing repertoire. He can play crisp first-time passes to accelerate transitions, or take additional touches to manipulate angles and open passing lanes. His distribution is consistently purposeful, with each pass carrying clear intent. He varies weight, spin and trajectory with precision, often shaping the ball so that it travels naturally into the receiver\u2019s path, encouraging fluid attacking moves." },
      { type: "paragraph", text: "One of the most impressive aspects of Wharton\u2019s game is his decision-making speed. He frequently appears to know his next action before receiving the ball, allowing him to operate with minimal touches and maintain the flow of possession." },
      { type: "paragraph", text: "Out of possession, Wharton is not an elite defensive presence, but he is positionally disciplined and his physical presence contributes enough to function effectively ahead of a back four, whether in a single or double pivot." },
      { type: "paragraph", text: "In terms of technical ceiling and long-term vision, a midfield built around Wharton and Mainoo has the potential to form the foundation of Manchester United\u2019s next era, offering control, intelligence and progression at the heart of the team for years to come." },

      { type: "heading", level: 3, text: "Elliott Anderson \u2014 Dynamic Progressor", id: "elliott-anderson" },
      { type: "image", src: "/images/elliott-anderson.jpg", caption: "Elliott Anderson" },
      { type: "paragraph", text: "Elliott Anderson profiles as a dynamic, multi-functional midfielder whose game is built on intensity, ball carrying and progressive passing. He advances play effectively from deeper areas through forward passing and his ability to drive the ball forward using his close control, often drawing fouls or committing defenders with take-ons, making him a perfect fit for Nottingham Forest\u2019s counter-attacking style." },
      { type: "paragraph", text: "Off the ball, he plays with urgency and intent, showing a strong instinct to sniff out danger and an ability to anticipate transitions before they develop. Rather than excelling in one hyper-specialised trait, the strength of Anderson lies in his versatility, with the ability to operate across multiple midfield roles while maintaining a consistent level of performance." },
      { type: "paragraph", text: "He would complement Kobbie and Bruno, as he would be the engine room of the midfield. His ability to sniff out danger and kick-start counter-attacks would give Manchester United\u2019s midfield a new counter-attacking dimension." },

      { type: "heading", level: 3, text: "Carlos Baleba \u2014 Destroyer", id: "carlos-baleba" },
      { type: "image", src: "/images/carlos-baleba.jpg", caption: "Carlos Baleba" },
      { type: "paragraph", text: "Carlos Baleba profiles as the most physically dominant and mobile option, combining elite athleticism with the ability to cover large areas of the pitch at speed. His defensive impact is a standout trait, using strength, timing and mobility to break up play consistently and regain possession in central areas. In transition, he is comfortable carrying the ball out of pressure, with the close control and fluid movement to escape tight situations and drive the team forward. There are flashes in his profile that hint at a more expansive technical ceiling, with occasional carries and physical bursts that echo elements of Paul Pogba\u2019s style, though that level of influence is still some distance away." },
      { type: "paragraph", text: "In possession, his passing is functional and progressive enough to support build-up phases, but it is not yet refined to the level where he can consistently dictate play or deliver repeated line-breaking passes. As a result, his current value lies primarily in ball-winning, athletic coverage and transition phases, where his physical tools and intensity make him a high-impact presence in midfield." },
      { type: "paragraph", text: "Baleba would be perfect alongside Kobbie, as his defensive tendencies would free him up to be effective further up the pitch, providing security and stability with his ability to break up play." },

      { type: "heading", level: 3, text: "Sandro Tonali \u2014 All-Round Maestro", id: "sandro-tonali" },
      { type: "image", src: "/images/sandro-tonali.jpg", caption: "Sandro Tonali" },
      { type: "paragraph", text: "Sandro Tonali profiles as the most complete and developed midfielder of the group, combining defensive intensity, technical quality and tactical intelligence into a well-rounded, high-level profile. In possession, Tonali offers a strong passing range and clean technique, capable of progressing play through both short combinations and longer distribution from deeper areas. He is comfortable dictating tempo when required, but also has the dynamism to carry the ball through midfield with powerful forward runs. He can also add goals to his game, whether through composed finishes in the area or strikes from distance, giving him an added layer of end product." },
      { type: "paragraph", text: "Out of possession, Tonali brings aggression and awareness, with the ability to break up play, cover ground and compete physically in central areas. His experience operating both as a 6 and as a more advanced 8 gives him strong tactical flexibility, and his role in AC Milan\u2019s title-winning side highlighted his capacity to function as the heartbeat of a high-performing midfield. Added value also comes through his set-piece delivery, which provides an additional creative outlet." },
      { type: "paragraph", text: "Within a Manchester United midfield, Tonali would offer immediate balance and leadership. Alongside Kobbie Mainoo and Bruno Fernandes, his all-round profile would allow United to combine defensive security, progression and intensity in one player, reducing the need for highly specialised roles and giving the midfield a more complete and cohesive identity." },

      { type: "heading", level: 2, text: "Verdict", id: "verdict" },
      { type: "image", src: "/images/midfielder-comparison.jpg", caption: "Midfielder comparison" },
      { type: "paragraph", text: "After examining each profile, it becomes clear that every player offers a different solution to Manchester United\u2019s midfield issues. Baleba provides defensive security and athletic coverage. Anderson injects dynamism and vertical drive. Tonali delivers immediate balance and experience." },
      { type: "paragraph", text: "However, if United are serious about building a long-term vision rather than applying short-term fixes, Adam Wharton stands out as the strategic choice. His ability to dictate tempo and control games from deep aligns directly with the structural needs of this midfield. Stylistically, this would also be my preference, as I have always admired a technically gifted, elegant midfielder who is easy on the eye, namely players such as Pirlo, Pogba and Zidane." },
      { type: "paragraph", text: "Alongside Kobbie Mainoo, he would not simply improve the team, he would help shape its identity. A partnership built on control, intelligence and composure could become the foundation of United\u2019s next era." },
      { type: "paragraph", text: "With a young core already emerging in players such as Yoro, Lammens, \u0160e\u0161ko, Mainoo and Heaven, adding Wharton would strengthen the spine of a project that is beginning to take form." },
    ],
  },
];

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}

export function getFeaturedArticle(): Article | undefined {
  return articles.find((a) => a.featured);
}

export function getRelatedArticles(currentSlug: string, tags: string[], limit = 3): Article[] {
  return articles
    .filter((a) => a.slug !== currentSlug && a.tags.some((t) => tags.includes(t)))
    .slice(0, limit);
}
