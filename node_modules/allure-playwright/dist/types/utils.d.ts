import type { TestStatus } from "@playwright/test";
import { Status } from "allure-js-commons";
export declare const statusToAllureStats: (status: TestStatus, expectedStatus: TestStatus) => Status;
