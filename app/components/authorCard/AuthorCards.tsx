"use client";
import React, { FC } from "react";
import authorCard from "./authorCard.module.scss";

interface Props {
  data: AuthorType[];
  gender: string;
  hardcover?: boolean;
}

function sortArray(arr: BookType[]) {
  arr.sort(function (a, b) {
    const textA = a.name.toUpperCase();
    const textB = b.name.toUpperCase();
    return textA < textB ? -1 : textA > textB ? 1 : 0;
  });
}

const AuthorCards: FC<Props> = ({ ...props }) => {
  if (!props) {
    return;
  }

  const authors = props.data;
  const maleBooks: BookType[] = [];
  const femaleBooks: BookType[] = [];

  authors.forEach((author) => {
    if (author.gender === "Male") {
      if (author.books) {
        author.books.forEach((book) => {
          maleBooks.push(book);
        });
      }
    } else {
      if (author.books) {
        author.books.forEach((book) => {
          femaleBooks.push(book);
        });
      }
    }
  });

  sortArray(maleBooks);
  sortArray(femaleBooks);

  const gender = props.gender;
  const bookType = props.hardcover ? "Hardcover " : "";

  return (
    <div className={authorCard.allCards}>
      <p
        className={authorCard.heading}
      >{`${bookType}Books with ${gender} Owners`}</p>

      {gender === "Male" &&
        maleBooks.map((book, index) => {
          if (props.hardcover) {
            if (book.type !== "Hardcover") {
              return;
            }
          }
          return <p key={index}>{book.name}</p>;
        })}

      {gender === "Female" &&
        femaleBooks.map((book, index) => {
          if (props.hardcover) {
            if (book.type !== "Hardcover") {
              return;
            }
          }
          return <p key={index}>{book.name}</p>;
        })}
    </div>
  );
};

export default AuthorCards;
