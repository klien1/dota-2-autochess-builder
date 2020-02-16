import importAll from "../helper/importAll";

const images = importAll(
  require.context("../static/heroImage", false, /.png$/)
);

export default images;
