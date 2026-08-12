import React from "react";
import Container from "../ui/Container";
import Button from "../ui/Button";
import { footerData, icons } from "@/data/footer";
import Link from "next/link";
import { FooterLogo } from "../ui/SocialIcons";
import { Send } from "../ui/Send";

const Footer = () => {
  return (
    <footer className="mt-15 flex flex-col justify-center bg-[#F5F7FA] sm:mt-0">
      {/* ================= CTA SECTION ================= */}
      <div className="mx-auto w-full max-w-100 px-4 text-center sm:max-w-125 md:max-w-221.75">
        <div className="py-8 text-center text-[32px] font-semibold leading-tight text-[#263238] sm:text-[48px] md:text-[64px]">
          Pellentesque suscipit fringilla libero eu.
        </div>

        <Button
          className="mx-auto mb-8 flex gap-2 text-white!"
          href="/get-demo"
        >
          Get a Demo
          <img src="/RightArrow.png" alt="" />
        </Button>
      </div>

      {/* ================= FOOTER ================= */}
      <div className="bg-[#263238] text-[#F5F7FA]">
        <Container>
          <div
            className="
              flex flex-col
              gap-12
              py-10
              lg:flex-row
              lg:items-start
              lg:justify-between
              lg:gap-31.25
            "
          >
            {/* ================= LEFT SIDE ================= */}
            <div className="flex shrink-0 flex-col max-w-87.5">
              {/* Logo */}
              <Link href="/" aria-label="Nexcent home" className="text-white">
                <FooterLogo />
              </Link>

              {/* Copyright */}
              <div className="mt-8 flex flex-col gap-2 text-sm">
                <p>Copyright © 2020 Nexcent ltd.</p>
                <p>All rights reserved</p>
              </div>
              <div className="flex gap-4 pt-10">
                {/* Social Icons */}
                {icons.map((icon) => {
                  const Icon = icon.logo;

                  return (
                    <a key={icon.id} href={icon.href}>
                      <Icon />
                    </a>
                  );
                })}
              </div>
            </div>
            {/* ================= RIGHT SIDE ================= */}
            <div
              className="
                grid
                grid-cols-1
                gap-10
                sm:grid-cols-2
                lg:grid-cols-3
                lg:gap-7.5
              "
            >
              {/* Company */}
              <div>
                <h2 className="pb-2 text-[20px] font-semibold text-white!">
                  Company
                </h2>

                <div className="mt-4 flex flex-col gap-3">
                  {footerData.company.map((item) => (
                    <a
                      href="#"
                      key={item}
                      className="text-sm transition-colors hover:text-[#4CAF4F]"
                    >
                      {item}
                    </a>
                  ))}
                </div>
              </div>

              {/* Support */}
              <div>
                <h2 className="pb-2 text-[20px] font-semibold text-white!">
                  Support
                </h2>

                <div className="mt-4 flex flex-col gap-3">
                  {footerData.support.map((item) => (
                    <a
                      href="#"
                      key={item}
                      className="text-sm transition-colors hover:text-[#4CAF4F]"
                    >
                      {item}
                    </a>
                  ))}
                </div>
              </div>

              {/* Stay Up To Date */}
              <div>
                <h3 className="pb-2 text-[20px] font-semibold text-white!">
                  Stay up to date
                </h3>

                <div className="relative mt-6 w-full max-w-63.75">
                  <div className="relative mt-6 w-full max-w-63.75">
                    <input
                      type="email"
                      placeholder="Your email address"
                      className="w-full rounded-lg bg-white/10 px-4 py-3 pr-12 text-sm text-white outline-none placeholder:text-[#D9DBE1]"
                    />

                    <div className="absolute cursor-pointer right-4 top-1/2 -translate-y-1/2">
                      <Send />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;
