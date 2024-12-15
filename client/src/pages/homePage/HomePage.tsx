import style from "./homePage.module.css";
// import Slider from "react-slick";
import { Link, useLoaderData } from "react-router-dom";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import HelperCard from "../../components/helperCard/HelperCard";
import banner from "../../assets/images/entraide-banner.jpg";
import { HelperType, ServiceType } from "../../lib/definitions";

export default function HomePage() {
  const { services, helpers } = useLoaderData() as {
    services: ServiceType[];
    helpers: HelperType[];
  };

  if (!services || !helpers) {
    return <div>No data...</div>;
  }

  // const isMobile = window.innerWidth < 720;

  // const settings = {
  //   dots: false,
  //   infinite: true,
  //   slidesToShow: isMobile ? 1 : 5,
  //   slidesToScroll: 1,
  //   autoplay: true,
  //   speed: 2000,
  //   autoplaySpeed: 1000,
  //   centerMode: !isMobile,
  //   centerPadding: "0",
  //   cssEase: "ease-in-out",
  //   vertical: false,
  //   verticalSwiping: false,
  //   responsive: [
  //     {
  //       breakpoint: 720,
  //       settings: {
  //         slidesToShow: 1,
  //         slidesToScroll: 1,
  //         vertical: true,
  //         verticalSwiping: true,
  //       },
  //     },
  //     {
  //       breakpoint: 1024,
  //       settings: {
  //         slidesToShow: 4,
  //       },
  //     },
  //   ],
  // };

  // const renderHelpers = () => {
  //   return helpers.map((helper) => (
  //     <div className={style.cardContainer2} key={helper.id}>
  //       <Link to={`/helpers/${helper.id}`} className={style.link}>
  //         <HelperCard helper={helper} />
  //       </Link>
  //     </div>
  //   ));
  // };

  return (
    <div className={style.homePage}>
      <div>
        <img className={style.banner} src={banner} alt="bannière_entraide" />
      </div>

      <h2 className={style.homePageHelpersTitle}>Annonces d'entraide</h2>
      {/* <Slider className="sliderStyle" {...settings}>
        {renderHelpers()}
      </Slider> */}
    </div>
  );
}
