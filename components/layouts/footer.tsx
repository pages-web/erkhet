import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import ErxesLogo from "./erxes-logo";

const Footer = () => {
  return (
    <div className="bg-stone-950 text-primary py-4 text-sm pb-32 md:py-4">
      <div className="container flex items-center justify-between">
        <div>
          © {new Date().getFullYear()} <span>Noorog</span>
        </div>
        <div className="inline-flex items-center group">
          <Button
            className="px-1 text-primary hover:no-underline font-normal h-7"
            variant="link"
            asChild
          >
            <Link href="https://erxes.mn/">
              Powered by
              <ErxesLogo className="ml-1 h-7 w-14 fill-primary" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
