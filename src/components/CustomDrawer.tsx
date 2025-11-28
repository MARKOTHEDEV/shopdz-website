import React, { useEffect } from "react";

interface CustomDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  className?: string;
  overlayClassName?: string;
  position?: "left" | "right";
  width?: string;
  fullWidth?: boolean;
}

const CustomDrawer: React.FC<CustomDrawerProps> = ({
  isOpen,
  onClose,
  children,
  className = "",
  overlayClassName = "",
  position = "right",
  width = "480px",
  fullWidth = false,
}) => {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const positionClasses =
    position === "right" ? "right-0 translate-x-0" : "left-0 -translate-x-0";

  const drawerWidth = fullWidth ? "100vw" : width;

  return (
    <div className="fixed inset-0 z-50">
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 ${overlayClassName}`}
        onClick={onClose}
      />

      {/* Drawer */}
      <div
        className={`
          fixed top-0 bottom-0 ${positionClasses}
          bg-white shadow-xl
          transform transition-transform duration-300 ease-out
          overflow-y-auto
          ${className}
        `}
        style={{ width: drawerWidth }}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
};

export default CustomDrawer;
