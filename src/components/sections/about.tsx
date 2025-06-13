'use client';

import { useTranslations } from 'next-intl';
import { Card, CardContent } from '@/components/ui/card';

export default function About() {
  const t = useTranslations();

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            {t('about.title')}
          </h2>
          
          <Card className="bg-gray-50 dark:bg-gray-800 border-none shadow-lg">
            <CardContent className="p-8">
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed text-center">
                {t('about.description')}
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}