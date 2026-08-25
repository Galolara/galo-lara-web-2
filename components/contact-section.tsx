"use client"

import type React from "react"

import { useState } from "react"
import { Send, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import type { Locale } from "@/lib/i18n/config"

interface ContactSectionProps {
  lang: Locale
  dict: any
}

export default function ContactSection({ lang, dict }: ContactSectionProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    newsletter: false,
    // Honeypot: campo invisible para humanos. Si viene con valor, es un bot.
    website: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (formData.website) {
      // Honeypot completado: es un bot. Simulamos éxito sin enviar nada.
      setSubmitStatus("success")
      setFormData({ name: "", email: "", phone: "", message: "", newsletter: false, website: "" })
      return
    }

    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitStatus("success")
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
          newsletter: false,
          website: "",
        })
      } else {
        if (process.env.NODE_ENV === "development") {
          console.error("[contact] submission failed:", response.status)
        }
        setSubmitStatus("error")
      }
    } catch (error) {
      if (process.env.NODE_ENV === "development") {
        console.error("[contact] fetch error:", error)
      }
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }))
  }

  return (
    <section id={lang === "es" ? "contacto" : "contact"} className="py-20 bg-zinc-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">{dict.contact.title}</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">{dict.contact.subtitle}</p>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">{dict.contact.subtitle2}</p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="bg-black/50 border border-[rgba(255,255,255,0.05)] rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-6">{dict.contact.sendMessage}</h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Honeypot anti-spam: invisible para personas, los bots suelen completar todos los campos */}
              <div className="absolute -left-[9999px]" aria-hidden="true">
                <label htmlFor="website">Website</label>
                <input
                  type="text"
                  id="website"
                  name="website"
                  value={formData.website}
                  onChange={handleChange}
                  tabIndex={-1}
                  autoComplete="off"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-white text-sm font-semibold mb-2">{dict.contact.form.fullName}</label>
                  <Input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="bg-white/10 border-[rgba(255,255,255,0.1)] text-white placeholder:text-gray-400"
                    placeholder={dict.contact.form.placeholders.name}
                    required
                  />
                </div>

                <div>
                  <label className="block text-white text-sm font-semibold mb-2">{dict.contact.form.email}</label>
                  <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="bg-white/10 border-[rgba(255,255,255,0.1)] text-white placeholder:text-gray-400"
                    placeholder={dict.contact.form.placeholders.email}
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-white text-sm font-semibold mb-2">{dict.contact.form.phone}</label>
                <Input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="bg-white/10 border border-[rgba(255,255,255,0.1)] rounded-md text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-white/20"
                  placeholder={dict.contact.form.placeholders.phone}
                />
              </div>

              <div>
                <label className="block text-white text-sm font-semibold mb-2">{dict.contact.form.message}</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-3 py-2 bg-white/10 border border-[rgba(255,255,255,0.1)] rounded-md text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-white/20"
                  placeholder={dict.contact.form.placeholders.message}
                  required
                />
              </div>

              {submitStatus === "success" && (
                <div className="p-4 bg-gradient-to-r from-green-600/20 to-green-500/20 border border-green-500/50 rounded-lg text-center">
                  <p className="text-green-100 font-semibold text-lg">✓ {dict.contact.form.success}</p>
                  <p className="text-green-200/80 text-sm mt-1">{dict.contact.form.successMessage}</p>
                </div>
              )}

              {submitStatus === "error" && (
                <div className="p-4 bg-red-500/20 border border-red-500/50 rounded-lg text-red-100 text-center">
                  {dict.contact.form.error}
                </div>
              )}

              <Button
                type="submit"
                className="w-full bg-white text-black hover:bg-gray-200 font-semibold py-3"
                disabled={isSubmitting}
              >
                {isSubmitting ? dict.contact.form.sending : dict.contact.form.send}
                <Send className="ml-2 h-4 w-4" />
              </Button>
            </form>
          </div>

          <div className="mt-8 text-center">
            <div className="inline-flex items-center gap-2 text-gray-300 text-lg">
              <MapPin className="h-5 w-5" />
              <span>{dict.contact.location}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
