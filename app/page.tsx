'use client'; // Add this at the top to mark it as a client-side component

import { useState, useEffect } from 'react';
import ExtendedForm from '@/components/extended-form';
import Loader from '@/components/Loader';

export default function Home() {
  const [loading, setLoading] = useState(true);

  // Simulating a loading state (replace with actual loading logic if needed)
  useEffect(() => {
    setTimeout(() => {
      setLoading(false); // Set loading to false after 3 seconds
    }, 3000);
  }, []);

  return (
    <main
      className="min-h-screen"
      style={{ background: 'linear-gradient(90deg, #050b55 41%, #03073a 70%)' }}
    >
      {loading ? <Loader /> : <ExtendedForm />}
    </main>
  );
}
