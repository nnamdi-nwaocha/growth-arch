import { cn } from "@/lib/utils";
import {
  IconBook,
  IconUsers,
  IconBroadcast,
  IconSchool,
  IconCalendarEvent,
  IconMessageCircle,
  IconHeartHandshake,
  IconBulb,
} from "@tabler/icons-react";

export function Features() {
  const features = [
    {
      title: "Learn Together",
      description:
        "Collaborate and grow with like-minded learners and teachers.",
      icon: <IconUsers />,
    },
    {
      title: "Live Sessions",
      description: "Host and join live, interactive learning spaces easily.",
      icon: <IconBroadcast />,
    },
    {
      title: "Interactive Workshops",
      description:
        "Engage in hands-on learning experiences with guided workshops.",
      icon: <IconSchool />,
    },
    {
      title: "Event Scheduling",
      description: "Plan and organize learning events seamlessly.",
      icon: <IconCalendarEvent />,
    },
    {
      title: "Community Support",
      description: "Engage with a vibrant community ready to help you succeed.",
      icon: <IconHeartHandshake />,
    },
    {
      title: "Messaging Tools",
      description:
        "Stay connected with peers and mentors through instant messaging.",
      icon: <IconMessageCircle />,
    },
    {
      title: "Idea Sharing",
      description:
        "Spark creativity with features designed for brainstorming and sharing ideas.",
      icon: <IconBulb />,
    },
    {
      title: "Knowledge Repository",
      description: "Access and share learning resources anytime, anywhere.",
      icon: <IconBook />,
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 relative z-10 py-10 max-w-7xl mx-auto">
      {features.map((feature, index) => (
        <Feature key={feature.title} {...feature} index={index} />
      ))}
    </div>
  );
}

const Feature = ({
  title,
  description,
  icon,
  index,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col lg:border-r  py-10 relative group/feature dark:border-neutral-800",
        (index === 0 || index === 4) && "lg:border-l dark:border-neutral-800",
        index < 4 && "lg:border-b dark:border-neutral-800"
      )}
    >
      {index < 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-10 text-neutral-600 dark:text-neutral-400">
        {icon}
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-blue-500 transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-800 dark:text-neutral-100">
          {title}
        </span>
      </div>
      <p className="text-sm text-neutral-600 dark:text-neutral-300 max-w-xs relative z-10 px-10">
        {description}
      </p>
    </div>
  );
};
