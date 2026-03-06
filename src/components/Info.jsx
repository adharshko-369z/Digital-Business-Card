import profile from "./src/assets/Adharshko.jpeg"

export default function Info(){
  return(
    <header className="header">
      <img className="profile-pic" src={profile}/>
      <h1>Adharsh K O</h1>
      <p className="role">Frontend Developer</p>
      <p className="website">adharshko.website</p>
      <div className="contact-links">
          <a href="mailto:adharshko369z@gmail.com" className="email-link" target="_blank">
          <svg xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 24 24" 
          fill="currentColor" 
          className="size-6 email-icon">
          <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
          <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
          </svg>
          Email</a>
          <a href="https://www.linkedin.com/in/adharsh-k-9ab8452a5/" className="linkedin-link" target="_blank">
            <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="linkedin-icon">
            <rect width="24" height="24" fill="#ffffff" rx="4"/>
            <path
            fill="#297FE5"
            d="M20.447 20.452h-3.554v-5.569c0-1.328-.025-3.037-1.852-3.037-1.853 0-2.136 1.447-2.136 2.941v5.665H9.349V9h3.413v1.561h.049c.476-.9 1.637-1.85 3.373-1.85 3.607 0 4.273 2.374 4.273 5.467v6.274zM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zM7.121 20.452H3.552V9h3.569v11.452z"/>
            </svg>
            Linkedin</a>
      </div>
      
    </header>
  )
}