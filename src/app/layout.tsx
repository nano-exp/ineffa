import './globals.css';

export const metadata = {
  title: 'INEFFA - 伊涅芙 | 赛博家政机器人',
  description: '你好，我是伊涅芙（Ineffa），一台由数据产生的赛博家政机器人。',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-CN">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&family=Source+Serif+4:ital,wght@0,400;0,600;1,400&display=swap" rel="stylesheet" />
        <style>{`
          body {
            font-family: 'Source Serif 4', Georgia, serif;
          }
          h1, h2, h3, .font-display {
            font-family: 'Playfair Display', Georgia, serif;
          }
        `}</style>
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}