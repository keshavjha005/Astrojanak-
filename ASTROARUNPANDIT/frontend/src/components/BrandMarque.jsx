import React from 'react';
import Marquee from 'react-fast-marquee';

const logosLeftToRight = [
  'https://astroarunpandit.org/wp-content/uploads/2024/08/Group-3141.png',
  'https://astroarunpandit.org/wp-content/uploads/2024/08/Group-3141.png',
  'https://astroarunpandit.org/wp-content/uploads/2024/08/Group-3138.png',
  'https://astroarunpandit.org/wp-content/uploads/2024/08/Group-3137.png',
  'https://astroarunpandit.org/wp-content/uploads/2024/08/Group-3142.png',
  'https://astroarunpandit.org/wp-content/uploads/2024/08/Group-3139.png',
  'https://astroarunpandit.org/wp-content/uploads/2024/08/Group-3140.png',
];

const logosRightToLeft = [
  'https://astroarunpandit.org/wp-content/uploads/2024/08/Group-3132.png',
  'https://astroarunpandit.org/wp-content/uploads/2024/08/Group-3131.png',
  'https://astroarunpandit.org/wp-content/uploads/2024/09/channels4_profile-2.png',
  'https://astroarunpandit.org/wp-content/uploads/2024/09/tedx4450.png',
  'https://astroarunpandit.org/wp-content/uploads/2024/09/channels4_profile.png',
  'https://astroarunpandit.org/wp-content/uploads/2024/09/channels4_profile-1.png',
  'https://astroarunpandit.org/wp-content/uploads/2024/08/Group-3136.png',
  'https://astroarunpandit.org/wp-content/uploads/2024/08/Group-3135.png',
  'https://astroarunpandit.org/wp-content/uploads/2024/08/Group-3134.png',
  'https://astroarunpandit.org/wp-content/uploads/2024/08/Group-3133.png',
];

export default function BrandMarquees() {
  return (
    <div className="bg-white py-8 px-4 sm:px-6 lg:px-12">
      {/* Left to Right Marquee */}
      <Marquee speed={30} gradient={false}>
        {logosLeftToRight.map((logo, index) => (
          <img
            key={index}
            src={logo}
            alt={`Brand LTR ${index}`}
            className="h-8 sm:h-10 md:h-12 lg:h-14 xl:h-16 mx-4 sm:mx-6 object-contain"
          />
        ))}
      </Marquee>

      {/* Right to Left Marquee */}
      <Marquee speed={30} gradient={false} direction="right" className="mt-6">
        {logosRightToLeft.map((logo, index) => (
          <img
            key={index}
            src={logo}
            alt={`Brand RTL ${index}`}
            className="h-10 sm:h-12 md:h-14 lg:h-16 xl:h-20 mx-4 sm:mx-6 object-contain"
          />
        ))}
      </Marquee>
    </div>
  );
}
