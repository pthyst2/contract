import type { NextPage } from "next";
import Link from "next/link";
import SeoHead from "../components/partials/seo-head/seo-head";

const Home: NextPage = () => {
  //#region SEO
  const seo = {
    title: "Contract",
  };
  //#endregion
  return (
    <>
      <SeoHead input={seo} />
      <main className="h-[100vh] w-full flex items-center">
        {/* Sign Contract */}
        <div className="big-bg sign-contract">
          <div className="text-white max-w-[350px] xl:max-w-[35%]">
            <p className="font-delaGothicOne text-[18px] md:text-[24px] xl:text-[36px]">
              I have contracts need to sign !
            </p>
            <div className="buttons py-4">
              <Link href="">
                <a className="rounded-[4px] text-[13px] btn btn-white py-2 px-4 mb-2">
                  Sign In
                </a>
              </Link>
              <Link href="">
                <a className="rounded-[4px] text-[13px] btn btn-second py-2 px-4">
                  Go Contracts
                </a>
              </Link>
            </div>
          </div>
        </div>
        {/* end of sign contract */}
        {/* Create Contract */}
        <div className="big-bg create-contract">
          <div className="text-white max-w-[350px] xl:max-w-[35%]">
            <p className="font-delaGothicOne text-[18px] md:text-[24px] xl:text-[36px]">
              新しい契約を作成したい！
            </p>
            <div className="buttons py-4">
              <Link href="">
                <a className="rounded-[4px] text-[13px] btn btn-white py-2 px-4 mb-2">
                  ログイン
                </a>
              </Link>
              <Link href="">
                <a className="rounded-[4px] text-[13px] btn btn-main py-2 px-4">
                  新規契約の作成
                </a>
              </Link>
            </div>
          </div>
        </div>
        {/* end of create contract */}
      </main>

      {/* Style */}
      <style jsx>{`
        .big-bg {
          display: inline-flex;
          width: 50%;
          height: 100%;
          flex-shrink: 1;
          justify-content: center;
          align-items: center;
          background-size: cover;
          transition: all 0.75s ease-in-out;
        }
        .big-bg:hover {
          width: 100%;
        }
        .big-bg.sign-contract {
          background-image: url("/images/solid-colors/second.jpg");
        }
        .big-bg.sign-contract:hover {
          background-image: url("/images/sign-contract.jpg");
        }
        .big-bg.create-contract {
          background-image: url("/images/solid-colors/main.jpg");
        }
        .big-bg.create-contract:hover {
          background-image: url("/images/create-contract.jpg");
        }
        .big-bg .buttons {
          display: none;
        }
        .big-bg:hover .buttons {
          display: block;
        }
        .big-bg .buttons .btn {
          display: flex;
          width: 100%;
        }
      `}</style>
      {/* end of style */}
    </>
  );
};
export default Home;
