import { Rule, SchematicContext, Tree } from '@angular-devkit/schematics';
import { NodePackageInstallTask } from '@angular-devkit/schematics/tasks';

export function installPackages(): Rule {
  return (tree: Tree, context: SchematicContext): Tree => {
    return context.addTask(new NodePackageInstallTask({ packageName: 'prettier' })) && tree;
  };
}
