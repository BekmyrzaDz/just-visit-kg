// styles
import styled from "./HotelsAndRestaurantsItem.module.css";
// context
import { useContext } from "react";
import { Context } from "../../../PostPlaces";
// mui
import { Box, Container } from "@mui/system";
// components
import ImageCarousel from "../../../../ImageCarousel/ImageCarousel";

const HotelsAndRestaurantsItem = () => {
  const props = useContext(Context);

  const { actual } = props.Context._currentValue2.data.toursData;
  console.log(actual);

  return (
    <>
      {actual
        .filter((post) => post.id === 1)
        .map((post) => (
          <Box key={post.id}>
            <Box>
              <h3 className={styled.title}>
                {post.hotelsAndRestaurantsData.title}
              </h3>
            </Box>
            <Box>
              <Container maxWidth="1380px">
                <ImageCarousel
                  data={post.hotelsAndRestaurantsData.hotelsAndRestaurants}
                />
              </Container>
            </Box>
          </Box>
        ))}
    </>
  );
};

export default HotelsAndRestaurantsItem;
