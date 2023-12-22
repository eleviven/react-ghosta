import type { ButalertOptions } from "../butalert.types";
import { ButalertManager } from "../ButalertManager";
import { BUTALERT_MESSAGES } from "../utils/messages";

export default (options: Omit<ButalertOptions, "id">) => {
  const butalert = ButalertManager.get();
  if (!butalert) return console.warn(BUTALERT_MESSAGES.REGISTER);
  butalert.fire(options as ButalertOptions);
};
