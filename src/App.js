import { CardHeader, LeftSideBar, Navbar, TitleSection } from "./components";

function App() {
  return (
    <div className="flex flex-row">
      <div className="w-1/6">
        <LeftSideBar />
      </div>
      <div className="w-5/6 bg-[#151A2E]">
        <Navbar />
        <div className="px-5 py-5 lg:px-10 top-10">
          <TitleSection />
          <CardHeader />
        </div>
      </div>
    </div>
  );
}

export default App;
