import React from "react";
import md5 from "crypto-js/md5";
import Image from "next/image";

import { isValidEmail } from "@fn/regexUtils";

interface GravatarProps {
  email: string;
}

const Gravatar: React.FC<GravatarProps> = ({ email }) => {
  if (!isValidEmail(email)) {
    return;
  }

  const hash = md5(email.trim().toLowerCase());
  const url = `https://www.gravatar.com/avatar/${hash}`;

  return (
    <Image
      src={url}
      alt="Descripción de la imagen"
      width={80}
      height={80}
      priority
    />
  );
};

export default Gravatar;
