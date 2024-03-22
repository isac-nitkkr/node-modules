import { relations, sql } from 'drizzle-orm';
import {
  boolean,
  char,
  date,
  integer,
  pgTable,
  varchar,
} from 'drizzle-orm/pg-core';

import { clubMembers, doctorates, persons } from '.';

export const students = pgTable('students', {
  id: integer('id')
    .primaryKey()
    .references(() => persons.id),
  rollNumber: varchar('roll_number').notNull(),
  telephone: varchar('telephone', { length: 13 })
    .array()
    .default(sql`'{}'`)
    .notNull(),
  personalEmail: varchar('personal_email').notNull(),
  fathersName: varchar('fathers_name', { length: 100 }).notNull(),
  fathersTelephone: varchar('fathers_telephone').notNull(),
  mothersName: varchar('mothers_name', { length: 100 }).notNull(),
  mothersTelephone: varchar('mothers_telephone').notNull(),
  localGuardiansName: varchar('local_guardians_name', { length: 100 }),
  localGuardiansTelephone: varchar('local_guardians_telephone', {
    length: 100,
  }),
  pincode: char('pincode', { length: 6 }).notNull(),
  permanentAddress: varchar('permanent_address').notNull(),
  category: varchar('category'),
  birthday: date('birthday').notNull(),
  applicationNumber: varchar('application_number').notNull(),
  admissionCategory: varchar('admission_category').notNull(),
  isPwd: boolean('is_pwd').default(false).notNull(),
  admissionSubcategory: varchar('admission_subcategory'),
});

export const studentsRelations = relations(students, ({ many, one }) => ({
  // TODO: Explore possibility to make a transitive relation to clubs
  clubMembers: many(clubMembers),
  doctorates: many(doctorates),
  person: one(persons, {
    fields: [students.id],
    references: [persons.id],
  }),
}));
