// 🔹 Array of video tutorials
const tutorials = [
  {
    topic: "Introduction to HTML",
    uploadDate: "25-Oct-2025",
    description: "Learn what HTML is and how it structures a web page.",
    videoSrc: "videos/htm-1.mp4"
  },
    {
    topic: "Install Compiler for C++ ",
    uploadDate: "07-Nov-2025",
    description: "In this tutorial We solve the issue of gcc is not recognize ... ",
    videoSrc: "videos/htm-2.mp4"
  },
 
];

// 🔹 Select container
const container = document.getElementById("tutorial-container");

// 🔹 Generate video cards dynamically
tutorials.forEach(tutorial => {
  const col = document.createElement("div");
  col.className = "col-md-4 mb-4";

  col.innerHTML = `
    <div class="card shadow-sm h-100 bg p-2 ">
      <video controls poster="" class="round">
        <source src="${tutorial.videoSrc}"class="round" type="video/mp4">
        Your browser does not support the video tag.
      </video>
      <div class="card-body">
        <h5 class="card-title mb-2 text-light fw-medium">${tutorial.topic}</h5>
        <p class="card-text text_light">${tutorial.description}</p>
      </div>
      <div class="card-footer text-muted small text_light">
        Uploaded on: ${tutorial.uploadDate}
      </div>
    </div>
  `;

  container.appendChild(col);
});
