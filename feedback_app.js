"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const feedback_form_1 = __importDefault(require("./feedback_form"));
const feedback_list_1 = __importDefault(require("./feedback_list"));
const App = () => {
    return (<div>
      <h1>Feedback Management System</h1>
      <feedback_form_1.default />
      <feedback_list_1.default />
    </div>);
};
exports.default = App;
