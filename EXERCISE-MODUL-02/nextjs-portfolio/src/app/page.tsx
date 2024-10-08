import AboutUSView from "@/view/page/about-us";
import ContactUSView from "@/view/page/contact";
import HomeView from "@/view/page/home";
import PortfolioView from "@/view/page/portfolio";

export default function Home() {
  return (
    <div>
      <HomeView />
      <AboutUSView />
      <PortfolioView />
      <ContactUSView />
    </div>
  );
}
