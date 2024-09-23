"use client";

import React from "react";
import Link from "next/link";

import Image from "next/image";

const Links = () => {
  return (
    <div className="flex flex-col items-center text-center justify-center min-h-screen bg-[#f5f5f5] p-4 berkeley">
      <div className="w-full max-w-md">
        <div className="flex justify-center mb-4">
          <Image
            src="https://i.ibb.co.com/wNDtF9V/FALLEN-ANGEL-web.png"
            sizes="100vw"
            style={{
              width: "30%",
              height: "auto",
            }}
            width={250}
            height={250}
            alt="einclair cross"
            className="w-1/3 rounded-3xl max-[640px]:mb-5"
          />
        </div>

        <h1 className="text-2xl font-bold mb-2">einclair</h1>
        <p className="text-gray-600 mb-6">
          one-of-one fashion pieces handmade in Indonesia.
        </p>

        <p className="text-gray-600 mb-6 text-xs">
          ┈˃̶∘┈┈ - - ┈┈∘┈˃̶༒✳༒˂̶┈∘┈┈ - - ┈┈∘˂̶┈
        </p>

        <div className="flex flex-col mb-10">
          <div className="flex flex-col items-center mb-10">
            <p className="text-gray-600 mb-2">available on:</p>
            <div className="flex flex-col items-center">
              <div className="link">
                <a
                  id="link"
                  target="_blank"
                  href="https://shopee.co.id/einclairstudios"
                >
                  shopee
                </a>
              </div>
              <div className="link">
                <Link id="link" href="/comingsoon">
                  tokopedia
                </Link>
              </div>
              <div className="link">
                <Link id="link" href="/comingsoon">
                  whatsapp
                </Link>
              </div>
              <div className="link">
                <a
                  id="link"
                  target="_blank"
                  href="https://instagram.com/einclair"
                >
                  instagram
                </a>
              </div>
            </div>
          </div>
        </div>
        <p className="text-gray-600 text-xs">
          © 2024, einclair, under exclusive license to riot revenger.
          <br /> all rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Links;
