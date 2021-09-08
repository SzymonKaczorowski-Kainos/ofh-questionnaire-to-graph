import * as nunjucks from 'nunjucks';
import * as fs from 'fs';
import { Graph, json } from 'graphlib';

export function visualizeTemplate(graph: Graph, name: string) {
    const graphObject = json.write(graph) as any;
    graphObject.value = {};
    nunjucks.configure('views', {autoescape: false});
    fs.writeFileSync(
        name, 
        nunjucks.render('graphDisplay.njk', {
            graph: JSON.stringify(graphObject),
        })
    );
}
