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
  "Pressing",
  "Build-up",
  "Rest Defence",
  "Transitions",
  "Set Pieces",
  "Positional Play",
  "Man-marking",
  "Counter-attack",
];

export const articles: Article[] = [
  {
    slug: "gegenpress-triggers",
    title: "Understanding Gegenpressing: The Five Key Triggers",
    date: "2026-02-20",
    tags: ["Pressing", "Transitions"],
    excerpt: "A deep dive into the five situational triggers that activate a coordinated gegenpress, and how elite teams use them to regain possession within seconds of losing the ball.",
    readingTime: "8 min",
    featured: true,
    author: "Football Theorist",
    content: [
      { type: "paragraph", text: "Gegenpressing — the art of immediate counter-pressing after losing the ball — has become one of the most discussed tactical concepts in modern football. But what actually triggers a team to press in those chaotic transitional moments?" },
      { type: "heading", level: 2, text: "What Is a Gegenpress Trigger?", id: "what-is-trigger" },
      { type: "paragraph", text: "A trigger is a visual or positional cue that tells the pressing team: now is the moment to hunt the ball. Without clear triggers, pressing becomes disorganised sprinting — energy spent for nothing." },
      { type: "callout", variant: "key-idea", title: "Key Idea", text: "Pressing is not about running more. It's about running at the right moment, in the right direction, together." },
      { type: "heading", level: 2, text: "Trigger 1: Poor First Touch", id: "poor-first-touch" },
      { type: "paragraph", text: "When the opponent's receiver takes a heavy touch, the ball moves away from their body. This creates a window — usually 1–2 seconds — where the ball is vulnerable. Elite pressing teams train their players to recognise this and attack immediately." },
      { type: "heading", level: 2, text: "Trigger 2: Backward Pass", id: "backward-pass" },
      { type: "paragraph", text: "A backward pass often signals the opponent is under pressure and retreating. This is a green light for the pressing team to push higher, compressing space and cutting off passing lanes." },
      { type: "heading", level: 2, text: "Trigger 3: Ball Played into Wide Areas", id: "wide-areas" },
      { type: "paragraph", text: "The touchline acts as an extra defender. When the ball is played wide, the receiver has fewer options — they can't go sideways into the crowd. This is a natural pressing trap." },
      { type: "callout", variant: "coaching-point", title: "Coaching Point", text: "Train your winger and fullback to press the wide receiver together, with the central midfielder cutting the inside passing lane." },
      { type: "heading", level: 2, text: "Trigger 4: Slow Lateral Passes", id: "slow-lateral" },
      { type: "paragraph", text: "A slow, predictable horizontal pass gives the pressing team time to shift and close down. The ball is moving, but it's not progressing — which means the pressing team can gain ground." },
      { type: "heading", level: 2, text: "Trigger 5: Opponent Facing Own Goal", id: "facing-own-goal" },
      { type: "paragraph", text: "When a player receives the ball facing their own goal, they have limited vision forward. Pressing in this moment is highly effective because the receiver must turn — and turning under pressure often leads to turnovers." },
      { type: "callout", variant: "common-mistake", title: "Common Mistake", text: "Pressing without covering the space behind the press. If the opponent plays through the first line, you're exposed." },
      { type: "heading", level: 2, text: "How to Train These Triggers", id: "training" },
      { type: "paragraph", text: "The most effective way is through small-sided games with specific constraints. For example, a 6v6 rondo where the team out of possession scores a point for winning the ball within 5 seconds of losing it." },
      { type: "list", items: [
        "Use colour-coded cones to mark pressing zones",
        "Film sessions to review trigger recognition",
        "Practice 'shadow pressing' — pressing movements without the ball",
        "Build automatisms through repetition in realistic game scenarios"
      ]},
      { type: "quote", text: "The best pressing teams don't press harder — they press smarter. — Jürgen Klopp" },
    ],
  },
  {
    slug: "positional-play-principles",
    title: "Positional Play: The Three Principles That Underpin Pep's System",
    date: "2026-02-15",
    tags: ["Positional Play", "Build-up"],
    excerpt: "Breaking down the core principles of positional play — superiority, width, and progression — and how Guardiola's teams create structured chaos on the pitch.",
    readingTime: "10 min",
    featured: false,
    author: "Football Theorist",
    content: [
      { type: "paragraph", text: "Positional play is often misunderstood as simply 'keeping the ball.' In reality, it's a framework for creating and exploiting superiorities across the pitch — numerical, qualitative, and positional." },
      { type: "heading", level: 2, text: "The Origin of Positional Play", id: "origin" },
      { type: "paragraph", text: "The concept traces back to Johan Cruyff's Barcelona, but it was refined by Juanma Lillo and later perfected by Pep Guardiola. The idea is simple: structure your team so that wherever the ball is, you always have more options than the opponent." },
      { type: "heading", level: 2, text: "Principle 1: Numerical Superiority", id: "numerical" },
      { type: "paragraph", text: "At its most basic, this means having more players around the ball than the opponent. But it's not about crowding — it's about intelligent positioning that creates passing triangles and diamonds." },
      { type: "callout", variant: "key-idea", title: "Key Idea", text: "Superiority isn't just numerical. A 1v1 with Messi is a qualitative superiority. A player between the lines creates positional superiority." },
      { type: "heading", level: 2, text: "Principle 2: Maximum Width", id: "width" },
      { type: "paragraph", text: "Stretching the pitch horizontally forces the opponent to cover more ground. When the opposition is spread thin, gaps appear in the centre — and that's where positional play teams want to attack." },
      { type: "heading", level: 2, text: "Principle 3: Vertical Progression", id: "progression" },
      { type: "paragraph", text: "Possession must have purpose. The third principle demands that the team always looks to progress the ball forward when the opportunity arises. Lateral passing is fine as a means to create that opportunity — but never as an end." },
      { type: "callout", variant: "coaching-point", title: "Coaching Point", text: "Use the concept of 'the third man' — the player who receives the final progressive pass after two teammates draw the press." },
      { type: "quote", text: "Take the ball, pass the ball. — Johan Cruyff" },
    ],
  },
  {
    slug: "rest-defence-fundamentals",
    title: "Rest Defence: Why What Happens Off the Ball Wins Games",
    date: "2026-02-10",
    tags: ["Rest Defence", "Transitions"],
    excerpt: "Understanding the concept of rest defence — the players who don't attack but protect against counter-attacks — and why it's the most underrated tactical concept.",
    readingTime: "7 min",
    featured: false,
    author: "Football Theorist",
    content: [
      { type: "paragraph", text: "In attack, every team wants numbers forward. But the best teams always keep a safety net — players whose job is to prevent the counter. This is rest defence." },
      { type: "heading", level: 2, text: "What Is Rest Defence?", id: "what-is" },
      { type: "paragraph", text: "Rest defence refers to the players who maintain their defensive positions while the team is attacking. Typically, this includes 2–4 players: usually the centre-backs and one midfielder." },
      { type: "callout", variant: "key-idea", title: "Key Idea", text: "A team's rest defence structure determines how vulnerable they are to counter-attacks. It's a risk-reward equation." },
      { type: "heading", level: 2, text: "The 3v2 Principle", id: "3v2" },
      { type: "paragraph", text: "The general rule is that rest defence should maintain at least a 3v2 advantage against the opponent's forwards. This allows one player to press the ball, one to cover, and one to balance." },
      { type: "heading", level: 2, text: "When Rest Defence Fails", id: "failures" },
      { type: "paragraph", text: "Most goals conceded from transitions happen because the rest defence was either numerically insufficient or poorly positioned. Common errors include both centre-backs being on the same horizontal line, or the holding midfielder pushing too high." },
      { type: "callout", variant: "common-mistake", title: "Common Mistake", text: "Committing both fullbacks forward simultaneously. If you lose the ball, you have no wide cover." },
      { type: "list", items: [
        "Always maintain a 3v2 minimum in rest defence",
        "Stagger centre-backs — one higher, one deeper",
        "The holding midfielder should read the game and drop when needed",
        "Communication is essential — players must organise rest defence in real time"
      ]},
    ],
  },
  {
    slug: "corner-kick-routines",
    title: "Set Piece Mastery: Designing Corner Kick Routines That Actually Work",
    date: "2026-02-05",
    tags: ["Set Pieces"],
    excerpt: "A tactical breakdown of effective corner kick routines, from near-post flick-ons to back-post overloads, with practical coaching applications.",
    readingTime: "6 min",
    featured: false,
    author: "Football Theorist",
    content: [
      { type: "paragraph", text: "Set pieces account for roughly 30% of all goals in professional football. Yet many teams still treat corners as 'put it in the box and hope.' There's a better way." },
      { type: "heading", level: 2, text: "The Numbers Don't Lie", id: "numbers" },
      { type: "paragraph", text: "Data from the last five Premier League seasons shows that rehearsed corner routines convert at nearly double the rate of unrehearsed deliveries. Structure beats chaos." },
      { type: "heading", level: 2, text: "Near Post Flick-On", id: "near-post" },
      { type: "paragraph", text: "The near-post flick is a classic for a reason. A runner attacks the near post, getting a glancing header that redirects the ball across the face of goal. The key is timing: the runner must arrive late and at speed." },
      { type: "callout", variant: "coaching-point", title: "Coaching Point", text: "The flick-on player should aim for the area between the six-yard box and penalty spot — the 'golden zone' where goalkeepers are most vulnerable." },
      { type: "heading", level: 2, text: "Back Post Overload", id: "back-post" },
      { type: "paragraph", text: "Load three players at the back post, with staggered starting positions. The delivery is floated to the back post area. The advantage: attackers can attack the ball while defenders are turned and unsighted." },
      { type: "heading", level: 2, text: "Short Corner Variations", id: "short-corners" },
      { type: "paragraph", text: "Short corners can be devastatingly effective because they pull defenders out of their set positions. The key is to have two or three pre-planned options from the short corner — pass and cross, pass and shoot, or pass and switch." },
      { type: "callout", variant: "key-idea", title: "Key Idea", text: "The best set piece teams in the world rehearse 3–5 routines per week. Repetition builds automatism." },
    ],
  },
  {
    slug: "counter-attacking-transitions",
    title: "The Art of the Counter-Attack: Speed, Timing, and Decision-Making",
    date: "2026-01-28",
    tags: ["Counter-attack", "Transitions"],
    excerpt: "How elite teams turn defensive moments into devastating attacks in seconds, examining the principles of effective counter-attacking football.",
    readingTime: "9 min",
    featured: false,
    author: "Football Theorist",
    content: [
      { type: "paragraph", text: "Counter-attacking football is often dismissed as 'negative' or 'anti-football.' Nothing could be further from the truth. The counter-attack is one of the most technically demanding and tactically sophisticated aspects of the game." },
      { type: "heading", level: 2, text: "The Three Phases", id: "three-phases" },
      { type: "paragraph", text: "Every effective counter-attack has three phases: the win (regaining possession), the transition (moving from defence to attack), and the finish (creating and converting the chance)." },
      { type: "heading", level: 2, text: "Phase 1: The Win", id: "the-win" },
      { type: "paragraph", text: "The quality of the counter-attack starts with how you win the ball. A clean interception is ideal because the player already has forward momentum and vision. Tackles are messier — the ball often bounces loose." },
      { type: "callout", variant: "key-idea", title: "Key Idea", text: "The first pass after winning the ball is the most important pass in the counter-attack. It must be forward and it must be accurate." },
      { type: "heading", level: 2, text: "Phase 2: The Transition", id: "transition" },
      { type: "paragraph", text: "Speed is crucial but it must be controlled. The player on the ball must look up immediately and find the runner. Supporting players must sprint into wide channels and beyond the last line." },
      { type: "heading", level: 2, text: "Phase 3: The Finish", id: "finish" },
      { type: "paragraph", text: "The final phase is about decision-making under pressure. The ball carrier approaching the box must decide: shoot, pass, or carry. The best counter-attacking teams have players who make this decision early." },
      { type: "callout", variant: "coaching-point", title: "Coaching Point", text: "Practise 3v2 and 4v3 fast break drills. Emphasise early decision-making — the attacker should know what they'll do before they receive the ball." },
      { type: "list", items: [
        "Prioritise quick, vertical passing over carrying the ball",
        "Wide runners create space centrally — even if they don't receive the ball",
        "Avoid the 'extra pass' — if you have a shooting chance, take it",
        "Recovery runners must sprint back to prevent the counter-counter"
      ]},
      { type: "callout", variant: "common-mistake", title: "Common Mistake", text: "Slowing down to wait for support. The counter-attack's greatest weapon is speed — don't surrender it." },
    ],
  },
  {
    slug: "man-marking-zonal-hybrid",
    title: "Man-Marking vs Zonal: The Rise of the Hybrid Defensive System",
    date: "2026-01-20",
    tags: ["Man-marking", "Rest Defence", "Pressing"],
    excerpt: "Why the best defensive teams in the world no longer choose between man-marking and zonal — they use both. A look at hybrid systems.",
    readingTime: "7 min",
    featured: false,
    author: "Football Theorist",
    content: [
      { type: "paragraph", text: "The man-marking vs zonal debate has raged for decades. But in modern football, the answer increasingly is: both. The best teams use hybrid systems that combine man-marking triggers with zonal coverage." },
      { type: "heading", level: 2, text: "Pure Man-Marking: Strengths and Weaknesses", id: "man-marking" },
      { type: "paragraph", text: "Man-marking assigns each defender a specific opponent. The strength is clarity — everyone knows their job. The weakness is that clever movement can drag defenders out of position, creating space for others." },
      { type: "heading", level: 2, text: "Pure Zonal: Strengths and Weaknesses", id: "zonal" },
      { type: "paragraph", text: "Zonal defending assigns each defender an area of the pitch. The strength is structural integrity — the shape holds even when opponents rotate. The weakness is that attackers can overload zones." },
      { type: "callout", variant: "key-idea", title: "Key Idea", text: "Hybrid defending uses zonal shape as the default, with man-marking triggers activated in specific situations — like when an attacker enters a dangerous zone." },
      { type: "heading", level: 2, text: "How the Hybrid Works in Practice", id: "in-practice" },
      { type: "paragraph", text: "The team maintains a compact zonal block. But when an opponent receives the ball in a dangerous area, the nearest defender switches to man-marking. Surrounding players adjust zonally to cover the vacated space." },
      { type: "heading", level: 2, text: "Training the Hybrid", id: "training-hybrid" },
      { type: "paragraph", text: "The key challenge is communication. Players must constantly talk — 'I've got him,' 'cover my zone,' 'switch.' Without communication, hybrid defending collapses." },
      { type: "callout", variant: "coaching-point", title: "Coaching Point", text: "Start with pure zonal in training, then add man-marking triggers one at a time. Build complexity gradually." },
      { type: "list", items: [
        "Default to zonal shape between the lines",
        "Switch to man-marking inside the penalty area",
        "The goalkeeper must command the defensive line",
        "Review video together to build shared understanding"
      ]},
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
