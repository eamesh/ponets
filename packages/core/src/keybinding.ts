import { injectable } from 'inversify';

@injectable()
export class KeybingRegistry {
  run (event: KeyboardEvent): void {
    if (event.defaultPrevented) return;

    // TODO...
  }
}
