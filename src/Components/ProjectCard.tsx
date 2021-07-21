import { AnimateSharedLayout, motion } from "framer-motion";
import { useState } from "react";
import { Paper } from "@material-ui/core";
import "../Styling/project-card.css";

const Card = ({ title }: { title: string }) => {
  const [open, setOpen] = useState(false);
  return (
    <AnimateSharedLayout>
      {open ? (
        /* EXPANDED CARD */
        <motion.div
          onClick={() => setOpen(false)}
          className="expanded-card"
          layoutId="expandable-card"
          layout
          transition={{
            layoutX: { delay:0.1, duration: 0.2 },
            layoutY: { duration: 0.2 },
          }}
        >
          <motion.h2
            className="expanded-card-h"
            layoutId="expandable-card-h"
            layout
            transition={{
              layoutX: { duration: 0.2 },
              layoutY: { duration: 0.2 },
            }}
          >
            {title}
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
        <Paper elevation={3}>
          <motion.div
            onClick={() => setOpen(true)}
            className="normal-card"
            layoutId="expandable-card"
            layout
            transition={{
              layoutX: { duration: 0.3 },
              layoutY: { delay: 0.2, duration: 0.3 },
            }}
          >
            <motion.h1
              layout
              layoutId="expandable-card-h"
              transition={{
                layoutX: { duration: 0.2 },
                layoutY: { duration: 0.2 },
              }}
            >
              {title}
            </motion.h1>
          </motion.div>
        </Paper>
      )}
    </AnimateSharedLayout>
  );
};

export default Card;
