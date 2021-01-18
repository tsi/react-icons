import toast from "cogo-toast";
import copy from "copy-to-clipboard";
import React from "react";

function Icon({ icon, name, highlightPattern = null }) {
  const copyToClipboard = () => {
    const importStr = `import { ${name} } from 'react-icons/${name.substring(0, 2).toLowerCase()}'`;
    copy(importStr);
    toast.success(`Copied '${importStr}' to clipboard`, {
      position: "bottom-center"
    });
  };

  const highlightedName = () => {
    if (highlightPattern)
      return name
        .split(highlightPattern)
        .map((part) => (part.match(highlightPattern) ? <b>{part}</b> : part));
    return name;
  };

  return (
    <div className="item" tabIndex={0} onClick={copyToClipboard} key={name}>
      <div className="icon h2">{typeof icon === "function" && icon()}</div>
      <div className="name">{highlightedName()}</div>
    </div>
  );
}

export default Icon;
