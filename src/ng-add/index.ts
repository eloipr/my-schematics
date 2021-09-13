import { chain, Rule, schematic, SchematicContext, Tree } from '@angular-devkit/schematics';

import { NgAddSchema } from './ng-add-schema';

export default function (options: NgAddSchema): Rule {
  return (tree: Tree, context: SchematicContext) => {
    if (options.addPrettier) {
      return chain([schematic('prettier', options)])(tree, context);
    } else {
      return tree;
    }
  };
}
