import { AnimateSharedLayout, motion } from "framer-motion";
import { useState } from "react";
import "../Styling/project-card.css";

const Card = ({ title, backgroundColor }: { title: string, backgroundColor: string }) => {
  const [open, setOpen] = useState(false);
  return (
    <AnimateSharedLayout>
      {open ? (
        /* EXPANDED CARD */
        <motion.div
          onClick={() => setOpen(false)}
          className="expanded-card"
          layoutId="expandable-card"
          style={{ background: backgroundColor }}
        >
          <motion.h2 className="expanded-card-h" layoutId="expandable-card-h">
            Expanded {title}
          </motion.h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
            aliquam molestiae ratione sint magnam sequi fugiat u llam earum
            distinctio fuga iure, ad odit repudiandae modi est alias ipsum
            aperiam. Culpa?
          </p>
        </motion.div>
      ) : (
        /* NORMAL CARD */
        <motion.div
          onClick={() => setOpen(true)}
          className="normal-card"
          layoutId="expandable-card"
          style={{ background: backgroundColor }}
        >
          <motion.h1 layoutId="expandable-card-h">{title}</motion.h1>
        </motion.div>
      )}
    </AnimateSharedLayout>
  );
};

export default Card;
