import React from "react";
import "../app.css";

function Description() {
  return (
    <div>
      <h2>What's In The Drawer?</h2>
      <p class="shrink">
        <strong>The Junk Drawer</strong> is a creation by Luke and Jake Flaherty
        that uses a <strong>Google Chrome Extension</strong> to take a
        screenshot of the page you are currently on. With this screenshot, which
        we have labelled "junk" we will store it in a massive gallery, or "junk
        drawer."
      </p>
      <p class="shrink">
        Whatever webpage page you are on, add to your junk drawer via the
        extension and build your collection of helpful information that you will
        be able to share with your family and friends!
      </p>
      <br></br>
      <p class="shrink">
        For access to the Google Chrome Extension click the button below!
      </p>
    </div>
  );
}

export default Description;
