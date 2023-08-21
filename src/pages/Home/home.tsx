import { Banner } from "./banner";
import bannerImg from "./../../assets/img/banner_img_01.jpg";
import { BestCats } from "./bestCats";
import { FeaturedProducts } from "./featutedProducts";
export const Home = () => {
  const bannerComponentText =
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit.  Perferendis ratione praesentium hic quae non eos facilis id  nulla nisi! Voluptate, eveniet porro voluptatibus ipsam quod  eius omnis facere corrupti laudantium nisi unde?";
  return (
    <div>
      <Banner
        img={bannerImg}
        title="Product title"
        subtitle="Product subTitle"
        text={bannerComponentText}
      />
      <BestCats />
      <FeaturedProducts />
    </div>
  );
};
