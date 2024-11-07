import Header from "../../components/common/header/Header";
import "../Home/Home.css";
import Tabs from "../../components/common/tabs/Tabs";

export default function ApplicationHome() {
  const tabData = [{ label: "Tab 1" }, { label: "Tab 2" }, { label: "Tab 3" }];
  return (
    <div className="container">
      <Header />
      <div className="content-container">
        <Tabs tabs={tabData} />
      </div>
    </div>
  );
}
