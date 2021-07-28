import util from "util";
import { exec } from "child_process";

const runMigrations = async () => {
  console.log("1");
  const run = util.promisify(exec);
  await run("npx prisma migrate deploy");
  await run("npx prisma generate");
};

runMigrations().then(() => {
  const { main } = require("./main");
  main().catch((err: any) => {
    console.log(err);
    process.exit(1);
  });
  // .finally(() => {
  //    prisma.$disconnect();
  // });
});
