import { inject, injectable } from 'inversify';
import { KeybingRegistry } from './keybinding';

export const ApplicationContribution = Symbol('ApplicationContribution');

export interface ApplicationContribution {
  initialize?(): void;
}

@injectable()
export class Application {

  constructor(
    @inject(KeybingRegistry) protected readonly keybindings: KeybingRegistry
  ) {}

	start (): void {
		//
	}

	protected registerEventListeners(): void {
		// keybings
    document.addEventListener('keydown', event => {
      // TODO ...
      this.keybindings.run(event);
    }, true);
	}
}
