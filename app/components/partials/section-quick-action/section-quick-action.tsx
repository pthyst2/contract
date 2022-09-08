import Image from "next/image";
export function SectionQuickAction() {
  return (
    <div className="bg-[#fafafa] grid grid-cols-1 md:grid-cols-2 w-full h-[40vh] lg:h-[100vh]">
      {/* Create contract */}
      <div className="p-[2em]">
        <div className="flex flex-col h-full bg-white p-[2em]">
          {/* Title */}
          <h1 className="pb-[1em] text-[20px] font-delaGothicOne text-main">
            Create Contract
          </h1>
          {/* Image */}
          <Image
            src="/images/create-contract.jpg"
            layout="responsive"
            width={16}
            height={9}
          />
          {/* Content */}
          <div className="grow py-4">
            <p>
              <strong>Create your own digital contract</strong>
            </p>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
          </div>
          {/* Button */}
          <div className="text-left"></div>
        </div>
      </div>

      {/* Sign contract */}
      <div className="p-[2em]">
        <div className="flex flex-col  h-full  bg-white p-[2em]">
          {/* Title */}
          <h1 className="pb-[1em] text-[20px] font-delaGothicOne  text-main">
            契約を結ぶ
          </h1>
          {/* Image */}
          <Image
            src="/images/sign-contract.jpg"
            layout="responsive"
            width={16}
            height={9}
          />
          {/* Content */}
          <div className="grow py-4">
            <p>
              <strong>デジタルキーで契約書にサイン</strong>
            </p>
            <p>
              どちらは当時はなはだこんな焦燥物に従って事の以上を起りんでし。ひょろひょろ今日を約束感は同時にその脱却べきましまでにするているませにも安心過ぎないでしと、ずいぶんには得るたべくでませ。西洋が稼ぎうのはいよいよ十一月がけっしてうませです。
            </p>
          </div>
          {/* Button */}
          <div className="text-left"></div>
        </div>
      </div>
    </div>
  );
}
