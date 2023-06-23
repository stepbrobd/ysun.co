const Head = ({
  url,
  title,
  description,
}: {
  url: string;
  title: string;
  description: string;
}) => {
  const defaultTitle = "Yifei Sun";

  const defaultDescription = `
  Yifei Sun is a graduate student at Northeastern University studying computer science.

  His research interests are: 
      - Formal verification for distributed systems and database systems. 
      - Programming language and concurrent data structure related formal verification and fuzz testing. 
      - IMU data feature extraction and machine learning for robotic systems and healthcare applications.
  
  During free time, he most likely would laze around watching anime or browsing YouTube or HackerNews.
  
  He is pretty darn good at swimming, archery and ping pong.
  
  You might want to try:
      - Nix/NixOS: https://nixos.org
      - Tailscale: https://tailscale.com
      - Fly.io: https://fly.io
      - Vercel: https://vercel.com
      - Heap: https://heap.io
  
  Wanna get in touch?
      - LinkedIn: https://www.linkedin.com/in/yifei-s
      - GitHub: https://github.com/stepbrobd
      - Twitter: https://twitter.com/stepbrobd
      `;

  return (
    <>
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />

      <meta property="og:locale" content="en_US" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url || "https://ysun.co"} />
      <meta property="twitter:card" content="summary_large_image" />

      <meta property="og:title" content={title || defaultTitle} />
      <meta property="twitter:title" content={title || defaultTitle} />

      <meta
        property="description"
        content={
          description.substring(0, 197) + "..." ||
          defaultDescription.substring(0, 197) + "..."
        }
      />
      <meta
        property="og:description"
        content={
          description.substring(0, 197) + "..." ||
          defaultDescription.substring(0, 197) + "..."
        }
      />
      <meta
        property="twitter:description"
        content={
          description.substring(0, 197) + "..." ||
          defaultDescription.substring(0, 197) + "..."
        }
      />

      <meta property="og:image" content="https://ysun.co/og.png" />
      <meta property="twitter:image" content="https://ysun.co/og.png" />
    </>
  );
};

export default Head;
