import Image from 'next/image';
import Link from 'next/link';
import { FaMagnifyingGlass } from 'react-icons/fa6';

import { getTranslations } from '@/i18n/translations';

export default async function Header({ locale }: { locale: string }) {
  const text = (await getTranslations(locale)).Header;

  const items = [
    { label: text.institute, value: '/institute' },
    { label: text.administration, value: '/administration' },
    { label: text.academics, value: '/academics' },
    { label: text.sections, value: '/sections' },
    { label: text.faculty, value: '/faculty-and-staff' },
    { label: text.placement, value: '/training-and-placement' },
    { label: text.activities, value: '/student-activities' },
  ];

  return (
    <nav className="container fixed z-10 flex min-w-full max-w-screen-lg flex-wrap justify-between gap-8 bg-gradient-to-b from-neutral-20 to-transparent py-6">
      <Link href="/">
        <Image
          alt={text.logo}
          height={44}
          width={44}
          src="https://s3-alpha-sig.figma.com/img/18b7/a13d/8bbb852e070e69b3de2a5ac59d20f501?Expires=1708905600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=i0QrjGZNZsnnvHN~pAnOa-YbIdvwexeTtZuB1etivK5dtpc~-7WqBZshw9~U2zBk5cbQ53JxA6FjUzyHVVcIMJjVsXi17NMULlQjdoylX0RlLxEMiJcf1ZXbFd8DQT9MrHkjyO~oEQYjDgCw87k~ZZ5z9oMSio4dKcc2D8RbTG7pcuCHkAWjhj~qbxKnMtcHHkW1tyoNa8ZO4pcK7F8vnf3~ItFFO1K54grHvqlaCFM2NhjLEzLjLetdxwh7l8KZwaxEEanbdHoAVk~TqIK-sxoQsYPFZGc4W2p0VvtWdl0MzanayIfqq~n0as1Ee6xgl171H7jetTYAF-f0X4NDWw__"
        />
      </Link>

      <ol className="flex grow gap-4">
        {items.map(({ label, value }, index) => (
          <li className="my-auto min-h-fit p-2" key={index}>
            <Link href={value}>{label}</Link>
          </li>
        ))}
      </ol>

      <ol className="inline-flex gap-2">
        <li className="h-10 w-10 rounded-full bg-neutral-10">
          <Link className="block h-full w-full p-3" href="/search">
            <FaMagnifyingGlass size={16} />
          </Link>
        </li>
        <li>
          <Link href="/login">
            <button className="rounded-md bg-primary-30 px-4 py-2 text-neutral-10 hover:bg-primary-20">
              {text.login}
            </button>
          </Link>
        </li>
      </ol>
    </nav>
  );
}
