/**
 * Realiza a importação da configuração.
 */
 export let ENV: any = {};

 /**
 * URL em que as requisições à API serão realizadas.
 */
export let SERVER_API_URL = '';

/*
|-----------------------------------------------------------------------------|
| Funções para definição de valores das variáveis                             |
|-----------------------------------------------------------------------------|
*/

export function browser(f: any): void {
    if (typeof window !== 'undefined') {
        f();
    }
}

/*
|-----------------------------------------------------------------------------|
| Scripts para definição de valores das variáveis                             |
|-----------------------------------------------------------------------------|
*/

browser(() => {
    let envJson = sessionStorage.getItem('ENV');
    ENV = envJson !== null ? JSON.parse(envJson) : {};
    if (ENV === null) {
        location.reload();
    }
    SERVER_API_URL = ENV.backend.host;
});