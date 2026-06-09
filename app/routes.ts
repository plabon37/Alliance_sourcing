import {
  type RouteConfig,
  route,
  index,
  layout,
} from "@react-router/dev/routes";

export default [
  layout("../layouts/MainLayouts.tsx", [
    index("./routes/home.tsx"),

    route("about", "./routes/about.tsx"),
  ]),
] satisfies RouteConfig;