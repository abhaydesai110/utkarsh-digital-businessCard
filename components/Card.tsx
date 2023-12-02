import React from "react";
import { Card, CardHeader, CardBody } from "@nextui-org/card";
import { Image } from "@nextui-org/image";
import ProfileImage from "../public/profileImage.jpg";

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
        <p className="text-tiny uppercase font-bold">Daily Mix</p>
        <small className="text-default-500">12 Tracks</small>
        <h4 className="font-bold text-large">Frontend Radio</h4>
      </CardHeader>
      <CardBody className="overflow-visible py-2"></CardBody>
    </Card>
  );
}
