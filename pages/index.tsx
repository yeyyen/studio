import React from 'react';
import Head from 'next/head';
import { useAccount, useDisconnect, useNetwork, useBalance } from 'wagmi';
import { useWeb3Modal } from '@web3modal/wagmi/react';

export default function Home() {
  const { address, isConnected } = useAccount();
  const { disconnect } = useDisconnect();
  const { chain } = useNetwork();
  const { open } = useWeb3Modal();
  const { data: balance } = useBalance({
    address,
  });

  // Debug logging
  React.useEffect(() => {
    console.log('🔗 Connection Status:', { isConnected, address, chain });
    if (isConnected) {
      console.log('✅ Wallet Connected Successfully!');
      console.log('📍 Address:', address);
      console.log('🌐 Network:', chain?.name, '(Chain ID:', chain?.id, ')');
      console.log('💰 Balance:', balance?.formatted, balance?.symbol);
    } else {
      console.log('❌ Wallet Not Connected');
    }
  }, [isConnected, address, chain, balance]);

  return (
    <>
      <Head>
        <title>Viction DApp Workshop</title>
        <meta name="description" content="Connect your wallet to start using the Viction DApp Workshop" />
      </Head>
      
      <div style={{ padding: '2rem', textAlign: 'center', minHeight: '100vh' }}>
        <h1>Viction DApp Workshop</h1>
        <p>Welcome to the Viction blockchain development workshop!</p>
        
        {/* Connection Status Indicator */}
        <div style={{ 
          margin: '1rem auto', 
          padding: '0.5rem 1rem', 
          borderRadius: '4px',
          backgroundColor: isConnected ? '#d4edda' : '#f8d7da',
          color: isConnected ? '#155724' : '#721c24',
          maxWidth: '300px'
        }}>
          <strong>Status:</strong> {isConnected ? '🟢 Connected' : '🔴 Disconnected'}
        </div>
        
        <div style={{ marginTop: '2rem' }}>
          {!isConnected ? (
            <div>
              <p>Please connect your wallet to continue:</p>
              <button 
                onClick={() => {
                  console.log('🔌 Attempting to connect wallet...');
                  open();
                }}
                style={{
                  padding: '0.75rem 1.5rem',
                  backgroundColor: '#3b82f6',
                  color: 'white',
                  border: 'none',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  fontSize: '1rem',
                  fontWeight: '500'
                }}
              >
                Connect Wallet
              </button>
            </div>
          ) : (
            <div>
              <div style={{ 
                backgroundColor: '#f0f0f0', 
                padding: '1rem', 
                borderRadius: '8px', 
                marginBottom: '1rem',
                textAlign: 'left',
                maxWidth: '500px',
                margin: '0 auto 1rem auto'
              }}>
                <h3>Wallet Information:</h3>
                <p><strong>Address:</strong> <code>{address}</code></p>
                <p><strong>Network:</strong> {chain?.name || 'Unknown'}</p>
                <p><strong>Chain ID:</strong> {chain?.id || 'Unknown'}</p>
                {balance && (
                  <p><strong>Balance:</strong> {parseFloat(balance.formatted).toFixed(4)} {balance.symbol}</p>
                )}
              </div>
              
              <button 
                onClick={() => {
                  console.log('🔌 Disconnecting wallet...');
                  disconnect();
                }}
                style={{
                  padding: '0.5rem 1rem',
                  backgroundColor: '#ff4444',
                  color: 'white',
                  border: 'none',
                  borderRadius: '4px',
                  cursor: 'pointer',
                  marginTop: '1rem'
                }}
              >
                Disconnect Wallet
              </button>
            </div>
          )}
        </div>
        
        {isConnected && chain && chain.id !== 88 && chain.id !== 89 && (
          <div style={{ 
            marginTop: '2rem', 
            padding: '1rem', 
            backgroundColor: '#fff3cd', 
            border: '1px solid #ffeaa7',
            borderRadius: '4px',
            color: '#856404'
          }}>
            <p><strong>⚠️ Network Warning:</strong></p>
            <p>You're connected to {chain.name}. For the best experience, switch to Viction Mainnet (Chain ID: 88) or Viction Testnet (Chain ID: 89).</p>
          </div>
        )}

        {/* Debug Info (only in development) */}
        {process.env.NODE_ENV === 'development' && (
          <div style={{ 
            marginTop: '2rem', 
            padding: '1rem', 
            backgroundColor: '#e9ecef', 
            borderRadius: '4px',
            fontSize: '12px',
            textAlign: 'left',
            maxWidth: '600px',
            margin: '0 auto'
          }}>
            <h4>🔧 Debug Info (Development Only):</h4>
            <p><strong>Connection Status:</strong> {isConnected ? 'true' : 'false'}</p>
            <p><strong>Address:</strong> {address || 'null'}</p>
            <p><strong>Chain ID:</strong> {chain?.id || 'null'}</p>
            <p><strong>Chain Name:</strong> {chain?.name || 'null'}</p>
            <p><strong>Balance:</strong> {balance ? `${balance.formatted} ${balance.symbol}` : 'null'}</p>
            <p><strong>Check browser console (F12) for detailed logs</strong></p>
          </div>
        )}
      </div>
    </>
  );
} 