(function () {
  var nextUrl;
  var myHtml = "";
  var isLoading = false;

  $("#submit-button").on("click", function () {
    var userInput = $("input[name=userInput]").val();
    var albumOrArtist = $("select").val();
    console.log("i'm now searching....");
    isLoading = true;
    myHtml = "";
    $.ajax({
      url: "https://elegant-croissant.glitch.me/spotify",
      method: "GET",
      data: {
        query: userInput,
        type: albumOrArtist,
      },
      success: function (response) {
        response = response.artists || response.albums;
        console.log(response);
        getHtmlForItems(response);

        $("#results-container").html(myHtml);

        nextUrl =
          response.next &&
          response.next.replace(
            "https://api.spotify.com/v1/search",
            "https://elegant-croissant.glitch.me/spotify"
          );
        scroll(response);
        moreButtonShowAndHide();
      },
    });
  });

  $(".moreButton").on("click", function () {
    $.ajax({
      url: nextUrl,
      method: "GET",
      success: function (response) {
        response = response.artists || response.albums;
        getHtmlForItems(response);

        $("#results-container").html(myHtml);

        nextUrl =
          response.next &&
          response.next.replace(
            "https://api.spotify.com/v1/search",
            "https://elegant-croissant.glitch.me/spotify"
          );
        console.log("nextURl is", nextUrl);
        moreButtonShowAndHide();
      },
    });
  });

  function moreButtonShowAndHide() {
    if (nextUrl) {
      console.log("next Url exists more button shoul be visible");
      $(".moreButton").css({
        visibility: "visible",
      });
    } else {
      console.log("response.next == null");
      $(".moreButton").css({
        visibility: "hidden",
      });
    }
  }

  function getHtmlForItems(response) {
    console.log("response:", response);

    for (var i = 0; i < response.items.length; i++) {
      var externalLink = response.items[i].external_urls.spotify;
      var imageUrl = "default.png";
      if (response.items[i].images[0]) {
        imageUrl = response.items[i].images[0].url;
      }
      myHtml +=
        '<a class="titleImageBox" href="' +
        externalLink +
        '"><div>' +
        response.items[i].name +
        "</div><div>" +
        "<img class='images' src='" +
        imageUrl +
        "'>" +
        "</div></a>";
    }
  }

  var url = window.location.href;
  var searchingFor = "scroll=infinite";
  var isInfiniteScroll = url.indexOf(searchingFor);
  console.log("isInfiniteScroll", isInfiniteScroll);

  function scroll(response) {
    isLoading = false;
    if (isInfiniteScroll) {
      setInterval(function () {
        if (!response.next) {
          console.log("no next url to set");
          return;
        }

        var window_plus_scrolltop =
          $(window).height() + $(document).scrollTop();
        var document_height = $(document).height();
        var reachedBottomOfPage =
          window_plus_scrolltop >= document_height - 400;

        if (reachedBottomOfPage && !isLoading) {
          $(".moreButton").trigger("click");
          console.log("reached bottom of page");
        }
      }, 250);
    }
  }
})();
