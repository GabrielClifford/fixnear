import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AuthForm from '@/components/AuthForm';

export default function SignupPage() {
  return (
    <>
      <Navbar />
      <main className="px-5 pb-24 pt-32">
        <AuthForm mode="signup" />
      </main>
      <Footer />
    </>
  );
}