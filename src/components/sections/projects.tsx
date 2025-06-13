"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Pen, Cat, Scroll } from "lucide-react";

export default function Projects() {
  const t = useTranslations();

  const projects = [
    {
      icon: <Pen className="h-6 w-6" />,
      title: t("projects.project1.title"),
      description: t("projects.project1.description"),
      tech: t("projects.project1.tech").split(", "),
      gradient: "from-blue-500 to-purple-600",
      liveUrl: t("projects.project1.liveUrl"),
      githubUrl: t("projects.project1.githubUrl"),
    },
    {
      icon: <Cat className="h-6 w-6" />,
      title: t("projects.project2.title"),
      description: t("projects.project2.description"),
      tech: t("projects.project2.tech").split(", "),
      gradient: "from-green-500 to-teal-600",
      liveUrl: t("projects.project2.liveUrl"),
      githubUrl: t("projects.project2.githubUrl"),
    },
    {
      icon: <Scroll className="h-6 w-6" />,
      title: t("projects.project3.title"),
      description: t("projects.project3.description"),
      tech: t("projects.project3.tech").split(", "),
      gradient: "from-orange-500 to-red-600",
      liveUrl: t("projects.project3.liveUrl"),
      githubUrl: t("projects.project3.githubUrl"),
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            {t("projects.title")}
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <CardHeader className="pb-4">
                  <div
                    className={`w-12 h-12 rounded-lg bg-gradient-to-r ${project.gradient} flex items-center justify-center text-white mb-4`}
                  >
                    {project.icon}
                  </div>
                  <CardTitle className="text-xl font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="space-y-4">
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <Badge
                        key={techIndex}
                        variant="secondary"
                        className="text-xs"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-2 pt-4">
                    {project.githubUrl && (
                      <Link
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1"
                      >
                        <Button
                          aria-label="Code"
                          size="sm"
                          variant="outline"
                          className="w-full"
                        >
                          <Github className="h-4 w-4 mr-2" />
                          Code
                        </Button>
                      </Link>
                    )}
                    {project.liveUrl && (
                      <Link
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1"
                      >
                        <Button aria-label="Live" size="sm" className="w-full">
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Live
                        </Button>
                      </Link>
                    )}
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
