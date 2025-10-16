import Card from "../../../ui/Card";
import type { FeatureCardProps } from "../home_types";

const Feature_Card = ({ cardData }: { cardData: FeatureCardProps[] }) => {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {cardData.map((data, index) => (
        <Card
          key={index}
          title={data.title}
          description={data.description}
          icon={data.icon}
          index={index}
        />
      ))}
    </div>
  );
};

export default Feature_Card;
