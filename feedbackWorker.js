"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const fetchFeedbackEntries = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield fetch('http://localhost:3000/feedback');
        const data = yield response.json();
        self.postMessage({ type: 'SUCCESS', payload: data });
    }
    catch (error) {
        self.postMessage({ type: 'ERROR', payload: error });
    }
});
self.addEventListener('message', (event) => {
    if (event.data === 'FETCH_FEEDBACK') {
        fetchFeedbackEntries();
    }
});
