import React from 'react';
import Image from 'next/image';
import {
  IoLogoYoutube,
} from 'react-icons/io';
import {
  FaFacebookSquare,
  FaInstagram,
  FaLinkedin,
  FaPinterestP,
  FaTwitter,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="container mx-auto px-4 py-10">
      {/* Logo */}
      <div className="mb-8">
        <Image
          src="/imges/img8.png"
          alt="Logo"
          width={200}
          height={200}
          className="object-cover"
        />
      </div>

      {/* Grid Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 text-sm leading-10">
        {/* Column 1 */}
        <div className="flex flex-col space-y-2">
  <p className="font-bold mb-2">COMPANY</p>
  <a href="/">Home</a>
  <a href="/">About</a>
  <a href="/">Contact</a>
</div>


        {/* Column 2 */}
        <div>
          <p className="font-bold mb-2">OUR PRODUCTS</p>
          <p>Mitochondrial Health</p>
          <p>Digestive Health</p>
          <p>Protein Shakes</p>
          <p>Rejuvenating Healthy Coffee</p>
          <p>Luxury Skin and Hair Care</p>
        </div>

        {/* Column 3 */}
        <div>
          <p className="font-bold mb-2">PARTNER PROGRAM</p>
          <p>Join Our Team</p>
          <p>Track Order</p>
        </div>

        {/* Column 4 */}
        <div>
          <p className="font-bold mb-2">LEGAL</p>
          <p>Shipping Policy</p>
          <p>Terms and Conditions</p>
          <p>Policies and Procedures</p>
          <p>Refund Policy</p>
          <p>Cancellation Policy</p>
        </div>

        {/* Column 5 - Socials & Copyright */}
        <div>
          <div className="flex flex-wrap gap-3 mb-4 text-[1rem] px-8 ">
            <FaPinterestP />
            <IoLogoYoutube />
            <FaLinkedin />
            <FaInstagram />
            <FaTwitter />
            <FaFacebookSquare />
          </div>

          <Image
            src="/imges/img20.jpg"
            alt="Footer"
            width={200}
            height={200}
            className="object-cover mb-4"
          />

          <p>Copyright © 2023 | Ambrosia</p>
          <p>Global LLC</p>
          <p>All Rights Reserved</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
