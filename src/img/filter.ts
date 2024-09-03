import { ZeewError } from "../utils/ZeewError";
import { request } from "../utils/request";
import { INT } from "../utils/key";

export class Filter {
  private token: string;
  private uri: string;

  constructor(token: string) {
    if (!token) throw new ZeewError("Debes colocar el token");
    this.token = token;
    this.uri = INT + "/img";
  }

  /**
   * @param {string} img URL de una imagen
   */
  async triggered(img: string): Promise<Buffer> {
    if (!img) throw new ZeewError("Debes colocar una imagen");

    const query = new URLSearchParams({
        avatar: img,
      }),
      body = await request(
        this.uri + "/triggered?" + query.toString(),
        this.token
      );

    if (body.status === "404") throw new ZeewError(body.mensaje!);

    return body;
  }

  /**
   *
   * @param {string} img URL | URI de una imagen
   */
  async sepia(img: string): Promise<Buffer> {
    if (!img) throw new ZeewError("Debes colocar una imagen");

    const query = new URLSearchParams({
        avatar: img,
      }),
      body = await request(this.uri + "/sepia?" + query.toString(), this.token);

    if (body.status === "404") throw new ZeewError(body.mensaje);
    return body;
  }
  /**
   *
   * @param {string} img URL | URI de una imagen
   */
  async invertir(img: string): Promise<Buffer> {
    if (!img) throw new ZeewError("Debes colocar una imagen");

    const query = new URLSearchParams({
        avatar: img,
      }),
      body = await request(
        this.uri + "/invertir?" + query.toString(),
        this.token
      );

    if (body.status === "404") throw new ZeewError(body.mensaje);
    return body;
  }

  /**
   *
   * @param {string} img URL | URI de una imagen
   */
  async gris(img: string): Promise<Buffer> {
    if (!img) throw new ZeewError("Debes colocar una imagen");

    const query = new URLSearchParams({
        avatar: img,
      }),
      body = await request(this.uri + "/gris?" + query.toString(), this.token);

    if (body.status === "404") throw new ZeewError(body.mensaje);
    return body;
  }

  /**
   *
   * @param {string} img URL | URI de una imagen
   * @param {number} pixel Cantidad de desenfoque
   */
  async desenfoque(img: string, pixel: number = 5) {
    if (!img) throw new ZeewError("Debes colocar una imagen");

    const query = new URLSearchParams({
        avatar: img,
        pixel: pixel.toString(),
      }),
      body = await request(
        this.uri + "/desenfoque?" + query.toString(),
        this.token
      );

    if (body.status === "404") throw new ZeewError(body.mensaje);
    return body;
  }

  /**
   *
   * @param {string} img URL | URI de una imagen
   * @param {number} pixel Tamaño del pixel
   */
  async pixel(img: string, pixel: number = 10) {
    if (!img) throw new ZeewError("Debes colocar una imagen");

    const query = new URLSearchParams({
        avatar: img,
        pixel: pixel.toString(),
      }),
      body = await request(this.uri + "/pixel?" + query.toString(), this.token);

    if (body.status === "404") throw new ZeewError(body.mensaje);
    return body;
  }

  /**
   * @param {string} img URL | URI de una imagen
   */
  async gay(img: string) {
    if (!img) throw new ZeewError("Debes colocar una imagen");

    const query = new URLSearchParams({
        avatar: img,
      }),
      body = await request(this.uri + "/gay?" + query.toString(), this.token);

    if (body.status === "404") throw new ZeewError(body.mensaje);
    return body;
  }

  /**
   * @param {string} img URL | URL de una imagen
   */
  async circulo(img: string) {
    if (!img) throw new ZeewError("Debes colocar una imagen");

    const query = new URLSearchParams({
        avatar: img,
      }),
      body = await request(
        this.uri + "/circulo?" + query.toString(),
        this.token
      );

    if (body.status === "404") throw new ZeewError(body.mensaje);
    return body;
  }
  async shipeo(img1: string, img2: string, ship: string) {
    if (!img1) throw new ZeewError("Debes colocar una imagen");
    if (!img2) throw new ZeewError("Debes colocar una imagen");
    if (!ship) throw new ZeewError("Debes colocar una imagen");

    const query = new URLSearchParams({
        avatar: img1,
        avatar2: img2,
        ship,
      }),
      body = await request(
        this.uri + "/shipeo?" + query.toString(),
        this.token
      );

    if (body.status === "404") throw new ZeewError(body.mensaje);
    return body;
  }
}
