"use strict";
/*    JavaScript 7th Edition
      Chapter 12
      Project 12-04

      Project to create an interactive slideshow

      Filename: project12-04.js
*/

//s3
let slideNumber = 0;

$(() => {
  //s4
  $("img#leftbutton").click((e) => {
    //s5
    if (slideNumber > 0) {
      //s5a
      $("img.slideImages").animate(
        {
          left: "+=401px",
        },
        1000
      );
      //s5b
      slideImage -= 1;
      //s5c
      let currentSlide = $("img.slidesImages");
      //s5d
      let slideCaption = $(currentSlide).attr("alt");
      //s5e
      changeCaption(slideCaption);
    }
  });
});

//s6
$(() => {
  $("img#rightbutton").click((e) => {
    //s6b
    if (slideNumber < 11) {
      $("img.slideImages").animate(
        {
          //s6c
          left: "-=401px",
        },
        1000
      );
      //s6d
      slideImage += 1;
      let currentSlide = $("img.slidesImages");
      let slideCaption = $(currentSlide).attr("alt");
      changeCaption(slideCaption);
    }
  });
});

//s7
function changeCaption(captionText) {
  $("div#caption")
    .effect(
      "blind",
      {
        mode: "hide",
        direction: "left",
      },
      500,
      () => {
        $("div#caption").text(captionText);
      }
    )
    .effect(
      "show",
      {
        direction: "left",
      },
      500
    );
}
