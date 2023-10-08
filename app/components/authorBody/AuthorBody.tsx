"use client";
import React, { useState } from "react";
import authorBody from "./authorBody.module.scss";
import { Button } from "@radix-ui/themes";
import AuthorCards from "../authorCard/AuthorCards";

const AuthorCard: React.FunctionComponent<any> = ({ data }) => {
  const [hardCoverOnly, setHardCoverOnly] = useState(false);

  const handleHardCoverClick = () => {
    setHardCoverOnly(true);
  };

  const handleGetBooksClick = () => {
    setHardCoverOnly(false);
  };

  return (
    <div className={authorBody.card}>
      <div className={authorBody.cardDetails}>
        <div className={authorBody.books}>
          <AuthorCards data={data} gender="Male" hardcover={hardCoverOnly} />
          <AuthorCards data={data} gender="Female" hardcover={hardCoverOnly} />
        </div>
        <div className={authorBody.bottom}>
          <div className={authorBody.buttonContainer}>
            <Button
              style={{ textDecoration: "underline" }}
              variant="ghost"
              onClick={handleHardCoverClick}
            >
              Hardcover only
            </Button>
            <Button onClick={handleGetBooksClick}>Get Books</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthorCard;
