import { ButalertManager } from '../ButalertManager';
import { BUTALERT_MESSAGES } from '../utils/messages';

export default () => {
  const butalert = ButalertManager.get();
  if (!butalert) return console.warn(BUTALERT_MESSAGES.REGISTER);
  butalert.closeAll();
};
