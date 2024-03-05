/*
  Warnings:

  - You are about to drop the column `confrences` on the `faculty` table. All the data in the column will be lost.
  - You are about to drop the column `visible_to` on the `forms` table. All the data in the column will be lost.
  - You are about to drop the column `degisnation` on the `non_teaching_staff` table. All the data in the column will be lost.
  - Added the required column `designation` to the `non_teaching_staff` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
CREATE SEQUENCE auth_roles_id_seq;
ALTER TABLE "auth_roles" ALTER COLUMN "id" SET DEFAULT nextval('auth_roles_id_seq');
ALTER SEQUENCE auth_roles_id_seq OWNED BY "auth_roles"."id";

-- AlterTable
CREATE SEQUENCE club_members_id_seq;
ALTER TABLE "club_members" ALTER COLUMN "id" SET DEFAULT nextval('club_members_id_seq');
ALTER SEQUENCE club_members_id_seq OWNED BY "club_members"."id";

-- AlterTable
CREATE SEQUENCE club_socials_id_seq;
ALTER TABLE "club_socials" ALTER COLUMN "id" SET DEFAULT nextval('club_socials_id_seq');
ALTER SEQUENCE club_socials_id_seq OWNED BY "club_socials"."id";

-- AlterTable
CREATE SEQUENCE clubs_id_seq;
ALTER TABLE "clubs" ALTER COLUMN "id" SET DEFAULT nextval('clubs_id_seq');
ALTER SEQUENCE clubs_id_seq OWNED BY "clubs"."id";

-- AlterTable
CREATE SEQUENCE course_logs_id_seq;
ALTER TABLE "course_logs" ALTER COLUMN "id" SET DEFAULT nextval('course_logs_id_seq');
ALTER SEQUENCE course_logs_id_seq OWNED BY "course_logs"."id";

-- AlterTable
CREATE SEQUENCE courses_id_seq;
ALTER TABLE "courses" ALTER COLUMN "id" SET DEFAULT nextval('courses_id_seq');
ALTER SEQUENCE courses_id_seq OWNED BY "courses"."id";

-- AlterTable
CREATE SEQUENCE deans_id_seq;
ALTER TABLE "deans" ALTER COLUMN "id" SET DEFAULT nextval('deans_id_seq');
ALTER SEQUENCE deans_id_seq OWNED BY "deans"."id";

-- AlterTable
CREATE SEQUENCE departments_id_seq;
ALTER TABLE "departments" ALTER COLUMN "id" SET DEFAULT nextval('departments_id_seq');
ALTER SEQUENCE departments_id_seq OWNED BY "departments"."id";

-- AlterTable
CREATE SEQUENCE faculty_id_seq;
ALTER TABLE "faculty" DROP COLUMN "confrences",
ADD COLUMN     "conferences" VARCHAR[],
ALTER COLUMN "id" SET DEFAULT nextval('faculty_id_seq');
ALTER SEQUENCE faculty_id_seq OWNED BY "faculty"."id";

-- AlterTable
CREATE SEQUENCE faculty_feedback_id_seq;
ALTER TABLE "faculty_feedback" ALTER COLUMN "id" SET DEFAULT nextval('faculty_feedback_id_seq');
ALTER SEQUENCE faculty_feedback_id_seq OWNED BY "faculty_feedback"."id";

-- AlterTable
CREATE SEQUENCE form_questions_id_seq;
ALTER TABLE "form_questions" ALTER COLUMN "id" SET DEFAULT nextval('form_questions_id_seq'),
ALTER COLUMN "description" DROP NOT NULL,
ALTER COLUMN "page_number" SET DEFAULT 0,
ALTER COLUMN "page_number" SET DATA TYPE REAL;
ALTER SEQUENCE form_questions_id_seq OWNED BY "form_questions"."id";

-- AlterTable
CREATE SEQUENCE form_submissions_id_seq;
ALTER TABLE "form_submissions" ADD COLUMN     "is_submitted" BOOLEAN NOT NULL DEFAULT false,
ALTER COLUMN "id" SET DEFAULT nextval('form_submissions_id_seq');
ALTER SEQUENCE form_submissions_id_seq OWNED BY "form_submissions"."id";

-- AlterTable
CREATE SEQUENCE forms_id_seq;
ALTER TABLE "forms" DROP COLUMN "visible_to",
ALTER COLUMN "id" SET DEFAULT nextval('forms_id_seq'),
ALTER COLUMN "description" DROP NOT NULL,
ALTER COLUMN "is_published" SET DEFAULT false;
ALTER SEQUENCE forms_id_seq OWNED BY "forms"."id";

-- AlterTable
CREATE SEQUENCE hod_id_seq;
ALTER TABLE "hod" ALTER COLUMN "id" SET DEFAULT nextval('hod_id_seq');
ALTER SEQUENCE hod_id_seq OWNED BY "hod"."id";

-- AlterTable
CREATE SEQUENCE majors_id_seq;
ALTER TABLE "majors" ALTER COLUMN "id" SET DEFAULT nextval('majors_id_seq');
ALTER SEQUENCE majors_id_seq OWNED BY "majors"."id";

-- AlterTable
CREATE SEQUENCE non_teaching_staff_id_seq;
ALTER TABLE "non_teaching_staff" DROP COLUMN "degisnation",
ADD COLUMN     "designation" VARCHAR NOT NULL,
ALTER COLUMN "id" SET DEFAULT nextval('non_teaching_staff_id_seq');
ALTER SEQUENCE non_teaching_staff_id_seq OWNED BY "non_teaching_staff"."id";

-- AlterTable
CREATE SEQUENCE persons_id_seq;
ALTER TABLE "persons" ALTER COLUMN "id" SET DEFAULT nextval('persons_id_seq');
ALTER SEQUENCE persons_id_seq OWNED BY "persons"."id";

-- AlterTable
CREATE SEQUENCE phd_log_id_seq;
ALTER TABLE "phd_log" ALTER COLUMN "id" SET DEFAULT nextval('phd_log_id_seq');
ALTER SEQUENCE phd_log_id_seq OWNED BY "phd_log"."id";

-- AlterTable
CREATE SEQUENCE research_work_id_seq;
ALTER TABLE "research_work" ALTER COLUMN "id" SET DEFAULT nextval('research_work_id_seq');
ALTER SEQUENCE research_work_id_seq OWNED BY "research_work"."id";

-- AlterTable
CREATE SEQUENCE roles_id_seq;
ALTER TABLE "roles" ALTER COLUMN "id" SET DEFAULT nextval('roles_id_seq');
ALTER SEQUENCE roles_id_seq OWNED BY "roles"."id";

-- AlterTable
CREATE SEQUENCE sections_id_seq;
ALTER TABLE "sections" ALTER COLUMN "id" SET DEFAULT nextval('sections_id_seq');
ALTER SEQUENCE sections_id_seq OWNED BY "sections"."id";

-- AlterTable
CREATE SEQUENCE sponsored_research_projects_id_seq;
ALTER TABLE "sponsored_research_projects" ALTER COLUMN "id" SET DEFAULT nextval('sponsored_research_projects_id_seq');
ALTER SEQUENCE sponsored_research_projects_id_seq OWNED BY "sponsored_research_projects"."id";

-- AlterTable
CREATE SEQUENCE student_academic_details_student_id_seq;
ALTER TABLE "student_academic_details" ALTER COLUMN "student_id" SET DEFAULT nextval('student_academic_details_student_id_seq');
ALTER SEQUENCE student_academic_details_student_id_seq OWNED BY "student_academic_details"."student_id";

-- AlterTable
CREATE SEQUENCE students_id_seq;
ALTER TABLE "students" ALTER COLUMN "id" SET DEFAULT nextval('students_id_seq');
ALTER SEQUENCE students_id_seq OWNED BY "students"."id";

-- CreateTable
CREATE TABLE "form_answers" (
    "id" SERIAL NOT NULL,
    "question_id" INTEGER NOT NULL,
    "submission_id" INTEGER NOT NULL,
    "answer" VARCHAR NOT NULL,

    CONSTRAINT "pk_form_answers" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_forms_modifiable_by" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_forms_visible_to" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_forms_modifiable_by_AB_unique" ON "_forms_modifiable_by"("A", "B");

-- CreateIndex
CREATE INDEX "_forms_modifiable_by_B_index" ON "_forms_modifiable_by"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_forms_visible_to_AB_unique" ON "_forms_visible_to"("A", "B");

-- CreateIndex
CREATE INDEX "_forms_visible_to_B_index" ON "_forms_visible_to"("B");

-- AddForeignKey
ALTER TABLE "form_answers" ADD CONSTRAINT "fk_form_answers_form_questions" FOREIGN KEY ("question_id") REFERENCES "form_questions"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "form_answers" ADD CONSTRAINT "fk_form_answers_form_submissions" FOREIGN KEY ("submission_id") REFERENCES "form_submissions"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "_forms_modifiable_by" ADD CONSTRAINT "_forms_modifiable_by_A_fkey" FOREIGN KEY ("A") REFERENCES "forms"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_forms_modifiable_by" ADD CONSTRAINT "_forms_modifiable_by_B_fkey" FOREIGN KEY ("B") REFERENCES "persons"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_forms_visible_to" ADD CONSTRAINT "_forms_visible_to_A_fkey" FOREIGN KEY ("A") REFERENCES "forms"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_forms_visible_to" ADD CONSTRAINT "_forms_visible_to_B_fkey" FOREIGN KEY ("B") REFERENCES "persons"("id") ON DELETE CASCADE ON UPDATE CASCADE;
