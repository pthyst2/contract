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
          {/* Banner */}
          <BannerImage />
          {/* end of banner */}
          {/* Main content */}
          <div className="container mx-auto py-[2em]"></div>
          {/* end of main content */}
        </div>
      </LayoutHome>
    </>
  );
};

export default Home;
