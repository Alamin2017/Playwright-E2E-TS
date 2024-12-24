import { Status } from "allure-js-commons";
export var statusToAllureStats = function statusToAllureStats(status, expectedStatus) {
  if (status === "skipped") {
    return Status.SKIPPED;
  }
  if (status === "timedOut") {
    return Status.BROKEN;
  }
  if (status === expectedStatus) {
    return Status.PASSED;
  }
  return Status.FAILED;
};
//# sourceMappingURL=utils.js.map