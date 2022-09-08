export function Header() {
  return (
    <>
      {/* Fixed header */}
      <div className="bg-main fixed top-0 left-0 right-0 z-[1020] h-[60px]">
        <div className="container mx-auto py-4">
          <p> This is header</p>
        </div>
      </div>
      {/* end of fixed header */}
      {/* Margin bottom */}
      <div className="w-full mb-[60px]"></div>
      {/* end of margin bottom */}
    </>
  );
}
