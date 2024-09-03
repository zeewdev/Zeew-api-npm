import { URLSearchParams } from "node:url";
import { ZeewError } from "../utils/ZeewError";
import { INT } from "../utils/key";
import { Bienvenida } from "./Bienvenida";

export class Card {
  token: string;
  bienvenida: typeof Bienvenida;

  constructor(token: string) {
    if (!token) throw new ZeewError("Debes colocar el token");
    this.token = token;
    this.bienvenida = Bienvenida;
  }

  async render(render: InstanceType<typeof Bienvenida>): Promise<Buffer | undefined> {
    try {
      if (!render) throw new ZeewError("Debes colocar el render");
      if (typeof render === "function")
        throw new ZeewError("Debes colocar el render");
      if (!render.data.estilo)
        throw new ZeewError("Esta propiedad hace render a la bienvenida");
      const jsonB = JSON.stringify(render),
        jsonP = JSON.parse(jsonB);

      const query = new URLSearchParams(jsonP);

      const fet = await fetch(
        `${INT}/bw/${render.data.estilo}?${query.toString()}`,
        {
          headers: {
            token: render.data.token,
          },
        }
      );
      const body = await fet.json();

      if (fet.status == 404) {
        if(typeof body === "string") throw new ZeewError(body);
        if(typeof body === "object" && "mensaje" in body && typeof body.mensaje == "string") throw new ZeewError(body?.mensaje);
      };

      if(Buffer.isBuffer(body)){
        return body;
      };

      return undefined;
    } catch (error) {
      throw new ZeewError(error.message);
    }
  }
}
