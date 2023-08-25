import {
  ActivityOverview,
  CardHeader,
  Earnings,
  LastMontBalance,
  LeftSideBar,
  Navbar,
  Profit,
  TitleSection,
  TotalProfit,
} from "./components";
import Orders from "./components/Orders";

function App() {
  return (
    <div className="flex flex-row">
      <div className="w-[13%] md:w-1/6">
        <LeftSideBar />
      </div>
      <div className="w-full bg-[#151A2E]">
        <Navbar />
        <div className="py-5 pr-3 pl-7 lg:pl-14">
          <TitleSection />
          <CardHeader />
          <div className="flex flex-col gap-5 lg:gap-7 lg:flex-row">
            <div className="w-full lg:w-[77%] flex flex-col gap-5">
              <div className="flex flex-col gap-3 lg:flex-row">
                <div className="w-full lg:w-[85%] bg-[#1C243F] rounded-md">
                  <Earnings />
                </div>
                <div className="grid w-full grid-cols-2 gap-3">
                  <div className="bg-[#1C243F] rounded-md">
                    <Orders />
                  </div>
                  <div className="bg-[#1C243F] rounded-md">
                    <Profit />
                  </div>
                </div>
              </div>
              <div className="flex flex-col lg:flex-row w-full rounded-md bg-[#1C243F]">
                <div className="w-full">
                  <TotalProfit />
                </div>
                <div className="w-full border-l lg:w-1/2 border-l-[#2E4B85]">
                  <LastMontBalance />
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/2 bg-[#1C243F] rounded-md flex flex-col p-7">
              <ActivityOverview />
            </div>
          </div>
          <footer className="w-full my-10">
            <div className="flex flex-row gap-7">
              <h1 className="text-[#8A92A6] text-xs">Privacy Policy</h1>
              <h1 className="text-[#8A92A6] text-xs">Terms of Use</h1>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
}

export default App;
