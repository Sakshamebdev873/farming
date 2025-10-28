import { defineConfig, env } from "prisma/config";
type ENV =  {
  DATABASE_URL : string;
}
export default defineConfig({
  schema: "prisma/schema.prisma",
  migrations: {
    path: "prisma/migrations",
  },
  engine: "classic",
  datasource: {
    url: env<ENV>("DATABASE_URL"),
  },
});
