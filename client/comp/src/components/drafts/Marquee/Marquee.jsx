import React, { useEffect, useRef } from "react";
import "./Marquee.css";
function Marquee() {
  const scrollerRefs = useRef([]);

  useEffect(() => {
    const scrollers = scrollerRefs.current;

    // If a user hasn't opted in for reduced motion, then we add the animation
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      addAnimation();
    }

    function addAnimation() {
      scrollers.forEach((scroller) => {
        // add data-animated="true" to every `.scroller` on the page
        scroller.setAttribute("data-animated", true);

        // Make an array from the elements within `.scroller-inner`
        const scrollerInner = scroller.querySelector(".scroller__inner");
        const scrollerContent = Array.from(scrollerInner.children);

        // For each item in the array, clone it
        // add aria-hidden to it
        // add it into the `.scroller-inner`
        scrollerContent.forEach((item) => {
          const duplicatedItem = item.cloneNode(true);
          duplicatedItem.setAttribute("aria-hidden", true);
          scrollerInner.appendChild(duplicatedItem);
        });
      });
    }
  }, []);

  return (
    <>
      {/* <!-- 
   PROGRESSIVELY ENHANCED
   If a user has `prefers-reduced-motion: reduced`, there will be no animation
   and the items will wrap, instead of being hidden.
   If they have not opted for reduced motion, the items will be duplicated with JS
   and the duplicated content will have `aria-hidden="true"` to prevent duplicate content
   for screen readers.
   If a user has JS disabled or it fails for whatever reason, they will get the same 
   experience as a user with `prefers-reduced-motion: reduced`, so no content is hidden,
   and there is no animation.
   
   === OPTIONS ===
   CONTROL SPEED 
   If you don't assign anything, it will use a default speed.
   To change the speed, on the `.scroller`
   you can use `data-speed="fast"` or `data-speed="slow"

   CONTROL DIRECTION 
   By default, it will scroll from right to left.
   To change the direction, on the `.scroller`
   you can use `data-direction="right"` (`data-direction="left" also works, but it is the default) 
--> */}

      <div className="marquee">
        <h1 style={{ textAlign: "center" }}>Infinite Scroll Animation</h1>

        <div
          className="scroller"
          data-speed="fast"
          // data-direction="right"
          ref={(el) => (scrollerRefs.current[0] = el)}
        >
          <ul className="tag-list scroller__inner">
            <li>HTML</li>
            <li>CSS</li>
            <li>JS</li>
            <li>SSG</li>
            <li>webdev</li>
            <li>animation</li>
            <li>UI/UX</li>
          </ul>
        </div>

        <div
          className="scroller"
          data-direction="right"
          data-speed="slow"
          ref={(el) => (scrollerRefs.current[1] = el)}
        >
          <div className="scroller__inner">
            <img src="https://i.pravatar.cc/150?img=1" alt="" />
            <img src="https://i.pravatar.cc/150?img=2" alt="" />
            <img src="https://i.pravatar.cc/150?img=3" alt="" />
            <img src="https://i.pravatar.cc/150?img=4" alt="" />
            <img src="https://i.pravatar.cc/150?img=5" alt="" />
            <img src="https://i.pravatar.cc/150?img=6" alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Marquee;
