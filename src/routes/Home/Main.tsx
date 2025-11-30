import Header from "./_Header";
import LeftColumn from "./_LeftColumn";
import RightColumn from "./_RightColumn";

export default function Main() {
  return (
    <div className="bg-gray-300 a4 m-auto" id="Main">
      <Header />
      <div className="flex">
        <LeftColumn />
        <RightColumn />
      </div>
    </div>
  );
}
