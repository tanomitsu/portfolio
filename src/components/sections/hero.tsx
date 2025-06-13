"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Mail, Github, Linkedin } from "lucide-react";

export default function Hero() {
  const t = useTranslations();

  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
            {t("hero.greeting")}
          </p>
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {t("hero.name")}
            </span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            {t("hero.subtitle")}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button
              aria-label="Scroll to contact"
              size="lg"
              className="group"
              onClick={scrollToContact}
            >
              {t("hero.cta")}
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>

            <div className="flex gap-4">
              <Link href="mailto:hatano.mitsuru.ut@gmail.com">
                <Button
                  aria-label="Email"
                  variant="outline"
                  size="icon"
                  className="rounded-full"
                >
                  <Mail className="h-5 w-5" />
                </Button>
              </Link>
              <Link
                href="https://github.com/tanomitsu"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  aria-label="Github"
                  variant="outline"
                  size="icon"
                  className="rounded-full"
                >
                  <Github className="h-5 w-5" />
                </Button>
              </Link>
              <Link
                href="https://linkedin.com/in/tanomitsu"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  aria-label="LinkedIn"
                  variant="outline"
                  size="icon"
                  className="rounded-full"
                >
                  <Linkedin className="h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>

          <div className="animate-bounce">
            <svg
              width="40"
              height="40"
              viewBox="0 0 100 100"
              className="text-blue-600 dark:text-blue-400"
              fill="currentColor"
            >
              {/* Bird body */}
              <ellipse cx="50" cy="60" rx="20" ry="15" />

              {/* Bird head */}
              <circle cx="50" cy="35" r="12" />

              {/* Bird beak */}
              <polygon points="50,29 46,25 50,22" />

              {/* Bird eye */}
              <circle cx="53" cy="32" r="2" fill="white" />
              <circle cx="54" cy="31" r="1" fill="black" />

              {/* Bird wings */}
              <ellipse
                cx="40"
                cy="55"
                rx="8"
                ry="12"
                transform="rotate(-20 40 55)"
                opacity="0.8"
              />
              <ellipse
                cx="60"
                cy="55"
                rx="8"
                ry="12"
                transform="rotate(20 60 55)"
                opacity="0.8"
              />

              {/* Bird tail */}
              <ellipse
                cx="30"
                cy="65"
                rx="6"
                ry="8"
                transform="rotate(-30 30 65)"
                opacity="0.9"
              />

              {/* Bird legs */}
              <line
                x1="45"
                y1="75"
                x2="45"
                y2="85"
                stroke="currentColor"
                strokeWidth="2"
              />
              <line
                x1="55"
                y1="75"
                x2="55"
                y2="85"
                stroke="currentColor"
                strokeWidth="2"
              />

              {/* Bird feet */}
              <line
                x1="45"
                y1="85"
                x2="42"
                y2="88"
                stroke="currentColor"
                strokeWidth="1.5"
              />
              <line
                x1="45"
                y1="85"
                x2="48"
                y2="88"
                stroke="currentColor"
                strokeWidth="1.5"
              />
              <line
                x1="55"
                y1="85"
                x2="52"
                y2="88"
                stroke="currentColor"
                strokeWidth="1.5"
              />
              <line
                x1="55"
                y1="85"
                x2="58"
                y2="88"
                stroke="currentColor"
                strokeWidth="1.5"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
