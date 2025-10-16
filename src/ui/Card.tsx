const Card = ({ title, icon, description, index }: any) => {
  return (
    <div
      className="bg-white custom-shadow rounded-xl p-8 flex flex-col justify-between gap-4 hover:scale-105 transition-transform duration-300 ease-in-out"
      data-aos="fade-up"
      data-aos-delay={index * 100}
    >
      <div className="flex gap-4 items-center">
        {icon} <h3 className="text-primary font-semibold">{title}</h3>
      </div>
      <p className="flex-1">{description}</p>
    </div>
  );
};

export default Card;
