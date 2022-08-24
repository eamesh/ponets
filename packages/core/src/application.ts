import { injectable } from 'inversify';

export const ApplicationContribution = Symbol('Application');

export interface ApplicationContribution {
  initialize?(): void;
}

@injectable()
export class Application {
	start (): void {
		//
	}

	protected registerEventListeners(): void {
		//
	}
}
