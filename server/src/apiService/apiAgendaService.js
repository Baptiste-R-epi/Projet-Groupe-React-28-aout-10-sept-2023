const axios = require("axios");

const getAll = async (req) => {
  const page = 1;
  const ev_page = 10;
  const dist_km = "50";
  const search = req.query.search;
  let position = req.query.pos;
  
  if (typeof position !== "string") {
    position = `within_distance(location_coordinates%2CGEOM%27POINT(${position.longitude}%20${position.latitude})%27%2C%20${dist_km}km)`;
  } else {
    position = `(location_region%20LIKE%20%27${position}%27%20OR%20location_city%20LIKE%20%27${position}%27%20OR%20location_department%20LIKE%20%27${position}%27)`;
  }

  const response = await axios.get(
    `https://public.opendatasoft.com/api/explore/v2.1/catalog/datasets/evenements-publics-openagenda/records?select=title_fr%2Cdescription_fr%2Cuid%2Clongdescription_fr%2Cimage%2Cfirstdate_begin%2Clocation_coordinates&where=${position}%20AND%20NOW()%3Cfirstdate_begin${
      search == "" ? "" : "%20AND(" + search + ")"
    }&order_by=firstdate_begin&limit=${ev_page}&offset=${(page - 1) * ev_page}`
  );

  if (response.status === 200) return response.data;

  return [];
};

const getOne = async (req) => {
  const uid = req.query.uid;
  const response = await axios.get(
    `https://public.opendatasoft.com/api/explore/v2.1/catalog/datasets/evenements-publics-openagenda/records?select=*%20&where=uid%3D${uid}`
  );

  if (response.status === 200) {
    return response.data;
  }

  return [];
};

module.exports = { getAll, getOne };
