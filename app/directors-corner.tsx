import Image from 'next/image';
import Link from 'next/link';

import HorsesRunning from '@/components/horses-running';

export default function DirectorsCorner() {
  return (
    <article className="container my-10 min-w-full">
      <header className="mx-auto mb-20 flex max-w-fit flex-row text-primary-20">
        <HorsesRunning direction="left" />
        <h2 className="my-auto">DIRECT</h2>
        <Image
          alt="O"
          className="my-auto h-[44px] rotate-[90.66deg]"
          height={44}
          width={44}
          src="https://s3-alpha-sig.figma.com/img/d003/e4ca/46983bb9c2b53ca4f74a6382f4bfd57d?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=PaN9iN-Wh5U0K4D3p08lFy2vBXAuRS7835uwTzaGDtTKWYL0PBZ0Gw4yVjKtcbQMHiscxyh03PgyA4EyTRS0~sXpO14m1RJT8ch27VGGr6fa9zBXWpttPuHgX52tI9S-sodxlmj20HnYYxNObqIDxEkvzgCFJiHsUjVwmxQfOWxwduL80aBRKVUa6bGGSm2V2A2Znl96nJ1yUDdxenBvrTNN4UCFiIJEwyvdr4jVDoWxoqfDveVUcYElzjBjTTYvphifTSeLjEn-uHbX8JmmW1HkqEpThkWsDUVkoGPk~vLBP8LY6fW3aoa7S1ionsMVjG09UsnDCfB7T4Up40LZ6g__"
        />
        <h2 className="my-auto">R&rsquo;S CORNER</h2>
      </header>

      <section className="flex flex-row gap-5 rounded-xl border border-primary-20 bg-white p-8 text-shades-20">
        <Image
          alt="Director's photo"
          className="rounded-xl"
          height={473}
          width={436}
          loading="lazy"
          src="https://nitkkr.ac.in/wp-content/uploads/2022/02/directorim.jpg"
        />

        <blockquote className="flex flex-col">
          <h2 className="mb-4 text-primary-20">Professor B.V. Ramana Reddy</h2>
          <p className="text-2xl">
            India, the land of seekers, is at the cusp of becoming Vishwa Guru
            all over again after 1100 years of subjugation, wars, annexures and
            humiliation. It is again a free country due to the sacrifices made
            by our leaders, freedom fighters and has learnt the art of standing
            tall in the midst of many a challenge of building the nation with
            its rich diversity, cultures, languages all over again since the
            last 75 years. Unity in Diversity is our mantra while making our
            nation stronger in every sphere.
            <br />
          </p>
          <p className="grow text-2xl">
            I heartily welcome everyone who visits the website of this
            institution.
          </p>
          <footer className="max-w-fit text-xl font-bold text-primary-20 hover:underline">
            <Link href="https://nitkkr.ac.in/?page_id=703">READ MORE</Link>
          </footer>
        </blockquote>
      </section>
    </article>
  );
}
