import * as helpers from '../src/helpers'

describe ('Testing', () => {
    describe('testing canGoToNextQuestionInTemplate', () => {
        it('should return true, when not all answers contains nextQuestionIdGoTo', () => {
            const question = {
                "questionId": '1',
                "answers": [
                    { "value": "1", "answer": "Excellent" },
                    { "value": "2", "answer": "Good" },
                    { "value": "3", "answer": "Fair" }
                ]
            }

            const result = helpers.canGoToNextQuestionInTemplate(question);

            expect(result).toBeTruthy();
        })

        it('should return false, when all answers contains nextQuestionIdGoTo', () => {
            const question = {
                "questionId": '1',
                "answers": [
                    { "value": "1", "answer": "Excellent", "nextQuestionIdGoTo": "1" },
                    { "value": "2", "answer": "Good", "nextQuestionIdGoTo": "1"},
                    { "value": "3", "answer": "Fair", "nextQuestionIdGoTo": "1" }
                ]
            }

            const result = helpers.canGoToNextQuestionInTemplate(question);

            expect(result).toBeFalsy();
        })


        it('should return true, when not all answers contains nextQuestionIdGoTo', () => {
            const question = {
                "questionId": '1',
                "answers": [
                    { "value": "1", "answer": "Excellent" },
                    { "value": "2", "answer": "Good", "nextQuestionIdGoTo": "1"},
                    { "value": "3", "answer": "Fair", "nextQuestionIdGoTo": "1" }
                ]
            }

            const result = helpers.canGoToNextQuestionInTemplate(question);

            expect(result).toBeTruthy();
        })
    })

    describe('testing getNextQuestionsFromNextQuestionIdGoTo', () => {
        it('should return empty array when no question has nextQuestionIdGoTo', () => {
            const question = {
                "questionId": '1',
                "answers": [
                    { "value": "1", "answer": "Excellent" },
                    { "value": "2", "answer": "Good" },
                    { "value": "3", "answer": "Fair" }
                ]
            }

            const result = helpers.getNextQuestionsFromNextQuestionIdGoTo(question);

            expect(result).toHaveLength(0);
            expect(result).toStrictEqual([]);
        })

        it('should return array with questionId from nextQuestionIdGoTo', () => {
            const question = {
                "questionId": '1',
                "answers": [
                    { "value": "1", "answer": "Excellent" },
                    { "value": "2", "answer": "Good" },
                    { "value": "3", "answer": "Fair", "nextQuestionIdGoTo": "1" }
                ]
            }

            const result = helpers.getNextQuestionsFromNextQuestionIdGoTo(question);

            expect(result).toHaveLength(1);
            expect(result[0]).toStrictEqual({ questionId: "1" });
        })
    })
})