import { profile } from '../data/content'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer>
      <p>&copy; {year} {profile.name}. All rights reserved.</p>
    </footer>
  )
}
