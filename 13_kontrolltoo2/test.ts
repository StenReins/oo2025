import { Kiri, Veebiuudis } from "./kirjadeloetelu_2";

test ("Veebiuudis klass ja Kiri klass", () => {
    expect(new Veebiuudis("test", "aias sadas saia", "www.eesti.ee").kirjuta()).toStrictEqual(["test", "aias sadas saia", "www.eesti.ee"]);
    expect(new Kiri("test", "aias sadas saia").kirjuta()).toStrictEqual(["test", "aias sadas saia"]);
});