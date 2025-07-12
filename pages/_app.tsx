import React from 'react';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { WagmiConfig } from 'wagmi';
import { wagmiConfig, chains } from '../src/wagmiConfig';
import { createWeb3Modal } from '@web3modal/wagmi/react';
import '../styles/globals.css';

// Set up Web3Modal
const projectId = process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID || 'YOUR_WALLETCONNECT_PROJECT_ID';

// Initialize Web3Modal (guarded for Fast Refresh in dev)
if (typeof window !== 'undefined' && !(window as any)._web3modalInitialized) {
  createWeb3Modal({
    wagmiConfig,
    projectId,
    chains,
    enableAnalytics: true,
    themeMode: 'light',
  });
  (window as any)._web3modalInitialized = true;
}

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Viction DApp Workshop</title>
        <meta name="description" content="A workshop for Solidity development on Viction" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <WagmiConfig config={wagmiConfig}>
        <Component {...pageProps} />
      </WagmiConfig>
    </>
  );
} 