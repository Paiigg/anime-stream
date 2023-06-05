"use client";

import React, { useEffect } from "react";

export default function Synopsis({ synopsis }: { synopsis: string }) {
  useEffect(() => {
    const elements = document.querySelectorAll(".paragraph");
    elements.forEach((element) => {
      if (element.scrollHeight > element.clientHeight) {
        const button = document.createElement("button");
        button.type = "button";
        button.classList.add("showMoreLess");
        button.textContent = "read more";
        element.parentNode?.insertBefore(button, element.nextSibling);
      }
    });
    const showMoreLessButtons = document.querySelectorAll(".showMoreLess");
    showMoreLessButtons.forEach((button) => {
      button.addEventListener("click", () => {
        const paragraph = button.previousElementSibling;
        if (paragraph?.classList.contains("line-clamp-none")) {
          button.textContent = "read more";
          paragraph.classList.remove("line-clamp-none");
        } else {
          button.textContent = "read less";
          paragraph?.classList.add("line-clamp-none");
        }
      });
    });
  }, []);
  return (
    <p className="text-xs text-zinc-500 w-[90%] line-clamp-5 transition duration-300 paragraph">
      {synopsis}
    </p>
  );
}
