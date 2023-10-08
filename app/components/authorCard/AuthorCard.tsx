"use client";
import React from "react";
import Image from "next/image";
import authorCard from "./authorCard.module.scss";
import { Button } from "@radix-ui/themes";

const AuthorCard: React.FunctionComponent<any> = ({
  name,
  gender,
  age,
  books,
}) => {
  return (
    <div className={authorCard.card}>
      <div className={authorCard.cardDetails}>
        <p className={authorCard.title}>{name}</p>
        <p className={authorCard.information}>{gender}</p>
        <p className={authorCard.information}>{age}</p>
        <div className={authorCard.buttonContainer}></div>
        {/* <Button style={{ marginTop: "auto" }}>
          <a href={"https://agsteward.com.au/"}>Visit Website</a>
        </Button> */}
      </div>
    </div>
  );
};

export default AuthorCard;
