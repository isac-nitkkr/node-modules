import { InferInsertModel } from 'drizzle-orm';
import { db, persons, students } from '../db';

type PersonsData = InferInsertModel<typeof persons>;

const personsData: PersonsData[] = [
  {
    name: 'John Doe',
    email: 'example@gmail.com',
    image: '',
    sex: 'M',
  },
  {
    name: 'Jane Doe',
    email: 'sample@gmail.com',
    image: '',
    sex: 'F',
  },
  {
    name: 'Michael Smith',
    email: 'michael.smith@example.com',
    image: '',
    sex: 'M',
  },
  {
    name: 'Emily Johnson',
    email: 'emily.johnson@example.com',
    image: '',
    sex: 'F',
  },
  {
    name: 'William Brown',
    email: 'william.brown@example.com',
    image: '',
    sex: 'M',
  },
  {
    name: 'Olivia Williams',
    email: 'olivia.williams@example.com',
    image: '',
    sex: 'F',
  },
  {
    name: 'James Jones',
    email: 'james.jones@example.com',
    image: '',
    sex: 'M',
  },
  {
    name: 'Ava Taylor',
    email: 'ava.taylor@example.com',
    image: '',
    sex: 'F',
  },
  {
    name: 'Benjamin Davis',
    email: 'benjamin.davis@example.com',
    image: '',
    sex: 'M',
  },
  {
    name: 'Sophia Martinez',
    email: 'sophia.martinez@example.com',
    image: '',
    sex: 'F',
  },
];

