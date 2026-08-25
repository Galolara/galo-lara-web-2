import { Facebook, X, Youtube, Instagram, Linkedin } from "lucide-react"
import Link from "next/link"
import { themeConfig } from "@/lib/theme-config"
import type { Locale } from "@/lib/i18n/config"

interface FooterProps {
  lang: Locale
  dict: any
}

export default function Footer({ lang, dict }: FooterProps) {
  const socialLinks = [
    { icon: <Facebook className="h-5 w-5" />, href: "https://www.facebook.com/CoachGaloLara/", label: "Facebook" },
    { icon: <X className="h-5 w-5" />, href: "https://x.com/CoachGaloLara", label: "X" },
    { icon: <Youtube className="h-5 w-5" />, href: "https://www.youtube.com/@coachgalolara3141", label: "YouTube" },
    { icon: <Instagram className="h-5 w-5" />, href: "https://www.instagram.com/galolara_coach/", label: "Instagram" },
    { icon: <Linkedin className="h-5 w-5" />, href: "https://www.linkedin.com/in/galolara", label: "LinkedIn" },
  ]

  return (
    <footer className={themeConfig.footer.base}>
      <div className={themeConfig.footer.container}>
        <div className="flex flex-col items-center space-y-6">
          <div className="flex space-x-4">
            {socialLinks.map((social, index) => (
              <Link
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={themeConfig.footer.socialLink}
                aria-label={social.label}
              >
                {social.icon}
              </Link>
            ))}
          </div>

          <div className={`${themeConfig.colors.text.muted} text-sm text-center`}>
            © {new Date().getFullYear()} Galo Lara. {dict.footer.rights}.
          </div>
        </div>
      </div>
    </footer>
  )
}
