import clsx from 'clsx';

import { Input } from '~/components/inputs';
import { Button } from '~/components/ui';
import { getTranslations } from '~/i18n/translations';
import { cn } from '~/lib/utils';

import LoginButton from './sign-in-with-google-button';

const Login = async ({ locale }: { locale: string }) => {
  const text = (await getTranslations(locale)).Login;

  return (
    <article
      // Using clsx instead here due to a bug in twMerge where it thinks
      // bg-logo and bg-background are the same so it removes one of them.
      className={clsx(
        'flex h-auto w-full grow flex-col items-center justify-center',
        'max-w-[384px] sm:max-w-[512px] md:max-w-[640px] lg:max-w-[640px]',
        'bg-background bg-logo bg-contain bg-center bg-no-repeat bg-blend-overlay',
        'md:p-18 p-4 sm:p-12 '
      )}
    >
      <header className="mb-8 text-center">
        <h3 className="mt-4 text-primary-700">{text.title}</h3>
      </header>
      <section className="w-full space-y-4 md:space-y-6">
        <Input
          className="sm:px-4 sm:py-3 md:px-5 md:py-4"
          id="email"
          label={text.enterEmail}
          placeholder="isac@nitkkr.ac.in"
          pattern="\w+@nitkkr.ac.in"
          type="email"
        />
        <Button className="w-full p-2 sm:p-3 md:p-4" disabled>
          {text.continueButton}
        </Button>
        <hr
          className={cn(
            'overflow-visible text-center font-serif text-primary-500',
            'after:relative after:top-[-13px] after:bg-background after:px-3',
            locale === 'en' ? "after:content-['OR']" : "after:content-['अथवा']"
          )}
        />
        <LoginButton loginText={text.signInWithGoogle} />
      </section>
    </article>
  );
};

export default Login;
