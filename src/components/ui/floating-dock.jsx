import { cn } from "@/lib/utils";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";

/* 🧩 FloatingDock
   - Same structure for all screen sizes now
   - Mobile dock removed so the desktop design works responsively
*/
export const FloatingDock = ({
  mainItems,
  socialItems,
  desktopClassName,
  mobileClassName, // kept for compatibility
}) => {
  return (
    <>
      {/* ✅ Only one version of dock now (works on all screens) */}
      <FloatingDockDesktop
        mainItems={mainItems}
        socialItems={socialItems}
        className={cn(desktopClassName, "fixed bottom-4 left-1/2 -translate-x-1/2 z-50 w-fit px-4")}
      />
    </>
  );
};

/* 🧩 Desktop Dock (Now universal)
   - No hidden on mobile (removed `hidden md:flex`)
   - Added responsive sizing and padding for small screens
*/
const FloatingDockDesktop = ({ mainItems, socialItems, className }) => {
  const mouseX = useMotionValue(Infinity); // Track mouse X position globally

  return (
    <motion.div
      onMouseMove={(e) => mouseX.set(e.pageX)}
      onMouseLeave={() => mouseX.set(Infinity)}
      className={cn(
        // 🪄 Removed `hidden md:flex` to make it visible on mobile too
        // 🪄 Added responsive gap, padding, and rounded style
        "mx-auto flex h-14 sm:h-16 items-end gap-2 sm:gap-4 rounded-2xl bg-neutral-900 px-3 sm:px-4 pb-2 sm:pb-3 shadow-lg",
        className
      )}
    >
      {/* Main nav items */}
      {mainItems.map((item) => (
        <IconContainer mouseX={mouseX} key={item.title} {...item} />
      ))}

      {/* Divider line */}
      <div className="h-6 sm:h-8 w-px bg-neutral-700 mx-1 sm:mx-2" />

      {/* Social items */}
      {socialItems.map((item) => (
        <IconContainer mouseX={mouseX} key={item.title} {...item} />
      ))}
    </motion.div>
  );
};

/* 🧩 Removed Mobile Dock
   ❌ Entire FloatingDockMobile removed since we want same design across devices
*/

/* 🧩 IconContainer
   - Scales icons slightly smaller for mobile screens
   - Everything else same as before
*/
function IconContainer({ mouseX, title, icon, href }) {
  const ref = useRef(null);

  const distance = useTransform(mouseX, (val) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  // ✅ Adjusted transform sizes for better mobile fitting
  const widthTransform = useTransform(distance, [-80, 0, 80], [35, 50, 35]);
  const heightTransform = useTransform(distance, [-80, 0, 80], [35, 50, 35]);
  const widthTransformIcon = useTransform(distance, [-80, 0, 80], [18, 24, 18]);
  const heightTransformIcon = useTransform(distance, [-80, 0, 80], [18, 24, 18]);

  const width = useSpring(widthTransform, { mass: 0.1, stiffness: 150, damping: 12 });
  const height = useSpring(heightTransform, { mass: 0.1, stiffness: 150, damping: 12 });
  const widthIcon = useSpring(widthTransformIcon, { mass: 0.1, stiffness: 150, damping: 12 });
  const heightIcon = useSpring(heightTransformIcon, { mass: 0.1, stiffness: 150, damping: 12 });

  const [hovered, setHovered] = useState(false);

  return (
    <Link to={href}>
      <motion.div
        ref={ref}
        style={{ width, height }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="relative flex aspect-square items-center justify-center 
                   rounded-full bg-neutral-800 hover:bg-neutral-700 transition-colors duration-200"
      >
        {/* Tooltip */}
        <AnimatePresence>
          {hovered && (
            <motion.div
              initial={{ opacity: 0, y: 10, x: "-50%" }}
              animate={{ opacity: 1, y: 0, x: "-50%" }}
              exit={{ opacity: 0, y: 2, x: "-50%" }}
              className="absolute -top-8 left-1/2 w-fit rounded-md border border-neutral-700 
                         bg-neutral-800 px-2 py-0.5 text-xs whitespace-pre text-white"
            >
              {title}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Icon */}
        <motion.div
          style={{ width: widthIcon, height: heightIcon }}
          className="flex items-center justify-center text-white"
        >
          {icon}
        </motion.div>
      </motion.div>
    </Link>
  );
}
