export const rules = [
  {
    id: 11,
    parent: null,
    title: 'Prepositions',
    rule: 'A preposition is a word or set of words that indicates location (in, near, beside, on top of) or some other relationship between a noun or pronoun and other parts of the sentence (about, after, besides, instead of, in accordance with). A preposition is not a preposition unless it goes with a related noun or pronoun, called the object of the preposition.',
    example: "Let's meet before noon",
    explanation: 'Before is a preposition; noon is its object.',
  },
  {
    id: 12,
    parent: 11,
    title: 'in',
    rule: 'months/seasons, years, time of day, centuries and historical periods, after a certain period of time',
    example: 'in August. in the summer. in the evening. Mystic Market closes in two hours',
    explanation: 'It has many functions, such as expressing time, place, and manner',
  },
  {
    id: 13,
    parent: 11,
    title: 'at',
    rule: 'time of days, noon, night, and midnight, names of mealtime, age',
    example: 'at 2:30. at night. at breakfast. I learned how to use a computer at 12',
    explanation:
      'The preposition “at” can be used in multiple contexts, such as telling time or location. However, “at” can also be used to introduce prepositional phrases that identify the object of a sentence.',
  },
  {
    id: 21,
    parent: null,
    title: 'Adjectives and Adverbs',
    rule: 'An adjective is a word or set of words that modifies (i.e., describes) a noun or pronoun. Adjectives may come before the word they modify. An adverb is a word or set of words that modifies verbs, adjectives, or other adverbs. Adverbs answer how, when, where, why, or to what extent—how often or how much (e.g., daily, completely).',
    example: 'That puppy looks cute. He speaks slowly (tells how)',
    explanation:
      'Avoid the trap of -ly with linking verbs such as taste, smell, look, feel, which pertain to the senses.',
  },
  {
    id: 22,
    parent: 21,
    title: 'Bad or Badly',
    rule: 'Bad is an adjective used with linking verbs such as feel, seem, be, look, etc. Badly is an adverb used to modify action verbs.',
    example:
      'Incorrect:   I feel badly that he is not taking part in the game. Correct:   I feel bad that he is not taking part in the game.',
    explanation:
      'Incorrect:   Sometimes Hollywood romance ends bad. Correct:   Sometimes Hollywood romance ends badly.',
  },
  {
    id: 23,
    parent: 21,
    title: 'Calm or Calmly',
    rule: 'Calm is an adjective, and it is used to modify nouns and pronouns. It is also used with linking verbs. Calmly is an adverb that modifies verbs.',
    example: 'Incorrect:   She appeared calmly after the accident. Correct:   She appeared calm after the accident.',
    explanation:
      'Incorrect:   She tried to be brave and take the bad news calm. Correct:   She tried to be brave and take the bad news calmly.',
  },
  {
    id: 31,
    parent: null,
    title: 'Helping Verbs',
    rule: 'A helping verb is a verb that combines with a main verb to form a verb phrase. Sometimes it is also called a verb marker, because it indicates that a verb is to follow. To be: is, am, are, was, were, will be. To have: have, has, had, will have. To do: do, does, did, will do',
    example: 'We were shopping at the mall yesterday.',
    explanation: 'Helping verbs can change depending on whether they are indicating a past, present, or future action.',
  },
  {
    id: 32,
    parent: 31,
    title: 'To Be',
    rule: 'am, is, are, was, were, being, been, will be',
    example: 'Peter was singing for an hour.',
    explanation:
      'the helping verb "to be" helps to form the progressive tense, which is the tense used for ongoing actions',
  },
  {
    id: 33,
    parent: 31,
    title: 'To Have',
    rule: 'has, have, had, having, will have',
    example: 'Bonzo had eaten the chicken before we could stop him.',
    explanation:
      'the helping verb "to have" helps to form the perfect tense, which is the tense used for expressing an action completion.',
  },
];
