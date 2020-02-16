import importAll from "../helper/importAll";

const numbers = importAll(require.context("../static/numbers", false, /.png$/));

export default numbers;
