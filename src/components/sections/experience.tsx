"use client";

import { useTranslations } from "next-intl";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, Calendar, Building } from "lucide-react";

export default function Experience() {
  const t = useTranslations();

  const experiences = [
    {
      title: t("experience.intern1.title"),
      company: t("experience.intern1.company"),
      period: t("experience.intern1.period"),
      description: t("experience.intern1.description"),
      tech: ["Swift", "SwiftUI"],
    },
    {
      title: t("experience.intern2.title"),
      company: t("experience.intern2.company"),
      period: t("experience.intern2.period"),
      description: t("experience.intern2.description"),
      tech: ["Go"],
    },
    {
      title: t("experience.intern3.title"),
      company: t("experience.intern3.company"),
      period: t("experience.intern3.period"),
      description: t("experience.intern3.description"),
      tech: ["React", "Typescript", "Node.js", "PostgreSQL", "Docker"],
    },
  ];

  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-900 dark:text-white">
            {t("experience.title")}
          </h2>
          {experiences.map((experience, index) => (
            <Card
              key={index}
              className="shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 bg-purple-100 dark:bg-purple-900 rounded-lg">
                    <Briefcase className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-xl font-semibold text-gray-900 dark:text-white">
                      {experience.title}
                    </CardTitle>
                    <div className="flex items-center gap-2 mt-1">
                      <Building className="h-4 w-4 text-gray-500" />
                      <span className="text-gray-600 dark:text-gray-400">
                        {experience.company}
                      </span>
                    </div>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                <div className="flex items-center gap-2 mb-4">
                  <Calendar className="h-4 w-4 text-gray-500" />
                  <Badge variant="outline" className="text-sm">
                    {experience.period}
                  </Badge>
                </div>

                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  {experience.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-4">
                  {experience.tech.map((tech, index) => (
                    <Badge
                      key={index}
                      className="bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
