import React from "react";
import { openingHours, socials } from "../../constants";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/all";
import gsap from "gsap";

const Contact = () => {
  useGSAP(() => {
    const contactSplit = new SplitText(".titre", { type: "chars, words" });
    const pSplit = new SplitText("#contact p ", { type: "chars, words" });
    const hSplit = new SplitText(".head ", { type: "chars, words" });

    contactSplit.chars.forEach((char) => char.classList.add("text-gradient"));

    const textAnime = gsap.timeline({
      scrollTrigger: {
        trigger: "#contact",
        start: "top center",
        end: "bottom top",
        onEnter: () => textAnime.restart(),
        onEnterBack: () => textAnime.restart(),
      },
    });

    textAnime
      .fromTo(
        contactSplit.chars,
        {
          opacity: 0,
        },
        {
          opacity: 1,
          yPercent: 0,
          duration: 0.5,
          ease: "expo.out",
          stagger: 0.04,
        }
      )
      .fromTo(
        hSplit.chars,
        {
          opacity: 0,
        },
        {
          opacity: 1,
          yPercent: 0,
          duration: 0.5,
          ease: "expo.out",
          stagger: 0.03,
        },
        "+=0.01"
      )
      .fromTo(
        pSplit.chars,
        {
          opacity: 0,
        },
        {
          opacity: 1,
          yPercent: 0,
          duration: 0.5,
          ease: "expo.out",
          stagger: 0.02,
        },
        "+=0.01"
      )
      .fromTo(
        ".img",
        {
          opacity: 0,
        },
        {
          opacity: 1,
          yPercent: 0,
          duration: 0.5,
          ease: "expo.out",
          stagger: 0.02,
        },
        "+=0.01"
      );
  });
  return (
    <footer id="contact" className="noisy">
      <img
        src="/images/footer-right-leaf.png"
        alt="right-leaf"
        id="f-right-leaf"
      />
      <img
        src="/images/footer-left-leaf.png"
        alt="left-leaf"
        id="f-left-leaf"
      />
      <div className="content">
        <h2 className="titre">Where To Find Us</h2>
        <h3 className="head"> Visit our store</h3>
        <p>9QRJ+PW8, Avenue Hassan II, Oulad Teima, Maroc</p>
        <div>
          <h3 className="head">Contact Us</h3>
          <p>+212 622-066371</p>
          <p>tatmimahdi@gmail.com</p>
        </div>

        <div>
          <h3 className="head">Open every day</h3>
          {openingHours.map((time) => (
            <p key={time.day}>
              {time.day}:{time.time}
            </p>
          ))}
        </div>
        <div>
          <h3 className="head">Socials</h3>
          <div className="flex-center gap-5">
            {socials.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
              >
                <img src={social.icon} className="img" />
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="drink-img">
        <img src="images/footer-drinks.png" />
      </div>
    </footer>
  );
};

export default Contact;
