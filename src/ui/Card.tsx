import type { FeatureCardProps } from "../views/home_view/home_types";

const Card = ({ title, icon, description, index = 0 }: FeatureCardProps) => {
  return (
    <div
      className="bg-white custom-shadow rounded-xl py-8 px-4 flex flex-col justify-between gap-4 hover:scale-105 transition-transform duration-300 ease-in-out"
      data-aos="fade-up"
      data-aos-delay={index * 100}
    >
      <div className="flex gap-4 items-center">
        <div className="flex-1 flex gap-4">
          {icon} <h3 className="text-primary font-semibold">{title}</h3>
        </div>
      </div>
      <p className="flex-1">{description}</p>
    </div>
  );
};

export default Card;
