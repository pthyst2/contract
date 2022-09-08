import type { NextPage } from "next";
import SeoHead from "../components/partials/seo-head/seo-head";
import { LayoutHome } from "../components/layouts/layout-home/layout-home";
import { BannerImage } from "../components/partials/banner-image/banner-image";

const Home: NextPage = () => {
  //#region SEO
  const seo = {
    title: "Contract",
  };
  //#endregion
  return (
    <>
      <SeoHead input={seo} />
      <LayoutHome>
        <div className="bg-white">
          {/* Big banner */}
          <BannerImage />
          {/*  */}

          <div className="container mx-auto"></div>
        </div>
      </LayoutHome>
    </>
  );
};

export default Home;
