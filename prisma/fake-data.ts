import { Role, Level } from '@prisma/client';
import { faker } from '@faker-js/faker';
import Decimal from 'decimal.js';



export function fakeUser() {
  return {
    name: faker.person.fullName(),
    email: undefined,
    password: faker.lorem.words(5),
    updatedAt: faker.date.anytime(),
  };
}
export function fakeUserComplete() {
  return {
    id: faker.string.uuid(),
    name: faker.person.fullName(),
    email: undefined,
    password: faker.lorem.words(5),
    role: Role.admin,
    createdAt: new Date(),
    updatedAt: faker.date.anytime(),
  };
}
export function fakeQuizCategory() {
  return {
    designation: faker.lorem.words(5),
    updatedAt: faker.date.anytime(),
  };
}
export function fakeQuizCategoryComplete() {
  return {
    id: faker.string.uuid(),
    designation: faker.lorem.words(5),
    description: '',
    authorId: faker.string.uuid(),
    createdAt: new Date(),
    updatedAt: faker.date.anytime(),
  };
}
export function fakeQuizQuestion() {
  return {
    statement: faker.lorem.words(5),
    response: faker.number.int(),
    updatedAt: faker.date.anytime(),
  };
}
export function fakeQuizQuestionComplete() {
  return {
    id: faker.string.uuid(),
    statement: faker.lorem.words(5),
    response: faker.number.int(),
    quizId: faker.string.uuid(),
    createdAt: new Date(),
    updatedAt: faker.date.anytime(),
  };
}
export function fakeQuestionPropsItem() {
  return {
    content: faker.lorem.words(5),
    updatedAt: faker.date.anytime(),
  };
}
export function fakeQuestionPropsItemComplete() {
  return {
    id: faker.number.int(),
    content: faker.lorem.words(5),
    questionId: faker.string.uuid(),
    createdAt: new Date(),
    updatedAt: faker.date.anytime(),
  };
}
export function fakeQuiz() {
  return {
    title: faker.lorem.words(5),
    level: faker.helpers.arrayElement([Level.easy, Level.medium, Level.hard] as const),
    updatedAt: faker.date.anytime(),
  };
}
export function fakeQuizComplete() {
  return {
    id: faker.string.uuid(),
    title: faker.lorem.words(5),
    categoryId: faker.string.uuid(),
    authorId: faker.string.uuid(),
    level: faker.helpers.arrayElement([Level.easy, Level.medium, Level.hard] as const),
    createdAt: new Date(),
    updatedAt: faker.date.anytime(),
  };
}
export function fakeQuizScores() {
  return {
    updatedAt: faker.date.anytime(),
  };
}
export function fakeQuizScoresComplete() {
  return {
    id: faker.string.uuid(),
    playerId: faker.string.uuid(),
    quizId: faker.string.uuid(),
    currentValue: 0,
    createdAt: new Date(),
    updatedAt: faker.date.anytime(),
  };
}
