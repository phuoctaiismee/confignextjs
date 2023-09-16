'use client';

export default function Catefoty({ children }: { children: React.ReactNode }) {
  return (
    <section className="px-32">
      <h1>Test</h1>
      {children}
    </section>
  );
}
