import { ReactNode } from 'react';

import Heading from '~/components/heading';
import ImageHeader from '~/components/image-header';
import { getTranslations } from '~/i18n/translations';

export default async function Programmes({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const text = (await getTranslations(locale)).Awards;

  return (
    <>
      <ImageHeader title="Awards" src="departments/cs/banner.png" />
      <main className="container">
        {text.map((award, i) => (
          <AwardsCard
            key={i}
            title={award.title}
            about={award.about}
            description={award.description}
          >
            {award.criterion && (
              <>
                <div className="mb-4">
                  <strong>{award.criterion[0]}</strong>:
                </div>
                <h6 className="mb-2 text-lg font-semibold">
                  {award.criterion[1]}
                </h6>
                {award.criterion.length > 2 && (
                  <ul className="ml-10 list-decimal space-y-2">
                    {award.criterion.slice(2).map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                )}
              </>
            )}
          </AwardsCard>
        ))}
      </main>
    </>
  );
}

interface AwardCardProps {
  title: string;
  about: string;
  description?: string;
  children?: ReactNode;
}

function AwardsCard({ title, about, children, description }: AwardCardProps) {
  return (
    <section className="container mt-5 rounded-md border border-primary-500 p-5 shadow-lg">
      <Heading glyphDirection="rtl" heading="h3" text={title} />
      <h4 className="mt-4 text-xl font-semibold">About</h4>
      <p className="text-gray-800 text-base">{about}</p>
      {children && (
        <>
          <h4 className="mt-4 text-xl font-semibold">Criterion</h4>
          <div className="text-gray-800 text-base">{children}</div>
        </>
      )}
      {description && (
        <>
          <h4 className="mt-4 text-xl font-semibold">Description</h4>
          <p className="text-gray-800 text-base">{description}</p>
        </>
      )}
    </section>
  );
}
