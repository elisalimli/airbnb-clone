import { main } from "./main";
import { prisma } from "./utils";

main().catch((err: any) => {
  console.log(err);
  process.exit(1);
}).finally(() => {
   prisma.$disconnect();
});
