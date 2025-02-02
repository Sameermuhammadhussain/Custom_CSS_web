import React from "react";
import Link from "next/link";

export default function HomeElement() {
  return (
    <section
      className="hero"
      style={{
        backgroundImage: 'url("background-image.jpg")', // Replace with your image path
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div>
        <h1>Welcome to Watchlex</h1>
        <p>Discover the perfect watch for your style.</p>
        <Link href="/Watches">
          <button>Shop Now</button>
        </Link>
      </div>
    </section>
  );
}
