import React, { useState } from "react";
import Editor from "../../Components/Editor/Editor";
import Preview from "../../Components/Preview/Preview";


function Home() {
  const [html, setHtml] = useState("");
  const [css, setCss] = useState("");
  const [js, setJs] = useState("");

  return (
    <div className="home-container">
      <div className="editors">
        <Editor language="HTML" value={html} onChange={setHtml} />
        <Editor language="CSS" value={css} onChange={setCss} />
        <Editor language="JavaScript" value={js} onChange={setJs} />
      </div>
      <Preview html={html} css={css} js={js} />
    </div>
  );
};

export default Home;
