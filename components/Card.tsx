import React from "react";
import { Card, CardHeader, CardBody } from "@nextui-org/card";
import { Image } from "@nextui-org/image";
import ProfileImage from "../public/profileImage2.jpg";
import {
  Phone,
  MailOpen,
  Globe,
  Twitter,
  Linkedin,
  Facebook,
  Instagram,
} from "lucide-react";
import { Link } from "@nextui-org/link";

export default function CardComponent() {
  return (
    <Card className="py-4 ">
      <Image
        alt="Card background"
        className="object-cover rounded-xl"
        src={ProfileImage.src}
        width={270}
      />
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <h4 className="font-bold text-large">
          Utkarsh Madhu
          <small className="text-default-500 font-thin">(for him)</small>
        </h4>
        <p className="text-tiny uppercase font-bold"></p>
        <p className="text-tiny uppercase font-bold">
          Founder and Director of Agriwyz
        </p>
      </CardHeader>
      <CardBody className="overflow-visible py-2 ">
        <div className="mt-2">
          <div className="flex items-center justify-start space-x-2">
            <Phone size={18} strokeWidth={2.25} />
            <h2 className="text-sm font-mono">+91 96649 03466</h2>
          </div>
          <div className="flex items-center justify-start space-x-2">
            <MailOpen size={18} strokeWidth={2.25} />
            <h2 className="text-sm font-mono">utkarhs@agriwyz.com</h2>
          </div>
          <div className="flex items-center justify-start space-x-2">
            <Globe size={18} strokeWidth={2.25} />
            <h2 className="text-sm font-mono">
              <Link
                href="https://agriwyz.com/"
                className="text-sm font-mono text-decoration-color none "
              >
                https://agriwyz.com/
              </Link>
            </h2>
          </div>
        </div>
        <div className="w-full flex items-center flex-col justify-center mt-2">
          <h1 className="text-lg my-2">Connct with me on</h1>
          <div className="flex items-center justify-center space-x-3">
            <Link href="https://twitter.com/agriwyz" target="_blank">
              <Twitter color="#1da1f2" size={22} />
            </Link>
            <Link
              target="_blank"
              href="https://in.linkedin.com/company/agriwyz"
            >
              <Linkedin color="#0a66c2" size={22} />
            </Link>
            <Link target="_blank" href="https://agriwyz.com/">
              <Globe color="#7cc242" size={22} />
            </Link>
            <Link target="_blank" href="https://www.facebook.com/Agriwyz/">
              <Facebook color="#0866ff" size={22} />
            </Link>
            <Link target="_blank" href="https://www.instagram.com/agriwyz/">
              <Instagram color="#bd34aa" size={22} />
            </Link>
          </div>
        </div>
      </CardBody>
    </Card>
  );
}
