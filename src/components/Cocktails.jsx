import React from "react";
import { cocktailLists, mockTailLists } from "../../constants";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";

const Cocktails = () => {
  useGSAP(() => {
    const paragraphSplit = new SplitText(".subtitl", { type: "lines" });
    const cocktailsTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#cocktails",
        start: "top center",
        end:"top 80%"
      },
    });
    const parallaxTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#cocktails",
        start: "top 30%",
        end: "bottom 80%",
        scrub: true,
      },
    });
    parallaxTimeline
      .from("#c-left-leaf", {
        x: -100,
        y: 100,
      })
      .from("#c-right-leaf", {
        x: 100,
        y: 100,
      });
    cocktailsTimeline.from(paragraphSplit.lines, {
      opacity: 0,
      yPercent:100,
      duration: 1,
      ease: "expo.out",
      stagger: 0.1,
    });
  });
  return (
    <section id="cocktails" className="noisy">
      <img
        src="/images/cocktail-left-leaf.png"
        alt="left-leaf"
        id="c-left-leaf"
      />
      <img
        src="/images/cocktail-right-leaf.png"
        alt="right-leaf"
        id="c-right-leaf"
      />

      <div className="list">
        <div className="popular subtitl">
          <h2>Most popular cocktails:</h2>
          <ul>
            {cocktailLists.map(({ name, country, detail, price }) => (
              <li key={name}>
                <div className="md:me-28 subtitl">
                  <h3>{name}</h3>
                  <p>
                    {country} | {detail}
                  </p>
                </div>
                <span>-{price}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="loved subtitl">
          <h2>Most popular cocktails:</h2>
          <ul>
            {mockTailLists.map(({ name, country, detail, price }) => (
              <li key={name}>
                <div className="me-28 subtitl">
                  <h3>{name}</h3>
                  <p>
                    {country} | {detail}
                  </p>
                </div>
                <span>-{price}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Cocktails;
