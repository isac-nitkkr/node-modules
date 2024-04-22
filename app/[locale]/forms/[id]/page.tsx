//import { getFormForSubmission } from '~/actions/form.actions';
//temp
import FormSubmitPage from '~/components/forms/form-submit-page';
import { type ElementsType } from '~/components/forms/interfaces/form-elements';

// FIXME: This will contain both ids from forms and persistent URLs.
// Old persistent URLs should trigger a redirect.
// export async function generateStaticParams() {}

export default function Form({
  params: { locale },
}: {
  params: { locale: string; id: string };
}) {
  //const { Element, props } = await getFormForSubmission(Number(id));
  //return <Element {...props} locale={locale} />;
  const form = {
    id: 30,
    title: 'New form',
    description: 'this is a from',
    onSubmitMessage: 'Your response has been recorded.',
    pages: 2,
  };
  const questionValidations = {
    '79': {
      type: 'string',
      format: 'date',
      formatMinimum: '2002-12-01',
      formatMaximum: '2024-02-03',
    },
    '80': {
      type: 'string',
      format: 'date-time',
      formatMinimum: '2024-01-01T02:02:00Z',
      formatMaximum: '2025-02-02T03:03:00Z',
    },
    '81': { type: 'boolean' },
    '82': { type: 'array', items: { type: 'string' } },
    '83': { type: 'number' },
  };
  const questions: {
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
  }[][] = [
    [
      {
        id: '79',
        question: 'Date Field',
        description: '',
        isRequired: false,
        inputType: 'DateField',
        pageNumber: 0.003,
        marks: 0,
      },
      {
        id: '80',
        question: 'Date-Time Field',
        description: '',
        isRequired: false,
        inputType: 'DateTimeField',
        pageNumber: 1.004,
        marks: 0,
      },
    ],
    [
      {
        id: '81',
        question: 'Check Field',
        description: '',
        isRequired: true,
        inputType: 'CheckBoxField',
        pageNumber: 0.001,
        marks: 0,
      },
      {
        id: '82',
        question: 'Multi Select Field',
        description: '',
        isRequired: true,
        inputType: 'MultiSelectField',
        items: ['first choice', 'second choice', 'third great choice'],
        pageNumber: 0,
        marks: 0,
      },
      {
        id: '83',
        question: 'Number Field',
        isRequired: false,
        inputType: 'NumberField',
        pageNumber: 0.002,
        marks: 0,
      },
    ],
  ];
  const answers = {
    '79': '2003-06-05',
    '80': '2024-03-23T23:23:00Z',
    '81': true,
    '82': ['first choice', 'third great choice'],
    '83': 65,
  };
  return (
    <FormSubmitPage
      locale={locale}
      form={form}
      questions={questions}
      answers={answers}
      requiredQuestions={['81', '82']}
      questionValidations={questionValidations}
    />
  );
}
