import type { GhostaOptions } from '../types';
import { GhostaManager } from '../GhostaManager';
import { GHOSTA_MESSAGES } from '../utils/messages';

export default (id: GhostaOptions['id']) => {
  const ghosta = GhostaManager.get();
  if (!ghosta) return console.warn(GHOSTA_MESSAGES.REGISTER);
  ghosta.close(id);
};
