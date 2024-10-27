import { Cards } from "./components/Cards";
import Header from "./components/Header";
import MainContent from "./components/MainContent";

export default function Home() {
  return (
    <div className="bg-[#262646] min-h-screen p-6 text-white flex flex-col items-center">
      {/* Header */}
      <Header />

      {/* Main Section */}
      <MainContent />

      {/* Course Cards */}
      <Cards />

    </div>
  );
}
