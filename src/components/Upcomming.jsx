import ActivityTag from "./ActivityTag";
import SectionHeader from "./SectionHeader";
const Upcomming = () => {
  return (
    <div className="py-6">
      <SectionHeader name="Upcomming" emph="activities" />
      <ActivityTag
        name="test"
        date="08/01/2021"
        detail="ajhvgfehjgweghjfwehjfwehjv"
      />
      <ActivityTag
        name="test"
        date="08/01/2021"
        detail="ajhvgfehjgweghjfwehjfwehjv"
      />
    </div>
  );
};

export default Upcomming;
