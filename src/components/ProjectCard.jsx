// import PropTypes from "prop-types";
// import React from "react";

// // Node Module

// const ProjectCard = ({
//     imgSrc,
//     title,
//     tags,
//     projectLink,
//     classes }) => {
//   return (
//     <div className={"relative p-4 rounded-2xl bg-zinc-800 hover:bg-zinc-700/50 active:bg-zinc-700/60 ring-1 ring-inset ring-zinc-50/5 transition-colors"+classes}>
//       <figure className="img-box aspect-square rounded-lg mb-4">
//         <img src={imgSrc} alt={title} loading="lazy" className="img-cover" />
//       </figure>
//       <div className="flex items-center justify-between gap-4">
//         <div>
//           <h3 className="title-1 mb-3">{title}</h3>
//           <div className="flex flex-wrap items-center gap-2">
//             {tags.map((label, key) => (
//               <span
//               key={key}
//               className="h-8 text-sm text-zinc-400 bg-zinc-50/5 grid items-center px-3 rounded-lg">
//                 {label}
//               </span>
//             ))}
//           </div>
//         </div>

//         <div className="w-11 h-11 rounded-lg grid place-items-center bg-white text-zinc-950 shrink-0">
//             <span className="material-symbols-rounded" aria-hidden="true">
//                 arrow_outward
//             </span>
//         </div>
//       </div>
//       <a href={projectLink} target="_blank" className="absolute inset-0"></a>
//     </div>
//   );
// };

// ProjectCard.protoTypes = {
//   imgSrc: PropTypes.string.isRequired,
//   title: PropTypes.string.isRequired,
//   tags: PropTypes.array.isRequired,
//   projectLink: PropTypes.string,
//   classes: PropTypes.string,
// };

// export default ProjectCard;

import PropTypes from "prop-types";
import React, { useRef } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { FiMousePointer } from "react-icons/fi";

// Node Module

// const ProjectCard = ({
//     imgSrc,
//     title,
//     tags,
//     projectLink,
//     classes }) => {
//   return (
//     <div className={"relative p-4 rounded-2xl bg-zinc-800 hover:bg-zinc-700/50 active:bg-zinc-700/60 ring-1 ring-inset ring-zinc-50/5 transition-colors"+classes}>
//       <figure className="img-box aspect-square rounded-lg mb-4">
//         <img src={imgSrc} alt={title} loading="lazy" className="img-cover" />
//       </figure>
//       <div className="flex items-center justify-between gap-4">
//         <div>
//           <h3 className="title-1 mb-3">{title}</h3>
//           <div className="flex flex-wrap items-center gap-2">
//             {tags.map((label, key) => (
//               <span
//               key={key}
//               className="h-8 text-sm text-zinc-400 bg-zinc-50/5 grid items-center px-3 rounded-lg">
//                 {label}
//               </span>
//             ))}
//           </div>
//         </div>

//         <div className="w-11 h-11 rounded-lg grid place-items-center bg-white text-zinc-950 shrink-0">
//             <span className="material-symbols-rounded" aria-hidden="true">
//                 arrow_outward
//             </span>
//         </div>
//       </div>
//       <a href={projectLink} target="_blank" className="absolute inset-0"></a>
//     </div>
//   );
// };

// ProjectCard.protoTypes = {
//   imgSrc: PropTypes.string.isRequired,
//   title: PropTypes.string.isRequired,
//   tags: PropTypes.array.isRequired,
//   projectLink: PropTypes.string,
//   classes: PropTypes.string,
// };

const ROTATION_RANGE = 32.5;
const HALF_ROTATION_RANGE = 32.5 / 2;

const ProjectCard = ({ imgSrc, title, tags, projectLink, classes }) => {
  const ref = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const xSpring = useSpring(x);
  const ySpring = useSpring(y);

  const transform = useMotionTemplate`rotateX(${xSpring}deg) rotateY(${ySpring}deg)`;

  const handleMouseMove = (e) => {
    if (!ref.current) return [0, 0];

    const rect = ref.current.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = (e.clientX - rect.left) * ROTATION_RANGE;
    const mouseY = (e.clientY - rect.top) * ROTATION_RANGE;

    const rX = (mouseY / height - HALF_ROTATION_RANGE) * -1;
    const rY = mouseX / width - HALF_ROTATION_RANGE;

    x.set(rX);
    y.set(rY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  ProjectCard.protoTypes = {
    imgSrc: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    tags: PropTypes.array.isRequired,
    projectLink: PropTypes.string,
    classes: PropTypes.string,
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transformStyle: "preserve-3d",
        transform,
      }}
      className="h-96 w-84 rounded-md bg-gradient-to-br from-zinc-600 to-zinc-300"
    >
      <div
        style={{
          transform: "translateZ(30px)",
          transformStyle: "preserve-3d",
        }}
        className="absolute inset-4 grid place-content-center rounded-md bg-white shadow-lg p-1"
      >
        <figure className="img-box aspect-auto rounded-lg mb-4 border-solid border-zinc-200 border-2" style={{ position: "relative" }}>
          <img src={imgSrc} alt={title} loading="lazy" className="img-cover mt-" />
        </figure>
        <div className="flex items-center justify-between gap-4" style={{ position: "relative" }}>
          <div>
            <h4 className="title-1 mb-3 text-black">{title}</h4>
            <div className="flex flex-wrap items-center gap-2 mb-2">
              {tags.map((label, key) => (
                <span
                  key={key}
                  className="h-8 text-sm text-black bg-zinc-50/5 grid items-center px-3 rounded-lg border-solid border-zinc-200 border-2"
                >
                  {label}
                </span>
              ))}
            </div>
          </div>

          {/* <div className="w-11 h-11 grid place-items-center bg-zinc-500 text-white shrink-0 rounded-lg border-solid border-zinc-500 border-2 mt-5 hover:text-zinc-500 hover:bg-white"> */}
          <div className="w-11 h-11 grid place-items-center bg-zinc-500 text-white shrink-0 rounded-lg border-solid border-zinc-500 border-2 mt-5 ">
            <span className="material-symbols-rounded" aria-hidden="true">
              arrow_outward
            </span>
          </div>
        </div>
        <a href={projectLink} target="_blank" className="absolute inset-0"></a>
        {/* <FiMousePointer
          style={{
            transform: "translateZ(75px)",
          }}
          className="mx-auto text-4xl"
        />
        <p
          style={{
            transform: "translateZ(50px)",
          }}
          className="text-center text-2xl font-bold"
        >
          HOVER ME
        </p> */}
      </div>
    </motion.div>
  );
};

export default ProjectCard;
