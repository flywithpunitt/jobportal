import ForgotPassword from '@/components/Auths/forgot';
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Wiztrace | Forgot password",
  description: "...",
};

export default function ForgotPage() {
  return (
    <>
  <ForgotPassword />
    </>
  );
}
