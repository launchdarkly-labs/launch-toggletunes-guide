import styles from "@styles/index.module.css";
import { Copy } from 'lucide-react';
import {motion} from 'framer-motion'

export const copyClip = async (value) => {
  await navigator.clipboard.writeText(value);
};

export default function CopyField({ value }) {
  return (
    <div>
      <motion.button
        whileTap={{ scale: 1.2 }}
        whileHover={{ scale: 0.9 }}
        className="ml-2 px-3 py-1 buttons3 rounded inline-flex items-center cursor-pointer"
        onClick={(e) => copyClip(value)}
      >
        {value} <Copy size={16} className="ml-2" />
      </motion.button>
    </div>
  );
}
