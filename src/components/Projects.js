import React from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { useState } from "react";

function Projects() {
  const [collapsed, setCollapsed] = useState([true, true, true, true]);
  const toggleCollapse = (index) => {
    const newCollapsed = [...collapsed];
    newCollapsed[index] = !newCollapsed[index];
    setCollapsed(newCollapsed);
  };
  return (
    <section id="projects">
      <h2>My Projects</h2>
      <div className={`project ${collapsed[0] ? "collapsed" : ""}`}>
        <h3>
          Project 1{" "}
          {collapsed[0] ? (
            <AiOutlinePlus onClick={() => toggleCollapse(0)} />
          ) : (
            <AiOutlineMinus onClick={() => toggleCollapse(0)} />
          )}
        </h3>
        {!collapsed[0] && (
          <p>
            This is a description of my first project.Some more filler text
            about the project. Some more filler text about the project.Some more
            filler text about the project.
          </p>
        )}
      </div>
      <div className={`project ${collapsed[1] ? "collapsed" : ""}`}>
        <h3>
          Project 2{" "}
          {collapsed[1] ? (
            <AiOutlinePlus onClick={() => toggleCollapse(1)} />
          ) : (
            <AiOutlineMinus onClick={() => toggleCollapse(1)} />
          )}
        </h3>
        {!collapsed[1] && (
          <p>
            This is a description of my 2nd project. Reference site about Lorem
            Ipsum, giving information on its origins, as well as a random Lipsum
            generator. Reference site about Lorem Ipsum, giving information on
            its origins, as well as a random Lipsum generator.
          </p>
        )}
      </div>
      <div className={`project ${collapsed[2] ? "collapsed" : ""}`}>
        <h3>
          Project 3{" "}
          {collapsed[2] ? (
            <AiOutlinePlus onClick={() => toggleCollapse(2)} />
          ) : (
            <AiOutlineMinus onClick={() => toggleCollapse(2)} />
          )}
        </h3>
        {!collapsed[2] && (
          <p>
            This is a description of my third project. Lorem ipsum, in graphical
            and textual context, refers to filler text that is placed in a
            document or visual presentation. Lorem ipsum is derived from the
            Latin "dolorem ipsum" roughly translated as "pain itself."Lorem
            ipsum, in graphical and textual context, refers to filler text that
            is placed in a document or visual presentation. Lorem ipsum is
            derived from the Latin "dolorem ipsum" roughly translated as "pain
            itself."
          </p>
        )}
      </div>
      <div className={`project ${collapsed[3] ? "collapsed" : ""}`}>
        <h3>
          Project 4{" "}
          {collapsed[3] ? (
            <AiOutlinePlus onClick={() => toggleCollapse(3)} />
          ) : (
            <AiOutlineMinus onClick={() => toggleCollapse(3)} />
          )}
        </h3>
        {!collapsed[3] && (
          <p>
            This is a description of my 4th project. In publishing and graphic
            design, Lorem ipsum is a placeholder text commonly used to
            demonstrate the visual form of a document or a typeface without
            relying on meaningful content. Lorem ipsum may be used as a
            placeholder before final copy is available. In publishing and
            graphic design, Lorem ipsum is a placeholder text commonly used to
            demonstrate the visual form of a document or a typeface without
            relying on meaningful content. Lorem ipsum may be used as a
            placeholder before final copy is available
          </p>
        )}
      </div>
    </section>
  );
}

export default Projects;
