import { BaseService } from "../base";

export class PokemonService extends BaseService {
  constructor() {
    super("pokemon");
  }

  static getPokemonById(id) {
    try {
      return super.get(`pokemon/${id}`);
    } catch (error) {
      return error.response.data.message;
    }
  }

  static getPokemonByName(name) {
    try {
      return super.get(`pokemon/${name}`);
    } catch (error) {
      return error.response.data.message;
    }
  }

  static getPokemonListByType(type) {
    try {
      return super.get(`type/${type}`);
    } catch (error) {
      return error.response.data.message;
    }
  }
}
