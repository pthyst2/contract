import type { NextPage } from "next";
import SeoHead from "../components/partials/seo-head/seo-head";
import { LayoutHome } from "../components/layouts/layout-home/layout-home";
import { SectionQuickAction } from "../components/partials/section-quick-action/section-quick-action";

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
          {/* Quick actions */}
          <SectionQuickAction />
          {/* end of quick actions */}
          {/* Main content */}
          <div className="container mx-auto py-[2em]"></div>
          {/* end of main content */}
        </div>
      </LayoutHome>
    </>
  );
};
export default Home;
