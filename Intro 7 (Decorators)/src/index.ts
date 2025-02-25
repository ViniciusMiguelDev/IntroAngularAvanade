function ExibirNome(targer: any) {
  console.log(targer);
}

@ExibirNome
class Funciorario {}

function apiVersion(version: string) {
  return (target: any) => {
    Object.assign(target.prototype, { __version: version, __name: "Vinicius" });
  };
}

function minLength(length: number) {
    return (target:any, key: string) => {
        let _value = target[key];
        const getter = () => _value;
        const setter = (value: string) => {
            if(value.length < length) {
                console.log(`Error: você não pode criar ${key} com tamanho menor que ${length}`);
            } else {
                _value = value;
            }
        }
        Object.defineProperty(target, key, {
            get: getter,
            set: setter
        });
    }
}

@apiVersion("1.0.0")
class Api {
  @minLength(10)
  name: string;

  constructor(name: string) {
    this.name = name;
  }
}

const api = new Api("Protudos");
console.log(api.name);
//console.log(api.__version);
//console.log(api.__name);
