const AuthImagePattern = ({ title, subtitle }) => {
  return (
    <div className="flex items-center justify-center bg-base-50 p-5 w-full min-h-64">
      <div className="max-w-md text-center">
        {/* Animated grid */}
        <div className="grid grid-cols-3 gap-3 mb-4 -mt-96">
          {[...Array(9)].map((_, i) => (
            <div
              key={i}
              className={`aspect-square rounded-2xl ${
                i % 2 === 0
                  ? "bg-primary animate-pulse" // brighter & animated
                  : "bg-primary/40" // static for contrast
              }`}
            />
          ))}
        </div>

        {/* Text */}
        <h2 className="text-2xl font-bold mb-4">{title}</h2>
        <p className="text-base-content/60">{subtitle}</p>
      </div>
    </div>
  );
};

export default AuthImagePattern;
