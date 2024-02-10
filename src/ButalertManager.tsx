import type { ButalertActions } from './butalert.types';

export const ButalertManager = {
  butalert: null as ButalertActions | null,

  register(butalert: ButalertActions) {
    if (!this.butalert && 'id' in butalert) {
      this.butalert = butalert;
    }
  },

  unregister(butalertId: number | undefined) {
    if (!!this.butalert && this.butalert.id === butalertId) {
      this.butalert = null;
    }
  },

  get() {
    return this.butalert as ButalertActions;
  },
};
