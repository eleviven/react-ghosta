import type { GhostaActions } from './types';

export const GhostaManager = {
  ghosta: null as GhostaActions | null,

  register(ghosta: GhostaActions) {
    if (!this.ghosta && 'id' in ghosta) {
      this.ghosta = ghosta;
    }
  },

  unregister(id: number | undefined) {
    if (!!this.ghosta && this.ghosta.id === id) {
      this.ghosta = null;
    }
  },

  get() {
    return this.ghosta as GhostaActions;
  },
};
