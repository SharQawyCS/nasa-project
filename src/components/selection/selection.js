import React, { useEffect } from "react";
import "./selection.css";
import { MdOutlineNoteAlt } from "react-icons/md";

const Selection = () => {
  useEffect(() => {
    const textElements = document.querySelectorAll(".text-element");
    const shareButton = document.querySelector("#share-btn");

    if (shareButton) {
      textElements.forEach((element) => {
        element.addEventListener("mouseup", handleMouseUp);
      });

      shareButton.addEventListener("click", handleShareClick);

      document.addEventListener("mousedown", handleMouseDown);

      return () => {
        textElements.forEach((element) => {
          element.removeEventListener("mouseup", handleMouseUp);
        });
        shareButton.removeEventListener("click", handleShareClick);
        document.removeEventListener("mousedown", handleMouseDown);
      };
    }
  }, []);

  function handleMouseUp(event) {
    setTimeout(() => {
      const highlightedText = window.getSelection().toString().trim();
      console.log(highlightedText);
      if (highlightedText.length) {
        const posX = event.pageX;
        const posY = event.pageY;
        const shareButton = document.querySelector("#share-btn");
        if (shareButton) {
          const buttonWidth = Number(
            getComputedStyle(shareButton).width.slice(0, -2)
          );
          const buttonHeight = Number(
            getComputedStyle(shareButton).height.slice(0, -2)
          );

          if (document.activeElement !== shareButton) {
            shareButton.style.left = `${posX - buttonWidth * 0.5}px`;
            shareButton.style.top = `${posY - buttonHeight * 1.25}px`;
            shareButton.style.display = "block";
            shareButton.classList.add("btnEntrance");
          } else {
            shareButton.style.left = `${posX - buttonWidth * 0.5}px`;
            shareButton.style.top = `${posY - buttonHeight * 0.5}px`;
          }
        }
      }
    }, 0);
  }

  function handleMouseDown(event) {
    const shareButton = document.querySelector("#share-btn");
    if (
      shareButton &&
      event.target.id !== "share-btn" &&
      getComputedStyle(shareButton).display === "block"
    ) {
      shareButton.style.display = "none";
      shareButton.classList.remove("btnEntrance");
      window.getSelection().empty();
    }
  }

  function handleShareClick() {
    const selectedText = window.getSelection().toString().trim();
    if (selectedText) {
      console.log("Selected Text:", selectedText);
    } else {
      console.log("No text selected.");
    }
  }

  return (
    <button id="share-btn">
      <MdOutlineNoteAlt />
    </button>
  );
};

export default Selection;