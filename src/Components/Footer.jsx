import React from "react";
import { MdEmail } from "react-icons/md";
import { BiGitBranch } from "react-icons/bi";
import { FaDonate, FaGithub } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="footerr absolute bottom-0 left-0 py-[40px] px-[120px] flex justify-between text-xs">
      <div className="links_footer text-[#939A99] flex gap-10">
        <a href="#" className="footer_link">
          <MdEmail className="mdemail" />
          Contact
        </a>
        <a href="#" className="footer_link">
          <FaDonate className="fadonate" />
          Support
        </a>
        <a href="#" className="footer_link">
          <FaGithub className="fagithub" />
          GitHub
        </a>
      </div>
      <div className="version text-[#939A99]">
        <a href="#" className="footer_link">
          <BiGitBranch className="bitgitbranch" />
          v1.0
        </a>
      </div>
    </div>
  );
};

export default Footer;
