import { getTranslations } from '~/i18n/translations';

import FormSubmitForm from './form-submit-form';
import {
  type ElementsType,
  type validationProperty,
} from './interfaces/form-elements';

export interface FormSubmitFormProps {
  form: {
    id: number;
    title: string;
    description: string | undefined;
    onSubmitMessage: string;
    pages: number;
  };
  questions: {
    id: string;
    question: string;
    description?: string | undefined;
    isRequired: boolean;
    inputType: ElementsType;
    items?: string[] | undefined;
    mimeTypes?: string[] | undefined;
    range?: string[] | undefined;
    pageNumber: number;
    marks: number;
  }[][];
  requiredQuestions: string[];
  questionValidations: Record<string, validationProperty>;
  answers?: Record<string, string | number | string[] | boolean>;
}
export default function FormSubmitPage({
  locale,
  form,
  questions,
  requiredQuestions,
  questionValidations,
  answers,
}: { locale: string } & FormSubmitFormProps) {
  return (
    <main className="m-auto min-h-screen w-screen max-w-lg p-2">
      <FormDetails
        title={form.title}
        description={form.description}
        locale={locale}
      />
      <hr />
      <FormSubmitForm
        form={form}
        questions={questions}
        requiredQuestions={requiredQuestions}
        questionValidations={questionValidations}
        answers={answers}
      />
    </main>
  );
}
async function FormDetails({
  title,
  description,
  locale,
}: {
  title: string;
  description?: string;
  locale: string;
}) {
  const text = (await getTranslations(locale)).FormDetails;
  return (
    <>
      <h5>{text.title}</h5>
      <h1 className="text-sky-900 text-3xl font-semibold">{title}</h1>
      <h6>{text.description}</h6>
      <p className="text-gray-600">{description}</p>
    </>
  );
}
