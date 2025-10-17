import { cn } from "@/lib/utils";
import { IconLayoutNavbarCollapse } from "@tabler/icons-react";
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
   - Wrapper component that renders both Desktop and Mobile docks
   - Receives mainItems (left nav) and socialItems (right nav)
   - Can accept custom classNames for desktop and mobile styling
*/
export const FloatingDock = ({
  mainItems,
  socialItems,
  desktopClassName,
  mobileClassName,
}) => {
  return (
    <>
      {/* Desktop dock (visible on md and above screens) */}
      <FloatingDockDesktop
        mainItems={mainItems}
        socialItems={socialItems}
        className={desktopClassName}
      />

      {/* Mobile dock (visible on small screens) */}
      <FloatingDockMobile
        items={[...mainItems, ...socialItems]} // Combine all items for mobile display
        className={mobileClassName}
      />
    </>
  );
};

/* 🧩 Desktop Dock
   - Left side: main navigation items
   - Right side: social navigation items
   - Divider line "|" separates main and social items
   - Uses framer-motion for hover animation effects based on mouse distance
*/
const FloatingDockDesktop = ({ mainItems, socialItems, className }) => {
  const mouseX = useMotionValue(Infinity); // Track mouse X position globally

  return (
    <motion.div
      onMouseMove={(e) => mouseX.set(e.pageX)} // Update mouse X when moving over dock
      onMouseLeave={() => mouseX.set(Infinity)} // Reset when mouse leaves dock
      className={cn(
        "mx-auto hidden h-16 items-end gap-4 rounded-2xl bg-neutral-900 px-4 pb-3 md:flex",
        className
      )}
    >
      {/* Render main nav items on the left */}
      {mainItems.map((item) => (
        <IconContainer mouseX={mouseX} key={item.title} {...item} />
      ))}

      {/* Divider line "|" between main and social items */}
      <div className="h-8 w-px bg-neutral-700 mx-2" />

      {/* Render social items on the right */}
      {socialItems.map((item) => (
        <IconContainer mouseX={mouseX} key={item.title} {...item} />
      ))}
    </motion.div>
  );
};

/* 🧩 Mobile Dock
   - Collapsible vertical dock for small screens
   - All nav items stacked vertically when open
   - Animate items with staggered effect using framer-motion
*/
const FloatingDockMobile = ({ items, className }) => {
  const [open, setOpen] = useState(false); // Track if mobile dock is open

  return (
    <div className={cn("relative block md:hidden", className)}>
      {/* AnimatePresence handles enter/exit animations */}
      <AnimatePresence>
        {open && (
          <motion.div
            layoutId="nav"
            className="absolute inset-x-0 bottom-full mb-2 flex flex-col gap-2"
          >
            {items.map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 10 }} // Initial animation state
                animate={{ opacity: 1, y: 0 }} // Animate to visible
                exit={{
                  opacity: 0,
                  y: 10,
                  transition: { delay: idx * 0.05 }, // Stagger exit
                }}
                transition={{ delay: (items.length - 1 - idx) * 0.05 }} // Stagger enter
              >
                <Link
                  to={item.href}
                  className="flex h-10 w-10 items-center justify-center rounded-full 
                             bg-neutral-900 hover:bg-neutral-800 transition-colors duration-200"
                >
                  <div className="h-4 w-4 text-white">{item.icon}</div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Button to toggle mobile dock open/close */}
      <button
        onClick={() => setOpen(!open)}
        className="flex h-10 w-10 items-center justify-center rounded-full 
                   bg-neutral-900 hover:bg-neutral-800 transition-colors duration-200"
      >
        <IconLayoutNavbarCollapse className="h-5 w-5 text-white" />
      </button>
    </div>
  );
};

/* 🧩 IconContainer
   - Handles individual icon behavior
   - Animates icon size based on distance from mouse cursor
   - Shows tooltip with item title on hover
*/
function IconContainer({ mouseX, title, icon, href }) {
  const ref = useRef(null); // Reference to DOM element for distance calculation

  // Calculate distance of mouse from center of icon
  const distance = useTransform(mouseX, (val) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  // Map distance to size of the container (bigger when closer)
  const widthTransform = useTransform(distance, [-80, 0, 80], [40, 55, 40]);
  const heightTransform = useTransform(distance, [-80, 0, 80], [40, 55, 40]);

  // Map distance to size of the icon itself
  const widthTransformIcon = useTransform(distance, [-80, 0, 80], [20, 26, 20]);
  const heightTransformIcon = useTransform(
    distance,
    [-80, 0, 80],
    [20, 26, 20]
  );

  // Smooth size animation using spring physics
  const width = useSpring(widthTransform, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });
  const height = useSpring(heightTransform, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });
  const widthIcon = useSpring(widthTransformIcon, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });
  const heightIcon = useSpring(heightTransformIcon, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  const [hovered, setHovered] = useState(false); // Track hover for tooltip

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
        {/* Tooltip that appears on hover */}
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

        {/* The icon itself */}
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
