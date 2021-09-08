import * as fs from 'fs';
import { Graph } from 'graphlib';
import * as Helpers from './helpers';
import * as GraphHelpers from './graphHelpers';
import * as Renderer from './renderer';
import * as _ from 'lodash';

const jsonTemplate = require('./templateQuestions.json');
const jsonTemplate1 = require('./templateQuestions1.json');
const jsonTemplate2 = require('./templateQuestions2.json');
const jsonTemplate3 = require('./templateQuestions3.json');
const jsonTemplate4 = require('./templateQuestions4.json');
const jsonTemplate5 = require('./templateQuestions5.json');


export interface Question {
    questionId: string;
    answers: {
        value: string,
        answer: string,
        nextQuestionIdGoTo?: string 
    }[]
}

const graph = new Graph({directed: true});
const { questions } = jsonTemplate4;
graph.setNode('END', { 'label': 'END' });
graph.setDefaultEdgeLabel({});
for (let i = 0; i < questions.length; i++) {
    const possibleNextQuestions = Helpers.findPossibleNextQuestions(questions[i], questions[i + 1]); 

    graph.setNode(questions[i].questionId, {
       'label': `<p style='width=100%; text-align: center'>${questions[i].questionId}</p><p style='width=100%; text-align: center'>${questions[i].question}</p>`,
       'labelType': "html",
    }) ;
    if (i === questions.length - 1) {
        graph.setEdge(
            questions[i].questionId, 
            'END',
        );
    } else {
        for (let possibleNextQuestion of possibleNextQuestions) {
            graph.setEdge(
                questions[i].questionId, 
                possibleNextQuestion.questionId,
            );
        }
    }
}

// const periodPaths = GraphHelpers.getAllPaths('q-441dd55c-d351-4bc2-87c4-69b418952cff', 'q-4155fe93-b03d-416e-b269-7693a7005213', graph, graph.nodeCount());
// fs.writeFileSync('output/output.json', JSON.stringify(periodPaths, null, 2));
// console.log('output saved to output/output.json');
// console.log(periodPaths.length);

Renderer.visualizeTemplate(graph,'output/graphDisplay4.html');

// console.log(GraphHelpers.getCycles(graph, questions));