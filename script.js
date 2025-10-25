// 🔹 Array of video tutorials
const tutorials = [
  {
    topic: "Introduction to HTML",
    uploadDate: "25-Oct-2025",
    description: "Learn what HTML is and how it structures a web page.",
    videoSrc: "videos/htm-1.mp4"
  },
 
];

// 🔹 Select container
const container = document.getElementById("tutorial-container");

// 🔹 Generate video cards dynamically
tutorials.forEach(tutorial => {
  const col = document.createElement("div");
  col.className = "col-md-4 mb-4";

  col.innerHTML = `
    <div class="card shadow-sm h-100">
      <video controls poster="">
        <source src="${tutorial.videoSrc}" type="video/mp4">
        Your browser does not support the video tag.
      </video>
      <div class="card-body">
        <h5 class="card-title">${tutorial.topic}</h5>
        <p class="card-text">${tutorial.description}</p>
      </div>
      <div class="card-footer text-muted small">
        Uploaded on: ${tutorial.uploadDate}
      </div>
    </div>
  `;

  container.appendChild(col);
});
