import { relations } from 'drizzle-orm';
import {
  boolean,
  date,
  integer,
  pgTable,
  smallint,
  smallserial,
  text,
  timestamp,
  varchar,
} from 'drizzle-orm/pg-core';

import { clubMembers, clubSocials, departments, faculty, persons } from '.';

export const clubs = pgTable('clubs', {
  id: smallserial('id').primaryKey(),
  name: varchar('name', { length: 128 }).notNull(),
  alias: varchar('alias', { length: 16 }),
  email: varchar('email').notNull(),
  logo: text('logo').notNull(),
  thumbnail: text('thumbnail').notNull(),
  banner: text('banner').notNull(),
  aboutUs: varchar('about_us').notNull(),
  category: varchar('category', {
    enum: ['committee', 'cultural', 'crew', 'technical'],
  }).notNull(),
  departmentId: smallint('department_id').references(() => departments.id),
  facultyInchargeId1: integer('faculty_incharge_id1')
    .references(() => faculty.id)
    .notNull(),
  facultyInchargeId2: integer('faculty_incharge_id2').references(
    () => faculty.id
  ),
  isActive: boolean('is_active').default(true).notNull(),
  createdOn: date('created_on').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
  updatedBy: integer('updated_by')
    .references(() => persons.id)
    .notNull(),
});

export const clubsRelations = relations(clubs, ({ many, one }) => ({
  clubMembers: many(clubMembers),
  clubSocials: many(clubSocials),
  department: one(departments, {
    fields: [clubs.departmentId],
    references: [departments.id],
  }),
  facultyIncharge1: one(faculty, {
    fields: [clubs.facultyInchargeId1],
    references: [faculty.id],
  }),
  facultyIncharge2: one(faculty, {
    fields: [clubs.facultyInchargeId2],
    references: [faculty.id],
  }),
}));
