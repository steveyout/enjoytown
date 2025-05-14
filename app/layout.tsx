import { siteConfig } from '@/config/site';
import type { Metadata, Viewport } from 'next';
import { Space_Grotesk as SpaceGrotesk } from 'next/font/google';
import { Footer } from '@/components/footer';
import { TailwindIndicator } from '@/components/tailwind-indicator';
import { ThemeProvider } from '@/components/theme-provider';
import NextTopLoader from 'nextjs-toploader';
import { Toaster } from '@/components/ui/sonner';
import { GoogleAnalytics } from '@next/third-parties/google';
import Script from 'next/script';
import '@/styles/globals.css';
import { SiteHeader } from '@/components/navbar/site-header';
import Donate from '@/components/donate';
const spaceGrotesk = SpaceGrotesk({ subsets: ['latin'] });

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
};

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={spaceGrotesk.className} suppressHydrationWarning>
      <head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta
          name="309e6a858263aa259aac038b5c076df36bc24258"
          content="309e6a858263aa259aac038b5c076df36bc24258"
        />
        <meta name="theme-color" content="#ffffff" />
        <Script type="text/javascript" id="ads">
          {`
     atOptions = {
		'key' : '86170904905e8f88e4232086dfbb050b',
		'format' : 'iframe',
		'height' : 60,
		'width' : 468,
		'params' : {}
	};
	`}
        </Script>
        <Script
          type="text/javascript"
          src="//direcompulsion.com/86170904905e8f88e4232086dfbb050b/invoke.js"
        />
        <Script type="text/javascript" id="ads1">
          {`
	atOptions = {
		'key' : 'b62e6028017550fbd2a568f66726246c',
		'format' : 'iframe',
		'height' : 600,
		'width' : 160,
		'params' : {}
	};
	`}
        </Script>
        <Script
          type="text/javascript"
          src="//direcompulsion.com/b62e6028017550fbd2a568f66726246c/invoke.js"
        />
        {/*
        <Script async strategy="afterInteractive" src="//acscdn.com/script/aclib.js"></Script>
        <Script data-cfasync="false" strategy="lazyOnload" id="adcash">
          {`
            aclib.runPop({
        zoneId: '9033646',
    });
             `}
        </Script>
        */}
        <Script type="text/javascript" data-cfasync="false" strategy="lazyOnload" id="adcash">
          {`
        /*
        <
        ![CDATA[/* */
        (function(){var p=window,i="a3445223f8ee6d98f7a27d43a97b4600",g=[["siteId",115-267+183+5151169],["minBid",0],["popundersPerIP","0"],["delayBetween",0],["default","PHNjcmlwdCB0eXBlPSd0ZXh0L2phdmFzY3JpcHQnIHNyYz0nLy9wbDIzNjE1Mjc0LmhpZ2hyZXZlbnVlbmV0d29yay5jb20vMDYvNDEvZGQvMDY0MWRkZWZhYWJmMzBjOWU3NmJmMWQ1Zjc4YmEzZGEuanMnPjwvc2NyaXB0Pg=="],["defaultPerDay",0],["topmostLayer","auto"]],t=["d3d3LmJsb2NrYWRzbm90LmNvbS9YSGsveWpxdWVyeS13ZXVpLm1pbi5qcw==","ZG5oZmk1bm4yZHQ2Ny5jbG91ZGZyb250Lm5ldC9NUk9jcS9JL2RjbG91ZGluYXJ5LWpxdWVyeS1maWxlLXVwbG9hZC5taW4uY3Nz"],l=-1,q,r,f=function(){clearTimeout(r);l++;if(t[l]&&!(1773155603000<(new Date).getTime()&&1<l)){q=p.document.createElement("script");q.type="text/javascript";q.async=!0;var z=p.document.getElementsByTagName("script")[0];q.src="https://"+atob(t[l]);q.crossOrigin="anonymous";q.onerror=f;q.onload=function(){clearTimeout(r);p[i.slice(0,16)+i.slice(0,16)]||f()};r=setTimeout(f,5E3);z.parentNode.insertBefore(q,z)}};if(!p[i]){try{Object.freeze(p[i]=g)}catch(e){}f()}})
      ();
        /*]]>/
        * */
         `}
        </Script>
      </head>
      <GoogleAnalytics gaId="G-2TLKHCT9DQ" />
      <body className="bg-background min-h-screen font-sans antialiased">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <NextTopLoader
            color="#2299DD"
            initialPosition={0.08}
            crawlSpeed={200}
            height={3}
            crawl={true}
            showSpinner={true}
            easing="ease"
            speed={200}
            shadow="0 0 10px #2299DD,0 0 5px #2299DD"
          />
          <SiteHeader />
          <Toaster position="top-right" closeButton />
          <div className="relative flex min-h-screen flex-col">
            <div className="flex-1">{children}</div>
          </div>
          <Donate />
          <Footer />
          <TailwindIndicator />
        </ThemeProvider>
      </body>
    </html>
  );
}
