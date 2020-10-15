import ArenaStore from "./arena-create";
import arenaService from '../../api/arena-service'

export default {
  namespaced: true,
  ...ArenaStore({ arenaService }),
};
