"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = __importDefault(require("express"));
const contacFormProcessUtilities_js_1 = require("../handlers/contacFormProcessUtilities.js");
const router = express_1.default.Router();
exports.router = router;
router.post("/procesa-formulario", contacFormProcessUtilities_js_1.contactFormProcessUtilities.sendResponseToBrowserAfterSubmit);
