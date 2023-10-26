import { motion } from "framer-motion";
import { useRef } from "react";
import { useFollowPointer } from "./use-follow-pointer";
  
const Tracker = () => {
  
  const ref = useRef(null);
  const { x, y } = useFollowPointer(ref);


  return (
    <motion.div
    className='w-[15px] h-[15px] bg-[#F6FA70] rounded-2xl fixed'
      ref={ref}
      animate={{ x, y }}
      transition={{type:"spring", stiffness:50 , mass:0.5, restDelta:0.0001, damping:5}}
    >
    </motion.div>
  );
}

export default Tracker;



