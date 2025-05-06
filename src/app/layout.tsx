import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: {
    default: 'Bet Collective',
    template: '%s | Bet Collective',
  },
  description:
    'Trusted By 500+ Aussies. Safe. Secure. Hassle-Free Sports Betting Community.',
  keywords: [
    'sports betting',
    'betting community',
    'Aussie betting',
    'betting tips',
    'safe betting',
    'betting collective',
    'online betting',
    'best betting sites',
    'sports betting odds',
    'live betting',
    'betting strategies',
    'betting predictions',
    'betting bonuses',
    'betting promotions',
    'betting exchanges',
    'betting analytics',
    'football betting tips',
    'horse racing betting',
    'NBA betting picks',
    'cricket betting strategies',
    'tennis betting odds',
    'AFL betting tips',
    'NRL betting guide',
    'MLB betting predictions',
    'UFC betting picks',
    'golf betting tips',
    'betting forum',
    'betting Discord groups',
    'betting Telegram channels',
    'betting subreddit',
    'betting experts',
    'betting influencers',
    'betting Twitter tips',
    'betting Facebook groups',
    'betting Instagram tips',
    'betting YouTube channels',
    'Aussie betting sites',
    'Australian bookmakers',
    'best betting apps Australia',
    'TAB betting tips',
    'Sportsbet Australia',
    'Bet365 Australia',
    'Ladbrokes Australia',
    'Neds betting',
    'BlueBet tips',
    'PointsBet Australia',
    'free betting tips',
    'expert betting picks',
    'daily betting predictions',
    'winning betting strategies',
    'value betting tips',
    'sure betting tips',
    'handicap betting guide',
    'over/under betting tips',
    'prop betting strategies',
    'parlay betting tips',
    'responsible gambling',
    'safe betting sites',
    'betting limits',
    'betting addiction help',
    'best odds guaranteed',
    'low-risk betting strategies',
    'bankroll management betting',
    'verified betting sites',
    'licensed bookmakers',
    'scam betting sites to avoid',
    'betting odds calculator',
    'betting tracker app',
    'betting software tools',
    'AI betting predictions',
    'betting statistics sites',
    'betting algorithms',
    'betting tipster reviews',
    'betting profitability tools',
    'betting arbitrage opportunities',
    'betting edge strategies',
    'best betting sign-up offers',
    'free bet promotions',
    'no deposit betting bonuses',
    'matched betting Australia',
    'betting cashback offers',
    'betting reload bonuses',
    'betting referral bonuses',
    'betting multi promotions',
    'betting loyalty programs',
    'betting VIP rewards',
    'live sports betting',
    'in-play betting strategies',
    'best live betting sites',
    'cash-out betting',
    'live betting odds',
    'live betting tips',
    'live betting markets',
    'live betting trends',
    'live betting volatility',
    'live betting edge',
    'sharp betting picks',
    'square betting meaning',
    'chalk betting term',
    'steam betting moves',
    'betting whales',
    'betting syndicates',
    'betting bankroll growth',
    'betting variance',
    'betting ROI strategies',
    'betting bankroll builder',
  ],
  metadataBase: new URL('https://thebetcollective.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Bet Collective | Get Paid $200 Today',
    description: 'Join our trusted betting community of 500+ Aussies',
    url: 'https://thebetcollective.com',
    siteName: 'Bet Collective',
    images: [
      {
        url: '/opengraph-image.png',
        width: 1200,
        height: 630,
        alt: 'Bet Collective',
      },
    ],
    locale: 'en_AU',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bet Collective | Get Paid $200 Today',
    description: 'Join our trusted betting community of 500+ Aussies',
    images: ['/opengraph-image.png'],
    creator: '@betcollective',
  },

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-AU">
      <head>
        <meta
          property="og:url"
          content="https://thebetcollective.com"
          key="ogurl"
        />
        <meta
          property="og:image"
          content="/opengraph-image.png"
          key="ogimage"
        />
        <meta
          property="og:site_name"
          content="Bet Collective"
          key="ogsitename"
        />
        <meta
          property="og:title"
          content="Bet Collective | Get Paid $200 Today"
          key="ogtitle"
        />
        <meta
          property="og:description"
          content="Join our trusted betting community of 500+ Aussies"
          key="ogdesc"
        />
        <meta name="author" content="Bet Collective"></meta>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
