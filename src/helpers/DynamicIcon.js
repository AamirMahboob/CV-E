import React from "react";
import * as TfIcons from "react-icons/tfi"; // Themefisher Icons
import * as BsIcons from "react-icons/bs"; // Bootstrap Icons

const iconLibraries = {
  tfi: TfIcons, // Themefisher Icons
  bs: BsIcons, // Bootstrap Icons
};

const DynamicIcon = ({ icon, ...props }) => {
  const libraryKey = icon.split("-")[0]; // Holt den Prefix, z.B. "tfi" aus "tfi-home"
  const IconLibrary = iconLibraries[libraryKey]; // Holt das richtige Icon-Set
  const IconComponent = IconLibrary ? IconLibrary[icon] : null; // Holt das Icon

  if (!IconComponent) {
    return <span className="text-sm">⚠️ Icon not found</span>;
  }

  return <IconComponent {...props} />;
};

export default DynamicIcon;
