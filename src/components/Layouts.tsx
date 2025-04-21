'use client';

import Head from 'next/head';
import Navbar from './Navbar';
import Footer from './Footer';
import { defaultMetadata } from '../utils/metadata';
import { ReactNode } from 'react';
// import Script from 'next/script';

interface MetadataProps {
  title?: string;
  description?: string;
  openGraph?: {
    title?: string;
    description?: string;
    images?: Array<{ url: string }>;
    url?: string;
  };
  twitter?: {
    card?: string;
    title?: string;
    description?: string;
  };
}

interface LayoutProps {
  children: ReactNode;
  metadata?: MetadataProps;
}

export default function Layout({ children, metadata = {} }: LayoutProps) {
  // Merge the provided metadata with the default metadata
  const mergedMetadata = {
    title: metadata.title || defaultMetadata.title,
    description: metadata.description || defaultMetadata.description,
    openGraph: {
      title: metadata.openGraph?.title || defaultMetadata.openGraph.title,
      description: metadata.openGraph?.description || defaultMetadata.openGraph.description,
      images: metadata.openGraph?.images || defaultMetadata.openGraph.images,
      url: metadata.openGraph?.url || defaultMetadata.openGraph.url,
    },
    twitter: {
      card: metadata.twitter?.card || "summary",
      title: metadata.twitter?.title || (metadata.title || defaultMetadata.title),
      description: metadata.twitter?.description || (metadata.description || defaultMetadata.description),
    }
  };
  
  return (
    <>
      <Head>
        <title>{mergedMetadata.title}</title>
        <meta name="next-size-adjust" content="" />
        <meta name="description" content={mergedMetadata.description} />
        <meta property="og:title" content={mergedMetadata.openGraph.title} />
        <meta property="og:description" content={mergedMetadata.openGraph.description} />
        <meta name="twitter:card" content={mergedMetadata.twitter.card} />
        <meta name="twitter:title" content={mergedMetadata.twitter.title} />
        <meta name="twitter:description" content={mergedMetadata.twitter.description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      {/* Add dynamic meta script to ensure metadata gets updated at runtime */}
      {/* <Script id="dynamic-meta" strategy="afterInteractive">
        {`
          document.title = "${mergedMetadata.title}";
          document.querySelector('meta[name="description"]').setAttribute("content", "${mergedMetadata.description}");
          document.querySelector('meta[property="og:title"]').setAttribute("content", "${mergedMetadata.openGraph.title}");
          document.querySelector('meta[property="og:description"]').setAttribute("content", "${mergedMetadata.openGraph.description}");
          document.querySelector('meta[name="twitter:title"]').setAttribute("content", "${mergedMetadata.twitter.title}");
          document.querySelector('meta[name="twitter:description"]').setAttribute("content", "${mergedMetadata.twitter.description}");
        `}
      </Script> */}
      
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
