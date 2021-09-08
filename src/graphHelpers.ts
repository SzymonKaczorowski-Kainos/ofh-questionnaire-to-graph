import { Question } from './index';
import { Graph, alg } from 'graphlib';
import * as _ from 'lodash';

export function getAllPaths(n1: string, n2: string, graph: Graph, maxDepth = 100): string[][] {
    const path = [n1];
    
    return appendNextNode(path, n2, graph, maxDepth);
}

function appendNextNode(path: string[], node: string, graph: Graph, maxDepth = 100): string[][] {
    if (path.length === maxDepth) return [];
    const nextNodes = graph.successors(path[path.length - 1]);
    if (!nextNodes) return [];
    
    const newPaths = nextNodes.map(node => path.concat(node))
    const [fullPaths, unfinishedPaths] = _.partition(newPaths, path => path.includes(node));

    const finishedPaths = unfinishedPaths.map(unfinishedPath => appendNextNode(unfinishedPath, node, graph));
    return [...fullPaths].concat(...finishedPaths)
}


export function getCycles(graph: Graph, questions: Partial<Question>[]): string[][] {
    const nodesInCycles = alg.findCycles(graph);
    if (!nodesInCycles) return [];

    return nodesInCycles.map(nodesInCycle => {
        const startNode = findEarliestQuestion(nodesInCycle, questions).id;
        return AppendNextNodeFromCycle([startNode], nodesInCycle, graph)
    }).flat(1);
}

export const AppendNextNodeFromCycle = (cyclePath: string[], nodesInCycle: string[], graph: Graph): string[][] => {
    if(cyclePath.length > nodesInCycle.length) return [ cyclePath ];

    const nextNodes = graph.successors(cyclePath[cyclePath.length - 1]);
    if (!nextNodes) return [];
    const validNextNodesInCycle = _.intersection(nextNodes, nodesInCycle);
    const newPaths = validNextNodesInCycle.map(validNextNode => cyclePath.concat(validNextNode));
    const updatedPaths = newPaths.map(path => AppendNextNodeFromCycle(path, nodesInCycle, graph)).flat(1);
    
    return updatedPaths;
}


function findEarliestQuestion(questionIds: string[], questions: Partial<Question>[]) {
    const questionIdByIndex = questionIds.map((id) => {
        const index = questions.findIndex(element => element.questionId === id)
        return { index , id }
    });

    const earliest = _.minBy(questionIdByIndex, 'index');
    return earliest;
}
