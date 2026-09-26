import Link from "next/link";
import Image from "next/image";

import { Workout } from "@/types/fitlog";

interface WorkoutCardProps {
  workout: Workout;
}

const WorkoutCard = ({ workout }: WorkoutCardProps) => {
  return (
    <Link
      href={`/exercise/${workout.id}`}
      className="group block overflow-hidden rounded-2xl border border-[#292d34] bg-[#191c22] transition hover:border-[#3a3f48]"
    >
      {/* Image */}
      <div className="relative aspect-[1.85/1] overflow-hidden">
        <Image
          src={workout.image}
          alt={workout.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition duration-300 group-hover:scale-[1.02]"
        />
      </div>

      {/* Content */}
      <div className="px-5 pb-5 pt-5">
        {/* Muscle Groups */}
        <div className="flex flex-wrap gap-2">
          {workout.muscleGroups.map((muscleGroup) => (
            <span
              key={muscleGroup}
              className="rounded-full bg-[#ccff00] px-3 py-1 text-[14px] font-semibold leading-none text-black"
            >
              {muscleGroup}
            </span>
          ))}
        </div>

        {/* Workout Name */}
        <h3 className="mt-5 text-[24px] font-bold uppercase leading-tight text-[#e5e7eb]">
          {workout.name}
        </h3>

        {/* Equipment */}
        <p className="mt-3 text-[16px] text-[#aeb4c0]">{workout.equipment}</p>

        {/* Stats */}
        <div className="mt-5 flex items-center gap-5 text-[16px] text-[#e5e7eb]">
          {/* Duration */}
          <div className="flex items-center gap-1.5">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              className="h-5 w-5"
              stroke="#ccff00"
              strokeWidth="2"
            >
              <circle cx="12" cy="12" r="9" />
              <path d="M12 7v5l3 2" />
            </svg>

            <span>{workout.duration} min</span>
          </div>

          {/* Calories */}
          <div className="flex items-center gap-1.5">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              className="h-5 w-5"
              stroke="#ccff00"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 3c1.5 3 5 4.5 5 9a5 5 0 0 1-10 0c0-2.5 1.5-4.5 3.5-6.5" />
              <path d="M12 12c-.8 1-1.5 1.8-1.5 3a1.5 1.5 0 0 0 3 0c0-1.2-.7-2-1.5-3Z" />
            </svg>

            <span>{workout.caloriesBurned} kcal</span>
          </div>

          {/* Rating */}
          <div className="flex items-center gap-1.5">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              className="h-5 w-5"
              stroke="#ccff00"
              strokeWidth="2"
              strokeLinejoin="round"
            >
              <path d="m12 3 2.8 5.7 6.2.9-4.5 4.4 1.1 6.2-5.6-3-5.6 3 1.1-6.2L3 9.6l6.2-.9L12 3Z" />
            </svg>

            <span>{workout.rating}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default WorkoutCard;
