"use client";

import { useTranslations } from "next-intl";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code2, Layers, Wrench } from "lucide-react";

export default function Skills() {
  const t = useTranslations();

  const skillCategories = [
    {
      icon: <Code2 className="h-6 w-6" />,
      title: t("skills.languages"),
      skills: [
        "JavaScript",
        "TypeScript",
        "Python",
        "Go",
        "C",
        "C++",
        "Swift",
        "Ocaml",
        "Rust",
      ],
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: <Layers className="h-6 w-6" />,
      title: t("skills.frameworks"),
      skills: [
        "React",
        "React Native",
        "Next.js",
        "Node.js",
        "Express",
        "Hono",
        "Chakra UI",
        "shadcn/ui",
        "Tailwind CSS",
        "Swift UI",
      ],
      gradient: "from-purple-500 to-pink-500",
    },
    {
      icon: <Wrench className="h-6 w-6" />,
      title: t("skills.tools"),
      skills: [
        "Git",
        "Docker",
        "AWS",
        "Google Cloud Platform",
        "PostgreSQL",
        "Kubernetes",
      ],
      gradient: "from-orange-500 to-red-500",
    },
  ];

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            {t("skills.title")}
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <Card
                key={index}
                className="hover:shadow-lg transition-shadow duration-300"
              >
                <CardHeader className="text-center pb-4">
                  <div
                    className={`w-16 h-16 mx-auto rounded-full bg-gradient-to-r ${category.gradient} flex items-center justify-center text-white mb-4`}
                  >
                    {category.icon}
                  </div>
                  <CardTitle className="text-lg font-semibold text-gray-900 dark:text-white">
                    {category.title}
                  </CardTitle>
                </CardHeader>

                <CardContent>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge
                        key={skillIndex}
                        variant="secondary"
                        className="text-sm hover:scale-105 transition-transform cursor-default"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
