"use client";

import { useTranslations } from "next-intl";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Linkedin, Github } from "lucide-react";

export default function Contact() {
  const t = useTranslations();

  const contacts = [
    {
      icon: <Mail className="h-6 w-6" />,
      label: t("contact.email"),
      value: "hatano.mitsuru.ut@gmail.com",
      href: "mailto:hatano.mitsuru.ut@gmail.com",
      gradient: "from-red-500 to-pink-500",
    },
    {
      icon: <Linkedin className="h-6 w-6" />,
      label: t("contact.linkedin"),
      value: "/in/tanomitsu",
      href: "https://linkedin.com/in/tanomitsu",
      gradient: "from-blue-600 to-blue-700",
    },
    {
      icon: <Github className="h-6 w-6" />,
      label: t("contact.github"),
      value: "@tanomitsu",
      href: "https://github.com/tanomitsu",
      gradient: "from-gray-700 to-gray-900",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
            {t("contact.title")}
          </h2>

          <p className="text-lg text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
            {t("contact.description")}
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {contacts.map((contact, index) => (
              <Card
                key={index}
                className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <CardContent className="p-6 text-center">
                  <div
                    className={`w-12 h-12 mx-auto rounded-full bg-gradient-to-r ${contact.gradient} flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform`}
                  >
                    {contact.icon}
                  </div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                    {contact.label}
                  </h3>
                  <a
                    href={contact.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 dark:text-blue-400 hover:underline text-sm"
                  >
                    {contact.value}
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>

        </div>
      </div>
      
      {/* Footer */}
      <div className="border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="text-center">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              © 2025 Mitsuru Hatano. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
