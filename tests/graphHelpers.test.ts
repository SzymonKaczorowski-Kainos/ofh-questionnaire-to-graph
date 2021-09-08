import { Graph } from 'graphlib';
import * as GraphHelpers from '../src/graphHelpers';

describe ('Testing graphHelpers', () => {
    describe ('Testing getAllPaths', () => {
        it("should return two paths", () => {
            const graph = new Graph();
            graph.setEdge('A', 'B');
            graph.setEdge('B', 'C');
            graph.setEdge('B', 'D');
            graph.setEdge('C', 'E');
            graph.setEdge('D', 'E');

            const result = GraphHelpers.getAllPaths('A', 'E', graph);
            expect(result).toHaveLength(2);
            expect(result).toContainEqual(['A','B','C','E']);
            expect(result).toContainEqual(['A','B','D','E']);
        })

        it("should return three paths", () => {
            const graph = new Graph();
            graph.setEdge('A', 'B');
            graph.setEdge('B', 'C');
            graph.setEdge('B', 'D');
            graph.setEdge('C', 'E');
            graph.setEdge('D', 'E');
            graph.setEdge('B', 'F');
            graph.setEdge('F', 'G');
            graph.setEdge('G', 'E');

            const result = GraphHelpers.getAllPaths('A', 'E', graph);
            expect(result).toHaveLength(3);
            expect(result).toContainEqual(['A','B','C','E']);
            expect(result).toContainEqual(['A','B','D','E']);
            expect(result).toContainEqual(['A','B','F','G', 'E']);
        })

        it("should return three paths when one is blind", () => {
            const graph = new Graph();
            graph.setEdge('A', 'B');
            graph.setEdge('B', 'C');
            graph.setEdge('B', 'D');
            graph.setEdge('C', 'E');
            graph.setEdge('D', 'E');
            graph.setEdge('B', 'F');
            graph.setEdge('F', 'G');
            graph.setEdge('G', 'E');
            graph.setEdge('F', 'X');

            const result = GraphHelpers.getAllPaths('A', 'E', graph);
            expect(result).toHaveLength(3);
            expect(result).toContainEqual(['A','B','C','E']);
            expect(result).toContainEqual(['A','B','D','E']);
            expect(result).toContainEqual(['A','B','F','G','E']);
        })
    });

    describe('Testing getCycles', () => {
        it('should return cycle path', () => {
            const graph = new Graph();
            graph.setEdge('S', 'A');
            graph.setEdge('A', 'B');
            graph.setEdge('B', 'C');
            graph.setEdge('C', 'A');
            const nodes = [
                { questionId: 'S' },
                { questionId: 'A' },
                { questionId: 'B' },
                { questionId: 'C' },
            ]

            const result = GraphHelpers.getCycles(graph, nodes);

            expect(result).toHaveLength(1);
            expect(result).toContainEqual(['A', 'B', 'C', 'A'])
        })
    })
});