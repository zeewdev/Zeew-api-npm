import { ZeewError } from "../utils/ZeewError";

export class Bienvenida {
  data: BinvenidasData;

  constructor(data?: BinvenidasData) {
    if(data) this.data = data;
    else this.data = {
      token: "",
      tit: "",
      colortit: "#000000",
      colordesc: "#000000",
      colorCircle: "#000000",
      font: "Arial",
      desc: "",
      avatar: "",
      fondo: "",
      estilo: BienvenidaFormat.Simple
    }
  }


  Token(token: string) {
    this.data.token = token;
    return this;
  }

  Titulo(tit: string) {
    this.data.tit = tit;
    return this;
  }

  ColorTit(ctit: `${string}` | number | [number, number, number]) {
    this.data.colortit = this.colorHex(ctit);
    return this;
  }

  ColorDesc(cdesc: `${string}` | number | [number, number, number]) {
    this.data.colordesc = this.colorHex(cdesc);

    return this;
  }

  Descripcion(desc: string) {
    this.data.desc = desc;

    return this;
  }

  Avatar(avatar: string) {
    this.data.avatar = avatar;
    return this;
  }

  Fondo(fondo: string) {
    this.data.fondo = fondo;
    return this;
  }

  Estilo(estilo: keyof typeof BienvenidaFormat | BienvenidaFormat) {
    if(estilo == "Ani" || estilo == "Anime" || estilo == "Simple" || estilo == "Classic") estilo = BienvenidaFormat[estilo];
    else if(Object.values(BienvenidaFormat).includes(estilo as BienvenidaFormat)) estilo = estilo as BienvenidaFormat;
    else throw new Error("Estilo no valido");

    this.data.estilo = estilo;
    return this;
  }

  ColorCirculo(colorC: `${string}` | number | [number, number, number]) {
    this.data.colorCircle = this.colorHex(colorC);
    return this;
  }

  Font(font: string) {
    this.data.font = font;
    return this;
  }

  private colorHex(color: `${string}` | number | [number, number, number]): `#${string}` {
    let hexColor: string;
  
    if (typeof color === "number") {
      hexColor = color.toString(16).padStart(6, '0');
    } else if (typeof color === "string") {
      color = color.trim().toLowerCase();
      if (color.startsWith("#")) {
        hexColor = color.slice(1).padStart(6, '0');
      } else {
        throw new ZeewError("Invalid color format. String should start with '#'.");
      }
    } else if (Array.isArray(color)) {
      // Convertir array RGB a hexadecimal
      if (color.length === 3) {
        const [r, g, b] = color;
        if (r >= 0 && r <= 255 && g >= 0 && g <= 255 && b >= 0 && b <= 255) {
          hexColor = [r, g, b].map(c => c.toString(16).padStart(2, '0')).join('');
        } else {
          throw new ZeewError("RGB values should be between 0 and 255.");
        }
      } else {
        throw new ZeewError("Invalid RGB array length. Array should have exactly 3 elements.");
      }
    } else {
      throw new ZeewError("Unsupported color type. Use string with '#', number, or RGB array.");
    }
  
    // Asegurarse de que el color es de 6 dígitos
    if (hexColor.length < 6) {
      hexColor = hexColor.padStart(6, '0');
    }
  
    return `#${hexColor}`;
  }
  
}

export enum BienvenidaFormat {
  Classic = "classic",
  Anime = "anime",
  Ani = "ani",
  Simple = "simple",
}


export interface BinvenidasData {
  token: string;
  tit: string;
  colortit: `#${string}`;
  colordesc: `#${string}`;
  desc: string;
  avatar: string;
  fondo: string;
  estilo: BienvenidaFormat;
  colorCircle: `#${string}`;
  font: string;
} 