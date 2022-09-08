import { Header } from "../../partials/header/header";
import { Footer } from "../../partials/footer/footer";
export function LayoutHome({ children }: any) {
  return (
    <div className="flex flex-col min-h-[100vh]">
      <Header />
      <main className="grow">{children}</main>
      <Footer />
    </div>
  );
}
