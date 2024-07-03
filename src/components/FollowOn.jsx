import {FaInstagram, FaLinkedinIn, FaXTwitter, FaYoutube} from "react-icons/fa6";

const FollowOn = () => {
  return (
    <div
      className="faded-text pt-2" //custom - faded-text
    >
      <span>Follow on:</span>
      <div className="flex gap-4 pt-3">
        <a href="https://www.linkedin.com/in/sagar-chhetri-2a3731278?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B4cVP3smxQiqmgkhou00YEQ%3D%3D">
          <FaLinkedinIn size={20} />
        </a>
        <a href="https://www.instagram.com/roadsidecoderhttps://www.instagram.com/oye.chhetri?igsh=dG9maXJ3bHQyeTdv">
          <FaInstagram size={20} />
        </a>
        <a href="https://www.twitter.com/piyush_eon">
          <FaXTwitter size={20} />
        </a>
      </div>
    </div>
  );
};

export default FollowOn;