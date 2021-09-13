import {
  apply,
  applyTemplates,
  chain,
  MergeStrategy,
  mergeWith,
  Rule,
  SchematicContext,
  SchematicsException,
  Tree,
  url,
} from '@angular-devkit/schematics';

import { installPackages } from '../utils/installPackages';
import { PrettierSchema } from './prettier-schema';

export function prettier(_options: PrettierSchema): Rule {
  return (tree: Tree, _context: SchematicContext) => {
    if (!tree.exists('/angular.json')) {
      throw new SchematicsException('Could not find Angular workspace configuration');
    }

    const parametrizedTemplates = apply(url('./files'), [
      applyTemplates({
        ..._options,
      }),
    ]);
    return chain([mergeWith(parametrizedTemplates, MergeStrategy.Overwrite), installPackages()]);
  };
}
