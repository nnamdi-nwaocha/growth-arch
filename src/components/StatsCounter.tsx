import CountUp from "react-countup";

interface StatsCounterProps {
  isVisible: boolean;
  cardRef: React.RefObject<HTMLDivElement | null>;
}

export default function StatsCounter({
  isVisible,
  cardRef,
}: StatsCounterProps) {
  return (
    <div ref={cardRef} className="inline-grid grid-cols-2 mt-8 gap-x-8">
      <div>
        <p className="text-4xl font-bold text-gray-900">
          {isVisible ? <CountUp start={0} end={157} duration={3} /> : 0}+
        </p>
        <p className="mt-2 text-base font-medium text-gray-500">Classes</p>
      </div>

      <div>
        <p className="text-4xl font-bold text-gray-900">
          {isVisible ? <CountUp start={0} end={1000} duration={3} /> : 0}+
        </p>
        <p className="mt-2 text-base font-medium text-gray-500">Students</p>
      </div>
    </div>
  );
}
