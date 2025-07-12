
'use client';

import { useRouter } from 'next/navigation';
import { useAccount, useConnect } from 'wagmi';
import { Button, ButtonProps } from '@/components/ui/button';
import { Zap } from 'lucide-react';
import { useEffect } from 'react';

interface SignInButtonProps extends ButtonProps {
  redirectTo: string;
}

export function SignInButton({ redirectTo, children, ...props }: SignInButtonProps) {
  const router = useRouter();
  const { isConnected } = useAccount();
  const { connect, connectors } = useConnect();

  const injectedConnector = connectors.find((c) => c.id === 'injected');

  useEffect(() => {
    if (isConnected) {
      router.push(redirectTo);
    }
  }, [isConnected, redirectTo, router]);

  const handleSignIn = () => {
    if (isConnected) {
      router.push(redirectTo);
    } else if (injectedConnector) {
      connect({ connector: injectedConnector });
    }
  };

  return (
    <Button onClick={handleSignIn} disabled={!injectedConnector} {...props}>
      {children}
    </Button>
  );
}
