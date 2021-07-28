import { main } from "./main";

main().catch((err) => {
  console.log(err);
  process.exit(1);
});
// .finally(() => {
//    prisma.$disconnect();
// });
