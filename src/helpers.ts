import { Question } from "./index";

 enum QuestionIds {
    GAD7_1 = 'q-9c476268-3ad9-40e8-a3c7-d6ef649a5824',
    GAD7_2 = 'q-4d4b1de6-8435-41b6-a600-820271109e7c',
    GAD7_3 = 'q-e189ac00-2fcc-471e-9633-950a63145d4a',
    GAD7_4 = 'q-d116f485-6c8c-408d-89c6-b39503c53aa6',
    GAD7_5 = 'q-d7f5d653-3a14-445a-9e6c-eb0409ba5872',
    GAD7_6 = 'q-a062723d-46fa-4fbe-8a35-ccb642ae647e',
    GAD7_7 = 'q-8f4bc1b9-550d-471f-b3ae-8c5797b8e3b1',
    SEX_SEX = 'q-33274eb3-0e5c-4101-b2ff-723025d4bb4e',
    SEX_GENDER = 'q-f9762470-c5d2-4d5c-aee5-72d9ef7099ea',
    Y17 = 'q-a1e8bbdc-145f-4c07-af06-59f2159aadf9',
    WP11 = 'q-6ea16287-d6b1-4cb3-ba06-03fcb3191876',
    WP4B1 = 'q-91b61f01-3b0f-4486-93e2-41fee7b63df8',
    WP4C1 = 'q-b627223f-1b81-4615-93ad-683fde65cfac',
    WP4E1 = 'q-263d6824-bb62-41ee-a56f-9aef65d9e4d2',
    WP4C2 = 'q-d51ae5be-3f05-4b83-b6d3-9f975336b826',
    WP4E2 = 'q-df6a7e30-ef31-45d8-9da8-dfb63821a028',
    WP4C3 = 'q-e55069f0-6e98-47ea-a1ed-67115e7fa179',
    WP4E3 = 'q-d5e77912-6124-4038-a908-24fa6d7e3130',
    WP4C4 = 'q-03fa7ff9-588a-4d24-9f86-f79914002a5d',
    WP4E4 = 'q-04a3500f-9714-411a-958e-e066b8aa57b9',
    WP4C5 = 'q-ce199feb-5539-4368-812c-a491b4c796d5',
    H10A = 'q-9ce7f2c6-0bc9-4685-a231-faa3170c8632',
    MH2 = 'q-1204dab4-511e-49d0-b8f6-b635ea313cfd',
    FH7 = 'q-e762ca11-d611-4daa-ad8a-1761844e542d',
    FH3C_MM = 'q-ba2e4897-9419-4901-99e1-86ef0b727fbf',
    FH3C = 'q-4ba5298d-bbc5-4a99-8b16-be18f6ec0d2d',
    FH4 = 'q-c35bcbd7-ad6a-4095-a930-7f431b7a6349',
    Y18 = 'q-f856f1ab-289e-4b7f-a66f-b8634a9024c6',
    H10 = 'q-a5d12b50-5e9f-42bc-becb-c0c476c2551a',
    MH7 = 'q-0a06152b-e531-4ec5-8113-31142724c45e',
    FH2 = 'q-4994ff22-b17c-412e-a81e-d87a39beac0a',
    FH2A = 'q-4155fe93-b03d-416e-b269-7693a7005213',
    FH2B = 'q-9418fce7-e615-4bf5-9481-9b41f7267983',
    FH2C = 'q-bbe2b2bb-6c39-4cbf-869d-decefc20fcfb',
    FH3 = 'q-de29fd3a-ab01-4554-a22b-4a1b88563c32',
    FH3D = 'q-029e1fd4-450c-4f8b-8e93-1f12977ca9fd',
    FH3D_MM = 'q-5ff4c32e-388f-48b6-afa1-c27e55313134',
    FH5 = 'q-0cb2be39-9fcc-455c-99be-c3671d07d79b',
    L7A = 'q-3888b351-a80f-4603-8c5c-3c45cdf74599',
    D7 = 'q-f0c3255b-e8cc-4f07-abc9-8ac754455158',
    D7A = 'q-4932bcd0-8da8-44f8-affc-58b2e607608f',
    D8 = 'q-969822c0-2a9f-45a8-b598-7a6c0fb6cebf',
    D9 = 'q-8ed95ac4-c2a3-447f-91c9-3a25105d596c',
    D9AA = 'q-b9d865a8-30de-4bbf-b92b-77ce7a38e4dd',
    D12 = 'q-f4c323a8-8057-4a2e-81b4-aeb8f6e8352f',
    Ht = 'q-7cb272fa-ebd3-4b51-b700-9fa791934008',
    Wt = 'q-337d0852-2674-4432-a2d6-109939b54e26',
    Ht_Wt_M = 'q-d9d112f4-577a-4acc-a9cc-62e6fb507516',
    L1 = 'q-019f4cea-245c-43f4-b0f5-bcb00b1fc8b2',
    L5DF = 'q-976bae4f-bc5f-4182-a7d5-4b1538118282',
    PHQ9_1 = 'q-823231ff-6ee3-4d74-9875-f556c1caf8c7',
    PHQ9_2 = 'q-12f24c6b-455b-4561-9c11-f15414800450',
    PHQ9_3 = 'q-74d61778-d70f-4131-a2e5-64968580211f',
    PHQ9_4 = 'q-dc40c509-0a8f-4aff-b61b-bf4729c21f6a',
    PHQ9_5 = 'q-d8107f31-e427-439a-88da-86d076e9159b',
    PHQ9_6 = 'q-9e617c47-96ea-4282-888e-c7d9e10d7a13',
    PHQ9_7 = 'q-8c3fb165-45bd-41ae-8c1b-956a116e7971',
    PHQ9_8 = 'q-bc6d2f0a-a1b0-46da-8bc9-b5fc0069903c',
    PHQ9_9 = 'q-334a59f6-7ab0-4cc2-8ab6-6fe4a7bfca7f',
    S1 = 'q-6283cdbe-2b91-441b-bdb7-e0ed5bd26829',
    S2 = 'q-a4e3fbbe-bdbd-463f-947e-ea82a97746cd',
    S3 = 'q-ea8bdbcd-387d-4740-90b5-c083ab562aee',
    SKIP1 = 'q-99385f80-faa4-4192-95bd-a87fcbde08ad',
    WP1 = 'q-3a089a25-db56-4490-91c6-1f326bf6e0fa',
    WP1A = 'q-3b468e0c-e783-439d-b83d-a9ea4c92776d',
    WP2 = 'q-4253f4fe-40bf-4462-9ccb-29c4bbc986d3',
    WP3A = 'q-6a152c16-ede0-47fe-b487-76cd3e8d01bb',
    WP4 = 'q-d06d8ee9-38f4-4a39-8038-d2575411c19e',
    WP4AA = 'q-13d91a35-e4e5-480d-90cb-0d82b21e42c7',
    S4AB = 'q-256bbd2a-2e73-4028-ac61-f36be8b83973',
    S4AC = 'q-5ae6020e-d7fb-4bec-8a61-7734a51a27be',
    S4A = 'q-a16add0e-1a7d-4299-93ec-62a9abc2e5fe',
    S5A = 'q-842ee90e-e941-4471-892b-40041e1192fe',
    S5B = 'q-7e76ba3c-c20c-43d3-91fd-e7849a4feab2',
    S6 = 'q-0b3f120e-e836-458f-a8a4-dd0386aa3ae8',
    S7 = 'q-a2591c0a-5669-41d3-8778-1e1531c5d4cd',
    S7A = 'q-b86a1525-baef-43fe-98b9-a61a35d157d2',
    S8 = 'q-7169a92c-6ccc-4fc8-82c2-fd80dc971e16',
    S9 = 'q-a5141881-f52d-49d3-bf21-5c31e10378b4',
    S11 = 'q-70633f01-8d05-4d50-8fe3-eaf92ae8b49c',
    SY2 = 'q-f45403fd-378b-4711-b094-a7a77cf44fcd',
    SY3 = 'q-8681c046-71a2-4937-9111-d177183d9464',
    SY4I = 'q-4ac8b955-d4ca-49a2-9464-7ebe5cc8f95d',
    END = 'END',
}

