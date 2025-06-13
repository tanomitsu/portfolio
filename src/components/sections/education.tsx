"use client";

import { useTranslations } from "next-intl";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, Calendar } from "lucide-react";

export default function Education() {
  const t = useTranslations();

  const educations = [
    {
      title: t("education.master.university"),
      degree: t("education.master.degree"),
      period: t("education.master.period"),
    },
    {
      title: t("education.ba.university"),
      degree: t("education.ba.degree"),
      period: t("education.ba.period"),
    },
  ];

  return (
    <section id="education" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-900 dark:text-white">
            {t("education.title")}
          </h2>

          {educations.map((education, index) => (
            <Card
              key={index}
              className="shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-lg">
                    <GraduationCap className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <CardTitle className="text-xl font-semibold text-gray-900 dark:text-white">
                    {education.title}
                  </CardTitle>
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                <div>
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                    {education.degree}
                  </h3>

                  <div className="flex items-center gap-2 mb-3">
                    <Calendar className="h-4 w-4 text-gray-500" />
                    <span className="text-gray-600 dark:text-gray-400">
                      {education.period}
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
