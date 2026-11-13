import { profile } from '../content'

const year = new Date().getFullYear()

export function Footer() {
  return (
    <footer className="footer wrap">
      <p>
        © {year} {profile.name}
      </p>
      <a href="#top">Back to top ↑</a>
    </footer>
  )
}
