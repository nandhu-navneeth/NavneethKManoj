import { motion } from "framer-motion";

export function Background() {
  return (
    <div className="absolute inset-0 -z-10">
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      <motion.div
        className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,0,0,0)_0%,rgba(0,0,0,0.2)_100%)]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      />
      <div className="absolute inset-0 backdrop-blur-[100px]" />
    </div>
  );
}
