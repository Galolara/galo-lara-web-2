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
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    console.log("[v0] Form submission started", formData)

    try {
      const response = await fetch("https://hook.us2.make.com/oehvf6ngy6hqsfn6widvagoimq54bunn", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      console.log("[v0] Response status:", response.status)
      console.log("[v0] Response ok:", response.ok)

      if (response.ok) {
        setSubmitStatus("success")
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
          newsletter: false,
        })
      } else {
        const errorText = await response.text()
        console.log("[v0] Error response:", errorText)
        setSubmitStatus("error")
      }
    } catch (error) {
      console.log("[v0] Fetch error:", error)
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
