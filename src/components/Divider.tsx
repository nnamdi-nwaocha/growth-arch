export default function Divider() {
  return (
    <div className="mt-8 lg:mt-12">
      <svg
        className="w-auto h-4 mx-auto text-gray-300 lg:mx-0"
        viewBox="0 0 172 16"
        fill="none"
        stroke="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* SVG path data */}
        {Array(24)
          .fill(null)
          .map((_, index) => (
            <line
              key={index}
              y1="-0.5"
              x2="18.0278"
              y2="-0.5"
              transform={`matrix(-0.5547 0.83205 0.83205 0.5547 ${
                11 + index * 7
              } 1)`}
            />
          ))}
      </svg>
    </div>
  );
}
