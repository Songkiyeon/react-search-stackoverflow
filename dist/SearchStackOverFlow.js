"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.trigger = exports.SearchStackOverFlow = void 0;
var react_1 = __importStar(require("react"));
var axios_1 = __importDefault(require("axios"));
var styled_components_1 = __importDefault(require("styled-components"));
var material_1 = require("@mui/material");
var Loading_1 = __importDefault(require("./Loading"));
var host = "https://api.stackexchange.com/search/advanced";
var trigger;
exports.trigger = trigger;
var SC = {
    Container: styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    position: fixed;\n    top: 0;\n    left: 0;\n    width: 100vw;\n    height: 100vh;\n    background-color: #00000084;\n  "], ["\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    position: fixed;\n    top: 0;\n    left: 0;\n    width: 100vw;\n    height: 100vh;\n    background-color: #00000084;\n  "]))),
    Wrapper: styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    display: flex;\n    flex-direction: column;\n\n    width: ", ";\n    height: ", ";\n    padding: 20px;\n    border-radius: 20px;\n    background-color: white;\n    box-shadow: 2px 4px 18px -5px black;\n  "], ["\n    display: flex;\n    flex-direction: column;\n\n    width: ", ";\n    height: ", ";\n    padding: 20px;\n    border-radius: 20px;\n    background-color: white;\n    box-shadow: 2px 4px 18px -5px black;\n  "])), function (props) { var _a; return (_a = props.width) !== null && _a !== void 0 ? _a : "500px"; }, function (props) { var _a; return (_a = props.height) !== null && _a !== void 0 ? _a : "500px"; }),
    Title: styled_components_1.default.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n    flex-grow: 0;\n    flex-shrink: 0;\n    font-size: 20px;\n  "], ["\n    flex-grow: 0;\n    flex-shrink: 0;\n    font-size: 20px;\n  "]))),
    Line: styled_components_1.default.div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n    flex-grow: 0;\n    flex-shrink: 0;\n    width: 100%;\n    height: 1px;\n    margin: 10px 0px;\n    background-color: gray;\n  "], ["\n    flex-grow: 0;\n    flex-shrink: 0;\n    width: 100%;\n    height: 1px;\n    margin: 10px 0px;\n    background-color: gray;\n  "]))),
    Contents: styled_components_1.default.div(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 10px;\n    overflow: auto;\n    width: 100%;\n    > * {\n      flex-grow: 0;\n      flex-shrink: 0;\n    }\n  "], ["\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 10px;\n    overflow: auto;\n    width: 100%;\n    > * {\n      flex-grow: 0;\n      flex-shrink: 0;\n    }\n  "]))),
    Footer: styled_components_1.default.div(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n    flex-grow: 0;\n    flex-shrink: 0;\n    display: flex;\n    justify-content: flex-end;\n    width: 100%;\n  "], ["\n    flex-grow: 0;\n    flex-shrink: 0;\n    display: flex;\n    justify-content: flex-end;\n    width: 100%;\n  "]))),
    Item: styled_components_1.default.div(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n    display: flex;\n    width: 100%;\n    height: 100px;\n    > .left {\n      flex-grow: 0;\n      flex-shrink: 0;\n      width: 100px;\n      height: 100%;\n\n      img {\n        width: 100px;\n        height: 100px;\n        object-fit: cover;\n      }\n    }\n    > .right {\n      width: calc(100% - 120px);\n      height: calc(100% - 20px);\n      padding: 10px;\n\n      > .title {\n        display: -webkit-box;\n        -webkit-line-clamp: 2;\n        -webkit-box-orient: vertical;\n        word-wrap: break-word;\n        overflow: hidden;\n        text-overflow: ellipsis;\n        font-size: 18px;\n        margin-bottom: 5px;\n        cursor: pointer;\n\n        &:active {\n          color: grey;\n        }\n      }\n\n      > .owner {\n        font-size: 14px;\n        color: gray;\n      }\n    }\n  "], ["\n    display: flex;\n    width: 100%;\n    height: 100px;\n    > .left {\n      flex-grow: 0;\n      flex-shrink: 0;\n      width: 100px;\n      height: 100%;\n\n      img {\n        width: 100px;\n        height: 100px;\n        object-fit: cover;\n      }\n    }\n    > .right {\n      width: calc(100% - 120px);\n      height: calc(100% - 20px);\n      padding: 10px;\n\n      > .title {\n        display: -webkit-box;\n        -webkit-line-clamp: 2;\n        -webkit-box-orient: vertical;\n        word-wrap: break-word;\n        overflow: hidden;\n        text-overflow: ellipsis;\n        font-size: 18px;\n        margin-bottom: 5px;\n        cursor: pointer;\n\n        &:active {\n          color: grey;\n        }\n      }\n\n      > .owner {\n        font-size: 14px;\n        color: gray;\n      }\n    }\n  "]))),
};
function SearchStackOverFlow(props) {
    var _this = this;
    var _a;
    var _b = react_1.useState([]), items = _b[0], setItems = _b[1];
    var _c = react_1.useState(false), active = _c[0], setActive = _c[1];
    var _d = react_1.useState(null), contents = _d[0], setContents = _d[1];
    var handleSearch = function (title, key) {
        if (key === void 0) { key = ""; }
        return __awaiter(_this, void 0, void 0, function () {
            var response, data, items;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        setActive(true);
                        setContents(react_1.default.createElement(Loading_1.default, null));
                        return [4 /*yield*/, axios_1.default.get(host + "?site=" + "stackoverflow.com" + "&title=" + title + "&key=" + key)];
                    case 1:
                        response = _a.sent();
                        data = response.data;
                        items = data.items;
                        setItems(items);
                        return [2 /*return*/];
                }
            });
        });
    };
    var handleClose = function () { return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            setActive(false);
            setItems([]);
            return [2 /*return*/];
        });
    }); };
    react_1.useEffect(function () {
        exports.trigger = trigger = handleSearch;
    }, []);
    react_1.useEffect(function () {
        var result = items.map(function (el, index) { return (react_1.default.createElement(SC.Item, { key: "search-items-" + index },
            react_1.default.createElement("div", { className: "left" },
                react_1.default.createElement("img", { src: el.owner.profile_image, alt: "userImg" })),
            react_1.default.createElement("div", { className: "right" },
                react_1.default.createElement("div", { className: "title", onClick: function () {
                        window.open(el.link);
                    } }, el.title),
                react_1.default.createElement("div", { className: "owner" },
                    "by. ",
                    el.owner.display_name)))); });
        setContents(result);
    }, [items]);
    return (react_1.default.createElement(react_1.default.Fragment, null, active && (react_1.default.createElement(SC.Container, null,
        react_1.default.createElement(SC.Wrapper, null,
            react_1.default.createElement(SC.Title, null, (_a = props.title) !== null && _a !== void 0 ? _a : "Search Result"),
            react_1.default.createElement(SC.Line, null),
            react_1.default.createElement(SC.Contents, null, contents),
            react_1.default.createElement(SC.Line, null),
            react_1.default.createElement(SC.Footer, null,
                react_1.default.createElement(material_1.Button, { variant: "outlined", onClick: handleClose }, "close")))))));
}
exports.SearchStackOverFlow = SearchStackOverFlow;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7;
