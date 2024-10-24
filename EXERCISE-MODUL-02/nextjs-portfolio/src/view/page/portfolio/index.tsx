import Portsrc from "../portfolio/components/portsrc";

const PortfolioView: React.FC = () => {
  return (
    <section
      id="portfolio"
      className="h-[100vh] py-20 bg-[#414142] flex flex-col items-center justify-center"
    >
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-[#ffdd79] mb-40">
          ⚙️ My Project /
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 cursor-pointer">
          <Portsrc
            title="Create to-do list with React + CSS framework"
            description="Create to-do list with React + CSS framework."
            gambarURL="/img/todolist.png"
            linkURL="https://angganrw-tailwindcss.vercel.app/"
          />
          <Portsrc
            title="Create an application to input user data"
            description="Create two pages, the first one is for display data users with table and the second one is a form to register the users."
            gambarURL="/img/networkcall.png"
            linkURL="https://angganrw-exercise9.vercel.app/register"
          />
          <Portsrc
            title="Github Exercise"
            description="Github Exercise Class on Purwadhika"
            gambarURL="/img/gatauapalagihehe.png"
            linkURL="https://github.com/angganrw/PURWADHIKA"
          />
        </div>
      </div>
    </section>
  );
};

export default PortfolioView;