const SPECIAL_CASE_QUESTIONS: {[key in QuestionIds | string]: string[]} = {
    "q-f0c3255b-e8cc-4f07-abc9-8ac754455158": [ // D7
        QuestionIds.D8,
        QuestionIds.D7A
    ],
    "q-8ed95ac4-c2a3-447f-91c9-3a25105d596c": [ // D9
        QuestionIds.D12,
        QuestionIds.D9AA
    ],
    "q-4994ff22-b17c-412e-a81e-d87a39beac0a": [ //FH2
        QuestionIds.FH2A, //FH2A
        QuestionIds.FH2B, //FH2B
        QuestionIds.FH5, //FH5
        QuestionIds.FH3, //FH3
    ],
    "q-4155fe93-b03d-416e-b269-7693a7005213": [ //FH2A
        QuestionIds.FH5, //FH5
        QuestionIds.FH3, //FH3
    ],
    "q-bbe2b2bb-6c39-4cbf-869d-decefc20fcfb": [ //FH2C
        QuestionIds.FH5, //FH5
        QuestionIds.FH3, //FH3
    ], 
    "q-de29fd3a-ab01-4554-a22b-4a1b88563c32": [ //FH3
        QuestionIds.FH5, //FH5
        QuestionIds.FH3D, //FH3D
        QuestionIds.FH3C, //FH3C
    ],
    "q-5ff4c32e-388f-48b6-afa1-c27e55313134": [ //FH3D_MM
        QuestionIds.L1, //L1
        QuestionIds.FH7, //FH7
    ],
    "q-a5d12b50-5e9f-42bc-becb-c0c476c2551a": [ //H10
        QuestionIds.H10A,
        QuestionIds.MH2, //MH2
        QuestionIds.FH7, //FH7
    ],
    "q-9ce7f2c6-0bc9-4685-a231-faa3170c8632": [ //H10A
        QuestionIds.MH2, //MH2
        QuestionIds.FH7, //FH7
    ],
    "q-0a06152b-e531-4ec5-8113-31142724c45e": [ //MH7
        QuestionIds.L1, //L1
        QuestionIds.FH7, //FH7
        QuestionIds.FH3C_MM, //FH3C_MM
    ],
    "q-6283cdbe-2b91-441b-bdb7-e0ed5bd26829": [ // S1
        QuestionIds.S3,
        QuestionIds.S2,
    ],
    "q-256bbd2a-2e73-4028-ac61-f36be8b83973": [ // S4AB
        QuestionIds.S4A,
        QuestionIds.S4AC,
    ],
    [QuestionIds.S5A]: [
        QuestionIds.S5B,
        QuestionIds.S7,
        QuestionIds.S6,
    ],
    [QuestionIds.S5B]: [
        QuestionIds.S7,
        QuestionIds.S6,
    ],
    [QuestionIds.S7]: [
        QuestionIds.S7A,
        QuestionIds.S9,
        QuestionIds.S8,
    ],
    [QuestionIds.S7A]: [
        QuestionIds.S11,
        QuestionIds.S9,
        QuestionIds.S8,
    ],
    "q-f45403fd-378b-4711-b094-a7a77cf44fcd": [ //SY2
        QuestionIds.SY4I, //SY4I
        QuestionIds.SY3, //SY3
    ],
    [QuestionIds.WP1]: [
        QuestionIds.WP2,
        QuestionIds.WP1A,
    ],
    [QuestionIds.WP3A]: [
        QuestionIds.WP4AA,
        QuestionIds.WP4,
    ],
    [QuestionIds.WP4B1]: [
        QuestionIds.WP4C1,
        QuestionIds.WP4C2,
        QuestionIds.WP4C3,
        QuestionIds.WP4C4,
        QuestionIds.WP4C5,
        QuestionIds.WP11,
    ],
    [QuestionIds.WP4E1]: [
        QuestionIds.WP4C2,
        QuestionIds.WP4C3,
        QuestionIds.WP4C4,
        QuestionIds.WP4C5,
        QuestionIds.WP11,
    ],
    [QuestionIds.WP4E2]: [
        QuestionIds.WP4C3,
        QuestionIds.WP4C4,
        QuestionIds.WP4C5,
        QuestionIds.WP11,
    ],
    [QuestionIds.WP4E3]: [
        QuestionIds.WP4C4,
        QuestionIds.WP4C5,
        QuestionIds.WP11,
    ],
    [QuestionIds.WP4E4]: [
        QuestionIds.WP4C5,
        QuestionIds.WP11,
    ],
    [QuestionIds.Ht_Wt_M]: [
        QuestionIds.Ht,
    ],
    [QuestionIds.Ht]: [
        QuestionIds.Wt,
    ],
    [QuestionIds.Wt]: [
      "q-623ececf-ab0d-4d93-8b8a-463671926292"
    ],
    [QuestionIds.Y18]: [
        "q-f8dfdb12-6d33-44c2-92a1-c714c5a22128",
        "END",
    ]
}

