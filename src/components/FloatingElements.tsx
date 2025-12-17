const FloatingElements = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Floating gold accent circles */}
      <div className="absolute top-1/4 left-10 w-64 h-64 rounded-full bg-gold/5 blur-3xl animate-float-slow" />
      <div className="absolute top-3/4 right-10 w-96 h-96 rounded-full bg-gold/3 blur-3xl animate-float-slower" />
      <div className="absolute top-1/2 left-1/3 w-48 h-48 rounded-full bg-gold/5 blur-2xl animate-float" />
      
      {/* Subtle geometric patterns */}
      <div className="absolute top-20 right-20 w-32 h-32 border border-gold/10 rotate-45 animate-spin-slow" />
      <div className="absolute bottom-40 left-20 w-24 h-24 border border-gold/10 rotate-12 animate-spin-slower" />
    </div>
  );
};

export default FloatingElements;
