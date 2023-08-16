import React from "react";
import Image from "next/image";
import P9Image from "./P9s.jpg";
import P10Image from "./P10s.jpg";
import P11Image from "./P11s.jpg";
import P12p1Image from "./P12p1.jpg";
import P12p2Image from "./P12p2.jpg";
import Link from "next/link";

const page = () => {
  return (
    <div className="container mx-auto p-6 grid grid-cols-3 gap-4">
      {/* P9S Card */}
      <Link href={"/Savage/P9S"}>
        <div className="max-w-sm rounded overflow-hidden shadow-lg ">
          <Image
            className="w-full h-60 object-fill"
            src={P9Image}
            alt="P9S"
            placeholder="blur"
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">P9S</div>
            <p className="text-gray-700 text-base">
              Anabaseios The Ninth Circle (Savage)
            </p>
          </div>
        </div>
      </Link>

      {/* P10S Card */}
      <Link href={"/Savage/P10S"}>
        <div className="max-w-sm rounded overflow-hidden shadow-lg ">
          <Image
            className="w-full h-60 object-fill"
            src={P10Image}
            alt="P9S"
            placeholder="blur"
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">P10S</div>
            <p className="text-gray-700 text-base">
              Anabaseios The Tenth Circle (Savage)
            </p>
          </div>
        </div>
      </Link>

      {/* P11S Card */}
      <Link href={"/Savage/P11S"}>
        <div className="max-w-sm rounded overflow-hidden shadow-lg ">
          <Image
            className="w-full h-60 object-fill"
            src={P11Image}
            alt="P11S"
            placeholder="blur"
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">P11S</div>
            <p className="text-gray-700 text-base">
              Anabaseios The Eleventh Circle (Savage)
            </p>
          </div>
        </div>
      </Link>

      {/* P12p1 Card */}
      <Link href={"/Savage/P12Sp1"}>
        <div className="max-w-sm rounded overflow-hidden shadow-lg ">
          <Image
            className="w-full h-60 object-fill"
            src={P12p1Image}
            alt="P12Sp1"
            placeholder="blur"
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">P12Sp1</div>
            <p className="text-gray-700 text-base">
              Anabaseios The Twelth Circle Part 1 (Savage)
            </p>
          </div>
        </div>
      </Link>

      {/* P12p2 Card */}
      <Link href={"/Savage/P12Sp2"}>
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
          <Image
            className="w-full h-60 object-fill"
            src={P12p2Image}
            alt="P12Sp2"
            placeholder="blur"
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">P12Sp2</div>
            <p className="text-gray-700 text-base">
              Anabaseios The Twelth Circle Part 2 (Savage)
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default page;
