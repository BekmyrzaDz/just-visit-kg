import DescriptionItem from "./DescriptionItem/DescriptionItem";
import HotelsAndRestaurantsItem from "./HotelsAndRestaurantsItem/HotelsAndRestaurantsItem";
import ReviewsItem from "./ReviewsItem/ReviewsItem";

const ToursItem = () => {
  const sectionStyle = {
    marginBottom: "60px",
  };

  return (
    <div>
      <section style={sectionStyle}>
        <DescriptionItem />
      </section>
      <section style={sectionStyle}>
        <ReviewsItem />
      </section>
      <section>
        <HotelsAndRestaurantsItem />
      </section>
    </div>
  );
};

export default ToursItem;
