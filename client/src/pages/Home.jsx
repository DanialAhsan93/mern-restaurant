import React from 'react'

function Home() {
  return (
    <div>
      <div className="w-[85%] mx-auto mt-6 transition-all duration-[3000ms] ease-in-out">
          <section id="home" className="mt-8">
            <h2 className="text-3xl font-bold mb-4">Home</h2>
            <p>
              Welcome to the home page. Content below should shift when menu opens.
            </p>
          </section>

          <section id="about" className="mt-12">
            <h2 className="text-3xl font-bold mb-4">About</h2>
            <p>
              This is the about section. The page scrolls down with the dropdown.
            </p>
          </section>

          <section id="signin" className="mt-12">
            <h2 className="text-3xl font-bold mb-4">Sign In</h2>
            <p>
              Here is the sign-in section with some placeholder content.
            </p>
          </section>
        </div>
    </div>
  )
}

export default Home;