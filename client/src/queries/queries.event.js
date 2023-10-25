import axios from "axios";
import { EVENT_URL } from "config/api/url";
import catchAsync from "utils/catchAsync";

export const getAll = catchAsync(async (pos, search = "") => {
  if (!pos) return;

  const response = await axios({
    method: "get",
    url: `${EVENT_URL}`,
    params: { pos, search },
  });
  return response.data;
});

export const getOne = catchAsync(async (uid) => {
  if (!uid) return;

  const response = await axios({
    method: "get",
    url: `${EVENT_URL}/details`,
    params: { uid },
  });
  return response.data;
});
