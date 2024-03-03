import Image from 'next/image';
import Link from 'next/link';

import HorsesRunning from '~/components/horses-running';
import { getTranslations } from '~/i18n/translations';

export default async function DirectorsCorner({ locale }: { locale: string }) {
  const text = (await getTranslations(locale)).DirectorsCorner;

  return (
    <article className="container mb-32 mt-10 min-w-full" id="directors-corner">
      <Link href="#directors-corner">
        <header className="mx-auto mb-20 flex max-w-fit flex-row">
          <HorsesRunning direction="left" />
          <h2 className="my-auto">{text.title}</h2>
        </header>
      </Link>

      <section className="flex flex-row gap-5 rounded-xl border border-primary-700 bg-neutral-50 p-8">
        <Image
          alt="Director's photo"
          className="h-[443px] w-96 rounded-xl"
          height={682}
          width={591}
          loading="lazy"
          src="https://nitkkr.ac.in/wp-content/uploads/2022/02/directorim.jpg"
        />

        <blockquote className="flex flex-col">
          <h2 className="mb-4">{text.name}</h2>
          <p className="text-2xl">
            {text.quote[0]}
            &nbsp;
            <Link
              className="text-primary-700 hover:underline"
              href={`/${locale}/institute/director#message`}
            >
              {text.more}
            </Link>
            <br />
            <br />
          </p>
          <p className="grow text-2xl">{text.quote[1]}</p>
        </blockquote>
      </section>
    </article>
  );
}