export const findPossibleNextQuestions = (question: Question, nextQuestion: Question): { questionId: string }[] => {
    if (Object.keys(SPECIAL_CASE_QUESTIONS).includes(question.questionId)) {
        return SPECIAL_CASE_QUESTIONS[question.questionId].map(id => ({ questionId: id}));
    }

    const possibleNextQuestions: { questionId: string }[] = []
    if (canGoToNextQuestionInTemplate(question)) possibleNextQuestions.push(nextQuestion);

    const nextQuestionsFromNextQuestionIdGoTo = getNextQuestionsFromNextQuestionIdGoTo(question);
    possibleNextQuestions.push(...nextQuestionsFromNextQuestionIdGoTo);

    return possibleNextQuestions;
}

export const getNextQuestionsFromNextQuestionIdGoTo = (question: Question): { questionId: string }[] => {
    const { answers } = question;
    const answersWithNextQuestionIdGoTo = answers.filter(answer => answer.nextQuestionIdGoTo);

    if (answersWithNextQuestionIdGoTo.length === 0) return [];
    return answersWithNextQuestionIdGoTo.map(answer => ({ questionId: answer.nextQuestionIdGoTo } as { questionId: string }));
}

export const canGoToNextQuestionInTemplate = (question: Question) => {
    const { answers } = question;
    return answers.filter(answer => !answer.nextQuestionIdGoTo).length > 0;
}

