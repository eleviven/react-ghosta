import { GhostaManager } from "../GhostaManager";
import { GHOSTA_MESSAGES } from "../utils/messages";

export default () => {
  const ghosta = GhostaManager.get();
  if (!ghosta) return console.warn(GHOSTA_MESSAGES.REGISTER);
  ghosta.closeAll();
};
