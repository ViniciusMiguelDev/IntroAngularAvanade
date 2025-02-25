"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function ExibirNome(targer) {
    console.log(targer);
}
let Funciorario = class Funciorario {
};
Funciorario = __decorate([
    ExibirNome
], Funciorario);
function apiVersion(version) {
    return (target) => {
        Object.assign(target.prototype, { __version: version, __name: "Vinicius" });
    };
}
function minLength(length) {
    return (target, key) => {
        let _value = target[key];
        const getter = () => _value;
        const setter = (value) => {
            if (value.length < length) {
                console.log(`Error: você não pode criar ${key} com tamanho menor que ${length}`);
            }
            else {
                _value = value;
            }
        };
        Object.defineProperty(target, key, {
            get: getter,
            set: setter
        });
    };
}
let Api = class Api {
    constructor(name) {
        this.name = name;
    }
};
__decorate([
    minLength(10)
], Api.prototype, "name", void 0);
Api = __decorate([
    apiVersion("1.0.0")
], Api);
const api = new Api("Protudos");
console.log(api.name);
//console.log(api.__version);
//console.log(api.__name);
