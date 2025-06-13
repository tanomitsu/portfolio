"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Award, Cloud, BookOpen, Globe, ExternalLink } from "lucide-react";

export default function Certifications() {
  const t = useTranslations();

  const certifications = [
    {
      icon: <Cloud className="h-6 w-6" />,
      title: t("certifications.atcoder"),
      gradient: "from-green-500 to-teal-500",
      level: "Green",
      url: t("certifications.atcoderUrl"),
    },
    {
      icon: <BookOpen className="h-6 w-6" />,
      title: t("certifications.ap"),
      gradient: "from-blue-500 to-cyan-500",
      level: "Level 3",
      url: null,
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: t("certifications.toefl"),
      gradient: "from-orange-500 to-yellow-500",
      level: "Fluent",
      url: null,
    },
  ];

  return (
    <section id="certifications" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            {t("certifications.title")}
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <CardHeader className="text-center pb-4">
                  <div
                    className={`w-16 h-16 mx-auto rounded-full bg-gradient-to-r ${cert.gradient} flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform`}
                  >
                    {cert.icon}
                  </div>
                  <Award className="h-8 w-8 mx-auto text-yellow-500 mb-2" />
                </CardHeader>

                <CardContent className="text-center space-y-3">
                  <CardTitle className="text-lg font-semibold text-gray-900 dark:text-white">
                    {cert.title}
                  </CardTitle>
                  <Badge
                    className={`bg-gradient-to-r ${cert.gradient} text-white border-none`}
                  >
                    {cert.level}
                  </Badge>
                  {cert.url && (
                    <div className="pt-2">
                      <Link
                        href={cert.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button size="sm" variant="outline" className="w-full">
                          <ExternalLink className="h-4 w-4 mr-2" />
                          View Profile
                        </Button>
                      </Link>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