const studentsData = [
  {
    rollNumber: '12112239',
    telephone: ['1234567890', '1234567891'],
    personalEmail: 'example@gmail.com',
    fathersName: 'John Doe Sr.',
    fathersTelephone: '1234567890',
    mothersName: 'Jane Doe',
    mothersTelephone: '1234567890',
    localGuardiansName: 'John Doe Jr.',
    localGuardiansTelephone: '1234567890',
    pincode: '136119',
    permanentAddress: 'House No. 123, Street 1, City, State, Country',
    category: 'General',
    birthday: '1999-01-01',
    applicationNumber: '1234567890',
    admissionCategory: 'General',
    isPwd: false,
    admissionSubcategory: 'General',
  },
  {
    rollNumber: '12112240',
    personalEmail: 'sample@gmail.com',
    fathersName: 'John Doe Sr.',
    fathersTelephone: '1234567890',
    mothersName: 'Jane Doe',
    mothersTelephone: '1234567890',
    localGuardiansName: 'John Doe Jr.',
    localGuardiansTelephone: '1234567890',
    pincode: '136119',
    permanentAddress: 'House No. 123, Street 1, City, State, Country',
    category: 'General',
    birthday: '1999-01-01',
    applicationNumber: '1234567890',
    admissionCategory: 'General',
    isPwd: false,
    admissionSubcategory: 'General',
  },
  {
    rollNumber: '12112241',
    personalEmail: 'alice.smith@example.com',
    fathersName: 'Bob Smith',
    fathersTelephone: '1234567890',
    mothersName: 'Carol Smith',
    mothersTelephone: '1234567890',
    localGuardiansName: 'David Smith',
    localGuardiansTelephone: '1234567890',
    pincode: '136119',
    permanentAddress: 'House No. 456, Street 2, City, State, Country',
    category: 'General',
    birthday: '1998-05-15',
    applicationNumber: '1234567891',
    admissionCategory: 'General',
    isPwd: false,
    admissionSubcategory: 'General',
  },
  {
    rollNumber: '12112242',
    personalEmail: 'bob.johnson@example.com',
    fathersName: 'Frank Johnson',
    fathersTelephone: '1234567890',
    mothersName: 'Grace Johnson',
    mothersTelephone: '1234567890',
    localGuardiansName: 'Ethan Johnson',
    localGuardiansTelephone: '1234567890',
    pincode: '136119',
    permanentAddress: 'House No. 789, Street 3, City, State, Country',
    category: 'General',
    birthday: '1999-07-20',
    applicationNumber: '1234567892',
    admissionCategory: 'General',
    isPwd: false,
    admissionSubcategory: 'General',
  },
  {
    rollNumber: '12112243',
    personalEmail: 'emma.brown@example.com',
    fathersName: 'Harry Brown',
    fathersTelephone: '1234567890',
    mothersName: 'Lily Brown',
    mothersTelephone: '1234567890',
    localGuardiansName: 'Oliver Brown',
    localGuardiansTelephone: '1234567890',
    pincode: '136119',
    permanentAddress: 'House No. 1011, Street 4, City, State, Country',
    category: 'General',
    birthday: '2000-02-28',
    applicationNumber: '1234567893',
    admissionCategory: 'General',
    isPwd: false,
    admissionSubcategory: 'General',
  },
  {
    rollNumber: '12112244',
    personalEmail: 'william.davis@example.com',
    fathersName: 'James Davis',
    fathersTelephone: '1234567890',
    mothersName: 'Sophia Davis',
    mothersTelephone: '1234567890',
    localGuardiansName: 'Elijah Davis',
    localGuardiansTelephone: '1234567890',
    pincode: '136119',
    permanentAddress: 'House No. 1314, Street 5, City, State, Country',
    category: 'General',
    birthday: '1998-11-10',
    applicationNumber: '1234567894',
    admissionCategory: 'General',
    isPwd: false,
    admissionSubcategory: 'General',
  },
  {
    rollNumber: '12112245',
    personalEmail: 'olivia.wilson@example.com',
    fathersName: 'Benjamin Wilson',
    fathersTelephone: '1234567890',
    mothersName: 'Emily Wilson',
    mothersTelephone: '1234567890',
    localGuardiansName: 'Michael Wilson',
    localGuardiansTelephone: '1234567890',
    pincode: '136119',
    permanentAddress: 'House No. 1516, Street 6, City, State, Country',
    category: 'General',
    birthday: '1999-09-05',
    applicationNumber: '1234567895',
    admissionCategory: 'General',
    isPwd: false,
    admissionSubcategory: 'General',
  },
  {
    rollNumber: '12112246',
    personalEmail: 'james.taylor@example.com',
    fathersName: 'Thomas Taylor',
    fathersTelephone: '1234567890',
    mothersName: 'Mary Taylor',
    mothersTelephone: '1234567890',
    localGuardiansName: 'Alexander Taylor',
    localGuardiansTelephone: '1234567890',
    pincode: '136119',
    permanentAddress: 'House No. 1718, Street 7, City, State, Country',
    category: 'General',
    birthday: '2000-03-25',
    applicationNumber: '1234567896',
    admissionCategory: 'General',
    isPwd: false,
    admissionSubcategory: 'General',
  },
  {
    rollNumber: '12112247',
    personalEmail: 'sophia.martinez@example.com',
    fathersName: 'Noah Martinez',
    fathersTelephone: '1234567890',
    mothersName: 'Isabella Martinez',
    mothersTelephone: '1234567890',
    localGuardiansName: 'Lucas Martinez',
    localGuardiansTelephone: '1234567890',
    pincode: '136119',
    permanentAddress: 'House No. 1920, Street 8, City, State, Country',
    category: 'General',
    birthday: '1998-08-12',
    applicationNumber: '1234567897',
    admissionCategory: 'General',
    isPwd: false,
    admissionSubcategory: 'General',
  },
  {
    rollNumber: '12112248',
    personalEmail: 'ethan.anderson@example.com',
    fathersName: 'Liam Anderson',
    fathersTelephone: '1234567890',
    mothersName: 'Mia Anderson',
    mothersTelephone: '1234567890',
    localGuardiansName: 'Mason Anderson',
    localGuardiansTelephone: '1234567890',
    pincode: '136119',
    permanentAddress: 'House No. 2122, Street 9, City, State, Country',
    category: 'General',
    birthday: '1999-12-30',
    applicationNumber: '1234567898',
    admissionCategory: 'General',
    isPwd: false,
    admissionSubcategory: 'General',
  },
];

export const populateStudents = async () => {
  const ids = await db.insert(persons).values(personsData).returning({
    id: persons.id,
  });
  const studentsDataWithIds = studentsData.map((student, index) => ({
    ...student,
    id: ids[index].id,
  }));
  await db.insert(students).values(studentsDataWithIds);
};
