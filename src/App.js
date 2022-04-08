import React from "react";

/*components*/
import Footer from "./components/footer";
import Header from "./components/header";
import Navigationtab from "./components/navigationtab";
import Link_CDN from "./components/cdnlink";
import Main_Content from "./components/main_content";

const App = () => {
  return (
    <div>
      {/*will show header for browser extension*/}
      <Header /> 
      {/*will show CDN link for browser extension*/}
      <Link_CDN />
      {/*this div creates a divider between header and main content(icons and markdown emojis)*/}
      <div className="divider"></div>
      {/*the tab component which will toggle between icons and markdown emojis section*/}
      <Navigationtab />
      {/*this component is added as dummy currently but here goes the main content that is our icons and markdown emojis.*/}
      <Main_Content />
      {/*will show footer for browser extension*/}
      <Footer />
    </div>
  );
};
export default App;
