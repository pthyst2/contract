export function MockSection({ title }: any) {
  return (
    <div className="flex justify-center items-center w-full h-full border-[5px] border-grey border-dashed hover:border-main">
      <p>{title}</p>
    </div>
  );
}
